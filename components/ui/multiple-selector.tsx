'use client';

import * as React from 'react';
import { X } from 'lucide-react';

import { Command, CommandGroup, CommandItem } from '@/components/ui/command';
import { Command as CommandPrimitive } from 'cmdk';
import { useEffect } from 'react';
import { Badge } from '@/components/ui/badge';

interface Option {
  value: string;
  label: string;
}

interface MultipleSelectorProps {
  options?: Option[];
  /** 查詢時的 loading 組件 */
  loading?: React.ReactNode;
  /** 輸入完文字後，延遲多久才查詢 */
  delay?: number;
  /** 發 API 取得選單 */
  onSearch?: () => Promise<void>;
}

export function useDebounce<T>(value: T, delay?: number): T {
  const [debouncedValue, setDebouncedValue] = React.useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay || 500);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default function MultipleSelector({
  options = [],
  loading,
  delay,
  onSearch,
}: MultipleSelectorProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [selected, setSelected] = React.useState<Option[]>([]);

  const [inputValue, setInputValue] = React.useState('');
  const debouncedSearchTerm = useDebounce(inputValue, delay || 300);

  const handleUnselect = React.useCallback((framework: Option) => {
    setSelected((prev) => prev.filter((s) => s.value !== framework.value));
  }, []);

  const handleKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const input = inputRef.current;
    if (input) {
      if (e.key === 'Delete' || e.key === 'Backspace') {
        if (input.value === '') {
          setSelected((prev) => {
            const newSelected = [...prev];
            newSelected.pop();
            return newSelected;
          });
        }
      }
      // This is not a default behaviour of the <input /> field
      if (e.key === 'Escape') {
        input.blur();
      }
    }
  }, []);

  useEffect(() => {
    const exec = async () => {
      if (!debouncedSearchTerm || !onSearch) return;
      setIsLoading(true);
      await onSearch?.();
      setIsLoading(false);
    };

    void exec();
  }, [debouncedSearchTerm]);

  const selectables = options.filter((framework) => !selected.includes(framework));

  return (
    <Command onKeyDown={handleKeyDown} className="overflow-visible bg-transparent">
      <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {selected.map((framework) => {
            return (
              <Badge key={framework.value}>
                {framework.label}
                <button
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleUnselect(framework);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(framework)}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            );
          })}
          {/* Avoid having the "Search" Icon */}
          <CommandPrimitive.Input
            ref={inputRef}
            value={inputValue}
            onValueChange={setInputValue}
            onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder="Select frameworks..."
            className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open ? (
          <div className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
            {isLoading ? (
              <>{loading}</>
            ) : (
              <CommandGroup className="h-full overflow-auto">
                {selectables.map((framework) => {
                  return (
                    <CommandItem
                      key={framework.value}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onSelect={(value) => {
                        setInputValue('');
                        setSelected((prev) => [...prev, framework]);
                      }}
                      className="cursor-pointer"
                    >
                      {framework.label}
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            )}
          </div>
        ) : null}
      </div>
    </Command>
  );
}
