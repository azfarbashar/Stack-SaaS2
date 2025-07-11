'use client';
import { useState } from 'react';
import TitleGenerator from './title-generator';
import ArticleWriter from './article-writer';

export default function ContentGenerator() {
  const [activeTab, setActiveTab] = useState<'titles' | 'article'>('titles');
  const [selectedTitle, setSelectedTitle] = useState('');

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-stack-navy mb-6">
        Stack Content Generator
      </h1>
      
      <div className="flex space-x-4 mb-8">
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === 'titles' ? 'bg-stack-navy text-white' : 'bg-gray-100'}`}
          onClick={() => setActiveTab('titles')}
        >
          Generate Titles
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === 'article' ? 'bg-stack-navy text-white' : 'bg-gray-100'}`}
          onClick={() => setActiveTab('article')}
          disabled={!selectedTitle}
        >
          Write Article
        </button>
      </div>

      {activeTab === 'titles' ? (
        <TitleGenerator onTitleSelect={setSelectedTitle} />
      ) : (
        <ArticleWriter title={selectedTitle} />
      )}
    </div>
  );
}
