/* eslint-disable react/display-name */
// TODO: go to prev/next step must skip disabled elements

import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

type InteractiveStepperState = 'active' | 'completed' | 'inactive';
type InteractiveStepperOrientation = 'horizontal' | 'vertical';

interface IStepperContextValue {
  currentStep: number;
  totalSteps: number;
  orientation: InteractiveStepperOrientation;
  goToStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  hasNext: () => boolean;
  hasPrev: () => boolean;
  isNextDisabled: boolean;
  isPrevDisabled: boolean;
  isFirstStep: boolean;
  isLastStep: boolean;
}

interface IStepperItemContextValue {
  stepIndex: number;
  state: InteractiveStepperState;
  completed: boolean;
  disabled: boolean;
}

interface IStepperRootProps {
  children: React.ReactNode;
  defaultValue?: number;
  orientation?: InteractiveStepperOrientation;
  className?: string;
}

interface IStepperItemProps {
  children: React.ReactNode;
  completed?: boolean;
  disabled?: boolean;
  className?: string;
  'data-step-index'?: number;
}

interface IStepperIndicatorProps {
  className?: string;
}

interface IStepperTriggerProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

interface IStepperTitleProps {
  children: React.ReactNode;
  className?: string;
}

interface IStepperDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

interface IStepperSeparatorProps {
  className?: string;
}

interface IStepperContentProps {
  children: React.ReactNode;
  className?: string;
  step: number;
}

interface IStepperMethods {
  goToStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  hasNext: () => boolean;
  hasPrev: () => boolean;
  isPrevDisabled?: boolean;
  isNextDisabled?: boolean;
  currentStep: number;
  totalSteps: number;
}

const InteractiveStepperContext = createContext<IStepperContextValue | null>(null);
const InteractiveStepperItemContext = createContext<IStepperItemContextValue | null>(null);

const useStepper = () => {
  const context = useContext(InteractiveStepperContext);
  if (!context) {
    throw new Error('useStepper must be used within a StepperRoot');
  }
  return context;
};

const useStepperItem = () => {
  const context = useContext(InteractiveStepperItemContext);
  if (!context) {
    throw new Error('useStepperItem must be used within a StepperItem');
  }
  return context;
};

export const InteractiveStepperRoot = React.forwardRef<
  HTMLDivElement & IStepperMethods,
  IStepperRootProps
>(({ children, defaultValue = 1, orientation = 'horizontal', className = '', ...props }, ref) => {
  const [currentStep, setCurrentStep] = useState(defaultValue);

  const totalSteps = React.Children.toArray(children).filter(
    (child) => React.isValidElement(child) && child.type !== InteractiveStepperContent,
  ).length;

  const goToStep = useCallback(
    (step: number) => {
      if (step >= 1 && step <= totalSteps) {
        setCurrentStep(step);
      }
    },
    [totalSteps],
  );

  const nextStep = useCallback(() => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, totalSteps]);

  const prevStep = useCallback(() => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const hasNext = useCallback(() => currentStep < totalSteps, [currentStep, totalSteps]);
  const hasPrev = useCallback(() => currentStep > 1, [currentStep]);

  const contextValue = useMemo(
    () => ({
      currentStep,
      totalSteps,
      orientation,
      goToStep,
      nextStep,
      prevStep,
      hasNext,
      hasPrev,
      isNextDisabled: !hasNext(),
      isPrevDisabled: !hasPrev(),
      isFirstStep: currentStep === 1,
      isLastStep: currentStep === totalSteps,
    }),
    [currentStep, totalSteps, orientation, goToStep, nextStep, prevStep, hasNext, hasPrev],
  );

  const containerClasses = cn(orientation === 'horizontal' ? 'flex flex-col' : 'flex', className);

  React.useImperativeHandle(ref, () => ({
    ...({} as HTMLDivElement),
    goToStep,
    nextStep,
    prevStep,
    hasNext,
    hasPrev,
    currentStep,
    totalSteps,
  }));

  const stepperItems: React.ReactElement[] = [];
  const stepperContent: React.ReactElement[] = [];

  React.Children.forEach(children, (child, index) => {
    if (React.isValidElement(child)) {
      if (child.type === InteractiveStepperContent) {
        stepperContent.push(child);
      } else {
        stepperItems.push(
          React.cloneElement(child as React.ReactElement<IStepperItemProps>, {
            ...(child.props as IStepperItemProps),
            'data-step-index': index + 1,
          }),
        );
      }
    }
  });

  const stepperItemsContainer = (
    <div
      className={orientation === 'horizontal' ? 'flex items-start' : 'flex flex-col items-start'}
    >
      {stepperItems}
    </div>
  );

  const activeContent = stepperContent.find(
    (content: React.ReactElement) =>
      React.isValidElement(content) && content.props.step === currentStep,
  );

  return (
    <InteractiveStepperContext.Provider value={contextValue}>
      <div ref={ref as React.Ref<HTMLDivElement>} className={containerClasses} {...props}>
        {orientation === 'horizontal' ? (
          <>
            {stepperItemsContainer}
            {activeContent && <div className="mt-6 w-full">{activeContent}</div>}
          </>
        ) : (
          <div className="flex gap-8">
            {stepperItemsContainer}
            {activeContent && <div className="flex-1">{activeContent}</div>}
          </div>
        )}
      </div>
    </InteractiveStepperContext.Provider>
  );
});

