import faker from 'faker';


const mount = (htmlElement) => {
  let products = '';
  for (let i = 0; i < 5; i++) {
      const name = faker.commerce.productName();
      products += `<div>${name}</div>`;
    }
    
    htmlElement.innerHTML = products;
    //ReactDOM.render(<App/>, htmlElement);
}

export {mount}; // container can decide when to mount the apps in screen

// Check if we are running in development env and in isolation
if(process.env.NODE_ENV === 'development'){ //webpack sets this env variable
  const el = document.querySelector('#dev-products');
  //Assuming our container doesn't have #dev-products
  if(el){
    mount(el);
  }
}