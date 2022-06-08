import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import refugeesImage from '../../images/refuges_header_image.png';
import ChildrenForm from './ChildrenForm';
import AdultsForm from './AdultsForm';
import questionnaireImage from '../../images/questionnaire_image.png';

export default function Refugees() {
  return (
    <div>
      <Header />
      <section className="refugees">
        <div className="refugees__header">
          <h1 className="refugees__title">REFUGEES</h1>
          <p className="refugees__subtitle">
            We welcome everyone who has found themselves in a new country and wants to continue
            their activities in the world of music. Here you can fill out a form for children and
            adults.
          </p>
          <img className="refugees__image" alt="a man with a guitar" src={refugeesImage} />
        </div>
        <div className="refugees-form">
          <ChildrenForm />
        </div>
        <div className="refugees-form">
          <img className="refugees-form__image" alt="drum" src={questionnaireImage} />
          <AdultsForm />
        </div>
      </section>
      <Footer />
    </div>
  );
}
