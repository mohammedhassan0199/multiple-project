import axios from "axios";
import { useEffect, useState } from "react";

function DictionaryApp() {
  const [dictionary, setDictionary] = useState("hello");
  const [word, setWord] = useState([]);
  const [error, setError] = useState(null);

  const handleInput = (e) => {
    setDictionary(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    fetchData();
  };

  const fetchData = async () => {
    try {
      setError(null);
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${dictionary}`
      );
      setWord(response.data);
    } catch (error) {
      setError("Failed to fetch data. Please try again.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <form
        onSubmit={handleForm}
        className="flex flex-col justify-center items-center mt-5"
      >
        <input
          onChange={handleInput}
          value={dictionary}
          type="text"
          placeholder="Enter a word"
          className="py-2 text-center border-black border outline-0 text-black"
        />
      </form>

      {error && <h3 className="text-red-500 text-center">{error}</h3>}

      {word.length > 0 ? (
        word.map((words, index) => {
          // Find the first audio URL in the phonetics array
          const audioUrl = words.phonetics?.find((phonetic) => phonetic.audio)?.audio;

          return (
            <div key={index}>
              <h1 className="text-center my-3 text-4xl font-semibold">
                {words.word}
              </h1>
              {audioUrl && (
                <div className="flex my-3 ml-[37%]">
                  <button
                    onClick={() => {
                      const audio = new Audio(audioUrl);
                      audio.play();
                    }}
                    className="bg-[#3b3bb3fd] w-12 h-12 rounded-full flex items-center justify-center"
                  >
                    <i className="fa-solid fa-play text-white"></i>
                  </button>
                </div>
              )}
              {words.meanings?.map((meaning, i) => (
                <div className="ml-[37%]" key={i}>
                  <h2 className="text-2xl font-semibold my-2">
                    {meaning.partOfSpeech}:
                  </h2>
                  <ul>
                    {meaning.definitions?.map((def, j) => (
                      <li className="text-lg my-1 ml-[3%]" key={j}>
                        {def.definition}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          );
        })
      ) : (
        <h3 className="mt-5 text-center">No results found. Try searching for a word.</h3>
      )}
    </>
  );
}

export default DictionaryApp;
