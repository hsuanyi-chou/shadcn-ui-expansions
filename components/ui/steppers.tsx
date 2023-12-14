import React from 'react';
import { H4 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import CodeHighlight from '@/app/(docs)/docs/components/code-card/parts/code-highlight';
import fs from 'fs/promises';

interface StepperProps {
  children?: React.ReactNode;
  title?: string;
  step?: number;
}
const Stepper = ({ title, children, step }: StepperProps) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 p-3 text-primary dark:text-primary-foreground">
          {step}
        </span>
        <H4 className="pt-3">{title}</H4>
      </div>
      <div className="ml-5 border-l-2 border-l-gray-200 pl-8">{children}</div>
    </div>
  );
};

interface SteppersBaseProps {
  steps?: Omit<StepperProps, 'step'>[];
  className?: string;
  withEnd?: boolean;
}

interface SteppersWithInstallProps extends SteppersBaseProps {
  withInstall: true;
  installCodePath: string;
}

interface SteppersWithoutInstallProps extends SteppersBaseProps {
  withInstall?: false;
}

type SteppersProps = SteppersWithInstallProps | SteppersWithoutInstallProps;

export const Steppers = async (props: SteppersProps) => {
  const { steps, className, withEnd, withInstall } = props;

  let installCode = '';
  if (withInstall && props.installCodePath) {
    installCode = await fs.readFile(props.installCodePath, 'utf8');
  }
  const withInstallOffset = withInstall ? 1 : 0;

  return (
    <div className={cn(className)}>
      {withInstall && (
        <Stepper title="Copy and paste the following code into your project." step={1}>
          <CodeHighlight code={installCode} withExpand />
        </Stepper>
      )}
      {steps?.map((props, index) => (
        <Stepper key={props.title} {...props} step={index + 1 + withInstallOffset} />
      ))}
      {withEnd && (
        <Stepper
          title="Update the import paths to match your project setup."
          step={(steps?.length || 0) + 1 + withInstallOffset}
        />
      )}
    </div>
  );
};
