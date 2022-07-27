function main(name, area,pop,country,post){



    const place = {name: name, area: area, population: pop, country: country, postCode: post};

for( let key in place) {
    console.log(`${key} -> ${place[key]}`);
}
}

main("Atlanta","343","416474","USA","404");