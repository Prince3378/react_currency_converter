import React from 'react';
import { ConverterCalc } from './ConverterCalc/ConverterCalc';
import { ConverterInput } from './ConverterInput/ConverterInput';

export const Converter: React.FC = () => {
  return (
    <div>
      <ConverterInput />
      <ConverterCalc />
    </div>
  );
};
