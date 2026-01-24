'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/navigation';

function BlogCard({ mapData = {} }) {
  const {
    image,
    category,
    label,
    description,
    author,
    date,
    href = '#',
    buttonText,
    location,
    authorDateWrap,
    readMore = true,
  } = mapData || {};

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const router = useRouter();

  return (
    <article
      onClick={() => {
        if (href) {
          router.push(href);
        }
      }}
      className="bg-white rounded-4xl overflow-hidden shadow-sm border flex flex-col h-full"
    >
      {/* Image cover */}
      <Link
        // data-aos="fade-down"
        // data-aos-duration="800"
        key={label}
        href={href}
        className="block w-full cursor-pointer h-48"
      >
        <Image
          src={image}
          alt={label}
          width={1200}
          height={600}
          className="w-full h-48 object-cover"
        />
      </Link>

      <div className="p-6 h-full flex-1 flex flex-col">
        {/* Category pill */}
        {(category || location) && (
          <div
            // data-aos="fade-up"
            // data-aos-duration="200"
            key={label}
            className="mb-4"
          >
            <span className="inline-block bg-[#DFEDFA] text-primaryTextColor px-3 py-1 rounded-full text-[12px]">
              {category || location}
            </span>
          </div>
        )}
        <div className="flex flex-col h-full gap-2 justify-between">
          {/* Title */}
          <Link
            // data-aos="fade-up"
            // data-aos-duration="800"
            href={href}
            key={label}
            className="text-gray-900 cursor-pointer hover:underline"
          >
            <h3 className="card-title text-xl font-heading font-extrabold leading-snug">
              {label}
            </h3>
          </Link>

          {/* Excerpt */}
          <p
            key={label}
            // data-aos="fade-up"
            // data-aos-duration="1200"
            className=" text-gray-600 font-body fon leading-relaxed card-desc"
          >
            {description}
          </p>

          {/* Author / date and CTA */}
          <div className="w-full flex flex-col items-start gap-3 justify-between">
            <div
              // data-aos="fade-left"
              // data-aos-duration="1200"
              className="w-full flex items-center gap-4 text-sm text-gray-500"
            >
              {authorDateWrap
                ? authorDateWrap
                : author && (
                    <>
                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5.121 17.804A8 8 0 1118.364 4.56M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span>{author}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <time dateTime={date}>{date}</time>
                      </div>
                    </>
                  )}
            </div>

            {(readMore || buttonText) && (
              <Link
                href={href}
                className={`text-primaryTextColor font-medium cursor-pointer inline-flex items-center gap-2 ${
                  buttonText
                    ? 'w-full bg-white border p-1 justify-center border-stone-400 rounded-xl'
                    : ''
                }`}
                // data-aos="fade-left"
                // data-aos-duration="1200"
                key={href}
              >
                {buttonText ? buttonText?.label : 'Read More'}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
