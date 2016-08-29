// var dataset = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19, 14, 11, 22, 29, 11, 13, 12, 17, 18, 10, 24, 18, 25, 9, 3 ];

var dataset = [];

for (var i = 0; i < 10; i++){
  var newNumber = Math.round(Math.random()*30);
  dataset.push(newNumber);
}

d3.select("body").selectAll("div")
  .data(dataset)
  .enter()
  .append("div")
  .attr("class", "bar")
  .style("height", function(d){
    var barHeight = d * 5;
    return barHeight + "px";
  });

var w = 700;
var h = 100;

var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h)
            .attr("class", "box");

var circles = svg.selectAll("circle")
                 .data(dataset)
                 .enter()
                 .append("circle");

circles.attr("cx", function(d, i){
          return (i * 50) + 25;
        })
        .attr("cy", h/2)
        .attr("r", function(d){
          return d;
        })
        .attr("fill", "teal")
        .attr("stroke", "#2196f3")
        .attr("stroke-width", function(d){
          return d/6;
        });
