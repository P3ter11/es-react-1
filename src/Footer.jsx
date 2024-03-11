import React from 'react';

const MyFooter = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <span className="text-muted">My App &copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default MyFooter;