'use client';
import React, { useState } from 'react';
import Highlight from 'react-highlight';
import 'highlight.js/styles/atom-one-dark.css';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';

// TODO: Copy 按鈕會被滾動

const CodeHighlight = ({ code }: { code: string }) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative max-h-[400px] overflow-auto">
      <Button
        className="absolute right-2 top-2 bg-secondary"
        variant="ghost"
        onClick={() => {
          navigator.clipboard.writeText(code);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 3000);
        }}
      >
        {copied ? <Check className="text-green-600 dark:text-green-500" /> : <Copy />}
      </Button>
      <Highlight className="tsx">{code}</Highlight>
    </div>
  );
};

export default CodeHighlight;
