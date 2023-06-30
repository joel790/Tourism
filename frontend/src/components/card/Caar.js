import React, { useState } from "react";
import { LayoutGroup } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import "./Caar.css";
import Chart from "react-apexcharts";

export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Caar = ({ title, color, barvalue, series }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <LayoutGroup>
      {expanded ? (
        <ExpandedCard setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard setExpanded={() => setExpanded(true)} />
      )}
    </LayoutGroup>
  );
  function CompactCard({ setExpanded }) {
    return (
      <div
        className="CompactCard "
        style={{
          background: color.backGround,
          boxShadow: color.boxShadow,
        }}
        onClick={setExpanded}
      >
        <div className="radialBar">
          <p style={{ color: "black", fontSize: "1.5rem" }}>
            {barvalue} {title}
          </p>
          <span style={{ color: "black", fontSize: "1.5rem" }}>{title}</span>
        </div>
        <div className="detail">
          <span style={{ color: "black" }}>Last 24 hours</span>
        </div>
      </div>
    );
  }
  function ExpandedCard({ setExpanded }) {
    const data = {
      options: {
        chart: {
          type: "area",
          height: "auto",
        },

        dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.35,
        },

        fill: {
          colors: ["#fff"],
          type: "gradient",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          colors: ["white"],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        grid: {
          show: true,
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
      },
    };
    return (
      <div
        className="ExpandedCard"
        style={{
          background: color.backGround,
          boxShadow: color.boxShadow,
        }}
      >
        <div
          style={{
            alignSelf: "flex-end",

            cursor: "pointer",
            color: "white",
          }}
        >
          <FaTimes className="f-times" onClick={setExpanded} />
        </div>
        <span>{title}</span>
        <div className="chartContainer">
          <Chart options={data.options} series={series} type="area" />
        </div>
        <span>last 24 hours</span>
      </div>
    );
  }
};

export default Caar;
