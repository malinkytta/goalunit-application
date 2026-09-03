export const formatPosition = (position: string | null | undefined): string => {
  if (!position) return "Position unknown";
  return position
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

