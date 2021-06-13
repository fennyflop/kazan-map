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
      speech: "Today when I walked into my economics class I saw something I dread every time I close my eyes. Someone had brought their new gaming laptop to class. The Forklift he used to bring it was still running idle at the back. I started sweating as I sat down and gazed over at the 700lb beast that was his laptop. He had already reinforced his desk with steel support beams and was in the process of finding an outlet for a power cable thicker than Amy Schumer's thigh. I start shaking. I keep telling myself I'm going to be alright and that there's nothing to worry about. He somehow finds a fucking outlet. Tears are running down my cheeks as I send my last texts to my family saying I love them. The teacher starts the lecture, and the student turns his laptop on. The colored lights on his RGB Backlit keyboard flare to life like a nuclear flash, and a deep humming fills my ears and shakes my very soul. The entire city power grid goes dark. The classroom begins to shake as the massive fans begin to spin. In mere seconds my world has gone from vibrant life, to a dark, earth shattering void where my body is getting torn apart by the 150mph gale force winds and the 500 decibel groan of the cooling fans. As my body finally surrenders, I weep, as my school and my city go under. I fucking hate gaming laptops.",
      coordinates: [55.772203, 48.659044],
      date: "12/06",
      images: [
        "https://media.discordapp.net/attachments/831925379253010497/831960799421399110/image0.jpg?width=1211&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661325574166/image0.jpg?width=682&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661664657418/image1.jpg?width=682&height=910",
      ]
    },
    {
      speech: "Today when I walked into my economics class I saw something I dread every time I close my eyes. Someone had brought their new gaming laptop to class. The Forklift he used to bring it was still running idle at the back. I started sweating as I sat down and gazed over at the 700lb beast that was his laptop. He had already reinforced his desk with steel support beams and was in the process of finding an outlet for a power cable thicker than Amy Schumer's thigh. I start shaking. I keep telling myself I'm going to be alright and that there's nothing to worry about. He somehow finds a fucking outlet. Tears are running down my cheeks as I send my last texts to my family saying I love them. The teacher starts the lecture, and the student turns his laptop on. The colored lights on his RGB Backlit keyboard flare to life like a nuclear flash, and a deep humming fills my ears and shakes my very soul. The entire city power grid goes dark. The classroom begins to shake as the massive fans begin to spin. In mere seconds my world has gone from vibrant life, to a dark, earth shattering void where my body is getting torn apart by the 150mph gale force winds and the 500 decibel groan of the cooling fans. As my body finally surrenders, I weep, as my school and my city go under. I fucking hate gaming laptops.",
      coordinates: [55.772203, 48.659044],
      date: "12/06",
      images: [
        "https://media.discordapp.net/attachments/831925379253010497/831960799421399110/image0.jpg?width=1211&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661325574166/image0.jpg?width=682&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661664657418/image1.jpg?width=682&height=910",
      ]
    },
    {
      speech: "Today when I walked into my economics class I saw something I dread every time I close my eyes. Someone had brought their new gaming laptop to class. The Forklift he used to bring it was still running idle at the back. I started sweating as I sat down and gazed over at the 700lb beast that was his laptop. He had already reinforced his desk with steel support beams and was in the process of finding an outlet for a power cable thicker than Amy Schumer's thigh. I start shaking. I keep telling myself I'm going to be alright and that there's nothing to worry about. He somehow finds a fucking outlet. Tears are running down my cheeks as I send my last texts to my family saying I love them. The teacher starts the lecture, and the student turns his laptop on. The colored lights on his RGB Backlit keyboard flare to life like a nuclear flash, and a deep humming fills my ears and shakes my very soul. The entire city power grid goes dark. The classroom begins to shake as the massive fans begin to spin. In mere seconds my world has gone from vibrant life, to a dark, earth shattering void where my body is getting torn apart by the 150mph gale force winds and the 500 decibel groan of the cooling fans. As my body finally surrenders, I weep, as my school and my city go under. I fucking hate gaming laptops.",
      coordinates: [55.772203, 48.659044],
      date: "12/06",
      images: [
        "https://media.discordapp.net/attachments/831925379253010497/831960799421399110/image0.jpg?width=1211&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661325574166/image0.jpg?width=682&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661664657418/image1.jpg?width=682&height=910",
      ]
    },
    {
      speech: "Today when I walked into my economics class I saw something I dread every time I close my eyes. Someone had brought their new gaming laptop to class. The Forklift he used to bring it was still running idle at the back. I started sweating as I sat down and gazed over at the 700lb beast that was his laptop. He had already reinforced his desk with steel support beams and was in the process of finding an outlet for a power cable thicker than Amy Schumer's thigh. I start shaking. I keep telling myself I'm going to be alright and that there's nothing to worry about. He somehow finds a fucking outlet. Tears are running down my cheeks as I send my last texts to my family saying I love them. The teacher starts the lecture, and the student turns his laptop on. The colored lights on his RGB Backlit keyboard flare to life like a nuclear flash, and a deep humming fills my ears and shakes my very soul. The entire city power grid goes dark. The classroom begins to shake as the massive fans begin to spin. In mere seconds my world has gone from vibrant life, to a dark, earth shattering void where my body is getting torn apart by the 150mph gale force winds and the 500 decibel groan of the cooling fans. As my body finally surrenders, I weep, as my school and my city go under. I fucking hate gaming laptops.",
      coordinates: [55.772203, 48.659044],
      date: "12/06",
      images: [
        "https://media.discordapp.net/attachments/831925379253010497/831960799421399110/image0.jpg?width=1211&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661325574166/image0.jpg?width=682&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661664657418/image1.jpg?width=682&height=910",
      ]
    },
    {
      speech: "Today when I walked into my economics class I saw something I dread every time I close my eyes. Someone had brought their new gaming laptop to class. The Forklift he used to bring it was still running idle at the back. I started sweating as I sat down and gazed over at the 700lb beast that was his laptop. He had already reinforced his desk with steel support beams and was in the process of finding an outlet for a power cable thicker than Amy Schumer's thigh. I start shaking. I keep telling myself I'm going to be alright and that there's nothing to worry about. He somehow finds a fucking outlet. Tears are running down my cheeks as I send my last texts to my family saying I love them. The teacher starts the lecture, and the student turns his laptop on. The colored lights on his RGB Backlit keyboard flare to life like a nuclear flash, and a deep humming fills my ears and shakes my very soul. The entire city power grid goes dark. The classroom begins to shake as the massive fans begin to spin. In mere seconds my world has gone from vibrant life, to a dark, earth shattering void where my body is getting torn apart by the 150mph gale force winds and the 500 decibel groan of the cooling fans. As my body finally surrenders, I weep, as my school and my city go under. I fucking hate gaming laptops.",
      coordinates: [55.772203, 48.659044],
      date: "12/06",
      images: [
        "https://media.discordapp.net/attachments/831925379253010497/831960799421399110/image0.jpg?width=1211&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661325574166/image0.jpg?width=682&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661664657418/image1.jpg?width=682&height=910",
      ]
    },
    {
      speech: "Today when I walked into my economics class I saw something I dread every time I close my eyes. Someone had brought their new gaming laptop to class. The Forklift he used to bring it was still running idle at the back. I started sweating as I sat down and gazed over at the 700lb beast that was his laptop. He had already reinforced his desk with steel support beams and was in the process of finding an outlet for a power cable thicker than Amy Schumer's thigh. I start shaking. I keep telling myself I'm going to be alright and that there's nothing to worry about. He somehow finds a fucking outlet. Tears are running down my cheeks as I send my last texts to my family saying I love them. The teacher starts the lecture, and the student turns his laptop on. The colored lights on his RGB Backlit keyboard flare to life like a nuclear flash, and a deep humming fills my ears and shakes my very soul. The entire city power grid goes dark. The classroom begins to shake as the massive fans begin to spin. In mere seconds my world has gone from vibrant life, to a dark, earth shattering void where my body is getting torn apart by the 150mph gale force winds and the 500 decibel groan of the cooling fans. As my body finally surrenders, I weep, as my school and my city go under. I fucking hate gaming laptops.",
      coordinates: [55.772203, 48.659044],
      date: "12/06",
      images: [
        "https://media.discordapp.net/attachments/831925379253010497/831960799421399110/image0.jpg?width=1211&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661325574166/image0.jpg?width=682&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661664657418/image1.jpg?width=682&height=910",
      ]
    },
    {
      speech: "Today when I walked into my economics class I saw something I dread every time I close my eyes. Someone had brought their new gaming laptop to class. The Forklift he used to bring it was still running idle at the back. I started sweating as I sat down and gazed over at the 700lb beast that was his laptop. He had already reinforced his desk with steel support beams and was in the process of finding an outlet for a power cable thicker than Amy Schumer's thigh. I start shaking. I keep telling myself I'm going to be alright and that there's nothing to worry about. He somehow finds a fucking outlet. Tears are running down my cheeks as I send my last texts to my family saying I love them. The teacher starts the lecture, and the student turns his laptop on. The colored lights on his RGB Backlit keyboard flare to life like a nuclear flash, and a deep humming fills my ears and shakes my very soul. The entire city power grid goes dark. The classroom begins to shake as the massive fans begin to spin. In mere seconds my world has gone from vibrant life, to a dark, earth shattering void where my body is getting torn apart by the 150mph gale force winds and the 500 decibel groan of the cooling fans. As my body finally surrenders, I weep, as my school and my city go under. I fucking hate gaming laptops.",
      coordinates: [55.772203, 48.659044],
      date: "12/06",
      images: [
        "https://media.discordapp.net/attachments/831925379253010497/831960799421399110/image0.jpg?width=1211&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661325574166/image0.jpg?width=682&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661664657418/image1.jpg?width=682&height=910",
      ]
    },
    {
      speech: "Today when I walked into my economics class I saw something I dread every time I close my eyes. Someone had brought their new gaming laptop to class. The Forklift he used to bring it was still running idle at the back. I started sweating as I sat down and gazed over at the 700lb beast that was his laptop. He had already reinforced his desk with steel support beams and was in the process of finding an outlet for a power cable thicker than Amy Schumer's thigh. I start shaking. I keep telling myself I'm going to be alright and that there's nothing to worry about. He somehow finds a fucking outlet. Tears are running down my cheeks as I send my last texts to my family saying I love them. The teacher starts the lecture, and the student turns his laptop on. The colored lights on his RGB Backlit keyboard flare to life like a nuclear flash, and a deep humming fills my ears and shakes my very soul. The entire city power grid goes dark. The classroom begins to shake as the massive fans begin to spin. In mere seconds my world has gone from vibrant life, to a dark, earth shattering void where my body is getting torn apart by the 150mph gale force winds and the 500 decibel groan of the cooling fans. As my body finally surrenders, I weep, as my school and my city go under. I fucking hate gaming laptops.",
      coordinates: [55.772203, 48.659044],
      date: "12/06",
      images: [
        "https://media.discordapp.net/attachments/831925379253010497/831960799421399110/image0.jpg?width=1211&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661325574166/image0.jpg?width=682&height=910",
        "https://media.discordapp.net/attachments/831925379253010497/831961661664657418/image1.jpg?width=682&height=910",
      ]
    },
    {
      speech: "Today when I walked into my economics class I saw something I dread every time I close my eyes. Someone had brought their new gaming laptop to class. The Forklift he used to bring it was still running idle at the back. I started sweating as I sat down and gazed over at the 700lb beast that was his laptop. He had already reinforced his desk with steel support beams and was in the process of finding an outlet for a power cable thicker than Amy Schumer's thigh. I start shaking. I keep telling myself I'm going to be alright and that there's nothing to worry about. He somehow finds a fucking outlet. Tears are running down my cheeks as I send my last texts to my family saying I love them. The teacher starts the lecture, and the student turns his laptop on. The colored lights on his RGB Backlit keyboard flare to life like a nuclear flash, and a deep humming fills my ears and shakes my very soul. The entire city power grid goes dark. The classroom begins to shake as the massive fans begin to spin. In mere seconds my world has gone from vibrant life, to a dark, earth shattering void where my body is getting torn apart by the 150mph gale force winds and the 500 decibel groan of the cooling fans. As my body finally surrenders, I weep, as my school and my city go under. I fucking hate gaming laptops.",
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