import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import Modal from '../components/Modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home() {
  document.title = 'CODE VISION | Home';
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', description: '' });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const benefits = [
    {
      title: 'Gain Knowledge',
      desc: 'Join Code Vision to immerse yourself in a wealth of programming knowledge! Our club offers a collaborative environment where you can explore various coding languages, algorithms, and software development practices. Expand your understanding and stay updated with the latest trends in technology.',
    },
    {
      title: 'Learning new things',
      desc: 'At Code Vision, we believe that continuous learning is key to success in the tech world. Whether you’re a beginner or an experienced coder, our workshops and hackathons provide opportunities to learn new tools, frameworks, and methodologies that will keep you ahead of the curve.',
    },
    {
      title: 'Leadership skills',
      desc: 'Develop your leadership potential by taking on roles within Code Vision! Lead projects, mentor fellow members, and organize events. Our club encourages you to step out of your comfort zone and build essential skills that will benefit you in both your academic and professional career.',
    },
    {
      title: 'Enhance coding skills',
      desc: "Sharpen your coding skills through hands-on experience and real-world projects. At Code Vision, you'll work on challenging problems, participate in coding competitions, and collaborate on team projects that will help you become a more proficient and confident programmer.",
    },
    {
      title: 'Build Network',
      desc: 'Expand your professional network by connecting with like-minded peers and industry professionals through Code Vision. Our club hosts networking events, guest speaker sessions, and collaborative projects that allow you to meet potential mentors, partners, and friends who share your passion for coding.',
    },
  ];

  const skills = [
    {
      title: 'Coding',
      desc: 'Gain hands-on experience with real-world coding projects. Our mentors and resources help you improve your skills in various programming languages, understand coding best practices, and work through challenging algorithms. Whether you’re interested in web development, mobile apps, or data science, Code Vision equips you with the tools to excel.',
    },
    {
      title: 'Development',
      desc: 'Go beyond coding with a focus on full-scale development. Learn about project structuring, software lifecycle management, and how to transform ideas into fully functional products. Our team will guide you through front-end and back-end development, testing, and deployment.',
    },
    {
      title: 'Communication',
      desc: 'Effective communication is key to success in any field. Here, you’ll learn how to convey ideas clearly, give constructive feedback, and collaborate seamlessly with others. Improve your verbal and written communication skills, essential for teamwork and client interactions.',
    },
    {
      title: 'Leadership',
      desc: 'Cultivate essential leadership skills through hands-on experience and mentorship. Whether leading a small project or managing a team, you’ll learn how to inspire others, make strategic decisions, and foster an inclusive and productive environment',
    },
    {
      title: 'Event Management',
      desc: 'Develop skills in organizing and managing events, from planning to execution. You’ll get opportunities to help run coding workshops, hackathons, and networking events, where you’ll learn how to coordinate with teams, handle logistics, and ensure every detail is taken care of.',
    },
    {
      title: 'Team Work',
      desc: 'Teamwork lies at the heart of Code Vision. We emphasize the importance of collaboration and support, helping you to become an effective team player. Learn how to work cohesively, leverage each member’s strengths, and achieve goals together.',
    },
  ];

  const events = [
    {
      title: 'C Workshop',
      ref: 'cWorkshop',
      description:
        'Introduce basic programming concepts, provide hands-on C coding, encourage questions, and foster community through interactive peer support.',
    },
    {
      title: 'CodeJam',
      ref: 'codeJam',
      description:
        'A dynamic "Tech for Good" hackathon for students, blending coding, reasoning, and teamwork, with prizes for innovation, impact, and presentation.',
    },
    {
      title: 'Recruitment',
      ref: 'recruitment',
      description:
        'A two-round process for 2nd-year students, assessing coding, teamwork, communication, and passion through technical challenges and interviews.',
    },
    {
      title: 'Console',
      ref: 'console',
      description:
        'A 2-day event celebrating diverse skills with competitions in logic, coding, design, creativity, and more for undergraduates, featuring trophies, badges, and certificates.',
    },
  ];

  const orientationVideoId = 'Zie1uLbLEUA';

  const aboutShort =
    'CODE VISION is a dynamic coding club dedicated to fostering technical excellence and leadership skills among students. We believe in learning by doing and creating opportunities for growth.';

  const membersPhotos = [
    'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427424/IMG-20241111-WA0058_g35v0i.jpg',
    'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425180/IMG-20241111-WA0016_b8iobd.jpg',
    'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427421/IMG-20241111-WA0057_bfqxcl.jpg',
    'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427420/IMG-20241111-WA0055_ozxx1g.jpg',
    'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427454/IMG-20241111-WA0095_ygvzhd.jpg',
  ];
  return (
    <>
      <Modal open={modalOpen} setOpen={setModalOpen} data={modalData} />
      <div className="pt-5">
        {/* Hero Section */}

        <section className="section-container ">
          <div className="aspect-video  bg-black/20 rounded-lg mb-12 mx-auto ">
            {/* Video placeholder */}
            <iframe
              width="100%"
              height="100%"
              className="rounded-lg"
              src={`https://www.youtube.com/embed/${orientationVideoId}?autoplay=1&mute=1&vq=small&loop=1&playlist=${orientationVideoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="px-2">Orientation Video</p>
          </div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="card"
          >
            <h2 className="text-2xl font-bold mb-6">Why join CODE VISION?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="py-2 px-4 sm:p-4 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
                  onClick={() => {
                    setModalData({
                      title: benefit.title,
                      description: benefit.desc,
                    });
                    setModalOpen(true);
                  }}
                >
                  {benefit.title}
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="section-container grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 rounded-lg overflow-hidden">
            {/* Members photo placeholder */}
            <div className="carousel-container">
              <Carousel showThumbs={false} autoPlay infiniteLoop>
                {membersPhotos.map((photo, index) => (
                  <div key={index}>
                    <img
                      src={photo}
                      alt="Members"
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="mb-6">{aboutShort}</p>
            <button
              className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg transition-colors"
              onClick={() => navigate('/about-us')}
            >
              Read more
            </button>
          </div>
        </section>

        {/* Events Section */}
        <section className="section-container">
          <h2 className="text-2xl font-bold mb-8">Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="card cursor-pointer"
                onClick={() => navigate(`/events/${event.ref}`)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-sm opacity-80 mb-4">{event.description}</p>
                <button
                  className="text-sm underline"
                  onClick={() => navigate(`/events/${event.ref}`)}
                >
                  Read more
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="section-container">
          <div className="card">
            <h2 className="text-2xl font-bold mb-6">
              What you will learn here?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="py-2 px-4 sm:p-4 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
                  onClick={() => {
                    setModalData({
                      title: skill.title,
                      description: skill.desc,
                    });
                    setModalOpen(true);
                  }}
                >
                  {skill.title}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
