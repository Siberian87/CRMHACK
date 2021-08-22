/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useRef, useState } from "react";
import ReactFlow, {
  removeElements,
  addEdge,
  ReactFlowProvider,
  Background,
} from "react-flow-renderer";
import { observer } from "mobx-react-lite";
import { EventNode } from "../../../../components/Events/Event";
import { ForkNode } from "../../../../components/Events/Fork";
import AtomatizationStore from "../../../../stores/AtomatizationStore";

const AutoFlow = observer(() => {
  const onElementsRemove = elementsToRemove => {
    // @ts-ignore
    AtomatizationStore.updateLines(
      removeElements(elementsToRemove, AtomatizationStore.lines)
    );
  };
  // @ts-ignore
  const onConnect = params => {
    AtomatizationStore.updateLines(addEdge(params, AtomatizationStore.lines));
  };
  return (
    <ReactFlow
      elements={AtomatizationStore.lines}
      nodeTypes={{ event: EventNode, fork: ForkNode }}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      deleteKeyCode={46}
      onLoad={() => {
        console.log("lol");
      }}
      snapToGrid
      snapGrid={[15, 15]}
    >
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
});

export default AutoFlow;
