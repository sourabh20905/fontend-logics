import Image from "next/image";
import { useState } from "react";

const FileUpload = () => {
  const [isDraging, setIsDragging] = useState(false);

  const [files, setFiles] = useState<File[]>([]);

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    console.log(e.dataTransfer.files, "files");
    if (e.dataTransfer.files) {
      setFiles([...files, ...e.dataTransfer.files]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    console.log(selectedFiles);
    if (selectedFiles) {
      setFiles([...files, ...selectedFiles]);
    }
    console.log(files, "files");
  };

  return (
    <div
      className={`border border-gray-300 ${
        isDraging ? "!border-blue-500" : ""
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDragEnter={handleDragEnter}
      onDrop={handleDrop}
    >
      <div>File Upload</div>
      <input
        type="file"
        multiple
        id="file-upload"
        className="hidden"
        onChange={handleFileChange}
      />
      <label htmlFor="file-upload">Upload File</label>
      <div>preview files</div>
      {files.map((file) => (
        <div key={file.name}>
          <Image
            src={URL.createObjectURL(file)}
            alt={file.name}
            width={30}
            height={30}
          />
        </div>
      ))}
    </div>
  );
};

export default FileUpload;
