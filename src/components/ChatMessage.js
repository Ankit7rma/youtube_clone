import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
    <img
          className="h-8"
          alt="user-logo"
          src="data:image/png;base64,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"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage