import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { useNavigate } from "react-router-dom";
import { TypewriterEffectSmooth } from './ui/typewriter-effect';

const words = [
    {
        text: "Hello",
        className: "text-3xl  sm:text-4xl md:text-6xl lg:text-8xl text-purple-900 dark:text-purple-500",
    },
    {
        text: "\u00A0", // Unicode for non-breaking space
      },
    {
        text: "World!",
        className: "text-3xl  sm:text-4xl md:text-6xl lg:text-8xl text-purple-900 dark:text-purple-500",
    }
];


export function Home() {
    const navigate = useNavigate();
    return (
        (<div
            className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1
                className="md:text-7xl text-3xl lg:text-8xl font-mono font-bold text-center text-white relative z-20">
                <TypewriterEffectSmooth words={words} />

            </h1>
            <div className="w-[40rem] h-40 relative mb-5">
                {/* Gradients */}
                <div
                    className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div
                    className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div
                    className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div
                    className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF" />

                {/* Radial Gradient to prevent sharp edges */}
                <div
                    className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
            <div className="">

                <button onClick={() => navigate("/code")} className="p-[3px] relative cursor-pointer select-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                    <div className="px-8 py-2  bg-black rounded-[6px]  font-bold text-md tracking-wide relative group transition duration-200 text-white hover:bg-transparent">
                        Let's Code
                    </div>
                </button>
            </div>
        </div>)
    );
}
