'use client';

import {
  InteractiveStepper,
  InteractiveStepperDescription,
  InteractiveStepperIndicator,
  InteractiveStepperItem,
  InteractiveStepperSeparator,
  InteractiveStepperTitle,
  InteractiveStepperTrigger,
} from '@/components/ui/interactive-stepper';

const InteractiveStepperDemo = () => {
  return (
    <InteractiveStepper orientation="vertical">
      <InteractiveStepperItem>
        <InteractiveStepperTrigger>
          <InteractiveStepperIndicator />
          <div>
            <InteractiveStepperTitle>Order Placed</InteractiveStepperTitle>
            <InteractiveStepperDescription>
              Your order has been placed successfully
            </InteractiveStepperDescription>
          </div>
        </InteractiveStepperTrigger>
        <InteractiveStepperSeparator />
      </InteractiveStepperItem>

      <InteractiveStepperItem>
        <InteractiveStepperTrigger>
          <InteractiveStepperIndicator />
          <div>
            <InteractiveStepperTitle>Processing</InteractiveStepperTitle>
            <InteractiveStepperDescription>
              We are preparing your order
            </InteractiveStepperDescription>
          </div>
        </InteractiveStepperTrigger>
        <InteractiveStepperSeparator />
      </InteractiveStepperItem>

      <InteractiveStepperItem>
        <InteractiveStepperTrigger>
          <InteractiveStepperIndicator />
          <div>
            <InteractiveStepperTitle>Shipped</InteractiveStepperTitle>
            <InteractiveStepperDescription>Your order is on the way</InteractiveStepperDescription>
          </div>
        </InteractiveStepperTrigger>
        <InteractiveStepperSeparator />
      </InteractiveStepperItem>

      <InteractiveStepperItem>
        <InteractiveStepperTrigger>
          <InteractiveStepperIndicator />
          <div>
            <InteractiveStepperTitle>Delivered</InteractiveStepperTitle>
            <InteractiveStepperDescription>
              Order delivered to your address
            </InteractiveStepperDescription>
          </div>
        </InteractiveStepperTrigger>
      </InteractiveStepperItem>
    </InteractiveStepper>
  );
};

export default InteractiveStepperDemo;
