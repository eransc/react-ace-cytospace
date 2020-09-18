export const addNode = (node) => {
  return {
    type: "graph/addNode",
    payload: node,
  };
};

export const addEdge = (edge) => {
  return {
    type: "graph/addEdge",
    payload: edge,
  };
};

export const deleteEdge = (edge) => {
    return {
      type: "graph/deleteEdge",
      payload: edge,
    };
  };

export const setGraph = (graph) => {
    return {
        type: "graph/setGraph",
        payload: graph,
      };
}
