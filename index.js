var getName = function(planets)
{
    return planets.results[0].name
}
    
    
    
var displayPlanets = function(planets)
{
    d3.select("#names")
        .selectAll("p")
        .data(planets)
        .enter()
        .append("p")
        .text(planets.results[0].name)
             
}


    

var filmPromise = d3.json("https://swapi.co/api/planets")
    filmPromise.then(
    function(planets)
{
        console.log("planets",planets)
        displayPlanets(planets)
        console.log("lol")
       // console.log(planets.map(getName))
        
},
    function(err)
{
    console.log("error")  
})

