'use client';
import Button from '@/components/Button';

export default function TestButtonPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Button Test</h1>
      
      <div className="space-y-4">
        <Button 
          variant="primary" 
          onClick={() => alert('Primary clicked!')}
        >
          Primary Button
        </Button>
        
        <Button 
          variant="secondary"
          onClick={() => console.log('Secondary clicked')}
        >
          Secondary Button
        </Button>
        
        <Button 
          variant="ghost" 
          size="lg"
          isLoading={true}
        >
          Loading State
        </Button>
      </div>
    </div>
  );
}
