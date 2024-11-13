import React from 'react';
import '../styles/_rocket.scss';

function generateEmptyListEls(quantity) {
  return [...Array(quantity)].map((x, i) => <li key={i}/>);
}

export default function RocketCore() {
  return (
    <>
      <div data-testid="rocket-core" className="rocket" style={{ bottom: '300px' }}>
        <div className="rocket__body">
          <div className="rocket__body__main"/>
          <div className="rocket__body__fin rocket__body__fin__left"/>
          <div className="rocket__body__fin rocket__body__fin__right"/>
          <div className="rocket__body__window"/>
        </div>
        <div className="rocket__exhaust__flame"/>
        <ul className="rocket__exhaust__fumes">
          {generateEmptyListEls(9)}
        </ul>
      </div>
      <ul className="stars">
        {generateEmptyListEls(15)}
      </ul>
    </>
  );
}