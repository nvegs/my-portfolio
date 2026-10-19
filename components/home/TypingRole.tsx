"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ROLES = [
  "Frontend Engineer",
  "React · Next · Angular",
  "Fintech & Enterprise UI",
];
const TYPE_MS = 85;
const DELETE_MS = 45;
const PAUSE_MS = 1800;

export function TypingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === full) {
      timeout = setTimeout(() => setDeleting(true), PAUSE_MS);
    } else if (deleting && text === "") {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? full.slice(0, text.length - 1)
              : full.slice(0, text.length + 1),
          );
        },
        deleting ? DELETE_MS : TYPE_MS,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <p className="mt-4 min-h-[2rem] text-xl text-muted sm:text-2xl sm:min-h-[2.25rem]">
      <span aria-live="polite">{text}</span>
      <motion.span
        className="ml-0.5 inline-block w-[2px] translate-y-0.5 bg-accent"
        style={{ height: "1.1em" }}
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        aria-hidden
      />
    </p>
  );
}
