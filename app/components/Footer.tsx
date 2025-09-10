"use client"

export default function Footer() {
    return (
        <footer className="w-full bg-gray-50 border-t min-h-48 border-gray-200 py-8">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-col items-center gap-4 md:items-start">
                    <img src="/Logo.png" loading="lazy" className="h-6" />
                    <span className="text-sm max-w-lg text-gray-600 text-center md:text-start">Especialistas en automatización y control para la industria de pulpa y papel. Tecnología, respaldo y experiencia para optimizar sus procesos.</span>
                    <span className="text-xs text-gray-400">Colombia & Latinoamérica</span>
                </div>
                <div className="flex flex-col items-center gap-4 md:items-end">
                    <span className="text-sm text-gray-600">Contacto: <a href="mailto:info@semcon.com.co" className="underline text-primary">info@semcon.com.co</a></span>
                    <span className="text-sm text-gray-600">Tel: +57 123 456 7890</span>
                    <span className="text-xs text-gray-400">© {new Date().getFullYear()} SEMCON. Todos los derechos reservados.</span>
                </div>
            </div>
        </footer>
    );
}
