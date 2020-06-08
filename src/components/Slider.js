import React from 'react';

function Slider() {
  return (
    <React.Fragment>
      <section className="slider slider--active-1">
        <div className="content-wrapper">
          <div className="slider__item slider__item--slide1 slider__item--active">
            <div className="slider__content">
              <h2 className="section-title slider__title">Валютные операции  по&nbsp;выгодному курсу</h2>
              <p><strong>На московской бирже без посредника</strong></p>
              <ul className="slider__list">
                <li className="slider__list-item"><strong>Комиссия от 1 копейки<sup>*</sup></strong></li>
                <li className="slider__list-item">Для заключения сделки достаточно иметь на&nbsp;брокерском счету  лишь часть суммы</li>
                <li className="slider__list-item">Быстрый вывод валюты на ваш расчётный счёт</li>
              </ul>
              <a className="button slider__btn" href="#">Консультация</a>
            </div>
          </div>
          <div className="slider__item slider__item--slide2">
            <div className="slider__content">
              <h2 className="section-title slider__title">Вложение свободных средств для  юридических лиц</h2>
              <p><strong>Зарабатывайте с помощью однодневных  инструментов московской биржи:</strong></p>
              <ul className="slider__list">
                <li className="slider__list-item">Срок от 1 дня</li>
                <li className="slider__list-item">Конкурентные ставки</li>
                <li className="slider__list-item">Надёжный контрагент  <br />НКО “Национальный Клиринговый Центр” АО</li>
              </ul>
              <a className="button slider__btn" href="#">Консультация</a>
            </div>
          </div>
          <div className="slider__nav-container">
            <ul className="slider__dots">
              <li className="slider__dots-item slider__dots-item--active" />
              <li className="slider__dots-item" />
              <li className="slider__dots-item" />
              <li className="slider__dots-item" />
              <li className="slider__dots-item" />
              <li className="slider__dots-item" />
            </ul>
            <ul className="slider__tabs">
              <li className="slider__tabs-item slider__tabs-item--active">Валютные операции  по&nbsp;выгодному курсу</li>
              <li className="slider__tabs-item">Однодневные инструменты МосБиржи</li>
              <li className="slider__tabs-item">Инвестиции в&nbsp;еврооблигации и&nbsp;ETF</li>
              <li className="slider__tabs-item">Брокерское обслуживание</li>
              <li className="slider__tabs-item">Привлечение финансирования</li>
              <li className="slider__tabs-item">Снижение валютных и&nbsp;рыночных рисков</li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Slider;
