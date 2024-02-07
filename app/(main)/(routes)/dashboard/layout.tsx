import Navbar from "@/components/ui/navbar";
import Sidebar from "@/components/ui/sidebar";

const DashboardLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full w-full relative bg-slate-200 overflow-hidden">
            <div className="hidden h-full md:flex md:w-60 md:flex-col md:fixed md:inset-y-0 bg-white border-r-2" >
                <Sidebar />
            </div>
            {/* Dashboard */}
            <main className="h-full md:ml-60">
                <div className="bg-white h-16">
                    <Navbar />
                </div>
                <div className="w-full h-[91%]">
                    {children}
                </div>
            </main>
        </div>
    );
}
export default DashboardLayout;