import { useRef, useState } from 'react';

import { imageConfig } from '../utils/filesConfig';
import upload from '../utils/fileAssets/cloud.png';

const UploadModal = ({
  handleCloseModal,
  handleUploadModal,
  handleFileChange,
}) => {
  const [fileList, setFileList] = useState([]);
  const inputRef = useRef(null);

  const handleDragEnter = () => {
    inputRef.current.classList.add('drag');
  };

  const handleDragLeave = () => {
    inputRef.current.classList.remove('drag');
  };
  const handleDrop = () => {
    inputRef.current.classList.remove('drag');
  };

  //   const handleFileChange = (files) => {
  //     console.log(files);
  //   };

  const handleFileDrop = (e) => {
    const newPng = e.target.files[0];
    const checks = newPng?.name?.split('.')[1];
    if (newPng && (checks === 'png' || checks === 'jpg' || checks === 'svg')) {
      const updatedList = [...fileList, newPng];
      setFileList(updatedList);
      handleFileChange(updatedList);
    }
  };

  const handleFileRemove = (file) => {
    const updatedList = [...fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    handleFileChange(updatedList);
  };

  return (
    <section className="fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-900 opacity-90 text-slate-950 transition-all">
      <div
        className="bg-gray-200 p-8 w-[80%] md:w-[50%] lg:w-[40%] rounded-2xl flex flex-col items-center"
        onFileChange={(file) => handleFileChange(file)}
      >
        <h2 className="text-center mb-6 font-bold">
          Ready to upload your photos
        </h2>
        <div
          className="relative w-[90%] h-[60%] border-2 border-dashed border-slate-700 rounded-md flex items-center justify-center bg-gray-400 hover:opacity-90 mb-6"
          ref={inputRef}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col w-full items-center justify-center py-8">
            <img alt="upload" src={upload} className="h-[100px] w-[100px]" />
            <p className="text-[0.75rem] w-[90%] md:text-sm text-gray-700 font-bold p-3 text-center">
              Drag & Drop a file here or click to select from desktop
            </p>
          </div>
          <input
            type="file"
            name="file"
            value=""
            onChange={handleFileDrop}
            className="opacity-0 absolute top-0 left-0 w-full h-full cursor-pointer"
          />
        </div>
        {fileList.length > 0 ? (
          <div className="flex flex-col w-[90%] justify-start">
            <p className="font-bold text-slate-900 text-sm text-center mb-5">
              Photo ready to be uploaded...
            </p>
            <div className="flex items-center gap-3 bg-gray-400 rounded-md px-2 py-2 mb-5 relative">
              <img
                alt="file-type"
                src={
                  imageConfig[
                    fileList[fileList.length - 1].type.split('/')[1]
                  ] || imageConfig['default']
                }
                className="h-10 w-10"
              />
              <p
                className="absolute top-0 right-0 text-[0.75rem] py-[2px] px-[6px] text-gray-200 bg-red-700 hover:bg-red-600 rounded-bl-md rounded-tr-md cursor-pointer"
                onClick={handleFileRemove}
              >
                x
              </p>
              <div className="flex flex-col justify-center">
                <p className="font-light text-sm">
                  {fileList[fileList.length - 1].name}
                </p>
                <p className="font-light text-sm">
                  {(fileList[fileList.length - 1].size / 1000).toFixed(2)}KB
                </p>
              </div>
            </div>
          </div>
        ) : null}

        <div className="flex items-center justify-between w-[90%]">
          <button
            className="w-[40%] py-2 md:py-3 text-gray-200 text-sm bg-green-700 hover:bg-green-600 rounded-md "
            onClick={handleUploadModal}
          >
            Upload
          </button>
          <button
            className="w-[40%] py-2 md:py-3 text-gray-200 text-sm bg-red-700 hover:bg-red-600 rounded-md "
            onClick={handleCloseModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
};

export default UploadModal;
