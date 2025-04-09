'use client'

import { FollowListModal } from '@/components/ui/follow-list-modal'

const users = [
  {
    id: '1',
    name: 'Amal Krishna',
    username: 'amaldev',
    avatarUrl: 'https://i.pravatar.cc/150?img=11',
  },
  {
    id: '2',
    name: 'Rahul R',
    username: 'rahulrr',
    avatarUrl: 'https://i.pravatar.cc/150?img=12',
  },
  {
    id: '3',
    name: 'Krishna K',
    username: 'krish_k',
    avatarUrl: 'https://i.pravatar.cc/150?img=13',
  },
]

export default function FollowListDemo() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <FollowListModal title="Followers" users={users} triggerText="Show Followers" />
      <FollowListModal title="Following" users={users} triggerText="Show Following" variant="outline" />
    </div>
  )
}
