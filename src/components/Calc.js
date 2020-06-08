import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const marks = {
  1000: '1 т.',
  //10: '10 т.',
  //50: '50 т.',
  100000: '100 т.',
  300000: '300 т.',
  500000: '500 т.',
  1000000: '1 м.'
};

export default class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 200000,
      range: 200000,
      currencyUsd: 63,
      fee: 12500,
      currencyWithFee: 0,
      totalSum: 0
    };
  }

  onSliderChange = value => {
    this.setState({ value });
    this.Calculate();
  };
  onChange = e => {
    const { value } = e.target;
    this.setState({ value });
    this.Calculate();
  };
  Calculate= e => {
    const regexp = /^[1-9]\d*$/;
    let currentValue = parseInt(this.state.value);
    if(currentValue === '' || !regexp.test(currentValue))
      return;

    let newCurrencyWithFee = (Math.round((this.state.currencyUsd - (this.state.fee / currentValue)) * 100) / 100).toFixed(2);
    this.setState({ currencyWithFee: newCurrencyWithFee });

    let sum = newCurrencyWithFee*currentValue;
    this.setState({ totalSum: sum });
  }

  componentDidMount() {
    this.Calculate();
  }

  render() {
    return (
      <section className="calc">
        <div className="content-wrapper">
          <h2 className="section-title calc__title">Калькулятор</h2>
          <form className="calc__form form">
            <div className="form__column">
              <label className="form__row form__row--rub">
                <span className="form__label">Валюта</span>
                <input className="form__field" id="currency" value={this.state.currencyUsd} type="text" readOnly/>
              </label>
              <label className="form__row form__row--usd">
                <span className="form__label">Сумма вложений</span>
                <input className="form__field" id="investments" value={this.state.value} min={1} step={1000} onChange={this.onChange} type="number"/>
              </label>
              <Slider
                className="form__range"
                railStyle={{ backgroundColor: '#e1e1e1', height: 2 }}
                trackStyle={{ backgroundColor: '#0073F1', height: 2 }}
                handleStyle={{
                  border: 0,
                  height: 16,
                  width: 16,
                  marginLeft: -2,
                  marginTop: -7,
                  backgroundColor: 'white',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
                }}
                min={1000}
                max={1000000}
                step={10000}
                marks={marks}
                value={this.state.value}
                onChange={this.onSliderChange}
              />
            </div>
            <div className="form__column">
              <label className="form__row form__row--rub form__row--result">
                <span className="form__label">Комиссия за сделку и вывод валюты</span>
                <input className="form__field form__field--fee" id="fee" value={this.state.fee} type="text" readOnly/>
              </label>
              <label className="form__row form__row--rub form__row--result">
                <span className="form__label">Курс с&nbsp;учетом комиссии</span>
                <input className="form__field" id="currencyWithFee" value={this.state.currencyWithFee} type="text" readOnly/>
              </label>
              <label className="form__row form__row--rub form__row--result form__row--total">
                <span className="form__label">Общая сумма сделки</span>
                <input className="form__field form__field--total" id="total" value={this.state.totalSum} type="text" readOnly/>
              </label>
            </div>
          </form>
          <a className="button calc__btn-more" href="#">Узнать больше</a>
        </div>
      </section>
    );
  }
}
