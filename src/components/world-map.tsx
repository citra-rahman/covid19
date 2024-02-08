"use client"
import { Chart } from "react-google-charts";
import { mapOptions } from "@/data";

export default function WorldMap({ data, width, height }: { data: Array<Array<string | number>>; width: string; height: string }) {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
          },
        },
      ]}
      chartType="GeoChart"
      width={width}
      height={height}
      data={data}
      options={mapOptions}
    />
  );
}
