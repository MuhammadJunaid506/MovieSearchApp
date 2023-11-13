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
      <button onClick={handlePreviousPage}  className="p-3 rounded-2xl w-22 bg-black text-white">
        Previous
      </button>
      <span>{`Page ${page} of ${totalPages}`}</span>
      <button onClick={handleNextPage} className="p-3 rounded-2xl w-20 bg-black text-white">
        Next
      </button>
    </div>
  );
};

export default Pagination;
  