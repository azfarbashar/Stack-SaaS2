// src/app/(dashboard)/content-generator/page.tsx
'use client';
import { useState } from 'react';
import TitleGenerator from './TitleGenerator';
import ArticleWriter from './ArticleWriter';

export default function ContentGenerator() {
  const [activeTab, setActiveTab] = useState<'titles'|'article'>('titles');
  const [selectedTitle, setSelectedTitle] = useState('');

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">AI Content Generator</h1>
      
      {activeTab === 'titles' ? (
        <TitleGenerator onSelect={(title) => {
          setSelectedTitle(title);
          setActiveTab('article');
        }} />
      ) : (
        <ArticleWriter 
          title={selectedTitle} 
          onBack={() => setActiveTab('titles')} 
        />
      )}
    </div>
  );
}
