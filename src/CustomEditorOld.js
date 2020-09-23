import React, { useState, useReducer, useEffect } from "react";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import _ from "lodash";

import { setGraph, deleteEdge } from "./store/actions";

import AceEditor from "react-ace";

import "ace-builds/webpack-resolver";

import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/theme-github";

const CustomEditor = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function validateEdges(newChange) {
    // check that edge references to node keys are valid
    // if one of the node keys in the edge are wrong return false
    for (let idx = 0; idx < newChange.graph.edges.length; idx++) {
      const edge = newChange.graph.edges[idx];
      const result =
        state.graph.nodes.find((x) => x.data.id === edge.data.source) &&
        state.graph.nodes.find((x) => x.data.id === edge.data.target);
      if (!result) {
        //dispatch(deleteEdge(edge));
        return false;
      }
    }

    ///
    state.graph.edges.forEach((item) => {
      const edgeFound = newChange.graph.edges.find(
        (x) =>
          x.data.source === item.data.source &&
          x.data.target === item.data.target
      );

      if (!edgeFound) {
        // edge deleted. check that referenced node  exist
        if (
          !newChange.graph.nodes.find(
            (x) =>
              x.data.source !== item.data.source ||
              x.data.target !== item.data.target
          )
        ) {
          return false;
        }
      }
    });
    return true;
  }

  function validateNodes(newChange) {
    // if deleting node check if it connected to edges => return false
    for (let idx = 0; idx < state.graph.nodes.length; idx++) {
      const node = state.graph.nodes[idx];
      const nodeFound = newChange.graph.nodes.find(
        (x) => x.data.id === node.data.id
      );

      if (!nodeFound) {
        // find edges connected to this node
        const connectedEdges = state.graph.edges.find(
          (x) =>
            x.data.source === node.data.id || x.data.target === node.data.id
        );

        if (connectedEdges && connectedEdges.data) {
          return false;
        }
      }
    }
    return true;
  }

  function getGraphData(newChange) {
    // check that edge references to node keys are valid
    // if one of the node keys in the edge are wrong return false
    for (let idx = 0; idx < newChange.graph.edges.length; idx++) {
      const edge = newChange.graph.edges[idx];
      const result =
        state.graph.nodes.find((x) => x.data.id === edge.data.source) &&
        state.graph.nodes.find((x) => x.data.id === edge.data.target);
      if (!result) {
        debugger;
        dispatch(deleteEdge(edge));
        //return false;
      }
    }
  }

  function onChange(newValue) {
    try {
      const newChange = JSON.parse(newValue);
      // if (validateEdges(newChange) && validateNodes(newChange)) {
      //   dispatch(setGraph(JSON.parse(newValue)));
      // }

      //getGraphData(newChange);
      


    } catch (ex) {
      console.error("error", ex);
    }
  }

  return (
    <>
      <AceEditor
        mode="json"
        theme="github"
        onChange={onChange}
        value={JSON.stringify(state, null, "\t")}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{
          $blockScrolling: true,
          wrap: true,
        }}
      />
    </>
  );
};

export default CustomEditor;
