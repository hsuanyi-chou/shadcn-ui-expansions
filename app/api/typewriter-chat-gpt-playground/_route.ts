import { type NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

type IBody = {
  prompt: string;
  token: string;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as IBody;

    if (!body) {
      return NextResponse.json({ error: 'body should not be empty.' }, { status: 400 });
    }

    const { prompt, token } = body;

    if (typeof prompt !== 'string' || typeof token !== 'string') {
      return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
    }

    const openai = new OpenAI({
      apiKey: token,
    });

    const chatResponse = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      stream: true,
      temperature: 0.7,
    });

    const encoder = new TextEncoder();
    let responseText = '';

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of chatResponse) {
          if (typeof chunk === 'object') {
            const typedChunk = chunk as OpenAIResponse;
            const lastContent = typedChunk.choices[typedChunk.choices.length - 1].delta.content;
            if (!lastContent) {
              continue;
            }
            responseText += lastContent;
            controller.enqueue(encoder.encode(lastContent));
          }
        }
        controller.close();
        // You can save the AI response to your database here.
        console.log(responseText);
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    });
  } catch (err) {
    const error = err as Error;
    console.error(`route '/typewriter-chat-gpt-playground' error: ${JSON.stringify(error)}`);
    return NextResponse.json({ message: 'unexpected error', error }, { status: 400 });
  }
}

type OpenAIResponse = {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: {
    index: number;
    logprobs: null;
    finish_reason: 'stop' | null;
    delta: {
      role: 'assistant' | 'user';
      content: string;
      refusal: null;
    };
  }[];
};
