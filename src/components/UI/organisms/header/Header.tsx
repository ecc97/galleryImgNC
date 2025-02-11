import React from "react";
import "./header.sass";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const imageBackgrounds = [
  "https://images.pexels.com/photos/29847092/pexels-photo-29847092.jpeg",
  "https://images.pexels.com/photos/30501785/pexels-photo-30501785.jpeg",
  "https://images.pexels.com/photos/355770/pexels-photo-355770.jpeg",
  "https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg",
  "https://images.pexels.com/photos/2104151/pexels-photo-2104151.jpeg",
  "https://images.pexels.com/photos/3227984/pexels-photo-3227984.jpeg",
  "https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg",
  "https://images.pexels.com/photos/2468773/pexels-photo-2468773.jpeg",
  "https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg",
  "https://images.pexels.com/photos/1707213/pexels-photo-1707213.jpeg",
];

function Header({ children, className }: HeaderProps) {
  const randomImage = imageBackgrounds[Math.floor(Math.random() * imageBackgrounds.length)];

  return (
    <header
      className={`header ${className}`}
      style={{ backgroundImage: `url(${randomImage})` }}
    >
      {children}
    </header>
  );
}

export default Header;
