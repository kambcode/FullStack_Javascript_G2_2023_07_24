///FUNCIONES

///Callback
///Clousure
function prueba () {
  const testClousure = "Mi prueba Clousure";
  function test() {
    console.log(testClousure)
  }
  test();
}
prueba();
///Recursividad
//El proceso de llamar una funcion a si misma
let i=0;

function recursivoWhile (condicion) {
  if(condicion) {
    recursivoWhile(condicion)
  } 
  i++;
}

recursivoWhile(i<100);

///Anonimas
() => {
  //
  //
  //
};


/////Syncronimso
while(i<100000000000000) {
  //
  //
  //
  //
}

console.log("Finalice mi tarea");
/////Asyncronimso
  //// SetTimeOut, SetInterval, set...,  
  // let daniCatch;

  // let myTimeOut = setTimeout((german, daniel) => {
  //   ///Ejecuto mi codigo
  //   console.log(german, daniel);
  //   daniCatch = german;
  //   clearTimeout(myTimeOut);
  // },1000,"Soy German","Soy Daniel")

  ////Promesas
  //// Sintaxis
  let miPrimerPromesa = new Promise((resolver,rechazar)=>{
    const data = Math.random(); ///0 -1
    if(data) {
      resolver(data);
    } else {
      rechazar("Falla en llamado de data");
    }
  });

  console.log("1");
  miPrimerPromesa.then((data)=> { console.log(data)}).catch((error)=> console.log(error))
  console.log("2");

  ////Async Await
  //// Sintaxis

  async function miPrimeraAsync () {
    return new Promise ((res, rej)=> setTimeout(()=>{
      console.log("ejecute promesa");
      res()}, 4000))
  }
  console.log("Antes de asyn");
  await miPrimeraAsync();
  console.log("Despues de asyn");
