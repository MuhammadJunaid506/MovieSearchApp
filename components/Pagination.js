'use client';
const Pagination = ({ onPageChange, page, totalPages }) => {
    return (
      <div className="flex justify-between items-center mt-4">
        <button onClick={() => onPageChange(page - 1)} disabled={page === 1} className="p-2 rounded-2xl bg-blue-500 text-white">
          Previous
        </button>
        <span>{`Page ${page} of ${totalPages}`}</span>
        <button onClick={() => onPageChange(page + 1)} disabled={page === totalPages} className="p-2 rounded-2xl bg-blue-500 text-white">
          Next
        </button>
      </div>
    );
  };
  
  export default Pagination;
  