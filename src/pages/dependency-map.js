import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, addEdge } from 'react-flow-renderer';

const initialNodes = [
  { id: '1', data: { label: 'Module A' }, position: { x: 100, y: 100 } },
  { id: '2', data: { label: 'Module B' }, position: { x: 300, y: 100 } },
  { id: '3', data: { label: 'Module C' }, position: { x: 200, y: 300 } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-3', source: '2', target: '3' },
];

const DependencyMapPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mapa de Dependências</h1>
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

export default DependencyMapPage;
