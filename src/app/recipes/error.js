"use client"; // Error components must be Client components
export default function Error({ error, reset }) {
  return (
    <div className=" justify-center items-center h-screen flex flex-col">
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
