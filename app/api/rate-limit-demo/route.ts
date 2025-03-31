import { rateLimit } from '@/lib/rate-limit';
import { NextRequest, NextResponse } from 'next/server';

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500, // Max 500 users per second
});

export async function GET(request: NextRequest) {
  // check the rate limit
  try {
    await limiter.check(request, 2);
  } catch (errRes) {
    return errRes as NextResponse<{ error: string }>;
  }

  try {
    // write your logic here.

    return NextResponse.json({ message: 'success' });
  } catch (error) {
    // your error handling here.
    return NextResponse.json({ error, message: 'Internal Server Error' }, { status: 500 });
  }
}
