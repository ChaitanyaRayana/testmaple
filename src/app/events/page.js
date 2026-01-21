'use client';
import { useEffect, useState } from 'react';
import Button from '../components/common/Button';
import CenterTextCardsSection from '../components/common/CenterTextCardsSection';
import ChipText from '../components/common/ChipText';
import FeaturedWebinar from '../components/common/FeaturedWebinar';
import Fotter from '../components/common/Fotter';
import { VerticalBorderPattern } from '../components/common/Icon';
import Input from '../components/common/Input';
import PopupModal from '../components/common/PopupModel';
import ScheduleBanner from '../components/common/ScheduleBanner';
import StatCard from '../components/common/StatCard';
import Navbar from '../components/Navbar';
import { eventsContent } from '../constants/constants';
import { toSentenceCase } from '../utils/utils';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function page() {
  const statContent = [
    { value: '50+', label: 'Annual Events' },
    { value: '10K+', label: 'Attendees' },
    { value: '200+', label: 'Expert Speakers' },
    { value: '35+', label: 'Cities Worldwide' },
  ];
  const scheduleBannerData = {
    label: 'Want to Host a Private Event?',
    description:
      "We can organize custom events, workshops, and training sessions tailored to your organization's needs.",
    buttonsText: ['Contact Us'],
  };

  const [isSubmitting, setIsSubmitting] = useState();

  const [isSuccessfulEventSubmit, setIsSuccessfulEventSubmit] = useState();
  const [isOpenWebinar, setIsOpenWebinar] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    workPhone: '',
    companyName: '',
  });

  const handleEventSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add your form submission logic here
    console.log('Form submitted:', email);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpenWebinar(false);
      setIsSuccessfulEventSubmit(true);

      // Reset form
      setFormData({
        fullName: '',
        businessEmail: '',
        workPhone: '',
        companyName: '',
      });
    }, 1000);
  };

  useEffect(() => {
    if (isOpenWebinar) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpenWebinar]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />

      {/* Top Section */}
      <main className="flex w-full relative z-1 max-w-7xl mx-auto flex-col items-center bg-white">
        <VerticalBorderPattern
          gradientName={'backgroundGlow backgroundGradient'}
        >
          <section className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 pt-30 pb-15 gap-8">
            <div
              className={`flex flex-col h-full items-start lg:w-full  gap-4  justify-center
              `}
            >
              {/* {mapData?.chipText && ( */}
              <div
                data-aos="fade-up"
                data-aos-duration="200"
                className={`flex w-full justify-center`}
              >
                <ChipText heroSection={true} text={'Events & Conferences'} />
              </div>
              {/* )} */}
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                className={`font-heading text-black w-full text-[44px] leading-11  font-bold text-center`}
              >
                Connect, Learn, and Grow Together
              </div>
              <p
                data-aos="fade-up"
                data-aos-duration="1200"
                className={`font-body leading-6 text-stone700 text-center w-full`}
              >
                Join MapleRecord at industry conferences, workshops, webinars,
                and exclusive events designed to help you master records
                management.
              </p>
            </div>
            <div className=" flex flex-wrap justify-center w-full mx-auto pt-3 gap-4">
              {statContent?.map((item, i) => (
                <StatCard mapData={item} key={i} />
              ))}
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="1200"
              className="flex flex-row gap-8 w-full justify-center mt-10"
            >
              <Button padding="p-2 rounded-lg">Upcoming Events</Button>
              <Button padding="p-2 rounded-lg ">Past Events</Button>
            </div>
          </section>
        </VerticalBorderPattern>

        {/* Events list */}

        <VerticalBorderPattern gradientName={'backgroundGradientAnimation'}>
          <section className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 py-15 gap-8">
            <div
              className={`flex flex-col h-full items-start lg:w-full  gap-4 justify start`}
            >
              <div
                // data-aos="fade-up"
                // data-aos-duration="800"
                className={`font-heading text-black w-full text-3xl   font-bold text-start`}
              >
                {eventsContent?.sectionTwo?.label}
              </div>
              <p
                // data-aos="fade-up"
                // data-aos-duration="1200"
                className={`font-body leading-6 text-stone700 w-full text-start`}
              >
                {eventsContent?.sectionTwo?.description}
              </p>
            </div>

            <div className="flex flex-col gap-10">
              {eventsContent?.sectionTwo?.eventList?.map((item, i) => (
                <FeaturedWebinar
                  mapData={item}
                  key={i}
                  setIsOpenWebinar={setIsOpenWebinar}
                />
              ))}
            </div>
          </section>
        </VerticalBorderPattern>

        <VerticalBorderPattern gradientName={'backgroundGradient'}>
          <section className="flex  max-w-300 mx-auto pt-15   flex-row gap-10">
            <CenterTextCardsSection
              mapData={eventsContent?.sectionThree}
              headingStart={false}
              centerCardContent={false}
              gridGroup={'md:grid-cols-2 lg:grid-cols-4'}
              mustHaveLeftRightPadding="px-10"
              mustHaveBottomPadding="pb-15"
              businessSection={false}
            />
          </section>
        </VerticalBorderPattern>

        <ScheduleBanner content={scheduleBannerData} />
      </main>

      <Fotter />

      <PopupModal
        isOpen={isOpenWebinar || isSuccessfulEventSubmit}
        onClose={() => {
          setIsOpenWebinar(false);
          setIsSubmitting(false);
        }}
        title={
          isSuccessfulEventSubmit
            ? 'Thank you!'
            : `Register for ${toSentenceCase(isOpenWebinar?.label)} event.`
        }
        description={
          isSuccessfulEventSubmit
            ? 'Stay ahead with exclusive updates and insider insights—delivered straight to your inbox.'
            : "Fill out the form below to secure your spot. We'll send you a confirmation email with event details."
        }
        icon={isSuccessfulEventSubmit ? 'CircleThickIcon' : 'CalendarIcon'}
        ppoupContent={
          <form onSubmit={handleEventSubmit} className="space-y-4 ">
            {/* First Name & Last Name */}
            {!isSuccessfulEventSubmit && (
              <div className="space-y-4 ">
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full "
                  label="Full Name"
                />
                <Input
                  type="email"
                  name="businessEmail"
                  value={formData?.businessEmail}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  className="w-full "
                  label="Email Address"
                />

                <Input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Enter your company name"
                  required
                  className="w-full "
                  label="Company Name"
                />

                <Input
                  type="tel"
                  name="workPhone"
                  value={formData.workPhone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                  className="w-full "
                  label="Phone Number"
                />
              </div>
            )}
            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              padding="w-full rounded-lg"
            >
              {isSubmitting
                ? 'Submitting...'
                : isSuccessfulEventSubmit
                  ? 'Done'
                  : 'Subscribe Now'}
            </Button>

            {!isSuccessfulEventSubmit && (
              <p className="font-body text-[12px] text-center text-stone700">
                By registering, you agree to receive event updates and related
                communications.
              </p>
            )}
          </form>
        }
      />
    </div>
  );
}
