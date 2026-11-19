import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-slate-900 text-slate-300 ">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <Image
            src="/logo1.png"
            alt="Logo"
            width={150}
            height={150}
          />

          <p className="mt-4 text-sm leading-7">
            Providing quality healthcare with experienced doctors,
            advanced technology and compassionate patient care.
          </p>

          <div className="flex gap-4 mt-6">
            <Image src="/facebook.png" alt="" width={24} height={24} />
            <Image src="/instagram.png" alt="" width={24} height={24} />
            <Image src="/linkedin.png" alt="" width={24} height={24} />
            <Image src="/twitter.png" alt="" width={24} height={24}
            className="invert hover:opacity-80 transition"
             />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-bold text-xl mb-5">
            Quick Links
          </h2>

          <ul className="space-y-3">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/departments">Departments</Link></li>
            <li><Link href="/doctors">Doctors</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-white font-bold text-xl mb-5">
            Services
          </h2>

          <ul className="space-y-3">
            <li>Cardiology</li>
            <li>Neurology</li>
            <li>Pediatrics</li>
            <li>Orthopedics</li>
            <li>Emergency Care</li>
            <li>Laboratory</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
  <h2 className="text-white font-bold text-xl mb-5">
    Contact
  </h2>

  <div className="flex items-center gap-3 mb-4">
    <Image
      src="/location.png"
      alt="Location"
      width={20}
      height={20}
      className="invert hover:opacity-80 transition"
    />
    <span>Islamabad, Pakistan</span>
  </div>

  <div className="flex items-center gap-3 mb-4">
    <Image
      src="/viber.png"
      alt="Viber"
      width={20}
      height={20}
      className="invert hover:opacity-80 transition"
    />
    <span>+92 300 1234567</span>
  </div>

  <div className="flex items-center gap-3 mb-4">
    <Image
      src="/email.png"
      alt="Email"
      width={20}
      height={20}
      className="invert hover:opacity-80 transition"
    />
    <span>info@hospital.com</span>
  </div>

  <div className="flex items-center gap-3">
    <Image
      src="/clock.png"
      alt="Working Hours"
      width={20}
      height={20}
    />
    <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
  </div>
</div>

      </div>

      <div className="border-t border-slate-700 py-6 px-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
  <p>
    © 2026 Hospital Management. All Rights Reserved.
  </p>

  <p className="mt-3 md:mt-0">
    Designed & Developed by <span className="text-white font-semibold">Mudeed Akram</span>
  </p>
</div>
    </footer>
  );
}