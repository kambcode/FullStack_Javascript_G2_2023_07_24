// let miPrimerPromesa = new Promise((resolver,rechazar)=>{
//     const data = fetch("https://ipapi.co/8.8.8.8/json/german")
//     if(data) {
//       resolver(new Promise((res, rej) => { res("Segund promesa eJECUTADA")}));
//     } else {
//       rechazar("Error German",data);
//     }
//   });

//   console.log("1");
//   miPrimerPromesa
//     .then((data)=> { pintarTabla(data)})
//     .then((saludo)=> console(saludo))
//     .catch((error)=> console.log(error))
//   console.log("2");

//   function pintarTabla(info) {
//     //
//     //
//     //
//   }
// function primero(res, rej) {
//     setTimeout(()=> { 
//         console.log("Wilmer");
//         res();
//     }, 5000);
// }

// function segundo(res, rej) {
//     setTimeout(()=> { console.log("Jose")
//     res();
// }, 5000);
// }

// function tercero() {
//     setTimeout(()=> { console.log("Daniel")}, 5000);
// }

// let miNuevaPromesa = new Promise((res, rej)=> {
//     segundo(res, rej)
// })

// miNuevaPromesa.then(()=>{ 
//    return new Promise((res, rej)=>primero(res, rej)) 
// }).then(()=>{
//     tercero()
// })
// let i = 0;
// while (i<1000) {
//     console.log(i);
//     i++;
// }

// async function miPrimeraAsync () {
//     return new Promise ((res, rej)=> setTimeout(()=>{
//       console.log("ejecute promesa");
//       res()}, 4000))
// }
// console.log("Antes de asyn");
// await miPrimeraAsync();
// console.log("Despues de asyn");


async function f() {
    console.log("Antes de asyn");
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 5000)
    });

    let result = await promise; // wait until the promise resolves (*)

    console.log(result); // "done!"
    console.log("Despues de asyn");
}

f();


