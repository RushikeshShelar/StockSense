"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Navbar = () => {

    const [search, setSearch] = useState("");

    return ( 
        <div className="w-full p-2">
            <Label htmlFor="search" className="text-lg" >
                Available Stocks
            </Label>
            <div className="flex justify-between items-center">
                <Input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                placeholder="Google Inc." id="search"/>
                {/* <UserButton afterSignOutUrl="/" /> */}
            </div>
          
        </div>
     );
}
 
export default Navbar;