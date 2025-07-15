import React from 'react';


const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">


        <h1 className="text-4xl font-extrabold text-center mb-6">About Our E-Commerce Platform</h1>

        <p className="text-lg text-center mb-10">
          Welcome to <span className="font-semibold text-indigo-600">ShopVerse</span> – your one-stop destination for premium electronics, fashion, and accessories.
        </p>

        <div className="grid gap-8 md:grid-cols-2">

          <div>

            <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to make online shopping seamless, fast, and enjoyable for everyone. We provide top-notch products from trusted brands, ensuring quality and satisfaction with every purchase.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3 text-indigo-700">What Makes Us Different?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Free & fast delivery across the country</li>
              <li>24/7 customer support</li>
              <li>Hassle-free returns and refunds</li>
              <li>Secure checkout with multiple payment options</li>
            </ul>

          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Meet Our Team</h2>
          <p className="text-gray-700">
          
            We are a passionate group of developers, designers, and entrepreneurs working together to bring you the best online shopping experience.
          </p>

        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-medium text-gray-600 mb-2">Need Help?</h3>
          <p className="text-gray-600">
            Contact us anytime at <a href="mailto:support@shopverse.com" className="text-indigo-600 underline">support@shopverse.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
