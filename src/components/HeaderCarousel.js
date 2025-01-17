import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons';

function HeaderCarousel() {
    const imageSources = ['/living-room.jpg', '/cover.jpg', '/chair-header.jpg'];
    const script = ['Modern Office Furniture', 'Classic Red Sofa', 'Bubble Egg Chair'];
    const [imgIndex, setImgIndex] = useState(0);
    const [scriptIndex, setScriptIndex] = useState(0);

    function moveRight() {
        setImgIndex((prevIndex) => (prevIndex + 1) % imageSources.length);
        setScriptIndex((prevIndex) => (prevIndex + 1) % script.length);
    }

    function moveLeft() {
        setImgIndex((prevIndex) =>
            prevIndex === 0 ? imageSources.length - 1 : prevIndex - 1
        );
        setScriptIndex((prevIndex) =>
            prevIndex === 0 ? script.length - 1 : prevIndex - 1
        );
    }

    return (
        <section className="relative animate__animated animate__fadeIn flex justify-center items-center" id="cover-image">
            <img
                src={imageSources[imgIndex]}
                alt="Cover Image"
                className="w-full h-96 shadow-md object-cover"
            />
            <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
                <button
                    id="button1"
                    className="bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-700"
                    onClick={moveLeft}
                >
                    <FontAwesomeIcon icon={faChevronLeft} className="text-white" />
                </button>
                <button
                    id="button2"
                    className="bg-gray-800 rounded-full p-2 shadow-md hover:bg-gray-700"
                    onClick={moveRight}
                >
                    <FontAwesomeIcon icon={faChevronRight} className="text-white" />
                </button>
            </div>
            <div className="text-wrapper absolute top-1/2 transform -translate-y-1/2 text-center w-5/6">
                <h1 className="drop-shadow-2xl opacity-75 text-white text-3xl font-bold">
                    {script[scriptIndex]}
                </h1>
            </div>
        </section>
    );
}

export default HeaderCarousel;