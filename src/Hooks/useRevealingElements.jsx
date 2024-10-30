import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function useRevealingElements(sectionRef) {
  const { ref: inViewRef, inView } = useInView({
    root: null,
    threshold: 0.15,
    triggerOnce: true,
  });

  useEffect(() => {
    inViewRef(sectionRef.current);
  }, [sectionRef.current]);

  return inView;
}
