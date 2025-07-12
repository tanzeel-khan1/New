// projuct/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow"
      >
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          Contact Information
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Reach out to us for support, inquiries, or business collaboration.
        </p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Mail className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">shopverse.help@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+92 300 1234567</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <h3 className="font-semibold">Head Office</h3>
              <p className="text-gray-600">Main Boulevard, Gulshan-e-Iqbal, Karachi, Pakistan</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-indigo-600 mt-1" />
            <div>
              <h3 className="font-semibold">Support Hours</h3>
              <p className="text-gray-600">Monday - Saturday | 9:00 AM to 9:00 PM</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
