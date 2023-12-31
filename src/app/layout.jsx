"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic';

import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
  //   title: 'Create Next App',
  //   description: 'Generated by create next app',
  // }

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />   */}
        <Header />
          {children}
          <ProgressBar
            height="2px"
            color="#6610f2"
            options={{ showSpinner: true }}
            shallowRouting
          />
        <Footer />
      </body>
    </html>
  )
}
