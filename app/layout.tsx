import "./globals.css";

export const metadata = {
  title: 'Google Clone',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className="bg-[#262626] w-full min-h-screen">{children}</body>
    </html>
  );
}
