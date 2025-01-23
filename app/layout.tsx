import { Analytics } from '@vercel/analytics/next';
import './globals.css'

export const metadata = {
  title: 'Error404: The Lost Meme of the Internet',
  description: 'Error404 Meme Coin Website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
