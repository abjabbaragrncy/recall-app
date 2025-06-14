import { Manrope, Poppins } from "next/font/google";

export const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const manrope = Manrope({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

// export const roboto_flex = Roboto_Flex({
//   weight: ["400", "500", "600", "700", "800"],
//   subsets: ["latin"],
// });
