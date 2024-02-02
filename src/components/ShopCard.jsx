/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const ShopCard = ({name, author, price, image}) =>
{
    const [ fav, setFav ] = useState( false )
    const handleToggleFav = () =>
    {
        setFav(prevFav => !prevFav)
    }
    
    return (
        <div className="space-y-3 hover:scale-105 transition-all duration-200 border-[1px] p-3 rounded-md bg-slate-400 bg-opacity-50">
            {/* <!-- thumbnail --> */ }
            <div
                className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4"
            >
                <img className="max-w-[144px]" src={image} alt="book name" />
            </div>
            {/* <!-- info --> */ }
            <div className="space-y-3">
                <h4 className="text-lg font-bold lg:text-xl">{ name }</h4>
                <p className="text-xs lg:text-sm">By : <span>{ author }</span></p>
                <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold lg:text-xl">${ price }</h4>
                    {/* <!-- stars --> */ }
                    <div className="flex items-center space-x-1">
                        <img src="star.svg" />
                        <img src="star.svg" />
                        <img src="star.svg" />
                        <img src="star.svg" />

                        <span className="text-xs lg:text-sm">(4 Star)</span>
                    </div>
                    {/* <!-- stars ends --> */ }
                </div>

                <div className="flex items-center gap-3 text-xs lg:text-sm">
                    <button
                        className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                            />
                        </svg>

                        Add to Cart
                    </button>
                    <button
                        className={ `border-[1px] transition-all duration-200 flex min-w-[132px] items-center justify-center gap-1 rounded-md ${fav ? 'bg-[#DC2954]/[14%] text-[#DC2954]' : ' hover:bg-[#DC2954]/[24%] bg-slate-200 bg-opacity-50'
                            } py-1.5 lg:py-1.5 shadow-sm` }
                        onClick={ handleToggleFav }
                    >
                        <svg
                            width="16"
                            height="14"
                            viewBox="0 0 21 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18.0001 10.572L10.5001 18L3.00006 10.572C2.50536 10.0906 2.1157 9.51202 1.8556 8.87264C1.59551 8.23326 1.47062 7.54695 1.48879 6.85693C1.50697 6.16692 1.66782 5.48814 1.96121 4.86334C2.25461 4.23854 2.67419 3.68126 3.19354 3.22658C3.71289 2.77191 4.32076 2.42969 4.97887 2.22148C5.63697 2.01327 6.33106 1.94359 7.01743 2.0168C7.70379 2.09002 8.36756 2.30456 8.96693 2.64691C9.56631 2.98926 10.0883 3.452 10.5001 4.006C10.9136 3.45602 11.4362 2.99732 12.0352 2.65861C12.6341 2.31989 13.2966 2.10845 13.981 2.03752C14.6654 1.96659 15.3571 2.0377 16.0128 2.24639C16.6685 2.45509 17.2741 2.79687 17.7916 3.25036C18.3091 3.70386 18.7275 4.25929 19.0205 4.88189C19.3135 5.5045 19.4748 6.18088 19.4944 6.86871C19.5139 7.55653 19.3913 8.24099 19.1342 8.87925C18.8771 9.51751 18.491 10.0958 18.0001 10.578"
                                fill={`${fav? '#DC2954': 'white'}`}
                            />
                            <path
                                d="M18.0001 10.572L10.5001 18L3.00006 10.572C2.50536 10.0906 2.1157 9.51202 1.8556 8.87264C1.59551 8.23326 1.47062 7.54695 1.48879 6.85693C1.50697 6.16692 1.66782 5.48814 1.96121 4.86334C2.25461 4.23854 2.67419 3.68126 3.19354 3.22658C3.71289 2.77191 4.32076 2.42969 4.97887 2.22148C5.63697 2.01327 6.33106 1.94359 7.01743 2.0168C7.70379 2.09002 8.36756 2.30456 8.96693 2.64691C9.56631 2.98926 10.0883 3.452 10.5001 4.006C10.9136 3.45602 11.4362 2.99732 12.0352 2.65861C12.6341 2.31989 13.2966 2.10845 13.981 2.03752C14.6654 1.96659 15.3571 2.0377 16.0128 2.24639C16.6685 2.45509 17.2741 2.79687 17.7916 3.25036C18.3091 3.70386 18.7275 4.25929 19.0205 4.88189C19.3135 5.5045 19.4748 6.18088 19.4944 6.86871C19.5139 7.55653 19.3913 8.24099 19.1342 8.87925C18.8771 9.51751 18.491 10.0958 18.0001 10.578"
                                stroke="#DC2954"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Favourite
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShopCard;