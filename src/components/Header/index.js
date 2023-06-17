import { getUserEmail, signOut } from '@/services/user';
import Menu from '../Menu';
import { Nav, DivLog } from './styled';
import { useEffect, useState } from 'react';
import { ImExit } from 'react-icons/im';
import { FaUser } from 'react-icons/fa';

const Header = () => {
  const [userEmail, setUserEmail] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    getUserEmail().then((email) => setUserEmail(email));
  }, []);

  const handleLogout = () => {
    signOut().then(() => {
      setUserEmail(null);
      window.location.href = '/';
      // redirection of user at home-page
    });
  };

  return (
    <Nav>
      <Menu />
      <div style={{ position: 'relative' }}>
        <FaUser
          onClick={handleMenuClick}
          size={25}
          style={{ cursor: 'pointer' }}
        />
        {isOpen && userEmail && <DivLog>{userEmail}</DivLog>}
      </div>
      <button onClick={handleLogout}>
        <ImExit size={25} />
      </button>
    </Nav>
  );
};

export default Header;
