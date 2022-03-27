import { Node } from '../'

const A = new Node('A', [
  { node: 'B', weight: 1 },
  { node: 'C', weight: 4 },
  { node: 'D', weight: 10 },
])
const B = new Node('B', [{ node: 'E', weight: 3 }])
const C = new Node('C', [
  { node: 'D', weight: 4 },
  { node: 'F', weight: 2 },
])
const D = new Node('D', [{ node: 'E', weight: 10 }])
const E = new Node('E', [
  { node: 'A', weight: 2 },
  { node: 'B', weight: 3 },
])
const F = new Node('F', [{ node: 'D', weight: 1 }])

export const TOWNS = [A, B, C, D, E, F]
