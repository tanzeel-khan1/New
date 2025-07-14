// projuct/pages/Service.jsx
import React from 'react';
import { motion } from 'framer-motion';
import {
  Truck,
  CreditCard,
  Headphones,
  ShieldCheck,
  PackageCheck,
  Wallet,
  Gift,
  RefreshCcw
} from 'lucide-react'; 
const services = [
  {
    title: "Fast Delivery",
    description: "Get your products delivered quickly and safely.",
    icon: <Truck className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Secure Payment",
    description: "Your payments are encrypted and secure.",
    icon: <CreditCard className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "24/7 Support",
    description: "Our team is ready to assist you anytime.",
    icon: <Headphones className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Trusted Guarantee",
    description: "We stand by the quality of every product we sell.",
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Verified Products",
    description: "Every item is checked before shipping.",
    icon: <PackageCheck className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Easy Wallet Access",
    description: "Store credit and rewards directly in your account.",
    icon: <Wallet className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Special Gifts",
    description: "Get exclusive deals and surprise gifts.",
    icon: <Gift className="w-8 h-8 text-indigo-600" />,
  },
  {
    title: "Hassle-Free Returns",
    description: "Easy returns and replacements guaranteed.",
    icon: <RefreshCcw className="w-8 h-8 text-indigo-600" />,
  },
];

const Service = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-4">Our Services</h1>
        <p className="text-gray-600 text-lg">
          We're committed to making your shopping experience simple, secure, and enjoyable.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow hover:shadow-md transition" >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Service;
