import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { loading, portfolioData } = useSelector((state) => state.root);

  const user = portfolioData.data.contacts[0];

  const { name, gender, email, mobile, age, address } = user;

  return (
    <div>
      <SectionTitle title="Contact" />
      <div className="flex flex-col text-white p-4 gap-2">
        <div><span className="text-blue-400 font-semibold">Name:</span> <span className="text-yellow-300">{name}</span></div>
        <div><span className="text-blue-400 font-semibold">Gender:</span> <span className="text-yellow-300">{gender}</span></div>
        <div><span className="text-blue-400 font-semibold">Email:</span> <span className="text-yellow-300">{email}</span></div>
        <div><span className="text-blue-400 font-semibold">Mobile:</span> <span className="text-yellow-300">{mobile}</span></div>
        <div><span className="text-blue-400 font-semibold">Age:</span> <span className="text-yellow-300">{age}</span></div>
        <div><span className="text-blue-400 font-semibold">Address:</span> <span className="text-yellow-300">{address}</span></div>
      </div>
    </div>
  );
}

export default Contact;
