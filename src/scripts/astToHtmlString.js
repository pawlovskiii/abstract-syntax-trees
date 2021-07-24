function astToHtmlString(ast) {
	if (typeof ast !== 'object') throw Error('Invalid input');
	return ast;
}

export { astToHtmlString };
