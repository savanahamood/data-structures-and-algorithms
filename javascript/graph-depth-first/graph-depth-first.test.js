const Graph = require('../graph/graph');
const depthFirst = require('./graph-depth-first');

describe('depth first', () => {
    let myGraph;
  
    beforeEach(() => {
        myGraph = new Graph();
    });

    it('should perform depth-first traversal starting from a node', () => {
        const myGraph = new Graph();
        const vertexA = myGraph.addVertex('A');
        const vertexB = myGraph.addVertex('B');
        const vertexC = myGraph.addVertex('C');
        const vertexD = myGraph.addVertex('D');
        const vertexE = myGraph.addVertex('E');
        const vertexF = myGraph.addVertex('F');
        const vertexG = myGraph.addVertex('G');
        const vertexH = myGraph.addVertex('H');

        // Add edges in the correct order
        myGraph.addEdge(vertexA, vertexB);
        myGraph.addEdge(vertexB, vertexC);
        myGraph.addEdge(vertexC, vertexG);
        myGraph.addEdge(vertexB, vertexD);
        myGraph.addEdge(vertexA, vertexD);
        myGraph.addEdge(vertexD, vertexE);
        myGraph.addEdge(vertexD, vertexH);
        myGraph.addEdge(vertexD, vertexF);
        myGraph.addEdge(vertexF, vertexH);

        const result = depthFirst(vertexA, myGraph);

        // Verify that the result matches the expected order
        const expected = ['A', 'B', 'C', 'G', 'D', 'E', 'H', 'F'];
        expect(result).toEqual(expected);
    });
});
