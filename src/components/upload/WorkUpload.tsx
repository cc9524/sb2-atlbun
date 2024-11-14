import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image, Video, Music, FileText, Shield, CheckCircle, AlertCircle, Info, X } from 'lucide-react';
import CopyrightForm from './CopyrightForm';
import VerificationProgress from './VerificationProgress';

interface UploadedFile {
  id: string;
  file: File;
  preview: string;
  type: string;
  progress: number;
  status: 'uploading' | 'verifying' | 'completed' | 'error';
  error?: string;
}

export default function WorkUpload() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [currentStep, setCurrentStep] = useState<'upload' | 'copyright' | 'verification'>('upload');
  const [copyrightAgreed, setCopyrightAgreed] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : '',
      type: file.type.split('/')[0],
      progress: 0,
      status: 'uploading' as const
    }));
    setFiles(prev => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif'],
      'video/*': ['.mp4', '.mov', '.avi'],
      'audio/*': ['.mp3', '.wav'],
      'text/*': ['.txt', '.md']
    },
    multiple: true
  });

  const removeFile = (id: string) => {
    setFiles(files.filter(file => file.id !== id));
  };

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <Image className="w-6 h-6" />;
      case 'video':
        return <Video className="w-6 h-6" />;
      case 'audio':
        return <Music className="w-6 h-6" />;
      default:
        return <FileText className="w-6 h-6" />;
    }
  };

  const handleCopyrightSubmit = () => {
    setCopyrightAgreed(true);
    setCurrentStep('verification');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 'upload':
        return (
          <div className="space-y-6">
            {/* Upload Area */}
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-12 text-center cursor-pointer transition-colors ${
                isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-500'
              }`}
            >
              <input {...getInputProps()} />
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-lg font-medium text-gray-900 mb-2">
                拖放文件到此处，或点击上传
              </p>
              <p className="text-sm text-gray-500">
                支持图片、视频、音频和文本文件
              </p>
            </div>

            {/* File List */}
            {files.length > 0 && (
              <div className="bg-white rounded-lg border border-gray-200">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">上传列表</h3>
                  <div className="space-y-3">
                    {files.map((file) => (
                      <div
                        key={file.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          {getFileIcon(file.type)}
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {file.file.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {(file.file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          {file.status === 'uploading' && (
                            <div className="w-32">
                              <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-indigo-600 rounded-full transition-all duration-300"
                                  style={{ width: `${file.progress}%` }}
                                />
                              </div>
                            </div>
                          )}
                          {file.status === 'completed' && (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          )}
                          {file.status === 'error' && (
                            <div className="flex items-center text-red-500">
                              <AlertCircle className="w-5 h-5 mr-1" />
                              <span className="text-xs">{file.error}</span>
                            </div>
                          )}
                          <button
                            onClick={() => removeFile(file.id)}
                            className="p-1 hover:bg-gray-200 rounded-full transition-colors"
                          >
                            <X className="w-4 h-4 text-gray-500" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setCurrentStep('copyright')}
                disabled={files.length === 0}
                className={`px-6 py-2 rounded-lg text-white font-medium transition-colors ${
                  files.length === 0
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                下一步：版权确认
              </button>
            </div>
          </div>
        );

      case 'copyright':
        return (
          <CopyrightForm
            onBack={() => setCurrentStep('upload')}
            onSubmit={handleCopyrightSubmit}
          />
        );

      case 'verification':
        return (
          <VerificationProgress
            files={files}
            onComplete={() => {
              // Handle completion
            }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">作品上传</h1>
          <p className="mt-1 text-sm text-gray-500">上传您的创意作品并完成版权认证</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[
              { key: 'upload', title: '上传作品' },
              { key: 'copyright', title: '版权确认' },
              { key: 'verification', title: '认证验证' }
            ].map((step, index) => (
              <div
                key={step.key}
                className="flex items-center"
              >
                <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                  currentStep === step.key
                    ? 'bg-indigo-600 text-white'
                    : currentStep > step.key
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {index + 1}
                </div>
                <span className={`ml-2 text-sm font-medium ${
                  currentStep === step.key ? 'text-indigo-600' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
                {index < 2 && (
                  <div className="mx-4 flex-1 h-0.5 bg-gray-200" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        {renderStep()}
      </div>
    </div>
  );
}