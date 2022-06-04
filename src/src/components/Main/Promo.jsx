import { React } from 'react';
import promoImage from '../../images/promo_illustration.png';

export default function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">UNITED BY MUSIC</h1>
      <h2 className="promo__subtitle">Elpida Cultural Intefration Association</h2>
      <p className="promo__text">Integrating people from zones of conflict into a peaceful cultural environment</p>
      <button type="button" className="button">Contact Us</button>
      <img className="promo__image" alt="violin" src={promoImage} />
    </section>
  );
}
