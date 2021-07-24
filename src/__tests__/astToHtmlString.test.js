import {
	invalid_ast_A,
	invalid_ast_B,
	invalid_ast_C,
	invalid_ast_D,
} from '../scripts/astTestObj.js';
import { ast_a, ast_b, ast_c, ast_d } from '../scripts/astTestObj.js';
import {
	a_result,
	b_result,
	c_result,
	d_result,
} from '../scripts/astTestObj.js';
import { astToHtmlString } from '../scripts/astToHtmlString.js';

describe('Possible error handling', () => {
	it('should throw an error if no object is passed', () => {
		const result = astToHtmlString();
		expect(result).toThrow('Invalid input');
	});
	it(`should throw an error if ast object doesn't contain 'nodeType' property`, () => {
		const result = astToHtmlString(invalid_ast_A);
		expect(result).toThrow('Invalid input');
	});
	it(`should throw an error if ast object doesn't contain 'tagName' property`, () => {
		const result = astToHtmlString(invalid_ast_B);
		expect(result).toThrow('Invalid input');
	});
	it(`should throw an error if ast object contains invalid 'attributes' property`, () => {
		const result = astToHtmlString(invalid_ast_C);
		expect(result).toThrow('Invalid input');
	});
	it(`should throw an error if ast object contains invalid 'nodeType' property`, () => {
		const result = astToHtmlString(invalid_ast_D);
		expect(result).toThrow('Invalid input');
	});
});

describe('AST object to HTML string', () => {
	it(`should convert to 'div' tag with inner text`, () => {
		const result = astToHtmlString(ast_a);
		expect(result).toBe(a_result);
	});
	it(`should convert to 'p' tag with attribute and inner text`, () => {
		const result = astToHtmlString(ast_b);
		expect(result).toBe(b_result);
	});
	it(`should convert to 'main' tag with two attributes and inner text`, () => {
		const result = astToHtmlString(ast_c);
		expect(result).toBe(c_result);
	});
	it('should convert to header with two children', () => {
		const result = astToHtmlString(ast_d);
		expect(result).toBe(d_result);
	});
});
