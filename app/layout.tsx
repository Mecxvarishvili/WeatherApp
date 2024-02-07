import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Weather App",
  description: "This is the greates web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
