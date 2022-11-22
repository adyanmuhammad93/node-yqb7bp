import { useMemo } from 'react';
import {
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';
import {
  ChevronUpIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid';

export default function Table() {
  const data = useMemo(
    () => [
      {
        col1: 'OC202301',
        col6: 'John Doe',
        col12: 'Adobe Licence',
        col14: '240.000.000',
      },
      {
        col1: 'OC202301',
        col6: 'John Doe',
        col12: 'Adobe Licence',
        col14: '240.000.000',
      },
      {
        col1: 'OC202301',
        col6: 'John Doe',
        col12: 'Adobe Licence',
        col14: '240.000.000',
      },
      {
        col1: 'OC202301',
        col6: 'John Doe',
        col12: 'Adobe Licence',
        col14: '240.000.000',
      },
      {
        col1: 'OC202301',
        col6: 'John Doe',
        col12: 'Adobe Licence',
        col14: '240.000.000',
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Kode Budget',
        accessor: 'col1',
      },
      {
        Header: 'No PO/PAM',
        accessor: 'col6',
      },
      {
        Header: 'Tanggal PO/PAM',
        accessor: 'col12',
      },
      {
        Header: 'Deskripsi',
        accessor: 'col15',
      },
      {
        Header: 'Amount',
        accessor: 'col16',
      },
      {
        Header: 'Vendor',
        accessor: 'col17',
      },
      {
        Header: 'Apr 23',
        accessor: 'col18',
      },
      {
        Header: 'Jun 23',
        accessor: 'col19',
      },
    ],
    []
  );

  const tableInstance = useTable(
    {
      columns,
      data,
      // for pagination
      initialState: { pageIndex: 0, pageSize: 5 },
      // jangan dihapus, somehow ini fix error
      autoResetHiddenColumns: false,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    // for filter
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter } = state;

  return (
    <>
      <div className="mx-auto w-full max-w-[1370px]">
        <div className="flex flex-col space-y-8">
          <div className="bg-white rounded-2xl drop-shadow">
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-4">
                <label class="relative block">
                  <span class="absolute inset-y-0 left-0 flex items-center px-4">
                    <MagnifyingGlassIcon className="w-[24px] h-[24px] text-slate-400" />
                  </span>
                  <input
                    className="pl-12 pr-4 py-2 rounded-xl border border-2"
                    type="text"
                    placeholder="Masukkan Kata Kunci"
                    value={globalFilter}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                  />
                </label>
              </div>
              <button className="px-4 py-2 rounded-xl bg-blue-500 text-white">
                + CSV File
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl drop-shadow p-6">
            <table {...getTableProps} className="table-auto">
              <thead>
                {
                  // Loop over the header rows
                  headerGroups.map((headerGroup) => (
                    // Apply the header row props
                    <tr {...headerGroup.getHeaderGroupProps}>
                      {
                        // Loop over the headers in each row
                        headerGroup.headers.map((column) => (
                          // Apply the header cell props
                          <th
                            {...column.getHeaderProps(
                              column.getSortByToggleProps()
                            )}
                          >
                            <div className="flex">
                              {
                                // Render the header
                                column.render('Header')
                              }
                              <span>
                                {column.isSorted ? (
                                  column.isSortedDesc ? (
                                    <ChevronDownIcon className="w-[24px] h-[24px]" />
                                  ) : (
                                    <ChevronUpIcon className="w-[24px] h-[24px]" />
                                  )
                                ) : (
                                  ''
                                )}
                              </span>
                            </div>
                          </th>
                        ))
                      }
                    </tr>
                  ))
                }
              </thead>
              {/* Apply the table body props */}
              <tbody {...getTableBodyProps}>
                {page.map((row, i) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render('Cell')}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between">
            <div className="flex">
              <span className="px-4 py-2">Tampilkan : </span>
              <label class="relative block">
                <span class="absolute inset-y-0 right-0 flex items-center pr-2">
                  <svg class="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
                    <ChevronDownIcon />
                  </svg>
                </span>
                <select
                  className="pl-4 pr-8 py-2 rounded"
                  value={pageSize}
                  onChange={(e) => {
                    setPageSize(Number(e.target.value));
                  }}
                >
                  {[5, 10, 15, 20].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      {pageSize}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <div className="flex space-x-2">
              <button
                className={
                  !canPreviousPage
                    ? 'p-2 bg-white text-slate-300 rounded cursor-not-allowed'
                    : 'p-2 bg-white rounded'
                }
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <ChevronLeftIcon className="w-[24px] h-[24px]" />
              </button>
              {Array.from({ length: pageCount }, (_, i) => i + 1).map(
                (index) => {
                  return (
                    <button
                      className={
                        pageIndex === index - 1
                          ? 'px-4 py-2 bg-[#FF3D54] text-white rounded'
                          : 'px-4 py-2 bg-white rounded'
                      }
                      key={index}
                      onClick={() => gotoPage(index - 1)}
                    >
                      {index}
                    </button>
                  );
                }
              )}
              <button
                className={
                  !canNextPage
                    ? 'p-2 bg-white text-slate-300 rounded cursor-not-allowed'
                    : 'p-2 bg-white rounded'
                }
                onClick={() => nextPage()}
                disabled={!canNextPage}
              >
                <ChevronRightIcon className="w-[24px] h-[24px]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
