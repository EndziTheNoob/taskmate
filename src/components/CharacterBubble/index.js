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

// const CharacterBubble = () => {
//   const [quote, setQuote] = useState('');

//   useEffect(() => {
//     let timeout1, timeout2;

//     // objevení bubliny po 2 vteřinách
//     timeout1 = setTimeout(() => {
//       const randomIndex = Math.floor(Math.random() * quotesMorning.length);
//       const randomQuote = quotesMorning[randomIndex];
//       setQuote(randomQuote);
//     }, 2000);

//     // Skrytí bubliny po 10 vteřinách
//     timeout2 = setTimeout(() => {
//       setQuote('');
//     }, 10000);

//     return () => {
//       clearTimeout(timeout1);
//       clearTimeout(timeout2);
//     };
//   }, []);

//   return (
//     <BubbleContainer>
//       {quote && (
//         <BubbleContent>
//           <p>{quote}</p>
//         </BubbleContent>
//       )}
//     </BubbleContainer>
//   );
// };

// export default CharacterBubble;
