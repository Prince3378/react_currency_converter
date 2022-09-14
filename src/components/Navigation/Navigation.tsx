import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

export const Navigation: React.FC = () => {
  const [active, setActive] = useState<boolean>(true);

  return (
    <div className="tabs is-boxed">
      <ul>
        <li className={classNames('', { 'is-active': active })}>
          <Link to={'/'} onClick={() => setActive(true)} >
            <span className="icon is-small">
              <i
                className="fa-solid fa-calculator"
                aria-hidden="true"
              >
              </i>
            </span>
            <span>Converter</span>
          </Link>
        </li>
        <li className={classNames('', { 'is-active': !active })}>
          <Link to={'/exchange-rate'} onClick={() => setActive(false)}>
            <span className="icon is-small">
              <i
                className="fa-solid fa-file-invoice-dollar"
                aria-hidden="true"
              >
              </i>
            </span>
            <span>Exchange rate</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};
