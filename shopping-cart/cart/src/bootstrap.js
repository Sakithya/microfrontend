import faker from 'faker';

const mount = (htmlElement) => {

let cartText = `<div> You have ${faker.random.number()} items in your cart`;
htmlElement.innerHTML = cartText;
}

export {mount}; // container can decide when to mount the apps in screen

if(process.env.NODE_ENV === 'development'){ //webpack sets this env variable
    const el = document.querySelector('#dev-cart');
    //Assuming our container doesn't have #dev-products
    if(el){
      mount(el);
    }
  }