import Image from "next/image";
import { useState } from "react";

interface Story {
  id: string;
  url: string;
}

const InstaGramStory = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const handleSToryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const id = crypto.randomUUID();
    const url = URL.createObjectURL(file || new Blob());
    console.log(url, "url");
    setStories((prev: Story[]) => [{ id, url }, ...prev]);
    console.log(stories);
  };
  return (
    <div>
      <div>
        <label
          htmlFor="fileInput"
          className="border border-gray-300 rounded-full p-2"
        >
          +
        </label>
        <input
          type="file"
          hidden
          id="fileInput"
          onChange={(e) => handleSToryUpload(e)}
        />
      </div>
      {stories.map((item) => {
        return <Image key={item.id} src={item.url} alt="story" width={100} height={100} />;
      })}
    </div>
  );
};

export default InstaGramStory;
