"use client"
import { Button } from "@/components/ui/button";
import { Crown } from "lucide-react";
import { useSmoothScroll } from "@/lib/useSmoothScroll";

export default function Hero() {
    const smoothScroll = useSmoothScroll();

    return (
        <section id="hero" className="flex flex-col gap-8 items-center overflow-hidden justify-center w-full min-h-svh py-40 px-4 relative bg-gradient-to-b from-transparent from-80% to-white">
            <img src="/hero1.png" className="-z-10 absolute opacity-15 w-full h-full object-cover" />
            {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div> */}
            {/* <div className="flex flex-row items-center gap-2 px-4 py-2 bg-primary/20 border border-primary rounded-full text-primary text-xs md:text-sm">
                <Crown className="size-3 md:size-4" />
                <p>Lideres en automatización papelera</p>
            </div> */}
            <h1 className="text-4xl md:text-6xl font-bold text-center max-w-5xl">
                Soluciones de automatización y control para la
                <span className="bg-gradient-to-r from-blue-700 via-blue-900 to-blue-700 bg-clip-text text-transparent"> industria papelera</span>
            </h1>
            <h2 className="max-w-4xl text-center text-lg text-gray-700">
                SEMCON te ayuda a optimizar la calidad y productividad con tecnología de vanguardia y soporte especializado.
            </h2>
            <Button
                className="active:scale-95 hover:-translate-y-0.5 hover:shadow cursor-pointer text-base md:text-xl md:p-6 bg-primary"
                onClick={() => smoothScroll("contact")}
            >
                Solicita una asesoría
            </Button>
            <p className="text-sm text-center text-gray-600 mt-15">*Representantes y distribuidores autorizados de marcas líderes en automatización y medición*</p>
            <div className="grid grid-cols-3 items-center gap-8 md:gap-12 mx-auto">
                <div className="flex items-center justify-center">
                    <a href="https://www.voith.com/corp-en/index.html" target="_blank" rel="noopener noreferrer">
                        <img src="/voith.svg" className="h-4 md:h-6" />
                    </a>
                </div>
                <div className="flex items-center justify-center">
                    <a href="https://www.ametek.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/default-logo.png" className="h-4 md:h-6" />
                    </a>
                </div>
                <div className="flex items-center justify-center">
                    <a href="https://new.abb.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/abb-logo.svg" className="h-4 md:h-6" />
                    </a>
                </div>
            </div>
        </section>
    )
}