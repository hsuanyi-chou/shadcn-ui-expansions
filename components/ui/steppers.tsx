import React from 'react';
import { H4 } from '@/components/ui/heading-with-anchor';
import { cn } from '@/lib/utils';
import CodeHighlight from '@/app/(docs)/docs/components/code-card/parts/code-highlight';
import fs from 'fs/promises';
import AdStepper from '@/components/ad/ad-stepper';

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
        <H4>{title}</H4>
      </div>
      <div className="my-3 ml-5 border-l-2 border-l-gray-200 pl-8">{children}</div>
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
  /** 要複製的程式碼 */
  codePath: string;
  /** npm install script */
  installScript?: string;
}

interface SteppersWithoutInstallProps extends SteppersBaseProps {
  withInstall?: false;
}

type SteppersProps = SteppersWithInstallProps | SteppersWithoutInstallProps;

export const Steppers = async (props: SteppersProps) => {
  const { steps, className, withEnd, withInstall } = props;

  let installCode = '';
  if (withInstall && props.codePath) {
    installCode = await fs.readFile(props.codePath, 'utf8');
  }
  const withInstallOffset = withInstall ? (props.installScript ? 2 : 1) : 0;
  return (
    <>
      <div className={cn(className)}>
        {withInstall && (
          <>
            {props.installScript && (
              <Stepper
                title="Install the package if you do not have it."
                step={withInstallOffset - 1}
              >
                <CodeHighlight lang="shell" code={props.installScript} />
              </Stepper>
            )}
            <Stepper
              title="Copy and paste the following code into your project."
              step={withInstallOffset}
            >
              <CodeHighlight code={installCode} withExpand />
            </Stepper>
          </>
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
      <AdStepper />
    </>
  );
};
