// Your React Component
import "./backgroundcarosel.css";
import { useState } from "react";

export default function BackgroundSelect({ pageIndex, setIndex }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [backgroundImg, setBackgroundImg] = useState("");
  const [selectedItems, setSelectedItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const imagePaths = [
    '/src/assets/logo1.png',
    '/src/assets/logo2.png',
    '/src/assets/logo3.png',
    '/src/assets/logo4.png',
    '/src/assets/logo5.png',
  ];

  const itemList = ["acoustic", "afrobeat", "alt-rock", "alternative", "ambient", "anime", "black-metal", "bluegrass", "blues", "bossanova", "brazil", "breakbeat", "british", "cantopop", "chicago-house", "children", "chill", "classical", "club", "comedy", "country", "dance", "dancehall", "death-metal", "deep-house", "detroit-techno", "disco", "disney", "drum-and-bass", "dub", "dubstep", "edm", "electro", "electronic", "emo", "folk", "forro", "french", "funk", "garage", "german", "gospel", "goth", "grindcore", "groove", "grunge", "guitar", "happy", "hard-rock", "hardcore", "hardstyle", "heavy-metal", "hip-hop", "holidays", "honky-tonk", "house", "idm", "indian", "indie", "indie-pop", "industrial", "iranian", "j-dance", "j-idol", "j-pop", "j-rock", "jazz", "k-pop", "kids", "latin", "latino", "malay", "mandopop", "metal", "metal-misc", "metalcore", "minimal-techno", "movies", "mpb", "new-age", "new-release", "opera", "pagode", "party", "philippines-opm", "piano", "pop", "pop-film", "post-dubstep", "power-pop", "progressive-house", "psych-rock", "punk", "punk-rock", "r-n-b", "rainy-day", "reggae", "reggaeton", "road-trip", "rock", "rock-n-roll", "rockabilly", "romance", "sad", "salsa", "samba", "sertanejo", "show-tunes", "singer-songwriter", "ska", "sleep", "songwriter", "soul", "soundtracks", "spanish", "study", "summer", "swedish", "synth-pop", "tango", "techno", "trance", "trip-hop", "turkish", "work-out", "world-music"];

  const handleSelect = (item) => {
    if (selectedItems.length < 5 && !selectedItems.includes(item)) {
      setSelectedItems((prevItems) => [...prevItems, item]);
    }
  };

  const handleRemove = (item) => {
    setSelectedItems((prevItems) => prevItems.filter((prevItem) => prevItem !== item));
  };

  const handleSearch = (query) => {
    // Filter items based on the query
    const filteredItems = itemList.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );

    // Update the filtered list in the state
    setFilteredItems(query.trim() === '' ? [] : filteredItems);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? imagePaths.length - 1 : prevIndex - 1));
    declareBackgroundImage(imagePaths[activeIndex]);
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === imagePaths.length - 1 ? 0 : prevIndex + 1));
    declareBackgroundImage(imagePaths[activeIndex]);
  };

  function declareBackgroundImage(image) {
    setBackgroundImg(image);
    console.log(backgroundImg);
  }

  return (
    <div className="grid-container">
      <div className="left-column">
        <div className="carousel-container">
        <p class="white">Find the perfect album cover</p>
          <table>
            <tr>
              <td>
                <button className="prev-button" onClick={prevSlide}>
                  &lt;
                </button>
              </td>
              <td class="wide-image">
                {imagePaths.map((path, index) => (
                  <img
                    key={index}
                    className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
                    src={path}
                    alt={`Image ${index + 1}`}
                  />
                ))}
              </td>
              <td>
                <button className="next-button" onClick={nextSlide}>
                  &gt;
                </button>
              </td>
            </tr>
          </table>

        </div>
      </div>
      <div className="right-column">
        {/* Search bar */}
        <p class="white">Search for your favorite song genres</p>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search items"
            onChange={(e) => handleSearch(e.target.value)}
          />

          {/* Display selected items */}
          {selectedItems.length > 0 && (
            <div className="selected-items">
              <p>Selected Words: {selectedItems.join(', ')}</p>
            </div>
          )}

          {/* Display search results */}
          <div className="suggestions-container">
            {filteredItems.map((item) => (
              <div
                key={item}
                className={`suggestion-item ${selectedItems.includes(item) ? 'selected' : ''}`}
                onClick={() => {
                  if (selectedItems.includes(item)) {
                    handleRemove(item);
                  } else {
                    handleSelect(item);
                  }
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
