'use client';
import { useState } from 'react';
import { generateTitles } from '@/lib/ai/client';

export default function TitleGenerator({ onTitleSelect }: { onTitleSelect: (title: string) => void }) {
  const [keywords, setKeywords] = useState('');
  const [tone, setTone] = useState('professional');
  const [isGenerating, setIsGenerating] = useState(false);
  const [titles, setTitles] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    try {
      const generatedTitles = await generateTitles(keywords, tone);
      setTitles(generatedTitles);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 font-medium">Keywords/Topic</label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="w-full p-3 border rounded-lg"
            placeholder="Enter your topic or keywords"
            required
          />
        </div>
        
        <div>
          <label className="block mb-2 font-medium">Tone</label>
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full p-3 border rounded-lg"
          >
            <option value="professional">Professional</option>
            <option value="friendly">Friendly</option>
            <option value="technical">Technical</option>
            <option value="persuasive">Persuasive</option>
          </select>
        </div>
        
        <button
          type="submit"
          disabled={isGenerating}
          className="bg-stack-navy text-white py-3 px-6 rounded-lg hover:bg-stack-navy-dark transition disabled:opacity-50"
        >
          {isGenerating ? 'Generating...' : 'Generate Titles'}
        </button>
      </form>

      {titles.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Generated Titles</h3>
          <div className="space-y-2">
            {titles.map((title, i) => (
              <div 
                key={i} 
                className="p-4 border rounded-lg cursor-pointer hover:bg-gray-50"
                onClick={() => onTitleSelect(title)}
              >
                {title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
