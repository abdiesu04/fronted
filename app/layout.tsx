import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "✨ Magical Todo App",
  description: "A magically crafted todo application by abdiesu04",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark:bg-gray-900">
      <body className={`${poppins.className} min-h-screen
        bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]
        from-blue-100 via-purple-50 to-rose-100
        dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20
        transition-colors duration-500`}>
        <div className="fixed inset-0 -z-10 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="pointer-events-none fixed inset-0 -z-10 h-full bg-[radial-gradient(circle_500px_at_50%_200px,#c084fc20,transparent)]"></div>
        {children}
      </body>
    </html>
  );
}
