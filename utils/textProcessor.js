import React from "react";

// Utility function to automatically bold specific phrases in text
export const boldSpecificText = (text, phrasesToBold = []) => {
  if (!text || !phrasesToBold || phrasesToBold.length === 0) {
    return text;
  }

  let result = [text];

  phrasesToBold.forEach((phrase) => {
    const newResult = [];
    result.forEach((segment) => {
      if (typeof segment === "string") {
        // Escape special characters in the phrase for regex safety
        const escapedPhrase = phrase.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const regex = new RegExp(`(${escapedPhrase})`, "gi"); // 'gi' for global and case-insensitive
        const parts = segment.split(regex);

        parts.forEach((part, index) => {
          if (regex.test(part)) {
            // If this part matches the phrase (case-insensitive)
            newResult.push(
              <strong key={`${phrase}-${index}-${Math.random()}`}>
                {part}
              </strong>
            );
          } else {
            newResult.push(part);
          }
        });
      } else {
        newResult.push(segment); // Keep non-string (already bolded) segments
      }
    });
    result = newResult;
  });

  return result;
};

// Default phrases to bold (can be customized)
export const defaultPhrasesToBold = [
  "Business Venture Canada",
  "Substantial Investment",
  "Economic Benefit",
  "Job Creation",
  "Business Viability",
  "MPNP",
  "AINP",
  "E-2",
  "EB-5",
  "L-1",
  "BCPNP",
  "Exploratory Visit",
  "Pathway to PR",
  "Economic Priorities",
  "Regional Development",
  "Investment & Ownership",
  "NLPNP",
];
