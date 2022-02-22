
const CharListItem = ({name, image, url, status, species, gender}) => {
    
    return (
        <button className="p-4">
            <div >
                <div className = "flex-auto flex space-x-3">
                    <div className = "flex items-center justify-center rounded-md border border-gray-300">
                        <div className = "flex flex-col flex-wrap">
                            <img
                                className="block h-60 md:h-full w-full md:w-6/12 object-cover object-center"
                                src={image}
                                alt={url}
                            />
                        </div>
                        <div className = "flex flex-col flex-wrap content-center">
                            <p className="block h-60 md:h-full w-full md:w-6/12 object-cover object-center">{name}</p>
                            <p className="block h-60 md:h-full w-full md:w-6/12 object-cover object-center">{status}</p>
                            <p className="block h-60 md:h-full w-full md:w-6/12 object-cover object-center">{species}</p>
                            <p className="block h-60 md:h-full w-full md:w-6/12 object-cover object-center">{gender}</p>
                        </div>
                    </div>
                </div>
            </div>
        </button>
    )
}

export default CharListItem;