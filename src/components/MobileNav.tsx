"use client";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import Link from "next/link";
export default function MobileNav() {
  const [mobileNav, toggleMobileNav] = useCycle<boolean>(false, true);

  return (
    <div className="md:hidden flex">
      <motion.div
        transition={{ duration: 0.3 }}
        animate={mobileNav ? "open" : "closed"}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        variants={{
          open: { opacity: 1, backgroundColor: "#426BFD" },
          closed: { opacity: 1, backgroundColor: "#426BFD" },
        }}
        className="px-3 py-4 bg-[#426BFD] rounded-full z-10 relative"
      >
        <motion.button
          transition={{ duration: 0.3 }}
          animate={mobileNav ? "open" : "closed"}
          variants={{
            open: { rotate: 0 },
            closed: { rotate: 180 },
          }}
          onClick={() => toggleMobileNav()}
          className="flex flex-col space-y-1 z-[999]"
          aria-label="Toggle Menu"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 5, backgroundColor: "#fff" },
            }}
            className="w-5 h-px rounded-full bg-white block"
          ></motion.span>
          <motion.span
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
            className="w-5 h-px rounded-full bg-white block"
          ></motion.span>
          <motion.span
            variants={{
              open: { rotate: -45, y: -5, backgroundColor: "#fff" },
              closed: { rotate: 0 },
            }}
            className="w-5 h-px rounded-full  bg-white block"
          ></motion.span>
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {mobileNav && (
          <MotionConfig
            transition={{
              type: "spring",
              bounce: 0.5,
            }}
          >
            <motion.div
              key="mobileNav"
              variants={{
                open: {
                  x: "0%",
                  opacity: 1,
                  backgroundColor: "#4C3BCF",
                  transition: {
                    type: "spring",
                    bounce: 0.1,
                    when: "beforeChildren",
                  },
                },
                closed: {
                  x: "-100%",
                  opacity: 0,
                  backgroundColor: "#426BFD",
                  transition: {
                    when: "afterChildren",
                    type: "spring",
                    bounce: 0.1,
                  },
                },
              }}
              animate={mobileNav ? "open" : "closed"}
              initial="closed"
              exit="closed"
              className="fixed inset-0 p-6 space-y-6 flex flex-col justify-center h-svh bg-[#4058f6] font-bold text-3xl text-white"
            >
              <motion.div
                variants={{
                  open: { y: "0%", opacity: 1 },
                  closed: { y: "25%", opacity: 0 },
                }}
                className="flex flex-col mb-72 ml-2 gap-6 items-start text-[#F4CE14]"
              >
                <Link
                  onClick={() => toggleMobileNav()}
                  className="nav-link hover:text-white transition-colors"
                  href={"#features"}
                >
                  Features
                </Link>
                <Link
                  onClick={() => toggleMobileNav()}
                  className="nav-link hover:text-white transition-colors"
                  href={"#pricing"}
                >
                  Pricing
                </Link>
                <Link
                  onClick={() => toggleMobileNav()}
                  className="nav-link hover:text-white transition-colors"
                  href={"#Testimonials"}
                >
                  Testimonials
                </Link>
                <Link
                  onClick={() => toggleMobileNav()}
                  className="nav-link hover:text-white transition-colors"
                  href={"#Contact"}
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </div>
  );
}
