export default (selector, element=document) => [].slice.call( element.querySelectorAll(selector) );
