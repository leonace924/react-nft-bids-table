import React, { useState, useMemo } from 'react';
import cx from 'classnames';
import { Error, Pagination, View } from 'components/Common';
import { useCurrencyFormatter } from 'hooks/useCurrencyFormatter';
import { TableColumnList } from 'lib/constant';
import { useExpiredBid } from 'hooks/useExpiredBid';
import { useRelativeTime } from 'hooks/useRelativeTime';

type TableProps<T> = {
  data?: T[];
  pageSize?: number;
};

type TableCellProps = {
  as?: 'th' | 'td';
  className?: string;
  children: React.ReactNode;
};

const TableCell = ({ as = 'th', className, children }: TableCellProps) => {
  const Component = as;
  return <Component className={cx('border border-slate-300 p-4', className)}>{children}</Component>;
};

export const Table = <T extends object>({ data, pageSize = 10 }: TableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const formatCurrency = useCurrencyFormatter();
  const relativeTime = useRelativeTime();
  const isExpiredBid = useExpiredBid();

  if (!data || !data.length) return <Error type="noData" />;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, pageSize]);

  return (
    <View className="inline-block">
      <table className="border border-separate border-slate-400">
        <thead className="bg-slate-50">
          <tr>
            {TableColumnList.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentTableData?.map((item: any) => (
            <tr key={item.id} className={cx({ 'bg-rose-200': isExpiredBid(item.expiration) })}>
              <TableCell as="td">{item.id}</TableCell>
              <TableCell as="td">{formatCurrency(item.price)}</TableCell>
              <TableCell as="td">{item.bidder}</TableCell>
              <TableCell as="td">{relativeTime(item.expiration)}</TableCell>
            </tr>
          ))}
        </tbody>
      </table>
      <View className="text-center">
        <Pagination
          className="inline-flex items-center gap-4 mt-4"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </View>
    </View>
  );
};
