'use client';
const Pagination = ({ onPageChange, page, totalPages }) => {
  const handleNextPage = () => {
    const newPage = page + 1;
    console.log(`Changing page to: ${newPage}`);
    onPageChange(newPage);
  };

  const handlePreviousPage = () => {
    const newPage = page - 1;
    console.log(`Changing page to: ${newPage}`);
    onPageChange(newPage);
  };

  return (
    <div className="flex justify-between items-center mt-4">
      <button onClick={handlePreviousPage}  className="p-2 rounded-2xl bg-blue-500 text-white">
        Previous
      </button>
      <span>{`Page ${page} of ${totalPages}`}</span>
      <button onClick={handleNextPage} className="p-2 rounded-2xl bg-blue-500 text-white">
        Next
      </button>
    </div>
  );
};

export default Pagination;
  