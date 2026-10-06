import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  const googleMapsStreetView =
    "https://www.google.com/maps/@25.5449903,82.2537971,116a,75y,194.11h,98.4t/data=!3m7!1e1!3m5!1sCR0HdSl_Vg1B90zd56EDWg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-8.40431181204508%26panoid%3DCR0HdSl_Vg1B90zd56EDWg%26yaw%3D194.1096160794734!7i13312!8i6656?entry=ttu";

  return (
    <section id="contact" className="section-shell section-space pb-28">
      <div className="section-label">05 / Contact</div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="relative mt-8 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.035]"
      >
        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="relative grid lg:grid-cols-2">
          {/* ================= CONTACT INFO ================= */}
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Have an idea?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Let's build something
              <span className="text-zinc-500"> useful.</span>
            </h2>

            <p className="mt-6 max-w-xl leading-7 text-zinc-500">
              Whether it's a product, web application or an interesting
              collaboration, feel free to reach out.
            </p>

            {/* Email Button */}
            <a
              href="mailto:dev.ritesh.in@gmail.com"
              className="primary-btn mt-8 inline-flex"
            >
              Send me an email
              <ArrowUpRight size={16} />
            </a>

            {/* Contact Details */}
            <div className="mt-8 space-y-4 text-sm text-zinc-500">
              {/* Email */}
              <a
                href="mailto:dev.ritesh.in@gmail.com"
                className="flex items-center gap-3 transition-colors hover:text-white"
              >
                <Mail size={16} />
                <span>dev.ritesh.in@gmail.com</span>
              </a>

              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-1 shrink-0"
                />

                <span>
                  Nedula, Janghai,
                  <br />
                  Prayagraj, Uttar Pradesh, India
                </span>
              </div>
            </div>

            {/* Google Maps Street View */}
            <a
              href={googleMapsStreetView}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              View on Google Maps
              <ExternalLink size={14} />
            </a>
          </div>

          {/* ================= GOOGLE MAP ================= */}
          <div className="relative min-h-[350px] overflow-hidden border-t border-white/10 lg:min-h-full lg:border-l lg:border-t-0">
            <iframe
              title="My Location"
              src="https://www.google.com/maps?q=25.5449903,82.2537971&z=17&output=embed"
              className="absolute inset-0 h-full w-full grayscale-[0.4] opacity-80 transition-all duration-500 hover:grayscale-0 hover:opacity-100"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}