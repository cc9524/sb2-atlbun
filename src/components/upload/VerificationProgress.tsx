import React, { useEffect, useState } from 'react';
import { CheckCircle, AlertCircle, Shield, RefreshCw } from 'lucide-react';

interface VerificationProgressProps {
  files: any[];
  onComplete: () => void;
}

interface VerificationStep {
  id: string;
  name: string;
  description: string;
  status: 'pending' | 'processing' | 'completed' | 'error';
  progress: number;
}

export default function VerificationProgress({ files, onComplete }: VerificationProgressProps) {
  const [steps, setSteps] = useState<VerificationStep[]>([
    {
      id: 'format',
      name: '格式验证',
      description: '验证文件格式和完整性',
      status: 'pending',
      progress: 0
    },
    {
      id: 'content',
      name: '内容审核',
      description: '检查内容是否符合平台规范',
      status: 'pending',
      progress: 0
    },
    {
      id: 'copyright',
      name: '版权认证',
      description: '生成版权认证标识',
      status: 'pending',
      progress: 0
    },
    {
      id: 'complete',
      name: '完成认证',
      description: '生成作品唯一标识码',
      status: 'pending',
      progress: 0
    }
  ]);

  useEffect(() => {
    // Simulate verification process
    const simulateProgress = () => {
      let currentStepIndex = 0;

      const interval = setInterval(() => {
        if (currentStepIndex >= steps.length) {
          clearInterval(interval);
          onComplete();
          return;
        }

        setSteps(prevSteps => {
          const newSteps = [...prevSteps];
          const currentStep = newSteps[currentStepIndex];

          if (currentStep.progress < 100) {
            currentStep.status = 'processing';
            currentStep.progress += 10;
          } else {
            currentStep.status = 'completed';
            currentStepIndex++;
          }

          return newSteps;
        });
      }, 500);

      return () => clearInterval(interval);
    };

    simulateProgress();
  }, []);

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-8">
        <Shield className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">认证验证</h2>
      </div>

      <div className="space-y-8">
        {steps.map((step) => (
          <div key={step.id} className="relative">
            <div className="flex items-start">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 flex-shrink-0">
                {step.status === 'completed' && (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                )}
                {step.status === 'processing' && (
                  <RefreshCw className="w-5 h-5 text-indigo-500 animate-spin" />
                )}
                {step.status === 'error' && (
                  <AlertCircle className="w-5 h-5 text-red-500" />
                )}
                {step.status === 'pending' && (
                  <div className="w-2 h-2 bg-gray-300 rounded-full" />
                )}
              </div>
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-medium text-gray-900">{step.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{step.description}</p>
                {step.status === 'processing' && (
                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className="bg-indigo-600 h-1.5 rounded-full transition-all duration-300"
                        style={{ width: `${step.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
              {step.status === 'completed' && (
                <span className="ml-4 text-sm text-green-500">完成</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {steps.every(step => step.status === 'completed') && (
        <div className="mt-8 p-4 bg-green-50 rounded-lg">
          <div className="flex">
            <div className="flex-shrink-0">
              <CheckCircle className="h-5 w-5 text-green-400" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">
                认证完成
              </h3>
              <div className="mt-2 text-sm text-green-700">
                <p>您的作品已完成认证，版权信息已记录在平台。作品标识码：</p>
                <code className="mt-1 block bg-green-100 px-2 py-1 rounded">
                  FCHG-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </code>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}