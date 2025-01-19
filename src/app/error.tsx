'use client';

export default function Error() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Something went wrong!</h1>
        <button
          onClick={() => window.location.reload()}
          className="rounded bg-primary px-4 py-2 text-white hover:bg-primary/90"
        >
          Try again
        </button>
      </div>
    </div>
  );
} 