import classNames from 'classnames';
import React, { useState } from 'react';
import { useGetCurrencyQuery } from '../../api/GeneralApi';

import '../ListRate/Flags.css';

export const ListRate: React.FC = () => {
  const {data: currency = [], isLoading} = useGetCurrencyQuery();

  const [selectedCurr, setSelectedCurr] = useState<string>('UAH');
  const [giveRate, setGiveRate] = useState<number>(1);

  const selectRate = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCurr(e.target.value);
    if (e.target.value === 'UAH') {
      setGiveRate(1);
    }
    const curs = currency.find(el => el.cc === e.target.value)?.rate;
    if (curs) {
      setGiveRate(+curs);
    }
  };

  const calculateRate = (curs: string): string => {
    return (+curs / giveRate).toFixed(2);
  };

  return (
    <>
      <div className="control has-icons-left">
        <div className={classNames('select', {'is-loading': isLoading})} >
          <select
            onChange={(event) => selectRate(event)}>
            <option>UAH</option>
            {currency.map(el => (
              <option key={el.r030}>
                {el.cc}
              </option>
            ))}
          </select>
        </div>
        <div className="icon is-small is-left">
          <i className={`icon-flag icon-${selectedCurr}`}></i>
        </div>
      </div>
      {isLoading && <h1>Loading...</h1>}
      {currency.length && (
        <table className="table is-narrow is-fullwidth">
          <tbody>
            {currency.map(el => (
              <tr key={el.r030}>
                <td className="is-vcentered">{el.txt}</td>
                <td className="is-vcentered">{el.cc}</td>
                <td className="is-vcentered">
                  <div className="icon is-medium">
                    <i className={`icon-flag icon-${el.cc}`}></i>
                  </div>
                </td>
                <td className="is-vcentered">{calculateRate(el.rate)}</td>
                <td className="is-vcentered">{selectedCurr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
