import Image from "next/image";
import { useEffect, useState, useRef } from "react";

interface Story {
  id: string;
  url: string;
}

const InstaGramStory = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const timeoutRefs = useRef<NodeJS.Timeout[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    return () => {
      timeoutRefs.current.forEach((timeoutId) => {
        clearTimeout(timeoutId);
      });
      timeoutRefs.current = [];
      // Clean up all object URLs on unmount
      stories.forEach((story) => {
        URL.revokeObjectURL(story.url);
      });
    };
  }, [stories]);

  const handleSToryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    console.log(file, "file");
    const id = crypto.randomUUID();
    const url = URL.createObjectURL(file); // make sure this should be remove as well because this is webapi so this will take memorie of browser
    console.log(url, "url");

    // Add new story to the beginning
    setStories((prev: Story[]) => {
      const newStories = [{ id, url }, ...prev];

      // Set up timeout to remove this story after 2 seconds
      const timeoutId = setTimeout(() => {
        setStories((currentStories) => {
          const filteredStories = currentStories.filter((story) => {
            if (story.id === id) {
              URL.revokeObjectURL(story.url);
              return false;
            }
            return true;
          });
          return filteredStories;
        });
      }, 2000);

      timeoutRefs.current.push(timeoutId);
      return newStories;
    });

    // Reset file input so the same file can be selected again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
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
          ref={fileInputRef}
          type="file"
          hidden
          id="fileInput"
          onChange={(e) => handleSToryUpload(e)} // onchange is not work if same value of file
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
