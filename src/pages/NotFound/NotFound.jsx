import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Section = styled.section`
  display: grid;
`;
const Img = styled.img`
  margin: auto;
`;
const LinkStyled = styled(Link)`
  text-align: center;
  text-decoration: none;
  font-size: 40px;
`;

function NotFoundPage() {
  return (
    <Section className="not-found">
      <Img src="/404.gif" alt="not found" />
      <LinkStyled to="/login" className="home-link">
        Login
      </LinkStyled>
    </Section>
  );
}

export default NotFoundPage;
