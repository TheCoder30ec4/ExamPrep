export const preloadImages = (urls: string[]): Promise<void[]> => {
  const promises = urls.map((url) => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
      img.onerror = () => resolve(); // Resolve even on error to not block the app forever
    });
  });
  return Promise.all(promises);
};
