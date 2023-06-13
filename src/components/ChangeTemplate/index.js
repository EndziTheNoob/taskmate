import { Container } from './styled';
import { Circle, Colors } from './styled';
import { useState } from 'react';

export const Palette = ['#F4EDF9', '#FFD9E6', '#CCE8FF'];

export default function ChangeTemplate({ onSelect, defaultColor }) {
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  return (
    <Container>
      <p>Pick color for your list:</p>
      <Colors>
        {Palette.map((color) => (
          <Circle
            color={color}
            key={color}
            onClick={() => {
              onSelect(color);
              setSelectedColor(color);
            }}
            selected={selectedColor === color}
          />
        ))}
      </Colors>
    </Container>
  );
}
