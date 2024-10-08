import React from 'react'

export const Card = ({ data }) => {
    const { name, capital, population, region, flag } = data;
    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="p-8 rounded-t-lg h-64 w-full" src={flag} alt="product image" />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-900 dark:text-white">Capital : {capital}</span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white">Region : {region}</span>
                </div>
            </div>
        </div>
    )
}
