import React, { useState } from 'react';
import { useGetCurrencyQuery } from '../../../api/GeneralApi';

export const ConverterCalc: React.FC = () => {
  const { data: currency = [] } = useGetCurrencyQuery();
  const [flagEnter, setFlagEnter] = useState<string>('UAH');
  const [flagExit, setFlagExit] = useState<string>('UAH');
  const [giveRate, setGiveRate] = useState<number>(1);
  const [reciveRate, setReciveRate] = useState<number>(1);
  const [enter, setEnter] = useState<string>('');
  const [exit, setExit] = useState<string>('');

  const enterInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEnter(e.target.value);

    const result = (+e.target.value * (giveRate / reciveRate)).toFixed(2);

    setExit(result);
  };

  const enterRate = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFlagEnter(e.target.value);

    const rate = currency.find(el => el.cc === e.target.value)?.rate;

    const currentRate = rate ? +rate : 1;

    setGiveRate(currentRate);

    const exitValue = (+enter * (currentRate / reciveRate)).toFixed(2);

    setExit(exitValue);
  };

  const exitInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setExit(e.target.value);

    const result = (+e.target.value * (reciveRate / giveRate)).toFixed(2);

    setEnter(result);
  };

  const exitRate = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setFlagExit(e.target.value);

    const rate = currency.find(el => el.cc === e.target.value)?.rate;

    const currentRate = rate ? +rate : 1;

    setReciveRate(currentRate);

    const enterValue = (+enter * (giveRate / currentRate)).toFixed(2);

    setExit(enterValue);
  };

  return (
    <div className="columns">
      <div className="column">
        <form className="box">
          <div className="field">
            <label className="label">Віддаю</label>
            <div className="control has-icons-left converter-input">
              <div className="select is-info">
                <select
                  onChange={(e) => {
                    enterRate(e);
                  }}
                >
                  <option>UAH</option>
                  {currency.map(el => (
                    <option key={el.r030}>
                      {el.cc}
                    </option>
                  ))}
                </select>
              </div>
              <div className="icon is-small is-left">
                <i className={`icon-flag icon-${flagEnter}`}></i>
              </div>
            </div>
            <div className="control">
              <input
                className="input"
                type="number"
                value={enter}
                min="1"
                placeholder="Введіть кількість"
                onChange={(e) => enterInput(e)}
              />
            </div>
          </div>

        </form>
      </div>
      <div className="column">
        <form className="box">
          <div className="field">
            <label className="label">Отримую</label>
            <div className="control has-icons-left converter-input">
              <div className="select is-info">
                <select
                  onChange={(e) => exitRate(e)}
                >
                  <option>UAH</option>
                  {currency.map(el => (
                    <option key={el.r030}>
                      {el.cc}
                    </option>
                  ))}
                </select>
              </div>
              <div className="icon is-small is-left">
                <i className={`icon-flag icon-${flagExit}`}></i>
              </div>
            </div>
            <div className="control">
              <input
                className="input"
                type="number"
                value={exit}
                onChange={(e) => exitInput(e)}
                min="1"
                placeholder="Введіть кількість"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
