"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// Valores permitidos según la API de Pexels
const orientations = ["landscape", "portrait", "square"];
const sizes = ["large", "medium", "small"];
const colors = ["red", "orange", "yellow", "green", "turquoise", "blue", "violet", "pink", "brown", "black", "gray", "white"];

// Diccionario para traducir al español
const orientationLabels: Record<string, string> = {
  landscape: "Horizontal",
  portrait: "Vertical",
  square: "Cuadrado",
};

const sizeLabels: Record<string, string> = {
  large: "Grande (24MP)",
  medium: "Mediano (12MP)",
  small: "Pequeño (4MP)",
};

const colorLabels: Record<string, string> = {
  red: "Rojo",
  orange: "Naranja",
  yellow: "Amarillo",
  green: "Verde",
  turquoise: "Turquesa",
  blue: "Azul",
  violet: "Violeta",
  pink: "Rosa",
  brown: "Marrón",
  black: "Negro",
  gray: "Gris",
  white: "Blanco",
};


export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  

  const handleFilterChange = (type: "orientation" | "size" | "color", value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (value) {
      params.set(type, value);
    } else {
      params.delete(type);
    }
    
    router.push(`/results?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-wrap gap-4 mb-4">
      {/* Filtro de Orientación */}
      <select
        value={searchParams.get("orientation") || ""}
        onChange={(e) => handleFilterChange("orientation", e.target.value)}
        className="p-2 border rounded-md text-black"
      >
        <option value="">Cualquier orientación</option>
        {orientations.map((orientation) => (
          <option key={orientation} value={orientation}>{orientationLabels[orientation]}</option>
        ))}
      </select>

      {/* Filtro de Tamaño */}
      <select
        value={searchParams.get("size") || ""}
        onChange={(e) => handleFilterChange("size", e.target.value)}
        className="p-2 border rounded-md text-black"
      >
        <option value="">Cualquier tamaño</option>
        {sizes.map((size) => (
          <option key={size} value={size}>{sizeLabels[size]}</option>
        ))}
      </select>

      {/* Filtro de Color */}
      <select
        value={searchParams.get("color") || ""}
        onChange={(e) => handleFilterChange("color", e.target.value)}
        className="p-2 border rounded-md text-black"
      >
        <option value="">Cualquier color</option>
        {colors.map((color) => (
          <option key={color} value={color}>{colorLabels[color]}</option>
        ))}
      </select>
    </div>
  );
}
