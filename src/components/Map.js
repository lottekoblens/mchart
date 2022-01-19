import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import "../style.scss";
import data from "../data";
import useD3 from "../hooks/useD3.js";

const height = 1000;
const width = 1000;

function Map({ searchKeyword }) {
  console.log("even testen", searchKeyword);
  const ref = useD3(
    (svg) => {
      console.log("rendering component", searchKeyword);
      svg.select("g").remove();
      let tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "my-tooltip") //add the tooltip class
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .text(
          "Search for an ingredient and hover over it to get more information."
        );

      let zoom = d3.zoom().on("zoom", () => {
        g.attr("transform", d3.event.transform);
      });

      svg = d3.select("#map").call(zoom);

      let transform = d3.zoomIdentity.translate(width / 2, height / 2 + 20);

      let g = svg.append("g").attr("transform", transform);

      let cluster = d3.cluster().size([360, width / 2 - 120]);

      svg.call(zoom.transform, transform);

      let root = d3.hierarchy(data);

      cluster(root);

      g.selectAll(".link")
        .data(root.descendants().slice(1))
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("d", (d) => {
          return (
            "M" +
            project(d.x, d.y) +
            "C" +
            project(d.x, (d.y + d.parent.y) / 2) +
            " " +
            project(d.parent.x, (d.y + d.parent.y) / 2) +
            " " +
            project(d.parent.x, d.parent.y)
          );
        });

      let node = g
        .selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", (d) => {
          return "node" + (d.children ? " node--internal" : " node--leaf");
        })
        .attr("transform", (d) => {
          return "translate(" + project(d.x, d.y) + ")";
        })
        .attr("data-label", (d) => {
          return d.data.name;
        })
        .on("mouseover", function (d) {
          if (d.data.name === "Ingrediënten") {
            tooltip.text(
              "Find the ingredient you are looking for by using the search field or by finding out more information when you hover over it!"
            );
          } else if (d.data.functions === undefined) {
            tooltip.text(
              d.data.name +
                " has a base of " +
                d.data.base +
                ".\n" +
                " It can be found in " +
                d.data.origin +
                "."
            );
          } else {
            tooltip.text(
              "The category is " +
                d.data.name +
                " and the ingredients in this categorie have the following functions:  " +
                d.data.functions
            );
          }
          return tooltip.style("visibility", "visible");
        })
        .on("mouseout", function () {
          return tooltip.style("visibility", "hidden");
        });

      node.append("circle").attr("r", 2.5);

      node
        .append("text")
        .attr("dy", "0.31em")
        .attr("x", (d) => {
          return d.x < 180 === !d.children ? 6 : -6;
        })
        .style("fill", function (d) {
          if (d.data.base === "plants") {
            return "#45a868";
          } else if (d.data.base === "animal") {
            return "#de6a68";
          } else if (d.data.base === "petrol-based") {
            return "#ccae87";
          } else if (d.data.base === "microbial") {
            return "#4583dc";
          } else if (d.data.base === "inorganic") {
            return "#e0a080";
          } else if (d.data.base === "chemical compounds") {
            return "#dea0de";
          }
        })
        .style("text-anchor", (d) => {
          return d.x < 180 === !d.children ? "start" : "end";
        })
        .attr("transform", (d) => {
          return "rotate(" + (d.x < 180 ? d.x - 90 : d.x + 90) + ")";
        })
        .text((d) => d.data.name);

      const highlightElement = (keyword) => {
        d3.selectAll(".node")
          .filter((d) => {
            {
              if (d.data.name === keyword) {
                return true;
              }
            }
            return false;
          })
          .select("text")
          .style("fill", "black")
          .style("font-size", "30px");
      };
      highlightElement(searchKeyword);

      function project(x, y) {
        let angle = ((x - 90) / 180) * Math.PI,
          radius = y;
        return [radius * Math.cos(angle), radius * Math.sin(angle)];
      }
    },
    [searchKeyword]
  );

  return (
    <>
      <svg
        id="map"
        ref={ref}
        viewBox={`0 0 ${height} ${width}`}
        style={{
          height: "100%",
          marginRight: "3vw",
          marginLeft: "3vw",
        }}
      ></svg>
    </>
  );
}

export default Map;

// used this example: https://codesandbox.io/s/pjn98n7l5q?file=/src/Map.js:541-576
