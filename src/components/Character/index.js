import { TaskmateArrival, TaskmateTalking, TaskmateLeaving } from './styled';
import { useReducer, useEffect, useState } from 'react';
import CharacterBubble from '@/components/CharacterBubble';

/**
 * @param {any} state
 * @param {string} action
 */
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
    case 'Hair':
      return (
        <TaskmateTalking
          src="/img/Taskmate_Hair_Basic.gif"
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

export default function Character({ type, onAnimationComplete }) {
  const [picture, dispatch] = useReducer(animationReducer, null);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowBubble(true);
    }, 3000);
    setTimeout(() => {
      setShowBubble(false);
    }, 12000);
  }, []);

  useEffect(() => {
    dispatch('Arrival');
    setTimeout(() => {
      dispatch(type === 'done' ? 'Hair' : 'Talking');
    }, 3000);
    setTimeout(() => {
      dispatch('Leaving');
    }, 13000);
    setTimeout(() => {
      onAnimationComplete?.();
    }, 16000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {showBubble && <CharacterBubble type={type} />}
      {picture}
    </>
  );
}
