import React, { useState } from "react";

const ProfilePhotoUpload = ({ onImageUpload, formData }) => {
  const [image, setImage] = useState(formData.photo || null);
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        onImageUpload(reader.result);
        setIsOpen(false); // Close popup after selecting an image
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-row items-center">
      {/* Profile Picture Section */}
      <div
        className="w-16 h-16 border rounded flex items-center justify-center cursor-pointer bg-gray-100"
        onClick={() => setIsOpen(true)}
      >
        {image ? (
          <img
            src={image}
            alt="Profile"
            className="w-full h-full rounded object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500">
            <svg width="40" height="40" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-2.67 0-5.2-1.32-6.71-3.35.03-2.24 4.47-3.41 6.71-3.41s6.68 1.17 6.71 3.41C17.2 18.68 14.67 20 12 20zm0-8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
            </svg>
          </div>
        )}
      </div>
      <button
        className="text-blue-500 text-sm ml-4"
        onClick={() => setIsOpen(true)}
      >
        Upload photo
      </button>

      {/* Popup (Modal) for Image Upload */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 text-center relative">
            <button
              className="absolute top-2 right-3 text-white text-xl"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
            <p className="text-gray-300 mb-4">
              Drag & drop or select a photo from your computer.
            </p>

            <label className="border-dashed border-2 border-gray-500 p-10 block rounded-lg cursor-pointer">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <span className="text-white">Choose Image</span>
            </label>

            <p className="text-gray-400 text-xs mt-2">
              Supported formats: JPEG & PNG
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoUpload;
