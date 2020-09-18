import React from "react";
import { useDispatch } from "react-redux";
import { addNode, addEdge } from "./store/actions";

var divHeader = {
  textAlign: "center",
};

const Header = () => {
  const dispatch = useDispatch();

  const addNodeItem = () => {
    const node = {
      data: { id: "6", label: "Node 6" },
      position: { x: 400, y: 100 },
    };

    dispatch(addNode(node));
  };

  const addEdgeItem = () => {
    const edge = {
      data: {
        source: "6",
        target: "two",
        label: "Edge from Node1 to Node2",
      }
    };

    dispatch(addEdge(edge));
  };

  return (
    <>
      <input type="button" value="Add Node" onClick={addNodeItem} />
      <input type="button" value="Add Edge" onClick={addEdgeItem} />
      <h1 style={divHeader}>Graph Editor</h1>
      <hr />
    </>
  );
};

export default Header;
