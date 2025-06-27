import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { GoogleGenAI } from "@google/genai"
import { SetStateAction } from "react";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const ai = new GoogleGenAI({
  apiKey: process.env.NEXT_PUBLIC_GEMINI_KEY,
});


export const identifyImage = async (image: File | null, setLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void; }, setResult: (arg0: string) => void) => {
  if (!image) return;

  setLoading(true);


  try {
    const imageParts = await fileToGenerativePart(image);

    ai.models
      .generateContent({
        model: "gemini-2.5-flash",
        contents: imageParts,
      })
      .then((response): any => {
        console.log(response);
        if (response?.candidates?.[0]?.content?.parts) {
          for (const part of response.candidates[0].content.parts) {
            // Based on the part type, either show the text or save the image
            if (part.text) {
              let imageText = part.text;
              console.log(imageText);
              setResult(formatText(imageText));
            } else if (part.inlineData) {
              // image = part.inlineData.data;
              // console.log(image);
            }
          }
        }
      })
      .finally(() => {
        setLoading(false);
      });
  } catch (error) {
    console.error("Error identifying image:", error);
    if (error instanceof Error) {
      setResult(`Error identifying image: ${error.message}`);
    } else {
      setResult("An unknown error occurred while identifying the image.");
    }
  }
};

async function fileToGenerativePart(file: File): Promise<{
  inlineData: { data: string; mimeType: string };
}> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64data = reader.result as string;
      const base64Content = base64data.split(",")[1];
      resolve({
        inlineData: {
          data: base64Content,
          mimeType: file.type,
        },
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const formatText = (response: string) => {
  const text = response
    .trim()
    .replace(/```/g, "")
    .replace(/\*\*/g, "")
    .replace(/\*/g, "")
    .replace(/-\s*/g, "")
    .replace(/\n\s*\n/g, "\n");
  return text;
};