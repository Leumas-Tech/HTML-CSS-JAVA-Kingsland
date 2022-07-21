function area (type, size) {
    var area;
    if(type == "square"){
       area = size * size;
       console.log(area);
    }
    else if (type == "circle"){
        area = Math.PI * size * size;
        console.log(area);
    }
}

area("square",5);