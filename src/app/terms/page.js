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
import { termsOfService } from '../constants/constants';
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
          <div className=" flex-col sm:flex-row px-10 flex justify-center gap-20 max-sm:gap-2.5 pt-30 pb-15">
            {/* <div className="w-60">
              <ul className="flex flex-col gap-4 sticky top-50 max-md:hidden">
                <li
                  className={`${
                    activeIds.includes('introduction')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium pt-10 text-[13px]
            `}
                >
                  Terms of Service
                </li>
                <li
                  className={`${
                    activeIds.includes('acceptance-of-terms')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium `}
                >
                  <Link
                    href="#acceptance-of-terms"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('acceptance-of-terms');
                    }}
                  >
                    Acceptance of Terms
                  </Link>
                </li>
                <li
                  className={`${
                    activeIds.includes('description-of-serivces')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium `}
                >
                  <Link
                    href="#description-of-serivces"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('description-of-serivces');
                    }}
                  >
                    Description of Services
                  </Link>
                </li>
                <li
                  className={`${
                    activeIds.includes('account-registration')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium `}
                >
                  <Link
                    href="#account-registration"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('account-registration');
                    }}
                  >
                    Account Registration
                  </Link>
                </li>
                <li
                  className={`${
                    activeIds.includes('subscription-and-billing')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium `}
                >
                  <Link
                    href="#subscription-and-billing"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('subscription-and-billing');
                    }}
                  >
                    Subscription and Billing
                  </Link>
                </li>
                <li
                  className={`${
                    activeIds.includes('user-responsibilities')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium `}
                >
                  <Link
                    href="#user-responsibilities"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('user-responsibilities');
                    }}
                  >
                    User Responsibilities
                  </Link>
                </li>
                <li
                  className={`${
                    activeIds.includes('acceptable-use')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium `}
                >
                  <Link
                    href="#acceptable-use"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('acceptable-use');
                    }}
                  >
                    Acceptable Use
                  </Link>
                </li>
                <li
                  className={`${
                    activeIds.includes('data-privacy')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium `}
                >
                  <Link
                    href="#data-privacy"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('data-privacy');
                    }}
                  >
                    Data Privacy
                  </Link>
                </li>
                <li
                  className={`${
                    activeIds.includes('interllectual-property-rights')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium `}
                >
                  <Link
                    href="#interllectual-property-rights"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('interllectual-property-rights');
                    }}
                  >
                    Intellectual Property Rights
                  </Link>
                </li>
                <li
                  className={`${
                    activeIds.includes('third-part-integrations')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium `}
                >
                  <Link
                    href="#third-part-integrations"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('third-part-integrations');
                    }}
                  >
                    Third-Party Integrations
                  </Link>
                </li>
                <li
                  className={`${
                    activeIds.includes('secutiry')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base font-medium`}
                >
                  <Link
                    href="#secutiry"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('secutiry');
                    }}
                  >
                    Security
                  </Link>
                </li>
                <li
                  className={`${
                    activeIds.includes('a-specific-risks-and-limitations')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium `}
                >
                  <Link
                    href="#a-specific-risks-and-limitations"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('a-specific-risks-and-limitations');
                    }}
                  >
                    AI-Specific Risks and Limitations
                  </Link>
                </li>
                <li
                  className={`${
                    activeIds.includes('disclaimers')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium `}
                >
                  <Link
                    href="#disclaimers"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('disclaimers');
                    }}
                  >
                    Disclaimers
                  </Link>
                </li>
                <li
                  className={`${
                    activeIds.includes('limitation-of-liability')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium `}
                >
                  <Link
                    href="#limitation-of-liability"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('limitation-of-liability');
                    }}
                  >
                    Limitation of Liability
                  </Link>
                </li>
                <li
                  className={`${
                    activeIds.includes('indemnification')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium `}
                >
                  <Link
                    href="#indemnification"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('indemnification');
                    }}
                  >
                    Indemnification
                  </Link>
                </li>
                <li
                  className={`${
                    activeIds.includes('modifications-to-terms')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium `}
                >
                  <Link
                    href="#modifications-to-terms"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('modifications-to-terms');
                    }}
                  >
                    Modifications to Terms
                  </Link>
                </li>
                <li
                  className={`${
                    activeIds.includes('governing-law-and-jurisdiction')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium `}
                >
                  <Link
                    href="#governing-law-and-jurisdiction"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('governing-law-and-jurisdiction');
                    }}
                  >
                    Governing Law and Jurisdiction
                  </Link>
                </li>
                <li
                  className={`${
                    activeIds.includes('termination')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium `}
                >
                  <Link
                    href="#termination"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('termination');
                    }}
                  >
                    Termination
                  </Link>
                </li>
                <li
                  className={`${
                    activeIds.includes('contact-information')
                      ? 'text-black'
                      : 'text-[#6B7280]'
                  }  text-base   font-medium `}
                >
                  <Link
                    href="#contact-information"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection('contact-information');
                    }}
                  >
                    Contact Information
                  </Link>
                </li>
              </ul>
            </div> */}
            {Object?.keys(termsOfService)?.length > 0 && (
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
                      Terms of Service
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.termsIntro}
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
                      1. Acceptance of Terms
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.acceptanceOfTerms}
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
                      2. Description of Services
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.descriptionOfServices}
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
                      3. Account Registration
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.accountRegistration}
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
                      4. Subscription and Billing
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.subscriptionAndBilling}
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
                      5. User Responsibilities
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.userResponsibilities}
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
                      6. Acceptable Use
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.acceptableUse}
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
                      7. Data Privacy
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.dataPrivacy}
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
                      8. Intellectual Property Rights
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.intellectualPropertyRights}
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
                      9. Third-Party Integrations
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.thirdPartyIntegrations}
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
                      10. Security
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.security}
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
                      11. AI-Specific Risks and Limitations
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.aiSpecificRisksAndLimitations}
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
                      12. Disclaimers
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.disclaimers}
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
                      13. Limitation of Liability
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.limitationOfLiability}
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
                      14. Indemnification
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.indemnification}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="modifications-to-terms"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      15. Modifications to Terms
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.modificationsToTerms}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="governing-law-and-jurisdiction"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      16. Governing Law and Jurisdiction
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.governingLawAndJurisdiction}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="termination"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      17. Termination
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.termination}
                        remarkPlugins={[remarkGfm, remarkHtml]}
                        rehypePlugins={[rehypeRaw]} // Allow raw HTML tags in Markdown
                      />
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden">
                  <div>
                    <h2
                      id="contact-information"
                      className="scroll-mt-20 sm:scroll-mt-25 leading-[115%] text-xl sm:text-[22px] font-semibold text-[#0f1728] sm:leading-[115%] tracking-[-1px]"
                    >
                      18. Contact Information
                    </h2>
                    <p className="text-[#1f2937] text-base font-normal leading-7 mt-6">
                      <ReactMarkdown
                        children={termsOfService?.contactInformation}
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
