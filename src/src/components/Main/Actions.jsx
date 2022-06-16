import React from 'react';
import CardWithLink from '../shared/Card/CardWithLink';
import { actionCards } from '../../helpers/constant/CardsData';

export default function Actions() {
  return (
    <section className="actions">
      {actionCards.map((card) => (
        <CardWithLink
          cardTitle={card.title}
          cardText={card.text}
          link={card.link}
          key={Math.random()}
        />
      ))}
    </section>
  );
}
