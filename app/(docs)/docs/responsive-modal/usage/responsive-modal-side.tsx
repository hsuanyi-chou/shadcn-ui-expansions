'use client';
import React from 'react';
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from '@/components/ui/responsive-modal';
import { Button } from '@/components/ui/button';

type Side = 'top' | 'bottom' | 'left' | 'right';

const ResponsiveModalSide = () => {
  return (
    <div className="space-y-3">
      <div className="space-x-3">
        <Modal side="top" />
        <Modal side="bottom" />
      </div>
      <div className="space-x-3">
        <Modal side="left" />
        <Modal side="right" />
      </div>
    </div>
  );
};

const Modal = ({ side }: { side: Side }) => {
  return (
    <ResponsiveModal>
      <ResponsiveModalTrigger asChild>
        <Button variant="outline">{side}</Button>
      </ResponsiveModalTrigger>
      <ResponsiveModalContent side={side}>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>This dialog will popup from {side} on mobile.</ResponsiveModalTitle>
          <ResponsiveModalDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};

export default ResponsiveModalSide;
