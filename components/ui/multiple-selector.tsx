'use client';

import * as React from 'react';
import { X } from 'lucide-react';

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandEmpty,
  CommandList,
} from '@/components/ui/command';
import { Command as CommandPrimitive } from 'cmdk';
import { useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export interface Option {
  value: string;
  label: string;
  disable?: boolean;
}

interface MultipleSelectorProps {
  value?: Option[];
  options?: Option[];
  placeholder?: string;
  /** loading component */
  loadingIndicator?: React.ReactNode;
  /** empty component */
  emptyIndicator?: React.ReactNode;
  /** debounce time for async search */
  delay?: number;
  /** async search */
  onSearch?: (value: string) => Promise<void>;
  onChange?: (options: Option[]) => void;
  maxSelected?: number;
  onMaxSelected?: (maxLimit: number) => void;
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
  value,
  onChange,
  placeholder,
  options = [],
  delay,
  onSearch,
  loadingIndicator,
  emptyIndicator,
  maxSelected = Number.MAX_SAFE_INTEGER,
  onMaxSelected,
}: MultipleSelectorProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [open, setOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [selected, setSelected] = React.useState<Option[]>(value || []);

  const [inputValue, setInputValue] = React.useState('');
  const debouncedSearchTerm = useDebounce(inputValue, delay || 500);

  const handleUnselect = React.useCallback(
    (option: Option) => {
      const newOptions = selected.filter((s) => s.value !== option.value);
      setSelected(newOptions);
      onChange?.(newOptions);
    },
    [selected],
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;
      if (input) {
        if (e.key === 'Delete' || e.key === 'Backspace') {
          if (input.value === '' && selected.length > 0) {
            handleUnselect(selected[selected.length - 1]);
          }
        }
        // This is not a default behaviour of the <input /> field
        if (e.key === 'Escape') {
          input.blur();
        }
      }
    },
    [selected],
  );

  useEffect(() => {
    if (value) {
      setSelected(value);
    }
  }, [value]);

  useEffect(() => {
    const exec = async () => {
      if (!debouncedSearchTerm || !onSearch) return;
      setIsLoading(true);
      await onSearch?.(debouncedSearchTerm);
      setIsLoading(false);
    };

    void exec();
  }, [debouncedSearchTerm]);

  const selectables = options.filter(
    (option) => !selected.find((sel) => sel.value === option.value),
  );

  return (
    <Command
      onKeyDown={handleKeyDown}
      className="overflow-visible bg-transparent"
      shouldFilter={!onSearch} // when onSearch is provided, we don't want to filter the options.
    >
      <div className="group rounded-md border border-input px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        <div className="flex flex-wrap gap-1">
          {selected.map((option) => {
            return (
              <Badge key={option.value}>
                {option.label}
                <button
                  className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleUnselect(option);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={() => handleUnselect(option)}
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
            // onBlur={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            placeholder={placeholder}
            className="ml-2 flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>
      <div className="relative mt-2">
        {open ? (
          <CommandList className="absolute top-0 z-10 w-full rounded-md border bg-popover text-popover-foreground shadow-md outline-none animate-in">
            {isLoading ? (
              <>{loadingIndicator}</>
            ) : (
              <>
                <CommandEmpty>{emptyIndicator}</CommandEmpty>
                <CommandGroup className="h-full overflow-auto">
                  <>
                    {onSearch && options.length === 0 && (
                      <CommandItem disabled>{emptyIndicator}</CommandItem>
                    )}
                    {selectables.map((option) => {
                      return (
                        <CommandItem
                          key={option.value}
                          disabled={option.disable}
                          onMouseDown={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          onSelect={(value) => {
                            if (selected.length >= maxSelected) {
                              onMaxSelected?.(selected.length);
                              return;
                            }
                            setInputValue('');
                            const newOptions = [...selected, option];
                            setSelected(newOptions);
                            onChange?.(newOptions);
                          }}
                          className={cn(
                            'cursor-pointer',
                            option.disable && 'cursor-default text-muted-foreground',
                          )}
                        >
                          {option.label}
                        </CommandItem>
                      );
                    })}
                  </>
                </CommandGroup>
              </>
            )}
          </CommandList>
        ) : null}
      </div>
    </Command>
  );
}
