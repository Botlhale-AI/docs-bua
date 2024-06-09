import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Bot Builder',
    link: '/docs/Botbuilder',
    description: (
      <>
        Learn how to build, train, deploy,
        and version your virtual assistant
      </>
    ),
  },
  {
    title: 'Live Bots',
    link: '/docs/Live Bots',
    description: (
      <>
        Learn how to review your deployments and make sense of your virtual assistant’s performance.
      </>
    ),
  },
  {
    title: 'Help Desk',
    link: '/docs/Help Desk',
    description: (
      <>
        Learn how to manage human handoff, and review your live agents’
        performance.
      </>
    ),
  },
  {
    title: 'Settings',
    link: '/docs/Settings',
    description: (
      <>
        Learn how to manage personal and organisational preferences, as well
        as user access to your organisation.
      </>
    ),
  },
//   {
//     title: 'APIs',
//     link: '/docs/API',
//     description: (
//       <>
//         Learn about the APIs which power Bua.
//       </>
//     ),
//   },
];


const ytVideos = [
  {
    title: '1. Getting started',
    videoId: 'O8G7hpGfBmM',
  },
  {
    title: '2. Managing Organisations',
    videoId: 'crwdqdA1oLw',
  },
  {
    title: '3. Create a bot & managing intents',
    videoId: 'aqsn22rQETM',
  },
  {
    title: '4. Managing dialogues',
    videoId: 'jYZUQHF0ElQ',
  },
  {
    title: '5. Training and Testing',
    videoId: 'EPUGUwNJCRs',
  },
  {
    title: '6.1 How to use Entities',
    videoId: 'X7DJs47Ycsc',
  },
  {
    title: '6.2 Creating a bot that responds with an entity',
    videoId: 'wPeY1B1vkIc',
  },
  {
    title: '7. Using buttons',
    videoId: 'K9NnmlxBBl8',
  },
  {
    title: '8. Collection information using forms',
    videoId: 'Xs6P80pWpvE',
  },
  {
    title: '9. Hitting endpoints within the conversations',
    videoId: 'noxVPmrcXfg',
  },
];


function Feature({ title, link, description }) {
  return (
    <>
      <a href={link} rel="noopener noreferrer" className={clsx('col col--3', styles.border, styles.textv, styles.feature)}>
        <div className="text--center padding-horiz--md">
          <Heading as="h3" className={styles.hcolor}>{title}</Heading>
          <p className={styles.textcolor}>{description}</p>
        </div>
      </a>
    </>
  );
}

function YoutubeVideo({ title, videoId }) {
  return (
    <div className={clsx('col col--3', styles.yt)}>
      <div className=" padding-horiz--md">
        <iframe title={title} width="284.16px" height="159.13px" src={`https://www.youtube.com/embed/${videoId}`} allowFullScreen></iframe>
        <Heading as="p">{title}</Heading>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <div className="container">
      <Heading as="h3" className={styles.textheading}>Bua Documentation</Heading>
      <p className={styles.text}>Bua is a low-code platform which allows users to build, train, deploy multilingual virtual assistants that are enabled for voice commands and human handoff. This documentation suite serves as a central resource for users building and managing voice-enabled virtual assistants using the Bua platform.</p>
      <section>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </section>
      
      <Heading as="h2" className={styles.textheading}>Bua Tutorial Videos</Heading>
      <div className="row">
        {ytVideos.map((props, idx) => (
          <YoutubeVideo key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
