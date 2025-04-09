'use client'

import { FollowListModal } from '@/components/ui/follow-list-modal'
import Link from 'next/link'

const users = [
  {
    id: '1',
    name: 'Zara Z',
    username: 'zara_dev',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
  },
]

const FollowListAsChild = () => {
  return (
    <div className="flex flex-col gap-4 items-start">
      <FollowListModal asChild title="Followers" users={users}>
        <p className="text-blue-500 cursor-pointer">Click here as paragraph</p>
      </FollowListModal>

      <FollowListModal asChild title="Following" users={users} variant="secondary">
        <Link href="#" className="text-green-600 underline">
          Link-based Trigger
        </Link>
      </FollowListModal>
    </div>
  )
}

export default FollowListAsChild
