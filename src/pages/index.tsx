import type { Dispatch, SetStateAction } from 'react'

import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { Manrope } from 'next/font/google'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

const manrope700 = Manrope({
  weight: '700',
  subsets: ['latin'],
})

const manrope500 = Manrope({
  weight: '500',
  subsets: ['latin'],
})

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

type TabsProps = 'all' | 'completed' | 'pending'

function TabsTodo({
  tab,
  setTab,
}: {
  tab: TabsProps
  setTab: Dispatch<SetStateAction<TabsProps>>
}) {
  const styling = `rounded-full text-gray-700 text-[14px] py-[12px] px-[24px] border-gray-200 border-[1px] duration-300 ${manrope700.className}`

  return (
    <Tabs.Root
      value={tab}
      onValueChange={(value) => setTab(value as TabsProps)}
    >
      <Tabs.List className="flex gap-[8px]" aria-label="Manage your account">
        <Tabs.Trigger
          className={styling.concat(
            tab === 'all' ? ' bg-gray-700 text-white' : ''
          )}
          value="all"
        >
          All
        </Tabs.Trigger>
        <Tabs.Trigger
          className={styling.concat(
            tab === 'pending' ? ' bg-gray-700 text-white' : ''
          )}
          value="pending"
        >
          Pending
        </Tabs.Trigger>
        <Tabs.Trigger
          className={styling.concat(
            tab === 'completed' ? ' bg-gray-700 text-white' : ''
          )}
          value="completed"
        >
          Complete
        </Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}

const Index = () => {
  const [tab, setTab] = useState<TabsProps>('all')
  return (
    <main className={`mx-auto w-[480px] pt-12 ${manrope500.className}`}>
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <div className="pt-10">
          <TabsTodo tab={tab} setTab={setTab} />
        </div>

        <div className="pt-10">
          <TodoList tab={tab} />
        </div>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
