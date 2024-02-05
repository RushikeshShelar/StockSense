import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";

const DashboardLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div>
            <div className="h-full relative">
                <div className="hidden h-full md:flex md:w-56 md:flex-col md:fixed md:inset-y-0 bg-gray-900">
                    <Sidebar />
                </div>
                <div className="h-full w-[56%] md:ml-60">
                    <Navbar />
                    <hr className="my-2" />
                    {children}
                </div>
                <div className="hidden h-full w-1/2 lg:flex lg:fixed lg:w-full bg-red-400 lg:ml-[70rem] lg:inset-y-0">
                    Preview
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;