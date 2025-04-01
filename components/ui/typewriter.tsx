'use client';
import { cn } from '@/lib/utils';
import React, { ReactNode, useEffect, useMemo, useRef, useState } from 'react';

// --- Helper Function to Count Characters in React Nodes ---
const countChars = (node: ReactNode): number => {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node).length;
  }
  if (Array.isArray(node)) {
    return node.reduce((sum, child) => sum + countChars(child), 0);
  }
  if (React.isValidElement(node)) {
    // Ensure props.children exists before mapping
    return countChars((node.props as React.PropsWithChildren).children);
  }
  return 0;
};

// --- Recursive Function to Render Nodes Progressively ---
const renderProgressivelyInternal = (
  node: ReactNode,
  remainingChars: number,
): [ReactNode | null, number] => {
  if (remainingChars <= 0) {
    return [null, 0]; // No characters left to render
  }

  // 1. Handle String/Number Nodes
  if (typeof node === 'string' || typeof node === 'number') {
    const text = String(node);
    const charsToRender = Math.min(text.length, remainingChars);
    return [text.substring(0, charsToRender), charsToRender];
  }

  // 2. Handle Array Nodes
  if (Array.isArray(node)) {
    let consumedCount = 0;
    const renderedChildren: ReactNode[] = [];
    for (let i = 0; i < node.length; i++) {
      const child = node[i];
      const [renderedChild, consumed] = renderProgressivelyInternal(
        child,
        remainingChars - consumedCount,
      );
      if (renderedChild !== null) {
        // Use index as key for stable rendering during typing
        renderedChildren.push(
          React.cloneElement(<> {/* Fragment for key */} </>, { key: i }, renderedChild),
        );
      }
      consumedCount += consumed;
      if (consumedCount >= remainingChars) {
        break; // Stop processing siblings if no chars left
      }
    }
    // Return array only if it contains rendered elements
    return [renderedChildren.length > 0 ? renderedChildren : null, consumedCount];
  }

  // 3. Handle React Element Nodes
  if (React.isValidElement(node)) {
    let consumedCount = 0;
    const renderedChildren: ReactNode[] = [];

    // Use React.Children.map for robust iteration and key handling
    React.Children.forEach((node.props as React.PropsWithChildren).children, (child) => {
      if (consumedCount >= remainingChars) {
        return; // Skip further children if chars are depleted
      }
      const [renderedChild, consumed] = renderProgressivelyInternal(
        child,
        remainingChars - consumedCount,
      );

      if (renderedChild !== null) {
        // If the child is a simple string/number, React.Children.map might not require explicit key
        // But for elements potentially re-rendered, adding a key is safer.
        // However, simple fragments often work well here if direct children are stable.
        renderedChildren.push(renderedChild);
      }
      consumedCount += consumed;
    });

    // Only render the element wrapper if its children consumed characters
    if (consumedCount > 0) {
      // Clone the original element, keeping its type and props, but replace children
      // Add key from original element if available, otherwise let React handle it
      const key = node.key !== null ? node.key : undefined;
      return [
        React.cloneElement(
          node,
          { ...(node.props as React.PropsWithChildren), key: key },
          renderedChildren,
        ),
        consumedCount,
      ];
    } else {
      return [null, 0]; // Element is not rendered yet as no children are visible
    }
  }

  // 4. Handle Null/Undefined/Boolean (render nothing)
  return [null, 0];
};

type TypewriterProps = {
  children: ReactNode;
  typeSpeed?: number;
  className?: string;
  onComplete?: () => void;
};

export const Typewriter = ({
  children,
  typeSpeed = 40,
  onComplete,
  className,
}: TypewriterProps) => {
  const [displayedCharsCount, setDisplayedCharsCount] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const onCompleteRef = useRef(onComplete); // Ref to store the latest onComplete

  // Keep onComplete callback reference up-to-date without causing effect re-runs
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  // Calculate total characters needed only when children change
  const totalChars = useMemo(() => countChars(children), [children]);

  // Effect to handle the typing interval
  useEffect(() => {
    // Reset when children change
    setDisplayedCharsCount(0);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start typing if needed
    if (totalChars > 0) {
      intervalRef.current = setInterval(() => {
        setDisplayedCharsCount((prevCount) => {
          const nextCount = prevCount + 1;
          if (nextCount >= totalChars) {
            clearInterval(intervalRef.current!);
            intervalRef.current = null;
            // Use the ref to call the latest onComplete
            onCompleteRef.current?.();
            return totalChars; // Ensure count stops exactly at total
          }
          return nextCount;
        });
      }, typeSpeed);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [children, typeSpeed, totalChars]);

  // Memoize the progressive rendering calculation
  const displayedContent = useMemo(() => {
    const [content] = renderProgressivelyInternal(children, displayedCharsCount);
    return content;
  }, [children, displayedCharsCount]);

  return (
    <div className={cn('whitespace-pre-wrap align-bottom leading-7 text-primary', className)}>
      {displayedContent}
    </div>
  );
};
