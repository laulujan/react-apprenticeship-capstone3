import React, { useState } from 'react';
import { MdStickyNote2, MdArchive } from 'react-icons/md';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
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

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavIcon to="#">
            <FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiOutlineClose onClick={showSidebar} />
            </NavIcon>
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
                <SidebarLabel>Log out</SidebarLabel>
              </div>
            </SidebarItem>
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
