'use client';
import React, { useEffect, useState } from 'react';
// import "aos/dist/aos.css";
// import AOS from "aos";
// import axios from 'axios';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html'; // To convert markdown to HTML
import rehypeRaw from 'rehype-raw'; // To allow raw HTML rendering
import { privacyPolicy } from '../constants/constants';
import Navbar from '../components/Navbar';
import { VerticalBorderPattern } from '../components/common/Icon';
import Fotter from '../components/common/Fotter';

function page() {
  const [activeIds, setActiveIds] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setActiveIds((prevIds) => {
          const newIds = [...prevIds];

          entries.forEach((entry) => {
            const id = entry.target.id;
            if (entry.isIntersecting) {
              // Add ID if not already present
              if (!newIds.includes(id)) newIds.push(id);
            } else {
              // Remove ID when out of view
              const index = newIds.indexOf(id);
              if (index !== -1) newIds.splice(index, 1);
            }
          });

          return newIds;
        });
      },
      { rootMargin: '-50px 0px 0px 0px', threshold: 0 } // Adjust for better accuracy
    );

    const headings = document.querySelectorAll('h2');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  useEffect(() => {
    // Manual scroll event listener
    const onScroll = () => {
      const headings = document.querySelectorAll('h2');
      const currentActiveIds = [];

      headings.forEach((heading) => {
        const rect = heading.getBoundingClientRect();
        const inView = rect.top >= 0 && rect.top <= window.innerHeight;

        if (inView) {
          currentActiveIds.push(heading.id);
        }
      });

      setActiveIds([currentActiveIds?.[0]]);
    };

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const navHeight = 100; // height of your navbar in pixels
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-white">
      <Navbar />
      <main className="flex w-full relative z-1 max-w-7xl mx-auto flex-col items-center bg-white">
        <VerticalBorderPattern
          gradientName={'backgroundGradientAnimation'}
          maxArraryLines={100}
        >
          <div className=" flex-col sm:flex-row px-10 flex justify-center gap-20 max-sm:gap-2.5 pt-50 pb-15">
            {Object?.keys(privacyPolicy)?.length > 0 && (
              <div
                className="flex flex-col gap-10  grow max-w-180"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="introduction"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-[32px] sm:text-[40px] md:text-[46px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      Privacy Policy
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={privacyPolicy?.privacyIntro}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                      {/* You are granted a non-exclusive, nontransferable, revocable,
                limited license to access and use this website and its content.
                AlphaMetricx reserves the right to terminate this license at any
                time for any reason as deemed necessary. Any unauthorized use of
                this website or its content is prohibited. */}
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="acceptance-of-terms"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      1. Information We Collect
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={privacyPolicy?.informationWeCollect}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                    {/* <p className="text-[#1f2937] text-base font-normal leading-7 mt-[30px]">
                Any unauthorized use of this website or its content is
                prohibited.
              </p> */}
                  </div>
                </div>

                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="description-of-serivces"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      2. How We Use Information
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={privacyPolicy?.howWeUseInformation}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="account-registration"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      3. AI and Automated Processing
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={privacyPolicy?.aiAndAutomatedProcessing}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="subscription-and-billing"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      4. Legal Basis for Processing
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={privacyPolicy?.legalBasisForProcessing}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="user-responsibilities"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      5. Data Sharing and Disclosure
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={privacyPolicy?.dataSharingAndDisclosure}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="acceptable-use"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      6. Data Retention
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={privacyPolicy?.dataRetention}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="data-privacy"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      7. Data Security
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={privacyPolicy?.dataSecurity}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="interllectual-property-rights"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      8. Your Rights and Choices
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={privacyPolicy?.yourRightsAndChoices}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="third-part-integrations"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      9. Government and Public Sector Use
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={privacyPolicy?.governmentAndPublicSectorUse}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="secutiry"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      10. Third-Party Services
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={privacyPolicy?.thirdPartyServices}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="a-specific-risks-and-limitations"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      11. International Data Transfers
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={privacyPolicy?.internationalDataTransfers}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="disclaimers"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      12. Children’s Privacy
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={privacyPolicy?.childrensPrivacy}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="limitation-of-liability"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      13. Changes to This Privacy Policy
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={privacyPolicy?.changesToPrivacyPolicy}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="indemnification"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      14. Contact Information
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={privacyPolicy?.contactInformation}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </VerticalBorderPattern>
      </main>
      <Fotter />
    </div>
  );
}

export default page;
