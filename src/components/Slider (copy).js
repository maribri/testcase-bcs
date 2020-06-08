import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
//import { Carousel } from 'react-responsive-carousel';

/*
class DemoCarousel extends Component {
  render() {
    return (
      <Carousel showArrows={false}>
        <div className="slider__item">
          <div className="slider__content">
            <h2 className="section-title slider__title">Валютные операции  по&nbsp;выгодному курсу</h2>
            <p><strong>На московской бирже без посредника</strong></p>
            <ul className="slider__list">
              <li className="slider__list-item">Комиссия от 1 копейки<sup>*</sup></li>
              <li className="slider__list-item">Для заключения сделки достаточно иметь на&nbsp;брокерском счету  лишь часть суммы</li>
              <li className="slider__list-item">Быстрый вывод валюты на ваш расчётный счёт</li>
            </ul>
            <button className="button slider__btn" type="button">Консультация</button>
          </div>
        </div>
        <div className="slider__item">
          <div className="slider__content">
            <h2 className="section-title slider__title">Валютные операции  по&nbsp;выгодному курсу</h2>
            <p><strong>На московской бирже без посредника</strong></p>
            <ul className="slider__list">
              <li className="slider__list-item">Комиссия от 1 копейки<sup>*</sup></li>
              <li className="slider__list-item">Для заключения сделки достаточно иметь на&nbsp;брокерском счету  лишь часть суммы</li>
              <li className="slider__list-item">Быстрый вывод валюты на ваш расчётный счёт</li>
            </ul>
            <button className="button slider__btn" type="button">Консультация</button>
          </div>
        </div>
        <div className="slider__item">
          <div className="slider__content">
            <h2 className="section-title slider__title">Валютные операции  по&nbsp;выгодному курсу</h2>
            <p><strong>На московской бирже без посредника</strong></p>
            <ul className="slider__list">
              <li className="slider__list-item">Комиссия от 1 копейки<sup>*</sup></li>
              <li className="slider__list-item">Для заключения сделки достаточно иметь на&nbsp;брокерском счету  лишь часть суммы</li>
              <li className="slider__list-item">Быстрый вывод валюты на ваш расчётный счёт</li>
            </ul>
            <button className="button slider__btn" type="button">Консультация</button>
          </div>
        </div>
      </Carousel>
    );
  }
};
*/

// Data for carousel
const carouselSlidesData = [
  {
    content:
      "<p><strong>На московской бирже без посредника</strong></p><ul className=\"slider__list\"><li className=\"slider__list-item\">Комиссия от 1 копейки<sup>*</sup></li><li className=\"slider__list-item\">Для заключения сделки достаточно иметь на&nbsp;брокерском счету  лишь часть суммы</li><li className=\"slider__list-item\">Быстрый вывод валюты на ваш расчётный счёт</li></ul>",
    title: "Валютные операции  по&nbsp;выгодному курсу"
  }, {
    content:
      "<p><strong>На московской бирже без посредника</strong></p><ul className=\"slider__list\"><li className=\"slider__list-item\">Комиссия от 1 копейки<sup>*</sup></li><li className=\"slider__list-item\">Для заключения сделки достаточно иметь на&nbsp;брокерском счету  лишь часть суммы</li><li className=\"slider__list-item\">Быстрый вывод валюты на ваш расчётный счёт</li></ul>",
    title: "Snapchat"
  }
];

// Component for carousel indicator
class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <a
          className={
            this.props.index == this.props.activeIndex
              ? "carousel__indicator carousel__indicator--active"
              : "carousel__indicator"
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

// Component for slide
class CarouselSlide extends Component {
  render() {
    //console.log(JSON.parse(this.props.slide.content));
    return (
      <li
        className={
          this.props.index == this.props.activeIndex
            ? "carousel__slide carousel__slide--active"
            : "carousel__slide"
        }
      >
        <p>{this.props.slide.title}</p>
        <p>{this.props.slide.content}</p>
      </li>
    );
  }
}

// Carousel component
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    //this.goToPrevSlide = this.goToPrevSlide.bind(this);
    //this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0
    };
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  /*goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }*/

  render() {
    return (
      <div className="carousel">

        <ul className="carousel__slides">
          {this.props.slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              slide={slide}
            />
          )}
        </ul>

        <ul className="carousel__indicators">
          {this.props.slides.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={this.state.activeIndex}
              onClick={e => this.goToSlide(index)}
            />
          )}
        </ul>
      </div>
    );
  }
}

function Slider() {
  return (
    <React.Fragment>
      <Carousel slides={carouselSlidesData} />
      <section className="slider slider--slide1">
        <div className="content-wrapper">
          <div className="slider__item">
            <div className="slider__content">
              <h2 className="section-title slider__title">Валютные операции  по&nbsp;выгодному курсу</h2>
              <p><strong>На московской бирже без посредника</strong></p>
              <ul className="slider__list">
                <li className="slider__list-item">Комиссия от 1 копейки<sup>*</sup></li>
                <li className="slider__list-item">Для заключения сделки достаточно иметь на&nbsp;брокерском счету  лишь часть суммы</li>
                <li className="slider__list-item">Быстрый вывод валюты на ваш расчётный счёт</li>
              </ul>
              <a className="button slider__btn" href="#">Консультация</a>
            </div>
          </div>
          <div className="slider__nav">
            <ul className="slider__dots">
              <li className="active">&bull;</li>
              <li>&bull;</li>
              <li>&bull;</li>
              <li>&bull;</li>
              <li>&bull;</li>
              <li>&bull;</li>
            </ul>
            <ul className="slider__tabs">
              <li className="active">Валютные операции  по&nbsp;выгодному курсу</li>
              <li>Однодневные инструменты МосБиржи</li>
              <li>Инвестиции в&nbsp;еврооблигации и&nbsp;ETF</li>
              <li>Брокерское обслуживание</li>
              <li>Привлечение финансирования</li>
              <li>Снижение валютных и&nbsp;рыночных рисков</li>
            </ul>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Slider;
