"use client"
import React from 'react'
import { GalleryResponse } from '@/interfaces/gallery'
import SearchBar from '../molecules/search/SearchBar'
import Image from 'next/image'

interface GalleryTemplateProps {
    dataGallery: GalleryResponse
}

function GalleryTemplate({ dataGallery }: GalleryTemplateProps) {
    const images = dataGallery.photos || [];
    return (
        <main className="p-6">
            <h1 className="text-2xl font-bold mb-4">Galería de Imágenes</h1>
            <SearchBar />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((img: any) => (
                    <div key={img.id} className="relative w-full h-60">
                        <Image src={img.src.medium} alt={img.photographer} layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>
                ))}
            </div>
        </main>
    )
}

export default GalleryTemplate
