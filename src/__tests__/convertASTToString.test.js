import { ast_a, ast_b } from '../scripts/ast.js';
import { convertASTToString } from '../scripts/convertASTToString.js';

describe('Checking the correctness of the convertASTToString', () => {
	it('should convert single AST object to HTML string', () => {
		expect(convertASTToString(ast_a)).toBe(
			'<div class="test">Hello world!</div>'
		);
		expect(convertASTToString(ast_b)).toBe('<p id="root">Intro to AST</p>');
	});
});
