'use client';
import { LoadingButton } from '@/components/ui/loading-button';
import { useState } from 'react';
import { PropLink } from '../components/props-table/prop-link';

const RateLimitDemo = () => {
  const [loading, setLoading] = useState(false);
  const [resMessage, setResMessage] = useState('');
  return (
    <div className="flex flex-col gap-1">
      <p>Try to send 3 requests in 1 minute. The rate limit is 2 requests per minute.</p>
      <LoadingButton
        loading={loading}
        onClick={async () => {
          setLoading(true);
          setResMessage('');
          try {
            const res = await fetch('/api/rate-limit-demo');
            if (res.status !== 200) {
              const errRes = await res.json();
              setResMessage(errRes.error);
              return;
            }
            const data = await res.json();

            setResMessage(data.message);
          } catch (err) {
            // for unknown error
            setResMessage(JSON.stringify(err));
          } finally {
            setLoading(false);
          }
        }}
      >
        Send request
      </LoadingButton>
      <div>{resMessage}</div>

      <PropLink
        href="https://github.com/hsuanyi-chou/shadcn-ui-expansions/blob/main/app/api/rate-limit-demo/route.ts"
        target="blank"
        className="mt-4"
      >
        Route API example.
      </PropLink>
    </div>
  );
};

export default RateLimitDemo;
