import React, { useState, useRef, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import Modal from '../components/Modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { globalContext } from '../context/globalContext';
import NumberAnimation from '../components/NumberAnimatio';
import { title } from 'framer-motion/client';

export default function Home() {
  document.title = 'CODE VISION - An adobe for coders';
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({ title: '', description: '' });

  const gContext = useContext(globalContext);
  const { scrollToSection, isMobile, info } = gContext;

  const inViewRefs = useRef({});
  const [inViewStates, setInViewStates] = useState({});

  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const createInViewHook = (key, options) => {
    const [ref, inView] = useInView(options);
    inViewRefs.current[key] = ref;
    useEffect(() => {
      const debouncedUpdate = debounce(() => {
        setInViewStates(prevState => ({ ...prevState, [key]: inView }));
      }, 100);
      debouncedUpdate();
    }, [inView]);
  };

  createInViewHook('section1', { triggerOnce: true });
  createInViewHook('section2', { triggerOnce: true });
  createInViewHook('section3', { triggerOnce: true });
  createInViewHook('section4', { triggerOnce: true });
  createInViewHook('section5', { triggerOnce: true });
  createInViewHook('section6', { triggerOnce: true });
  createInViewHook('event', { triggerOnce: true });
  createInViewHook('video', { triggerOnce: false });

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      if (inViewStates.video) {
        videoRef.current.contentWindow.postMessage(
          '{"event":"command","func":"playVideo","args":""}',
          '*'
        );
      } else {
        videoRef.current.contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          '*'
        );
      }
    }
  }, [inViewStates.video]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4 + i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  const orientationRef = useRef(null);

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
      title: 'Python Bootcamp',
      ref: 'pythonBootcamp',
      description:
        'A 3-day event introducing Python programming basics through hands-on coding, covering key topics, practical exercises, and peer collaboration.',
    },
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
        'Code Vision annual event celebrating diverse skills with competitions in logic, coding, design, creativity, and more for undergraduates, featuring trophies, badges, and certificates.',
    },
  ];

  const orientationVideoId = 'Zie1uLbLEUA';

  const aboutShort =
    'CODE VISION is a dynamic coding club dedicated to fostering technical excellence and leadership skills among students. We believe in learning by doing and creating opportunities for growth.';

  const orientation =
    'Welcome to CODE VISION! Our orientation program is designed to introduce you to the club, its members, and the various activitieswe offer. Join us to learn more about our mission, vision, and upcoming events.';
  const membersPhotos = [
    'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427424/IMG-20241111-WA0058_g35v0i.jpg',
    'https://res.cloudinary.com/debt9pcvr/image/upload/v1731425180/IMG-20241111-WA0016_b8iobd.jpg',
    'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427421/IMG-20241111-WA0057_bfqxcl.jpg',
    'https://res.cloudinary.com/debt9pcvr/image/upload/v1741936932/WhatsApp_Image_2025-03-14_at_02.12.08_ef762af3_bmurl1.jpg',
    'https://res.cloudinary.com/debt9pcvr/image/upload/v1731427454/IMG-20241111-WA0095_ygvzhd.jpg',
  ];

  const nextEvent = {
    name: 'PYTHON BOOTCAMP 2025',
    ref: 'pythonBootcamp',
    details: {
      targetAudience: 'First and second year students',
      objective: 'Introduce Python programming basics through hands-on coding.',
      description:
        'Join us for the Python Bootcamp, a 5-day event designed for first and second-year students to introduce Python programming basics through hands-on coding. The bootcamp includes key Python topics, practical exercises, Q&A sessions, and peer collaboration. Additional support and resources will be provided.',
      duration: '5 days',
      date: '12 - 14 August 2025',
      agenda: [
        'Introduction: Overview of Python and its applications.',
        'Basic Data Types: Numbers, strings, and variables.',
        'Functions: Defining and using functions in Python.',
        'Control Flow: If-else statements, loops, and logical operators.',
        'Data Structures: Lists, tuples, dictionaries, and sets.',
        'OOPS: Object-Oriented Programming concepts in Python.',
        'Project: Build a mini Python application to apply the concepts learned.',
        'Hands-on Exercises: Practical coding tasks for each topic.',
        'Q&A & Peer Collaboration: Address questions, troubleshoot, and collaborate.',
        'Wrap-Up & Feedback: Recap, gather feedback, and share resources.',
      ],
      extras: [
        'Support team for assistance.',
        'Handouts and resource links.',
        'Option for continued learning via a follow-up Q&A and networking.',
      ],
    },
    registrationLink:
      'https://docs.google.com/forms/d/e/1FAIpQLSc4BDru-xszxHeXYUPrHUgoFd8kAOhNRTo4g46D04yLR_BTew/viewform',
    poster:
      'https://res.cloudinary.com/debt9pcvr/image/upload/v1744142016/WhatsApp_Image_2025-04-09_at_01.05.32_8b9035dc_d9nk43.jpg',
  };

  return (
    <>
      <Modal open={modalOpen} setOpen={setModalOpen} data={modalData} />
      <div className="pt-5">
        {/* Hero Section */}
        <section className="relative overflow-hidden h-screen flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full h-full">
            {/* Hero text content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
              <motion.div
                className="font-ethnocentric text-4xl md:text-6xl lg:text-8xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"
                initial="hidden"
                animate="visible"
                variants={titleVariants}
              >
                <h1>Code Vision</h1>
              </motion.div>

              <div className="space-y-4">
                <motion.div
                  className="font-ethnocentric text-xl md:text-3xl lg:text-4xl font-bold"
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={subtitleVariants}
                >
                  <h2>
                    <strong>An Abode for Coders.</strong>
                  </h2>
                </motion.div>

                <motion.p
                  className="text-lg md:text-xl text-gray-300"
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={subtitleVariants}
                >
                  To promote coders enriched with diverse technical skills.
                </motion.p>

                <motion.p
                  className="text-xl md:text-2xl font-bold"
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={subtitleVariants}
                >
                  <strong>Join CV to enhance your CV.</strong>
                </motion.p>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="mt-12"
              >
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-2 md:py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-blue-500/30"
                  onClick={() => scrollToSection(orientationRef)}
                >
                  Read More
                </button>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Orientation Section */}
        <section
          className="section-container grid md:grid-cols-4 lg:grid-cols-7 gap-4"
          ref={orientationRef}
        >
          {/* Video description */}
          <motion.div
            ref={inViewRefs.current.section1}
            initial="hidden"
            animate={inViewStates.section1 ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="flex flex-col justify-center p-2 md:col-span-1 lg:col-span-2"
          >
            <h2 className="text-2xl font-bold mb-4">Orientation</h2>
            <p className="mb-6">{orientation}</p>
          </motion.div>

          {/* Video player */}
          <motion.div
            ref={inViewRefs.current.section2}
            initial="hidden"
            animate={inViewStates.section2 ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="aspect-video bg-black/20 rounded-lg md:col-span-3 lg:col-span-5"
          >
            <iframe
              ref={node => {
                videoRef.current = node;
                inViewRefs.current.video(node);
              }}
              width="100%"
              height="100%"
              className="rounded-lg"
              src={`https://www.youtube.com/embed/${orientationVideoId}?autoplay=1&mute=1&loop=1&playlist=${orientationVideoId}&enablejsapi=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </motion.div>
        </section>
        {/* Next Event Section */}
        <section className="section-container">
          <h2 className="text-2xl font-bold mb-6 md:flex-row md:max-w-4xl md:mx-auto">
            Next Event
          </h2>
          <motion.div
            ref={inViewRefs.current.event}
            initial="hidden"
            animate={inViewStates.event ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="flex flex-col items-center bg-white/5  rounded-lg shadow-sm md:flex-row md:max-w-4xl md:mx-auto"
          >
            <img
              className="object-cover w-full rounded-t-lg h-max-96 md:h-auto md:w-96 md:rounded-none md:rounded-s-lg"
              src={nextEvent.poster}
              alt="Next Event Poster"
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight">
                {nextEvent.name}
              </h5>
              <p className="mb-3 font-normal">{nextEvent.details.objective}</p>
              <p className="mb-3 font-normal">
                {nextEvent.details.description}
              </p>
              <p className="mb-3 font-normal">
                <strong>Date : </strong>
                {nextEvent.details.date}
              </p>
              <div className="flex justify-start gap-4">
                <button
                  className="text-sm px-4 py-2 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors"
                  onClick={() => navigate(`/events/${nextEvent.ref}`)}
                >
                  Details
                </button>
                <button
                  className="text-sm  px-4 py-2  rounded-lg cursor-pointer bg-blue-500 hover:bg-blue-600 transition-colors"
                  onClick={() => {
                    window.open(nextEvent.registrationLink, '_blank');
                  }}
                >
                  Register
                </button>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Achievements Section in Numbers*/}
        <section className="section-container">
          <h2 className="text-2xl font-bold mb-6">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="py-4 px-6 bg-white/5 rounded-lg">
              <h3 className="text-4xl font-bold text-white ">
                <NumberAnimation end={info.members} duration={10} />+
              </h3>
              <p className="text-lg">Members</p>
            </div>
            <div className="py-4 px-6 bg-white/5 rounded-lg">
              <h3 className="text-4xl font-bold text-white">
                <NumberAnimation end={info.events} duration={10} />+
              </h3>
              <p className="text-lg">Events</p>
            </div>
            <div className="py-4 px-6 bg-white/5 rounded-lg">
              <h3 className="text-4xl font-bold text-white">
                <NumberAnimation end={info.participants} duration={10} />+
              </h3>
              <p className="text-lg">Participants</p>
            </div>
            <div className="py-4 px-6 bg-white/5 rounded-lg col-span-full">
              <h3 className="text-5xl font-bold text-white ">
                <NumberAnimation end={info.visitCount} duration={10} />+
              </h3>
              <p className="text-xl">Site Visit</p>
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="section-container">
          <motion.div
            ref={inViewRefs.current.section3}
            initial="hidden"
            animate={inViewStates.section3 ? 'visible' : 'hidden'}
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
            <motion.div
              ref={inViewRefs.current.section4}
              initial="hidden"
              animate={inViewStates.section4 ? 'visible' : 'hidden'}
              variants={cardVariants}
              className="carousel-container"
            >
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
            </motion.div>
          </div>

          <motion.div
            ref={inViewRefs.current.section5}
            initial="hidden"
            animate={inViewStates.section5 ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="mb-6">{aboutShort}</p>
            <button
              className="bg-white/10 hover:bg-white/20 px-6 py-2 rounded-lg transition-colors"
              onClick={() => navigate('/about-us')}
            >
              Read more
            </button>
          </motion.div>
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
          <motion.div
            ref={inViewRefs.current.section6}
            initial="hidden"
            animate={inViewStates.section6 ? 'visible' : 'hidden'}
            variants={cardVariants}
            className="card"
          >
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
          </motion.div>
        </section>
      </div>
    </>
  );
}
