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

const ast_c = {
	nodeType: 'element',
	tagName: 'main',
	attributes: [
		{ name: 'class', value: 'test' },
		{ name: 'id', value: 'root' },
	],
	children: [{ nodeType: 'text', value: 'Welcome' }],
};

export { ast_a, ast_b, ast_c };
