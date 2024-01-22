
// src/components/Navigation.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/plan-created">Plan Created</Link>
        </li>
        <li>
          <Link to="/planning1">Planning 1</Link> {/* New link */}
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
