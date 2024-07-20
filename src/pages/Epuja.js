import React from "react";
import PujaCard from "../components/PujaCard";
import Header from "../components/Header";
// import SimpleSlider from "../components/Carousel ";

// const carouselImages = [
//   {
//     src: "https://unsplash.com/photos/a-laptop-with-a-broken-keyboard-and-a-broken-camera-z1YJCZ-yV2Q",
//   },
//   {
//     src: "https://unsplash.com/photos/a-laptop-with-a-broken-keyboard-and-a-broken-camera-z1YJCZ-yV2Q",
//   },
//   {
//     src: "https://unsplash.com/photos/a-laptop-with-a-broken-keyboard-and-a-broken-camera-z1YJCZ-yV2Q",
//   },
// ];

const pujas = [
  {
    id: 1,
    imageUrl: "shanipuja.webp",
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    description: "Shani Saade Saati Peeda Shani Mahapuja and Til Tel Abhisek",
    whatFor: "For Prevention of Misfortunes and Adversities",
    temple: "Shree Shanidev Temple, Shani Shingnapur, Maharastra",
    venue:
      "20 july, Saturday, Ashada Shukla Chatrudasi Shanidev Temple, Shani Shingnapur, Maharastra",
  },
  {
    id: 2,
    imageUrl: "bagalamukhi.webp",
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    description: "Shani Saade Saati Peeda Shani Mahapuja and Til Tel Abhisek",
    whatFor: "For Prevention of Misfortunes and Adversities",
    temple: "Shree Shanidev Temple, Shani Shingnapur, Maharastra",
    venue:
      "20 july, Saturday, Ashada Shukla Chatrudasi Shanidev Temple, Shani Shingnapur, Maharastra",
  },
  {
    id: 3,
    imageUrl: "divyaMahankali.webp",
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    description: "Shani Saade Saati Peeda Shani Mahapuja and Til Tel Abhisek",
    whatFor: "For Prevention of Misfortunes and Adversities",
    temple: "Shree Shanidev Temple, Shani Shingnapur, Maharastra",
    venue:
      "20 july, Saturday, Ashada Shukla Chatrudasi Shanidev Temple, Shani Shingnapur, Maharastra",
  },
  {
    id: 4,
    imageUrl: "guru_purnima.webp",
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    description: "Shani Saade Saati Peeda Shani Mahapuja and Til Tel Abhisek",
    whatFor: "For Prevention of Misfortunes and Adversities",
    temple: "Shree Shanidev Temple, Shani Shingnapur, Maharastra",
    venue:
      "20 july, Saturday, Ashada Shukla Chatrudasi Shanidev Temple, Shani Shingnapur, Maharastra",
  },
  {
    id: 5,
    imageUrl: "divyaMahankali.webp",
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    description: "Shani Saade Saati Peeda Shani Mahapuja and Til Tel Abhisek",
    whatFor: "For Prevention of Misfortunes and Adversities",
    temple: "Shree Shanidev Temple, Shani Shingnapur, Maharastra",
    venue:
      "20 july, Saturday, Ashada Shukla Chatrudasi Shanidev Temple, Shani Shingnapur, Maharastra",
  },
  {
    id: 6,
    imageUrl: "divyaMahankali.webp",
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    description: "Shani Saade Saati Peeda Shani Mahapuja and Til Tel Abhisek",
    whatFor: "For Prevention of Misfortunes and Adversities",
    temple: "Shree Shanidev Temple, Shani Shingnapur, Maharastra",
    venue:
      "20 july, Saturday, Ashada Shukla Chatrudasi Shanidev Temple, Shani Shingnapur, Maharastra",
  },
  {
    id: 7,
    imageUrl: "divyaMahankali.webp",
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    description: "Shani Saade Saati Peeda Shani Mahapuja and Til Tel Abhisek",
    whatFor: "For Prevention of Misfortunes and Adversities",
    temple: "Shree Shanidev Temple, Shani Shingnapur, Maharastra",
    venue:
      "20 july, Saturday, Ashada Shukla Chatrudasi Shanidev Temple, Shani Shingnapur, Maharastra",
  },
  {
    id: 8,
    imageUrl: "divyaMahankali.webp",
    name: "SATURDAY SHANI SHINGNAPUR SPECIAL",
    description: "Shani Saade Saati Peeda Shani Mahapuja and Til Tel Abhisek",
    whatFor: "For Prevention of Misfortunes and Adversities",
    temple: "Shree Shanidev Temple, Shani Shingnapur, Maharastra",
    venue:
      "20 july, Saturday, Ashada Shukla Chatrudasi Shanidev Temple, Shani Shingnapur, Maharastra",
  },
];

const Epuja = () => {
  return (
    <div className="px-16 py-6">
      <Header />
      <h1>
        Perform your Puja as per vedic rituals at Famous Hindu Temples in india
        with Sri Mandir
      </h1>
      <h1>Upcoming Pujas on Sri Mandir.</h1>
      <p>
        Book online puja with Sri Mandir in more than 500+ temples across India.
        Receive video of the puja along with the Prasad and receive blessings
        from the divine for prosperity and well-being of you and your family
      </p>
      <div className="flex flex-wrap justify-between after:flex-auto ">
        {pujas.map((puja) => (
          <PujaCard puja={puja} />
        ))}
      </div>
    </div>
  );
};

export default Epuja;
