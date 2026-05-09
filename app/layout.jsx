import "./globals.css";

export const metadata = {
  title: "Rich Craft Designs | Custom Laser Engraving, Woodwork & Metal Art",
  description:
    "Custom handcrafted laser engraving, woodworking, metal art, gaming accessories, slate coasters, signs, and personalized gifts by Rich Craft Designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
