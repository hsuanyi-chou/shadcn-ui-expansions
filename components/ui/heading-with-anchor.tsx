'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { LinkIcon } from 'lucide-react';
import Link from 'next/link';

type AnchorProps = {
  anchor?: string;
  anchorVisibility?: 'hover' | 'always' | 'never';
  disableCopyToClipboard?: boolean;
};

const Anchor = ({
  anchor,
  disableCopyToClipboard = false,
  anchorVisibility = 'always',
}: AnchorProps) => {
  function copyToClipboard() {
    if (disableCopyToClipboard) return;
    const currentUrl = window.location.href.replace(/#.*$/, '');
    const urlWithId = `${currentUrl}#${anchor}`;

    void navigator.clipboard.writeText(urlWithId);
  }

  return (
    <div
      className={cn(
        'ms-2 pt-1',
        anchorVisibility === 'always' && 'visible',
        anchorVisibility === 'never' && 'hidden',
        anchorVisibility === 'hover' && 'invisible group-hover:visible',
      )}
    >
      {/* modify `Link` to `a` if you are not using Next.js */}
      <Link href={`#${anchor}`} onClick={copyToClipboard}>
        <LinkIcon className="text-gray-600 hover:text-gray-400" />
      </Link>
    </div>
  );
};

const headingVariants = cva('font-bold text-primary', {
  variants: {
    variant: {
      h1: 'leading-14 text-4xl lg:text-5xl',
      h2: 'leading-14 text-3xl lg:text-4xl',
      h3: 'leading-10 text-2xl lg:text-3xl',
      h4: 'leading-8 text-xl lg:text-2xl',
      h5: 'leading-8 text-lg lg:text-xl',
      h6: 'leading-7 text-sm lg:text-base',
      p: 'leading-5 text-lg lg:text-xl font-normal',
    },
  },
  defaultVariants: {
    variant: 'h6',
  },
});

type BaseHeadingProps = {
  children?: React.ReactNode;
  variant?: string;
  className?: string;
  asChild?: boolean;
  anchor?: string;
  anchorAlignment?: 'close' | 'spaced';
  anchorVisibility?: 'hover' | 'always' | 'never';
  disableCopyToClipboard?: boolean;
} & React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants>;

const BaseHeading = ({
  children,
  className,
  variant = 'h6',
  asChild = false,
  anchor,
  anchorAlignment = 'spaced',
  anchorVisibility = 'always',
  disableCopyToClipboard = false,
  ...props
}: BaseHeadingProps) => {
  const Comp = asChild ? Slot : variant;
  return (
    <>
      <Comp
        id={anchor}
        {...props}
        className={cn(
          anchor && 'flex scroll-m-20 items-center gap-1', // modify `scroll-m-20` according to your header height.
          anchorAlignment === 'spaced' && 'justify-between',
          anchorVisibility === 'hover' && 'group',
          headingVariants({ variant, className }),
        )}
      >
        {children}
        {anchor && (
          <Anchor
            anchor={anchor}
            anchorVisibility={anchorVisibility}
            disableCopyToClipboard={disableCopyToClipboard}
          />
        )}
      </Comp>
    </>
  );
};

type TypographyProps = Omit<BaseHeadingProps, 'variant' | 'asChild'>;

const H1 = (props: TypographyProps) => {
  return <BaseHeading {...props} variant="h1" />;
};

const H2 = (props: TypographyProps) => {
  return <BaseHeading {...props} variant="h2" />;
};

const H3 = (props: TypographyProps) => {
  return <BaseHeading {...props} variant="h3" />;
};

const H4 = (props: TypographyProps) => {
  return <BaseHeading {...props} variant="h4" />;
};

const H5 = (props: TypographyProps) => {
  return <BaseHeading {...props} variant="h5" />;
};

const H6 = (props: TypographyProps) => {
  return <BaseHeading {...props} variant="h6" />;
};

const P = (props: TypographyProps) => {
  return <BaseHeading {...props} variant="p" />;
};

export { H1, H2, H3, H4, H5, H6, P };
