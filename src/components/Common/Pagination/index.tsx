import React, { useCallback } from 'react';
import cx from 'classnames';
import { usePagination, DOTS } from 'hooks/usePagination';

type PaginationProps = {
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}: PaginationProps) => {
  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });

  if (currentPage === 0 || paginationRange.length < 2) {
    return <></>;
  }
  const lastPage = paginationRange[paginationRange.length - 1];

  const onNext = useCallback(() => {
    if (currentPage === lastPage) return;
    onPageChange(currentPage + 1);
  }, [currentPage, onPageChange, lastPage]);

  const onPrevious = useCallback(() => {
    if (currentPage === 1) return;
    onPageChange(currentPage - 1);
  }, [currentPage, onPageChange]);

  return (
    <ul className={cx(className, '')}>
      <li
        className={cx('pagination-item arrow', {
          'text-gray-400 font-semibold pointer-events-none': currentPage === 1,
        })}
        onClick={onPrevious}
      >
        {'<'}
      </li>
      {paginationRange.map((pageNumber, id) => {
        if (pageNumber === DOTS) {
          return (
            <li key={id} className="pagination-item dots">
              &#8943;
            </li>
          );
        }

        return (
          <li
            key={id}
            className={cx('pagination-item', {
              'bg-blue-500 text-white': pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li
        className={cx('pagination-item arrow', {
          'text-gray-400 font-semibold pointer-events-none': currentPage === lastPage,
        })}
        onClick={onNext}
      >
        {'>'}
      </li>
    </ul>
  );
};
