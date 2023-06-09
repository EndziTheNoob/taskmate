import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { quotesMorning } from '../../pages/api/quotes_morning';

const BubbleContainer = styled.div`
  position: relative;
  bottom: 15rem;
`;

const BubbleContent = styled.div`
  position: relative;
  display: inline-block;
  padding: 1rem;
  border: 2px solid #000000;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: -3px 4px rgb(129, 129, 129);
  color: #000000;
  font-size: 0.8rem;
  white-space: pre-line;
  min-width: 600px;
  font-family: var(--font-mono);
  margin-left: 2rem;
  text-align: center;
`;

const CharacterBubble = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const randomQuote =
      quotesMorning[Math.floor(Math.random() * quotesMorning.length)];
    setQuote(randomQuote);
  }, []);

  const handleClick = () => {
    const randomQuote =
      quotesMorning[Math.floor(Math.random() * quotesMorning.length)];
    setQuote(randomQuote);
  };

  return (
    <BubbleContainer>
      {quote && (
        <BubbleContent onClick={handleClick}>
          <p>{quote}</p>
        </BubbleContent>
      )}
    </BubbleContainer>
  );
};

export default CharacterBubble;
