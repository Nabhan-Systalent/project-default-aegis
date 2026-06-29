'use client';
import React, { useState, useCallback } from 'react';

export const DocumentProcessor: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    setStatus('uploading');
    // Simulate API call
    setTimeout(() => setStatus('success'), 1500);
  }, []);

  return (
    <div 
      onDragOver={handleDragOver} 
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`p-12 border-4 border-dashed rounded-2xl text-center transition-colors ${
        isDragging ? 'border-blue-500 bg-blue-50' : 'border-neutral-300 bg-white'
      }`}
    >
      {status === 'idle' && <p className="text-neutral-600">Drag and drop BRD files here</p>}
      {status === 'uploading' && <p className="text-blue-600 font-medium">Processing documents...</p>}
      {status === 'success' && <p className="text-green-600 font-medium">Ingestion successful!</p>}
    </div>
  );
};
