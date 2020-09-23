import initialState from "./data.json"

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "graph/setGraph":
      return action.payload;
      break;
    case "graph/addNode":
      return {
        graph: {
          nodes: [...state.graph.nodes, action.payload],
          edges: [...state.graph.edges],
        },
      };
      break;
    case "graph/deleteNode":
      return {
        ...state,
      };
      break;
    case "graph/addEdge":
      return {
        graph: {
          nodes: [...state.graph.nodes],
          edges: [...state.graph.edges, action.payload],
        },
      };
      break;
    case "graph/deleteEdge":
      return {
        graph: {
          nodes: [...state.graph.nodes],
          edges: state.graph.edges.filter(
            (x) => x.data.id === action.payload.data.id
          ),
        },
      };
      break;
    default:
      return state;
  }
};
