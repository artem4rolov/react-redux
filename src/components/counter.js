import React from "react";
import { bindActionCreators } from "redux";
import imgPlus from "../img/plus.svg";
import imgMinus from "../img/minus.svg";
import imgClear from "../img/clear.svg";
import { connect } from "react-redux";
import * as actions from "../actions";

const Counter = ({ counter, inc, dec, clr }) => {
  return (
    <>
      <div className="layout">
        <div>
          <h1>{counter}</h1>
        </div>
      </div>

      <div className="buttons">
        <div className="inc" onClick={inc}>
          <img src={imgPlus} alt="plus" />
        </div>
        <div className="dec" onClick={dec}>
          <img src={imgMinus} alt="minus" />
        </div>
        <div className="clr" onClick={clr}>
          <img src={imgClear} alt="clear" />
        </div>
      </div>
    </>
  );
};

// вытаскиваем из стейта counter
const mapStateToProps = (state) => {
  return {
    counter: state,
  };
};

// вытаскиваем из стейта функции для кнопок
const mapDisptachToProps = (dispatch) => {
  // bindActionCreators дефолтная функция в redux которая привязывает каждую нашу функцию
  // из action.js к dispatch (чтобы не писать это вручную)
  // Достаем inc, dec и clr из функции bindActionCreators (!!!не из actions.js!!!)
  const { inc, dec, clr } = bindActionCreators(actions, dispatch);
  return {
    inc,
    dec,
    clr,
  };
};

// коннектим наш компонент Counter к нашему стейтус помощью функции connect
export default connect(mapStateToProps, mapDisptachToProps)(Counter);
