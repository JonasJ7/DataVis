

var svg = d3.select("#container")
var width = +svg.attr("width");
var height = +svg.attr("height");
var centerX = width / 2;
var centerY = height / 2;

//data
var nodes = [{ "id": "Alice" }, { "id": "Alice" }];

//circles
var circles = svg.selectAll('circle').data(nodes).enter().append('circle').attr("r",10);


var simulation = d3.forceSimulation(nodes)
    .force('charge', d3.forceManyBody())
    .force('link', d3.forceLink(links))
    .force('center', d3.forceCenter(centerX, centerY));

simulation.on('tick', () => { circles.attr("cx", (d) => d.x).attr("cy", (d) => d.y) });










var addBirthday = (ev) => {
    ev.preventDefault(); //to stop the form submitting
    var birthday = {
        name: document.getElementById('name').value,
        day: document.getElementById('day').value,
        month: document.getElementById('month').value,
        year: document.getElementById('year').value
    }
    birthdays.push(birthday);
    document.forms[0].reset(); //to clear the form for the next entries

    //for display purposes only
    console.log('added', { birthdays });
    var pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(birthdays, '\t', 2);

}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', addBirthday);
});

var fs = require('fs')

jsonData = JSON.stringify(birthdays);

fs.writeFile(".\Users\jonas\OneDrive\Dokumenter\Github\DataVis\birthdays.json", jsonData,

    function (error) {
    if (error) {
        console.error(error);
    }
})





















/*
var w = 1000;
var h = 1000;
var rad = 100;

// set the dimensions and margins of the graph
var width = 450
var height = 450

// append the svg object to the body of the page
var svg = d3.select("#datavis")
        .append("svg")
        .attr("width", w)
    .attr("height", h)


// create dummy data -> just one element per circle
var data = {
    nodes: [{ "name": "A" }, { "name": "B" }],
    links: { source: "A", target: "B" }

// Initialize the circle: all located at the center of the svg area
var node = svg.append("svg")
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("r", rad)
    .attr("cx", w / 2)
    .attr("cy", h / 2)
    .style("fill", "#69b3a2")
    .style("fill-opacity", 0.3)
    .attr("stroke", "#69a2b2")
    .style("stroke-width", 4)
    */























/*var w = 1000;
var h = 1000;
var rad = 50;
var leftMargin = w / 4;
var dogdata = [10, 5, 30, 20].sort(d3.ascending);

var svg = d3.select("svg").attr("width", w).attr("height", h).style("background-color", "black");

var circle = d3.select("svg").selectAll("circle")
    .data(dogdata)
    .join("circle")
    .attr("cx", function (d, i) {
        console.log(d);
        console.log(i);
        return leftMargin + i * rad * 2;
    })
    .attr("cy", h / 2)
    .attr("r", function (d) {
        return d * rad / 4;
    })
    .attr("fill", "none")
    .attr("stroke", "white")
    .style("stroke-width", "5");
    */