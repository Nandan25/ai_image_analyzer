import React from "react";

type ImageDescriptionProps = {
  result: string | null;
};

export const ImageDescription: React.FC<ImageDescriptionProps> = ({
  result,
}) => {
  if (!result) return null;

  const lines = result.split("\n");

  return (
    <div className="bg-blue-50 p-8 border-t border-blue-100">
      <h3 className="text-2xl font-bold text-blue-800 mb-4">
        Image Information:
      </h3>
      <div className="prose prose-blue max-w-none">
        {lines.map((line, index) => {
          if (
            line.startsWith("Important Information:") ||
            line.startsWith("Other Information:")
          ) {
            return (
              <h4
                key={index}
                className="text-xl font-semibold mt-4 mb-2 text-blue-700"
              >
                {line}
              </h4>
            );
          } else if (line.match(/^\d+\./) || line.trim().startsWith("-")) {
            return (
              <ul key={index} className="list-disc ml-6 mb-2">
                <li className="text-gray-700">{line}</li>
              </ul>
            );
          } else if (line.trim() !== "") {
            return (
              <p key={index} className="mb-2 text-gray-800">
                {line}
              </p>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};
