import React from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';

type BaseTypographyProps = {
  children?: React.ReactNode;
  baseClassName?: string;
  className?: string;
  asChild?: boolean;
  comp: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & React.HTMLAttributes<HTMLHeadingElement>;

const BaseTypography = ({
  children,
  baseClassName,
  className,
  asChild = false,
  comp,
  ...props
}: BaseTypographyProps) => {
  const Comp = asChild ? Slot : comp;
  return (
    <Comp {...props} className={cn(baseClassName, className)}>
      {children}
    </Comp>
  );
};

type TypographyProps = Omit<BaseTypographyProps, 'BaseTypographyProps' | 'comp'>;

const H1 = (props: TypographyProps) => {
  return (
    <BaseTypography
      {...props}
      baseClassName="leading-14 text-5xl font-bold text-primary lg:text-6xl"
      comp="h1"
    />
  );
};

const H2 = (props: TypographyProps) => {
  return (
    <BaseTypography
      {...props}
      baseClassName="leading-14 text-4xl font-bold text-primary lg:text-5xl"
      comp="h2"
    />
  );
};

const H3 = (props: TypographyProps) => {
  return (
    <BaseTypography
      {...props}
      baseClassName="leading-10 text-3xl font-bold text-primary lg:text-4xl"
      comp="h3"
    />
  );
};

const H4 = (props: TypographyProps) => {
  return (
    <BaseTypography
      {...props}
      baseClassName="leading-8 text-2xl font-bold text-primary lg:text-3xl"
      comp="h3"
    />
  );
};

const H5 = (props: TypographyProps) => {
  return (
    <BaseTypography
      {...props}
      baseClassName="leading-8 text-xl font-bold text-primary lg:text-2xl"
      comp="h5"
    />
  );
};

const H6 = (props: TypographyProps) => {
  return (
    <BaseTypography
      {...props}
      baseClassName="leading-7 text-lg font-bold text-primary lg:text-xl"
      comp="h6"
    />
  );
};

export { H1, H2, H3, H4, H5, H6 };
