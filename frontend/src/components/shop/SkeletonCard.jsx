export default function SkeletonCard() {
  return (
    <div className="border rounded-xl p-5 flex gap-6 animate-pulse">
      <div className="w-[160px] h-[160px] bg-gray-200 rounded" />

      <div className="flex-1 space-y-3">
        <div className="h-5 bg-gray-200 rounded w-60" />

        <div className="h-4 bg-gray-200 rounded w-40" />

        <div className="h-4 bg-gray-200 rounded w-52" />
      </div>
    </div>
  );
}
