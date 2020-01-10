import React from "react";
import DataTable from "react-data-table-component";
import "./styles.css";

export default function App() {
  const data = [
    {
      id: 1,
      name: "Paul"
    },
    {
      id: 2,
      name: "Peter"
    },
    {
      id: 3,
      name: "ML"
    },
    {
      id: 4,
      name: "Lari"
    }
  ];

  const columns = [
    {
      name: "ID",
      selector: "id",
      sortable: true
    },
    {
      name: "Name",
      selector: "name",
      sortable: true
    }
  ];

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <DataTable columns={columns} data={data} defaultSortField="name" />
    </div>
  );
}
