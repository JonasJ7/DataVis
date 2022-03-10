var w = 1000;
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