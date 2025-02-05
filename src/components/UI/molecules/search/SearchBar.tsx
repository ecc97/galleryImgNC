"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (query.trim()) {
            router.push(`/?query=${query}`);
        }
    };

    return (
        <div className="flex gap-2 mb-4">
            <Input
                type="text"
                name="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar imágenes..."
                className="w-full"
            />
            <Button onClick={handleSearch} className="bg-blue-500 text-white">
                Buscar
            </Button>
        </div>
    );
}   