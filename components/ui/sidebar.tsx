"use client";

import { cn } from "@/lib/utils";
import { HomeIcon, LineChartIcon, Package2Icon, PackageIcon, SettingsIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const routes = [
    {
        label: "Home",
        href: "/dashboard",
        icon: HomeIcon
    },
    {
        label: "Stocks",
        href: "/stocks",
        icon: LineChartIcon
    },
    {
        label: "Predictions",
        href: "/predictions",
        icon: PackageIcon
    },
    {
        label: "Account",
        href: "/account",
        icon: UserIcon
    },
    {
        label: "Settings",
        href: "/settings",
        icon: SettingsIcon
    }

]

const Sidebar = () => {
    const pathname = usePathname();
    return (

        <div>
            <div className="px-3 py-2 flex-1">
                <Link href="/dashboard" className="flex items-center pl-3">
                    <div className="mr-2 text-white">
                        <LineChartIcon className="h-6 w-6" />
                    </div>
                    <h1 className={cn("text-2xl font-medium text-white")}>
                        StockSense
                    </h1>
                </Link>
                <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
                    <div className="px-3 py-2 flex-1">
                        <div className="space-y-1">
                            {routes.map((route) => (
                                <Link
                                    onClick={() => { }}
                                    key={route.href}
                                    href={route.href}
                                    className={cn(
                                        "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                        pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
                                    )}
                                >
                                    <div className="flex items-center flex-1">
                                        <route.icon className={cn("h-5 w-5 mr-3")} />
                                        {route.label}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;