"use client";

import { BarChart, Contact, HomeIcon, LayoutDashboard, Newspaper, Phone, Settings } from "lucide-react";
import Logo from "./logo";
import Money from "./money";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const routes = [
    {
        label: "Home",
        icon: HomeIcon,
        href: "/"
    },
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard"
    },
    {
        label: "Predictions",
        icon: BarChart,
        href: "/predictions"
    }, {
        label: "News",
        icon: Newspaper,
        href: "/news"
    }
]

const supportLinks = [
    {
        label: "Settings",
        icon: Settings,
        href: "/settings"
    },
    {
        label: "Contact",
        icon: Phone,
        href: "/contact"
    }
]

const Sidebar = () => {

    const pathname = usePathname();

    return (
        <div className="h-full w-full relative">
            <div className="flex flex-col">
                <Logo />
            </div>
            <div className="m-2 mx-4">
                <Money amount={3000.79} />
            </div>

            <div className="flex flex-col mt-2 items-center space-y-1 mx-3">
                {routes.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                            "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-black hover:bg-blue-900/20 rounded-lg transition",
                            pathname === route.href ? "text-black bg-blue-900/20" : "text-gray-600",
                        )}
                    >
                        <div className="flex items-center flex-1">
                            <route.icon className="h-5 w-5 mr-3" />
                            {route.label}
                        </div>
                    </Link>
                ))}
            </div>
            <hr className=" mt-64" />

            <div className="flex flex-col mt-2 items-center space-y-1 mx-3">
                {supportLinks.map((route) => (
                    <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                            "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-black hover:bg-blue-900/20 rounded-lg transition",
                            pathname === route.href ? "text-black bg-blue-900/20" : "text-gray-600",
                        )}
                    >
                        <div className="flex items-center flex-1">
                            <route.icon className="h-5 w-5 mr-3" />
                            {route.label}
                        </div>
                    </Link>
                ))}
            </div>

        </div>
    );
}

export default Sidebar;