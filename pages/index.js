import React from 'react'
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../helpers/api-utils';
import Head from 'next/head'
import NewsletterRegistration from '../components/input/newsletter-registration'

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name='description' content='Find a lot of great events that allow you to evolve' />
      </Head>
      <NewsletterRegistration/>
        <EventList items={props.events} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents 
    },
    revalidate: 1800,
  }
}

export default HomePage;
