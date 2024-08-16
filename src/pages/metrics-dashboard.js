import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, addEdge } from 'react-flow-renderer';

const initialNodes = [
  { id: '1', data: { label: 'Metric A' }, position: { x: 100, y: 100 }, style: { background: '#ffc107', color: '#000' } },
  { id: '2', data: { label: 'Metric B' }, position: { x: 300, y: 100 }, style: { background: '#673ab7', color: '#fff' } },
  { id: '3', data: { label: 'Metric C' }, position: { x: 200, y: 300 }, style: { background: '#3f51b5', color: '#fff' } },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' },
];

const MetricsDashboardPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard de Métricas</h1>
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

export default MetricsDashboardPage;
