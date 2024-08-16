import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, addEdge } from 'react-flow-renderer';

const initialNodes = [
  { id: '1', data: { label: 'User' }, position: { x: 100, y: 100 }, style: { background: '#4caf50', color: '#fff' } },
  { id: '2', data: { label: 'Group' }, position: { x: 300, y: 100 }, style: { background: '#ff9800', color: '#fff' } },
  { id: '3', data: { label: 'Permission' }, position: { x: 200, y: 300 }, style: { background: '#2196f3', color: '#fff' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
];

const RelationshipsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Visualização de Relações entre Entidades</h1>
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

export default RelationshipsPage;
