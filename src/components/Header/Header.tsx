import React from 'react';

export const Header: React.FC = () => {
  const date = new Date().toLocaleDateString();
  return (
    <div className="notification is-info">
      <h1 className="title">Конвертер валют</h1>
      <h2 className="subtitle">Актуальний курс валют станом на {date}</h2>
    </div>
  );
};