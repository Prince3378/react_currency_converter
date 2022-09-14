import React, { useState } from 'react';
import { useGetCurrencyQuery } from '../../../api/GeneralApi';

export const ConverterInput: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const {data: currency = []} = useGetCurrencyQuery();
  const [result, setResult] = useState('');

  const calculate = (inpText: string): void => {
    const words = inpText.split(' ');

    const amount = +words[0];
    const enterCurs = currency
      .find(cur => cur.cc === words[1].toUpperCase())?.rate;

    const exitCurs = currency
      .find(cur => cur.cc === words[3].toUpperCase())?.rate;

    const enterRate = enterCurs ? +enterCurs : 1;
    const exitRate = exitCurs ? +exitCurs : 1;

    const result = (amount * (enterRate / exitRate)).toFixed(2);
    setResult(result);
    setInputText('');
  };

  return (
    <div className="box">
      <h1>Введіть кількість, та бажані валюти для обрахунку
        <p className="has-text-grey-light">(Приклад: 1 USD in UAH)</p>
      </h1>
      
      <input
        className="input converter-input"
        type="text"
        value={inputText}
        placeholder="Приклад: 1 USD in UAH"
        onChange={(event) => {
          event.preventDefault();
          setInputText(event.target.value);
        }}
      >
      </input>
      <div>
        <button
          className="button is-info"
          onClick={() => calculate(inputText)}
        >
          Розрахувати
        </button></div>
      <span>
        <label className="label">Отримаємо: {result}</label>
      </span>
    </div>
  );
};