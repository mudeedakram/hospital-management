import Image from "next/image";

export default function Contact() {
  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <span className="text-[var(--primary)] font-semibold uppercase">
            Contact Us
          </span>

          <h1 className="text-5xl font-bold mt-3 text-[var(--text)]">
            Get In Touch
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-[var(--text-secondary)]">
            Have questions or need medical assistance? Our team is always
            ready to help you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">

          {/* Left Side */}

          <div>

            <div className="flex gap-5 items-center mb-8">
              <Image src="/location.png" alt="" width={35} height={35}
               className="theme-icon hover:opacity-80 transition" />
              <div>
                <h3 className="font-bold text-xl text-[var(--text)]">
                  Address
                </h3>
                <p className="text-[var(--text-secondary)]">
                  Main Hospital Road, Islamabad, Pakistan
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center mb-8">
              <Image src="/viber.png" alt="" width={35} height={35} 
               className="theme-icon hover:opacity-80 transition"/>
              <div>
                <h3 className="font-bold text-xl text-[var(--text)]">
                  Phone
                </h3>
                <p className="text-[var(--text-secondary)]">
                  +92 300 1234567
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center mb-8">
              <Image src="/email.png" alt="" width={35} height={35} 
               className="theme-icon hover:opacity-80 transition"/>
              <div>
                <h3 className="font-bold text-xl text-[var(--text)]">
                  Email
                </h3>
                <p className="text-[var(--text-secondary)]">
                  info@hospital.com
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <Image src="/clock.png" alt="" width={35} height={35} />
              <div>
                <h3 className="font-bold text-xl text-[var(--text)]">
                  Working Hours
                </h3>
                <p className="text-[var(--text-secondary)]">
                  Monday - Sunday (24/7)
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}

          <form className="bg-[var(--card)] shadow-xl rounded-3xl p-8">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-[var(--border)] bg-[var(--surface-secondary)] rounded-xl px-5 py-3 mb-5 outline-none focus:border-[var(--primary)]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-[var(--border)] bg-[var(--surface-secondary)] rounded-xl px-5 py-3 mb-5 outline-none focus:border-[var(--primary)]"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-[var(--border)] bg-[var(--surface-secondary)] rounded-xl px-5 py-3 mb-5 outline-none focus:border-[var(--primary)]"
            />

            <textarea
              rows={5}
              placeholder="Write your message..."
              className="w-full border border-[var(--border)] bg-[var(--surface-secondary)] rounded-xl px-5 py-3 mb-6 outline-none resize-none focus:border-[var(--primary)]"
            ></textarea>

            <button
              className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] text-white py-4 rounded-xl font-bold transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}