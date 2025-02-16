import NotFound from '@/app/not-found'
import { notFound } from 'next/navigation'
import React from 'react'

export default function DetailBlog({params}) {
    
    if(params.id==="5"){
        notFound()
    }
  return (
    <div>
        <h1>Blog id: {params.id}</h1>
    </div>
  )
}
