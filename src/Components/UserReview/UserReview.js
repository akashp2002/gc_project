import React, { useEffect, useState } from "react";
import Table from "../../Table/Table";

const ListUsers = () => {
  const [data] = useState([
    {
      name: "Raheem",
      Date: "12/10/23",
      review: "Good quality product",
    },
    {
        name: "Raheem",
        Date: "12/10/23",
        review: "Good quality product",
      },
      {
        name: "Raheem",
        Date: "12/10/23",
        review: "Good quality product",
      },
  ]);


  const columns = [
    {
      name: "User id",
      selector: (row) => row?.name,
      sortable: true,
    },
    {
      name: "Date",
      selector: (row) => row?.Date,
      sortable: true,
    },
    {
      name: "Review",
      selector: (row) => row?.review,
      sortable: true,
    },
   
  ];

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      <Table columns={columns} recordData={data} />;
    </>
  );
};

export default ListUsers;