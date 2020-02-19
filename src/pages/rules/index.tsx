import React from 'react';
import { connect } from 'react-redux';
import actionCreators from '../../store/actions';

const Rules: React.FunctionComponent = (props: any) => {
  const { stateA, stateB, actionCreatorA, asyncActionCreatorB } = props;
  const buttonAction2 = () => {
    // can do more thing
    asyncActionCreatorB('async changed');
  };

  return (
    <div>
      rules
      <hr />
      <button onClick={() => actionCreatorA('changed')}>click this button to change the stateA</button>
      <br />
      stateA: {stateA}
      <br />
      <button onClick={buttonAction2}>click this button to async change the stateB</button>
      <br />
      stateB: {stateB}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  let { stateA, stateB } = state;
  return {
    stateA,
    stateB
  };
};

const mapDispatchToProps = actionCreators;

export default connect(mapStateToProps, mapDispatchToProps)(Rules);
