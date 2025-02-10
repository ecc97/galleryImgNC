"use client";
import React from "react";
import Image from "next/image";
import { Photo } from "@/interfaces/gallery";
import { IoMdClose } from "react-icons/io";
import './imagemodal.sass'
import Link from "next/link";

interface ImageModalProps {
  photo: Photo | null;
  onClose: () => void;
}

export default function ImageModal({ photo, onClose }: ImageModalProps) {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full relative">
        <button className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-900" onClick={onClose}>
            <IoMdClose size={24}/>
        </button>
        <Image src={photo.src.original} alt={photo.photographer} width={600} height={400} className="rounded-t-lg img-modal" />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-black">{photo.photographer}</h2>
          <div className="flex flex-col mt-2">
            <Link href={photo.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Ver en Pexels
            </Link>
            <Link href={photo.photographer_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              Perfil del fotógrafo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
