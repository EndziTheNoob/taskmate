import { getUserEmail, signOut } from '@/services/user';
import Menu from '../Menu';
import { Nav } from './styled';
import { useEffect, useState } from 'react';
import { ImExit } from 'react-icons/im';

const Header = () => {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    getUserEmail().then((email) => setUserEmail(email));
  }, []);

  const handleClick = () => {
    signOut().then(() => {
      setUserEmail(null);
      window.location.href = '/';
      //přesměruje uživatele na home-page
    });
  };

  return (
    <Nav>
      <Menu />
      {userEmail && <span>{userEmail}</span>}
      <button onClick={handleClick}>
        <ImExit size={25} />
      </button>
    </Nav>
  );
};

export default Header;
