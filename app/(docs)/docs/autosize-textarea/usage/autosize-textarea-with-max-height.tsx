import React from 'react';
import { AutosizeTextarea } from '@/components/ui/autosize-textarea';

const AutosizeTextareaWithMaxHeight = () => {
  return (
    <div className="w-full px-10">
      <AutosizeTextarea
        placeholder="This textarea with min height 52 and max height 200."
        maxHeight={200}
      />
    </div>
  );
};

export default AutosizeTextareaWithMaxHeight;
