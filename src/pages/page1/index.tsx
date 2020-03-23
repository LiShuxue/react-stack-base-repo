import React, { useState } from 'react';
import { Button } from 'antd';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-enterprise';

const Page1: React.FC = () => {
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

  const theme = useSelector((state: any) => state.theme);
  const agClassName = cn({ 'ag-theme-balham': theme === 'light' }, { 'ag-theme-balham-dark': theme === 'dark' });

  return (
    <div>
      <h1>page 1</h1>
      <hr />
      {/* button style already be override by styles/override/override-antd.less */}
      <Button>default Button</Button>
      <br />
      <Button disabled>disabled Button</Button>
      <br />
      <Button type="primary">primary Button</Button>
      <hr />
      {/* ag-grid */}
      <div className={agClassName} style={{ height: '150px', width: '650px' }} data-testid="datalist">
        <AgGridReact columnDefs={columnDefs} rowData={rowData} />
      </div>
    </div>
  );
};

export default Page1;
