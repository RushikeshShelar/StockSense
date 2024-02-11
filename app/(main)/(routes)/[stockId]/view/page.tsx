
'use client'
import { Card } from "@/components/ui/card";
import AreaChartPlot from "./_components/area-chart-plot";
import BarChartPlot from "./_components/bar-chart-plot";
import LineChartPlot from "./_components/line-chart";
import PieChartPlot from "./_components/pie-chart-plot";
import RadarChartPlot from "./_components/radar-chart";


const ViewPage = () => {
  return (
    <div className="bg-slate-600">
      <section className="">
        <div className="flex md:flex-row sm:w-full flex-col m-1justify-evenly gap-4 p-4">
          <div className=" flex-1 px-2 justify-center md:w-16 sm:w-full shadow rounded h-300px bg-white">
           <div>
              <p className="text-gray-900 font-bold">Total returns</p>
              <p className="py-4 font-bold">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
          <div className="flex-1 px-2 justify-center md:w-16 sm:w-full bg-white shadow rounded max-h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Total sales</p>
              <p className="py-4 font-bold">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
          <div className="flex-1 px-2 justify-center md:w-16 sm:w-full bg-white shadow rounded max-h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Total subscriptions</p>
              <p className="py-4 font-bold">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
          <div className="flex-1 px-2 justify-center md:w-16 sm:w-full bg-white shadow rounded h-300px">
            <div className="">
              <p className="text-gray-900 font-bold">Total returns</p>
              <p className="py-4 font-bold ">$30,000 </p>
              <p className="text-green-300">+34.5%</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row my-2 m-1 gap-3">
        <div className="lg:w-1/2 sm:w-full h-[300px] bg-white rounded"><AreaChartPlot /></div>
        <div className="lg:w-1/2 sm:w-full h-[300px] bg-white rounded"><BarChartPlot /></div>
      </section>

 
      <section className="flex flex-col md:flex-row m-1 gap-2">
        <div className="w-full md:w-1/2 ;g:w-1/3 h-[250px] bg-white rounded"><PieChartPlot /></div>
        <div className="w-full md:w-1/2 ;g:w-1/3 h-[250px] bg-white rounded"><LineChartPlot /></div>
        <div className="w-full md:w-1/2 ;g:w-1/3  h-[250px] bg-white rounded"><RadarChartPlot /></div>
      </section>
    </div>
  );
};

export default ViewPage;