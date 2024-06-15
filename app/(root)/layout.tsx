import React from 'react';

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <main>
      SIDEBAR
      {children}
    </main>
  );
};

export default RootLayout;
