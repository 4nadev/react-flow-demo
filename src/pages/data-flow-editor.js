import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, addEdge } from 'react-flow-renderer';

const initialNodes = [
  { id: '1', data: { label: 'Input' }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Process' }, position: { x: 300, y: 100 } },
  { id: '3', data: { label: 'Output' }, position: { x: 200, y: 300 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
];

const DataFlowEditorPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Editor de Fluxos de Dados</h1>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        style={{ width: '100%', height: '80vh' }}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default DataFlowEditorPage;
