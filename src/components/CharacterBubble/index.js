import { useEffect, useState } from 'react';
import { quotesMorning } from '../../pages/api/quotes_morning';
import { BubbleContainer, BubbleContent } from './styled';

const CharacterBubble = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    let timeout1, timeout2;

    // objevení bubliny po 2 vteřinách
    timeout1 = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotesMorning.length);
      const randomQuote = quotesMorning[randomIndex];
      setQuote(randomQuote);
    }, 2000);

    // Skrytí bubliny po 10 vteřinách
    timeout2 = setTimeout(() => {
      setQuote('');
    }, 10000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <BubbleContainer>
      {quote && (
        <BubbleContent>
          <p>{quote}</p>
        </BubbleContent>
      )}
    </BubbleContainer>
  );
};

export default CharacterBubble;
