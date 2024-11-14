import React, { useState } from 'react';
import { Shield, AlertCircle } from 'lucide-react';

interface CopyrightFormProps {
  onBack: () => void;
  onSubmit: () => void;
}

export default function CopyrightForm({ onBack, onSubmit }: CopyrightFormProps) {
  const [agreements, setAgreements] = useState({
    original: false,
    rights: false,
    license: false,
    terms: false
  });

  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(agreements).every(v => v)) {
      onSubmit();
    } else {
      setShowError(true);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Shield className="w-6 h-6 text-indigo-600" />
        <h2 className="text-xl font-semibold text-gray-900">版权确认</h2>
      </div>

      {showError && (
        <div className="mb-6 p-4 bg-red-50 rounded-lg flex items-start">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2" />
          <div>
            <h3 className="text-sm font-medium text-red-800">请确认所有版权声明</h3>
            <p className="text-sm text-red-700 mt-1">
              您需要同意所有条款才能继续
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Copyright Agreements */}
        <div className="space-y-4">
          <label className="flex items-start">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              checked={agreements.original}
              onChange={(e) => setAgreements({ ...agreements, original: e.target.checked })}
            />
            <span className="ml-3">
              <span className="text-sm font-medium text-gray-900">原创声明</span>
              <p className="text-sm text-gray-500">
                我声明此作品是由我独立创作完成，不存在抄袭、剽窃等侵犯他人知识产权的行为
              </p>
            </span>
          </label>

          <label className="flex items-start">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              checked={agreements.rights}
              onChange={(e) => setAgreements({ ...agreements, rights: e.target.checked })}
            />
            <span className="ml-3">
              <span className="text-sm font-medium text-gray-900">权利声明</span>
              <p className="text-sm text-gray-500">
                我拥有该作品的完整知识产权，有权进行发布和授权
              </p>
            </span>
          </label>

          <label className="flex items-start">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              checked={agreements.license}
              onChange={(e) => setAgreements({ ...agreements, license: e.target.checked })}
            />
            <span className="ml-3">
              <span className="text-sm font-medium text-gray-900">授权协议</span>
              <p className="text-sm text-gray-500">
                我同意将作品按照平台规定的授权协议进行发布，并了解相关的权利和义务
              </p>
            </span>
          </label>

          <label className="flex items-start">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              checked={agreements.terms}
              onChange={(e) => setAgreements({ ...agreements, terms: e.target.checked })}
            />
            <span className="ml-3">
              <span className="text-sm font-medium text-gray-900">平台条款</span>
              <p className="text-sm text-gray-500">
                我已阅读并同意遵守平台的使用条款和版权政策
              </p>
            </span>
          </label>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={onBack}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            返回
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            确认并继续
          </button>
        </div>
      </form>
    </div>
  );
}