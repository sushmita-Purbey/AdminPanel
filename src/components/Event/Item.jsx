const Item = ({ event }) => {
    return (
      <div
        className="flex flex-col sm:flex-row gap-5 items-start sm:items-center 
                   bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md"
      >
        {/* Event Date */}
        <span
          className="bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-200 
                     p-2 rounded-lg h-16 w-16 font-bold text-center flex items-center justify-center 
                     text-sm sm:text-base md:text-lg lg:text-xl"
        >
          {event.date}
        </span>
  
        {/* Event Details */}
        <div className="flex-1">
          <h1 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100">
            {event.title}
          </h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
            {event.description}
          </p>
        </div>
      </div>
    );
  };
  
  export default Item;
  