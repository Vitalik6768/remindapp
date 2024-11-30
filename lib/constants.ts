export enum CollectionsColors {
  Sunset = "bg-gradient-to-r from-red-500 to-orange-500", // Sunset gradient
  Aurora = "bg-gradient-to-r from-red-500 to-pink-500", // Aurora gradient
  Sakura= "bg-gradient-to-r from-pink-500 to-orange-500", // Aurora gradient


  // Rainbow gradient
}

export type CollectionsColor = keyof typeof CollectionsColors;

// Type alias for keys
