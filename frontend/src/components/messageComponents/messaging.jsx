'use client'

import { useState } from 'react'
import { ComposeMessage } from './compose-message'
import { Chat } from './Chat'
const initialMessages = [
  {
    id: '1',
    sender: 'Admin',
    recipients: 'all students',
    content: 'Hello students, I wanted to give announcements and let you know that we have a meeting this afternoon.',
    timestamp: new Date(),
    read: true,
  },
  {
    id: '2',
    sender: 'Admin',
    recipients: 'all students',
    content: 'Reminder: Please check your assignments by the end of the day.',
    timestamp: new Date(),
    read: true,
  },
  {
    id: '3',
    sender: 'Admin',
    recipients: 'all students',
    content: 'Good luck with your projects this week!',
    timestamp: new Date(),
    read: true,
  },
]

export default function Messaging() {
  const [messages, setMessages] = useState(initialMessages)

  const handleSendMessage = (newMessage) => {
    const message = {
      ...newMessage,
      id: String(messages.length + 1),
      timestamp: new Date(),
    }
    setMessages([message, ...messages])
  }

  const handleLoadMore = () => {
    console.log('Loading more messages...')
    // Add logic to load more messages here
  }

  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">
      <ComposeMessage onSendMessage={handleSendMessage} />
      <Chat messages={messages} onLoadMore={handleLoadMore} />
    </div>
  )
}
