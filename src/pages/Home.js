import React from 'react';
import '../styles/home.scss';
import DrawButton from '../components/DrawButton';

const Home = () => {
  return (
    <section className="home__sect">
      <p className="home__tit">What to Watch</p>
      <p className="home__tit">on</p>
      <p className="home__tit">Netflix</p>
      {/* <button className="home__btn">Destiny will choose</button>; */}
      <DrawButton text={'Destiny will choose'} />
    </section>
  );
};

export default Home;
