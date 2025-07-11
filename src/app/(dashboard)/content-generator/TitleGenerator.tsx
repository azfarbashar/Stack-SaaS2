export default function TitleGenerator({ onSelect }: { onSelect: (title: string) => void }) {
  return (
    <div className="space-y-4">
      <button
        onClick={() => onSelect("How AI Transforms Content Creation")}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Generate Sample Title
      </button>
    </div>
  );
}
