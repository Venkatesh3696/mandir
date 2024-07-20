import React from "react";
import { Link } from "react-router-dom";

const PricingPackage = ({ id, title, price, description, features }) => {
  return (
    <div className="p-4 rounded-lg shadow-md bg-white">
      <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
      <p className="text-2xl font-semibold text-center mb-4 text-red-500">
        ₹{price}
      </p>
      <p className="text-gray-700 text-base mb-4">{description}</p>
      <ul className="list-disc pl-4 mb-6">
        {features.map((feature) => (
          <li key={feature} className="text-gray-700 mb-2">
            {feature}
          </li>
        ))}
      </ul>
      <Link to={`/epuja/cart/${id}`}>
        <button
          type="button"
          className="px-4 py-2 rounded-md bg-green-500 text-white font-bold w-full"
        >
          Select
        </button>
      </Link>
    </div>
  );
};

function PricingPage() {
  const packages = [
    {
      id: 1,
      title: "Individual Puja",
      price: 851,
      description: "Package for 1 Person",
      features: [
        "Pandit ji will call out your name and gotra during the puja",
        "Opt for additional offerings like Vastrā Daan, Anna Daan, Ghee",
        "Upon completion, a video of your puja and offering will be shared with you on your registered Whatsapp number or can be found in your booking history within 3-4 days.",
        "Sacred birth prasad will be sent to your address within 8-10 days",
      ],
    },
    {
      id: 2,
      title: "Paretner Puja",
      price: 1251,
      description: "Package for  People",
      features: [
        "Pandit ji will call out your name and gotra during the puja",
        "Opt for additional offerings like Vastrā Daan, Anna Daan, Ghee",
        "Upon completion, a video of your puja and offering will be shared with you on your registered Whatsapp number or can be found in your booking history within 3-4 days.",
        "Sacred birth prasad will be sent to your address within 8-10 days",
      ],
    },
    {
      id: 3,
      title: "Family + Bhog Puja",
      price: 2001,
      description: "Package for 4 People",
      features: [
        "Pandit ji will call out your name and gotra during the puja",
        "Opt for additional offerings like Vastrā Daan, Anna Daan, Ghee",
        "Upon completion, a video of your puja and offering will be shared with you on your registered Whatsapp number or can be found in your booking history within 3-4 days.",
        "Sacred birth prasad will be sent to your address within 8-10 days",
      ],
    },
    {
      id: 4,
      title: "Joint Family + Bhog + Flower Basket",
      price: 3001,
      description: "Package for 6 people",
      features: [
        "Pandit ji will call out your name and gotra during the puja",
        "Opt for additional offerings like Vastrā Daan, Anna Daan, Ghee",
        "Upon completion, a video of your puja and offering will be shared with you on your registered Whatsapp number or can be found in your booking history within 3-4 days.",
        "Sacred birth prasad will be sent to your address within 8-10 days",
      ],
    },
  ];

  return (
    <div className=" container mx-auto w-full px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-12">
        Sri Mandir Puja Packages
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {packages.map((each) => (
          <PricingPackage key={each.title} {...each} />
        ))}
      </div>
    </div>
  );
}

export default PricingPage;
