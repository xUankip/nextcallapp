import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => (
    <html>
    <body>
    <div>
      <header>
        <nav>
          <a href="/pages/page">Home</a> |
            <a href="/pages/register">Register</a> |
            <a href="/login">Login</a> |
            <a href="/profile">Profile</a> |
            <a href="/pages/page">Accounts</a>
        </nav>
      </header>
      <main>{children}</main>
    </div>
    </body>
    </html>
);

export default Layout;
