import { BellIcon, Mail, } from "lucide-react";
import { Input } from "./input";
import { UserButton, auth } from "@clerk/nextjs";

const Navbar = () => {

    const { user } = auth();

    return (
        <div className="h-full w-full relative">
            <div className="h-full w-full flex justify-center items-center p-4" >
                <div className="flex w-full justify-between border-r-2 border-gray-500 pr-4">
                    <div className="w-2/3 ">
                        <Input className=" w-full h-8" placeholder="Press 'K' to search for stocks" />
                    </div>
                    <div className="flex justify-between items-center">
                        <Mail className="h-5 w-5 mr-2 hover:cursor-pointer"/>
                        <BellIcon className="h-5 w-5 mr-2 hover:cursor-pointer" />
                    </div>
                </div>
                <div className="pl-4 flex justify-end">
                    <UserButton afterSignOutUrl="/"/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;