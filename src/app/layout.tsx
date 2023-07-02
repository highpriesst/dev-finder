import "./globals.css";

export const metadata = {
  title: "Dev Finder",
  description: "Frontend Mentor Challange",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
