import Navbar from "@/components/ui/navbar";
import Preview from "@/components/ui/preview";
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
                <div className="hidden h-full w-full lg:flex lg:fixed lg:w-full lg:ml-[69rem] lg:inset-y-0">
                    <Preview /> {/* Todo - Figure a Way out to Add props to this component */}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;