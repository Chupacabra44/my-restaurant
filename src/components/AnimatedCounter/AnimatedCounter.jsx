import { useState, useEffect, useRef } from "react";
import styles from "./AnimatedCounter.module.scss";

const AnimatedCounter = ({
  end,
  label,
  textBold,
  textNormal,
  breakWord = false,
}) => {
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

    const duration = 1000;
    const stepTime = Math.max(duration / end, 20);

    let current = 1;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);

      if (current >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <div className={styles.Counter} ref={ref}>
      <div className={styles.CounterText}>
        <p className={styles.CounterTextSmall}>
          <strong>{textBold}</strong>
          {breakWord && <br />}
          <span>{textNormal}</span>
        </p>
        <div className={styles.CounterNumber}>
          {count} {label}+
        </div>
      </div>
    </div>
  );
};

export default AnimatedCounter;
