import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export function NotFoundPage() {
  return (
    <div className="pt-40 pb-24 px-6">
      <div className="container mx-auto max-w-2xl text-center">
        <motion.p
          className="text-silver text-sm tracking-[0.3em] mb-4"
        >
          ERROR 404
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          This page doesn't exist.
        </motion.h1>
        <motion.p
          className="text-gray-400 mb-10"
        >
          The link may be out of date, or the address mistyped.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="px-6 py-3 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:border-gray-500 transition-colors"
          >
            Back to home
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 rounded-lg border border-transparent text-gray-400 hover:text-white transition-colors"
          >
            About me
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
