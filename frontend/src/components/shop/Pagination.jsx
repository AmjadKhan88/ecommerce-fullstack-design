export default function Pagination({ total, perPage, page, setPage }) {
  let pages = Math.ceil(total / perPage);

  return (
    <div className="flex gap-2 justify-center mt-8">
      {[...Array(pages)].map((_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          className={`px-3 py-1 border rounded

${page == i + 1 && "bg-blue-600 text-white"}

`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
}
