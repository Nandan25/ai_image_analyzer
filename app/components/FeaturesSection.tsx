import React from "react";

export const FeaturesSection = () => {
  return (
    <section id="features" className="mt-16">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "🔍 Smart Recognition",
            description:
              "Identify objects, scenes, or text with cutting-edge accuracy.",
          },
          {
            title: "⚡ Instant Analysis",
            description: "Get results in seconds with real-time processing.",
          },
          {
            title: "📄 Rich Insights",
            description:
              "Receive detailed metadata, descriptions, and context about your image.",
          },
          {
            title: "🧠 AI-Powered Accuracy",
            description:
              "Trained on millions of images for precise detection and minimal error rates.",
          },
          {
            title: "🎯 Easy-to-Use Interface",
            description:
              "A clean, intuitive design that works on all devices—no learning curve needed.",
          },
          {
            title: "🔐 Privacy First",
            description:
              "We don’t store your images—everything is processed securely and privately.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
