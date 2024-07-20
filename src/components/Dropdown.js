import React from "react";

const DropdownMenu = ({ isOpen }) => {
  return (
    <div className="w-64 absolute right-4 top-20  h-[400px]">
      {isOpen && (
        <div className="z-10 card p-2 flex flex-col w-full h-full justify-between">
          <p>Hello, Sri Mandir Bhakt </p>
          <p>Welcome to Sri Mandir Puja Seva</p>
          <hr />
          <a href="#profile">My profile</a>
          <a href="/epuja">My Puja Bookings</a>
          <a href="#ramotsav-bookings">My Ramotsav Bookings</a>
          <a href="#book-puja">Book a Puja</a>
          <hr />
          <div className="contact-info w-full flex flex-col justify-center">
            <div className="w-full">
              <p>Help & support for Puja Booking</p>
              <a href="tel:080-711-74417">
                <p>080-711-74417</p>
              </a>
              <p className="text-xs">You can call us from 10:30 AM - 7:30 PM</p>
            </div>
            <div className="w-full">
              <a className="w-1/2" href="mailto:support@example.com">
                Email us
              </a>
              <a className="w-1/2" href="https://wa.me/7095982467">
                Whatsapp us
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
