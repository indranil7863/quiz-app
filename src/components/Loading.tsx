import React from 'react'

function Loading() {
  return (
      <div className="h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
    </div>
  )
}

export default Loading