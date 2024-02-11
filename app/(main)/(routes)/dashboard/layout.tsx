import Navbar from "@/components/ui/navbar";
import Preview from "@/components/ui/preview";
import Sidebar from "@/components/ui/sidebar";

const data = [
    {
        "year": "2016",
        "up": 4000,
        "down": 2400
    },
    {
        "year": "2017",
        "up": 3000,
        "down": 1398
    },
    {
        "year": "2018",
        "up": 2000,
        "down": 9800
    },
    {
        "year": "2019",
        "up": 2780,
        "down": 3908
    },
    {
        "year": "2020",
        "up": 1890,
        "down": 4800
    },
    {
        "year": "2021",
        "up": 2390,
        "down": 3800
    },
    {
        "year": "2022",
        "up": 3490,
        "down": 4300
    }
]


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
                    <Preview data={data} /> {/* Todo - Figure a Way out to Add props to this component */}
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout;