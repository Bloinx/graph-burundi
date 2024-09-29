'use client'
import { useQuery } from '@tanstack/react-query'
import { request } from 'graphql-request'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { burundiGraphBaseUrl } from '@/graphQl/contants'
import { getUsersQuery } from '@/graphQl/querys/getUsers'
import { Users } from '@/types/getUsers'
import { useEffect } from 'react'


export default function DataTable() {
  const { data, isLoading, error } = useQuery<Users>({
    queryKey: ['data'],
    async queryFn() {
      return await request(burundiGraphBaseUrl, getUsersQuery)
    }
  })
  useEffect(() => {
    console.log(data)
  }, [data])
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error as string}</p>;
  return (
    <Table>
      <TableCaption>A list of all users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Address</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          data?.users?.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>

  )
}
