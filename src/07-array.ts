(() => {
  let myArray = [1, 2, 3];

  // myArray.push("string") -> Error por inferencia solo acepta numeros
  // myArray.push([]) -> Error por inferencia solo acepta numeros
  // myArray.push({}) -> Error por inferencia solo acepta numeros
  myArray.push(4); // -> ok porque le estamos pusheando un numero

  let newArr = [1, 'dos', true];
  newArr.push(4);
  newArr.push('tres');
  newArr.push(false);

  let mixedArr: (string | object)[] = [];

  // mixedArr.push(1) -> Error porque el Array solo acepta strings y objetos
  mixedArr.push('uno');
  mixedArr.push({});
  mixedArr.push([]);
})();
