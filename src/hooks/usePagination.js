export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);
    // Our implementation logic will go here
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
};
