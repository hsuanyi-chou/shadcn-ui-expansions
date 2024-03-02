'use client';
import React from 'react';
import PropTypes from 'prop-types';
import Script from 'next/script';
import { cn } from '@/lib/utils';

interface AdBaseProps {
  id: string;
  slot: string;
  layout?: string;
  format?: string;
  className?: string;
}

/**
 * reference: https://support.google.com/adsense/answer/9183363?visit_id=638147466252817641-3093829945&rd=1
 */
const AdBase = ({ id, slot, layout, format = 'auto', className }: AdBaseProps) => {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5359135355025668"
        crossOrigin="anonymous"
      ></script>
      <ins
        className={cn('adsbygoogle', className)}
        style={{ display: 'block' }}
        data-ad-client="ca-pub-5359135355025668"
        data-ad-slot={slot}
        data-ad-layout={layout}
        data-ad-format={format}
        data-full-width-responsive="true"
        data-ad-channel="shadcnui-expansions"
      ></ins>
      <Script id={id} strategy="afterInteractive">{`
            (adsbygoogle = window.adsbygoogle || []).push({});
        `}</Script>
    </>
  );
};

AdBase.propTypes = {
  id: PropTypes.string.isRequired,
  slot: PropTypes.string.isRequired,
};

export default AdBase;
