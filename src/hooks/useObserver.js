const useObserver = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
      });
    },
    { threshold: 0.2 }
  );
  return { observer };
};

export default useObserver;
