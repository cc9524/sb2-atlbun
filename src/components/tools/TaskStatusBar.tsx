import React from 'react';
import { ChevronRight, CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  phase: 'planning' | 'design' | 'production' | 'review';
  status: 'completed' | 'in-progress' | 'pending';
  tool: 'llm' | 'image' | 'video';
  deadline: string;
}

interface TaskStatusBarProps {
  onPhaseClick: (tool: string) => void;
}

const CURRENT_TASKS: Task[] = [
  {
    id: '1',
    title: '2024春节营销创意',
    phase: 'planning',
    status: 'in-progress',
    tool: 'llm',
    deadline: '2024-02-01'
  },
  {
    id: '2',
    title: '产品展示设计',
    phase: 'design',
    status: 'pending',
    tool: 'image',
    deadline: '2024-02-05'
  },
  {
    id: '3',
    title: '品牌宣传片',
    phase: 'production',
    status: 'pending',
    tool: 'video',
    deadline: '2024-02-10'
  }
];

const PHASE_INFO = {
  planning: { name: '策划阶段', color: 'text-blue-600', bgColor: 'bg-blue-50' },
  design: { name: '设计阶段', color: 'text-purple-600', bgColor: 'bg-purple-50' },
  production: { name: '制作阶段', color: 'text-orange-600', bgColor: 'bg-orange-50' },
  review: { name: '审核阶段', color: 'text-green-600', bgColor: 'bg-green-50' }
};

export default function TaskStatusBar({ onPhaseClick }: TaskStatusBarProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 mb-8">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">当前任务</h2>
          <div className="space-y-4">
            {CURRENT_TASKS.map((task) => (
              <div
                key={task.id}
                className="bg-white rounded-lg border border-gray-200 hover:border-indigo-500 transition-colors"
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(task.status)}
                      <h3 className="text-sm font-medium text-gray-900">{task.title}</h3>
                    </div>
                    <span className="text-sm text-gray-500">截止: {task.deadline}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-1 grid grid-cols-4 gap-2">
                      {Object.entries(PHASE_INFO).map(([phase, info]) => (
                        <button
                          key={phase}
                          onClick={() => task.phase === phase && onPhaseClick(task.tool)}
                          className={`relative px-3 py-2 rounded-lg text-xs font-medium ${
                            task.phase === phase ? `${info.bgColor} ${info.color}` : 'text-gray-500'
                          } ${task.phase === phase ? 'cursor-pointer' : 'cursor-default'}`}
                        >
                          {info.name}
                          {task.phase === phase && (
                            <>
                              <ChevronRight className="w-4 h-4 absolute right-2 top-1/2 transform -translate-y-1/2" />
                              <span className="absolute inset-0" />
                            </>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}