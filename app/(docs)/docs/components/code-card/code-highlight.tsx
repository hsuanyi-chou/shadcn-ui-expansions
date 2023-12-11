'use client';
import React, { useState } from 'react';
import Highlight from 'react-highlight';
import 'highlight.js/styles/atom-one-dark.css';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CodeHighlightProps {
  code?: string;
  /** 在 tabContent 時，因多了一層 div，會讓按鈕看起來更縮進 */
  inTab?: boolean;
}

const CodeHighlight = ({ code, inTab = false }: CodeHighlightProps) => {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative rounded-md">
      <Button
        className={cn('absolute right-4 top-4 bg-secondary', inTab && 'right-1 top-1')}
        variant="ghost"
        onClick={() => {
          navigator.clipboard.writeText(code || '');
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 3000);
        }}
      >
        {copied ? <Check className="text-green-600 dark:text-green-500" /> : <Copy />}
      </Button>
      <div className="max-h-[400px] overflow-auto rounded-md">
        <Highlight className="tsx h-full">{code}</Highlight>
      </div>
    </div>
  );
};

export default CodeHighlight;
