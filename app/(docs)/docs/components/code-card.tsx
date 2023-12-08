'use client';
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CodeHighlight from '@/app/(docs)/docs/components/code-card/code-highlight';

interface CodeCardProps {
  children?: React.ReactNode;
  code?: string;
}
const CodeCard = ({ children, code }: CodeCardProps) => {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent
        value="preview"
        className="rounded-md border-2 border-gray-200 p-3 dark:border-gray-600"
      >
        {children}
      </TabsContent>
      <TabsContent
        value="code"
        className="rounded-md border-2 border-gray-200 p-3 dark:border-gray-600"
        style={{ background: '#282C34' }}
      >
        <CodeHighlight code={code || ''} />
      </TabsContent>
    </Tabs>
  );
};

export default CodeCard;
