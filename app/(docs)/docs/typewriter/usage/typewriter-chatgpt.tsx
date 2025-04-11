'use client';
import { Typewriter } from '@/components/ui/typewriter';
import { useState } from 'react';
import ChatGPTPlaygroundForm from './chatgpt-playground-form';

export default function TypewriterChatGPT() {
  const [response, setResponse] = useState('');
  const [mounted, setMounted] = useState(false);

  return (
    <div className="flex w-full flex-col gap-2">
      <ChatGPTPlaygroundForm
        streamingResponse={({ res, reset }) => {
          if (reset) {
            setResponse('');
            setMounted(false);
          } else {
            setMounted(true);
            setResponse((prev) => prev + res);
          }
        }}
      />
      {mounted && <Typewriter text={response} renderMarkdown className="prose" />}
    </div>
  );
}
