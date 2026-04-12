"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FadeIn, SectionLabel, StaggerContainer, staggerItem } from "@/components/ui/Motion";
import { education, certifications } from "@/data/portfolio";

export default function Education() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openCertificate = (cert) => {
    setSelectedCert(cert);
    setIsPopupOpen(true);
  };

  const closeCertificate = () => {
    setIsPopupOpen(false);
    setSelectedCert(null);
  };

  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-16">
          <SectionLabel label="05 — Education & Certs" />
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white leading-tight">
            Learning never stops
          </h2>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <h3 className="font-mono text-xs tracking-widest text-white/30 uppercase mb-6">Degree</h3>
            {education.map((edu, i) => (
              <FadeIn key={edu.title} delay={i * 0.1}>
                <div className={`glass rounded-2xl p-6 border border-white/5 hover:border-cyan-400/20 transition-all duration-300 group ${i === 0 ? "mb-6" : ""} bg-white/10 backdrop-blur-lg border border-white/10`}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="font-display font-semibold text-white text-base group-hover:text-cyan-400 transition-colors">
                        {edu.title}
                      </h4>
                      <p className="font-body text-white/40 text-sm mt-1">{edu.institution}</p>
                      {edu.cgpa && <p className="font-body text-cyan-400/60 text-xs mt-1">CGPA: {edu.cgpa}</p>}
                    </div>
                    <span className="font-mono text-xs text-cyan-400/60 whitespace-nowrap">{edu.year}</span>
                  </div>
                  <p className="font-body text-white/30 text-sm">{edu.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-mono text-xs tracking-widest text-white/30 uppercase mb-6">Certifications</h3>
            <div className="space-y-6">
              {/* Group certifications by issuer */}
              {(() => {
                const groupedByIssuer = certifications.reduce((acc, cert) => {
                  if (!acc[cert.issuer]) {
                    acc[cert.issuer] = [];
                  }
                  acc[cert.issuer].push(cert);
                  return acc;
                }, {});

                return Object.entries(groupedByIssuer).map(([issuer, certs]) => (
                  <motion.div
                    key={issuer}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass rounded-2xl p-6 border border-white/5 hover:border-cyan-400/20 transition-all duration-300 group bg-white/10 backdrop-blur-lg border border-white/10"
                  >
                    <div 
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => {
                        // Toggle expand/collapse for this issuer
                        const certElement = document.getElementById(`certs-${issuer}`);
                        if (certElement) {
                          certElement.classList.toggle("hidden");
                        }
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{certs[0].icon}</span>
                        <div>
                          <h4 className="font-display font-semibold text-white text-base">
                            {issuer}
                          </h4>
                          <p className="font-body text-white/40 text-sm">
                            {certs.length} certification{certs.length !== 1 ? "s" : ""}
                          </p>
                        </div>
                      </div>
                      <div className="text-2xl text-cyan-400/60 transform transition-transform duration-300" id={`toggle-${issuer}`}>
                        +
                      </div>
                    </div>

                    {/* Certificates - only visible when expanded */}
                    <div className="mt-6 pt-6 border-t border-white/5 space-y-4 hidden" id={`certs-${issuer}`}>
                      {certs.map((cert, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="cursor-pointer hover:bg-white/5 rounded-lg p-3 transition-colors"
                          onClick={() => openCertificate(cert)}
                        >
                          <h4 className="font-medium text-white hover:text-cyan-400 transition-colors">{cert.title}</h4>
                          <p className="text-white/40 text-sm">{cert.year}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ));
              })()}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Popup */}
      <AnimatePresence>
        {isPopupOpen && selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full bg-gray-900 rounded-xl overflow-hidden border border-white/10"
            >
              <button
                onClick={closeCertificate}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedCert.title}</h3>
                <p className="text-cyan-400 mb-4">{selectedCert.issuer} • {selectedCert.year}</p>
                
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
