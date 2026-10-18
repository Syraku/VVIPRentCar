'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GALLERY_DATA } from '@/lib/data/gallery';
import { SectionHeader } from '../ui/gold-ornament';

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');

  const categories = ['Semua', 'Interior', 'Eksterior', 'Armada'];

  const filteredGallery =
    activeCategory === 'Semua'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="galeri" className="py-20 lg:py-28 bg-[#0a0a0a] text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          subtitle="Dokumentasi & Standar Visual"
          title="Galeri Armada & Interior"
          description="Potret visual standar kenyamanan interior kabin, kebersihan eksterior, dan kesiapan armada kami untuk melayani perjalanan Anda."
        />

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              type="button"
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeCategory === cat
                  ? 'bg-[#D4AF37] text-black shadow-md'
                  : 'bg-[#181818] text-stone-400 hover:text-[#FAF7F0] hover:bg-[#222222] border border-stone-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <figure
              key={item.id}
              className="group relative rounded-xl overflow-hidden bg-[#161616] border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-300 shadow-md"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Caption Overlay */}
              <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-left">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#D4AF37]/20 text-[#F2D98D] border border-[#D4AF37]/40 mb-1.5">
                  {item.category}
                </span>
                <h4 className="font-display font-bold text-sm md:text-base text-[#FAF7F0] group-hover:text-[#F2D98D] transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-stone-300 mt-1 line-clamp-2">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
