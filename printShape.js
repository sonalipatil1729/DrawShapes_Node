function checkIsProperNumber(val, variableName) {
    if (!val || typeof val !== "number") {
        throw ` ${val || 'Provided variable'} is not a valid number`;
    }

    if(val<0 ){
        throw `Input is less than 0`;
    }
}
function addSpaces(lines){
    var  spaces = new Array(lines+1).join(' ');
    return spaces;
}

module.exports = {
    description: "This is a module to draw triangle, square or rhombus",
    triangle: (lines) => {
       var triangle;
       for(let i = 0; i<lines; i++){
        triangle = "";
        triangle = triangle+addSpaces(lines-i);
        triangle = triangle+"/";
        if(i==lines-1){
            triangle  = triangle +new Array(i+i+1).join('-');
            triangle = triangle+"\\";
            console.log(triangle);
            return;
        }
        triangle = triangle+ addSpaces(i+i);
        triangle = triangle+"\\";
        console.log(triangle);
    } 
},
square: (lines) => {
    checkIsProperNumber(lines, "Input");
    if(lines<2){
        throw "Number of lines should be greater than 2"
    }
    var square;
    for(let i = 0; i<lines; i++){
        square = "";
        square = square+"|";
        if(i==0 || i==lines-1){
            square  = square +new Array(lines+1).join('-');
            square = square+"|";
            console.log(square);
            continue;
        }

        square = square + addSpaces(lines);
        square = square+"|";
        console.log(square);
    }

},
rhombus: (lines) => {
    checkIsProperNumber(lines, "Input");
    if(lines<2 || lines%2 !== 0){
        throw "Number of lines is less than 2 or is not even"

    }
    lines = lines / 2;
    for (  var i = 1 ; i <=lines  ; i++) {
        console.log([new Array(lines-i+1).join(" "),"/",i == 1 ? "-" :new Array(2*i).join(" "),"\\",new Array(lines-i+1).join(" ")].join(''));
    }
    for (  var i = lines ; i >= 1 ; i--) {
        console.log([new Array(lines-i+1).join(" "),"\\", i == 1 ? "-" : new Array(2*i).join(" "),"/",new Array(lines-i+1).join(" ")].join(''));

    }
}
}
