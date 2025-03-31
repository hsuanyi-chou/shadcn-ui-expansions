'use client';

import { Button } from '@/components/ui/button';
import { Typewriter } from '@/components/ui/typewriter';
import Image from 'next/image';
import Link from 'next/link';

export default function TypewriterDemo() {
  return (
    <div>
      <Typewriter>
        <strong>123</strong>
        <Link className="text-blue-500 underline hover:text-red-400" href="https://www.google.com">
          Google
        </Link>
        <Image src="/logo/logo-dark.svg" alt="Next.js" width={100} height={100} />
        <br />
        <span className="text-green-400">幹你老師的，成功了</span>
        <Button>
          按鈕也行？按鈕也行？按鈕也行？按鈕也行？按鈕也行？按鈕也行？按鈕也行？按鈕也行？按鈕也行？按鈕也行？按鈕也行？
        </Button>
        <span>{DEMO_TEXT}</span>
      </Typewriter>
    </div>
  );
}

const DEMO_TEXT = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
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
Aldus PageMaker including versions of Lorem Ipsum.`;
