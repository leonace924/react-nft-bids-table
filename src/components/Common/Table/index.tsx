import React, { useState, useMemo } from 'react';
import cx from 'classnames';
import { Error, Pagination, View } from 'components/Common';
import { useCurrencyFormatter } from 'hooks/useCurrencyFormatter';
import { TableColumnList } from 'lib/constant';

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

  if (!data || !data.length) return <Error type="noData" />;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, data, pageSize]);

  return (
    <View className="inline-block">
      <table className="border-separate border border-slate-400">
        <thead className="bg-slate-50">
          <tr>
            {TableColumnList.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentTableData?.map((item: any) => (
            <tr key={item.id}>
              <TableCell as="td">{item.id}</TableCell>
              <TableCell as="td">{formatCurrency(item.price)}</TableCell>
              <TableCell as="td">{item.bidder}</TableCell>
              <TableCell as="td">{item.expiration}</TableCell>
            </tr>
          ))}
        </tbody>
      </table>
      <View className="text-center">
        <Pagination
          className="mt-4 inline-flex items-center gap-4"
          currentPage={currentPage}
          totalCount={data.length}
          pageSize={pageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </View>
    </View>
  );
};
