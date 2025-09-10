"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, Crown } from "lucide-react";
import { useSmoothScroll } from "@/lib/useSmoothScroll";

export default function Hero() {
    const smoothScroll = useSmoothScroll();

    return (
        <section id="hero" className="flex flex-col gap-10 overflow-hidden relative px-4">
            {/* <img src="/hero1.png" alt="Industria papelera automatización SEMCON" className="-z-10 absolute opacity-15 w-full h-full object-cover" /> */}
            {/* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div> */}
            {/* <div className="flex flex-row items-center gap-2 px-4 py-2 bg-primary/20 border border-primary rounded-full text-primary text-xs md:text-sm">
                <Crown className="size-3 md:size-4" />
                <p>Lideres en automatización papelera</p>
            </div> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-20 w-full max-w-7xl mx-auto min-h-svh items-center justify-center py-20">
                <div className="flex flex-col gap-4 items-start">
                    <h1 className="text-4xl xl:text-6xl font-bold">
                        Soluciones de <span className="text-primary">automatización</span> y <span className="text-primary">control</span> para la
                        industria papelera
                    </h1>
                    <h2 className="text-lg text-gray-600">
                        Te ayudamos a optimizar la calidad y productividad con tecnología de vanguardia y soporte especializado
                    </h2>
                    <div className="flex flex-col md:flex-row gap-4 items-center w-full">
                        <Button
                            className="flex items-center active:scale-95 hover:-translate-y-0.5 hover:shadow cursor-pointer bg-primary border border-primary text-base w-full md:w-fit"
                            onClick={() => smoothScroll("contact")}
                        >
                            Solicita asesoría <ArrowRight />
                        </Button>
                        <Button
                            className="active:scale-95 hover:-translate-y-0.5 hover:shadow cursor-pointer bg-white hover:bg-gray-50 border border-primary text-primary text-base w-full md:w-fit"
                            onClick={() => smoothScroll("services")}
                        >
                            Ver servicios
                        </Button>
                    </div>
                </div>
                <div className="grid place-content-center rounded-xl relative">
                    <img src="/hero1.png" alt="Industria papelera automatización SEMCON" className="w-full rounded-xl" loading="lazy" />
                    <div className="-z-10 w-full h-full bg-gray-200 rounded-xl absolute rotate-4" />
                </div>
            </div>
            <div className="flex flex-col gap-6 items-center w-full">
                <p className="text-sm text-center text-gray-600">*Representantes y distribuidores autorizados de marcas líderes en automatización y medición*</p>
                <div className="grid grid-cols-3 items-center gap-8 md:gap-12 mx-auto max-w-lgF">
                    <div className="flex items-center justify-center">
                        <a href="https://www.voith.com/corp-en/index.html" target="_blank" rel="noopener noreferrer">
                            <img src="/voith.svg" alt="Logo Voith" className="h-4 md:h-6" />
                        </a>
                    </div>
                    <div className="flex items-center justify-center">
                        <a href="https://www.ametek.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/default-logo.png" alt="Logo AMETEK" className="h-4 md:h-6" />
                        </a>
                    </div>
                    <div className="flex items-center justify-center">
                        <a href="https://new.abb.com/" target="_blank" rel="noopener noreferrer">
                            <img src="/abb-logo.svg" alt="Logo ABB" className="h-4 md:h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}