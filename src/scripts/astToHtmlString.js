import { htmlVoidElements } from './htmlVoidElements.js';

function astToHtmlString(ast) {
	if (typeof ast !== 'object') throw Error('Invalid input');
	const { nodeType, tagName, attributes, children, value } = ast;
	if (nodeType != 'element' || tagName === undefined) throw Error('Invalid input');
	return `${openingTag(tagName, nodeType, attributes)}${tagContent(
		children
	)}${closingTag(nodeType, tagName)}`;
}

function extractAttributes(attributes) {
	if (typeof attributes !== 'object') throw Error('Invalid input')
	return attributes.map(({ name, value }) => `${name}="${value}"`).join(' ');
}

function isSelfClosingTag(nodeType, tagName) {
	return nodeType === 'element' && htmlVoidElements.includes(tagName);
}

function openingTag(tagName, nodeType, attributes) {
	if (!attributes) {
		return isSelfClosingTag(nodeType, tagName) ? `${tagName}` : `<${tagName}>`;
	}
	return isSelfClosingTag(nodeType, tagName)
		? `${tagName} ${extractAttributes(attributes)}`
		: `<${tagName} ${extractAttributes(attributes)}>`;
}

function closingTag(nodeType, tagName) {
	return isSelfClosingTag(nodeType, tagName) ? ` />` : `</${tagName}>`;
}

function tagContent(children) {
	return children.map(({ _, value }) => `${value}`).join('');
}

export { astToHtmlString };
