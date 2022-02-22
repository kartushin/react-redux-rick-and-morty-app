const CharListItem = ({name, image, url, status, species, gender}) => {
    
    return (
            <div className="p-4">
                <div className = "flex-auto flex space-x-3">
                    <div className = "flex items-center justify-center rounded-md border border-gray-300">
                        <div className = "flex flex-col md:flex-row flex-wrap content-center">
                            <img
                                className="block h-60 md:h-full w-full md:w-6/12 object-cover object-center"
                                src={image}
                                alt={url}
                            />
                        </div>
                        <div>
                            <p>{name}</p>
                            <p>{status}</p>
                            <p>{species}</p>
                            <p>{gender}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default CharListItem;