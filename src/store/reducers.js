const initialState = {
  graph: {
    nodes: [
      { data: { id: "one", label: "Node 1" }, position: { x: 0, y: 0 } },
      { data: { id: "two", label: "Node 2" }, position: { x: 100, y: 0 } },
      { data: { id: "three", label: "Node 3" }, position: { x: 100, y: 100 } },
      { data: { id: "4", label: "Node 4" }, position: { x: 100, y: 200 } },
      { data: { id: "5", label: "Node 5" }, position: { x: 100, y: 300 } },
    ],
    edges: [
      {
        data: {
          source: "one",
          target: "two",
          label: "Edge from Node1 to Node2",
        },
      },
      {
        data: {
          source: "one",
          target: "three",
          label: "Edge from Node1 to Node3",
        },
      },
    ],
  },
};

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
