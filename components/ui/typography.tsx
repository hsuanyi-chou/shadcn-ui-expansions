import React from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const headingVariants = cva('font-bold text-primary mb-3', {
  variants: {
    variant: {
      h1: 'leading-14 text-4xl lg:text-5xl',
      h2: 'leading-14 text-4xl lg:text-5xl',
      h3: 'leading-10 text-3xl lg:text-4xl',
      h4: 'leading-8 text-2xl lg:text-3xl',
      h5: 'leading-8 text-xl lg:text-2xl',
      h6: 'leading-7 text-lg lg:text-xl',
    },
  },
  defaultVariants: {
    variant: 'h6',
  },
});

type BaseTypographyProps = {
  children?: React.ReactNode;
  variant?: string;
  className?: string;
  asChild?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants>;

const BaseTypography = ({
  children,
  className,
  variant = 'h6',
  asChild = false,
  ...props
}: BaseTypographyProps) => {
  const Comp = asChild ? Slot : variant;
  return (
    <Comp {...props} className={cn(headingVariants({ variant, className }))}>
      {children}
    </Comp>
  );
};

type TypographyProps = Omit<BaseTypographyProps, 'variant'>;

const H1 = (props: TypographyProps) => {
  return <BaseTypography {...props} variant="h1" />;
};

const H2 = (props: TypographyProps) => {
  return <BaseTypography {...props} variant="h2" />;
};

const H3 = (props: TypographyProps) => {
  return <BaseTypography {...props} variant="h3" />;
};

const H4 = (props: TypographyProps) => {
  return <BaseTypography {...props} variant="h4" />;
};

const H5 = (props: TypographyProps) => {
  return <BaseTypography {...props} variant="h5" />;
};

const H6 = (props: TypographyProps) => {
  return <BaseTypography {...props} variant="h6" />;
};

export { H1, H2, H3, H4, H5, H6 };
