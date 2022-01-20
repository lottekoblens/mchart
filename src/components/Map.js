import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import "../style.scss";
import data from "../data";
import useD3 from "../hooks/useD3.js";

const height = 1000;
const width = 1000;

function Map({ searchKeyword }) {
  const ref = useD3(
    (svg) => {
      svg.select("g").remove(); // when svg rerenders the old g will be deleted

      let tooltip = d3
        .select("body")
        .append("div") // create div for tooltip
        .attr("class", "my-tooltip") //add the tooltip class
        .style("position", "absolute")
        .style("z-index", "10")
        .style("visibility", "hidden")
        .text(
          "Search for an ingredient and hover over it to get more information."
        ); // set default text for tooltip

      let zoom = d3.zoom().on("zoom", () => {
        g.attr("transform", d3.event.transform);
      }); // create the option to zoom in and out on chart

      svg = d3.select("#map").call(zoom);

      let transform = d3.zoomIdentity.translate(width / 2, height / 2 + 20);

      let g = svg.append("g").attr("transform", transform);
      // append g to the svg

      let cluster = d3.cluster().size([360, width / 2 - 120]);
      // creates a new cluster layout with the right size

      svg.call(zoom.transform, transform);

      let root = d3.hierarchy(data);
      // d3.hierarchy is a nested data structure representing the dendrogram (this makes it possible to use our data)

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
      // add paths to all g

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
        .on("click", click); // when user clicks on text the function click will be called

      function click(d) {
        d3.select("#infoitem")
          .transition()
          .duration("50")
          .attr("opacity", ".85")
          .style("opacity", 1)
          .style("top", function () {
            return d.parent.x + "px";
          });
        d3.select("#name").text(`${d.data.name}`); // add name to div name

        if (d.data.origin != null) {
          d3.select("#origin").text("Origin: " + `${d.data.origin}`);
          d3.select("#base").text("Base: " + `${d.data.base}`);
          // if the origin is not equal to null then put text in the divs
        } else {
          d3.select("#origin").text(" ");
          d3.select("#base").text(" ");
          // else there should be no text added to the divs
        }

        if (d.data.functions != null) {
          d3.select("#functions").text("Functions: " + `${d.data.functions}`);
        } else if (d.data.children[0].functions != null) {
          d3.select("#functions").text(
            "Functions: " + `${d.data.children[0].functions}`
          );
        } else if (d.data.children[0].children[0].functions != null) {
          d3.select("#functions").text(
            "Functions: " + `${d.data.children[0].children[0].functions}`
          );
        } else {
          d3.select("#functions").text(" ");
        }
      }

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
        if (typeof keyword !== "undefined" && keyword.length >= 3) {
          let matching = d3.selectAll(".node").filter(function (d) {
            return d.data.name.match(keyword);
          });
          console.info(matching._groups);

          matching._groups.forEach((element) => {
            console.info(element);

            // let newMatch = matching._groups;
            // let secondMatch = newMatch["0"];
            // secondMatch.map((x) => {
            //   const matcher = d3.select("g");
            //   console.log(matcher);
            // });
            // let thirdMatch = secondMatch["0"];
            // let finalMatch = thirdMatch.__data__.data.name;
            d3.selectAll(element)
              // .filter((d) => {
              //   {
              //     if (d.data.name === keyword) {
              //       return true;
              //     }
              //   }
              //   return false;
              // })
              .select("text")
              .style("fill", function (d) {
                if (d.data.base === "plants") {
                  return "#184a29";
                } else if (d.data.base === "animal") {
                  return "#6e2826";
                } else if (d.data.base === "petrol-based") {
                  return "#544632";
                } else if (d.data.base === "microbial") {
                  return "#153259";
                } else if (d.data.base === "inorganic") {
                  return "#6e442f";
                } else if (d.data.base === "chemical compounds") {
                  return "#663f66";
                }
              })
              .style("font-size", "20px")
              .attr("class", "search-animation bounce-3");
          });
        }
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
      <div className="container">
        <div className="infoitem">
          <h3 id="name">Select ingredient for more information</h3>
          <p id="origin"></p>
          <p id="base"></p>
          <p id="functions"></p>
        </div>
        <div id="example"></div>
      </div>
    </>
  );
}

export default Map;

// used this example: https://codesandbox.io/s/pjn98n7l5q?file=/src/Map.js:541-576
