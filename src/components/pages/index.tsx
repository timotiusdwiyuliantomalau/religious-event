{
  /* <html>
  <head>
      <title>Misa, Adorasi dan Pencurahan Roh Kudus 2025</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
      <style>
          body {
              font-family: 'Roboto', sans-serif;
              background-color: #D1C4E9;
              color: #000;
          }
          .header-text {
              font-family: 'Times New Roman', serif;
          }
      </style>
  </head>
  <body class="flex items-center justify-center min-h-screen p-4">
      <div class="bg-purple-200 p-6 rounded-lg shadow-lg text-center max-w-lg w-full">
          <div class="relative">
              <img alt="Eucharist symbol" class="mx-auto mb-4" height="100" src="https://storage.googleapis.com/a1aa/image/9mDo8BR4fV9VguhbErgL4CeytA2DK-vI3EaekpcRkgI.jpg" width="100"/>
              <h1 class="header-text text-4xl font-bold mb-2">Misa, Adorasi <span class="text-3xl">✦</span></h1>
              <h2 class="header-text text-3xl font-bold mb-4">dan Pencurahan Roh Kudus 2025</h2>
          </div>
          <div class="relative mb-4">
              <img alt="Jesus hugging a person" class="mx-auto" height="200" src="https://storage.googleapis.com/a1aa/image/rl6PSBtoK0wYXdmjpgK9svnPoMcf5JJYcFH9C6kU1nk.jpg" width="300"/>
              <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-yellow-300 text-red-600 font-bold px-4 py-1 rounded-full">
                  Kepedulian Lebih Kepada Saudara Yang Lemah Dan Miskin
              </div>
          </div>
          <div class="text-yellow-500 text-lg font-bold mb-2">Minggu, 15 Juni 2025</div>
          <div class="text-lg mb-2">Hall Seasons City, Jakarta Barat</div>
          <div class="text-lg mb-2">09.00-15.00 WIB</div>
          <div class="text-lg mb-4">Tiket: 100 K</div>
          <div class="text-sm mb-4 italic">(Dapat dipesan melalui korwil HKY tiap daerah atau pada hari pelayanan)</div>
          <div class="text-left mb-4">
              <div class="mb-2"><strong>Informasi dapat menghubungi:</strong></div>
              <div>L. Suparyadi (0816 1850 644)</div>
              <div>Vincent (0812 9023 0889)</div>
              <div>Lusi (085280063919)</div>
              <div>Agatha.K (0855 1022 323)</div>
              <div>Melisa Linda (0812 8310 0495)</div>
          </div>
          <div class="text-sm">
              <div class="mb-2"><strong>Diselenggarakan oleh:</strong></div>
              <div>Pelayanan Kasih Dari Hati Kudus Yesus</div>
              <div>Jl. Ganggang Terusan No. 29, Tanjung Priok, Jakarta. T: 021 437 4373</div>
          </div>
      </div>
  </body>
  </html> */
}

import { motion } from "framer-motion";

