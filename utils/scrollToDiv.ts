type refs = {
  current: HTMLDivElement[] | null[];
};

export const scrollToDiv = (refs: refs, index: number) => {
  if (refs.current[index]) {
    refs?.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
