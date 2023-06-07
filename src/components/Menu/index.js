import { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import Link from 'next/link';
import { MenuStyle } from './styled';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <HamburgerMenu
        isOpen={isOpen}
        menuClicked={handleClick}
        width={24}
        height={18}
        strokeWidth={2}
        rotate={0}
        color="black"
        borderRadius={0}
        animationDuration={0.5}
      />
      {isOpen && (
        <MenuStyle>
          <Link href="/todolist">tasks</Link>
          <Link href="/donelist">done</Link>
          <Link href="/motto">motto</Link>
        </MenuStyle>
      )}
    </div>
  );
}
