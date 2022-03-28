import { Node } from './node'

describe('Node class', () => {
  it('should create node with uniq name', () => {
    const node = new Node('test', [
      { node: 'A', weight: 2 },
      { node: 'A', weight: 1 },
      { node: 'B', weight: 3 },
    ])

    const expectedNode = new Map()
    expectedNode.set('A', { weight: 1 })
    expectedNode.set('B', { weight: 3 })

    expect(node.edges).toEqual(expectedNode)
  })
})
