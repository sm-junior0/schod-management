'use client'

import React from 'react'

export function Chat({ messages, onLoadMore }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">Messages</h2>
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="border-b pb-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{message.sender}</p>
                <p className="text-sm text-gray-500">To: {message.recipients}</p>
              </div>
              <span className="text-sm text-gray-500">
                {message.timestamp.toLocaleString()}
              </span>
            </div>
            <p className="mt-2">{message.content}</p>
          </div>
        ))}
      </div>
      <button
        onClick={onLoadMore}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Load More
      </button>
    </div>
  )
}
