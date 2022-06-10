const fs = require("fs");

fs.readFile("api-data.txt", "utf8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  const textos = data.split("\r\n");

  function lettersum(string) {
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
      sum += abecedario[string[i]];
    }
    return { length: string.length, [string]: sum };
  }

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

  const listGroup = { 0: [""], 1: [""] };
  let sum = 0;

  for (let i = 0; i < textos.length; i++) {
    sum = 0;
    for (let r = 0; r < textos[i].length; r++) {
      sum += abecedario[textos[i][r]];
    }
    if (!listGroup[sum]) {
      listGroup[sum] = [];
    }
    listGroup[sum].push(textos[i]);
  }

  const arrays = [];
  const result = [];
  // #1
  for (let property in listGroup) {
    let findM = listGroup[property].reduce(
      (acc, val) => (acc.length > val.length ? acc : val),
      ""
    );
    let prop = Number(property);
    arrays.push([findM]);
    for (let i = prop + 1; i < Object.keys(listGroup).length; i++) {
      let long = arrays[prop]?.map((v, i, a) => {
        return a[a.length - 1];
      })[0].length;
      let palabras = listGroup[i]?.filter((v) => v.length < long && v);
      let findM = palabras?.reduce(
        (acc, val) => (acc.length > val.length ? acc : val),
        ""
      );
      if (findM) {
        arrays[prop]?.push(findM);
      }
    }
  }
  arrays.splice(0, 2);
  let listMayor = arrays?.reduce(
    (acc, val) => (acc.length > val.length ? acc : val),
    ""
  );

  listMayor.map((v) => {
    result.push(lettersum(v));
  });
  console.log(result);
});
