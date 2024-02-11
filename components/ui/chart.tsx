"use client";

import AreaChartPlot from "../graphs/bar-chart-plot";
import { Card } from "./card";
import BarChartPlot from "../graphs/bar-chart-plot";

const Chart = ({
    data
}: {
    data: object[];
}) => {
    return (
        <section className="">
            <Card className="w-[400px] h-[400px] rounded border-5">
                <BarChartPlot />
            </Card>
        </section>
    );
}

export default Chart;