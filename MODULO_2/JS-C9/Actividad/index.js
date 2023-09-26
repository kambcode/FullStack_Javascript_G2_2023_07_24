//// Callback

function principal (callback, errorCallback) {
  ///1 fetch data
  ///2
  ///3
  if(data) {
    callback(data) 
  } else {
    errorCallback()
  }
}

function secundaria() {

}

function terciaria() {
    // filter de categoria
}

function error() {
  alert("Hay un error en los datos");
}

principal(terciaria, error)

function callbackForEach(element, index, array) {
  console.log(index);
  return element
}

[1,2,3,4,5].forEach((element) => element,  );
