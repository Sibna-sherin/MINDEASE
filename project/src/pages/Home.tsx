import React from 'react';
import { ArrowRight, Brain, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Your Journey to
          <span className="bg-gradient-to-r from-green-800 via-green-600 to-green-400 text-transparent bg-clip-text"> Mental Wellness</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Connect with qualified mental health professionals who can help you navigate life's challenges.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
  <Link
    to="/register"
    className="flex items-center justify-center px-3 py-3 border border-transparent text-lg font-bold uppercase tracking-wide rounded-md text-white bg-primary-600 bg-opacity-30 hover:bg-primary-700 hover:bg-opacity-60 md:py-4 md:text-xl md:px-10 transition"
  >
    <span className="bg-gradient-to-r from-green-800 via-green-800 to-green-600 text-transparent bg-clip-text text-2xl font-extrabold tracking-wider">
  GET READY TO EASE YOUR MIND
</span>

<ArrowRight className="ml-3 h-10 w-10 text-white opacity-100" />
  </Link>
</div>

      </div>

      <div className="mt-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Professional Support</h3>
                <p className="mt-5 text-base text-gray-500">
                  Connect with licensed therapists and counselors specialized in various mental health areas.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Personalized Care</h3>
                <p className="mt-5 text-base text-gray-500">
                  Get matched with professionals who understand your specific needs and concerns.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root bg-white rounded-lg px-6 pb-8">
              <div className="-mt-6">
                <div className="inline-flex items-center justify-center p-3 bg-primary-500 rounded-md shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">Easy Booking</h3>
                <p className="mt-5 text-base text-gray-500">
                  Schedule appointments at your convenience with our easy-to-use booking system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;