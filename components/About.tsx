import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[var(--background)] py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-[var(--primary)] font-semibold uppercase tracking-widest">
            About Us
          </span>

          <h1 className="text-5xl font-bold text-[var(--text)] mt-3">
            We Care About Your Health
          </h1>

          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mt-5">
            We provide compassionate healthcare with experienced doctors,
            advanced technology and patient-centered care for every family.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="relative">
            <Image
              src="/Images/about-imag.jfif"
              alt="Hospital"
              width={550}
              height={600}
              className="rounded-3xl shadow-xl"
            />

            <div className="absolute -bottom-8 -right-8 bg-[var(--primary)] text-white rounded-2xl px-8 py-6 shadow-xl">
              <h2 className="text-4xl font-bold">15+</h2>
              <p>Years of Experience</p>
            </div>
          </div>

          {/* Right Content */}
          <div>

            <span className="text-[var(--primary)] font-semibold uppercase">
              Who We Are
            </span>

            <h2 className="text-4xl font-bold text-[var(--text)] mt-3">
              Your Trusted Healthcare Partner
            </h2>

            <p className="text-[var(--text-secondary)] mt-6 leading-8">
              Our hospital is committed to providing world-class healthcare
              services with highly qualified doctors, modern equipment and
              personalized treatment for every patient.
            </p>

            <p className="text-[var(--text-secondary)] mt-4 leading-8">
              We believe quality healthcare should be accessible, reliable and
              delivered with compassion. Every patient deserves the best care.
            </p>

            {/* Features */}

            <div className="grid grid-cols-2 gap-6 mt-10">

              <div className="flex gap-4">
                <Image
                  src="/verified.png"
                  alt=""
                  width={28}
                  height={28}
                  className="theme-icon"
                />

                <div>
                  <h3 className="font-bold text-[var(--text)]">
                    Expert Doctors
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)]">
                    Highly qualified specialists.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Image
                  src="/digital.png"
                  alt=""
                  width={28}
                  height={28}
                />

                <div>
                  <h3 className="font-bold text-[var(--text)]">
                    Modern Technology
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)]">
                    Advanced medical equipment.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Image
                  src="/ambulance.png"
                  alt=""
                  width={28}
                  height={28}
                />

                <div>
                  <h3 className="font-bold text-[var(--text)]">
                    24/7 Emergency
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)]">
                    Always available for you.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Image
                  src="/medical-service.png"
                  alt=""
                  width={28}
                  height={28}
                />

                <div>
                  <h3 className="font-bold text-[var(--text)]">
                    Patient Care
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)]">
                    Compassionate healthcare services.
                  </p>
                </div>
              </div>

            </div>

            {/* Button */}

            <button className="mt-10 bg-[var(--primary)] hover:bg-blue-700 transition text-white px-7 py-3 rounded-xl font-semibold">
              Learn More
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}