import React from 'react';
import Loading from "../components/Loading"
import SearchForm from "../components/SearchForm";
import Songs from "../components/Songs"
import { useGlobalContext } from '../context';

const Home = () => {
  const {isLoading, songs} = useGlobalContext();
  if(isLoading) {
    return (
      <Loading />
    )
  }
  return (
    <>
      <SearchForm />
      <section className='section'>
        <Songs songs={songs} />
      </section>
    </>
    )
}

export default Home;