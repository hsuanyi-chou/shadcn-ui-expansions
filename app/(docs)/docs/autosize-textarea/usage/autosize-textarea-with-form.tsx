'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import * as React from 'react';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { useAutosizeTextArea } from '@/components/ui/autosize-textarea';
import { LoadingButton } from '@/components/ui/loading-button';
import { InlineCode } from '@/components/ui/inline-code';

const FormSchema = z.object({
  bio: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
    }),
});

const AutosizeTextareaWithForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const [loading, setLoading] = React.useState(false);

  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const [triggerAutoSize, setTriggerAutoSize] = React.useState('');
  useAutosizeTextArea({
    textAreaRef: textAreaRef?.current,
    triggerAutoSize: triggerAutoSize,
    minHeight: 52,
    maxHeight: 200,
  });

  /** You can use `form.watch` to trigger auto sizing. */
  const bio = form.watch('bio');
  React.useEffect(() => {
    if (textAreaRef.current) {
      setTriggerAutoSize(bio);
    }
  }, [bio]);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast({
        title: 'Your submitted data',
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
            <code className="text-white">{JSON.stringify(data, null, 2)}</code>
          </pre>
        ),
      });
    }, 500);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  {...field}
                  ref={textAreaRef}
                />
              </FormControl>
              <FormDescription>
                This is an example that you can use the hook{' '}
                <InlineCode>useAutosizeTextArea()</InlineCode> to create your own textarea to match
                your needs. In this example, we use <InlineCode>react-hook-form</InlineCode> and{' '}
                <InlineCode>shadcn-ui Textarea</InlineCode> to fully control your customize
                textarea.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoadingButton loading={loading} type="submit">
          Submit
        </LoadingButton>
      </form>
    </Form>
  );
};
export default AutosizeTextareaWithForm;
