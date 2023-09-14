"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic';

import Header from '@/app/components/Header';
const Footer = dynamic(() => import('@/app/components/Footer'));

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
