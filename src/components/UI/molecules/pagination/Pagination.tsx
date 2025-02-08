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
    const currentPage = Number(searchParams.get("page")) || 1;
    const goToChangePage = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());
        router.push(`?${params.toString()}`);
    };
    
    return (
        <div className="flex justify-center mt-6 gap-4">
            <Button
                onClick={() => goToChangePage(currentPage - 1)}
                disabled={currentPage <= 1}
                className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 text-black">
                Anterior
            </Button>
            <span className="px-4 py-2">Página {currentPage} de {totalPages}</span>
            <Button
                onClick={() => goToChangePage(currentPage + 1)}
                className="px-4 py-2 bg-blue-500 text-white rounded"
                disabled={currentPage >= totalPages}
                >
                Siguiente
            </Button>
        </div>
    )
}

export default Pagination
