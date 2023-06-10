import { useEffect, useState } from 'react';
import { BubbleContainer, BubbleContent } from './styled';
import { LoadUserName } from '@/services/user';

export default function Speaking() {
  const [quote, setQuote] = useState('');
  const [name, setName] = useState('');
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    setName(LoadUserName());
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setShowBubble(true);
    }, 3000);
    setTimeout(() => {
      setShowBubble(false);
    }, 12000);
  }, []);

  useEffect(() => {
    fetch('/api/quotes_morning')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.quote.replace('$name', name));
      })
      .catch((error) => console.error(error));
  }, [name]);

  const quoteLength = quote.length;
  const dynamicHeight = quoteLength * 1;

  return (
    <div>
      <BubbleContainer>
        {showBubble && (
          <BubbleContent style={{ minHeight: `${dynamicHeight}px` }}>
            <p>{quote}</p>
          </BubbleContent>
        )}
      </BubbleContainer>
    </div>
  );
}
