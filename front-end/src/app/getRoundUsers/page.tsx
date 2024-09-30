'use client'
import DataTable from '@/components/getRoundUsers/DataTable'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Terminal } from 'lucide-react'
import React, { useState } from 'react'

export default function GetRoundUsers() {
  const [roundId, setRoundId] = useState<string>()

  const handleRoundIdSelected = () => {
    setRoundId("lindo")
  }

  if (!roundId) return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='w-1/3'>
        <Alert>
          <Terminal className="h-4 w-4" />
          <div className='flex flex-col gap-2 p-2'>
            <AlertTitle>Enter round id</AlertTitle>
            <AlertDescription>
              <div className='flex items-center justify-center gap-4'>
                <Input type="text" placeholder="Round id" />
                <Button onClick={handleRoundIdSelected}>Query it</Button>
              </div>
            </AlertDescription>
          </div>
        </Alert>
      </div>
    </div>
  )
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <h1>Round users data</h1>
      <DataTable roundId={roundId} />
    </div>
  )
}
