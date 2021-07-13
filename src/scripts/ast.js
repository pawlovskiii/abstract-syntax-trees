const ast_a = {
	nodeType: 'element',
	tagName: 'div',
	attributes: [{ name: 'class', value: 'test' }],
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

export { ast_a, ast_b };
