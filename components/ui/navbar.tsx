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
           
          
        </div>
     );
}
 
export default Navbar;