import Image from "next/image";

export default function Services() {
  const services = [
    {
      icon: "/Services/doctor-patient.png",
      title: "General Consultation",
      desc: "Professional consultation with experienced doctors."
    },
    {
      icon: "/Services/ambulance1.png",
      title: "Emergency Care",
      desc: "24/7 emergency services with rapid response."
    },
    {
      icon: "/Services/surgery-room.png",
      title: "Surgical Services",
      desc: "Advanced surgical procedures using modern technology."
    },
    {
      icon: "/Services/lab.png",
      title: "Laboratory Tests",
      desc: "Fast and accurate diagnostic laboratory services."
    },
    {
      icon: "/Services/radiology.png",
      title: "Radiology & Imaging",
      desc: "Digital X-Ray, MRI and CT Scan facilities."
    },
    {
      icon: "/Services/drugstore.png",
      title: "Pharmacy",
      desc: "Complete range of quality medicines."
    },
    {
      icon: "/Services/vaccine.png",
      title: "Vaccination",
      desc: "Vaccination services for children and adults."
    },
    {
      icon: "/Services/emergency.png",
      title: "Intensive Care Unit",
      desc: "Critical care with expert medical staff."
    }
  ];

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <span className="uppercase font-semibold text-[var(--primary)]">
            Our Services
          </span>

          <h1 className="text-5xl font-bold mt-3 text-[var(--text)]">
            Healthcare Services We Provide
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-[var(--text-secondary)]">
            We provide comprehensive healthcare services with modern
            facilities and experienced medical professionals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-[var(--card)] rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300"
            >

              <Image
                src={service.icon}
                alt={service.title}
                width={70}
                height={70}
                className="mx-auto"
              />

              <h2 className="text-2xl font-bold mt-6 text-[var(--text)]">
                {service.title}
              </h2>

              <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                {service.desc}
              </p>

              <button className="mt-6 text-[var(--primary)] font-semibold hover:underline">
                Learn More
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}