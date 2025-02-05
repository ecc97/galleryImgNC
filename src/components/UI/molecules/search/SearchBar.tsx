"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "../../atoms/input/Input";
import Button from "../../atoms/button/Button";
import { IoMdSearch } from "react-icons/io";


export default function SearchBar() {
    const [query, setQuery] = useState("");
    const router = useRouter();

    const handleSearch = () => {
        if (query.trim()) {
            router.push(`/?query=${query}`);
        }
    };

    return (
        <div className="flex gap-2 mb-4 justify-center">
            <div className="relative w-full max-w-md">
                <IoMdSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                    type="text"
                    name="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar imágenes..."
                    className="w-full pl-10 h-full"
                />
            </div>
            <Button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 transition">
                Buscar
            </Button>
        </div>
    );
}
