import { useState } from 'react';
import { getBands } from '../redux/bandsSlice'
import { useSelector } from 'react-redux'

const usePaginationBands = () => {

  const bandBDD = useSelector(getBands)
  
 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15; 
    
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bandBDD?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil( bandBDD?.length / itemsPerPage ) 
  

  const handleNextPage = () => {
       setCurrentPage(currentPage + 1)
       console.log(bandBDD)
  };

  const handlePrevPage = () => {
       setCurrentPage(currentPage - 1);
    
  };

  return {
    currentPage,
    currentItems,
    totalPage,
    handleNextPage,
    handlePrevPage
  };
};

export default usePaginationBands;
