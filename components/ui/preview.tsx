import { Card, CardContent, CardHeader, CardTitle } from "./card";
import Chart from "./chart";

interface PreviewProps {
    symbol: string;
    name: string;
    price: number;
    sector: string;
    industry: string;
    data: object[];
}

const Preview: React.FC<PreviewProps> = ({
    symbol,
    name,
    price,
    sector,
    industry,
    data
}) => {
    return (
        <div className="min-w-[25.3rem]  h-full py-4 px-0 flex flex-col gap-2">
            <Card>
                <CardHeader className="mb-5">
                    <CardTitle className="text-2xl"> Stock Details </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col space-y-2">
                    <div >
                        <span className="font-medium text-black text-xl">AAPL{symbol}</span>  <span className="text-lg text-gray-500 font-normal ml-2">Apple Inc.{name}</span> 
                    </div>
                    <div>
                        <span className="font-medium text-black text-md">Price:</span>  <span className="text-sm text-gray-500 font-normal ml-2">$150{price}</span> 
                    </div>
                    <div>
                        <span className="font-medium text-black text-md">Sector:</span>  <span className="text-sm text-gray-500 font-normal ml-2">Technology{sector}</span> 
                    </div>
                    <div>
                        <span className="font-medium text-black text-md">Industry</span>  <span className="text-sm text-gray-500 font-normal ml-2">Consumer Electronics{industry}</span> 
                    </div>
                </CardContent>
            </Card>

            <Chart data={data}/>
        </div>
    );
}

export default Preview;