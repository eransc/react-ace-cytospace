import React from "react";

import Cytoscape from "cytoscape";
import { useSelector } from "react-redux";
import CytoscapeComponent from "react-cytoscapejs";
import COSEBilkent from "cytoscape-cose-bilkent";

Cytoscape.use(COSEBilkent);

const CustomGraph = () => {
  const nodes = useSelector((state) => state.graph.nodes);
  const edges = useSelector((state) => state.graph.edges);
  let cy;

  const divStyle = {
    display: "flex",
    flexDirection: "row",
  };

  const layout = { name: "cose-bilkent" };

  return (
    <CytoscapeComponent
      cy={(cy) => {
        cy = cy;
        cy.on("add", "node", (_evt) => {
          console.log("adding node");
          cy.layout(layout).run();
          cy.fit();
        });
      }}
      pan={{ x: 50, y: 50 }}
      elements={CytoscapeComponent.normalizeElements({
        nodes: nodes,
        edges: edges,
      })}
      style={{
        width: "600px",
        height: "600px",
      }}
      stylesheet={[
        {
          selector: "node[label]",
          style: {
            label: "data(label)",
            "text-valign": "top",
            "text-halign": "right",
          },
        },
        {
          selector: "node",
          style: {
            "transition-property": "background-color border-color",
            "transition-duration": "0.3s",
            "transition-timing-function": "ease-in-sine",
            "background-color": "purple",
          },
        },
        {
          selector: "edge",
          style: {
            "curve-style": "bezier",
            "target-arrow-shape": "triangle",
            "target-arrow-color": "#43447a",
            "line-color": "#43447a",
          },
        },
      ]}
    />
  );
};

export default CustomGraph;
