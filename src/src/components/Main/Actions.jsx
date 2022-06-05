import React from 'react';
import CardWithLink from '../shared/Card/CardWithLink';

const cardsArray = [
  {
    title: 'Membership',
    text: 'Become a member of the association for the opportunity to participate in our projects, or to create your own and help people within your reach.',
    link: '/membership',
  },
  {
    title: 'Donations',
    text: 'You can participate in buying musical instruments or paying for teaching lessons. You can as well sponsor our projects.',
    link: '/donations',
  },
  {
    title: 'Projects',
    text: 'We provide musical instruments, as well as practice facilities and music teachers. We organise and promote cultural forums, festivals and concerts.',
    link: '/projects',
  },
];

export default function Actions() {
  return (
    <section className="actions">
      {cardsArray.map((card) => (
        <CardWithLink cardTitle={card.title} cardText={card.text} link={card.link} />
      ))}
    </section>
  );
}
