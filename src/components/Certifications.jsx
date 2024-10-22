import React, { useState, useEffect } from 'react';
import { Tilt } from 'react-tilt';

// Dynamically import all certificates
const images = import.meta.glob("../assets/certificates/*.{png,jpeg,jpg,webp,svg}");

const Certifications = () => {
  const [imagePaths, setImagePaths] = useState([]);

  useEffect(() => {
    // Load images asynchronously
    const loadImages = async () => {
      const paths = await Promise.all(
        Object.values(images).map(async (importImage) => {
          const image = await importImage();
          return image.default; // Retrieve the image path
        })
      );
      setImagePaths(paths);
    };

    loadImages();
  }, []);

  return (
    <div className="w-[100vw] bg-diagonal-gradient text-white font-cursive" name="certificates">
      <div className="text-center text-2xl py-8">Certificates</div>
      <div className="flex justify-center items-center pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-8 px-8">
          {imagePaths.map((image, index) => (
            <Tilt key={index}>
              <div className="">
                <img src={image} alt={`Certificate ${index + 1}`} className="h-40 w-80 object-fill" />
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
