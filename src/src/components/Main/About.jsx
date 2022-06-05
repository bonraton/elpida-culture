import React from 'react';
import violinImage from '../../images/violin_image.png';
import Button from '../shared/Button';

export default function About() {
  return (
    <section className="about">
      <div className="about-container">
        <h1 className="about__title">ABOUT US</h1>
        <p className="about__text">
          Our mission is to promote music and culture as an essential part of social development.
          The association&apos;s main aim is to support and integrate people of all ages and
          nationalities coming from zones of conflict into a peaceful cultural environment.
        </p>
        <p className="about__text">
          We provide a platform dedicated to helping people preserve,
          celebrate, and share their cultural heritage while discovering and partaking
          in the richness of local traditions.
        </p>
        <p className="about__text">
          The Elpida Association acts as a nurturing cultural space, a peaceful
          mediator between people who need help and those who can offer it.
        </p>
        <Button btnClass="button button_dark about__button" btnName="Learn more" />
      </div>
      <img className="about__image" alt="violin" src={violinImage} />
    </section>
  );
}
