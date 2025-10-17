import { useState } from "react";
import Button from "./Boton";

const Calculadora = () => {
  const [contador, setContador] = useState("");
  const [anterior, setAnterior] = useState(null);
  const [operacion, setOperacion] = useState(null);

  function operar(op) {
    setOperacion(op);
    setAnterior(parseFloat(contador));
    setContador("");
  }
  function resultados() {
    if (operacion && anterior !== null && contador !== "") {
      const actual = parseFloat(contador);
      let resultado = 0;

      switch (operacion) {
        case "+":
          resultado = anterior + actual;
          break;
        case "-":
          resultado = anterior - actual;
          break;
        case "*":
          resultado = anterior * actual;
          break;
        case "/":
          resultado = anterior / actual;
          break;
      }

      setContador(resultado.toString());
      setOperacion(null);
      setAnterior(null);
    }
  }
  function limpiar() {
    setContador("");
    setOperacion(null);
    setAnterior(null);
  }
  const importNumber = (num) => setContador(contador + num);
  return (
    <div className="Calculadora">
      <label>{contador}</label>
      <br />
      <Button onClick={() => importNumber(1)}>1</Button>
      <Button onClick={() => importNumber(2)}>2</Button>
      <Button onClick={() => importNumber(3)}>3</Button>
      <Button onClick={resultados("=")}>=</Button>
      <br />
      <Button onClick={() => importNumber(4)}>4</Button>
      <Button onClick={() => importNumber(5)}>5</Button>
      <Button onClick={() => importNumber(6)}>6</Button>
      <Button onClick={() => operar("+")}>+</Button>
      <br />
      <Button onClick={() => importNumber(7)}>7</Button>
      <Button onClick={() => importNumber(8)}>8</Button>
      <Button onClick={() => importNumber(9)}>9</Button>
      <Button onClick={() => operar("-")}>-</Button>
      <br />
      <Button onClick={() => importNumber(0)}>0</Button>
      <Button onClick={() => operar("*")}>*</Button>
      <Button onClick={() => operar("/")}>/</Button>
      <Button onClick={limpiar}>C</Button>
      <br />
    </div>
  );
};
export default Calculadora;