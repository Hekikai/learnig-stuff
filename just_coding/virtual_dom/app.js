import { createVNode, createDOMNode, mount } from "./vDom.js";

const createVApp = state => {
	const {count} = state;

	return createVNode('div', {class: 'container', "data-count": count}, [
			createVNode('h1', {}, ['Hello, Virtual DOM']),
			createVNode('div', {}, [`Count: ${ count }`]),
			'Text node without tags', // <- TextNode
			createVNode('img', {
				src: 'https://i.ibb.co/M6LdN5m/2.png', width: 200, style: 'display:' +
					' block'
			})
		]
	)
};

const state = { count: 0 };
let vApp = createVApp(state);
let rootNode = mount(createDOMNode(vApp), document.getElementById("app"));

setInterval(() => {
	state.count++;

	const nextVApp = createVApp(state);

	rootNode = patchNode(rootNode, vApp, nextVApp);

	vApp = nextVApp;
}, 1000);

