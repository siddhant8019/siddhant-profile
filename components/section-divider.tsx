"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="bg-gradient-to-b from-indigo-200 to-purple-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:from-indigo-600/40 dark:to-purple-800/40 dark:opacity-30"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
}
