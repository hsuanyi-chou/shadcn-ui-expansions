import React from 'react';
import { FloatingInput, FloatingLabel } from '@/components/ui/floating-label-input';

const FloatingLabelInputCustomize = () => {
  return (
    <div className="relative">
      <FloatingInput id="floating-customize" />
      <FloatingLabel htmlFor="floating-customize">Customize</FloatingLabel>
    </div>
  );
};

export default FloatingLabelInputCustomize;
