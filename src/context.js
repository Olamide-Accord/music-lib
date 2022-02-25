import React from 'react';
import { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [songs, setSongs] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchSongs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://genius.p.rapidapi.com/search?q=${input}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "genius.p.rapidapi.com",
          "x-rapidapi-key": "02c468622emsh3000d3ae252d0d2p13913bjsn1e7dbee1687b"
        }
      });
      const songs = await response.json();
      setIsLoading(false);
      setSongs(songs.response.hits);
      setInput("");
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(input) {
      fetchSongs(); 
    }
  }
  
  return (
    <AppContext.Provider value={{
      handleSubmit,
      isLoading,
      songs, input, setInput
    }}>
      {children}
    </AppContext.Provider>
  )
};

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider}