import { TaskmateArrival, TaskmateTalking, TaskmateLeaving } from './styled';
import { useReducer } from 'react';

function animationReducer(state, action) {
  switch (action) {
    case 'Arrival':
      return (
        <TaskmateArrival
          src="/img/Taskmate_Chuze_Basic.gif"
          alt="taskmate2"
          width={300}
          height={300}
        />
      );
    case 'Talking':
      return (
        <TaskmateTalking
          src="/img/Taskmate_Kafe.gif"
          alt="taskmate2"
          width={300}
          height={300}
        />
      );
    case 'Leaving':
      return (
        <TaskmateLeaving
          src="/img/Taskmate_Chuze_Basic.gif"
          alt="taskmate2"
          width={300}
          height={300}
        />
      );
    default:
      return state;
  }
}

export default function Character() {
  const [picture, dispatch] = useReducer(animationReducer, null);

  return (
    <>
      <button onClick={() => dispatch('Arrival')}>test</button>
      <button onClick={() => dispatch('Talking')}>test</button>
      <button onClick={() => dispatch('Leaving')}>test</button>
      {picture}
    </>
  );
}
