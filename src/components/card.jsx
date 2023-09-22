const Card = ({
  src,
  handleDragStart,
  isDragging,
  getStyles,
  handleDragEnter,
}) => {
  return (
    <>
      <div
        className="h-[13rem] w-[9rem] lg:h-[15rem] lg:w-[10rem] hover:shadow-2xl rounded-tr-2xl rounded-bl-2xl"
        onDragStart={handleDragStart}
        onDragEnter={isDragging ? handleDragEnter : null}
      >
        <img
          alt={`grid-${src}`}
          src={src}
          className={
            isDragging
              ? getStyles
              : 'h-full w-full object-cover brightness-100 cursor-pointer rounded-tr-2xl rounded-bl-2xl'
          }
        />
      </div>
    </>
  );
};

export default Card;
