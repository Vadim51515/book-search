import { availableImageKeys } from "./data";

export const getOptimalPicture = (
  size: "min" | "max",
  imageLinks?: ImageLinksType,
) => {
  if (!imageLinks) return;
  let value: string | undefined = undefined;
  availableImageKeys.forEach((imgLinkKey) => {
    if (size === "max") {
      if (imageLinks[imgLinkKey] && !value) {
        value = imageLinks[imgLinkKey];
      }
    } else {
      if (imageLinks[imgLinkKey]) {
        value = imageLinks[imgLinkKey];
      }
    }
  });

  return value;
};
