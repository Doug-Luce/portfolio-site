import React from 'react'
import { Link } from 'react-router-dom'

export const ChatButton = () => {
  return (
    <div className="chat-button"><Link to="/contact"><p>LET'S<br/>CHAT</p></Link></div>
  )
}

export default ChatButton
