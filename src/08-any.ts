(() => {
  let myDinamycVar: any = 'hola';
  myDinamycVar = 123;
  myDinamycVar = [];
  myDinamycVar = false;
  myDinamycVar = {};
  myDinamycVar = '432';

  //Si quiero forzar a que una variable dinamica tenga un tipo especifico puedo hacer casting

  let myNumber: number = <number>myDinamycVar;
  console.log('number ->', typeof myNumber);
  let myBool: boolean = myDinamycVar as boolean;
  console.log('bool ->', typeof myBool);
})();
