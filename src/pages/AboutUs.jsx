import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';
import { globalContext } from '../context/globalContext';

const clubInfo = {
  story: `CODE VISION is a dynamic coding club dedicated to fostering technical excellence and leadership skills among students. We believe in learning by doing and creating opportunities for growth.
This dynamic coding club was founded in 2016 by a group of passionate individuals: Rakesh Singh, Aadarsh Choudhary, Shuvajit Dey, Anurag Anand, and Hari Om. United by a shared vision to foster a vibrant community of coders and tech enthusiasts, we set out to create a space where creativity, collaboration, and learning thrive.
At Code Vision, we believe that coding is not just about writing lines of code; it’s about solving problems, innovating solutions, and continuously evolving in the fast-paced world of technology. Our club serves as a hub for aspiring programmers and seasoned developers alike, offering a wide range of events and activities designed to enhance coding skills and broaden knowledge across various domains.
We host numerous events throughout the year, including coding competitions, hackathons, workshops, and seminars that cover essential topics such as debugging techniques, algorithm design, and effective problem-solving strategies. These events not only provide hands-on experience but also encourage teamwork and collaboration among members, fostering a sense of camaraderie and support.
Our goal is to equip our members with the skills and connections they need to succeed in their academic and professional journeys.
Join us at Code Vision as we explore the limitless possibilities of coding together. Whether you’re looking to enhance your skills, learn something new, or connect with fellow tech enthusiasts, our club welcomes you with open arms. Together, let’s shape the future of technology!`,
  tagline: 'An Abode for Coders.',
  motto: 'To promote coders enriched with diverse technical skills.',
  promote: 'Join CV to enhance your CV.',
  foundedIn: '2016',
  founders: [
    'Hari Om bhaiya',
    'Shuvajit Dey bhaiya',
    'Adarsh Choudhary bhaiya',
    'Rakesh Singh bhaiya',
    'Anurag bhaiya',
  ],
  roles: {
    finalYear: 'Governors',
    thirdYear: 'Organizers',
    secondYear: 'Coordinators',
  },
  events: [
    'C-Workshop (for 1st Year)',
    'Annual Event (Console)',
    'CodeJam (Hackathon)',
  ],
};

const leadership = [
  {
    position: 'President',
    name: 'S.K. Abdul Rahim (H.O.D CSE)',
    photo:
      'https://res.cloudinary.com/debt9pcvr/image/upload/v1731506696/WhatsApp_Image_2024-11-13_at_10.46.25_54ca5c76_sl7nii.jpg',
  },
  {
    position: 'Vice President',
    name: 'Shiv Prasad Sir (Faculty IT)',
    photo:
      'https://res.cloudinary.com/debt9pcvr/image/upload/v1731506696/WhatsApp_Image_2024-11-13_at_10.46.25_689c8395_cva0cl.jpg',
  },
  {
    position: 'Convenor',
    name: ' Prasanna Roy  sir (Faculty CSE)',
    photo:
      'https://res.cloudinary.com/debt9pcvr/image/upload/v1731506696/WhatsApp_Image_2024-11-13_at_10.46.24_086cba19_gafp3d.jpg',
  },
  {
    position: 'SCO',
    name: 'Amit Kumar Mondal (CSE)',
    photo:
      'https://res.cloudinary.com/debt9pcvr/image/upload/v1731506697/WhatsApp_Image_2024-11-13_at_11.05.45_21353061_z4zuos.jpg',
  },
  {
    position: 'Joint SCO',
    name: 'Sukriti Priya',
    photo:
      'https://res.cloudinary.com/debt9pcvr/image/upload/v1731506697/WhatsApp_Image_2024-11-13_at_15.45.59_3e78d4f5_voqtso.jpg',
  },
];

function AboutUs() {
  document.title = 'CODE VISION | About Us';
  const gContext = useContext(globalContext);
  const { isMobile } = gContext;

  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  }, [isMobile]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="pt-20">
      <PageHeader
        title="About Us"
        subtitle="Learn about our journey and mission"
      />

      <div className="container mx-auto px-2 mt-10  ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
            {leadership.map((leader, index) => (
              <div key={index} className="text-center">
                <div className="size-40 mx-auto rounded-full bg-white/10 mb-4">
                  <img
                    src={leader.photo}
                    alt={leader.name}
                    loading="lazy"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="font-semibold">{leader.name}</h3>
                <p className="text-sm opacity-80">{leader.position}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card mb-12 text-base sm:text-lg"
        >
          <div className="space-y-3">
            <h2 className="text-2xl font-bold pb-2 border-b-2 border-gray-300">
              Club Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p>
                  <strong>Founded in:</strong> {clubInfo.foundedIn}
                </p>
                <div>
                  <strong>Founded by:</strong>
                  <ul className="list-disc list-inside ml-4">
                    {clubInfo.founders.map((founder, index) => (
                      <li key={index}>{founder}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <strong>Roles:</strong>
                  <ul className="list-disc list-inside ml-4">
                    <li>Final Year: {clubInfo.roles.finalYear}</li>
                    <li>3rd Year: {clubInfo.roles.thirdYear}</li>
                    <li>2nd Year: {clubInfo.roles.secondYear}</li>
                  </ul>
                </div>
                <div>
                  <strong>Club Events:</strong>
                  <ul className="list-disc list-inside ml-4">
                    {clubInfo.events.map((event, index) => (
                      <li key={index}>{event}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <h2 className="text-2xl font-bold pb-2 border-b-2 border-gray-300">
              Our Story
            </h2>
            <div>
              <p
                className={`whitespace-pre-line leading-relaxed sm:p-2 ${
                  isExpanded ? '' : 'line-clamp-5'
                }`}
              >
                {clubInfo.story}
              </p>
              {isMobile && (
                <button
                  onClick={toggleReadMore}
                  className="text-primary font-semibold"
                >
                  {isExpanded ? 'Read less' : 'Read more'}
                </button>
              )}
            </div>
            <div className="border-l-4 border-white/20 pl-4">
              <p className="text-xl font-semibold">{clubInfo.tagline}</p>
              <p className="opacity-80">{clubInfo.motto}</p>
              <p className=" font-semibold">{clubInfo.promote}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