export const InteractiveStepperItem = React.forwardRef<HTMLDivElement, IStepperItemProps>(
  ({ children, completed = false, disabled = false, className = '', ...props }, ref) => {
    const { currentStep, orientation } = useStepper();
    const stepIndex = Number(props['data-step-index'] || 1);

    const state: InteractiveStepperState = useMemo(() => {
      if (completed || stepIndex < currentStep) return 'completed';
      if (stepIndex === currentStep) return 'active';
      return 'inactive';
    }, [completed, stepIndex, currentStep]);

    const contextValue = useMemo(
      () => ({
        stepIndex,
        state,
        completed: state === 'completed',
        disabled,
      }),
      [stepIndex, state, disabled],
    );

    const itemClasses = cn(
      orientation === 'horizontal' ? 'flex items-center w-full' : 'flex flex-col',
      disabled ? 'opacity-50 cursor-not-allowed' : '',
      className,
    );

    return (
      <InteractiveStepperItemContext.Provider value={contextValue}>
        <div ref={ref} className={itemClasses} {...props}>
          {children}
        </div>
      </InteractiveStepperItemContext.Provider>
    );
  },
);

export const InteractiveStepperIndicator = React.forwardRef<HTMLDivElement, IStepperIndicatorProps>(
  ({ className = '', ...props }, ref) => {
    const stepperItemContext = useContext(InteractiveStepperItemContext);

    if (!stepperItemContext) {
      return <div ref={ref} className={className} {...props} />;
    }

    const { state, stepIndex } = stepperItemContext;

    const classes = {
      completed:
        'bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 w-9 p-1 flex flex-col items-center text-center gap-1 z-10 rounded-full shrink-0',
      active:
        'bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 w-9 p-1 flex flex-col items-center text-center gap-1 z-10 rounded-full shrink-0 ring-2 ring-ring ring-offset-2 ring-offset-background',
      inactive:
        'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9 p-1 flex flex-col items-center text-center gap-1 z-10 rounded-full shrink-0',
    };

    let indicatorClasses;

    if (state === 'completed') indicatorClasses = classes.completed;
    else if (state == 'active') indicatorClasses = classes.active;
    else indicatorClasses = classes.inactive;

    const builtIndicatorClasses = cn(
      'justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
      indicatorClasses,
      className,
    );

    return (
      <div ref={ref} className={builtIndicatorClasses} {...props}>
        {state === 'completed' ? <Check className="h-4 w-4" /> : stepIndex}
      </div>
    );
  },
);

export const InteractiveStepperTrigger = React.forwardRef<HTMLButtonElement, IStepperTriggerProps>(
  ({ children, className = '', onClick, ...props }, ref) => {
    const { goToStep } = useStepper();
    const stepperItemContext = useContext(InteractiveStepperItemContext);

    if (!stepperItemContext) {
      return (
        <div className={className} {...props}>
          {children}
        </div>
      );
    }

    const { stepIndex, disabled } = stepperItemContext;

    const handleClick = () => {
      if (!disabled) {
        goToStep(stepIndex);
        onClick?.();
      }
    };

    const triggerClasses = cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
      className,
    );

    return (
      <button
        ref={ref}
        className={triggerClasses}
        onClick={handleClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  },
);

export const InteractiveStepperTitle = React.forwardRef<HTMLHeadingElement, IStepperTitleProps>(
  ({ children, className = '', ...props }, ref) => {
    const { orientation } = useStepper();
    // const stepperItemContext = useContext(InteractiveStepperItemContext);
    // const state = stepperItemContext?.state || 'inactive';

    const titleClasses = cn(
      'text-sm font-medium leading-none text-primary text-left',
      orientation === 'horizontal' ? 'ml-3' : 'mt-2 ml-3',
      // state === 'active' ? 'text-primary' : 'text-gray-500',
      className,
    );

    return (
      <h3 ref={ref} className={titleClasses} {...props}>
        {children}
      </h3>
    );
  },
);

export const InteractiveStepperDescription = React.forwardRef<
  HTMLParagraphElement,
  IStepperDescriptionProps
>(({ children, className = '', ...props }, ref) => {
  const { orientation } = useStepper();

  const descriptionClasses = cn(
    'text-sm text-gray-500 text-left',
    orientation === 'horizontal' ? 'ml-3' : 'mt-1 ml-3',
    className,
  );

  return (
    <p ref={ref} className={descriptionClasses} {...props}>
      {children}
    </p>
  );
});

export const InteractiveStepperSeparator = React.forwardRef<HTMLDivElement, IStepperSeparatorProps>(
  ({ className = '', ...props }, ref) => {
    const { orientation, totalSteps, currentStep } = useStepper();
    const { stepIndex } = useStepperItem();

    // if last step, then don't render
    if (stepIndex === totalSteps) {
      return null;
    }

    const isCompleted = stepIndex < currentStep;

    const separatorClasses = cn(
      className,
      isCompleted ? 'w-[2px] bg-primary' : 'bg-muted',
      orientation === 'horizontal' ? 'h-[0px] flex-1' : 'w-[1px] h-10 ml-[17px]',
    );

    return <div ref={ref} className={separatorClasses} {...props} />;
  },
);

export const InteractiveStepperContent = React.forwardRef<HTMLDivElement, IStepperContentProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ children, className = '', step, ...props }, ref) => {
    const contentClasses = className;

    return (
      <div ref={ref} className={contentClasses} {...props}>
        {children}
      </div>
    );
  },
);

export const InteractiveStepper = InteractiveStepperRoot;
