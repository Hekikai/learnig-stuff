export const createVNode = (tagName, props = {}, children = []) => {
	return {
		tagName,
		props,
		children,
	}
};

export const createDOMNode = (vNode) => {

	if(typeof vNode === 'string'){
		return document.createTextNode(vNode);
	}

	const {tagName, props, children} = vNode;

	// Создаем DOM-узел
	const node = document.createElement(tagName);

	//Добавляем атрибуты к DOM-узлу
	Object.entries(props).forEach(([key, value]) => {
		node.setAttribute(key, value);
	});

	// Рекурсивно обрабатываем дочерные узлы
	children.forEach(child => {
		node.appendChild(createDOMNode(child));
	});

	return node;
};

export const mount = (node, target)=>{
	target.replaceWith(node);
	return node;
}