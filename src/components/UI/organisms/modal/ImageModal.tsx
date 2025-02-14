"use client";
import React from "react";
import Image from "next/image";
import Button from "../../atoms/button/Button";
import { Photo } from "@/interfaces/gallery";
import { IoMdClose, IoMdDownload } from "react-icons/io";
import { CgPexels } from "react-icons/cg";
import { RxAvatar } from "react-icons/rx";
import './imagemodal.sass'
import Link from "next/link";

interface ImageModalProps {
  photo: Photo | null;
  onClose: () => void;
}

export default function ImageModal({ photo, onClose }: ImageModalProps) {
  if (!photo) return null;

  const goToDownload = async () => {
    try {
      const response = await fetch(photo.src.original);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = `pexels-${photo.id}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error descargando la imagen:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full relative">
        <Button className="absolute top-2 right-2 p-2 text-gray-600 hover:text-gray-900" onClick={onClose}>
            <IoMdClose size={24}/>
        </Button>
        <Image src={photo.src.original} alt={photo.alt} width={600} height={400} className="rounded-t-lg img-modal" />
        <div className="p-4">
          <h2 className="text-lg font-semibold text-black">{photo.photographer}</h2>
          <div className="flex flex-col mt-2 gap-2">
            <Link href={photo.url} target="_blank" rel="noopener noreferrer" className="hover:opacity-80 link-pxl bg-link-pxl-primary">
                <CgPexels size={24} className="inline-block mr-2"/>
                Ver en Pexels
            </Link>
            <Link href={photo.photographer_url} target="_blank" rel="noopener noreferrer" className="bg-link-pxl-secondary hover:opacity-80 link-pxl">
                <RxAvatar size={24} className="inline-block rounded-full mr-2" />
                Perfil del fotógrafo
            </Link>
            <Button onClick={goToDownload} className="bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2 flex items-center justify-center gap-2">
                <IoMdDownload size={20} />
                Descargar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
