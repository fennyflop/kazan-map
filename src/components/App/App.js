import { useEffect, useState, useRef } from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import Place from '../Place/Place';
import PlaceInfo from '../PlaceInfo/PlaceInfo';

const App = () => {

  const [selectedId, setSelectedId] = useState(0);
  const [isPlaceSelected, setIsPlaceSelected] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState({});

  const mapRef = useRef(null);

  const places = [
    {
      placeId: 1,
      placeCoordinates: [55.772203, 48.659044],
    }
  ];
  
  const slides = [
    {
      speech: "Привет! Я твой буду твоим путеводителем! Сегодня я покажу тебе много мест, которые я посетил. Надеюсь тебе понравится 😃"
    }, 
    {
      speech: "я посетил свияжск",
      coordinates: [55.772203, 48.659044],
      date: "12/06",
      images: [
        "https://media.discordapp.net/attachments/831925379253010497/831960799421399110/image0.jpg?width=1211&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661325574166/image0.jpg?width=682&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661664657418/image1.jpg?width=682&height=910",
      ]
    },
    {
      speech: "Вот и конец! Надеюсь тебе понравилось приключение!"
    }
  ]

  function selectPlace(name, date, info, coordinates, id) {
    setSelectedPlace({
      placeName: name,
      placeDate: date,
      placeInfo: info,
      placeCoordinates: coordinates,
    });
    setSelectedId(id);
    setIsPlaceSelected(true);
  }

  function moveToPlace(coordinates) {
    if (mapRef.current && coordinates) {
      mapRef.current.panTo(coordinates)
          .then(() => {
              setIsPlaceSelected(true);
          })
  }
  }

  function togglePlace () {
    setIsPlaceSelected(!isPlaceSelected);
  }

  function nextSlide() {
    setSelectedId(selectedId + 1);
  }
  function backSlide() {
    setSelectedId(selectedId - 1);
  }

  useEffect(() => {
    moveToPlace(slides[selectedId].coordinates);
    // console.log(slides[selectedId].coordinates)
  }, [selectedId])

  return (
    <>
    <main className="main">
    <PlaceInfo isPlaceToggled={isPlaceSelected} place={selectedPlace} togglePlace={togglePlace} currentId={selectedId} slides={slides} nextSlide={nextSlide} backSlide={backSlide} />
    <YMaps>
      <Map
      instanceRef={ref => {
        if (ref) mapRef.current = ref;
    }} 
        defaultState={{ center: [55.75, 37.57], zoom: 9 }} style={{
        width: "100%",
        height: "100vh",
      }}>
        {
          places.map(({placeName, placeDate, placeInfo, placeCoordinates, placeId}, i) => {
            return <Place name={placeName} date={placeDate} info={placeInfo} coordinates={placeCoordinates} id={placeId} moveToPlace={moveToPlace} selectPlace={selectPlace} key={i} />
          })
        }
      </Map>
  </YMaps>
    </main>
  </>
  );
}

export default App;