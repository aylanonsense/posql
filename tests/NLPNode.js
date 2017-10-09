const chai = require('chai');
const expect = chai.expect;
const NLPNode = require('../scripts/NLPNode');

describe('NLPNode', () => {
	it('can be instantiated', () => {
		let node = new NLPNode();
		expect(node).to.be.ok;
	});
	describe('part of speech', () => {
		it('can pass in a part of speech as the first argument', () => {
			let node = new NLPNode('NOUN');
		});
		it('can access that part of speech under .pos', () => {
			let node = new NLPNode('NOUN');
			expect(node.pos).to.equal('NOUN');
		});
		it('defaults to null if no part of speech is defined', () => {
			let node = new NLPNode();
			expect(node.pos).to.be.null;
		});
	});
	describe('parent dependency relation', () => {
		it('can take a dependency relation as its second and third arguments', () => {
			let parent = new NLPNode('VERB');
			let node = new NLPNode('NOUN', 'subject', parent);
		});
		it('can access that relation under .dependency and .parent', () => {
			let parent = new NLPNode('VERB');
			let node = new NLPNode('NOUN', 'subject', parent);
			expect(node.dependency).to.equal('subject');
			expect(node.parent).to.equal(parent);
		})
		it('defaults to null if no dependency relation is defined', () => {
			let node = new NLPNode('NOUN');
			expect(node.dependency).to.be.null;
			expect(node.parent).to.be.null;
		});
	});
	describe('children', () => {
		it('has a .children property that defaults to []', () => {
			let node = new NLPNode('NOUN');
			expect(node.children).to.be.ok;
			expect(node.children).to.be.an('array');
			expect(node.children).to.be.empty;
		});
		it('can add anotheer NLPNode to .children with the .addChild function', () => {
			let node = new NLPNode('NOUN');
			let child = new NLPNode('VERB');
			node.addChild(child);
			expect(node.children).to.have.lengthOf(1);
			expect(node.children[0]).to.equal(child);
		});
		it('.addChild does not modify the child\'s .dependency or .parent', () => {
			let node = new NLPNode('NOUN');
			let child = new NLPNode('VERB');
			node.addChild(child);
			expect(child.dependency).to.be.null;
			expect(child.parent).to.be.null;
		});
	});
});