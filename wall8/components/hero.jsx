"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";


const HeroSection = () => {
    return (
        <div className="pb-20 px-4">
            <div className="container mx-auto flex flex-col items-center justify-center space-y-8">
                <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title ">Manage your finance <br />with AI</h1>
                <p>An Ai powered Finance management platform that helps you track and save.</p>
                <div>
                    <Link href="/dashboard" >
                        <Button size="lg" className="px-8">Get started </Button>
                    </Link>
                    <Link href="/dashboard" >
                        <Button size="lg" variant="outline" className="px-8">Watch Demo </Button>
                    </Link>
                </div>
                <div>
                    <Image src="/banner.jpeg" width={1280} height={720}
                        alt="dashboard preview " className="rounded-lg shadow-2xl border mx-auto"
                        priority />
                </div>
            </div>
        </div>
    )
}

export default HeroSection