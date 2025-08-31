import React, { useState } from 'react';

interface GalleryImage {
    id: number;
    src: string;
    alt: string;
    title: string;
    category: string;
}

const GalleryPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    // Placeholder data for 20 images - you can replace these with actual images later
    const galleryImages: GalleryImage[] = [
        { id: 1, src: '/placeholder-1.jpg', alt: 'ENA Coach Bus 1', title: 'Modern Fleet', category: 'fleet' },
        { id: 2, src: '/placeholder-2.jpg', alt: 'ENA Coach Bus 2', title: 'Luxury Interior', category: 'interior' },
        { id: 3, src: '/placeholder-3.jpg', alt: 'ENA Coach Bus 3', title: 'Premium Seating', category: 'interior' },
        { id: 4, src: '/placeholder-4.jpg', alt: 'ENA Coach Bus 4', title: 'Driver Station', category: 'interior' },
        { id: 5, src: '/placeholder-5.jpg', alt: 'ENA Coach Bus 5', title: 'Exterior View', category: 'fleet' },
        { id: 6, src: '/placeholder-6.jpg', alt: 'ENA Coach Bus 6', title: 'Comfort Features', category: 'amenities' },
        { id: 7, src: '/placeholder-7.jpg', alt: 'ENA Coach Bus 7', title: 'Safety Equipment', category: 'safety' },
        { id: 8, src: '/placeholder-8.jpg', alt: 'ENA Coach Bus 8', title: 'Entertainment System', category: 'amenities' },
        { id: 9, src: '/placeholder-9.jpg', alt: 'ENA Coach Bus 9', title: 'Climate Control', category: 'amenities' },
        { id: 10, src: '/placeholder-10.jpg', alt: 'ENA Coach Bus 10', title: 'Storage Compartments', category: 'interior' },
        { id: 11, src: '/placeholder-11.jpg', alt: 'ENA Coach Bus 11', title: 'Emergency Exits', category: 'safety' },
        { id: 12, src: '/placeholder-12.jpg', alt: 'ENA Coach Bus 12', title: 'Wheelchair Access', category: 'accessibility' },
        { id: 13, src: '/placeholder-13.jpg', alt: 'ENA Coach Bus 13', title: 'Luggage Area', category: 'interior' },
        { id: 14, src: '/placeholder-14.jpg', alt: 'ENA Coach Bus 14', title: 'Driver Training', category: 'safety' },
        { id: 15, src: '/placeholder-15.jpg', alt: 'ENA Coach Bus 15', title: 'Maintenance Bay', category: 'fleet' },
        { id: 16, src: '/placeholder-16.jpg', alt: 'ENA Coach Bus 16', title: 'Customer Service', category: 'service' },
        { id: 17, src: '/placeholder-17.jpg', alt: 'ENA Coach Bus 17', title: 'Route Planning', category: 'service' },
        { id: 18, src: '/placeholder-18.jpg', alt: 'ENA Coach Bus 18', title: 'Digital Displays', category: 'amenities' },
        { id: 19, src: '/placeholder-19.jpg', alt: 'ENA Coach Bus 19', title: 'Refreshment Area', category: 'amenities' },
        { id: 20, src: '/placeholder-20.jpg', alt: 'ENA Coach Bus 20', title: 'Premium Experience', category: 'service' }
    ];

    const categories = [
        { id: 'all', name: 'All Images', count: galleryImages.length },
        { id: 'fleet', name: 'Fleet', count: galleryImages.filter(img => img.category === 'fleet').length },
        { id: 'interior', name: 'Interior', count: galleryImages.filter(img => img.category === 'interior').length },
        { id: 'amenities', name: 'Amenities', count: galleryImages.filter(img => img.category === 'amenities').length },
        { id: 'safety', name: 'Safety', count: galleryImages.filter(img => img.category === 'safety').length },
        { id: 'service', name: 'Service', count: galleryImages.filter(img => img.category === 'service').length },
        { id: 'accessibility', name: 'Accessibility', count: galleryImages.filter(img => img.category === 'accessibility').length }
    ];

    const filteredImages = selectedCategory === 'all' 
        ? galleryImages 
        : galleryImages.filter(img => img.category === selectedCategory);

    const openImageModal = (image: GalleryImage) => {
        setSelectedImage(image);
    };

    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-ena-yellow to-orange-400">
                            ENA Coach
                        </span> Gallery
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Explore our modern fleet, premium amenities, and commitment to excellence through our comprehensive photo gallery
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                selectedCategory === category.id
                                    ? 'bg-ena-yellow text-black shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            {category.name} ({category.count})
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {filteredImages.map((image) => (
                        <div
                            key={image.id}
                            className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                            onClick={() => openImageModal(image)}
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg border border-gray-100">
                                {/* Placeholder Image */}
                                <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                    <div className="text-center text-gray-500">
                                        <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <p className="text-sm font-medium">Image {image.id}</p>
                                        <p className="text-xs text-gray-400">{image.title}</p>
                                    </div>
                                </div>
                                
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                                    <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                        <p className="text-sm font-semibold">Click to View</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Image Info */}
                            <div className="mt-3 text-center">
                                <h3 className="font-semibold text-gray-900 text-sm">{image.title}</h3>
                                <p className="text-gray-500 text-xs capitalize">{image.category}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredImages.length === 0 && (
                    <div className="text-center py-16">
                        <svg className="w-24 h-24 mx-auto text-gray-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">No images found</h3>
                        <p className="text-gray-500">Try selecting a different category or check back later.</p>
                    </div>
                )}
            </div>

            {/* Image Modal */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={closeImageModal}
                >
                    <div className="relative max-w-4xl max-h-full">
                        <button
                            onClick={closeImageModal}
                            className="absolute -top-12 right-0 text-white hover:text-ena-yellow transition-colors"
                        >
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        
                        <div className="bg-white rounded-2xl overflow-hidden">
                            {/* Placeholder for actual image */}
                            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <svg className="w-32 h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <p className="text-lg font-medium">Image {selectedImage.id}</p>
                                    <p className="text-sm text-gray-400">{selectedImage.title}</p>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedImage.title}</h3>
                                <p className="text-gray-600 capitalize">Category: {selectedImage.category}</p>
                                <p className="text-gray-500 text-sm mt-2">
                                    This is a placeholder for the actual image. You can replace this with your real images later.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GalleryPage;
