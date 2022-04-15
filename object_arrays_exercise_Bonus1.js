const N = ["N", "Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
const L = ["L", "8th", "6th", "Union Square", "3rd", "1st"];
const six = ["six", "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];


function metro (line1, firstStop, line2, finalStop){
    const stopsLine2 = [];
    const stopsLine1 = [];
    
    if (line1.includes(firstStop) && line2.includes(finalStop)){
    //union square is after first stop
    if (line1.indexOf("Union Square")>line1.indexOf(firstStop)){
        stopsLine1.push(line1.slice(line1.indexOf(firstStop)+1,line1.indexOf("Union Square")+1))}
    //union square is before first stop    
        else if (line1.indexOf("Union Square")<line1.indexOf(firstStop)){
            stopsLine1.push(line1.slice(line1.indexOf("Union Square"),line1.indexOf(firstStop)))
        stopsLine1[0].reverse()};
    //union square is before final stop
    if (line2.indexOf("Union Square")<line2.indexOf(finalStop)){
        stopsLine2.push(line2.slice(line2.indexOf("Union Square")+1,line2.indexOf(finalStop)+1))}
    //union square is after final stop    
        else if (line2.indexOf("Union Square")>line2.indexOf(finalStop))
        {stopsLine2.push(line2.slice(line2.indexOf(finalStop),line2.indexOf("Union Square")));
        stopsLine2[0].reverse()};


    const numberOfStops = stopsLine1[0].length+stopsLine2[0].length
  
    
    return `You must travel through the following stops on the ${line1[0]} line: ${stopsLine1}.
    Change at Union Square.
    Your journey continues through the following stops: ${stopsLine2}.
    ${numberOfStops} stops in total.`
}
    else return "One or both lines do not have the stops you're looking for"
}

console.log(metro(L, "1st", six, "Grand Central"))