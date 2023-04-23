import "./globals.css";

export const metadata = {
  title: "Google v2"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  
  return (
    <html lang="en" className={"dark"}>
      <body className="dark:bg-[#262626] w-full min-h-screen">{children}</body>
    </html>
  );
}
