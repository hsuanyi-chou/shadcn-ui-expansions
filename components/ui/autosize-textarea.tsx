'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';

interface UseAutosizeTextAreaProps {
  textAreaRef: HTMLTextAreaElement | null;
  minHeight?: number;
  maxHeight?: number;
  triggerAutoSize: string;
}

export const useAutosizeTextArea = ({
  textAreaRef,
  triggerAutoSize,
  maxHeight = Number.MAX_SAFE_INTEGER,
  minHeight = 0,
}: UseAutosizeTextAreaProps) => {
  const [init, setInit] = React.useState(true);
  React.useEffect(() => {
    // We need to reset the height momentarily to get the correct scrollHeight for the textarea
    const offsetBorder = 2;
    if (textAreaRef) {
      if (init) {
        textAreaRef.style.minHeight = `${minHeight + offsetBorder}px`;
        if (maxHeight > minHeight) {
          textAreaRef.style.maxHeight = `${maxHeight}px`;
        }
        setInit(false);
      }
      textAreaRef.style.height = `${minHeight + offsetBorder}px`;
      const scrollHeight = textAreaRef.scrollHeight;
      // We then set the height directly, outside of the render loop
      // Trying to set this with state or a ref will product an incorrect value.
      if (scrollHeight > maxHeight) {
        textAreaRef.style.height = `${maxHeight}px`;
      } else {
        textAreaRef.style.height = `${scrollHeight + offsetBorder}px`;
      }
    }
  }, [textAreaRef, triggerAutoSize]);
};

type AutosizeTextAreaProps = {
  maxHeight?: number;
  minHeight?: number;
} & React.AreaHTMLAttributes<HTMLTextAreaElement>;
export const AutosizeTextarea = ({
  maxHeight = Number.MAX_SAFE_INTEGER,
  minHeight = 52,
  className,
  onChange,
  ...props
}: AutosizeTextAreaProps) => {
  const ref = React.useRef<HTMLTextAreaElement | null>(null);
  const [triggerAutoSize, setTriggerAutoSize] = React.useState('');

  useAutosizeTextArea({
    textAreaRef: ref.current,
    triggerAutoSize: triggerAutoSize,
    maxHeight,
    minHeight,
  });

  return (
    <textarea
      ref={ref}
      className={cn(
        'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      onChange={(e) => {
        setTriggerAutoSize(e.target.value);
        onChange?.(e);
      }}
      {...props}
    />
  );
};
