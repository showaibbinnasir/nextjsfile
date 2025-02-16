'use client'
import Image from 'next/image'
import React from 'react'
import skull from '@/public/image/skulls.jpg'
import { Card, CardContent, CardDescription, CardTitle } from 'keep-react'
import { useState } from 'react'
import { format } from 'date-fns'
import { Calendar } from 'phosphor-react'
import { Button, DatePicker, Popover, PopoverContent, PopoverAction } from 'keep-react'
import { CloudArrowUp } from 'phosphor-react'
import {
  Modal,
  ModalAction,
  ModalContent,
  ModalDescription,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from 'keep-react'
export default function About() {
  const [selected, setSelected] = useState(null)
  console.log(selected);
  return (
    <div className=' mt-10 p-5'>
      <h1 className="text-3xl text-center font-semibold">This is about page</h1>
      <div className='flex justify-center mt-5'>
        <Image className=' rounded-lg shadow-slate-50 shadow-md' width={350} height={350} src={skull} alt='this is skull image' quality={100} placeholder='blur' />
      </div>
      <div className='flex gap-5'>
        <Card className="max-w-md">
          <CardContent>
            <CardTitle>Keep design system</CardTitle>
            <CardDescription>
              Component design systems can help developers to be more productive by providing them with a ready-made set of
              components to use.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <div>
        <Popover>
          <PopoverAction asChild>
            <Button
              color="secondary"
              size="lg"
              className="w-[286px] justify-start gap-2.5 border border-metal-100 text-body-4"
              variant="outline">
              <Calendar size={20} className="text-metal-400 dark:text-white" />
              {selected ? (
                <>
                  {format(selected?.from ?? new Date(), 'LLL dd, y')} - {format(selected?.to ?? new Date(), 'LLL dd, y')}
                </>
              ) : (
                <span>Select Your Date</span>
              )}
            </Button>
          </PopoverAction>
          <PopoverContent align="start" className="max-w-min border-0">
            <DatePicker mode="range" numberOfMonths={2} selected={selected} onSelect={setSelected} showOutsideDays={true} />
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Modal>
          <ModalAction asChild>
            <Button>Open Modal</Button>
          </ModalAction>
          <ModalContent>
            <ModalHeader className="mb-6 space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-metal-50 text-metal-900 dark:bg-metal-800 dark:text-white">
                <CloudArrowUp size={28} />
              </div>
              <div className="space-y-1">
                <ModalTitle>Update Modal Status</ModalTitle>
                <ModalDescription>
                  Your document has unsaved changes. Discard or save them as a new page to continue.
                </ModalDescription>
              </div>
            </ModalHeader>
            <ModalFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Confirm</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>

    </div>
  )
}
