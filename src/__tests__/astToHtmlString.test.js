import { ast_a, ast_b, ast_c, ast_d } from '../scripts/ast.js';
import { a_result, b_result, c_result, d_result } from '../scripts/ast.js';
import { astToHtmlString } from '../scripts/astToHtmlString.js';

describe('Possible error handling', () => {
	it('should throw an error if no object is passed', () => {
		expect(() => astToHtmlString()).toThrow('Invalid input');
	});
});

describe('AST object to HTML string', () => {
	it(`should convert to 'div' tag with inner text`, () => {
		expect(astToHtmlString(ast_a)).toBe(a_result);
	});
	it(`should convert to 'p' tag with attribute and inner text`, () => {
		expect(astToHtmlString(ast_b)).toBe(b_result);
	});
	it(`should convert to 'main' tag with two attributes and inner text`, () => {
		expect(astToHtmlString(ast_c)).toBe(c_result);
	});
	it('should convert to header with two children', () => {
		expect(astToHtmlString(ast_d)).toBe(d_result);
	});
});
