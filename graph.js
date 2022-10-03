class Graph {
  constructor() {
    this.adjencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjencyList[vertex]) {
      this.adjencyList[vertex] = new Set();
    }
  }
  addEdges(vertex1, vertex2) {
    if (!this.adjencyList[vertex1]) {
      this.adjencyList[vertex1];
    }
    if (!this.adjencyList[vertex2]) {
      this.adjencyList[vertex2];
    }
    this.adjencyList[vertex1].add(vertex2);
    this.adjencyList[vertex2].add(vertex1);
  }
  hasEdges(vertex1, vertex2) {
    return (
      this.adjencyList[vertex1].has(vertex2) &&
      this.adjencyList[vertex2].has(vertex1)
    );
  }
  display() {
    for (let vertex in this.adjencyList) {
      console.log(`${vertex} ---> ${[...this.adjencyList[vertex]]}`);
    }
  }

  removeEdges(vertex1, vertex2) {
    this.adjencyList[vertex1].delete(vertex2);
    this.adjencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjencyList[vertex]) {
      return;
    }
    for (let adjencyVertex in this.adjencyList[vertex]) {
      this.removeEdges(vertex, adjencyVertex);
    }
    delete this.adjencyList[vertex];
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdges("A", "B");
graph.addEdges("A", "C");
console.log(graph.hasEdges("A", "C"));
graph.display();
graph.removeEdges("A", "C");
graph.display();
graph.removeVertex("C");
graph.removeVertex("B");

graph.display();
