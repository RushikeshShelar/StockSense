"use client";

import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import TypewriterComponent from "typewriter-effect";

import { Button } from "@/components/ui/button";

const LandingHero = () => {

    const { isSignedIn } = useAuth();

    return (
        <div className="text-white font-bold py-36 text-center space-y-5">
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-bold">
                <h1>The Best analysis Tool For</h1>
                <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#001f3f] to-[#39cccc]">
                    <TypewriterComponent
                        options={{
                            strings: [
                                "Market Insights",
                                "Investment Decisions",
                                "Real-Time Results",
                                "Smart Investors"
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div className="text-sm md:text-xl font-light text-zinc-400">
            Unlocking Financial Potential with Intuitive Insights - Your Stock Market Companion.
            </div>
            <div>
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold ">
                        View Stocks
                    </Button>
                </Link>
            </div>
            <div className="text-zinc-400 text-xs md:text-sm font-normal">
            Start for free, no credit card needed.
            </div>
        </div>
    );
}

export default LandingHero;