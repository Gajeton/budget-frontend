interface PaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

export const Pagination = ({ totalPages, onPageChange, currentPage } : PaginationProps) => {
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage); 
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="bg-gray-200 py-2 px-4">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;