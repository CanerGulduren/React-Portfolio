import "./global.scss";
import { Providers } from "@/redux/services/provider";
import { Mukta_Vaani } from 'next/font/google';
 
const mukta = Mukta_Vaani({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

 
export default function RootLayout({ children }) {
 return (
  
    <html lang="en" >
      <head>
        <title>Caner Güldüren</title>
      </head>
      <body className= {mukta.className}>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  )
}
