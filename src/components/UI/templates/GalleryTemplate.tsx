"use client"
import React, { useState, useEffect } from "react";
import { GalleryResponse, Photo } from '@/interfaces/gallery'
import Main from "../organisms/main/Main";
import Pagination from "../molecules/pagination/Pagination";
import ImageModal from "../organisms/modal/ImageModal";
import Image from 'next/image'

interface GalleryTemplateProps {
    dataGallery: GalleryResponse;
    currentPage?: number;
}

function GalleryTemplate({ dataGallery }: GalleryTemplateProps) {
    const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
    const [loading, setLoading] = useState(true);
    const images = dataGallery.photos || [];
    const totalPages = Math.ceil(dataGallery.total_results / dataGallery.per_page);

    useEffect(() => {
        setLoading(false);
    }, [dataGallery]);

    return (
        <Main className="p-6" id="allImages">
            <div className="p-3">
                <h1 className="text-2xl font-bold mb-4 text-center md:text-left">Explora su catálogo</h1>
            </div>
            {loading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="animate-pulse bg-gray-300 w-full h-60 rounded-lg"></div>
                    ))}
                </div>
            ) : images.length === 0 ? (
                <p className="text-gray-500 text-center">No se encontraron imágenes.</p>
            ) : (
                <>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {images.map((img: Photo) => (
                            <div key={img.id} className="relative w-full h-60 overflow-hidden transition-transform duration-300 hover:scale-105" onClick={() => setSelectedImage(img)}>
                                <Image src={img.src.medium} alt={img.alt} layout="fill" objectFit="cover" className="rounded-lg opacity-0 transition-opacity duration-500 cursor-pointer" onLoadingComplete={(img) => img.classList.remove("opacity-0")} />
                            </div>
                        ))}
                    </div>
                    {totalPages > 1 && <Pagination totalPages={totalPages} />}
                    <ImageModal photo={selectedImage} onClose={() => setSelectedImage(null)} />
                </>
            )}
        </Main>
    )
}

export default GalleryTemplate
