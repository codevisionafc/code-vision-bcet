import {
  FaPhone,
  FaClipboard,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
} from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import longLogo from '../assets/logo code vision.png';

export default function Footer() {
  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/codevisionafc',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/company/codevision-bcet',
      label: 'LinkedIn',
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/codevisionbcet/',
      label: 'Instagram',
    },
    {
      icon: FaFacebook,
      href: 'https://www.facebook.com/Cv.bcet/',
      label: 'Facebook',
    },
    {
      icon: FaYoutube,
      href: 'https://www.youtube.com/channel/UChKbL22CrdIA0bTpYOip6nA',
      label: 'YouTube',
    },
    {
      icon: FaEnvelope,
      mail: 'codevisionafc@gmail.com',
      href: 'mailto:codevisionafc@gmail.com',
      label: 'Email',
    },
    {
      icon: FaPhone,
      title: 'Phone',
      number: '+91 9382731364',
      href: 'tel:+919382731364',
    },
  ];

  const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  return (
    <footer className="p-4 sm:p-6 bg-black/20 mt-16">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:order-first mb-6 md:mb-0 w-full">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                className="mr-3 h-10 rounded-lg"
                alt="FlowBite Logo"
              />
              <img src={longLogo} className="h-8" alt="FlowBite Logo" />
            </Link>
            <div className="mt-6 p-4 bg-white/10 rounded-lg md:w-4/5 ">
              <h2 className="text-lg font-semibold uppercase mb-4">
                Contact Info
              </h2>
              <div className="flex items-center mb-2">
                <FaEnvelope className="mr-2" />
                <a
                  href={`mailto:${socialLinks[5].mail}`}
                  className="hover:underline"
                >
                  {socialLinks[5].mail}
                </a>
                <FaClipboard
                  className="ml-2 cursor-pointer"
                  onClick={() => copyToClipboard(socialLinks[5].mail)}
                />
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                <a
                  href={`tel:${socialLinks[6].number}`}
                  className="hover:underline"
                >
                  {socialLinks[6].number}
                </a>
                <FaClipboard
                  className="ml-2 cursor-pointer"
                  onClick={() => copyToClipboard(socialLinks[6].number)}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 sm:gap-6 sm:grid-cols-3 w-full max-w-[600px]">
            <div className="col-span-2 grid grid-cols-2 gap-6 sm:gap-6">
              <h2 className="text-lg font-semibold col-span-2 uppercase">
                Pages
              </h2>
              <ul>
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/about-us" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/events" className="hover:underline">
                    Events
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/members" className="hover:underline">
                    Members
                  </Link>
                </li>
              </ul>
              <ul>
                <li className="mb-4">
                  <Link to="/alumni" className="hover:underline">
                    Alumni
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/gallery" className="hover:underline">
                    Gallery
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/contact-us" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-semibold uppercase">
                Follow us
              </h2>
              <ul>
                {socialLinks.map((link, index) => (
                  <li key={index} className="mb-4">
                    <a
                      href={link.href}
                      target="_blank"
                      className="hover:underline"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">
            © 2024{' '}
            <a href="/" className="hover:underline">
              Code Vision
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                className="text-white hover:text-white/80 transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
