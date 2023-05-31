
import Navbar from "@/component/navbar/Navbar";
import "./global.scss";
import { Nunito } from 'next/font/google';
import { Providers } from "@/redux/services/provider";
import SideBar from "@/component/sidebar/SideBar";
 
const nunito = Nunito({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

 
export default function RootLayout({ children }) {
 return (
  
    <html lang="en" className= {nunito.className}>
      <body>
      <Providers>
      <Navbar />
      <SideBar />
        {children}
      </Providers>
      </body>
    </html>
  )
}
