import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface Story {
  id: string;
  url: string;
}

const InstaGramStory = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
      timeoutRefs.current = [];
    };
  }, []);

  const handleSToryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const id = crypto.randomUUID();
    const url = URL.createObjectURL(file || new Blob()); // make sure this should be remove as well because this is webapi so this will take memorie of browser
    console.log(url, "url");
    setStories((prev: Story[]) => [{ id, url }, ...prev]);
    const filteredStories = stories.filter((story) => {
      if (story.id === id) {
        URL.revokeObjectURL(story.url);
      } else {
        return true;
      }
    });
    const timeoutId = setTimeout(() => {
      setStories(filteredStories);
    }, 2000);

    console.log(timeoutId, "timeoutId");
    timeoutRefs.current.push(timeoutId);
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
        return (
          <Image
            key={item.id}
            src={item.url}
            alt="story"
            width={100}
            height={100}
          />
        );
      })}
    </div>
  );
};

export default InstaGramStory;
