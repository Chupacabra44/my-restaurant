import { useState, useEffect, useRef } from "react";
import styles from "./AnimatedCounter.module.scss";

const AnimatedCounter = () => {
  const [count, setCount] = useState(1);
  const [started, setStarted] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const end = 50;
    const duration = 1000;
    const stepTime = Math.max(duration / end, 20);

    let current = 1;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [started]);

  return (
    <div className={styles.Counter} ref={ref}>
      {count}
    </div>
  );
};

export default AnimatedCounter;
