import React from 'react';
import { DOCS } from '@/app/(docs)/layout-parts/documentation.constant';
import LeftSideLink from '@/app/(docs)/layout-parts/left-side/left-side-link';
import BuyMeCoffee from '@/app/(docs)/layout-parts/buy-me-coffee';
import AdLeftSide from '@/components/ad/ad-left-side';

const LeftSide = () => {
  return (
    <aside className="hidden flex-col gap-2 px-5 lg:flex">
      {DOCS.map((component) => (
        <div className="flex flex-col gap-1" key={component.groupKey}>
          <h2 className="text-lg font-extrabold">{component.groupValue}</h2>
          {component.children.map((child) => (
            <LeftSideLink href={child.url} key={child.value}>
              {child.label}
            </LeftSideLink>
          ))}
        </div>
      ))}
      <BuyMeCoffee className="mt-32" />
      <AdLeftSide />
    </aside>
  );
};

export default LeftSide;
