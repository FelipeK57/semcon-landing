"use client"
import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";
import { useSmoothScroll } from "@/lib/useSmoothScroll";

export default function Hero() {
    const smoothScroll = useSmoothScroll();

    return (
        <section id="hero" className="flex flex-col gap-8 items-center overflow-hidden justify-center min-h-screen w-full p-4">
            {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div> */}
            <div className="flex flex-row items-center gap-2 px-4 py-2 bg-primary rounded-full text-white text-sm">
                <Crown className="size-4" />
                <p>Lideres en automatización papelera</p>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-center max-w-4xl">
                Soluciones de automatización y control para la
                <span className="bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700 bg-clip-text text-transparent"> industria papelera</span>
            </h1>
            <Button
                className="active:scale-95 hover:-translate-y-0.5 hover:shadow cursor-pointer text-xl p-6 bg-primary"
                onClick={() => smoothScroll("contact")}
            >
                Contáctanos
            </Button>
        </section >
    )
}