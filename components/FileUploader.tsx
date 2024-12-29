import { useState } from 'react';

interface FileUploaderProps {
  onUpload: (file: File) => void;
}

export default function FileUploader({ onUpload }: FileUploaderProps) {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      onUpload(selectedFile);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        accept=".mp3,.wav"
        onChange={handleFileChange}
        className="mb-4"
      />
      {file && <p className="text-sm">Selected file: {file.name}</p>}
    </div>
  );
}
