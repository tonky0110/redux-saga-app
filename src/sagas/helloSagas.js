export function* helloSaga() {
    console.log("Hello Sagas!");
  }
  
  const helloSagas = [helloSaga()];
  
  export default helloSagas;
  