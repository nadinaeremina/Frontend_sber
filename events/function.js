const getRandom = (max = 11, min = 0) => 
Math.floor(Math.random() * (max - min) + min);

const getColor = ( a = 100, r = 255, g = 255,
    b = 255) => `rgba(${getRandom(r)}, 
    ${getRandom(g)}, ${getRandom(b)},
    ${a / 100})`;