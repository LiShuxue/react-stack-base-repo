import React, { useState } from 'react';
import { Button } from 'antd';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';
// import 'ag-grid-enterprise';

const TradeQuery: React.FunctionComponent = () => {
  const [columnDefs] = useState([
    {
      headerName: 'Make',
      field: 'make'
    },
    {
      headerName: 'Model',
      field: 'model'
    },
    {
      headerName: 'Price',
      field: 'price'
    }
  ]);
  const [rowData] = useState([
    {
      make: 'Toyota',
      model: 'Celica',
      price: 35000
    },
    {
      make: 'Ford',
      model: 'Mondeo',
      price: 32000
    },
    {
      make: 'Porsche',
      model: 'Boxter',
      price: 72000
    }
  ]);

  return (
    <div>
      <h1>TradeQuery</h1>
      <hr />
      {/* button style already be override by styles/override/override-antd.less */}
      <Button>default Button</Button>
      <br />
      <br />
      <Button disabled>disabled Button</Button>
      <hr />
      {/* ag-grid works well */}
      <div className="ag-theme-balham-dark" style={{ height: '150px', width: '650px' }} data-testid="datalist">
        <AgGridReact columnDefs={columnDefs} rowData={rowData} />
      </div>
    </div>
  );
};

export default TradeQuery;
