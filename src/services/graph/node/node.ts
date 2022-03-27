type EdgeConstructor<T> = { node: T; weight: number }
type Edge<T> = Map<T, number>

/**
 * Node for graph
 * @constructor
 * @param {T} name name of node
 * @param {EdgeConstructor<T>[]} edges edges to the node with weight
 */
export class Node<T> {
  private _name: T
  private _edges: Edge<T>

  constructor(name: T, edges: EdgeConstructor<T>[] = []) {
    this._name = name
    this._edges = new Map()
    edges.forEach(({ node, weight }) => this._edges.set(node, weight))
  }

  public get name(): T {
    return this._name
  }

  public set name(name: T) {
    this._name = name
  }

  public get edges(): Edge<T> {
    return this._edges
  }

  public set edges(edges: Edge<T>) {
    this._edges = edges
  }
}
