import { useState } from 'react';
import Button from './Button';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');

  return (
    <div>
      <div>{displayValue}</div>
      {/*aquí irán los botones de la calculadora*/}
      <Button value="1" onClick={() => setDisplayValue('1')} />
      <Button value="+" onClick={() => setDisplayValue((prev) => prev + '+')} />
    </div>
  );
}

export default Calculator;