const PentecostModern = () => {
  const countdown = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  // Countdown logic sama seperti sebelumnya...

  return (
    <div>
      <div className="min-h-screen bg-purple-100">
        {/* Hero Section */}
        <div className="relative h-screen flex items-center justify-center bg-gradient-to-b from-purple-500 to-purple-700 overflow-hidden">
          {/* Light Rays Background */}
          <div className="absolute inset-0 flex items-center justify-center">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-16 bg-white opacity-10 origin-center"
                style={{
                  transform: `rotate(${i * 30}deg)`,
                  width: "200%",
                  height: "10px",
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center px-4 max-w-5xl">
            {/* Monstrance Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 text-yellow-500">+</div>
                </div>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Misa, Adorasi
              <span className="ml-2">✝</span>
              <br />
              dan Pencurahan
              <br />
              Roh Kudus 2025
            </h1>

            {/* Jesus Image Representation */}
            <div className="w-64 h-64 mx-auto bg-purple-300 rounded-full mb-6 flex items-center justify-center relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border-4 border-white opacity-40"></div>
            </div>

            {/* Ribbon */}
            <div className="relative py-2 px-4 mb-8 w-full max-w-2xl mx-auto">
              <div className="absolute inset-0 bg-yellow-500 transform -skew-y-1"></div>
              <p className="relative text-red-700 font-bold italic">
                Kepedulian Lebih Kepada Saudara Yang Lemah Dan Miskin
              </p>
            </div>

            {/* Event Info */}
            <div className="text-white text-xl md:text-2xl mb-8">
              <p className="text-yellow-300 font-bold mb-2">
                Minggu, 15 Juni 2025
              </p>
              <p className="mb-2">Hall Seasons City, Jakarta Barat</p>
              <p className="mb-2">09.00-15.00 WIB</p>
              <p className="mb-2">Tiket: 100 K</p>
              <p className="text-sm">
                (Dapat dipesan melalui korwil HKY tiap daerah atau pada hari
                pelayanan)
              </p>
            </div>

            {/* CTA Button */}
            <button className="bg-yellow-500 text-purple-900 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-yellow-400 transition duration-300">
              Pesan Tiket Sekarang
            </button>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-purple-800 text-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl text-center mb-6">
              Informasi dapat menghubungi:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="text-center">
                <p className="font-bold">L. Suparyadi</p>
                <p>(0816 1850 644)</p>
              </div>
              <div className="text-center">
                <p className="font-bold">Agatha.K</p>
                <p>(0855 1022 323)</p>
              </div>
              <div className="text-center">
                <p className="font-bold">Vincent</p>
                <p>(0812 9023 0889)</p>
              </div>
              <div className="text-center">
                <p className="font-bold">Melisa Linda</p>
                <p>(0812 8310 0495)</p>
              </div>
              <div className="text-center">
                <p className="font-bold">Lusi</p>
                <p>(085280063919)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-purple-900 text-white py-6">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <div className="text-purple-900 font-bold text-xs">PKDHKY</div>
              </div>
            </div>
            <p className="text-lg font-bold mb-1">Diselenggarakan Oleh:</p>
            <p className="text-xl mb-2">
              Pelayanan Kasih dari Hati Kudus Yesus
            </p>
            <p className="text-sm">
              Jl. Ganggeng Terusan No. 29, Tanjung Priok, Jakarta. T: 021 437
              4373
            </p>
          </div>
        </footer>
      </div>
      <div className="min-h-screen bg-gradient-to-br from-[#0a0824] via-[#1a0b2e] to-[#2d0b3a]">
        {/* Animated Particles Background */}
        <div className="absolute inset-0 opacity-30">
          {/* Tambahkan library particle.js atau implementasi custom */}
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="relative z-20 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <div className="mb-8">
                <div className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#ffd93d] animate-gradient-x">
                  PENCURAHAN ROH KUDUS
                  <span className="text-4xl md:text-6xl block mt-4">2024</span>
                </div>
              </div>

              {/* Modern Countdown */}
              <div className="flex justify-center gap-6 mb-12">
                {Object.entries(countdown).map(([label, value]) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.1 }}
                    className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10"
                  >
                    <div className="text-5xl font-bold text-[#ffd93d] mb-2 font-mono">
                      {value.toString().padStart(2, "0")}
                    </div>
                    <div className="text-sm uppercase tracking-widest text-white/60">
                      {label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.button
                onClick={() => (window.location.href = "/#/register")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ff6b6b] text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Daftar Sekarang
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Parallax Sections */}
        <section className="py-24 relative">
          <div className="container mx-auto px-4">
            <motion.div
              className="grid lg:grid-cols-2 gap-16 items-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-[#ff6b6b] to-[#ffd93d] rounded-3xl blur opacity-30 group-hover:opacity-50 transition"></div>
                <div className="relative bg-[#1a0b2e] rounded-3xl p-8 border border-white/10 backdrop-blur-lg">
                  <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#ffd93d]">
                    Transformasi Rohani
                  </h2>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Experience the power of the Holy Spirit through worship,
                    teaching, and prayer. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full max-w-lg h-96 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-lg">
                  <img
                    src="/foto.webp"
                    alt="Holy Spirit"
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-[#ff6b6b] to-[#ffd93d]">
              Jadwal Acara
            </h2>

            <div className="relative">
              <div className="absolute left-1/2 w-1 h-full bg-gradient-to-b from-[#ff6b6b] to-[#ffd93d]"></div>

              {/* Timeline Items */}
              {[1, 2, 3, 4].map((item, idx) => (
                <motion.div
                  key={idx}
                  className={`mb-12 w-full ${
                    idx % 2 === 0 ? "pr-8 pl-4" : "pl-8 pr-4"
                  }`}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <div
                    className={`flex ${
                      idx % 2 === 0 ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#ffd93d] flex items-center justify-center"></div>
                    <div
                      className={`flex-1 ${idx % 2 === 0 ? "mr-8" : "ml-8"}`}
                    >
                      <div className="bg-[#1a0b2e] p-8 rounded-2xl border border-white/10 backdrop-blur-lg">
                        <h3 className="text-2xl font-semibold mb-4">
                          Sesi {item + 1}
                        </h3>
                        <div className="flex items-center mb-4 text-white/60">
                          <ClockIcon className="w-5 h-5 mr-2" />
                          19:00 - 21:00 WIB
                        </div>
                        <p className="text-white/80">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Floating Worship Section */}
        <div className="parallax-container h-[600px] relative overflow-hidden">
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="text-center"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="text-6xl md:text-9xl font-bold opacity-20">
                HOLY SPIRIT
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-black/50 py-12">
          <div className="container mx-auto px-4 text-center text-white/60">
            <div className="text-3xl font-bold mb-6">#Pentecost2024</div>
            <div className="flex justify-center space-x-6 mb-8">
              <SocialIcon icon="instagram" />
              <SocialIcon icon="youtube" />
              <SocialIcon icon="facebook" />
            </div>
            <p className="text-sm">
              © 2024 Catholic Community. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

// Komponen Tambahan
const SocialIcon = ({ icon }: any) => (
  <motion.div
    whileHover={{ scale: 1.2 }}
    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center cursor-pointer"
  >
    {icon}
    {/* Tambahkan ikon SVG sesuai platform */}
  </motion.div>
);

const ClockIcon = ({ className }: any) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    {/* ... */}
  </svg>
);

export default PentecostModern;

// import { useEffect, useRef, useState } from "react";
// import { BrowserMultiFormatReader } from "@zxing/library";

// interface ScanResult {
//   valid: boolean;
//   content?: string;
//   error?: string;
// }

// const QrScannerAdmin = () => {
//   const videoRef = useRef<HTMLVideoElement>(null);
//   const [scanning, setScanning] = useState(false);
//   const [result, setResult] = useState<ScanResult | null>(null);
//   const codeReader = new BrowserMultiFormatReader();

//   // Mock API untuk validasi QR
//   const validateQrCode = async (code: string): Promise<boolean> => {
//     // Ganti dengan logika validasi sebenarnya (API call, dll)
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return code.startsWith("https://valid-domain.com/");
//   };

//   const startScanning = async () => {
//     setScanning(true);
//     setResult(null);

//     try {
//       const devices = await codeReader.listVideoInputDevices();
//       const deviceId = devices[0].deviceId;

//       codeReader.decodeFromVideoDevice(
//         deviceId,
//         videoRef.current!,
//         async (result, error) => {
//           if (result) {
//             setScanning(false);
//             const isValid = await validateQrCode(result.getText());
//             setResult({
//               valid: isValid,
//               content: result.getText(),
//             });
//             codeReader.reset();
//           }

//           if (error && !(error instanceof DOMException)) {
//             setResult({
//               valid: false,
//               error: error.message,
//             });
//           }
//         }
//       );
//     } catch (error) {
//       setResult({
//         valid: false,
//         error: "Gagal mengakses kamera",
//       });
//       setScanning(false);
//     }
//   };

//   const stopScanning = () => {
//     codeReader.reset();
//     setScanning(false);
//     setResult(null);
//   };

//   useEffect(() => {
//     return () => {
//       codeReader.reset();
//     };
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
//         <h1 className="text-2xl font-bold text-gray-800 mb-6">
//           Admin QR Scanner
//         </h1>

//         <div className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden">
//           <video
//             ref={videoRef}
//             className={`w-full h-full object-cover ${
//               scanning ? "block" : "hidden"
//             }`}
//           />

//           {!scanning && (
//             <div className="absolute inset-0 flex items-center justify-center text-gray-500">
//               Kamera tidak aktif
//             </div>
//           )}
//         </div>

//         <div className="mt-6 flex gap-4 justify-center">
//           {!scanning ? (
//             <button
//               onClick={startScanning}
//               className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//             >
//               Mulai Scan
//             </button>
//           ) : (
//             <button
//               onClick={stopScanning}
//               className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
//             >
//               Stop Scan
//             </button>
//           )}
//         </div>

//         {result && (
//           <div className="mt-6 p-4 rounded-lg bg-gray-50">
//             <div
//               className={`flex items-center gap-2 mb-2 ${
//                 result.valid ? "text-green-600" : "text-red-600"
//               }`}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className={`h-6 w-6 ${
//                   result.valid ? "fill-green-500" : "fill-red-500"
//                 }`}
//                 viewBox="0 0 24 24"
//               >
//                 {result.valid ? (
//                   <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
//                 ) : (
//                   <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
//                 )}
//               </svg>
//               <span className="font-semibold">
//                 {result.valid ? "QR Code Valid" : "QR Code Tidak Valid"}
//               </span>
//             </div>

//             {result.content && (
//               <div className="mt-2 text-sm text-gray-700 break-all">
//                 Konten: {result.content}
//               </div>
//             )}

//             {result.error && (
//               <div className="mt-2 text-sm text-red-600">
//                 Error: {result.error}
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default QrScannerAdmin;
