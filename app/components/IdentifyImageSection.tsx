"use client";

import React, { useState } from "react";
import { identifyImage } from "../../lib/utils";

type IdentifyImageSectionProps = {
  setResult: (result: string) => void;
};

export const IdentifyImageSection = ({
  setResult,
}: IdentifyImageSectionProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
      setPreviewURL(URL.createObjectURL(file));
    }
  };

  return (
    <section className="flex justify-center mt-8 px-4 mb-4">
      <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Drop an Image to Analyze
        </h2>

        {/* Drag & Drop Area */}
        <label
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-8 cursor-pointer transition-all mb-6 ${
            dragActive
              ? "border-teal-500 bg-teal-50"
              : "border-gray-300 bg-gray-50"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-400 mb-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16l-4-4m0 0l4-4m-4 4h18"
            />
          </svg>
          <p className="text-gray-600 mb-2">
            Drag & drop your image here or{" "}
            <span className="text-teal-600 underline">click to upload</span>
          </p>
          <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </label>

        {/* File Info */}
        {selectedFile && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 mb-2">
              Selected:{" "}
              <span className="font-medium text-gray-800">
                {selectedFile.name}
              </span>
            </p>
            {previewURL && (
              <img
                src={previewURL}
                alt="Preview"
                className="mx-auto mt-2 max-h-64 object-contain rounded shadow"
              />
            )}
          </div>
        )}
        {error && (
          <p className="text-red-600 text-sm text-center mb-4">{error}</p>
        )}

        {/* Analyze Button */}
        <div className="mt-6 flex justify-center">
          <button
            className={`bg-teal-600 text-white px-6 py-3 rounded-lg font-medium shadow transition flex items-center justify-center gap-2 ${
              loading ? "opacity-80 cursor-not-allowed" : "hover:bg-teal-700"
            }`}
            onClick={() => {
              if (!selectedFile) {
                setError("Please upload an image before analyzing.");
                return;
              }
              setError(null);
              identifyImage(selectedFile, setLoading, setResult);
            }}
            disabled={loading}
          >
            {loading && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            )}
            {loading ? "Analyzing" : "Analyze Image"}
          </button>
        </div>
      </div>
    </section>
  );
};
