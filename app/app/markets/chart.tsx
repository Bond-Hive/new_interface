import { useEffect, useRef, useState } from "react";
import { dayData, weekData } from "./priceData";

import { createChart, CrosshairMode } from 'lightweight-charts';
import { volumeData } from "./volumeData";
export default function Charts({testData}: {testData: any}) {
    const chartContainerRef: any = useRef();
  const chart: any = useRef();
  const resizeObserver: any = useRef();
  const [interval, setInterval] = useState('1m')
  useEffect(() => {
    chart.current = createChart(chartContainerRef.current, {
    //   width: chartContainerRef.current.clientWidth,
      height: 400, //"300px", //chartContainerRef.current.clientHeight,
      layout: {
        background:{
            color: "transparent"
        },
        textColor: 'rgba(255, 255, 255, 0.9)',
      },
      grid: {
        vertLines: {
          color: 'transparent',
        },
        horzLines: {
          color: '#334158',
        },
      },
      timeScale: {
        borderColor: '#485c7b'
      },
    });

    console.log(chart.current);

    const candleSeries = chart.current.addLineSeries({
    color: "blue",
    lineWidth: 2
    });

    candleSeries.setData(interval == "1m" && testData);

    // const areaSeries = chart.current.addAreaSeries({
    //   topColor: 'rgba(38,198,218, 0.56)',
    //   bottomColor: 'rgba(38,198,218, 0.04)',
    //   lineColor: 'rgba(38,198,218, 1)',
    //   lineWidth: 2
    // });

    // areaSeries.setData(areaData);

    // const volumeSeries = chart.current.addHistogramSeries({
    //   color: '#182233',
    //   lineWidth: 2,
    //   priceFormat: {
    //     type: 'volume',
    //   },
    //   overlay: true,
    //   scaleMargins: {
    //     top: 0.8,
    //     bottom: 0,
    //   },
    // });

    // volumeSeries.setData(volumeData);
  }, []);

  // Resize chart on container resizes.
  useEffect(() => {
    resizeObserver.current = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      chart.current.applyOptions({ width, height });
      setTimeout(() => {
        chart.current.timeScale().fitContent();
      }, 0);
    });

    resizeObserver.current.observe(chartContainerRef.current);

    return () => resizeObserver.current.disconnect();
  }, []);

  return (
      <div
        ref={chartContainerRef}
        className="chart-container"
        // style={{ height: "100%" }}
      />
  );
}