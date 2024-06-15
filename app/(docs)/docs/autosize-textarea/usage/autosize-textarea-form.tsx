'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import * as React from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { toast } from '@/components/ui/use-toast';
import { AutosizeTextarea } from '@/components/ui/autosize-textarea';
import { LoadingButton } from '@/components/ui/loading-button';
import { useState } from 'react';

const FormSchema = z.object({
  bio: z.string().min(10, {
    message: 'Bio must be at least 10 characters.',
  }),
});

const DEFAULT_VALUE = {
  bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
};

const AutosizeTextareaForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    defaultValues: DEFAULT_VALUE,
    resolver: zodResolver(FormSchema),
  });

  const [isClearBio, setIsClearBio] = useState(false);

  const [loading, setLoading] = React.useState(false);

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
      if (isClearBio) {
        form.setValue('bio', '');
      }
    }, 500);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <span className="flex gap-2">
          <input
            type="checkbox"
            id="should-clear-bio"
            className="cursor-pointer"
            checked={isClearBio}
            onChange={() => setIsClearBio((pre) => !pre)}
          />
          <label htmlFor="should-clear-bio" className="cursor-pointer">
            Clear bio after submit.
          </label>
        </span>

        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="bio">Bio</FormLabel>
              <FormControl>
                <AutosizeTextarea id="bio" {...field} />
              </FormControl>
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
export default AutosizeTextareaForm;
