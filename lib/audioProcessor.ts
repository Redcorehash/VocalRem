export async function processAudio(file: File) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ url: '/path/to/processed/audio.mp3' });
    }, 2000);
  });
}
