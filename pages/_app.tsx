import '@/styles/globals.css'
import { Inter } from "next/font/google";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter", // optional (for Tailwind)
  weight: ["400", "600", "700", "800", "900"],
});

function Application({ Component, pageProps }: AppProps) {
    const router = useRouter();


    const [showSplash, setShowSplash] = useState<boolean | null>(null);
    const [fadeOut, setFadeOut] = useState<boolean>(false);

    useEffect(() => {
        const hasSeenSplash = sessionStorage.getItem("seenSplash");

        if (hasSeenSplash) {
            setShowSplash(false);
            return;
        }

        setShowSplash(true);
        sessionStorage.setItem("seenSplash", "true");

        // Start fade out 
        const fadeTimer = setTimeout(() => {
            setFadeOut(true);
        }, 4500);

        // Remove splash after fade completes
        const removeTimer = setTimeout(() => {
            setShowSplash(false);
        }, 7000);

        return () => {
            clearTimeout(fadeTimer);
            clearTimeout(removeTimer);
        };
    }, []);

    if (showSplash === null) return null;

    return (
        <>
        { showSplash && (
            <div
                className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"
                    }`}
            >
                <h1 className='text-white drop-shadow-glow font-black tracking-widest text-4xl lg:text-7xl animate-pulse'>KORTNEY WRIGHT</h1>
            </div>
        )}

        <AnimatePresence mode="wait">
            <motion.div
                key={router.route}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
            >
                <main className={inter.className}>
                    <Component {...pageProps} />
                </main>
            </motion.div>
            </AnimatePresence>
        </>
    );
}

export default Application
