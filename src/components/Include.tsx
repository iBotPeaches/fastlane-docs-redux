import React from 'react';

export default function Include({ name }: { name: string }) {
  return (
    <div style={{
      border: '1px dashed #ccc',
      padding: '8px',
      margin: '8px 0',
      fontSize: '0.8em',
      color: '#666'
    }}>
      Include: {name}
    </div>
  );
}
