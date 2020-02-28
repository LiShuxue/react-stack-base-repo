// import React from 'react';
// import { connect } from 'react-redux';
// import { actionCreatorA, asyncActionCreatorB } from '../../store/actions';

// export const Rules: React.FunctionComponent = (props: any) => {
//   const { stateA, stateB, actionCreatorA, asyncActionCreatorB } = props;
//   const buttonAction2 = () => {
//     // can do more thing
//     asyncActionCreatorB();
//   };

//   return (
//     <div>
//       <h1>Rules</h1>
//       <hr />
//       <button onClick={() => actionCreatorA('changed')}>click this button to change the stateA</button>
//       <br />
//       <h1>stateA: {stateA}</h1>
//       <br />
//       <button onClick={buttonAction2}>click this button to async change the stateB</button>
//       <br />
//       <h1>stateB: {stateB}</h1>
//     </div>
//   );
// };

// const mapStateToProps = (state: any) => {
//   let { stateA, stateB } = state;
//   return {
//     stateA,
//     stateB
//   };
// };

// const mapDispatchToProps = {
//   actionCreatorA,
//   asyncActionCreatorB
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Rules);

/**
 *  use react-redux hooks to refactor the above code
 */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreatorA, asyncActionCreatorB } from '../../store/actions';

const Rules: React.FC = (props: any) => {
  const stateA = useSelector((state: any) => state.stateA);
  const stateB = useSelector((state: any) => state.stateB);
  const dispatch = useDispatch();

  const buttonAction2 = () => {
    // can do more thing
    dispatch(asyncActionCreatorB());
  };

  return (
    <div>
      <h1>Rules</h1>
      <hr />
      <button onClick={() => dispatch(actionCreatorA('changed'))}>click this button to change the stateA</button>
      <br />
      <h1>stateA: {stateA}</h1>
      <br />
      <button onClick={buttonAction2}>click this button to async change the stateB</button>
      <br />
      <h1>stateB: {stateB}</h1>
    </div>
  );
};

export default Rules;
