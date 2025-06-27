import React from "react";

export const WorkingSection = () => {
  return (
    <section id="decode-your-image" className="mt-16">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Decode Your Image
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Upload Your Image",
            text: "Easily drag and drop or select your image from your device.",
          },
          {
            title: "Let AI Do the Work",
            text: "Our intelligent system processes the image instantly to detect and understand its content.",
          },
          {
            title: "Get Smart Insights",
            text: "Receive clear, structured results—whether it’s object identification, text extraction, or content classification.",
          },
        ].map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="text-3xl font-bold text-blue-600 mb-4">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {step.title}
            </h3>
            <p className="text-gray-600">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
