import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

export default function Alumni() {
  document.title = 'CODE VISION | Alumni';
  const alumni = {
    2024: [
      'Abhishek Jha',
      'Animesh Mondal',
      'Aniruddha Pal',
      'Anjali Jha',
      'Avinash kumar',
      'Diwakar Kumar',
      'Guddu kumar',
      'Gulabsha khatun',
      'Karan kumar',
      'Manish Kumar',
      'Meenakshi Sinha',
      'Namrata Nimmi',
      'Prasann Kumar',
      'Purnika Rani',
      'Rakesh Kumar',
      'Rohan Dev Singh',
      'Shivanand Tiwari',
      'Sonali Kumari',
    ],
    2023: [
      'Abhay Anand',
      'Abhishek Kumar Ghosh',
      'Aditi Shree',
      'Aman Jha',
      'Anchit Chandra',
      'Ankit Jaiswal',
      'Ayushi Kumari',
      'Devesh Tiwary',
      'Harsh',
      'Himanshu Shekhar',
      'Pranav Kumar',
      'Pratyush Kumar',
      'Ritesh Kumar Shaw',
      'Saloni Sahay',
      'Shubham Kumar',
      'Sifat Naaz',
      'Vatsal Vinit',
    ],
    2022: [
      'Aftab Mustafa',
      'Aniket Jha',
      'Anjali Kumari',
      'Ankita Ray',
      'Ankita Senapati',
      'Anuradha Singh',
      'Bijeyta',
      'Debangan Roy',
      'Depti Kumari',
      'Hrithik Kumar',
      'Misha Sambhavi',
      'Mohammad Wasim Arham',
      'Nayana Singh',
      'Pijush Pal',
      'Prabir Ghosh',
      'Sanya Gupta',
      'Shaily Singh',
      'Shammi Kumar',
      'Shristi Seal',
      'Srijan',
      'Sriya Kumari',
      'Virat Prasad',
      'Yashaswi',
    ],
    2021: [
      'Shalini Kumari',
      'Anurag Kumar Choudhary',
      'Rachna Kumari',
      'Apurba Ghosh',
      'Yash Jha',
      'Ashutosh Kumar',
      'Dhrubajyoti Das',
      'Shubhojeet Banerjee',
      'Sarika kumari',
      'Kumari Shruti',
      'Subhash Kumar',
      'Soif Akhter',
      'Amisha Sinha',
      'Md Gulam Sarwar',
      'Anubhav Upadhyay',
      'Akshay Bhaskar',
      'Tanveer Alam',
      'Aditya Kumar',
      'Ayushi Bhowmik',
      'Manisa Baur',
      'Ravisha',
      'Dolon Ghanty',
      'Sourav Kumar',
      'Surbhi Ramuka',
    ],
    2020: [
      'Sounak',
      'Amar',
      'Bidika',
      'Janvi',
      'Himani',
      'Pratyush',
      'Saket',
      'Tumpa',
      'Smriti',
      'Rohit',
      'Shubhodeep',
      'Saurav',
      'Abni Ranjan',
      'Abhishek Diwedi',
      'Tanzim',
      'Mohit',
    ],
    2019: [
      'Anurag Sharma',
      'Roshan Choudhary',
      'Rohit Singh',
      'Sourav Roy Choudhary',
      'Shubham Dhann Suman',
    ],
    2018: [
      'Ashutosh Kashyap',
      'Shristi Singh',
      'Prasanjeet Anand',
      'Shubham Ghosh',
      'Sweety Seth',
      'Shruti Dixit',
    ],
    2017: [
      'Shuvajit Dey',
      'Rakesh Singh',
      'Hari Om',
      'Aadarsh Choudhary',
      'Anurag Anand',
    ],
  };

  const AlumniSection = ({ year, names }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card mb-8"
    >
      <h2 className="text-2xl font-bold mb-4">{year} Passout</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {names.map((name, index) => (
          <div
            key={index}
            className="bg-white/5 rounded-lg px-2 py-2 sm:p-4 text-center"
          >
            {name}
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="pt-20">
      <PageHeader title="Alumni" subtitle="Our distinguished former members" />

      <div className="container mx-auto px-2 mt-10">
        {Object.entries(alumni)
          .reverse()
          .map(([year, names]) => (
            <AlumniSection key={year} year={year} names={names} />
          ))}
      </div>
    </div>
  );
}
