import React from 'react';

const SumarEmptyState = () => {
    return (
        <div className="grid justify-items-center">
            <h1 className="text-3xl text-primary-5 py-10">Ohh... Nu ai selectat niciun tip de analiză</h1>
            <p className="pb-10">
                Mergi <span className="font-bold hover:text-primary-5 cursor-pointer">înapoi</span> și adaugă analize în lista ta de analize
            </p>
        </div>
    )
}

export default SumarEmptyState;
