import FileUploader from '@/components/FileUploader';
import AudioPlayer from '@/components/AudioPlayer';
import { processAudio } from '@/lib/audioProcessor';

export default function Home() {
  const handleFileUpload = async (file: File) => {
    try {
      const result = await processAudio(file);
      console.log('Processed audio:', result);
    } catch (error) {
      console.error('Error processing audio:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-text">
      <h1 className="text-4xl font-bold mb-8">AI Vocal Remover</h1>
      <p className="text-lg mb-8">
        Upload an audio file to separate vocals from the instrumental track.
      </p>
      <FileUploader onUpload={handleFileUpload} />
      <div className="mt-8">
        <AudioPlayer src="/path/to/processed/audio.mp3" />
      </div>
    </div>
  );
}
