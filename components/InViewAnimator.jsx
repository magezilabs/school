// components/InViewAnimator.js
import { useEffect } from 'react';

const InViewAnimator = ({ children }) => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-view');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return <>{children}</>;
};

//export default InViewAnimator;
