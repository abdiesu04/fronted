import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Tahdda Todo List",
  description: "A beautifully crafted todo application by abdiesu04",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} min-h-screen
        bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50
        dark:from-gray-950 dark:via-slate-900 dark:to-zinc-900
        transition-colors duration-500`}>
        <div className="fixed inset-0 -z-10 opacity-40 dark:opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>
        <div className="fixed inset-0 -z-10 h-full bg-[radial-gradient(circle_800px_at_50%_-60%,#3b82f620,transparent)] dark:bg-[radial-gradient(circle_800px_at_50%_-60%,#3b82f610,transparent)]"></div>
        {children}
      </body>
    </html>
  );
}
