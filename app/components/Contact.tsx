import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export default function Contact() {
    return (
        <div id="contact" className="flex flex-col gap-6 min-h-screen justify-center     py-20 px-4">
            <h2 className="text-3xl font-bold text-center">Contáctanos</h2>
            <p className="text-xl text-gray-600 text-center">
                Estamos aquí para ayudarte a optimizar tus procesos industriales
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl w-full mx-auto gap-8">
                <div className="flex flex-col gap-6">
                    <h3 className="text-xl font-bold">Información de contacto</h3>
                    <div className="flex gap-4">
                        <div className="grid place-content-center size-12 text-primary bg-primary/10 rounded-lg"><Phone /></div>
                        <div>
                            <p className="font-semibold">Teléfono:</p>
                            <p className="text-gray-600">+57 123 456 7890</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="grid place-content-center size-12 text-primary bg-primary/10 rounded-lg"><Mail /></div>
                        <div>
                            <p className="font-semibold">Correo electrónico:</p>
                            <p className="text-gray-600">consultas@semcon.com.co</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="grid place-content-center size-12 text-primary bg-primary/10 rounded-lg"><MapPin /></div>
                        <div>
                            <p className="font-semibold">Oficinas:</p>
                            <p className="text-gray-600">Calle 123 #45-67</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 p-8 w-full rounded-lg shadow bg-gray-50 border border-gray-200">
                        <h4 className="text-xl font-bold">¿Listo para optimizar tus procesos?</h4>
                        <p className="text-lg">Nuestro equipo de especialistas está preparado para evaluar tus necesidades y proponer las mejores soluciones para tu planta.</p>
                        <ul className="list-disc list-inside flex flex-col gap-2 text-gray-700">
                            <li>Consultoría personalizada</li>
                            <li>Soluciones a medida</li>
                            <li>Soporte técnico continuo</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-4 p-8 border border-gray-200 bg-gray-50 shadow rounded-lg">
                    <h3 className="text-xl font-bold">Cuentanos sobre tus necesidades</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Nombre</Label>
                            <Input className="bg-white" type="text" id="name" placeholder="Nombre" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="company">Empresa</Label>
                            <Input className="bg-white" type="text" id="company" placeholder="Empresa" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input className="bg-white" type="email" id="email" placeholder="Email" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="phone">Teléfono</Label>
                            <Input className="bg-white" type="tel" id="phone" placeholder="Teléfono" />
                        </div>
                    </div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea className="h-full resize-none max-h-52 bg-white" id="message" placeholder="Escribe tu mensaje aquí." />
                    <Button className="bg-primary active:scale-95 cursor-pointer">Enviar</Button>
                </div>
            </div>
        </div>
    )
}