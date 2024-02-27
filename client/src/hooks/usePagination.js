import { useState } from 'react';
import useGeneros from '../hooks/useGeneros'

const usePagination = () => {

  const { dataBDD } = useGeneros()
 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; 
    
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataBDD?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil( dataBDD?.lenght / itemsPerPage)
  

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1)
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1){
      setCurrentPage(currentPage -1);
    }
    
  };

  return {
    currentPage,
    currentItems,
    totalPage,
    handleNextPage,
    handlePrevPage
  };
};

export default usePagination;








// import { useState } from 'react';

// const usePagination = (itemsPerPage, initialPage = 1) => {
 
//   const [currentPage, setCurrentPage] = useState(initialPage);

//   const paginate = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   const nextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const prevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   return {
//     currentPage,
//     itemsPerPage,
//     paginate,
//     prevPage,
//     nextPage,
//   };
// };

// export default usePagination;