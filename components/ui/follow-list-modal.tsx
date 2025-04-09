'use client'

import { buttonVariants } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'

type User = {
  id: string
  name: string
  username: string
  avatarUrl?: string
}

interface FollowListModalProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string
  users: User[]
  asChild?: boolean
  variant?: 'default' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'
  triggerText?: string
}

export const FollowListModal = React.forwardRef<HTMLButtonElement, FollowListModalProps>(
  ({ title, users, asChild = false, variant = 'default', className, triggerText = 'Open', children, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'

    return (
      <Dialog>
        <DialogTrigger asChild>
          <Comp
            className={cn(buttonVariants({ variant }), className)}
            ref={ref}
            {...props}
          >
            {children || triggerText}
          </Comp>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <ScrollArea className="max-h-[400px] w-full pr-4">
            <div className="flex flex-col gap-4 py-2">
              {users.length === 0 ? (
                <p className="text-sm text-muted-foreground">No users found.</p>
              ) : (
                users.map((user) => (
                  <div key={user.id} className="flex items-center gap-4">
                    <img
                      src={user.avatarUrl ?? '/placeholder-avatar.png'}
                      alt={user.username}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">@{user.username}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    )
  }
)

FollowListModal.displayName = 'FollowListModal'
