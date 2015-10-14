# Query Selector All Helper

Lightweight .queryselectorAll() shortcut which array coercion.

	qsa('p')
		.map(doStuffWithEachParagraph);


## Usage (Default)

Default is to select from the document. So,

	qsa('p')

is synonymous with

	[].slice.call( document.querySelector('p') );


## Usage (Element Specific)

You can specify the element to search within via:

	qsa('p', document.querySelector('div'));

which is synonymous with

	[].slice.call( document.querySelector('div').querySelectorAll('p') );

