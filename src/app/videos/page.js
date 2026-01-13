'use client';
import BlogCard from '../components/common/BlogCard';
import Button from '../components/common/Button';
import ChipText from '../components/common/ChipText';
import { VerticalBorderPattern } from '../components/common/Icon';
import Input from '../components/common/Input';
import StatCard from '../components/common/StatCard';
import ZigZagContent from '../components/common/ZigZagContent';
import Navbar from '../components/Navbar';
import MRRecordImage from '@/public/assets/images/png/mr-records-one.png';
import { useState } from 'react';
import { videoCardContent } from '../constants/constants';
import CenterTextCardsSection from '../components/common/CenterTextCardsSection';
import ScheduleBanner from '../components/common/ScheduleBanner';
import { ClockIcon, EyeIcon, LikeIcon, VideoPlayIcon, VideoRecorderIcon } from '../components/common/svgImage';

function page({ headingStart = false }) {
  const statContent = [
    { value: '5+', label: 'Videos' },
    { value: '125K+', label: 'Total Views' },
    { value: '4.9/5', label: 'Average Rating' },
    { value: 'Weekly', label: 'New Content' },
  ];

  const topicsText = [
    'All Videos',
    'Product Demo',
    'Tutorials (0)',
    'Case Studies (0)',
    'Thought Leadership (0)',
  ];

  const videoArticle = {
    label: 'MapleRecord Platform Overview: Transform Your Records Management',
    chipText: 'Product Demos',
    description:
      'Get a comprehensive tour of the MapleRecord platform and discover how our AI-powered solution revolutionizes records management for modern organizations.',
    buttonsText: ['Watch Now'],
    bottomText: 'Sarah Johnson December 28, 2024 8 min read',
    authorDateWrap: (<div className='w-auto flex flex-wrap gap-2'>
            <span className='flex flex-row gap-2'>
              <EyeIcon /> <span> 15,420 views</span>
            </span>
            <span className='flex flex-row gap-2'>
              <LikeIcon /> <span> 892 likes</span>
            </span>
            <span className='flex flex-row gap-2'>
              <ClockIcon /> <span>12:45</span>
            </span>
          </div>),
    image: MRRecordImage,
  };

  const exploreByCategory = {
    chipText: '',
    label: 'Explore by Category',
    description: 'Find the perfect content for your learning journey',
    cardSection: [
      {
        icon: VideoPlayIcon,
        label: 'Product Demos',
        description: 'See MapleRecord features in action',
        subdescrp: '12 videos',
      },
      {
        icon: VideoRecorderIcon,
        label: 'Tutorials',
        description: 'City-by-city tours bringing MapleRecord to you',
        subdescrp: '15 videos',
      },
      {
        icon: LikeIcon,
        label: 'Case Studies',
        description: 'Real customer success stories',
        subdescrp: '9 videos',
      },
      {
        icon: EyeIcon,
        label: 'Thought Leadership',
        description: 'Industry insights and trends',
        subdescrp: '7 videos',
      },
    ],
  };

  const [selectedHelpMeBtn, setSelectedHelpMeBtn] = useState(0);

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
                <ChipText text={'Resources'} chipIcon={'VideoRecorderIcon'}/>
              </div>
              {/* )} */}
              <div
                className={`font-heading text-black w-full text-[48px] leading-16 line-height-[0.5] font-bold text-center ${
                  headingStart ? 'text-start' : 'text-center'
                }`}
              >
                Explore MapleRecord Through Video
              </div>
              <div
                className={`font-body text-[28px] leading-8 text-stone700 text-center w-full ${
                  headingStart ? 'text-start' : 'text-center'
                }`}
              >
                Watch product demos, tutorials, customer success stories, and
                thought leadership content to master records management.
              </div>
            </div>
            <div className="w-1/2 mx-auto">
              <Input placeholder="Search videos..." iconLeft="sr" />
            </div>

            <div className=" flex flex-wrap justify-center w-full mx-auto pt-3 gap-4">
              {statContent?.map((item, i) => (
                <StatCard mapData={item} key={i} />
              ))}
            </div>
          </section>
        </VerticalBorderPattern>

        <VerticalBorderPattern>
          <div className="flex  max-w-300 mx-auto p-10 flex-row gap-10">
            <div className="flex flex-col gap-4">
              <ChipText text={'Featured Video'} styling="w-fit" />
              <div className="font-heading text-3xl text-black text-start">
                Don't Miss This
              </div>
              <ZigZagContent
                mapData={videoArticle}
                zigZagClassName="flex lg:flex-row-reverse max-lg:flex-col  backgroundGradient  w-full justify-between gap-6 border border-solid border-bordergray rounded-3xl shadow-2xl p-8"
              />
            </div>
          </div>
        </VerticalBorderPattern>

        <section className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 gap-8">
          <div className="flex flex-col gap-4">
            <div
              className={`font-body text-[16px] leading-8 text-black w-full text-start`}
            >
              Filter by Category:
            </div>
            <div className=" flex flex-wrap justify-center overflow-x-scroll w-max mx-auto bg-white rounded-3xl gap-4">
              {topicsText?.map((item, i) => (
                <Button
                  gradientColor={`${
                    i === selectedHelpMeBtn
                      ? 'bg-black text-white text-center rounded-2xl'
                      : 'bg-stone-300 rounded-2xl hover:text-white text-center'
                  } p-5`}
                  key={i}
                  onClickButton={() => setSelectedHelpMeBtn(i)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Videos list */}
        <section className="flex w-full overflow-hidden  max-w-7xl mx-auto  flex-row gap-10 items-start justify-center min-h-screen">
          <VerticalBorderPattern>
            <section className="flex  max-w-300 mx-auto p-10   flex-row gap-10">
              <div className="flex flex-col gap-4">
                <div className="text-start">
                  <h2 className="font-heading text-3xl text-black">
                    All Videos
                  </h2>
                  <span className="inline-block mt-2 text-lg text-stone-500">
                    3 videos found
                  </span>
                </div>
                <div className="grid md:grid-cols-2 w-full lg:grid-cols-3 gap-8 ">
                  {videoCardContent?.map((item, i) => (
                    <BlogCard mapData={item} key={i} />
                  ))}
                </div>
              </div>
            </section>
          </VerticalBorderPattern>
        </section>

        <VerticalBorderPattern>
          <section className="flex  max-w-300 mx-auto p-10   flex-row gap-10">
            <CenterTextCardsSection
              mapData={exploreByCategory}
              headingStart={false}
              centerCardContent={false}
            />
          </section>
        </VerticalBorderPattern>

        {/* Stay Updated */}
        <VerticalBorderPattern>
          <div className="flex flex-col gap-8 max-w-300 mx-auto p-10">
            <div className="flex flex-col w-full h-full items-center lg:w-full justify-center gap-4 ">
              <div className=" font-heading  text-black text-[48px] w-full leading-16 line-height-[0.5] font-bold text-center">
                Subscribe for Video Updates
              </div>
              <div className="font-body text-[28px] leading-8 text-stone700 text-center w-full">
                Get notified when we release new videos, tutorials, and product updates.{' '}
              </div>
            </div>
            <div className="flex flex-row gap-8 w-1/2 mx-auto">
              <Input placeholder="Enter your email" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </VerticalBorderPattern>

        <ScheduleBanner />
      </main>
    </div>
  );
}

export default page;
