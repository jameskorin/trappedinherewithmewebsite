import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'

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
      </body>
    </html>
  );
}