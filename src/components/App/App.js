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
      speech: "Здесь будут спикер. Я выбрал снежного барса, так как он тоже изображал Казань"
    }, 
    {
      speech: "Тут можно составлять 'слайды' по разным местам, которые мы посетили. Карта автоматически будет перекидать нас на выбранную точку.",
      coordinates: [55.772203, 48.659044],
      date: "12/06",
    },
    {
      speech: "К таковым слайдам можно прикреплять фотографии (даня ниже), и дату посещения.",
      coordinates: [56.631600, 47.886178],
      date: "12/06",
      images: [
        "https://media.discordapp.net/attachments/831925379253010497/831960799421399110/image0.jpg?width=1211&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661325574166/image0.jpg?width=682&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661664657418/image1.jpg?width=682&height=910",
      ]
    },
    {
      speech: "Думаю этот веб-сайт можно будет распространять по QR кодам. Так наша презентация будет интереснее с интерактивом.",
      coordinates: [55.821496, 49.160784],
      date: "12/06",
    },
    {
      speech: "Буду ждать идей и советов насчёт веб-сайта. Также очень жду сообщений об разных местах. Их добавлять долго, желательно получить всё до вечера четверга.",
      coordinates: [55.810584, 49.122956],
      date: "12/06",
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