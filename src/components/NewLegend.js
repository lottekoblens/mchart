import React from "react";
import * as d3 from "d3";
import "../style.scss";
import data from "../data";
import useD3 from "../hooks/useD3.js";

const height = 100;
const width = 1000;

function NewLegend() {
  const ref = useD3((svg) => {
    var svg = d3.select("#legenda");

    // Handmade legend
    svg
      .append("circle")
      .attr("cx", -900)
      .attr("cy", 230)
      .attr("r", 9)
      .style("fill", "#45a868");
    svg
      .append("text")
      .attr("x", -880)
      .attr("y", 230)
      .text("Plant based")
      .style("font-size", "20px")
      .attr("alignment-baseline", "middle");
    svg
      .append("circle")
      .attr("cx", -750)
      .attr("cy", 230)
      .attr("r", 9)
      .style("fill", "#de6a68");
    svg
      .append("text")
      .attr("x", -730)
      .attr("y", 230)
      .text("Animal based")
      .style("font-size", "20px")
      .attr("alignment-baseline", "middle");
    svg
      .append("circle")
      .attr("cx", -580)
      .attr("cy", 230)
      .attr("r", 9)
      .style("fill", "#ccae87");
    svg
      .append("text")
      .attr("x", -560)
      .attr("y", 230)
      .text("Petrol-based")
      .style("font-size", "20px")
      .attr("alignment-baseline", "middle");
    svg
      .append("circle")
      .attr("cx", -420)
      .attr("cy", 230)
      .attr("r", 9)
      .style("fill", "#4583dc");
    svg
      .append("text")
      .attr("x", -400)
      .attr("y", 230)
      .text("Microbial")
      .style("font-size", "20px")
      .attr("alignment-baseline", "middle");
    svg
      .append("circle")
      .attr("cx", -280)
      .attr("cy", 230)
      .attr("r", 9)
      .style("fill", "#e0a080");
    svg
      .append("text")
      .attr("x", -260)
      .attr("y", 230)
      .text("Inorganic")
      .style("font-size", "20px")
      .attr("alignment-baseline", "middle");
    svg
      .append("circle")
      .attr("cx", -140)
      .attr("cy", 230)
      .attr("r", 9)
      .style("fill", "#dea0de");
    svg
      .append("text")
      .attr("x", -120)
      .attr("y", 230)
      .text("Chemical compounds")
      .style("font-size", "20px")
      .attr("alignment-baseline", "middle");
  }, []);

  return (
    <>
      <svg
        id="legenda"
        ref={ref}
        viewBox={`0 0 ${height} ${width}`}
        style={{
          height: "500px",
          width: "1000px",
          marginRight: "3vw",
          marginLeft: "3vw",
        }}
      ></svg>
    </>
  );
}

export default NewLegend;
