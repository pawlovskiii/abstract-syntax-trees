import { ast_a, ast_b, ast_c } from '../scripts/ast.js';
import { convertASTToString } from '../scripts/convertASTToString.js';

describe('AST object to HTML string', () => {
	it('should convert single non-nested div object with no attributes to HTML string', () => {
		expect(convertASTToString(ast_a)).toBe(
			`<div>Hello world!</div>`
		);
	});
	it('should convert single non-nested div object with attributes to HTML string', () => {
		expect(convertASTToString(ast_b)).toBe(`<p id="root">Intro to AST</p>`);
	});
    it('should convert single non-nested div object with two attributes to HTML string', () => {
        expect(convertASTToString(ast_c)).toBe(`<main id="root" class="test">Welcome</main>`)
    });
});
