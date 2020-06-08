import React,{useState} from 'react';

function Calc() {
  const currencyUsd = 63;
  const fee = 12500;
  const [currencyWithFee,setCurrencyWithFee]=useState(0);
  const [totalSum,setTotalSum]=useState(0);
  const regexp = /^[1-9\b]+$/;

  const Calculate=(e) => {
    let currentValue = document.querySelector('#investments').value;
    if(currentValue === '' || !regexp.test(currentValue))
      return;
    let newCurrencyWithFee = (Math.round((currencyUsd - (fee / parseInt(currentValue))) * 100) / 100).toFixed(4);
    setCurrencyWithFee(newCurrencyWithFee);
    let sum = newCurrencyWithFee*parseInt(currentValue);
    setTotalSum(sum);
  }

  return (
    <section className="calc">
      <div className="content-wrapper">
        <h2 className="section-title calc__title">Калькулятор</h2>
        <form className="calc__form form">
          <div className="form__column">
            <label className="form__row form__row--rub">
              <span className="form__label">Валюта</span>
              <input className="form__field" id="currency" value={currencyUsd} type="text" readOnly/>
            </label>
            <label className="form__row form__row--usd">
              <span className="form__label">Сумма вложений</span>
              <input className="form__field" id="investments" defaultValue={1} min={1} step={1} onChange={Calculate} type="number"/>
            </label>
          </div>
          <div className="form__column">
            <label className="form__row form__row--rub form__row--result">
              <span className="form__label">Комиссия за сделку и вывод валюты</span>
              <input className="form__field" id="fee" value={fee} type="text" readOnly/>
            </label>
            <label className="form__row form__row--rub form__row--result">
              <span className="form__label">Курс с&nbsp;учетом комиссии</span>
              <input className="form__field" id="currencyWithFee" value={currencyWithFee} type="text" readOnly/>
            </label>
            <label className="form__row form__row--rub form__row--result form__row--total">
              <span className="form__label">Общая сумма сделки</span>
              <input className="form__field form__field--total" id="total" value={totalSum} type="text" readOnly/>
            </label>
          </div>
        </form>
        <a className="button calc__btn-more" href="#">Узнать больше</a>
      </div>
    </section>
  );
}

export default Calc;
