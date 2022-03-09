var data = [
	{ name: 'data1', value: 10 },
	{ name: 'data2', value: 20 },
	{ name: 'data2', value: 30 }
];

var width = 800;
var height = 400;
var margin = { top: 50, bottom: 50, left: 50, right: 50 }

var svg = d3.select('#canvas')
	.append('svg')
	.attr('height', height - margin.top - margin.bottom)
	.attr('width', width - margin.left - margin.right)
	.attr('viewBox', [0, 0, width, height]);

var x = d3.scaleBand()
	.domain(d3.range(data.length))
	.range([margin.left, width - margin.right])
	.padding(.1);

var y = d3.scaleLinear()
	.domain([0, 100])
	.range([height - margin.bottom, margin.top]);

svg
	.append('g')
	.attr('fill', 'royalblue')
	.selectAll('rect')
	.data(data.sort((a, b) => d3.descending(a.value, b.value)
		.join('rect')
		.attr('x', (d, i) => x(i))
		.attr('y', (d) => y(d.value))
		.attr('height', d => y(0) - y(d.value))
		.attr('width', x.bandwidth())

svg.node();

