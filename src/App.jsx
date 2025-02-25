import React, { useState } from 'react'
import ChatbotIcon from './components/ChatbotIcon'
import Chatform from './components/Chatform'
import ChatMessage from './components/ChatMessage'

const App = () => {
  const [chatHistory,setChatHistory] = useState([]);
  const generateBotResponse =(history) =>{
    console.log(history)
  }
  return (
    <div className='container'>
      <div className="chatbot-popup">
        {/*Chatbot Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon/>
            <h2 className="logo-text">ChatBot</h2>
          </div>
          <button className="material-symbols-rounded">
              keyboard_arrow_down
          </button>
        </div>
         {/*Chatbot Body */}
         <div className="chat-body">
              <div className="message bot-message">
              <ChatbotIcon/>
              <p className='message-text'>
                Hey Dear 👋 <br /> How can i help You?
              </p>
              </div>
              {/* render the chat history dynamically */}
              {chatHistory.map((chat,index)=>(
                <ChatMessage key={index} chat={chat} />
              ))}
         </div>
         {/*Chatbot Footer */}
         <div className="chat-footer">
          <Chatform chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
         </div>
      </div>
    </div>
  )
}

export default App
