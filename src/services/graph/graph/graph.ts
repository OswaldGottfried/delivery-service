import { Node, Edge } from '../node/node'
import { PriorityQueue } from './PriorityQueue'

export type RouteType<T> = {
  0: T
  1: T
} & T[]

/**
 * Directed weighted graphs
 */
export class Graph<T> {
  private _nodes: Map<T, Map<T, Edge<T>>>

  constructor(nodes: Node<T>[] = []) {
    this._nodes = new Map()
    nodes.forEach(({ name, edges }) => this._nodes.set(name, edges))
  }

  get nodes() {
    return this._nodes
  }

  get nodeKeys() {
    return Array.from(this.nodes.keys())
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

    this._nodes.set(from, fromNode.set(to, { weight, node: to }))
  }

  removeEdge(node: T, edge: T) {
    this._nodes.get(node)?.delete(edge)
  }

  /**
   * Dijkstra's algorithm
   * @link https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
   * @param {T} start start node
   * @param {T} finish finish node
   * @returns {T[]} shortest way
   */
  findShortestWay(start: T, finish: T): T[] {
    // keep all the nodes with numbers that represent its total cost from starting node.
    const costFromStartTo = new Map<T, number>()
    // this queue tells which nodes needs to be checked next
    const queue = new PriorityQueue<T>()
    // list of all the nodes that keep the record of which node was previously visited to discover its current cost
    const prev = new Map<T, T | null>()
    const result: T[] = []

    for (const node of this._nodes.keys()) {
      if (node === start) {
        costFromStartTo.set(node, 0)
        queue.enqueue(node, 0)
      } else {
        costFromStartTo.set(node, Infinity)
      }
      prev.set(node, null)
    }

    while (queue.values.length) {
      let current = queue.dequeue()
      if (!current) return []
      const currentNode = this._nodes.get(current)
      if (!currentNode) return []

      if (current === finish) {
        prev.forEach(() => {
          if (!current) return
          result.push(current)
          current = prev.get(current) || undefined
        })
        break
      } else {
        currentNode.forEach((neighborEdge, node) => {
          if (!current) return

          const currentCost = Number(costFromStartTo.get(current))
          const neighborCostFromStartTo = Number(costFromStartTo.get(node))
          const costToNeighbor = currentCost + neighborEdge.weight

          if (costToNeighbor < neighborCostFromStartTo) {
            costFromStartTo.set(node, costToNeighbor)
            prev.set(node, current)
            queue.enqueue(node, costToNeighbor)
          }
        })
      }
    }

    return result.reverse()
  }

  /**
   * Calculate the delivery cost for a given delivery route
   * @param {RouteType<T>} routes delivery route
   * @returns {number} delivery cost
   */
  getDeliveryCost(routes: RouteType<T>): number {
    let cost = 0
    routes.forEach((route, index) => {
      // We should stop on the end of list
      if (index === routes.length - 1) return
      const end = routes[index + 1]
      const currentCost = Number(this._nodes.get(route)?.get(end)?.weight)

      if (!currentCost) throw new Error('No Such Route')

      cost += currentCost
    })

    return cost
  }
}
