import qsa from '../index.js';


document.addEventListener('DOMContentLoaded', e=>{

	console.log('all paragraphs:');
	qsa('p').map( p=>console.log(p.innerHTML) );


	console.log('paragraphs in the page\'s first div');
	qsa('p', document.querySelector('div'))
		.map( p=>console.log(p.innerHTML) );
});
