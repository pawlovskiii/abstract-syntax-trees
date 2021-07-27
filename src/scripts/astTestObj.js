const invalid_ast_A = {
	tagName: 'div',
	children: [
		{
			nodeType: 'text',
			value: 'Hello world!',
		},
	],
};

const invalid_ast_B = {
	nodeType: 'element',
	children: [
		{
			nodeType: 'text',
			value: 'Hello world!',
		},
	],
};

const invalid_ast_C = {
	nodeType: 'element',
	tagName: 'main',
	attributes: 'textValue',
	children: [{ nodeType: 'text', value: 'Welcome' }],
};

const invalid_ast_D = {
	nodeType: 'marrio',
	tagName: 'main',
	attributes: [
		{ name: 'class', value: 'test' },
		{ name: 'id', value: 'root' },
	],
	children: [{ nodeType: 'text', value: 'Welcome' }],
};

const ast_a = {
	nodeType: 'element',
	tagName: 'div',
	children: [
		{
			nodeType: 'text',
			value: 'Hello world!',
		},
	],
};
const a_result = `<div>Hello world!</div>`;

const ast_b = {
	nodeType: 'element',
	tagName: 'p',
	attributes: [{ name: 'id', value: 'root' }],
	children: [
		{
			nodeType: 'text',
			value: 'Intro to AST',
		},
	],
};
const b_result = `<p id="root">Intro to AST</p>`;

const ast_c = {
	nodeType: 'element',
	tagName: 'main',
	attributes: [
		{ name: 'class', value: 'test' },
		{ name: 'id', value: 'root' },
	],
	children: [{ nodeType: 'text', value: 'Welcome' }],
};
const c_result = `<main class="test" id="root">Welcome</main>`;

const ast_d = {
	nodeType: 'element',
	tagName: 'header',
	attributes: [{ name: 'class', value: 'header' }],
	children: [
		{
			nodeType: 'element',
			tagName: 'h1',
			attributes: [{ name: 'class', value: 'hero-text' }],
			children: [{ nodeType: 'text', value: 'Las Vegas' }],
		},
		{
			nodeType: 'element',
			tagName: 'p',
			attributes: [{ name: 'class', value: 'about-us-info' }],
			children: [{ nodeType: 'text', value: 'Great fun and adventure.' }],
		},
	],
};
const d_result = `'<header class="header><h1 class="hero-text">Las Vegas</h1><p class="about-us-info">Great fun and adventure.</p></header>'`;

export { ast_a, ast_b, ast_c, ast_d };
export { a_result, b_result, c_result, d_result };
export { invalid_ast_A, invalid_ast_B, invalid_ast_C, invalid_ast_D };
