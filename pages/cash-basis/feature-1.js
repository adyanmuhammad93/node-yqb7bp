import { Card, Label, TextInput, Checkbox, Button } from 'flowbite-react';
import { useRef, useEffect } from 'react';
import jspreadsheet from 'jspreadsheet-ce';
import '../../node_modules/jspreadsheet-ce/dist/jspreadsheet.css';
import '../../node_modules/jspreadsheet-ce/dist/jspreadsheet.datatables.css';

export default function Feature1() {
  const jRef = useRef(null);
  const options = {
    data: [[]],
    freezeColumns: 1,
    freezeRow: 1,
    minDimensions: [10, 100],
    tableOverflow: true,
    lazyLoading: true,
    tableWidth: '960px',
    tableHeight: '500px',
    columns: [
      {
        type: 'text',
        title: 'ID',
        width: '50px',
      },
      {
        type: 'text',
        title: 'Type of COA',
        width: '300px',
      },
      {
        type: 'text',
        title: 'Must Have',
        width: '100px',
      },
      {
        type: 'text',
        title: 'M/Y/P',
        width: '100px',
      },
      {
        type: 'text',
        title: 'System',
        width: '100px',
      },
      {
        type: 'text',
        title: 'PIC',
        width: '100px',
      },
      {
        type: 'calendar',
        title: 'Month Start',
        width: '150px',
      },
      {
        type: 'calendar',
        title: 'Month End',
        width: '150px',
      },
      {
        type: 'numeric',
        title: 'Duration',
        width: '150px',
      },
      {
        type: 'text',
        title: 'Payment Mode',
        width: '150px',
      },
      {
        type: 'text',
        title: 'Code',
        width: '150px',
      },
      {
        type: 'text',
        title: 'Description',
        width: '150px',
      },
      {
        type: 'text',
        title: 'Remarks',
        width: '150px',
      },
      {
        type: 'numeric',
        title: 'Nominal',
        width: '150px',
        mask: 'Rp. #.##,00',
      },
    ],
  };

  useEffect(() => {
    if (!jRef.current.jspreadsheet) {
      jspreadsheet(jRef.current, options);
    }
    console.log(jRef.current.jexcel.getData());
  }, [options]);
  return (
    <>
      <h1 className="text-3xl mb-6">
        Cash Basis / Commputer Maintenance and Repair
      </h1>
      <div ref={jRef} />
    </>
  );
}
