import React, { useState } from 'react';

const CreatePost = () => {
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
  
    console.log('Description:', description);
    console.log('Fichier sélectionné:', file);

    
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow-md bg-white">
      <form onSubmit={handleSubmit}>
        {/* Description */}
        <div className="mb-4">
          <textarea
            id="description"
            name="description"
            rows="4"
            value={description}
            onChange={handleDescriptionChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Que voulez-vous dire ?"
            required
          />
        </div>

        {/* File Upload */}
        <div className="mb-4">
          <label htmlFor="file" className="block text-sm font-medium text-gray-700">
            Sélectionner une image
          </label>
          <div className="flex justify-center items-center w-full">
            <label
              htmlFor="file"
              className="flex flex-col justify-center items-center w-full h-32 bg-gray-100 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-200">
              <div className="flex flex-col justify-center items-center pt-5 pb-6">
                {file ? (
                  <p className="text-sm text-gray-600">{file.name}</p>
                ) : (
                  <>
                    <svg
                      aria-hidden="true"
                      className="w-10 h-10 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16V4m0 0l4 4M7 4l4-4M15 16V8m0 0l4 4m0 0l-4 4M4 4h16m-7 12H7m0 0l4-4m-4 4l4-4"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Cliquez pour sélectionner une image</span> ou faites-la glisser ici
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF jusqu'à 10MB</p>
                  </>
                )}
              </div>
              <input id="file" type="file" className="hidden" onChange={handleFileChange} />
            </label>
          </div>
        </div>

        {/* Publish Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Publier
        </button>
      </form>
    </div>
  );
};

export default CreatePost;