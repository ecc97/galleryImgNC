"use client";
import Select from "../../atoms/select/Select";
import { useRouter, useSearchParams } from "next/navigation";

const orientations = [
  { value: "landscape", label: "Horizontal" },
  { value: "portrait", label: "Vertical" },
  { value: "square", label: "Cuadrado" },
];

const sizes = [
  { value: "large", label: "Grande (24MP)" },
  { value: "medium", label: "Mediano (12MP)" },
  { value: "small", label: "Pequeño (4MP)" },
];

const colors = [
  { value: "red", label: "Rojo" },
  { value: "orange", label: "Naranja" },
  { value: "yellow", label: "Amarillo" },
  { value: "green", label: "Verde" },
  { value: "turquoise", label: "Turquesa" },
  { value: "blue", label: "Azul" },
  { value: "violet", label: "Violeta" },
  { value: "pink", label: "Rosa" },
  { value: "brown", label: "Marrón" },
  { value: "black", label: "Negro" },
  { value: "gray", label: "Gris" },
  { value: "white", label: "Blanco" },
];


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
    <div className="flex flex-nowrap flex-col gap-4 mb-4 md:flex-wrap md:flex-row">
      <Select
        label="Orientación"
        value={searchParams.get("orientation") || ""}
        options={orientations}
        onChange={(value) => handleFilterChange("orientation", value)}
      />
      <Select
        label="Tamaño"
        value={searchParams.get("size") || ""}
        options={sizes}
        onChange={(value) => handleFilterChange("size", value)}
      />
      <Select
        label="Color"
        value={searchParams.get("color") || ""}
        options={colors}
        onChange={(value) => handleFilterChange("color", value)}
      />
    </div>
  );
}
