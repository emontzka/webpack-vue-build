// import _ from 'lodash';
require('./login');

function component () {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpacks'], ' ');
  element.innerHTML = 'Hello World';

  return element;
}

document.body.appendChild(component()); 