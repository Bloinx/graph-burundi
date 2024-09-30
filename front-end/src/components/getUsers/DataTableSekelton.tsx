
import React from 'react'
import { Skeleton } from '../ui/skeleton'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'

export default function DataTableSkeleton() {
  return (

    <Table>
      <TableCaption>
        <Skeleton className="w-[200px] h-[20px] rounded-full" />
      </TableCaption>
      <TableHeader>
        <TableRow>
          {
            Array.from({ length: 9 }, (_, index) => (
              <TableHead key={index}><Skeleton className="w-[100px] h-[20px] rounded-full" /></TableHead>
            ))
          }
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          Array.from({ length: 4 }, (_, index) => (
            <TableRow key={index}>
              {Array.from({ length: 9 }, (_, cellIndex) => (
                <TableCell key={cellIndex}>
                  <Skeleton className="w-[100px] h-[20px] rounded-full" />
                </TableCell>
              ))}
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  )
}
