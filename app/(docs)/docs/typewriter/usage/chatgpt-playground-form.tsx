import { Input } from '@/components/ui/input';
import { LoadingButton } from '@/components/ui/loading-button';
import { useState } from 'react';

type ChatGPTPlaygroundFormProps = {
  streamingResponse?: (props: { res: string; reset: boolean }) => void;
};

export default function ChatGPTPlaygroundForm({ streamingResponse }: ChatGPTPlaygroundFormProps) {
  const [token, setToken] = useState('');
  const [prompt, setPrompt] = useState('');

  const submit = async () => {
    if (!token || !prompt) {
      alert('Please enter both token and prompt');
      return;
    }
    streamingResponse?.({ res: '', reset: true });

    const res = await fetch('/api/typewriter-chat-gpt-playground', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        token,
      }),
    });

    if (!res.ok) {
      const resJson = await res.json();

      alert(`response not ok, ${resJson.message}`);
      return;
    }

    // Establish a new SSE connection from the response.
    const reader = res.body?.getReader();
    if (!reader) {
      console.log('reader not found', reader);
      return;
    }
    const decoder = new TextDecoder();
    while (true) {
      let appendText = '';
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      appendText = decoder.decode(value);
      streamingResponse?.({ res: appendText, reset: false });
    }
  };

  return (
    <form className="flex flex-col gap-2">
      <div className="flex flex-col gap-2">
        <label htmlFor="token">Enter your OpenAI token:</label>
        <Input
          type="text"
          id="token"
          onChange={(e) => setToken(e.target.value)}
          placeholder="Your OpenAI token. I will not store it."
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="prompt">Enter your prompt:</label>
        <Input
          type="text"
          id="prompt"
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Your prompt. e.g. Give me a few benefits of sun exposure."
        />
      </div>
      <LoadingButton type="button" onClick={() => submit()}>
        Submit
      </LoadingButton>
    </form>
  );
}
