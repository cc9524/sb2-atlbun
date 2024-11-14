import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Send, Smile, Paperclip, Image as ImageIcon, Video, File, Settings, Users, Hash, ArrowLeft } from 'lucide-react';

const MESSAGES = [
  {
    id: '1',
    user: {
      name: '张三',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    content: '大家好，我是新来的设计师',
    time: '10:30'
  },
  {
    id: '2',
    user: {
      name: '李四',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    content: '欢迎加入团队！',
    time: '10:31'
  }
];

const CHANNELS = [
  { id: '1', name: '公告', type: 'text' },
  { id: '2', name: '常规', type: 'text' },
  { id: '3', name: '设计讨论', type: 'text' },
  { id: '4', name: '语音频道', type: 'voice' }
];

const ONLINE_MEMBERS = [
  {
    id: '1',
    name: '张三',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    status: 'online'
  },
  {
    id: '2',
    name: '李四',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    status: 'online'
  }
];

export default function TeamChat() {
  const { teamId } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Send message logic here
      setMessage('');
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex">
      {/* Channels Sidebar */}
      <div className="w-64 bg-gray-800 flex flex-col">
        {/* Back Button */}
        <div className="p-4 border-b border-gray-700">
          <button
            onClick={() => navigate('/dashboard/projects')}
            className="flex items-center text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            返回项目管理
          </button>
        </div>

        <div className="p-4 border-b border-gray-700">
          <h2 className="text-white font-semibold flex items-center justify-between">
            <span>创意工作室</span>
            <Settings className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="px-2 py-4">
            <div className="text-gray-400 uppercase text-xs font-semibold px-2 mb-2">文字频道</div>
            {CHANNELS.filter(channel => channel.type === 'text').map(channel => (
              <button
                key={channel.id}
                className="w-full flex items-center px-2 py-1 text-gray-300 hover:bg-gray-700 rounded group"
              >
                <Hash className="w-4 h-4 mr-2 text-gray-400 group-hover:text-white" />
                {channel.name}
              </button>
            ))}

            <div className="text-gray-400 uppercase text-xs font-semibold px-2 mb-2 mt-4">语音频道</div>
            {CHANNELS.filter(channel => channel.type === 'voice').map(channel => (
              <button
                key={channel.id}
                className="w-full flex items-center px-2 py-1 text-gray-300 hover:bg-gray-700 rounded group"
              >
                <Video className="w-4 h-4 mr-2 text-gray-400 group-hover:text-white" />
                {channel.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-700">
        {/* Channel Header */}
        <div className="h-14 flex items-center px-4 bg-gray-800 border-b border-gray-700">
          <Hash className="w-5 h-5 text-gray-400 mr-2" />
          <span className="text-white font-medium">常规</span>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {MESSAGES.map((message) => (
            <div key={message.id} className="flex items-start">
              <img
                src={message.user.avatar}
                alt={message.user.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <div className="flex items-baseline">
                  <span className="font-medium text-white mr-2">{message.user.name}</span>
                  <span className="text-xs text-gray-400">{message.time}</span>
                </div>
                <p className="text-gray-300 mt-1">{message.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="p-4 bg-gray-800">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
            <button
              type="button"
              className="p-2 text-gray-400 hover:text-white"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <div className="relative flex-1">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="发送消息..."
                className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              type="button"
              onClick={() => setShowEmojiPicker(!showEmojiPicker)}
              className="p-2 text-gray-400 hover:text-white"
            >
              <Smile className="w-5 h-5" />
            </button>
            <button
              type="submit"
              className="p-2 text-gray-400 hover:text-white"
              disabled={!message.trim()}
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Members Sidebar */}
      <div className="w-64 bg-gray-800 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold flex items-center">
            <Users className="w-4 h-4 mr-2" />
            在线成员
          </h3>
          <span className="text-gray-400 text-sm">{ONLINE_MEMBERS.length}</span>
        </div>
        <div className="space-y-2">
          {ONLINE_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="flex items-center space-x-2 text-gray-300 hover:bg-gray-700 p-2 rounded cursor-pointer"
            >
              <div className="relative">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-8 h-8 rounded-full"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
              </div>
              <span>{member.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}