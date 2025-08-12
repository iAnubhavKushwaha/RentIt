import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Common Image Sources
  const imageOptions = [
    // Option 1: Direct from product data
    product.imageUrl,
    
    // Option 2: Constructed URL
    `https://example.com/images/${product.id}.jpg`,
    
    // Option 3: Search-based image URL
    `https://source.unsplash.com/300x200/?${encodeURIComponent(product.name)}`,
    
    // Option 4: Google Image Search (Note: Not recommended for production)
    `https://www.google.com/images/search?q=${encodeURIComponent(product.name)}`
  ];

  // Function to try multiple image sources
  const tryNextImage = (currentIndex = 0) => {
    if (currentIndex >= imageOptions.length) {
      setError(true);
      setIsLoading(false);
      return;
    }

    const testImage = new Image();
    testImage.onload = () => {
      setImageUrl(imageOptions[currentIndex]);
      setIsLoading(false);
    };
    testImage.onerror = () => {
      // Try next image if current fails
      tryNextImage(currentIndex + 1);
    };
    testImage.src = imageOptions[currentIndex];
  };

  // Trigger image loading when component mounts
  React.useEffect(() => {
    tryNextImage();
  }, [product.id]);

  // Fallback image options
  const fallbackImage = 'https://via.placeholder.com/300x200?text=Product+Image';

  return (
    <div className="group bg-white border border-zinc-200 rounded-xl shadow-sm">
      <div className="relative overflow-hidden">
        {isLoading ? (
          <div className="w-full h-48 bg-zinc-200 animate-pulse flex items-center justify-center">
            <span className="text-zinc-500">Loading Image...</span>
          </div>
        ) : error ? (
          <div className="w-full h-48 bg-zinc-100 flex items-center justify-center">
            <span className="text-zinc-500">Image Unavailable</span>
          </div>
        ) : (
          <img
            src={imageUrl || fallbackImage}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
          />
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-zinc-600">{product.description}</p>
        <p className="font-bold">₹{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;