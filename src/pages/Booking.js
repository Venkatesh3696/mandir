import React from "react";

const pandits = [
  { id: 1, name: "pandit 1" },
  { id: 2, name: "pandit 2" },
  { id: 3, name: "pandit 3" },
  { id: 4, name: "pandit 4" },
];

const BookingDetails = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [selectedPandit, setSelectedPandit] = React.useState("");
  const [name, setName] = React.useState("");
  const [gotra, setGotra] = React.useState("");
  const [contactNumber, setContactNumber] = React.useState("");
  const [prasad, setPrasad] = React.useState(false); // boolean to track prasad selection

  const panditOptions = [
    { value: "acharya_ram_murthy", label: "Acharya Ram Murthy" },
    { value: "pundit_vijay_sharma", label: "Pandit Vijay Sharma" },
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePanditChange = (selectedOption) => {
    setSelectedPandit(selectedOption.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic here
    console.log("Form submitted:", {
      selectedDate,
      selectedPandit,
      name,
      gotra,
      contactNumber,
      prasad,
    });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-2xl font-bold text-center mb-8">Book Your Puja</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
        <div className="p-4 rounded-lg shadow-md bg-white">
          <h3 className="text-xl font-bold mb-4">Puja Details</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label htmlFor="date" className="text-gray-700 mb-2">
                Date & Time:
              </label>
              <input
                type="date"
                id="date"
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MMMM d, yyyy h:mm aa"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label htmlFor="pandit" className="text-gray-700 mb-2">
                Select Pandit:
              </label>
              <select
                id="pandit"
                onChange={handlePanditChange}
                options={panditOptions}
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500"
              >
                {pandits.find((option) => option.value === selectedPandit)}
              </select>
            </div>
          </div>
        </div>
        <div className="p-4 rounded-lg shadow-md bg-white">
          <h3 className="text-xl font-bold mb-4">Member Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="name" className="text-gray-700 mb-2 block">
                Full Name:
              </label>
              <input type="text" />
              <label htmlFor="gotra" className="text-gray-700 mb-2 block">
                Gotra:
                <input type="text" />
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingDetails;
