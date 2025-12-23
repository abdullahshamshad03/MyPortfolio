"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};

export default function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 0.6, ease: "easeInOut" }}} 
      className="my-8 md:my-15 p-4 md:p-6"
    >
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[95vw] md:max-w-[500px] max-h-[85vh] flex flex-col bg-white dark:bg-neutral-900 rounded-2xl md:rounded-3xl overflow-hidden relative"
            >
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-2 right-2 items-center justify-center bg-white rounded-full h-8 w-8 md:h-6 md:w-6 z-50 shadow-lg"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              {active.src && (
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-48 sm:h-56 md:h-64 rounded-t-2xl md:rounded-tr-lg md:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>
              )}

              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-3 p-4 md:p-6">
                  <div className="flex-1">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-lg md:text-xl text-neutral-700 dark:text-neutral-200 mb-1"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.title}-${id}`}
                      className="text-sm md:text-base text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  {active.ctaText && active.ctaLink && (
                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 md:py-3 text-sm rounded-full font-bold bg-gray-900 text-white hover:bg-red-600 transition-colors whitespace-nowrap"
                    >
                      {active.ctaText}
                    </motion.a>
                  )}
                </div>
                
                <div className="px-4 md:px-6 pb-6">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-sm md:text-base dark:text-neutral-400 leading-relaxed"
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      
      <ul className="max-w-full md:max-w-2xl mx-auto w-full flex flex-col gap-3 md:gap-4">
        {cards.map((card) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 md:p-6 flex flex-col md:flex-row justify-between items-center hover:bg-gray-900/50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer transition-colors"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center md:items-start w-full md:w-auto">
              {card.src && (
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <img
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-32 w-32 sm:h-40 sm:w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                  />
                </motion.div>
              )}
              <div className="flex-1">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-base md:text-lg text-neutral-100 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.title}-${id}`}
                  className="text-sm md:text-base text-neutral-400 dark:text-neutral-400 text-center md:text-left mt-1"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            {card.ctaText && (
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-red-700 hover:text-white text-black mt-4 md:mt-0 transition-colors"
              >
                {card.ctaText}
              </motion.button>
            )}
          </motion.div>
        ))}
      </ul>
    </motion.div>
  );
}

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "React",
    title: "EV-Car",
    src: "/assets/evcar.png",
    ctaText: "Visit",
    ctaLink: "https://ev-car-webpage-e463.vercel.app/",
    content: () => {
      return (
        <p>
          A modern electric vehicle showcase website built with React. Features smooth animations,
          responsive design, and an intuitive user interface to explore the latest EV models and
          their specifications.
        </p>
      );
    },
  },
  {
    description: "React.js, React Smooth Scroll, EmailJS, Vercel",
    title: "Edusity",
    src: "/assets/edusity.png",
    ctaText: "Visit",
    ctaLink: "https://edusity-website-pi.vercel.app/",
    content: () => {
      return (
        <p>
          Built a fully responsive React.js website with a clean component-based architecture, smooth
          section-to-section navigation using React Smooth Scroll, and a functional contact form with
          email integration. Deployed the application on Vercel for fast performance and reliable global
          access.
        </p>
      );
    },
  },
  {
    description: "HTML, CSS, JavaScript",
    title: "To Do List",
    src: "/assets/todolist.png",
    ctaText: "Visit",
    ctaLink: "https://to-do-list-app-blush-nu.vercel.app/",
    content: () => {
      return (
        <p>
          A clean and functional to-do list application built with vanilla JavaScript. Features include
          adding, editing, and deleting tasks, marking tasks as complete, and persistent storage using
          local storage. The app features a minimalist design with smooth animations for a delightful
          user experience.
        </p>
      );
    },
  },
  {
    description: "HTML, CSS, JavaScript",
    title: "Netflix Clone UI",
    src: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&q=80",
    ctaText: "Visit",
    ctaLink: "https://ui-netflix-clone.vercel.app/",
    content: () => {
      return (
        <p>
          A pixel-perfect clone of the Netflix user interface, showcasing advanced CSS skills and
          responsive design principles. Features include a dynamic hero section, scrollable movie rows,
          hover effects, and a fully responsive layout that adapts seamlessly across all device sizes.
        </p>
      );
    },
  },
  {
    description: "Python, FastAPI, Scikit-Learn, Streamlit",
    title: "Insurance Premium Predictor",
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
    ctaText: "Visit",
    ctaLink: "#",
    content: () => {
      return (
        <p>
          Developed a machine-learning web app to predict insurance premium categories using user
          demographic and lifestyle inputs. Built a FastAPI backend for data validation, feature
          engineering (BMI, age group, lifestyle risk), and model inference, ensuring smooth API–frontend
          integration and optimized data flow for fast, accurate predictions.
        </p>
      );
    },
  },
];