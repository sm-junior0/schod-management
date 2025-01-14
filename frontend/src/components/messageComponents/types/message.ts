export interface Message {
    id: string
    sender: string
    recipients: string
    content: string
    timestamp: Date
    read: boolean
  }
  
  export interface ComposeMessageProps {
    onSendMessage: (message: Omit<Message, 'id' | 'timestamp'>) => void
  }
  
  export interface ChatProps {
    messages: Message[]
    onLoadMore: () => void
  }
  
  