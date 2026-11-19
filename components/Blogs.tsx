import Image from "next/image";

export default function Blogs() {
  const blogs = [
    {
      image: "/Blogs/blogs1.png",
      title: "5 Tips for a Healthy Lifestyle",
      category: "Health Tips",
      date: "July 2026",
      desc: "Simple daily habits that can improve your overall health."
    },
    {
      image: "/Blogs/blogs2.png",
      title: "Importance of Regular Health Checkups",
      category: "Medical",
      date: "July 2026",
      desc: "Early diagnosis can prevent many serious diseases."
    },
    {
      image: "/Blogs/blogs3.png",
      title: "Heart Care Guide",
      category: "Cardiology",
      date: "July 2026",
      desc: "Learn how to keep your heart healthy with expert advice."
    },
    {
      image: "/Blogs/blogs4.png",
      title: "Modern Medical Technology",
      category: "Technology",
      date: "July 2026",
      desc: "How innovation is transforming patient care."
    },
    {
      image: "/Blogs/blogs-5.png",
      title: "Child Healthcare Essentials",
      category: "Pediatrics",
      date: "July 2026",
      desc: "Important healthcare tips for children and parents."
    },
    {
      image: "/Blogs/blogs6.png",
      title: "Emergency First Aid Basics",
      category: "Emergency",
      date: "July 2026",
      desc: "Essential first aid knowledge everyone should know."
    },
  ];

  return (
    <section className="py-20 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">
          <span className="text-[var(--primary)] font-semibold uppercase">
            Our Blog
          </span>

          <h1 className="text-5xl font-bold mt-3 text-[var(--text)]">
            Latest Health Articles
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-[var(--text-secondary)]">
            Stay informed with expert healthcare tips, medical news and wellness advice.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {blogs.map((blog, index) => (

            <div
              key={index}
              className="bg-[var(--card)] rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
            >

              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">

                <div className="flex justify-between text-sm text-[var(--text-secondary)]">
                  <span>{blog.category}</span>
                  <span>{blog.date}</span>
                </div>

                <h2 className="text-2xl font-bold mt-4 text-[var(--text)]">
                  {blog.title}
                </h2>

                <p className="mt-4 leading-7 text-[var(--text-secondary)]">
                  {blog.desc}
                </p>

                <button className="mt-6 text-[var(--primary)] font-semibold hover:underline">
                  Read More →
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}