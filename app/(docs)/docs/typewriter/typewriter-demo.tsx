'use client';

import { Button } from '@/components/ui/button';
import { Typewriter } from '@/components/ui/typewriter';
import Link from 'next/link';

export default function TypewriterDemo() {
  return (
    <div className="p-4">
      <Typewriter>
        <div className="flex flex-col gap-2">
          This is typewriter effect demo text.
          <strong>And Here is bold text.</strong>
          <span className="line-through">A line-through text.</span>
          <span className="italic">An italic text.</span>
          <Link className="text-blue-500 underline hover:text-red-400" href="/docs" target="_blank">
            A link. Hover me to see the color change!
          </Link>
          <span>
            And <span className="text-green-600">green text</span>. You can fully control your style
            with typewriter effect!
          </span>
        </div>
        <div>
          <span>Following is shopping list.</span>
          <ol className="list-decimal pl-10">
            <li>banana</li>
            <li>orange</li>
            <li>apple</li>
            <li>grapes</li>
          </ol>
        </div>
        <div>
          <Button
            onClick={() => {
              alert('hello!');
            }}
          >
            Surprise? button also works! try clicking me
          </Button>
        </div>
      </Typewriter>
    </div>
  );
}
