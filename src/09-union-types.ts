(() => {
  let myUT: string | number;
  myUT = 'Hola';
  myUT = 123;
  //myUT = true --> Error solo acepta numeros o string

  function comprobarTipo(variable: string | number) {
    if (typeof variable === 'string') {
      console.log(`string ${variable.toLowerCase()}`);
    } else {
      console.log(`number ${variable.toFixed(2)}`);
    }
  }

  comprobarTipo('HOLA MUNDO');

  comprobarTipo(3.14167568568);
})();
