"use client";

import { motion } from "framer-motion";
import { ExternalLink, ImageIcon, Video } from "lucide-react";

/** Google Drive file IDs from Our Works folder */
const driveImg = (id: string, w = 800) =>
  `https://lh3.googleusercontent.com/d/${id}=w${w}`;

const samples = [
  {
    src: driveImg("1bbotKb_gNZwteh1dPu1HhV5QwcvB6Ivl"),
    title: "BestCook — Brand Poster",
    category: "Social / Poster",
  },
  {
    src: driveImg("11AIqIlUxW9Pk_nD_B3DlRYPYMpa9mdkf"),
    title: "BestCook — Campaign Creative",
    category: "Social / Poster",
  },
  {
    src: driveImg("1eFgwV8CY0LrPKPKmGb0fVMxdc25aoPvH"),
    title: "Chocohollics — Product Post",
    category: "Social Post",
  },
  {
    src: driveImg("11EliJjfJcMh5-AxcGIGVp931LYtiCz2V"),
    title: "Chocohollics — Promo Creative",
    category: "Social Post",
  },
  {
    src: driveImg("17Fa7BahNMEKfbQCHOoXh2YOWg5t7jCyD"),
    title: "Hamza Biryani — Ramadan Offer",
    category: "Offer / F&B",
  },
  {
    src: driveImg("1slEa3RmYUMYXaR8yyzdFxF6Qt7UplJLX"),
    title: "BIM Workshop — Event Creative",
    category: "Education / Event",
  },
  {
    src: driveImg("13OryMen_EPU-Xh56gPZXGjA1KnxmdXoK"),
    title: "Campaign Creative 01",
    category: "Digital Creative",
  },
  {
    src: driveImg("1TrOnlGj0wQYciNSlLHcRVgKlCfyiJyir"),
    title: "Campaign Creative 02",
    category: "Digital Creative",
  },
  {
    src: driveImg("1rhAiFHnPfvf1VyteygiwomrXSLUJad75"),
    title: "Campaign Creative 03",
    category: "Digital Creative",
  },
  {
    src: driveImg("1j3v1cfhpcuEzIDgwS8iX5vJngW4Awfvu"),
    title: "Social Offer Creative",
    category: "WhatsApp / Social",
  },
  {
    src: driveImg("1EGJUZ9wJ3i0OAnWOJMNbHSn6sLCpUgoH"),
    title: "Promo Offer Post",
    category: "Social / Offer",
  },
  {
    src: driveImg("1hDcxWbjmAswNRTcbwC9eJASVHGlMOdcA"),
    title: "Campaign Creative 04",
    category: "Digital Creative",
  },
];

const DRIVE_WORKS =
  "https://drive.google.com/drive/folders/17QTr30kWc6n1bs1KYvXkiD6vekC9sfVr?usp=drive_link";
const DRIVE_VIDEO =
  "https://drive.google.com/drive/folders/1nu-qok-OcedosMusmp9QAmP37n363oxP";

export default function WorkGallery() {
  return (
    <section className="py-20 md:py-28 border-t border-border relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="badge mb-4 w-fit">Selected Work</p>
            <h2 className="section-heading mb-3">Posts & Video Marketing</h2>
            <p className="section-subheading max-w-2xl">
              Real creatives from campaigns — F&amp;B brands, festival offers,
              events, and social posts. Full video set opens in Drive.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={DRIVE_WORKS}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm inline-flex items-center gap-2"
            >
              <ImageIcon className="w-4 h-4" />
              All posts
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={DRIVE_VIDEO}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm inline-flex items-center gap-2"
            >
              <Video className="w-4 h-4" />
              Video marketing
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {samples.map((item, i) => (
            <motion.figure
              key={item.src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.35) }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0e14] aspect-square"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                <p className="text-[10px] uppercase tracking-wider text-cyan-300/90 mb-0.5">
                  {item.category}
                </p>
                <p className="text-xs md:text-sm font-medium text-white leading-snug line-clamp-2">
                  {item.title}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-white/40">
          5 video marketing samples in Drive · Brands: BestCook, Chocohollics,
          Hamza Biryani &amp; more
        </p>
      </div>
    </section>
  );
}
