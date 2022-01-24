import React from 'react';
import * as d3 from 'd3';
import '../style.scss';
import useD3 from '../hooks/useD3.js';

const height = 100;
const width = 1000;

function NewLegend() {
  const ref = useD3((svg) => {
    svg = d3.select('#legenda');

    // Handmade legend
    svg
      .append('circle')
      .attr('cx', -1100)
      .attr('cy', 230)
      .attr('r', 35)
      .style('fill', '#6aa66c');
    svg
      .append('text')
      .attr('x', -1000)
      .attr('y', 230)
      .text('Plant based')
      .style('font-size', '100px')
      .attr('alignment-baseline', 'middle');
    svg
      .append('circle')
      .attr('cx', -400)
      .attr('cy', 230)
      .attr('r', 35)
      .style('fill', '#d97074');
    svg
      .append('text')
      .attr('x', -300)
      .attr('y', 230)
      .text('Animal based')
      .style('font-size', '100px')
      .attr('alignment-baseline', 'middle');
    svg
      .append('circle')
      .attr('cx', 400)
      .attr('cy', 230)
      .attr('r', 35)
      .style('fill', '#4170b2');
    svg
      .append('text')
      .attr('x', 500)
      .attr('y', 230)
      .text('Petrol-based')
      .style('font-size', '100px')
      .attr('alignment-baseline', 'middle');
    svg
      .append('circle')
      .attr('cx', -1100)
      .attr('cy', 400)
      .attr('r', 35)
      .style('fill', '#eeb59b');
    svg
      .append('text')
      .attr('x', -1000)
      .attr('y', 400)
      .text('Microbial')
      .style('font-size', '100px')
      .attr('alignment-baseline', 'middle');
    svg
      .append('circle')
      .attr('cx', -400)
      .attr('cy', 400)
      .attr('r', 35)
      .style('fill', '#6962d1');
    svg
      .append('text')
      .attr('x', -300)
      .attr('y', 400)
      .text('Inorganic')
      .style('font-size', '100px')
      .attr('alignment-baseline', 'middle');
    svg
      .append('circle')
      .attr('cx', 400)
      .attr('cy', 400)
      .attr('r', 35)
      .style('fill', '#d9b8d5');
    svg
      .append('text')
      .attr('x', 500)
      .attr('y', 400)
      .text('Chemical compounds')
      .style('font-size', '100px')
      .attr('alignment-baseline', 'middle');
  }, []);

  return (
    <>
      <svg
        id='legenda'
        ref={ref}
        viewBox={`0 0 ${height} ${width}`}
        style={{
          height: '100px',
          width: '300px',
          marginRight: '3vw',
          marginLeft: '3vw',
        }}
      ></svg>
    </>
  );
}

export default NewLegend;
