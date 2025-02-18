import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';
import { useContext, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { globalContext } from '../context/globalContext';

export default function Events() {
  document.title = 'CODE VISION | Events';
  const events = [
    {
      name: 'C Workshop',
      ref: 'cWorkshop',
      details: {
        targetAudience: 'First-year students',
        objective: 'Introduce programming basics through hands-on coding in C.',
        duration: '4-5 days',
        agenda: [
          'Include important C topics.',
          'Intro to Programming & C: Basics of programming, C syntax, and structure.',
          'Hands-on Exercises Part 1: Simple coding tasks with guidance.',
          'Hands-on Exercises Part 2: Loops and conditional statements practice.',
          'Q&A & Peer Collaboration: Address questions, troubleshoot, and collaborate.',
          'Wrap-Up & Feedback: Recap, gather feedback, and share resources.',
        ],
        extras: [
          'Support team for assistance.',
          'Handouts and resource links.',
          'Option for continued learning via a follow-up Q&A and networking.',
        ],
      },
      poster:
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731569975/Snapinsta.app_432305420_1296910395044806_2298325038140788545_n_1080_hzve7t.jpg',
    },
    {
      name: 'CodeJam',
      ref: 'codeJam',
      details: {
        overview:
          'A hackathon with the theme “Tech for Good,” encouraging teams to create impactful solutions to real-world problems.',
        targetAudience: 'Students (First to Fourth Year)',
        skillFocus: 'Coding, Reasoning, Logical Thinking',
        prizes: 'Trophies and Badges',
        teamSize: '4 Members',
        duration: '2 Days',
        agenda: [
          'Registration: Team formation and orientation.',
          'Coding Phase: Teams work on solutions with mentorship.',
          'Submission: Code and demo submission.',
        ],
        award:
          'Trophies for top 3 teams, special mentions, and networking opportunity.',
      },
      poster:
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731569975/Snapinsta.app_458194563_526237390080702_4651420728703970979_n_1080_zuj5n0.jpg',
    },
    {
      name: 'Recruitment',
      ref: 'recruitment',
      details: {
        eligibility: '2nd-year students only.',
        overview: 'Process to join CODE VISION as a coordinator.',
        preperationTips:
          'Review programming concepts, practice coding challenges, and focus on teamwork and communication.',
        duration: '2 Days 2 rounds',
        round1: [
          'Objective: Test coding and problem-solving skills.',
          'Format: Coding challenge, technical mcq.',
          'Skills Evaluated: Coding proficiency, algorithmic thinking, and problem-solving.',
        ],
        round2: [
          'Objective: Assess communication, teamwork, and alignment with CODE VISION values.',
          'Format: Technical discussion, behavioural interview, scenario-based questions.',
          'Skills Evaluated: Collaboration, leadership, communication, and passion for technology.',
        ],
        keyQualities: [
          'Technical Competence: Strong coding and problem-solving skills.',
          'Teamwork: Ability to collaborate effectively.',
          'Passion: Interest in technology and learning.',
          'Leadership: Responsibility-taking and idea contribution.',
          'Communication: Clear expression of ideas and teamwork.',
        ],
      },
      poster:
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731589369/WhatsApp_Image_2024-11-10_at_22.19.55_679bfb5c_gppzfa.jpg',
    },
    {
      name: 'Console',
      ref: 'console',
      details: {
        objective:
          'Console offers a rich experience, blending competition with learning and community-building across multiple skill domains.',
        eligibility: 'All Undergraduate Students',
        theme: 'Unleashing Skills, Celebrating Diversity',
        duration: '2 Days',
        judgingCriteria:
          'Skill-specific performance, creativity, and engagement.',
        prizes: 'Trophies, badges, and participation certificates.',
        subEvents: [
          'Battle of Kings - Chess competition',
          'Cube Clash - Rubik’s Cube solving',
          'Sudoku - Logic puzzles',
          'BGMI - Team mobile gaming',
          'Brain Quest - Reasoning challenges',
          'Tug of Words War - Group discussions',
          'Minute Showdown - Extempore speeches',
          'Seminar - Guest lectures',
          'Algorithm Arena - DSA competition',
          'Code Crush - Coding contest',
          'Squash the Bug - Debugging challenge',
          'War of UI Lens - UI/UX design',
          'Lens Legacy - Photography',
          'Meme Madness - Meme creation',
          'Inked Elegance - Handwriting contest',
          'Pixel Story - Short video creation',
          'Apti Quest - Aptitude quiz',
        ],
      },
      poster:
        'https://res.cloudinary.com/debt9pcvr/image/upload/v1731569975/Snapinsta.app_437011241_926108512583853_8074732097363179100_n_1080_bd8rlt.jpg',
    },
  ];

  const cWorkshop = useRef(null);
  const codeJam = useRef(null);
  const recruitment = useRef(null);
  const console = useRef(null);

  const refStore = {
    cWorkshop,
    codeJam,
    recruitment,
    console,
  };

  const gContext = useContext(globalContext);
  const { scrollToSection } = gContext;

  const { event } = useParams();
  useEffect(() => {
    if (event && refStore[event]) {
      scrollToSection(refStore[event]);
    }
  }, [event]);

  return (
    <div className="pt-20">
      <PageHeader
        title="Events"
        subtitle="Explore our technical events and activities"
      />

      <div className="container mx-auto px-2 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {events.map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-4 bg-white/10 rounded-lg flex items-center justify-center text-xl font-bold cursor-pointer"
              onClick={() => {
                scrollToSection(refStore[event.ref]);
              }}
            >
              {event.name}
            </motion.div>
          ))}
        </div>

        <div className="space-y-12">
          {/* C Workshop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card mb-6"
            ref={refStore.cWorkshop}
          >
            <h2 className="text-2xl font-bold mb-6">{events[0].name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-auto rounded-lg flex items-start justify-center order-1 md:order-2">
                <img
                  className="rounded-lg shadow-lg max-h-[500px]"
                  src={events[0].poster}
                  alt={`${events[0].name} Poster`}
                />
              </div>
              <div className="space-y-4 text-sm sm:text-base order-2 md:order-1">
                <p className="text-lg">{events[0].details.objective}</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Target Audience</h3>
                      <p className="opacity-80">
                        {events[0].details.targetAudience}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Duration</h3>
                      <p className="opacity-80">{events[0].details.duration}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Agenda</h3>
                    <ul className="list-disc list-outside ps-4 opacity-80 space-y-2">
                      {events[0].details.agenda.map((subEvent, idx) => (
                        <li key={idx} className="whitespace-normal break-words">
                          {subEvent}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Extras</h3>
                    <ul className="list-disc list-outside ps-4 opacity-80 space-y-2">
                      {events[0].details.extras.map((subEvent, idx) => (
                        <li key={idx} className="whitespace-normal break-words">
                          {subEvent}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CodeJam */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card mb-6"
            ref={refStore.codeJam}
          >
            <h2 className="text-2xl font-bold mb-6">{events[1].name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-auto rounded-lg flex items-start justify-center order-1 md:order-2">
                <img
                  className="rounded-lg shadow-lg max-h-[500px]"
                  src={events[1].poster}
                  alt={`${events[1].name} Poster`}
                />
              </div>
              <div className="space-y-4 text-sm sm:text-base order-2 md:order-1">
                <p className="text-lg">{events[1].details.overview}</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Target Audience</h3>
                      <p className="opacity-80">
                        {events[1].details.targetAudience}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Skill Focus</h3>
                      <p className="opacity-80">
                        {events[1].details.skillFocus}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Prizes</h3>
                      <p className="opacity-80">{events[1].details.prizes}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Duration</h3>
                      <p className="opacity-80">{events[1].details.duration}</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Agenda</h3>
                    <ul className="list-disc list-outside ps-4 opacity-80 space-y-2">
                      {events[1].details.agenda.map((subEvent, idx) => (
                        <li key={idx} className="whitespace-normal break-words">
                          {subEvent}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Award</h3>
                    <p className="opacity-80">{events[1].details.award}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Recruitmemt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card mb-6"
            ref={refStore.recruitment}
          >
            <h2 className="text-2xl font-bold mb-6">{events[2].name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-auto rounded-lg flex items-start justify-center order-1 md:order-2">
                <img
                  className="rounded-lg shadow-lg max-h-[500px]"
                  src={events[2].poster}
                  alt={`${events[2].name} Poster`}
                />
              </div>
              <div className="space-y-4 text-sm sm:text-base order-2 md:order-1">
                <p className="text-lg">{events[2].details.overview}</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Eligibility</h3>
                      <p className="opacity-80">
                        {events[2].details.eligibility}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Duration</h3>
                      <p className="opacity-80">{events[2].details.duration}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Preperation Tips</h3>
                      <p className="opacity-80">
                        {events[2].details.preperationTips}
                      </p>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">
                    Selection Rounds
                  </h3>
                  <div>
                    <h3 className="font-semibold mb-2">Round 1</h3>
                    <ul className="list-disc list-outside ps-4 opacity-80 space-y-2">
                      {events[2].details.round1.map((subEvent, idx) => (
                        <li key={idx} className="whitespace-normal break-words">
                          {subEvent}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Round 2</h3>
                    <ul className="list-disc list-outside ps-4 opacity-80 space-y-2">
                      {events[2].details.round2.map((subEvent, idx) => (
                        <li key={idx} className="whitespace-normal break-words">
                          {subEvent}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-lg">
                      Key Qualities CODE VISION Values
                    </h3>
                    <ul className="list-disc list-outside ps-4 opacity-80 space-y-2">
                      {events[2].details.keyQualities.map((subEvent, idx) => (
                        <li key={idx} className="whitespace-normal break-words">
                          {subEvent}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Console */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card mb-6"
            ref={refStore.console}
          >
            <h2 className="text-2xl font-bold mb-6">{events[3].name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="aspect-auto rounded-lg flex items-start justify-center order-1 md:order-2">
                <img
                  className="rounded-lg shadow-lg max-h-[500px]"
                  src={events[3].poster}
                  alt={`${events[3].name} Poster`}
                />
              </div>
              <div className="space-y-4 text-sm sm:text-base order-2 md:order-1">
                <p className="text-lg">{events[3].details.objective}</p>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Eligibility</h3>
                      <p className="opacity-80">
                        {events[3].details.eligibility}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Duration</h3>
                      <p className="opacity-80">{events[3].details.duration}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Theme</h3>
                      <p className="opacity-80">{events[3].details.theme}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Judging Criteria</h3>
                      <p className="opacity-80">
                        {events[3].details.judgingCriteria}
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl my-4">
                      Key Sub Events
                    </h3>
                    <ul className="list-disc list-outside ps-4 opacity-80 space-y-2">
                      {events[3].details.subEvents.map((subEvent, idx) => (
                        <li key={idx} className="whitespace-normal break-words">
                          {subEvent}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Prizes</h3>
                    <p className="opacity-80">{events[3].details.prizes}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
