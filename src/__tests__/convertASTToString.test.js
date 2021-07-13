describe('Checking the correctness of the convertASTToString', () => {
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

	it('should convert AST object to HTML string', () => {
		expect(convertASTToString(ast_a)).toBe(
			'<div class="test">Hello world!</div>'
		);
		expect(convertASTToString(ast_b)).toBe('<p id="root">Intro to AST</p>');
	});
});
