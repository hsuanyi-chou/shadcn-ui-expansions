'use client';
import { cn } from '@/lib/utils';
import React, { useEffect, useRef, useState } from 'react';

export const FlashCursor = ({
  hideCursor,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { hideCursor?: boolean }) => {
  return (
    <span
      className={cn(
        'animate-blink border-r-4 border-r-primary/60 pl-1 text-transparent',
        className,
        hideCursor && 'hidden',
      )}
      {...props}
    />
  );
};

type TypewriterProps = {
  htmlString?: string;
  delay?: number;
  className?: string;
  onComplete?: () => void;
};

const TYPE_SPEED = 33;

export const Typewriter = ({
  htmlString = '',
  delay = TYPE_SPEED,
  onComplete,
  className,
}: TypewriterProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    /***
     * Each time htmlString changes,
     * only add new characters from the end of the currently displayed text.
     */
    const startTyping = () => {
      let currentIndex = displayedText.length;
      intervalRef.current = setInterval(() => {
        if (currentIndex < htmlString.length) {
          // Only add new characters, do not reset old text
          setDisplayedText(htmlString.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
          }
          onComplete?.();
        }
      }, delay);
    };

    // If there is new text, start typing animation
    if (htmlString.length > displayedText.length) {
      // Start typing immediately, no need to wait for delay
      startTyping();
    }
    // If targetText decreases or resets, consider handling it自行處理
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [htmlString, delay]);

  return (
    <div>
      <span
        className={cn('whitespace-pre-wrap leading-7 text-primary', className)}
        dangerouslySetInnerHTML={{ __html: displayedText }}
      />
      <FlashCursor hideCursor={displayedText === htmlString} />
    </div>
  );
};
