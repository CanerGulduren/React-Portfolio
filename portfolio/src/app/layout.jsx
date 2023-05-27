import Navbar from "@/component/Navbar/Navbar";
import "./global.scss";
import { Nunito } from 'next/font/google';
 
const kanit = Nunito({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

 
export default function RootLayout({ children }) {
 return (
    <html lang="en" className= {kanit.className}>
      <body>
      <Navbar />
        {children}
        </body>
    </html>
  )
}
