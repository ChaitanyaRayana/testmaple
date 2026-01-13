'use client';
import { useState } from 'react';
import Button from '../components/common/Button';
import Navbar from '../components/Navbar';
import ChipText from '../components/common/ChipText';
import { VerticalBorderPattern } from '../components/common/Icon';
import ZigZagContent from '../components/common/ZigZagContent';
import MRRecordImage from '@/public/assets/images/png/mr-records-one.png';
import { dummyBlogsPosts } from '../constants/constants';
import BlogCard from '../components/common/BlogCard';
import Input from '../components/common/Input';
import ScheduleBanner from '../components/common/ScheduleBanner';
import Fotter from '../components/common/Fotter';
import {
  BookIcon,
  UserIcon,
  CalendarIcon,
} from '../components/common/svgImage';

function page({ headingStart = false }) {
  const topicsText = [
    'All Posts',
    'Technology',
    'Compliance',
    'Best Practices',
    'Industry',
    'Department',
    'Business Value',
  ];

  const [selectedHelpMeBtn, setSelectedHelpMeBtn] = useState(0);
  const blogArticle = {
    label: 'The Future of Records Management: AI-Driven Automation',
    chipText: 'Technology',
    description:
      'Discover how artificial intelligence is transforming the way organizations manage, classify, and retrieve critical records in 2024 and beyond.',
    buttonsText: ['Request a Demo'],
    bottomText: (
      <div className="w-auto flex flex-wrap gap-2">
        <span className="flex flex-row gap-1">
          <UserIcon /> <span> Sarah Johnson</span>
        </span>
        <span className="flex flex-row gap-1">
          <CalendarIcon /> <span>December 28, 2024</span>
        </span>
        8 min read
      </div>
    ),
    image: MRRecordImage,
  };

  const scheduleBannerData = {
    label: 'Ready to Transform Your Records Management?',
    description:
      'Discover how MapleRecord can help your organization streamline workflows, ensure compliance, and unlock the value in your documents.',
    buttonsText: ['Get Started Today'],
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />

      {/* Top Section */}
      <main className="flex w-full relative z-1 max-w-7xl mx-auto pt-30 flex-col items-center bg-white">
        <VerticalBorderPattern>
          <section className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 gap-8">
            <div
              className={`flex flex-col h-full items-start lg:w-full  gap-4 ${
                headingStart ? 'justify-start' : 'justify-center'
              }`}
            >
              {/* {mapData?.chipText && ( */}
              <div
                className={`flex w-full ${
                  headingStart ? 'justify-start' : 'justify-center'
                }`}
              >
                <ChipText text={'Resources'} chipIcon={'BookIcon'} />
              </div>
              {/* )} */}
              <div
                className={`font-heading text-black w-full text-[48px] leading-16 line-height-[0.5] font-bold text-center ${
                  headingStart ? 'text-start' : 'text-center'
                }`}
              >
                MapleRecord Blog
              </div>
              <div
                className={`font-body text-[28px] leading-8 text-stone700 text-center w-full ${
                  headingStart ? 'text-start' : 'text-center'
                }`}
              >
                Insights, best practices, and thought leadership on records
                management, compliance, and workflow automation.
              </div>
            </div>
            <div className=" flex flex-wrap justify-center w-max mx-auto rounded-2xl gap-4">
              {topicsText?.map((item, i) => (
                <Button
                  gradientColor={`${
                    i === selectedHelpMeBtn
                      ? 'bg-black text-white text-center rounded-2xl'
                      : 'bg-stone-300 rounded-2xl hover:text-white text-center'
                  }`}
                  key={i}
                  onClickButton={() => setSelectedHelpMeBtn(i)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </section>
        </VerticalBorderPattern>

        <section className="flex w-full overflow-hidden  max-w-7xl mx-auto  flex-row gap-10 items-start justify-center min-h-screen text-center">
          <VerticalBorderPattern>
            <div className="flex  max-w-300 mx-auto p-10 flex-row gap-10">
              <div className="flex flex-col gap-4">
                <div className="font-heading text-3xl text-black text-start">
                  Featured Article
                </div>
                <ZigZagContent
                  mapData={blogArticle}
                  zigZagClassName="flex g:flex-row max-lg:flex-col  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
                />
              </div>
            </div>
          </VerticalBorderPattern>
        </section>

        {/* Blogs list */}
        <section className="flex w-full overflow-hidden  max-w-7xl mx-auto  flex-row gap-10 items-start justify-center min-h-screen">
          <VerticalBorderPattern>
            <section className="flex  max-w-300 mx-auto p-10   flex-row gap-10">
              <div className="flex flex-col gap-4">
                <div className="font-heading text-3xl text-black text-start">
                  Latest Articles
                </div>
                <div className="grid md:grid-cols-2 w-full lg:grid-cols-3 gap-8 ">
                  {dummyBlogsPosts?.map((item, i) => (
                    <BlogCard mapData={item} key={i} />
                  ))}
                </div>
              </div>
            </section>
          </VerticalBorderPattern>
        </section>

        {/* Stay Updated */}
        <VerticalBorderPattern>
          <div className="flex flex-col gap-8 max-w-300 mx-auto p-10">
            <div className="flex flex-col w-full h-full items-center lg:w-full justify-center gap-4 ">
              <div className=" font-heading  text-black text-[48px] w-full leading-16 line-height-[0.5] font-bold text-center">
                Subscribe for Video Updates
              </div>
              <div className="font-body text-[28px] leading-8 text-stone700 text-center w-full">
                Get notified when we release new videos, tutorials, and product
                updates.{' '}
              </div>
            </div>
            <div className="flex flex-row gap-8 w-1/2 mx-auto">
              <Input placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </VerticalBorderPattern>

        <ScheduleBanner content={scheduleBannerData} />
      </main>
      <Fotter />
    </div>
  );
}

export default page;
