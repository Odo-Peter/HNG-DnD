import { useState, useRef } from 'react';

import Card from './card';
import Loader from './Loader';

const SearchFeed = ({ image_src }) => {
  const [list, setList] = useState(image_src);
  const [isDragging, setIsDragging] = useState(false);

  const dragWrapperItem = useRef();
  const NodeOfDraggedItem = useRef();

  const handleDragStart = (e, params) => {
    dragWrapperItem.current = params;
    NodeOfDraggedItem.current = e.target;

    NodeOfDraggedItem.current.addEventListener('dragend', handleDragEnd);
    setTimeout(() => {
      setIsDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, params) => {
    const currItem = dragWrapperItem.current;
    if (e.target !== NodeOfDraggedItem) {
      setList((prevArray) => {
        let nextArray = JSON.parse(JSON.stringify(prevArray));

        nextArray.splice(params.idx, 0, nextArray.splice(currItem.idx, 1)[0]);
        dragWrapperItem.current = params;
        return nextArray;
      });
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    NodeOfDraggedItem.current.removeEventListener('dragend', handleDragEnd);

    //clean up of the crumbs from the refs
    dragWrapperItem.current = null;
    NodeOfDraggedItem.current = null;
  };

  const getStyles = (params) => {
    const currItem = dragWrapperItem.current;

    if (!currItem) return null;
    if (currItem.idx === params.idx) {
      return 'h-full w-full object-cover brightness-0 cursor-pointer rounded-tr-2xl rounded-bl-2xl';
    }
    return 'h-full w-full object-cover brightness-100 cursor-pointer rounded-tr-2xl rounded-bl-2xl';
  };

  if (!list) {
    return (
      <div className="flex justify-start items-center h-full py-20 mb-10">
        <Loader />
      </div>
    );
  }

  return (
    <section className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 mb-8 items-start">
      {list.map((img, idx) => (
        <Card
          key={img.src}
          src={img.src}
          handleDragStart={(e) => handleDragStart(e, { idx })}
          isDragging={isDragging}
          handleDragEnter={(e) => handleDragEnter(e, { idx })}
          getStyles={getStyles({ idx })}
        />
      ))}
    </section>
  );
};

export default SearchFeed;
