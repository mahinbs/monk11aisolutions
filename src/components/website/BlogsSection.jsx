import { blogs } from "../../data/constant";
import { Link } from "react-router-dom";

const accentTitle = (title, accent) => {
  if (!accent || !title.includes(accent)) return title;
  const idx = title.lastIndexOf(accent);
  return (
    <>
      {title.slice(0, idx)}
      <span className="text-primary">{accent}</span>
      {title.slice(idx + accent.length)}
    </>
  );
};

const BlogsSection = () => {
  return (
    <section className="py-[4rem] border-t border-black/10">
      <div className="wrapper">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div className="space-y-3 max-w-2xl">
            <p className="section-kicker">Keep reading</p>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              More insights{" "}
              <span className="text-primary">worth reading</span>
            </h2>
          </div>
          <Link
            to="/blogs"
            className="text-sm text-ink/55 hover:text-primary transition-colors"
          >
            See all articles
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {blogs.map((item) => (
            <Link
              key={item.id}
              to={`/blogs/${item.id}`}
              className="group rounded-2xl border border-black/10 overflow-hidden hover:border-primary/40 transition-colors bg-white"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full aspect-[16/10] object-cover group-hover:brightness-110 transition"
              />
              <div className="p-5 space-y-2">
                <p className="text-xs tracking-[0.14em] uppercase text-brandRed">
                  {item.category}
                </p>
                <h3 className="text-lg font-semibold leading-snug">
                  {accentTitle(item.title, item.accent)}
                </h3>
                <p className="text-sm text-ink/50 line-clamp-3">{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
