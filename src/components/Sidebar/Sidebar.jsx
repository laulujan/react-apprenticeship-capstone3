import React, { useState, useEffect, useRef } from 'react';
import { MdStickyNote2, MdArchive } from 'react-icons/md';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import Searchbar from '../Searchbar/Searchbar';
import { useAuth } from '../../Provider/Auth/Provider';
import {
  Nav,
  NavIcon,
  SidebarItem,
  SidebarLabel,
  SidebarLink,
  SidebarNav,
  SidebarWrap,
} from './Sidebar.styles';

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const { logout, user } = useAuth();
  const ref = useRef();

  const showSidebar = () => setSidebar(!sidebar);

  const onClickSignout = () => {
    logout();
    setSidebar(!sidebar);
  };
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (sidebar && ref.current && !ref.current.contains(e.target)) {
        setSidebar(!sidebar);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [sidebar]);

  return (
    <>
      {user && (
        <>
          <Nav>
            <NavIcon to="#">
              <FaBars onClick={showSidebar} />
            </NavIcon>
            <Searchbar />
          </Nav>
          <SidebarNav sidebar={sidebar}>
            <SidebarWrap ref={ref}>
              <SidebarLink to="/notes">
                <div>
                  <MdStickyNote2 />
                  <SidebarLabel>Notes</SidebarLabel>
                </div>
              </SidebarLink>
              <SidebarLink to="/archive">
                <div>
                  <MdArchive />
                  <SidebarLabel>Archive</SidebarLabel>
                </div>
              </SidebarLink>
              <SidebarItem>
                <div>
                  <FaSignOutAlt />
                  <SidebarLabel onClick={onClickSignout}>Log out</SidebarLabel>
                </div>
              </SidebarItem>
            </SidebarWrap>
          </SidebarNav>
        </>
      )}
    </>
  );
};

export default Sidebar;
