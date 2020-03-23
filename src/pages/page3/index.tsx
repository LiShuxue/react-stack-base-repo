import React from 'react';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreatorA, asyncActionCreatorB } from 'src/store/actions';

const Page3: React.FC = (props: any) => {
  const stateA = useSelector((state: any) => state.stateA);
  const stateB = useSelector((state: any) => state.stateB);
  const dispatch = useDispatch();

  const buttonAction2 = () => {
    // can do more thing
    dispatch(asyncActionCreatorB());
  };

  return (
    <div>
      <h1>page 3</h1>
      <hr />
      <Button onClick={() => dispatch(actionCreatorA('changed'))}>click this button to change the stateA</Button>
      <br />
      <h1>stateA: {stateA}</h1>
      <br />
      <Button onClick={buttonAction2}>click this button to async change the stateB</Button>
      <br />
      <h1>stateB: {stateB}</h1>
    </div>
  );
};

export default Page3;
