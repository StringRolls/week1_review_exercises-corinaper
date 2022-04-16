const N = ["N", "Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
const L = ["L", "8th", "6th", "Union Square", "3rd", "1st"];
const six = ["six", "Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];


function metro (line1, firstStop, line2, finalStop){
    
    const stopsLine = {};
    
    if (line1.includes(firstStop) && line2.includes(finalStop)){
    //union square is after first stop
    if (line1.indexOf("Union Square")>line1.indexOf(firstStop)){
        stopsLine[line1[0]]=line1.slice(line1.indexOf(firstStop)+1,line1.indexOf("Union Square")+1)}
    //union square is before first stop    
        else if (line1.indexOf("Union Square")<line1.indexOf(firstStop)){
            stopsLine[line1[0]] = line1.slice(line1.indexOf("Union Square"),line1.indexOf(firstStop))
        stopsLine[line1[0]].reverse()
    };
    //union square is before final stop
    if (line2.indexOf("Union Square")<line2.indexOf(finalStop)){
        stopsLine[line2[0]] = line2.slice(line2.indexOf("Union Square")+1,line2.indexOf(finalStop)+1)}
    //union square is after final stop    
        else if (line2.indexOf("Union Square")>line2.indexOf(finalStop))
        {stopsLine[line2[0]]=line2.slice(line2.indexOf(finalStop),line2.indexOf("Union Square"));
        stopsLine[line2[0]].reverse()
    };


    const numberOfStops = stopsLine[line1[0]].length+stopsLine[line2[0]].length
  
    
    return `You must travel through the following stops on the ${Object.keys(stopsLine)[0]} line: ${stopsLine[line1[0]]}.
    Change at Union Square.
    Your journey continues through the following stops: ${stopsLine[line2[0]]}.
    ${numberOfStops} stops in total.`
}
    else return "One or both lines do not have the stops you're looking for"
}

console.log(metro(L, "8th", six, "Grand Central"))