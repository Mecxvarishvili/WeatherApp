import './main.css';
import Header from "./_components/Header";
import { ThemeProvider } from 'next-theme';
import Provider from './_components/ThemeProvider';

export const metadata = {
  title: 'Weather App',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html>
  )
}
