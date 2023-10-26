import * as React from "react";
import Layout from "../components/layout";

export default function AboutPage() {
  return (
    <Layout>
      <h1>About</h1>
      <h2>"</h2>
      <blockquote>
        <p>
          This alphabet soup of accessibility is not a collection of personas.
          These are friends and family I love. Sometimes I’m describing a group.
          (One can only describe chemo brain so many times.) Some people are
          more than one letter. (Yay genetic lottery.) Some represent stages
          people were in 10 years ago and some stages we know they will hit — we
          just don’t know when.
        </p>
        <p>
          Robin Christopherson (@usa2day) points out that many of us are only
          temporarily able-bodied. I’ve seen this to be true. At any given
          moment, we could be juggling multiple tasks that take an eye or an ear
          or a finger away. We could be exhausted or sick or stressed. Our need
          for an accessible web might last a minute, an hour, a day, or the rest
          of our lives. We never know.
        </p>
        <p>We never know who. We never know when.</p>
        <p>
          We just know that when it’s our turn to be one of the twenty-six, we
          will want the web to work. So today, we need to make simple, readable,
          effective content. Today, we make sure all our auditory content has a
          transcript, or makes sense without one. Today, we need to make our
          shopping carts and logins and checkouts friendly to everyone. Today,
          we need to design with one thought to the color blind, one thought to
          the photosensitive epileptic, and one thought to those who will
          magnify our screens. Today we need to write semantic HTML and make
          pages that can be navigated by voice, touch, mouse, keyboard, and
          stylus.
        </p>
        <p>Tomorrow, it’s a new alphabet.</p>
        <footer>
          —Anne Gibson, <cite>An Alphabet of Accessibility Issues</cite> (31 Jul
          2014)
        </footer>
      </blockquote>
    </Layout>
  );
}
