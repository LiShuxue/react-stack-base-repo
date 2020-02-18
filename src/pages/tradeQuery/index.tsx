import React from "react";
import { Button } from 'antd';

const TradeQuery: React.FunctionComponent = () => {
  return (
  <div>
    <h1>TradeQuery</h1>
    {/* primary style already be override by styles/override-antd.less */}
    <Button type="primary">Button</Button>
  </div>
  );
};

export default TradeQuery;
