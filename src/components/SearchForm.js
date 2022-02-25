import React, {useRef, useEffect} from 'react'
import { useGlobalContext } from '../context';

const SearchForm = () => {
  const {handleSubmit, input, setInput} = useGlobalContext();
  const focusRef = useRef("");
  
  useEffect(()=> {
    focusRef.current.focus();
  }, []);

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="musicSearch">search for your favorite artists and songs</label>
          <input
            type="text"
            id='musicSearch'
            name='musicSearch'
            ref={focusRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <div className="btn-container">
          <button className="btn" type='submit'>search</button>
        </div>
      </form>
    </section>
  )
}

export default SearchForm