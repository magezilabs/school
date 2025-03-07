// app/layout.tsx (Global layout)
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css';
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
      <html lang="en">
        <body>
          <Navbar />
          <main className="my-16 md:my-12 lg:my-12 mb-18">{children}</main>
          <Footer />
        </body>
      </html>
  );
}
