'use client';

import {
  InteractiveStepper,
  InteractiveStepperContent,
  InteractiveStepperDescription,
  InteractiveStepperIndicator,
  InteractiveStepperItem,
  InteractiveStepperSeparator,
  InteractiveStepperTitle,
  InteractiveStepperTrigger,
  IStepperMethods,
} from '@/components/ui/interactive-stepper';
import { useRef } from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="w-full rounded-lg border border-gray-700 bg-gray-900 p-4">
    <span className="font-semibold text-gray-300">{title}</span>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

const InteractiveStepperExternalInteractions = () => {
  const stepperRef = useRef<HTMLDivElement & IStepperMethods>(null);

  return (
    <div className="w-11/12">
      <InteractiveStepper ref={stepperRef}>
        <InteractiveStepperItem completed>
          <InteractiveStepperTrigger>
            <InteractiveStepperIndicator />
            <div>
              <InteractiveStepperTitle>Order Placed</InteractiveStepperTitle>
              <InteractiveStepperDescription>A few days ago</InteractiveStepperDescription>
            </div>
          </InteractiveStepperTrigger>
          <InteractiveStepperSeparator />
        </InteractiveStepperItem>

        <InteractiveStepperItem>
          <InteractiveStepperTrigger>
            <InteractiveStepperIndicator />
            <div>
              <InteractiveStepperTitle>Processing</InteractiveStepperTitle>
              <InteractiveStepperDescription>Currently active</InteractiveStepperDescription>
            </div>
          </InteractiveStepperTrigger>
          <InteractiveStepperSeparator />
        </InteractiveStepperItem>

        <InteractiveStepperItem disabled>
          <InteractiveStepperTrigger>
            <InteractiveStepperIndicator />
            <div>
              <InteractiveStepperTitle>Skipped</InteractiveStepperTitle>
              <InteractiveStepperDescription>On your way</InteractiveStepperDescription>
            </div>
          </InteractiveStepperTrigger>
          <InteractiveStepperSeparator />
        </InteractiveStepperItem>

        <InteractiveStepperItem>
          <InteractiveStepperTrigger>
            <InteractiveStepperIndicator />
            <div>
              <InteractiveStepperTitle>Delivered</InteractiveStepperTitle>
              <InteractiveStepperDescription>At your address</InteractiveStepperDescription>
            </div>
          </InteractiveStepperTrigger>
        </InteractiveStepperItem>

        <InteractiveStepperContent step={1}>
          <Card title={'Order Confirmed'} description={'Order #12345 placed on Jan 15, 2024'} />
        </InteractiveStepperContent>

        <InteractiveStepperContent step={2}>
          <Card
            title={'Processing Your Order'}
            description={'Estimated processing time: 1-2 business days'}
          />
        </InteractiveStepperContent>

        <InteractiveStepperContent step={3}>
          <Card title={'Skipped'} description={'This should not be seen because it is disabled'} />
        </InteractiveStepperContent>

        <InteractiveStepperContent step={4}>
          <Card title={'Order Delivered'} description={'Delivered to your location'} />
        </InteractiveStepperContent>
      </InteractiveStepper>

      <div className="mt-4 flex justify-between gap-2">
        <button
          className="rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-gray-200 transition-colors duration-200 hover:bg-gray-900 disabled:opacity-50"
          disabled={stepperRef.current?.isPrevDisabled}
          onClick={() => stepperRef.current?.prevStep()}
        >
          Previous
        </button>

        <button
          className="rounded-md border border-gray-700 bg-gray-800 px-4 py-2 text-gray-200 transition-colors duration-200 hover:bg-gray-900 disabled:opacity-50"
          disabled={stepperRef.current?.isNextDisabled}
          onClick={() => stepperRef.current?.nextStep()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default InteractiveStepperExternalInteractions;
