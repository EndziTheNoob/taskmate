import { TaskmateArrival, TaskmateTalking, TaskmateLeaving } from './styled';
import { useReducer, useEffect } from 'react';

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

  useEffect(() => {
    dispatch('Arrival');
    setTimeout(() => {
      dispatch('Talking');
    }, 3000);
    setTimeout(() => {
      dispatch('Leaving');
    }, 13000);
  }, []);

  return <>{picture}</>;
}
