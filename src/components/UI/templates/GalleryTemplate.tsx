"use client"
import React, { useState, useEffect } from "react";
import { GalleryResponse, Photo } from '@/interfaces/gallery'
import SearchBar from '../molecules/search/SearchBar'
import Image from 'next/image'

interface GalleryTemplateProps {
    dataGallery: GalleryResponse
}

function GalleryTemplate({ dataGallery }: GalleryTemplateProps) {
    const [loading, setLoading] = useState(true);
    const images = dataGallery.photos || [];

    useEffect(() => {
        setLoading(false);
    }, [dataGallery]);

    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-4 text-center">Galería de Imágenes</h1>
            <SearchBar />
            {loading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...Array(8)].map((_, index) => (
                    <div key={index} className="animate-pulse bg-gray-300 w-full h-60 rounded-lg"></div>
                ))}
            </div>
            ) : images.length === 0 ? (
                <p className="text-gray-500 text-center">No se encontraron imágenes.</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((img: Photo) => (
                        <div key={img.id} className="relative w-full h-60 overflow-hidden transition-transform duration-300 hover:scale-105">
                            <Image src={img.src.medium} alt={img.photographer} layout="fill" objectFit="cover" className="rounded-lg opacity-0 transition-opacity duration-500" onLoadingComplete={(img) => img.classList.remove("opacity-0")}/>
                        </div>
                    ))}
                </div>
            )}
        </main>
    )
}

export default GalleryTemplate
