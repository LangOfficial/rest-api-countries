export default function LoadingCard() {
  return (
    <div className="flex w-full  flex-col gap-4">
      <div className="skeleton min-h-56 w-80"></div>
      <div className="skeleton h-6 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
}
