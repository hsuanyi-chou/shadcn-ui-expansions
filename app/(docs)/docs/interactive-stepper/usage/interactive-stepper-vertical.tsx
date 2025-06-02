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
} from '@/components/ui/interactive-stepper';

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => (
  <div className="w-64 rounded-lg border border-gray-700 bg-gray-900 p-4">
    <span className="font-semibold text-gray-300">{title}</span>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);

const InteractiveStepperVertical = () => {
  return (
    <InteractiveStepper defaultValue={2} orientation="vertical">
      <InteractiveStepperItem completed>
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
        <Card title={'Order Shipped'} description={'Tracking: #ABC123XYZ'} />
      </InteractiveStepperContent>

      <InteractiveStepperContent step={4}>
        <Card title={'Order Delivered'} description={'Delivered to your location'} />
      </InteractiveStepperContent>
    </InteractiveStepper>
  );
};

export default InteractiveStepperVertical;
