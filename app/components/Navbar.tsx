"use client"
import { useState, useEffect } from "react";
import { useSmoothScroll } from "@/lib/useSmoothScroll";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [actualPath, setActualPath] = useState("");
    const [activeSection, setActiveSection] = useState("hero");
    const [drawerOpen, setDrawerOpen] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setActualPath(window.location.pathname);
        }
    }, []);

    const routes = [
        { path: "/", label: "Inicio", sectionId: "hero" },
        { path: "/about", label: "Nosotros", sectionId: "about" },
        { path: "/services", label: "Servicios", sectionId: "services" },
    ];

    const smoothScroll = useSmoothScroll();
    const scrollToSection = (sectionId: string, closeDrawer = false) => {
        if (closeDrawer) {
            setDrawerOpen(false);
            setTimeout(() => {
                smoothScroll(sectionId);
                setActiveSection(sectionId);
            }, 100);
        } else {
            smoothScroll(sectionId);
            setActiveSection(sectionId);
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed top-0 left-0 right-0 z-10 border-b-1 border-gray-200 w-full p-4 bg-white/70 backdrop-blur"
        >
            <nav className="flex items-center justify-between max-w-7xl mx-auto">
                <img src="/Logo.png" loading="lazy" className="h-6" />
                <ul className="hidden md:flex items-center gap-8">
                    {routes.map((route) => (
                        <a key={route.path} href={route.path} onClick={(e) => {
                            e.preventDefault();
                            scrollToSection(route.sectionId);
                            setActualPath(route.path);
                        }} className={`hover:text-primary transition-transform active:scale-95 ${actualPath === route.path ? "text-primary font-semibold" : "text-gray-600"}`}>
                            {route.label}
                        </a>
                    ))}
                    <Button className="cursor-pointer active:scale-95 text-base" onClick={() => {
                        scrollToSection("contact");
                        setActualPath("/contact");
                    }}>Contactanos</Button>
                </ul>
                <Drawer direction="right" open={drawerOpen} onOpenChange={setDrawerOpen}>
                    <DrawerTrigger className="block md:hidden cursor-pointer p-1" onClick={() => setDrawerOpen(true)}><Menu /></DrawerTrigger>
                    <DrawerContent className="flex items-start">
                        <DrawerHeader className="flex flex-row items-center justify-between w-full">
                            <DrawerTitle className="text-2xl font-semibold">Menu</DrawerTitle>
                            <DrawerClose className="w-full flex justify-end p-1 cursor-pointer" onClick={() => setDrawerOpen(false)}>
                                <X />
                            </DrawerClose>
                        </DrawerHeader>
                        <DrawerFooter className="flex mt-0 py-0 w-full">
                            <ul className="flex flex-col w-full gap-4">
                                {routes.map((route) => (
                                    <a key={route.path} href={route.path} onClick={(e) => {
                                        e.preventDefault();
                                        scrollToSection(route.sectionId, true);
                                        setActualPath(route.path);
                                    }} className={`hover:text-primary text-xl transition-transform active:scale-95 ${actualPath === route.path ? "text-primary font-semibold" : "text-gray-600"}`}>
                                        {route.label}
                                    </a>
                                ))}
                                <a href="/contact" onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection("contact", true);
                                    setActualPath("/contact");
                                }
                                } className={`hover:text-primary transition-transform text-xl active:scale-95 ${actualPath === "/contact" ? "text-primary font-semibold" : "text-gray-600"}`}>
                                    Contactanos
                                </a>
                            </ul>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </nav>
        </motion.div>
    );
}