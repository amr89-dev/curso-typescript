(() => {
  //Alias
  type MyOwnDataType = number | string;

  let userID: MyOwnDataType;
  userID = 123;
  userID = 'Hola';
  //userID = false --> Error solo acepta los tipos de myOwnDataType

  //Tipos literales
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  let mySize: Sizes;
  mySize = 'S';
  mySize = 'XL';
  // mySize = "l" --> Error porque esta definido con mayuscula no con minuscula

  function checkType(user: MyOwnDataType, size: Sizes) {
    console.log('->', user, size);
  }

  checkType('hola', 'L');
  // checkType(false, "l") Error
})();
