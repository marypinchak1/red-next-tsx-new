import './globals.css'
import { Inter } from 'next/font/google'

// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

// Import Swiper styles
import 'swiper/swiper.min.css';



// Components
import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SONMA',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
