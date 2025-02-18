import PageHeader from '../components/PageHeader';
import { motion } from 'framer-motion';

export default function Members() {
  document.title = 'CODE VISION | Members';
  const members = {
    governors: [
      { name: 'Aditya Kumar ', branch: 'CSE' },
      { name: 'Ahana Mandal', branch: 'CSE' },
      { name: 'Amit Kumar Mondal', branch: 'CSE' },
      { name: 'Anish Jaiswal', branch: 'CSE' },
      { name: 'Ankur Dixit', branch: 'IT' },
      { name: 'Anshu Raj', branch: 'CSE' },
      { name: 'Arpana Kumari', branch: 'IT' },
      { name: 'Bajrang Kumar', branch: 'CSE' },
      { name: 'Bijay Kumar Yadav', branch: 'CSE' },
      { name: 'Harsh Thakur', branch: 'IT' },
      { name: 'Md Navil Ahmad', branch: 'CSE' },
      { name: 'Mohammad Rashid Anwar', branch: 'IT' },
      { name: 'Sahil Singh', branch: 'CSE' },
      { name: 'Sania Kumari', branch: 'CSE' },
      { name: 'Satyam Durgesh', branch: 'CSE' },
      { name: 'Shyam Kumar Sahu', branch: 'CSE' },
      { name: 'Siddhartha Kar', branch: 'CSE' },
      { name: 'Sonal Tiwary', branch: 'CSE' },
      { name: 'Sonu Kumar Ranjan', branch: 'CSE' },
      { name: 'Soumik Mukherjee', branch: 'CSE' },
      { name: 'Subhendu Singh', branch: 'IT' },
      { name: 'Sukriti Priya', branch: 'IT' },
      { name: 'Suman Kumar Rawani', branch: 'IT' },
      { name: 'Swati Sharma', branch: 'CSE' },
      { name: 'Sweta Yadav', branch: 'CSE' },
      { name: 'Ujjayini Majhi', branch: 'IT' },
    ],
    organizers: [
      { name: 'Abhimanyu Singh', branch: 'CSE' },
      { name: 'Anirban Saha', branch: 'CSE' },
      { name: 'Arnab Mukherjee', branch: 'CSE' },
      { name: 'Ayush Kumar', branch: 'IT' },
      { name: 'Gaurav Kumar Mahato', branch: 'IT' },
      { name: 'Indrajit Samanta', branch: 'CSE' },
      { name: 'Jaya Gorai', branch: 'IT' },
      { name: 'Kanu Priya', branch: 'CSE' },
      { name: 'Karishma Singh ', branch: 'CSE' },
      { name: 'Khushi Saumya', branch: 'CSE' },
      { name: 'Kumari Priyanshu ', branch: 'CSE' },
      { name: 'Mahreen Rizvi', branch: 'CSE' },
      { name: 'Mayank Rana', branch: 'CSE' },
      { name: 'Md Danish Qumar ', branch: 'CSE' },
      { name: 'Nikita Kumari', branch: 'IT' },
      { name: 'Nikita Raj', branch: 'CSE' },
      { name: 'Nourin Khatun', branch: 'IT' },
      { name: 'Prerna Shree', branch: 'IT' },
      { name: 'Priyabrata Dey', branch: 'IT' },
      { name: 'Priyanshu Pandey', branch: 'IT' },
      { name: 'Richa', branch: 'CSE' },
      { name: 'Richa Raj', branch: 'CSE' },
      { name: 'Rup Kumar Biswas', branch: 'CSE' },
      { name: 'Sagar Kumar Mahto', branch: 'CSE' },
      { name: 'Sanjeevan Nag', branch: 'IT' },
      { name: 'Saurav Prasad', branch: 'IT' },
      { name: 'Sayan Mukherjee ', branch: 'CSE' },
      { name: 'Smriti', branch: 'IT' },
    ],
    coordinators: [
      { name: 'Aaryan Suman', branch: 'CSE' },
      { name: 'Anand Kumar', branch: 'CSE' },
      { name: 'Anand Raj', branch: 'CSE' },
      { name: 'Ayush Vishnu Kumar', branch: 'CSE' },
      { name: 'Deepti Kumari', branch: 'IT' },
      { name: 'Deepti Shubha', branch: 'IT' },
      { name: 'Gaurav Chandravanshi', branch: 'IT' },
      { name: 'Gokul Sahoo', branch: 'CSE' },
      { name: 'Khushi Singh', branch: 'CSE' },
      { name: 'Komal Rani', branch: 'CSE' },
      { name: 'Manas Kumar Mishra', branch: 'CSE' },
      { name: 'Manish Kumar Sahu', branch: 'IT' },
      { name: 'Md Soheb Ansari', branch: 'CSE' },
      { name: 'Muskan Kumari', branch: 'CSE' },
      { name: 'Pragati Gupta', branch: 'CSE' },
      { name: 'Prince Jha', branch: 'CSE' },
      { name: 'Ritee Singh', branch: 'CSE' },
      { name: 'Sadhna Jha', branch: 'CSE' },
      { name: 'Sepal Sagar', branch: 'CSE' },
      { name: 'Shalu Kumari', branch: 'CSE' },
      { name: 'Shashi Ranjan', branch: 'IT' },
      { name: 'Shivam Kumar', branch: 'CSE' },
      { name: 'Sneha Kumari', branch: 'CSE(AI/ML)' },
      { name: 'Sudhanshu Kumar', branch: 'IT' },
      { name: 'Sunakshi Kumari', branch: 'IT' },
      { name: 'Vinit Kumar Mandal', branch: 'CSE' },
      { name: 'Vinod Kumar', branch: 'CSE' },
      { name: 'Vivek Kumar', branch: 'CSE' },
      { name: 'Vivek Kumar Gupta', branch: 'CSE' },
    ],
  };

  const MemberTable = ({ title, members }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card mb-4 max-w-[600px] mx-auto"
    >
      <h2 className="text-2xl font-bold mb-2 ">{title}</h2>
      <div className="overflow-x-auto max-h-[300px] overflow-y-auto custom-scrollbar">
        <table className=" w-full ">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-2">Name</th>
              <th className="text-left py-2">Branch</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member, index) => (
              <tr key={index} className="border-b border-white/5">
                <td className="py-2">{member.name}</td>
                <td className="py-2">{member.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );

  return (
    <div className="pt-20">
      <PageHeader title="Members" subtitle="Meet our team" />
      <div className="container mx-auto px-2 mt-10">
        <MemberTable title="Governors (4th Year)" members={members.governors} />
        <MemberTable
          title="Organizers (3rd Year)"
          members={members.organizers}
        />
        <MemberTable
          title="Coordinators (2nd Year)"
          members={members.coordinators}
        />
      </div>
    </div>
  );
}
