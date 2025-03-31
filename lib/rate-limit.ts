import { NextRequest, NextResponse } from 'next/server';
import { LRUCache } from 'lru-cache';

type Options = {
  uniqueTokenPerInterval?: number;
  interval?: number;
};

export function rateLimit(options?: Options) {
  const tokenCache = new LRUCache({
    max: options?.uniqueTokenPerInterval || 500,
    ttl: options?.interval || 60000,
  });

  return {
    check: (request: NextRequest, limit: number) => {
      return new Promise<void>((resolve, reject) => {
        const ip =
          request.headers.get('x-forwarded-for') ||
          request.headers.get('x-real-ip') ||
          // @ts-ignore ignore
          request?.socket?.remoteAddress;
        if (!ip) {
          reject(NextResponse.json({ error: 'can not get IP.' }, { status: 400 }));
          return;
        }

        const tokenCount = (tokenCache.get(ip) as number[]) || [0];
        if (tokenCount[0] === 0) {
          tokenCache.set(ip, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage > limit;

        if (isRateLimited) {
          const response = NextResponse.json(
            { error: 'Too many requests, please try again later.' },
            { status: 429 },
          );
          response.headers.set('X-RateLimit-Limit', limit.toString());
          response.headers.set('X-RateLimit-Remaining', '0');
          reject(response);
        } else {
          resolve();
        }
      });
    },
  };
}
