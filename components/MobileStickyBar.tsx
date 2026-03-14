'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Calendar } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function MobileStickyBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check in case they load scrolled down
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-[0_-8px_15px_-3px_rgba(0,0,0,0.1)] p-3 pb-safe flex gap-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
        >
          <Button asChild variant="outline" className="flex-1 border-[#1a2e4c] text-[#1a2e4c] h-12" size="lg">
            <a href="tel:+33148856101">
              <Phone className="w-5 h-5 mr-2" />
              Appeler
            </a>
          </Button>
          <Button asChild className="flex-1 bg-[#1a2e4c] hover:bg-[#2a3e5c] text-white font-semibold h-12 shadow-md" size="lg">
            <Link href="/contact">
              <Calendar className="w-5 h-5 mr-2 text-[#d4af37]" />
              Prendre RDV
            </Link>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
