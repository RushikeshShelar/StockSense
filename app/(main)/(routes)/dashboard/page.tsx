import PortfolioStocks from "@/components/portfolio-stocks";

const DashboardPage = () => {
    return (
        <div className="w-full h-full flex flex-col">
            <h2 className="p-0 sm:p-2 md:p-3 lg:p-5 text-lg font-medium">My Portfolio</h2>
            <div className="mx-4 h-32 bg-white rounded-md mb-2">
            <PortfolioStocks />
            </div>
            <div className="flex rounded-md space-x-0 h-full mx-3 mb-3 ">
                <div className="w-2/3 p-2">
                    <div className="h-full w-full bg-white rounded-md">
                        Chart
                    </div>
                </div>
                <div className=" w-1/3 p-2">
                    <div className="h-full w-full bg-white rounded-md">
                        Prdicted Stocks
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;