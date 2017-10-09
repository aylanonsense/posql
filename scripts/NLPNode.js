class NLPNode {
	constructor(pos, dependency, parent) {
		this.pos = pos || null;
		this.dependency = dependency || null;
		this.parent = parent || null;
		this.children = [];
	}
	addChild(node) {
		this.children.push(node);
	}
}

module.exports = NLPNode;