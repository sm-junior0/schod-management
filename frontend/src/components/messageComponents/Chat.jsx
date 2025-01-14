"use client";

import { Check } from "lucide-react";

export function Chat({ messages, onLoadMore }) {
  return (
    <div className="p-6 border rounded-lg space-y-4">
      <h2 className="text-xl font-semibold mb-4">CHAT</h2>

      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className="bg-slate-100 rounded-lg p-4 space-y-2"
          >
            <div className="font-medium">
              {message.sender} to {message.recipients}
            </div>
            <p className="text-sm text-slate-600">{message.content}</p>
            {message.read && (
              <div className="flex justify-end">
                <Check className="h-4 w-4 text-blue-500" />
              </div>
            )}
          </div>
        ))}

        {/* <Button 
          variant="outline" 
          className="w-full"
          onClick={onLoadMore}
        >
          Load more
        </Button> */}
        <button
          className="w-50 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center space-x-2"
          onClick={onLoadMore}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span>Load More</span>
        </button>
      </div>
    </div>
  );
}
