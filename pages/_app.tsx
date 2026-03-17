import '@/styles/globals.css'
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // optional (for Tailwind)
  weight: ["400", "600", "700"],
});

function Application({ Component, pageProps }) {

  return(
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
  )
}

export default Application
