import { useState } from 'react'

export function ComposeMessage({ onSendMessage }) {
  const [content, setContent] = useState('')
  const [recipients, setRecipients] = useState('all-students')

  const handleSendMessage = () => {
    if (!content.trim()) return

    onSendMessage({
      sender: 'Admin',
      recipients: recipients === 'custom' ? 'custom selection' : recipients,
      content: content.trim(),
      read: false,
    })

    setContent('')
  }

  return (
    <div className="p-6 border border-gray-300 rounded-lg flex flex-col gap-4">
      <h2 className="text-xl font-semibold mb-4">COMPOSE A MESSAGE</h2>
      <p className="text-sm text-gray-600">
        Communicate efficiently with predefined groups or custom selections.
      </p>

      <div className="space-y-4">
        {/* Recipients Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">Send Message To*</label>
          <div className="flex flex-col md:flex-row gap-4">
            <select
              value={recipients}
              onChange={(e) => setRecipients(e.target.value)}
              className="w-full md:w-[200px] p-2 border border-gray-300 rounded-md"
            >
              <option value="all-students">All students</option>
              <option value="teachers">Teachers</option>
              <option value="custom">Custom selection</option>
            </select>
            <input
              type="search"
              placeholder="Search a person"
              className="flex-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        {/* Message Content */}
        <textarea
          placeholder="Write a message here ..."
          className="min-h-[150px] p-2 border border-gray-300 rounded-md w-full"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        {/* Actions */}
        <div className="flex items-center justify-between">
          <button
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            📎 Attach file
          </button>
          <button
            onClick={handleSendMessage}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
          >
            Send message
          </button>
        </div>
      </div>
    </div>
  )
}
