import { getUserEmail, signOut } from '@/services/user';
import Menu from '../Menu';
import { Nav } from './styled';
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
      // přesměruje uživatele na home-page
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
        {isOpen && userEmail && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '50%',
              transform: 'translateX(-60%)',
              color: '#666666',
              padding: '4px',
              borderRadius: '1rem',
              marginRight: '1rem',
              marginTop: '0.7rem',
              marginBottom: '2rem',
              backgroundColor: '#B6ACBD',
              fontFamily: 'Krona One',
              fontSize: '10px',
            }}
          >
            {userEmail}
          </div>
        )}
      </div>
      <button onClick={handleLogout}>
        <ImExit size={25} />
      </button>
    </Nav>
  );
};

export default Header;
