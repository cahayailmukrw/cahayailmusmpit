'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeSection, setActiveSection] = useState('beranda');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="SMPIT Cahaya Ilmu Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-xl font-bold text-white">SMPIT Cahaya Ilmu</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['beranda', 'profil', 'program', 'fasilitas', 'kontak'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`text-sm font-medium transition-colors ${activeSection === item
                    ? 'text-white'
                    : 'text-blue-100 hover:text-white'
                    }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="pt-16 min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-4">
              SMPIT Cahaya Ilmu
            </h1>
            <p className="text-xl md:text-2xl text-blue-700 mb-8">
              Sekolah Menengah Pertama Islam Terpadu
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
              Membentuk generasi muslim yang cerdas, berakhlak mulia, dan berprestasi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://ppdbcahayailmusmpit.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
              >
                Daftar PPDB
              </a>
              <button
                onClick={() => scrollToSection('kontak')}
                className="border-2 border-blue-900 text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-900 hover:text-white transition-colors"
              >
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Profil Section */}
      <section id="profil" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Profil Sekolah</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Visi</h3>
              <p className="text-gray-700 leading-relaxed">
                "Mewujudkan generasi Islam yang berkarakter, berakhlak mulia, cerdas, mandiri, dan berwawasan global berbasis nilai-nilai Al-Qur'an dan Sunnah."
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Misi</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Menyelenggarakan pendidikan menengah pertama berbasis Islam terpadu yang mengintegrasikan nilai-nilai keislaman ke dalam seluruh aspek pembelajaran
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Menumbuhkan karakter peserta didik melalui pembiasaan ibadah, akhlak mulia, dan kedisiplinan
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Mengembangkan kompetensi akademik dan keterampilan abad 21 (4C: Critical Thinking, Creativity, Collaboration, Communication)
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Menciptakan lingkungan belajar yang aman, nyaman, dan menyenangkan
                </li>
                <li className="flex items-start">
                  <span className="text-blue-900 mr-2">•</span>
                  Membangun kerja sama positif dengan orang tua dan masyarakat dalam mendukung pendidikan holistik peserta didik
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Unggulan Section */}
      <section id="program" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Program Unggulan</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-blue-200 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Tahfidz Qur\'an',
                description: 'Target kelulusan minimal 3-6 Juz dengan pembelajaran intensif dan muroja\'ah harian'
              },
              {
                title: 'Pembelajaran Integratif',
                description: 'Kurikulum nasional yang diintegrasikan dengan nilai-nilai Islam untuk pembelajaran holistik'
              },
              {
                title: 'Pembiasaan Ibadah',
                description: 'Sholat dhuha, sholat dzuhur berjamaah, dan muroja\'ah untuk membentuk karakter religius'
              },
              {
                title: 'Ekstrakurikuler Islam',
                description: 'BTQ, Hadrah, Kaligrafi, dan berbagai kegiatan islami lainnya'
              },
              {
                title: 'Program Karakter',
                description: 'Pembiasaan salam, senyum, sopan santun, dan literasi akhlak untuk membentuk pribadi mulia'
              },
              {
                title: 'Sains dan Kreativitas',
                description: 'Science Day, Market Day, dan Karya Wisata Edukatif untuk mengembangkan kemampuan berpikir kritis'
              },
              {
                title: 'Pendampingan Psikologi',
                description: 'Observasi dan konsultasi perkembangan remaja untuk memastikan tumbuh kembang yang optimal'
              },
              {
                title: 'Teknologi Modern',
                description: 'Lingkungan sekolah ramah remaja yang didukung dengan teknologi pembelajaran modern'
              }
            ].map((program, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-colors">
                <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
                <p className="text-blue-100 text-sm">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fasilitas Section */}
      <section id="fasilitas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Fasilitas Sekolah</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Ruang Kelas Representatif',
              'Ruang Guru',
              'Ruang Kepala Sekolah',
              'Ruang Tata Usaha',
              'Perpustakaan Lengkap',
              'Musholla / Ruang Ibadah',
              'Laboratorium Komputer',
              'Laboratorium Sains',
              'Lapangan Olahraga',
              'Toilet Siswa dan Guru',
              'CCTV dan Sistem Keamanan',
              'Tempat Cuci Tangan / Sanitasi'
            ].map((fasilitas, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900">{fasilitas}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontak Section */}
      <section id="kontak" className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Hubungi Kami</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-900 to-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Alamat</h4>
                    <p className="text-gray-700">Jalan Dusun Krajan, Cibalongsari, Kecamatan Klari, Kabupaten Karawang, Provinsi Jawa Barat</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Telepon</h4>
                    <p className="text-gray-700">08212079917</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Email</h4>
                    <p className="text-gray-700">cahayailmukrw@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Jam Operasional</h4>
                    <p className="text-gray-700">Senin - Jumat: 07:00 - 15:00</p>
                    <p className="text-gray-700">Sabtu: 07:00 - 12:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900 to-blue-800 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">SMPIT Cahaya Ilmu</h3>
              <p className="text-blue-100 mb-6">
                Membentuk generasi muslim yang cerdas, berakhlak mulia, dan berprestasi.
              </p>
              <div className="border-t border-blue-700 pt-6">
                <h4 className="font-semibold mb-4">Link Cepat</h4>
                <div className="grid grid-cols-2 gap-2">
                  {['Beranda', 'Profil', 'Program', 'Fasilitas', 'Kontak'].map((link) => (
                    <button
                      key={link}
                      onClick={() => scrollToSection(link.toLowerCase())}
                      className="text-left text-blue-100 hover:text-white transition-colors"
                    >
                      {link}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-blue-100">
              © 2024 SMPIT Cahaya Ilmu. All rights reserved. | Developed with ❤️ for Education
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
