import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

const poppins = Poppins({
  variable: "--font-poppins", 
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
  <main className={`${poppins.variable} font-sans`}>
    <Component {...pageProps} />
  </main>
  );
}
