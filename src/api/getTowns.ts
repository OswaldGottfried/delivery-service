import { Graph } from '../services/graph'
import { TOWNS } from '../services/graph/graph/graphFixture'

/**
 * Abstraction for getting towns
 * Here can be a request to the server
 * @returns {Graph<string>} graph with towns
 */
export const getTowns = (): Graph<string> => new Graph(TOWNS)
