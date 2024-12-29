interface AudioPlayerProps {
  src: string;
}

export default function AudioPlayer({ src }: AudioPlayerProps) {
  return (
    <div className="bg-secondary p-4 rounded-lg">
      <audio controls src={src} className="w-full">
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
