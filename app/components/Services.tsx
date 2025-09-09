import { BarChart3, Settings, Users, Wrench } from "lucide-react"

export default function Services() {

    const services = [
        {
            icon: <Wrench />,
            title: "Planes de Mantenimiento",
            desc: "Planes de mantenimiento personalizados para optimizar el rendimiento de sus equipos"
        },
        {
            icon: <Settings />,
            title: "Soporte de Arranque",
            desc: "Soporte especializado para arranque e instalaciones de equipos industriales"
        },
        {
            icon: <Users />,
            title: "Capacitaciones",
            desc: "Capacitación especializada de personal en tecnologías de automatización"
        },
        {
            icon: <BarChart3 />,
            title: "Medición y Automatización",
            desc: "Soluciones avanzadas de medición y automatización para procesos papeleros"
        }
    ];

    return <section id="services" className="flex flex-col gap-8 items-center justify-center min-h-screen w-full max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold text-center">Nuestros Servicios</h2>
        <p className="text-xl text-gray-600 text-center">Ofrecemos un portafolio completo de servicios especializados para la industria papelera</p>
        <div className="grid md:grid-cols-4 gap-6">
            {services.map((service, idx) => (
                <div key={service.title} className="flex flex-col gap-4 p-8 border border-gray-200 rounded-lg shadow bg-gray-50 hover:-translate-y-2 hover:shadow-lg transition-all">
                    <div className="grid place-content-center size-12 text-primary bg-primary/10 rounded-lg">{service.icon}</div>
                    <p className="text-lg font-bold">{service.title}</p>
                    <p className="text-base">{service.desc}</p>
                </div>
            ))}
        </div>
    </section>
}