import DataTable from '@/components/getUsers/Table'
import React from 'react'

export default function UsersInformationPage() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1>Users data</h1>
      <DataTable />
    </div>
  )
}
