import React from "react";
import { blogs } from "../data/constant";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="pt-[10rem] pb-[4rem] bg-gradient-to-b from-[#f8e4de] to-[#f5f5f5]">
      <div className="wrapper">
        <h1 data-aos="fade-up" className="section-heading text-center">
          Insights & Articles
        </h1>
        <p
          data-aos="fade-up"
          className="text-center text-gray-600 max-w-2xl mx-auto mt-3"
        >
          Practical perspectives on AI automation, digital products, and
          industry transformation from the Monk11 AI team.
        </p>
        <div className="max-w-5xl mx-auto mt-7 grid sm:grid-cols-2 gap-5">
          {blogs.map((item) => (
            <div
              key={item.id}
              data-aos="fade-up"
              className="group space-y-2 p-5 rounded-xl border border-black/20 bg-white/60"
            >
              <Link to={`/blogs/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="group-hover:brightness-90 w-full rounded-xl transition-all duration-300"
                />
              </Link>
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                {item.category}
              </p>
              <Link
                to={`/blogs/${item.id}`}
                className="text-lg font-semibold line-clamp-2 group-hover:text-purpleColor transition-all duration-300 block"
              >
                {item.title}
              </Link>
              <p className="line-clamp-3 text-gray-600">{item.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
