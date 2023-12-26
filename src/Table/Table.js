import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const TableFrame = ({ columns, recordData }) => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    setRecords(recordData);
  }, [recordData]);


  return (
    <div className="p-8 bg-gray-100">
      <DataTable
        columns={columns}
        data={records}
        fixedHeader
      />
    </div>
  );
};

export default TableFrame;