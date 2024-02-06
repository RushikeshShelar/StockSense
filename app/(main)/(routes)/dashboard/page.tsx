import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { DollarSign, TrendingDown, TrendingUp } from "lucide-react";

const stockData = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 150.25, change: 2.75, volume: 5000000 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 2800.50, change: -5.25, volume: 3000000 },
    { symbol: 'MSFT', name: 'Microsoft Corporation', price: 330.75, change: 1.50, volume: 4000000 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 3550.20, change: -10.75, volume: 2000000 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 950.80, change: 15.25, volume: 1500000 },
    { symbol: 'FB', name: 'Meta Platforms Inc.', price: 330.45, change: -3.80, volume: 2500000 },
    { symbol: 'NVDA', name: 'NVIDIA Corporation', price: 320.60, change: 8.20, volume: 1800000 },
    { symbol: 'V', name: 'Visa Inc.', price: 240.15, change: -2.40, volume: 1200000 },
    { symbol: 'PYPL', name: 'PayPal Holdings Inc.', price: 180.90, change: 5.60, volume: 800000 },
    { symbol: 'INTC', name: 'Intel Corporation', price: 55.30, change: -1.10, volume: 2200000 },
    { symbol: 'AMD', name: 'Advanced Micro Devices Inc.', price: 120.75, change: 3.30, volume: 1600000 },
    { symbol: 'CSCO', name: 'Cisco Systems Inc.', price: 52.40, change: -0.90, volume: 1800000 },
    { symbol: 'IBM', name: 'International Business Machines Corporation', price: 130.60, change: 0.80, volume: 1000000 },
    { symbol: 'NFLX', name: 'Netflix Inc.', price: 520.70, change: 7.50, volume: 1000000 },
    { symbol: 'GS', name: 'The Goldman Sachs Group Inc.', price: 370.25, change: -4.60, volume: 700000 },
    { symbol: 'JPM', name: 'JPMorgan Chase & Co.', price: 140.80, change: 2.20, volume: 1500000 },
    { symbol: 'DIS', name: 'The Walt Disney Company', price: 160.40, change: -1.70, volume: 1200000 },
    { symbol: 'BA', name: 'The Boeing Company', price: 200.90, change: 3.40, volume: 800000 },
    { symbol: 'XOM', name: 'Exxon Mobil Corporation', price: 60.15, change: -0.50, volume: 2000000 },
    { symbol: 'GE', name: 'General Electric Company', price: 100.50, change: 1.20, volume: 1200000 },
    { symbol: 'WMT', name: 'Walmart Inc.', price: 140.60, change: -0.80, volume: 1000000 },
    { symbol: 'PG', name: 'Procter & Gamble Co.', price: 135.20, change: 1.10, volume: 900000 },
    { symbol: 'AAP', name: 'Advance Auto Parts Inc.', price: 210.30, change: -2.80, volume: 500000 },
    { symbol: 'CAT', name: 'Caterpillar Inc.', price: 190.75, change: 4.50, volume: 800000 },
    { symbol: 'CVX', name: 'Chevron Corporation', price: 110.20, change: -1.90, volume: 1200000 },
    { symbol: 'GS', name: 'Goldman Sachs Group Inc.', price: 330.80, change: 5.20, volume: 700000 },
    { symbol: 'HD', name: 'The Home Depot Inc.', price: 350.60, change: -2.30, volume: 600000 },
    { symbol: 'IBM', name: 'International Business Machines Corporation', price: 120.40, change: 1.40, volume: 900000 },
    { symbol: 'JNJ', name: 'Johnson & Johnson', price: 170.90, change: 0.60, volume: 700000 },
    { symbol: 'KO', name: 'The Coca-Cola Company', price: 55.70, change: -0.40, volume: 800000 },
    { symbol: 'LMT', name: 'Lockheed Martin Corporation', price: 400.25, change: 3.80, volume: 400000 },
    { symbol: 'MMM', name: '3M Company', price: 170.60, change: -1.20, volume: 500000 },
    { symbol: 'MCD', name: "McDonald's Corporation", price: 240.15, change: 2.80, volume: 700000 },
    { symbol: 'MS', name: 'Morgan Stanley', price: 90.75, change: 1.10, volume: 1200000 },
    { symbol: 'NKE', name: 'Nike Inc.', price: 150.80, change: -0.90, volume: 600000 },
    { symbol: 'NOC', name: 'Northrop Grumman Corporation', price: 350.40, change: 4.20, volume: 300000 },
    { symbol: 'PEP', name: 'PepsiCo Inc.', price: 160.30, change: -1.50, volume: 800000 },
    { symbol: 'PFE', name: 'Pfizer Inc.', price: 55.90, change: 0.30, volume: 1000000 },
    { symbol: 'RTX', name: 'Raytheon Technologies Corporation', price: 85.20, change: -0.80, volume: 400000 },
    { symbol: 'SBUX', name: 'Starbucks Corporation', price: 110.50, change: 1.20, volume: 700000 },
    { symbol: 'T', name: 'AT&T Inc.', price: 28.80, change: -0.20, volume: 1500000 },
    { symbol: 'TWTR', name: 'Twitter Inc.', price: 65.75, change: 0.90, volume: 500000 },
]


const DashboardPage = () => {
    return (
        <main>
            <div className="w-full h-full flex flex-wrap items-center justify-center space-x-2 overflow-y-auto">
                {stockData.map((stock, index) => (
                    <Card className="w-[49%] text-sm mb-2" key={index}>
                        <CardHeader className="flex flex-row justify-between align-center">
                            <div>
                                <CardTitle>{stock.symbol}</CardTitle>
                                <CardDescription>{stock.name}</CardDescription>
                            </div>
                            <div>
                                <Button size="sm" variant="link">
                                    View
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="flex flex-wrap items-center justify-between text-center">
                            <div>
                                Price <br />
                                ${stock.price}
                            </div>
                            <div>
                                Change<br />
                                <div className="flex">
                                    {stock.change}
                                    {stock.change > 0 ? <TrendingUp className={cn("h-5 w-5 ml-2", "text-green-400")} /> : <TrendingDown className={cn("h-5 w-5 ml-2", "text-red-400")} />}
                                </div>
                            </div>
                            <div>
                                Volume <br />
                                {stock.volume}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </main>
    );
}

export default DashboardPage;