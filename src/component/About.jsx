import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { BiTimeFive } from "react-icons/bi";
const About = () => {
  return (
    <div id="about" className="bg-gray-800 text-white relative p-4 mt-48 ">
      <div className="container mx-auto flex flex-wrap justify-around pt-8">
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="flex mx-auto items-center mt-4 ml-2">
            <IoLocationSharp className="text-white" size={25} fill="white" />
            <div className="text-4xl">Adres</div>
          </div>
          <div className="ml-4">İstasyonaltı Mh., 8025. Sk., 35630 Çiğli/İzmir, Türkiye</div>
    
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="flex  mt-4 ml-2">
            <LuPhone className="text-white mt-1 mr-1" size={25} fill="white" />
            <div className="text-4xl">İletişim</div>
          </div>
          <div className="ml-4 mt-2 pb-6">Telefon (0232) 329 52 33</div>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
          <div className="flex  mt-4 ml-2">
            <BiTimeFive className="text-white mt-2 mr-1" size={25} fill="white" />
            <div className="text-4xl">Çalışma saatleri</div>
          </div>
          <div className="ml-4">
            <div className="flex flex-col mt-2">
              <div className="ml-8">Haftaiçi: 08:00–21:00</div>
              <div className="ml-8">HaftaSonu: 08:00–21:00</div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-10 pb-4">©sedefbasss</p>
    </div>
  );
};

export default About;


/* 

      <iframe
            className="p-2 m-2  "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1473.7500496990308!2d27.06029107109136!3d38.493010217052955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd0a16a10e451%3A0x8818b5936a2d5cc3!2sD%C3%B6nerci%20Ali!5e0!3m2!1str!2str!4v1694429303515!5m2!1str!2str"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>


1*/