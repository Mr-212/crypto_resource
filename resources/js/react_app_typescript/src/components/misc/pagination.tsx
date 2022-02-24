import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
const items = Array(1000).fill(0);
  
  export const  PaginatedItems = ({ itemsPerPage, onPageChange }) => {
     
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
      
     
      console.log(items.length);
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(items.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);
  
    // Invoke when user click to request another page.
    const handlePageClick = (event: React.ChangeEvent<unknown>, value: number) => {
      console.log(value)
      // let page = event.selected ;
      let page = value-1;
      const newOffset = (page * itemsPerPage) % items.length;
      
      onPageChange(newOffset|1);
      console.log(
        // `User requested page number ${event.selected}, which is offset ${newOffset}`
        `User requested page number ${value}, which is offset ${newOffset}`

      );
      setItemOffset(newOffset);
    };
  
    return (
      <>
        {/* <ReactPaginate
          onPageChange={handlePageClick}
        //   pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          nextLabel=">"
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination bg-black"
          activeClassName="active"
        //   renderOnZeroPageCount={null}
        /> */}
        <Pagination 
        count={pageCount} 
        // defaultPage={6} 
        siblingCount={0} 
        onChange={handlePageClick}
        />


      </>
    );
  }