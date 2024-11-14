import React from 'react';
import { X, FileText, Image, Video, Music, Download, ExternalLink, Trash2 } from 'lucide-react';

interface TaskHistoryProps {
  isOpen: boolean;
  onClose: () => void;
}

const HISTORY_ITEMS = [
  {
    id: '1',
    title: '春节营销文案',
    type: 'text',
    date: '2024-01-15 14:30',
    status: 'completed'
  },
  {
    id: '2',
    title: '产品展示图生成',
    type: 'image',
    date: '2024-01-15 13:45',
    status: 'completed'
  },
  {
    id: '3',
    title: '品牌宣传视频',
    type: 'video',
    date: '2024-01-15 11:20',
    status: 'completed'
  },
  {
    id: '4',
    title: '产品介绍配音',
    type: 'audio',
    date: '2024-01-15 10:15',
    status: 'completed'
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'text':
      return <FileText className="w-4 h-4" />;
    case 'image':
      return <Image className="w-4 h-4" />;
    case 'video':
      return <Video className="w-4 h-4" />;
    case 'audio':
      return <Music className="w-4 h-4" />;
    default:
      return null;
  }
};

export default function TaskHistory({ isOpen, onClose }: TaskHistoryProps) {
  return (
    <div
      className={`fixed right-0 top-16 bottom-0 w-80 bg-white border-l border-gray-200 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="px-4 py-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium text-gray-900">创作历史</h3>
            <button
              onClick={onClose}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* History List */}
        <div className="flex-1 overflow-y-auto">
          <div className="divide-y divide-gray-200">
            {HISTORY_ITEMS.map((item) => (
              <div key={item.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center mr-3">
                      {getTypeIcon(item.type)}
                    </span>
                    <div>
                      <h4 className="text-sm font-medium text-gray-900">{item.title}</h4>
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <button className="p-1 rounded hover:bg-gray-100 transition-colors">
                    <Download className="w-4 h-4 text-gray-500" />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100 transition-colors">
                    <ExternalLink className="w-4 h-4 text-gray-500" />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100 transition-colors">
                    <Trash2 className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-gray-200">
          <button className="w-full px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            清除历史记录
          </button>
        </div>
      </div>
    </div>
  );
}