import { Node } from '../node/node'
import { PriorityQueue } from './PriorityQueue'

/**
 * Directed weighted graphs
 */
export class Graph<T> {
  private _nodes: Map<T, Map<T, number>>

  constructor(nodes: Node<T>[] = []) {
    this._nodes = new Map()
    nodes.forEach(({ name, edges }) => this._nodes.set(name, edges))
  }

  get nodes() {
    return this._nodes
  }

  addNode({ name, edges }: Node<T>) {
    if (this._nodes.has(name)) return
    this._nodes.set(name, edges)
  }

  removeNode(name: T) {
    this._nodes.delete(name)
  }

  addEdge(from: T, to: T, weight: number) {
    const fromNode = this._nodes.get(from)
    if (!fromNode) return

    this._nodes.set(from, fromNode.set(to, weight))
  }

  removeEdge(node: T, edge: T) {
    this._nodes.get(node)?.delete(edge)
  }

  getDeliveryCost(
    routes: {
      0: T
      1: T
    } & Array<T>,
  ) {
    let cost = 0
    routes.forEach((route, index) => {
      // We should stop on the end of list
      if (index === routes.length - 1) return
      const end = routes[index + 1]
      const currentCost = Number(this._nodes.get(route)?.get(end))

      if (!currentCost) throw new Error('No Such Route')

      cost += currentCost
    })

    return cost
  }
}
