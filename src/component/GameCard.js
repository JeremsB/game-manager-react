
function GameCard(props){
    return(
        <div className="flex justify-between m-6">
            <div className="flex flex-col h-full max-w-lg mx-auto bg-gray-800 rounded-lg">
                <img
                    className="rounded-lg rounded-b-none"
                    src={props.picture}
                    alt="thumbnail"
                    loading="lazy"
                />
                <div className="flex justify-between -mt-4 px-4">
                    <span className="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 pt-0.5">
                        {props.category}
                    </span>
                    <span className="flex h-min space-x-1 items-center rounded-full text-gray-400 bg-gray-800 py-1 px-2 text-xs font-medium">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <p className="text-blue-500 font-semibold text-xs">
                            {props.console}
                        </p>
                    </span>
                </div>
                <div className="py-2 px-4">
                    <h1 className="text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer">
                        <a href="blog/detail">{props.title}</a>
                    </h1>
                </div>
                <div className="px-4 space-y-2">
                    <p className="text-gray-400 font-normal leading-5 tracking-wide">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GameCard
