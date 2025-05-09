"use client"
import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react';

const Chatbot = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [chatMessage, setChatMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const suggestedQuestions = ["How do I sell my software licenses?", "What types of licenses do you buy?", "How much is my license worth?"];
    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    const handleChatSubmit = (e) => {
        e.preventDefault();
        if (!chatMessage.trim()) return;

        // Add user message to chat history
        setChatHistory([...chatHistory, { sender: 'user', text: chatMessage }]);

        // Simulate AI response based on keywords
        let response = "I'm not sure how to help with that. Could you try asking about selling licenses, our process, or pricing?";

        const lowerCaseMessage = chatMessage.toLowerCase();
        if (lowerCaseMessage.includes('sell') || lowerCaseMessage.includes('license')) {
            response = "To sell your license, simply click the 'Get a Quote' button at the top of the page and fill out the form. We'll evaluate your software licenses and get back to you within 24 hours with a competitive offer.";
        } else if (lowerCaseMessage.includes('price') || lowerCaseMessage.includes('value') || lowerCaseMessage.includes('worth')) {
            response = "License values vary based on software type, age, and remaining term. We typically offer 40-70% of the remaining contract value. For a specific valuation, please submit your license details through our form.";
        } else if (lowerCaseMessage.includes('process') || lowerCaseMessage.includes('how it works') || lowerCaseMessage.includes('steps')) {
            response = "Our process is simple: 1) Upload your license details through our secure form, 2) Receive a valuation within 24 hours, 3) Accept our offer and get paid via your preferred payment method within 2 business days.";
        } else if (lowerCaseMessage.includes('payment') || lowerCaseMessage.includes('paid')) {
            response = "We offer multiple payment options including direct bank transfer, PayPal, and cryptocurrency. Once you accept our offer, payment is processed within 2 business days.";
        } else if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi') || lowerCaseMessage.includes('hey')) {
            response = "Hello! Welcome to SoftSell. How can I help you today? Feel free to ask about our software license resale services!";
        }

        // Add AI response after a short delay to simulate processing
        setTimeout(() => {
            setChatHistory([...chatHistory, { sender: 'user', text: chatMessage }, { sender: 'ai', text: response }]);
        }, 500);

        setChatMessage('');
    };
    return (
        <div className={`fixed bottom-4 right-4 z-50 ${isChatOpen ? 'w-80' : 'w-auto'}`}>
            {!isChatOpen ? (
                <button
                    onClick={toggleChat}
                    className="bg-primary hover:primary/85 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200"
                >
                    <MessageCircle size={24} />
                </button>
            ) : (
                <div className={`rounded-lg shadow-lg overflow-hidden dark:bg-gray-800 bg-white`}>
                    <div className="bg-primary text-white p-4 flex justify-between items-center">
                        <h3 className="font-medium">SoftSell Assistant</h3>
                        <button onClick={toggleChat} className="text-white hover:text-gray-200">
                            <X size={20} />
                        </button>
                    </div>
                    <div className={`h-96 p-4 overflow-y-auto dark:bg-gray-800 bg-gray-50`}>
                        {chatHistory.length === 0 ? (
                            <div className={`text-center p-4 dark:text-gray-400 text-gray-500`}>
                                <p className="mb-2">Hi there! How can I help you today?</p>
                                <div className="mt-4 space-y-2">
                                    {suggestedQuestions.map((que, index) => (<button
                                        onClick={() => {
                                            setChatMessage(que);
                                            document.getElementById('chat-input').focus();
                                        }} key={index}
                                        className={`px-3 py-1 rounded-full text-sm dark:bg-gray-600 dark:hover:bg-gray-500 bg-accent hover:bg-gray-200 transition-colors duration-200 w-full text-left`}
                                    >
                                        {que}
                                    </button>))}
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                {chatHistory.map((msg, index) => (
                                    <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                        <div
                                            className={`max-w-xs p-3 rounded-lg ${msg.sender === 'user'
                                                ? 'dark:bg-primary dark:text-white bg-primary text-white'
                                                : 'dark:bg-gray-600 dark:text-white bg-accent text-gray-800'
                                                }`}
                                        >
                                            {msg.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <form onSubmit={handleChatSubmit} className="p-3 border-t border-gray-200 dark:border-gray-700 flex">
                        <input
                            id="chat-input"
                            type="text"
                            placeholder="Type your message..."
                            className={`flex-grow px-4 py-2 rounded-l-md focus:outline-none dark:bg-gray-700 dark:text-white dark:border-gray-600 bg-white border-gray-300 border`}
                            value={chatMessage}
                            onChange={(e) => setChatMessage(e.target.value)}
                        />
                        <button
                            type="submit"
                            className="bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded-r-md"
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Chatbot