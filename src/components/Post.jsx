import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { FiMoreVertical, FiAlertTriangle } from "react-icons/fi";
import { Trash2, Edit } from "lucide-react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { post1 ,semi} from "../assets";

function Post() {
  const userName = "semicolon";
  const userImage = semi; // Static user image
  const timestamp = "6 hours ago"; // Static timestamp
  const text = "This is a static post. No dynamic interactions."; // Static post text
  const images = [
    post1, // Static image
  ];

  const media = [
    ...images.map((url) => ({ type: "image", url })),
  ];

  return (
    <div className="post-container relative bg-gray-200 p-6 rounded-xl shadow-lg mb-6 w-full max-w-xl mx-auto">
      <div className="flex justify-between items-center mb-4 mt-2">
        <div className="flex items-center">
            <img
              src={userImage}
              alt={`${userName}'s avatar`}
              className="w-10 h-10 rounded-full mr-3 object-cover"
            />
          <span className="text-lg font-semibold text-[#3B5F5D]">
            {userName}
          </span>
        </div>
        <span className="text-sm text-gray-500">{timestamp || "Just now"}</span>
      </div>

      <p className="text-left text-gray-800 mb-4">{text}</p>

      {media.length > 0 && (
        <div className="relative w-[calc(100%+3rem)] -mx-6 mb-4">
          <div
            className="flex overflow-x-hidden scroll-smooth transition-all duration-300"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {media.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full aspect-square overflow-hidden"
                style={{ scrollSnapAlign: "start" }}
              >
                  <img
                    src={item.url}
                    alt={`media-${i}`}
                    className="w-full h-full object-cover"
                  />
              </div>
            ))}
          </div>
        </div>
      )}

      <hr />

      <div className="flex w-full mt-4">
        <button
          disabled
          className="w-1/2 px-4 py-3 rounded-l-lg font-bold flex items-center justify-center gap-2 text-black bg-gray-200 hover:bg-gray-300"
        >
          <FaThumbsUp className="text-black" />
          Like
        </button>
        <button
          disabled
          className="w-1/2 px-4 py-3 rounded-r-lg font-bold flex items-center justify-center gap-2 text-black bg-gray-200 hover:bg-gray-300"
        >
          <FiAlertTriangle className="text-black" />
          Report
        </button>
      </div>
    </div>
  );
}

export default Post;
