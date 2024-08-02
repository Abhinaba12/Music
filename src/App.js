import { useState, useEffect } from "react";
// import Categories from "./components/Categories";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Nach Meri Rani",
      artist: "Song by Guru Randhawa",
      img_src: "./images/nach-meri-rani.jpg",
      src: "./music/Naach Meri Rani.mp3",
    },
    {
      title: "Care Ni Karda",
      artist: "Song by Yo Yo Honey Singh",
      img_src: "./images/care-ni-karda.jpg",
      src: "./music/Care Ni Karda.mp3",
    },
    {
      title: "Him & I",
      artist: "Song by G-Eazy & Halsey",
      img_src: "./images/Him & I.jpeg",
      src: "./music/Him & I.mp3",
    },
    {
      title: "Tango Del Fuego",
      artist: "Song by Parov Stelar",
      img_src: "./images/ParovStelarGeorgiaGibbs-TangoDelFuego.jpg",
      src: "./music/ParovStelarGeorgiaGibbs-TangoDelFuego.mp3",
    },
    {
      title: "Take You Dancing",
      artist: "Song by Jason Derulo",
      img_src: "./images/JasonDerulo-TakeYouDancing.jpg",
      src: "./music/JasonDerulo-TakeYouDancing.mp3",
    },
    {
      title: "Daisy",
      artist: "Song by Ashnikko",
      img_src: "./images/Ashnikko-Daisy.jpg",
      src: "./music/Ashnikko-Daisy.mp3",
    },
    {
      title: "Dolly Song",
      artist: "Song by Partz Grimbad",
      img_src: "./images/PatzGrimbard-DollySong.jpg",
      src: "./music/PatzGrimbard-DollySong.mp3",
    },
    {
      title: "co2",
      artist: "Song by Prateek Kuhad",
      img_src: "./images/co2.jpeg",
      src: "./music/co2.mp3",
    },
    {
      title: "Espresso",
      artist: "Song by Sabrina Carpenter",
      img_src: "./images/espresso.jpeg",
      src: "./music/espresso.mp3",
    },
    {
      title: "Eastside",
      artist: "Song by Benny Blanco, Halsey, and Khalid",
      img_src: "./images/Eastside.jpeg",
      src: "./music/eastside.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
