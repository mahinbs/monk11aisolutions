import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import { blogs } from "../../data/constant";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogsSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      slides: {
        perView: 1,
        spacing: 15,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: {
            perView: 2,
            spacing: 15,
          },
        },
        "(min-width: 1024px)": {
          slides: {
            perView: 3,
            spacing: 15,
          },
        },
      },
      created() {
        setLoaded(true);
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <section className="pt-[4rem] wrapper">
      <h2 data-aos="fade-up" className="section-heading text-center capitalize">
        Browse our latest insights
      </h2>
      <div data-aos="fade-up" ref={sliderRef} className="keen-slider mt-7">
        {blogs.map((item) => (
          <Link
            to={`/blogs/${item.id}`}
            key={item.id}
            className="keen-slider__slide space-y-2 p-5 rounded-xl border border-black/20 bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full rounded-xl"
            />
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">
              {item.category}
            </p>
            <h6 className="text-lg font-semibold line-clamp-2">{item.title}</h6>
            <p className="line-clamp-3 text-gray-600">{item.excerpt}</p>
          </Link>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <div
          data-aos="fade-up"
          className="flex items-center justify-center gap-4 mt-10"
        >
          <button
            onClick={() => instanceRef.current?.prev()}
            className="bg-black/5 p-3 rounded-full hover:bg-black/10 transition-colors"
            aria-label="Previous blog"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="bg-black/5 p-3 rounded-full hover:bg-black/10 transition-colors"
            aria-label="Next blog"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  );
};

export default BlogsSection;
