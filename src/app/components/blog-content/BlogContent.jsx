'use client';

import Navbar from '../Navbar';
import { VerticalBorderPattern } from '../common/Icon';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html'; // To convert markdown to HTML
import rehypeRaw from 'rehype-raw'; // To allow raw HTML rendering
import { dummyBlogsPosts } from '../../constants/constants';
import BlogCard from '../common/BlogCard';
import Fotter from '../common/Fotter';
import Link from 'next/link';

export default function BlogContent({ contentToDisplay }) {
  const restBlogs = dummyBlogsPosts
    ?.filter((item) => item?.label !== contentToDisplay?.label)
    ?.sort((a, b) => new Date(b?.date) - new Date(a?.date))
    ?.slice(0, 3);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />

      <main className="flex w-full relative z-1 max-w-7xl mx-auto flex-col items-center bg-white">
        {/* Manage your information ecosystem */}
        <VerticalBorderPattern
          horizontailRequired={false}
          gradientName="backgroundGlow"
        >
          {/* Hero Section */}
          <section className="flex flex-col max-w-300 w-full h-full gap-12 pt-30 pb-15 lg:px-30 max-md:px-20 lg:flex-row lg:items-center lg:justify-between">
            {/* Left Content */}
            <div className="w-full">
              {/* Breadcrumb */}
              <nav className="mb-6 flex items-center  w-full text-gray-500">
                {/* <span>Home</span> */}
                {/* <span className="mx-2">›</span> */}
                <Link className="text-sm cursor-pointer" href={'/blogs'}>
                  Blogs
                </Link>
                <span className="mx-2 w-2 text-2xl">›</span>
                <span className="font-medium text-sm text-gray-700">
                  {contentToDisplay?.label}
                </span>
              </nav>

              {/* Title */}
              <h1 className="mb-6 text-4xl font-heading font-bold leading-tight text-gray-900 md:text-5xl">
                {contentToDisplay?.label}
              </h1>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* <div className="h-12 w-12 rounded-full bg-gray-200" /> */}
                <div>
                  <p className="font-medium font-body text-gray-900">
                    {contentToDisplay?.author}
                  </p>
                  <p className="text-sm font-body text-gray-500">
                    {contentToDisplay?.date}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-full">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-lg bg-yellow-100" />
              <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
                <Image
                  src={contentToDisplay?.image}
                  alt={contentToDisplay?.label}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </section>
        </VerticalBorderPattern>

        <VerticalBorderPattern
          maxArraryLines={100}
          gradientName="backgroundGradientAnimation"
        >
          <section className=" max-w-300 w-full h-full gap-12 pb-15 lg:px-30 max-md:px-20">
            {/* <p className="text-[#1f2937] text-base font-body font-normal leading-7 px-10 mt-6"> */}
            <ReactMarkdown
              children={contentToDisplay?.markdownText}
              remarkPlugins={[remarkGfm, remarkHtml]}
              rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
              components={{
                h1: ({ node, ...props }) => (
                  <h2
                    className="mt-5 mb-2 text-3xl font-bold text-gray-900"
                    {...props}
                  />
                ),
                h2: ({ node, ...props }) => (
                  <h2
                    className="mt-5 mb-2 text-2xl font-bold text-gray-900"
                    {...props}
                  />
                ),
                h3: ({ node, ...props }) => (
                  <h2
                    className="mt-2 mb-2 text-xl font-bold text-gray-900"
                    {...props}
                  />
                ),
                h4: ({ node, ...props }) => (
                  <h2
                    className="mt-5 mb-2 text-ld font-bold text-gray-900"
                    {...props}
                  />
                ),
                p: ({ node, ...props }) => (
                  <p
                    className="text-base font-normal leading-7 text-[#1f2937] mt-2"
                    {...props}
                  />
                ),
                ul: ({ node, ...props }) => (
                  <ul
                    className="list-disc pl-6 mt-2 text-[#1f2937] space-y-2"
                    {...props}
                  />
                ),
              }}
            >
              {contentToDisplay?.markdownText}
            </ReactMarkdown>

            {/* </p> */}
          </section>
        </VerticalBorderPattern>

        <section className="flex w-full overflow-hidden  max-w-7xl mx-auto  flex-row gap-10 items-start justify-center min-h-screen">
          <VerticalBorderPattern gradientName={'backgroundGlow'}>
            <section className="flex  max-w-300 mx-auto py-15 px-10   flex-row gap-10">
              <div className="flex flex-col gap-4">
                <div className="font-heading text-3xl text-black text-start">
                  Latest Articles
                </div>
                <div className="grid md:grid-cols-2 w-full lg:grid-cols-3 gap-8 ">
                  {restBlogs?.map((item, i) => (
                    <BlogCard mapData={item} key={i} />
                  ))}
                </div>
              </div>
            </section>
          </VerticalBorderPattern>
        </section>
      </main>
      <Fotter />
    </div>
  );
}
