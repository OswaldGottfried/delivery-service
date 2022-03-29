import { Graph } from './graph'
import { TOWNS } from './graphFixture'

let graph: Graph<string>

beforeEach(() => {
  graph = new Graph(TOWNS)
})

describe('class Graph', () => {
  describe('method getDeliveryCost', () => {
    it('should correct calculate the cost with three towns', () => {
      expect(graph.getDeliveryCost(['A', 'B', 'E'])).toEqual(4)
    })

    it('should correct calculate the cost two towns', () => {
      expect(graph.getDeliveryCost(['A', 'D'])).toEqual(10)
    })

    it('should calculate the cost multi road', () => {
      expect(graph.getDeliveryCost(['E', 'A', 'C', 'F'])).toEqual(8)
    })

    it('should throw error if the route did not exist', () => {
      expect(() => graph.getDeliveryCost(['A', 'D', 'F', 'B'])).toThrow(
        'No Such Route',
      )
    })
  })

  describe('method getCountOfRoutes', () => {
    const CASES = [
      { a: 'E', b: 'D', expected: 4 },
      { a: 'E', b: 'E', expected: 5 },
    ]
    it.each(CASES)(
      'should return $expected for route $a -> $b',
      ({ a, b, expected }) => {
        expect(graph.getCountOfRoutes([a, b])).toBe(expected)
      },
    )
  })
})
