import React from 'react';
import * as d3 from 'd3';
import '../style.scss';
import data from '../data';
import useD3 from '../hooks/useD3.js';

const height = 1000;
const width = 1000;

function Map({ searchKeyword }) {
  const ref = useD3(
    (svg) => {
      svg.select('g').remove(); // when svg rerenders the old g will be deleted

      let zoom = d3.zoom().on('zoom', () => {
        g.attr('transform', d3.event.transform);
      }); // create the option to zoom in and out on the chart

      svg = d3.select('#map').call(zoom);

      let transform = d3.zoomIdentity.translate(width / 2, height / 2 + 20);
      // makes it possible to zoom in and out on the chart

      let g = svg.append('g').attr('transform', transform);
      // append g to the svg

      let cluster = d3.cluster().size([360, width / 2 - 120]);
      // creates a new cluster layout with the right size

      svg.call(zoom.transform, transform);

      let root = d3.hierarchy(data);
      // d3.hierarchy is a nested data structure representing the dendrogram (this makes it possible to use our data)

      cluster(root); // cluster(root) runs the cluster layout. Giving back an array of associated nodes to that root node

      const project = (x, y) => {
        let angle = ((x - 90) / 180) * Math.PI,
          radius = y;
        return [radius * Math.cos(angle), radius * Math.sin(angle)];
      }; // gives elements the right angles

      g.selectAll('.link')
        .data(root.descendants().slice(1)) // returns an array of child nodes and makes the lines between the categories and ingredients
        .enter()
        .append('path')
        .attr('class', 'link')
        .attr('d', (d) => {
          return (
            'M' +
            project(d.x, d.y) +
            'C' +
            project(d.x, (d.y + d.parent.y) / 2) +
            ' ' +
            project(d.parent.x, (d.y + d.parent.y) / 2) +
            ' ' +
            project(d.parent.x, d.parent.y)
          );
        });
      // add paths to all g

      const click = (d) => {
        d3.select('#infoitem') // select div with id infoitem
          .transition()
          .duration('50')
          .attr('opacity', '.85')
          .style('opacity', 1)
          .style('top', function () {
            return d.parent.x + 'px';
          });
        d3.select('#name').text(`${d.data.name}`); // add name to div name

        if (d.data.origin != null) {
          d3.select('#heading-origin').text('Origin');
          d3.select('#origin').text(`${d.data.origin}`);
          // if the origin is not equal to null then put text in the divs
        } else {
          d3.select('#heading-origin').text(' ');
          d3.select('#origin').text(' ');
          // else there should be no text added to the divs
        }

        if (d.data.link === 'empty') {
          d3.select('#link').text(' ');
          // else there should be no text added to the div
        } else if (d.data.link != null) {
          d3.select('#link')
            .text('More information')
            .on('click', function () {
              d3.select('#link').append('class', 'clickable-link');
              window.open(d.data.link);
            });
          // if the link is not equal to null then put text in the divs and make the text 'more information' clickable
        } else {
          d3.select('#link').text(' ');
        }

        if (d.data.subcategory != null) {
          d3.select('#heading-origin').text('Origin');
          d3.select('#origin').text(`${d.data.origin}`);
          d3.select('#category').text(
            d.data.category + ' > ' + d.data.subcategory + ' > ' + d.data.base
          );
          d3.select('#heading-functions').text('Functions');
          d3.select('#catFunctions').text(`${d.data.categoryFunctions}`);
          // when there is a subcategory run the code above
        } else if (d.data.category != null) {
          d3.select('#category').text(d.data.category + ' > ' + d.data.base);
          d3.select('#heading-functions').text('Functions');
          d3.select('#catFunctions').text(d.data.categoryFunctions);
          // when there is no subcategory but there is a category, this code will run
        } else {
          d3.select('#category').text(' ');
          d3.select('#heading-functions').text(' ');
          d3.select('#catFunctions').text(' ');
        }

        if (typeof d.data.functions === 'undefined') {
          d3.select('#functions').text(' ');
          // when d.data.functions is undefined there should be no text displayed
        } else if (d.data.functions !== null) {
          d3.select('#heading-functions').text('Functions');
          d3.select('#functions').text(`${d.data.functions}`);
          // when there are functions the text will be displayed
        } else if (
          typeof d.data.children !== 'undefined' &&
          d.data.children[0].functions !== null
        ) {
          d3.select('#heading-functions').text('Functions');
          d3.select('#functions').text(`${d.data.children[0].functions}`);
          // when there are functions in a child the code above will run
        } else if (
          typeof d.data.children[0] !== 'undefined' &&
          d.data.children[0].children[0].functions !== null
        ) {
          d3.select('#heading-functions').text('Functions');
          d3.select('#functions').text(
            `${d.data.children[0].children[0].functions}`
          );
          // when there are functions in a child within a child the code above will run
        } else if (
          d.data.functions === 'undefined' ||
          d.data.children[0].functions === 'undefined' ||
          d.data.children[0].children[0] === 'undefined' ||
          d.data.functions === null
        ) {
          d3.select('#heading-functions').text(' ');
          d3.select('#functions').text(' ');
        } else {
          d3.select('#heading-functions').text(' ');
          d3.select('#functions').text(' ');
        } // because the data is structured in children and children within children the code above is necessary
        // the code checks if there are functions defined or not and when they are defined then the text will be displayed
      };

      let node = g
        .selectAll('.node')
        .data(root.descendants()) // returns an array of child notes
        .enter()
        .append('g')
        .attr('class', (d) => {
          return 'node' + (d.children ? ' node--internal' : ' node--leaf'); // give children the class node--internal and non children the class of node--leaf
        })
        .attr('transform', (d) => {
          return 'translate(' + project(d.x, d.y) + ')';
        })
        .attr('data-label', (d) => {
          return d.data.name;
        })
        .on('click', click); // when user clicks on text the function click will be called

      node
        .append('circle') // make the circles
        .attr('r', 3.5) // give circle a radius of 3.5
        .style('fill', function (d) {
          if (d.data.base === 'plants') {
            return '#6aa66c';
          } else if (d.data.base === 'animal') {
            return '#d97074';
          } else if (d.data.base === 'petrol-based') {
            return '#4170b2';
          } else if (d.data.base === 'microbial') {
            return '#eeb59b';
          } else if (d.data.base === 'inorganic') {
            return '#6962d1';
          } else if (d.data.base === 'chemical compounds') {
            return '#d9b8d5';
          } else {
            return '#924c57';
          } // based on the base of the ingredient the color of the circle will be set
        })
        .attr('r', function (d) {
          if (typeof d.data.functions === 'undefined') {
            return 3.5;
          } else if (d.data.functions !== null) {
            return 6;
          } else if (
            typeof d.data.children !== 'undefined' &&
            d.data.children[0].functions !== null
          ) {
            return 6;
          } else if (
            typeof d.data.children[0] !== 'undefined' &&
            d.data.children[0].children[0].functions !== null
          ) {
            return 6;
          } else if (
            d.data.functions === 'undefined' ||
            d.data.children[0].functions === 'undefined' ||
            d.data.children[0].children[0] === 'undefined' ||
            d.data.functions === null
          ) {
            return 6;
          } else {
            return 3.5;
          } // when circle belongs to category it's bigger then when it belongs to an ingredient
        });

      node
        .append('text')
        .attr('dy', '0.31em')
        .attr('x', (d) => {
          return d.x < 180 === !d.children ? 6 : -6;
        })
        .style('fill', function (d) {
          if (d.data.base === 'plants') {
            return '#6aa66c';
          } else if (d.data.base === 'animal') {
            return '#d97074';
          } else if (d.data.base === 'petrol-based') {
            return '#4170b2';
          } else if (d.data.base === 'microbial') {
            return '#eeb59b';
          } else if (d.data.base === 'inorganic') {
            return '#6962d1';
          } else if (d.data.base === 'chemical compounds') {
            return '#d9b8d5';
          } // based on the base of the ingredient the color of the text will be set
        })
        .style('text-anchor', (d) => {
          return d.x < 180 === !d.children ? 'start' : 'end';
        })
        .attr('transform', (d) => {
          return 'rotate(' + (d.x < 180 ? d.x - 90 : d.x + 90) + ')';
        })
        .text((d) => d.data.name); // the name of the ingredient or category will be displayed in the chart

      const highlightElement = (keyword) => {
        if (typeof keyword !== 'undefined' && keyword.length >= 2) {
          let matching = d3.selectAll('.node').filter(function (d) {
            return d.data.name.match(keyword);
          }); // when the users typed in a keyword in the search function then there will
          // be looked if there is a name that matches the keyword or a name that matches it partly

          matching._groups.forEach((element) => {
            d3.selectAll(element)
              .select('text')
              .style('fill', function (d) {
                if (d.data.base === 'plants') {
                  return '#3b633c';
                } else if (d.data.base === 'animal') {
                  return '#8a3d40';
                } else if (d.data.base === 'petrol-based') {
                  return '#264775';
                } else if (d.data.base === 'microbial') {
                  return '#ab7c67';
                } else if (d.data.base === 'inorganic') {
                  return '#443f8f';
                } else if (d.data.base === 'chemical compounds') {
                  return '#8c6d89';
                }
              })
              .style('font-size', '20px')
              .attr('class', 'search-animation bounce-3');
          }); // for each element that matches the keyword the styling will change and the animation will be executed
        }
      };
      highlightElement(searchKeyword); // call function highlightElemtent and give it the parameter searchKeyword
    },
    [searchKeyword]
  );

  return (
    <>
      <svg
        id='map'
        ref={ref}
        viewBox={`0 0 ${height} ${width}`}
        style={{
          height: '100%',
          marginRight: '3vw',
          marginLeft: '3vw',
        }}
      ></svg>
      <div className='container'>
        <div className='infoitem'>
          <h3 id='category'></h3>
          <hr></hr>

          <h3 id='name'>SELECT INGREDIENT FOR MORE INFORMATION</h3>
          <h4 id='heading-origin'></h4>
          <p id='origin'></p>
          <h4 id='heading-functions'></h4>
          <p id='catFunctions'></p>
          <p id='functions'></p>
          <h4 id='link'></h4>
        </div>
      </div>
    </>
  );
}

export default Map;

// used this example for inspiration: https://codesandbox.io/s/pjn98n7l5q?file=/src/Map.js:541-576
