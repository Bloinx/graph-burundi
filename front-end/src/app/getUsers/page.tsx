import DataTable from '@/components/getUsers/DataTable'
import React from 'react'

export default function UsersInformationPage() {
  return (
    <div className='flex flex-col items-center justify-center gap-8'>
      <h1>Users data</h1>
      <DataTable />
    </div>
  )
}
