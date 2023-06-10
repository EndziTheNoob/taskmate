import { useEffect, useState } from 'react';
import { BubbleContainer, BubbleContent } from './styled';
import { LoadUserName } from '@/services/user';

export default function Speaking() {
  const [quote, setQuote] = useState('');

  const name = LoadUserName();

  useEffect(() => {
    fetch('/api/quotes_morning')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote.replace('$name', name));
      })
      .catch((error) => console.error(error));
  }, []);

  const quoteLength = quote.length;
  const dynamicHeight = quoteLength * 1;

  return (
    <div>
      <BubbleContainer>
        <BubbleContent style={{ minHeight: `${dynamicHeight}px` }}>
          <p>{quote}</p>
        </BubbleContent>
      </BubbleContainer>
    </div>
  );
}
