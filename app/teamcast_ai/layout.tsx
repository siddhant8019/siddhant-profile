export default function TeamcastAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-[#F8F8F8]">
      {children}
    </div>
  );
}
