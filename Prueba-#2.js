const fs = require("fs");

fs.readFile("api-data.txt", "utf8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  const textos = data.split("\r\n");

  const abecedario = {
    "": 0,
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const test = {};
  let sum = 0;

  for (let i = 0; i < textos.length; i++) {
    sum = 0;
    for (let r = 0; r < textos[i].length; r++) {
      sum += abecedario[textos[i][r]];
    }
    if (sum == 319) {
      test[textos[i]] = sum;
    }
  }

  console.log(test);
});
