'use client';
export default function Test() {
  return (
    <div className="p-8 bg-red-100">
      <h1 className="text-3xl font-bold text-blue-600">
        TEST: You should see this!
      </h1>
      <button 
        onClick={() => alert('Working!')} 
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Test Button
      </button>
    </div>
  );
}
