import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PageSubTitle } from '@/app/(docs)/docs/components/page-template';
import PropInfo from '@/app/(docs)/docs/components/props-table/prop-info';
import { InlineCode } from '@/components/ui/inline-code';

export interface Props {
  prop: string;
  required: boolean;
  description: React.ReactNode;
  type: string;
  default: string;
}

interface PropsTableProps {
  title?: string;
  props: Props[];
}

const PropsTable = ({ title, props }: PropsTableProps) => {
  return (
    <>
      <PageSubTitle>{title || 'Properties'}</PageSubTitle>
      <div className="px-5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Property</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Default</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {props.map((prop) => (
              <TableRow key={prop.prop} className="text-base text-primary">
                <TableCell className="flex items-center gap-[2px]">
                  {prop.required && <span className="text-red-600 dark:text-red-400">*</span>}
                  <InlineCode>{prop.prop}</InlineCode>
                  <PropInfo className="ml-2">{prop.description}</PropInfo>
                </TableCell>
                <TableCell>
                  <InlineCode>{prop.type}</InlineCode>
                </TableCell>
                <TableCell>
                  <InlineCode>{prop.default}</InlineCode>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default PropsTable;
