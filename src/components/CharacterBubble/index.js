import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { quotesMorning } from '../../pages/api/quotes_morning';

const BubbleContainer = styled.div`
  position: absolute;
  bottom: 22rem;
  left: 8rem;
  max-width: 400px;
`;

const BubbleContent = styled.div`
  position: relative;
  display: inline-block;
  padding: 1rem;
  border: 2px solid #000000;
  background-color: #ffffff;
  border-radius: 22px;
  box-shadow: -3px 4px rgb(129, 129, 129);
  color: #000000;
  font-size: 0.8rem;
  white-space: pre-line;
  min-width: 40%;
  font-family: var(--font-mono);
  margin-left: 2rem;
  text-align: center;
  z-index: 1;
`;

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
