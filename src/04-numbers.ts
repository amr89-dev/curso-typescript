(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('Product Price->', productPrice);

  let customerAge: number = 19;
  customerAge = customerAge + 2; //--> Devuelve 21
  // customerAge = customerAge + '2'; // --> Error, no se puedo asignar un string a un number
  console.log('->', customerAge);

  let producsInStock: number;
  // console.log('->', producsInStock); //Error porque no se ha asignado un valor a la variable
  /*if (producsInStock > 4) {
    console.log('->', 'is lower');
  }*/
})();
