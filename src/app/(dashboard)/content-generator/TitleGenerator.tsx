// src/app/(dashboard)/content-generator/TitleGenerator.tsx
export default function TitleGenerator({ onSelect }: { onSelect: (title: string) => void }) {
  return (
    <div>
      <button 
        onClick={() => onSelect("Sample AI-Generated Title")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Generate Demo Titles
      </button>
    </div>
  );
}
