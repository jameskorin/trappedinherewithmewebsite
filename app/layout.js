import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Trapped In Here With Me',
  description: 'A game by James Korin',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        <Analytics/>
      </body>
    </html>
  );
}