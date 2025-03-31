import Link from 'next/link';

import Image from 'next/image';

export default function DeployOnZeabur() {
  return (
    <Link href="https://zeabur.com/referral?referralCode=hsuanyi-chou&utm_source=hsuanyi-chou">
      <Image
        src="https://zeabur.com/deployed-on-zeabur-dark.svg"
        width={194}
        height={37}
        alt="Deployed on Zeabur"
      />
    </Link>
  );
}
