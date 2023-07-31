import { useState, useEffect } from "react";
import Router from "next/router";
import { AnimatePresence, motion } from "framer-motion";

const PageTransition = ({ children }) => {
  return <AnimatePresence exitBeforeEnter>{children}</AnimatePresence>;
};

export default PageTransition;
