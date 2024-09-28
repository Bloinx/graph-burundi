import React from 'react'
import { Nav } from './Nav'

export default function Header() {
  return (
      <div className='flex gap-4 items-center'>
        <h1 className='font-bold'>Burundi</h1>
        <Nav />
      </div>
  )
}
