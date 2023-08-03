(() => {
  let myVar = null; //Tipo any
  let otherVar = undefined; //Tipo any

  let myNull: null = null; // Tipo null
  let myUndefined: undefined = undefined; //Tipo undefined

  let myNumber: number | null = null;
  myNumber = 50;

  let myString: string | undefined = undefined;
  myString = 'Hola TypeScript';

  const saludar = (name: string | null) => {
    let saludo = 'hola';
    console.log(`saludo ${name?.toLowerCase() ?? 'nobody'}`);
  };

  saludar('AMADO');
  saludar(null);
})();
