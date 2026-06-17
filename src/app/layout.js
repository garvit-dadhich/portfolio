import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Free Single Page Next.js Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
