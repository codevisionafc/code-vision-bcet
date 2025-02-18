import { motion } from 'framer-motion';

export default function PageHeader({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center "
    >
      <h1 className="text-4xl font-bold mb-2">{title}</h1>
      {subtitle && <p className="text-lg opacity-80">{subtitle}</p>}
    </motion.div>
  );
}
