import React from 'react';

const ImageModal = ({ image, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative">
                <img src={image} alt="Full Screen" className="max-w-full max-h-full" />
                <button
                    className="absolute top-4 right-4 text-black text-2xl"
                    onClick={onClose}
                >
                    &times;
                </button>
            </div>
        </div>
    );
};

export default ImageModal;
