import "./global.scss";
import { Mukta } from 'next/font/google';
import { Providers } from "@/redux/services/provider";
 
const mukta = Mukta({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
});

 
export default function RootLayout({ children }) {
 return (
  
    <html lang="en" className= {mukta.className}>
      <body>
      <Providers>
        {children}
      </Providers>
      </body>
    </html>
  )
}
