import "./global.scss";
import { Providers } from "@/redux/services/provider";
import { Mukta_Vaani } from 'next/font/google';
import Head from "next/head";
 
const mukta = Mukta_Vaani({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

 
export default function RootLayout({ children }) {
 return (
  
    <html lang="en" >
      <Head>
        <title>Caner Güldüren</title>
      </Head>
      <body className= {mukta.className}>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  )
}
