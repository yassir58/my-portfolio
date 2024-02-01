import "~/styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";
import Header from "./_components/Header";
import ui from "../styles/ui.module.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} `} >
      <main className={`${ui.gradientBg} flex min-h-screen flex-col items-center justify-start bg-[#060606] text-white`} >
      <Header />
      {children}
    </main>
<script>

</script>
      </body>
    </html>
  );
}
