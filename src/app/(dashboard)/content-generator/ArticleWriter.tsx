// src/app/(dashboard)/content-generator/ArticleWriter.tsx
export default function ArticleWriter({ title, onBack }: { title: string, onBack: () => void }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p>This is where your generated article will appear.</p>
      <button 
        onClick={onBack}
        className="mt-4 text-blue-500"
      >
        ← Back to Titles
      </button>
    </div>
  );
}
