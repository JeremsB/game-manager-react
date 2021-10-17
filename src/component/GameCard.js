
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
                    <span className="inline-block ring-4 bg-red-500 ring-gray-800 rounded-full text-sm font-medium tracking-wide text-gray-100 px-3 py-0.5">
                        {props.category}
                    </span>
                    <span className="flex h-min space-x-1 items-center rounded-full text-gray-100 bg-red-500 ring-4 ring-gray-800 px-3 py-0.5 text-xs font-medium">
                        {props.console}
                    </span>
                </div>
                <div className="py-2 px-4">
                    <h1 className="text-xl font-medium leading-6 tracking-wide text-gray-300 hover:text-blue-500 cursor-pointer">
                        <a href="blog/detail">{props.title}</a>
                    </h1>
                </div>
                <div className="px-4 pb-4 space-y-2">
                    <p className="text-gray-400 font-normal leading-5 tracking-wide">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default GameCard
