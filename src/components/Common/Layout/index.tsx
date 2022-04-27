import React from 'react';

type LayoutProps = {
  title?: string;
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <main className="flex flex-col flex-1 h-full min-h-screen px-6 py-8 bg-gray lg:px-12 lg:py-14">
        {children}
      </main>

      <footer></footer>
    </>
  );
};
