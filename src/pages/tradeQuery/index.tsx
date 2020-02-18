import React, { useState } from "react";

import { Button } from "antd";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import 'ag-grid-enterprise';

const TradeQuery: React.FunctionComponent = () => {
  const [columnDefs] = useState([
    {
      headerName: "Make",
      field: "make"
    },
    {
      headerName: "Model",
      field: "model"
    },
    {
      headerName: "Price",
      field: "price"
    }
  ]);
  const [rowData] = useState([
    {
      make: "Toyota",
      model: "Celica",
      price: 35000
    },
    {
      make: "Ford",
      model: "Mondeo",
      price: 32000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    }
  ]);

  return (
    <div>
      <h1>TradeQuery</h1>
      {/* primary style already be override by styles/override-antd.less */}
      <Button type="primary">Button</Button>

      <hr />

      {/* ag-grid works well */}
      <div className="ag-theme-balham" style={{height: '150px', width: '650px'}}>
        <AgGridReact columnDefs={columnDefs} rowData={rowData} />
      </div>
    </div>
  );
};

export default TradeQuery;
