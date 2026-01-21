export default function Loading() {
  return (
    <main className="px-4 py-8 max-w-2xl mx-auto">
      <div className="glass-card p-8 rounded-3xl">
        <div className="animate-pulse">
          <div className="h-8 bg-[#F8F8F8] rounded mb-4"></div>
          <div className="h-4 bg-[#F8F8F8] rounded mb-8"></div>
          <div className="space-y-6">
            <div className="h-12 bg-[#F8F8F8] rounded"></div>
            <div className="h-12 bg-[#F8F8F8] rounded"></div>
            <div className="h-12 bg-[#F8F8F8] rounded"></div>
            <div className="h-32 bg-[#F8F8F8] rounded"></div>
            <div className="h-12 bg-[#F8F8F8] rounded"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
