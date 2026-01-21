'use client';
import { useEffect, useState } from 'react';
import Button from '../components/common/Button';
import ChipText from '../components/common/ChipText';
import FeaturedWebinar from '../components/common/FeaturedWebinar';
import Fotter from '../components/common/Fotter';
import { VerticalBorderPattern } from '../components/common/Icon';
import Input from '../components/common/Input';
import PopupModal from '../components/common/PopupModel';
import ScheduleBanner from '../components/common/ScheduleBanner';
import StatCard from '../components/common/StatCard';
import { MagnifyingIcon } from '../components/common/svgImage';
import Navbar from '../components/Navbar';
import { webinarsContent } from '../constants/constants';
import { toSentenceCase } from '../utils/utils';
import AOS from 'aos';
import 'aos/dist/aos.css';

function page({ headingStart = false }) {
  const statContent = [
    { value: '50+', label: 'Webinars' },
    { value: '10K+', label: 'Participants' },
    { value: '4.8/5', label: 'Average Rating' },
    { value: '100%', label: 'Free Access' },
  ];

  const scheduleBannerData = {
    label: 'Want a Custom Webinar for Your Team?',
    description:
      "We offer private webinar sessions tailored to your organization's specific needs and challenges.",
    buttonsText: ['Contact Us'],
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState();
  const [email, setEmail] = useState('');
  const [isSuccessful, setIsSuccessful] = useState();

  const [isSuccessfulEventSubmit, setIsSuccessfulEventSubmit] = useState();
  const [isOpenWebinar, setIsOpenWebinar] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    workPhone: '',
    companyName: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Add your form submission logic here
    console.log('Form submitted:', email);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsOpen(false);
      setIsSuccessful(true);
      // Reset form
      setEmail('');
    }, 1000);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

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

      <main className="flex w-full relative z-1 max-w-7xl mx-auto flex-col items-center bg-white">
        {/* Section one */}
        <VerticalBorderPattern gradientName={'backgroundGlow'}>
          <section className="flex w-full  max-w-300 mx-auto flex-col h-full items-start justify-center px-10 pt-30 pb-15 gap-8">
            <div
              className={`flex flex-col h-full items-start lg:w-full  gap-4 ${
                headingStart ? 'justify-start' : 'justify-center'
              }`}
            >
              {/* {mapData?.chipText && ( */}
              <div
                data-aos="fade-up"
                data-aos-duration="200"
                className={`flex w-full ${
                  headingStart ? 'justify-start' : 'justify-center'
                }`}
              >
                <ChipText heroSection={true} text={'Educational Webinars'} />
              </div>
              {/* )} */}
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                className={`font-heading text-black w-full text-[44px] leading-11   font-bold text-center ${
                  headingStart ? 'text-start' : 'text-center'
                }`}
              >
                Learn from the Experts
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="1200"
                className={`font-body leading-6 text-stone700 text-center w-full ${
                  headingStart ? 'text-start' : 'text-center'
                }`}
              >
                Join industry leaders and MapleRecord experts for live sessions
                and on-demand content covering records management, compliance,
                and digital transformation.
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              className="w-1/2 mx-auto"
            >
              <Input
                placeholder="Search videos..."
                iconLeft={<MagnifyingIcon width={16} height={16} />}
              />
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
              <Button padding="p-2 rounded-lg">Upcoming Webinars</Button>
              <Button padding="p-2 rounded-lg ">On-Demand Library</Button>
            </div>
          </section>
        </VerticalBorderPattern>

        {/* Webinar list */}

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
                Upcoming Live Webinars
              </div>
              <p
                // data-aos="fade-up"
                // data-aos-duration="1200"
                className={`font-body leading-6 text-stone700 w-full text-start`}
              >
                Register now to secure your spot in our upcoming sessions
              </p>
            </div>

            <div className="flex flex-col gap-10">
              {webinarsContent?.map((item, i) => (
                <FeaturedWebinar
                  mapData={item}
                  key={i}
                  setIsOpenWebinar={setIsOpenWebinar}
                />
              ))}
            </div>
          </section>
        </VerticalBorderPattern>

        {/* Never Miss a Webinar */}
        <VerticalBorderPattern gradientName={'backgroundGradientTwo'}>
          <div className="flex flex-col gap-8 max-w-300 mx-auto px-10 py-15">
            <div className="flex flex-col w-full h-full items-center lg:w-full justify-center gap-4 ">
              <div
                // data-aos="fade-up"
                // data-aos-duration="800"
                className=" font-heading  text-black text-3xl w-full   font-bold text-center"
              >
                Never Miss a Webinar
              </div>
              <p
                // data-aos="fade-up"
                // data-aos-duration="1200"
                className="font-body leading-6 text-stone700 text-center w-full"
              >
                Subscribe to get notified about upcoming webinars and access
                exclusive content.
              </p>
            </div>
            <div
              // data-aos="fade-down"
              // data-aos-duration="1200"
              className="flex flex-row gap-8 mx-auto"
            >
              {/* <Input placeholder="Enter your email" /> */}
              <Button onClickButton={() => setIsOpen(true)}>Subscribe</Button>
            </div>
          </div>
        </VerticalBorderPattern>

        <ScheduleBanner content={scheduleBannerData} />

        <PopupModal
          isOpen={isOpen || isSuccessful}
          onClose={() => {
            setIsOpen(false);
            setIsSubmitting(false);
          }}
          title={isSuccessful ? 'Thank you!' : 'Subscribe to Our Newsletter'}
          description={
            isSuccessful
              ? 'Stay ahead with exclusive updates and insider insights—delivered straight to your inbox.'
              : 'Get notified about upcoming webinars, new resources, and exclusive content delivered to your inbox.'
          }
          icon={isSuccessful ? 'CircleThickIcon' : 'MailIcon'}
          ppoupContent={
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First Name & Last Name */}
              {!isSuccessful && (
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full "
                  label="Email Address"
                />
              )}
              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                padding="w-full rounded-lg"
              >
                {isSubmitting
                  ? 'Submitting...'
                  : isSuccessful
                    ? 'Done'
                    : 'Subscribe Now'}
              </Button>

              {!isSuccessful && (
                <p className="font-body text-[12px] text-center text-stone700">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              )}
            </form>
          }
        />

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
      </main>
      <Fotter />
    </div>
  );
}

export default page;
