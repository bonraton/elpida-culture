import React from 'react';
import Header from './Header';
import Footer from './Footer';
import pianoImage from '../images/piano_image.png';
import CardWithImage from './shared/Card/CardWithImage';
import { teamCardsData } from '../helpers/constant/CardsData';

export default function About() {
  return (
    <div>
      <Header />
      <section className="about">
        <div className="about-container">
          <h1 className="about__title">ABOUT</h1>
          <p className="about__text">
            Our team is made up of three young women who share a passion for helping people
            through music. As professionals in the classical music industry,
            we know first-hand what it is like to find oneself in a new country without
            a network of contacts, with artistic ideas but no means of implementing them.
          </p>
          <p className="about__text">
            We seek to help everyone who has fled their home country due to geopolitical
            conflicts, and who is eager to continue their activity in the music field abroad.
            Be that adults, children or those who want to help but are unsure of
            how to get involved - we extend a warm welcome to all.
          </p>
          <p className="about__text">
            The association has its origins in an initiative project by Nadzeya Kurzava,
            which sought to help refugee children from Ukraine continue their music education
            in Switzerland. The initiative quickly took off, providing over 60 children with
            musical instruments, teachers and practice facilities all over the country.
          </p>
          <p className="about__text">
            Since the association’s inception, we have several projects in development,
            specifically tailored to actively engage both adults and children.
          </p>
        </div>
        <img className="about__image" alt="piano" src={pianoImage} />
      </section>
      <section className="team">
        <h2 className="team__title">Out team</h2>
        <p className="team__subtitle">Three young women who co-funded the association</p>
        <div className="team-container">
          {teamCardsData.map((card) => (
            <CardWithImage
              title={card.title}
              image={card.image}
              subtitle={card.subtitle}
              text={card.text}
              key={Math.random()}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
