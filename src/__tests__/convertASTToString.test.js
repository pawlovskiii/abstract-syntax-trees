import { ast_a, ast_b, ast_c, ast_d } from '../scripts/ast.js';
import { a_result, b_result, c_result, d_result } from '../scripts/ast.js';
import { convertASTToString } from '../scripts/convertASTToString.js';

describe('AST object to HTML string', () => {
	it(`should convert to 'div' tag with inner text`, () => {
		expect(convertASTToString(ast_a)).toBe(a_result);
	});
	it(`should convert to 'p' tag with attribute and inner text`, () => {
		expect(convertASTToString(ast_b)).toBe(b_result);
	});
	it(`should convert to 'main' tag with two attributes and inner text`, () => {
		expect(convertASTToString(ast_c)).toBe(c_result);
	});
	it('should convert to header with two children', () => {
		expect(convertASTToString(ast_d)).toBe(d_result);
	});
});
