import React from 'react';
import Header from './Header';
import Footer from './Footer';
import headerImage from '../images/projects_header_image.png';
import neuchatelImage from '../images/projects/Inagural/Neuchatel_image.png';
// import projectLocationImage from '../images/projects/Inagural/location_image.png';
// import projectLogo from '../images/projects/Inagural/hem_logo.png';

export default function Projects() {
//   const projectInaguralImages = [neuchatelImage, projectLocationImage, projectLogo];
  return (
    <div>
      <Header />
      <section className="projects">
        <div className="projects__header">
          <h1 className="projects__title">PROJECTS</h1>
          <p className="projects__subtitle">
            We provide projects tailored to actively engage both adults and children.
          </p>
          <img className="projects__image" alt="pianist" src={headerImage} />
        </div>
        <div className="project">
          <div className="project__info-container">
            <h2 className="project__title">Inaugural Elpida Festival </h2>
            <p className="project__subtitle">June 24-25, Neuchatel</p>
            <p className="project__text">
              We are pleased to announce that the Inaugural Elpida Festival will take place on
              the 24th and 25th of June in Neuchatel, in collaboration with the Conservatory
              of Neuchatel and the Haute École de Musique Genève-Neuchâtel
            </p>
            <p className="project__text">
              This special project will bring together young Swiss musicians and their Ukrainian
              counterparts in a celebration of music and cultural sharing, guided by professors
              from Switzerland and Ukraine, culminating in a gala concert and cocktail reception
              with delicious Ukrainian specialties.
            </p>
          </div>
          <div className="project__image-container">
            <img className="project__image" alt="project" src={neuchatelImage} />
            <div className="project__counter-container">
              <span className="project__counter project__counter_current">1</span>
              <span className="project__counter">/3</span>
              <button className="project__button" type="button"> &rarr;</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
