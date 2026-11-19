import Image from "next/image";

export default function Departments() {
  const departments = [
    {
      title: "Cardiology",
      icon: "/Departments/cardiology.png",
      desc: "Advanced heart care with experienced specialists."
    },
    {
      title: "Neurology",
      icon: "/Departments/neurology.png",
      desc: "Expert treatment for brain and nervous system."
    },
    {
      title: "Orthopedics",
      icon: "/Departments/orthopedic.png",
      desc: "Bone, joint and muscle care."
    },
    {
      title: "Pediatrics",
      icon: "/Departments/pediatrics.png",
      desc: "Healthcare for infants and children."
    },
    {
      title: "Emergency",
      icon: "/Departments/emergency.png",
      desc: "24/7 emergency medical services."
    },
    {
      title: "Radiology",
      icon: "/Departments/radiology.png",
      desc: "Modern imaging and diagnostics."
    },
    {
      title: "Dental Care",
      icon: "/Departments/dental.png",
      desc: "Complete oral healthcare solutions."
    },
    {
      title: "Laboratory",
      icon: "/Departments/lab.png",
      desc: "Accurate and fast medical testing."
    }
  ];

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <span className="text-[var(--primary)] font-semibold uppercase">
            Our Departments
          </span>

          <h1 className="text-5xl font-bold mt-3 text-[var(--text)]">
            Specialized Medical Departments
          </h1>

          <p className="max-w-2xl mx-auto mt-5 text-[var(--text-secondary)]">
            Our hospital offers a wide range of medical departments
            equipped with advanced technology and experienced doctors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {departments.map((item, index) => (

            <div
              key={index}
              className="bg-[var(--card)] rounded-3xl shadow-lg p-8 text-center hover:-translate-y-2 transition duration-300"
            >

              <Image
                src={item.icon}
                alt={item.title}
                width={70}
                height={70}
                className="mx-auto theme-icon"
              />

              <h2 className="text-2xl font-bold mt-6 text-[var(--text)]">
                {item.title}
              </h2>

              <p className="mt-4 text-[var(--text-secondary)] leading-7">
                {item.desc}
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