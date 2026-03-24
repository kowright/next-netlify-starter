"use client";
import { useState } from "react";

type VideoPlayerProps = {
    videos: string[];
}

export default function VideoSequence({videos }: VideoPlayerProps) {

    const [current, setCurrent] = useState(0);
    const [mode, setMode] = useState("playing");

    const handleEnded = () => {
        if (current + 1 < videos.length) {
          
            setMode("black");
            setTimeout(() => {
                setCurrent((prev) => prev + 1);
                setMode("playing");
            }, 2000);
        } else {

            setMode("black");

            setTimeout(() => {
                setCurrent(0);     
                setMode("playing"); 
            }, 5000);
        }
    };

    if (mode === "black") {
        return <div className="w-full h-full bg-black" />;
    }

    return (
        <video
            key={current}
            src={videos[current]}
            autoPlay
            muted
            playsInline
            onEnded={handleEnded}
            className="w-full h-full object-cover"
        />
    );
}