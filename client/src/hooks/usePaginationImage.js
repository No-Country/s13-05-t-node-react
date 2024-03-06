import { useState } from 'react';
import { getFotos } from '../redux/authSlice'
import { useSelector } from 'react-redux'

const usePaginationPhotos = () => {

  const Fotos = useSelector(getFotos)
  
 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; 
    
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Fotos?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil( Fotos?.length / itemsPerPage ) 
  

  const handleNextPage = () => {
       setCurrentPage(currentPage + 1)
       console.log(Fotos)
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

export default usePaginationPhotos;
