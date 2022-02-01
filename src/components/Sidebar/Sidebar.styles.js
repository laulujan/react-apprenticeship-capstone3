import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.div`
  background-color: white;
  border-bottom: 1px solid black;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #e1e9fc;
`;

export const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  color: #242423;
`;

export const SidebarNav = styled.nav`
  background-color: white;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 80px;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

export const SidebarWrap = styled.div`
  width: 100%;
`;
export const SidebarLink = styled(Link)`
  display: flex;
  color: #242423;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;
export const SidebarItem = styled.div`
  display: flex;
  color: #242423;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  font-size: 18px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;
export const SidebarLabel = styled.span`
  margin-left: 16px;
`;
