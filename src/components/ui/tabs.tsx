'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { cn } from '@/lib/utils'

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <div className="relative overflow-hidden">
    <TabsPrimitive.List
      ref={ref}
      className={cn(
        'inline-flex w-full gap-1 overflow-x-auto pb-3',
        'hide-scrollbar',
        'rounded-lg bg-neutral-100 p-1.5 dark:bg-neutral-900',
        className
      )}
      {...props}
    />
  </div>
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'relative flex-shrink-0 truncate rounded-lg px-4 py-2 text-sm font-medium',
      'transition-colors duration-200 ease-in-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400',
      'hover:bg-neutral-200/60 dark:hover:bg-neutral-800',
      'data-[state=active]:bg-white data-[state=active]:shadow-sm',
      'data-[state=active]:text-neutral-900 dark:data-[state=active]:bg-neutral-800',
      'dark:data-[state=active]:text-neutral-100 dark:data-[state=active]:shadow-neutral-700',
      'min-w-[100px] text-center',
      'border border-transparent data-[state=active]:border-neutral-300',
      'dark:border-neutral-700 dark:data-[state=active]:border-neutral-600',
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      'mt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400',
      'animate-in fade-in duration-300',
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
