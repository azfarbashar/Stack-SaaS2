import { TitleGenerator } from './TitleGenerator'
import { ArticleWriter } from './ArticleWriter'

export default function ContentGenerator() {
  const [activeTab, setActiveTab] = useState<'titles'|'article'>('titles')
  
  return (
    <div className="max-w-4xl mx-auto p-6">
      {activeTab === 'titles' ? (
        <TitleGenerator onSelect={() => setActiveTab('article')} />
      ) : (
        <ArticleWriter onBack={() => setActiveTab('titles')} />
      )}
    </div>
  )
}
