import React from 'react';
import { Menu } from 'lucide-react';
const Logo = () => {
  return (
    <>
      <Menu className="cursor-pointer md:hidden" />
      <div className="hidden md:block">
        <span className="text-2xl font-bold">shadn/ui plugins</span>
      </div>
    </>
  );
};

export default Logo;
