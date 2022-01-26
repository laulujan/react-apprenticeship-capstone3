import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="not-found">
      <img src="/404.gif" alt="not found" />
      <Link to="/login" className="home-link">
        Login
      </Link>
    </section>
  );
}

export default NotFoundPage;
