import { Card, CardContent, CardHeader } from "./ui/card";

const stocks = [
    {
        symbol: "AAPL",
        name: "Apple",
        totalShares: 10,
        totalReturns: -10.09,
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.macworld.com%2Farticle%2F356055%2Fapple-stock-split-2020.html&psig=AOvVaw",
    },
]

const PortfolioStocks = () => {
    const stock = stocks[0];
    return ( 
        <div className="h-full w-full relative p-4">
            <div className="w-max hover:shadow-md transform">
                <Card className="">
                    <CardHeader className="p-1">
                        <h2>{stock.symbol}</h2>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <div>Total Shares: <span>${stock.totalShares}</span></div>
                            <div>Total Returns: <span>${stock.totalReturns}</span></div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
     );
}
 
export default PortfolioStocks;