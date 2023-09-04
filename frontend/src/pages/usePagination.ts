import { useState } from 'react';

interface IPaginationHook {
  offset: number;
  nextPage: () => void;
  resetPagination: () => void;
}

export const usePagination = (start: number, limitPerPage: number): IPaginationHook => {
  const [offset, setOffset] = useState<number>(start);

  const nextPage = (): void => {
    setOffset((prevOffset) => prevOffset + limitPerPage);
  };

  const resetPagination = (): void => {
    setOffset(start);
  };

  return {
    offset,
    nextPage,
    resetPagination,
  };
};
