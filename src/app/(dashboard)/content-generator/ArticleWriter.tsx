export default function ArticleWriter({ title, onBack }: { title: string, onBack: () => void }) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-600">
        This is where your generated article will appear. 
        Connect to OpenAI API to add real content generation.
      </p>
      <button
        onClick={onBack}
        className="text-blue-600 hover:underline"
      >
        ← Back to title selection
      </button>
    </div>
  );
}
