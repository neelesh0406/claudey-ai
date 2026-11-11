export default function DashboardLoading() {
  return (
    <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse">
      <div className="h-8 w-48 bg-muted rounded mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-40 bg-muted/60 rounded-xl" />
        <div className="h-40 bg-muted/60 rounded-xl" />
        <div className="h-40 bg-muted/60 rounded-xl" />
      </div>
    </div>
  );
}
