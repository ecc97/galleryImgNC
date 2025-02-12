"use client"
import React from 'react'
import Button from '../../atoms/button/Button'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationProps {
    totalPages: number,
    // currentPage: number,
    // onChangePage?: (page: number) => void,
}

function Pagination({ totalPages }: PaginationProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = Number(searchParams.get("page") ?? "1");
    const goToChangePage = (newPage: number) => {
        if (newPage < 1 || newPage > totalPages) return;
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());
        router.push(`?${params.toString()}`, { scroll: false });
    };
    
    return (
        <div className="flex justify-center mt-6 gap-4">
            <Button
                onClick={() => goToChangePage(currentPage - 1)}
                disabled={currentPage <= 1}
                className={`px-4 py-2 rounded ${currentPage <= 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-black"}`}>
                &#10094;
            </Button>
            <span className="px-4 py-2">Página {currentPage} de {totalPages}</span>
            <Button
                onClick={() => goToChangePage(currentPage + 1)}
                className={`px-4 py-2 rounded ${currentPage >= totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white"}`}
                disabled={currentPage >= totalPages}
                >
                &#10095;
            </Button>
        </div>
    )
}

export default Pagination
