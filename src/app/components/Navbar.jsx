'use client';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { DownArrowIcon, MapleLogo } from './common/Icon';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import Button from './common/Button';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicepop, setServicePop] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [platformPop, setPlatformPop] = useState(false);
  const [resourcespop, setResourcesPop] = useState(false);
  const [productPop, setProductPop] = useState(false);
  const [solutionsPop, setSolutionsPop] = useState(false);

  const searchParams = useSearchParams();
  const { id } = useParams();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setNavbar(true);
  }, []);

  const pathname = usePathname();

  const handleSmoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1); // Get section ID
    const targetElement = document.getElementById(targetId);
    setIsMenuOpen(false);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop, // Scroll to the top of the target element
        behavior: 'smooth', // Smooth scroll behavior
      });
    }
  };

  return (
    <>
      <nav
        className={`bg-[#ffffffa6]  fixed  ${
          !navbar ? '-top-125 ' : 'top-0'
        }  left-0 w-full z-50   backdrop-blur-[10px] duration-700 flex justify-around overflow-hidden lg:overflow-visible ${
          isMenuOpen ? 'h-117.5' : 'h-16'
        }`}
      >
        <div className="w-full max-w-7xl h-full flex lg:flex-row max-lg:flex-wrap gap-0  lg:justify-around max-lg:justify-between items-center p-5">
          <div className="flex lg:flex-row max-lg:flex-wrap lg:justify-around max-lg:justify-between w-full px-10 h-full gap-10 items-center">
            {/* Logo */}
            <div>
              <Link href={'/'} onClick={() => setIsMenuOpen(false)}>
                {/* <Image
                width={200}
                height={"auto"}
                src={logo}
                alt="alphametricx logo"
                title="alphametricx logo"
              /> */}
                <div className=" flex justify-start h-8 w-60">
                  <div className=" h-8 w-fit" onClick={() => router.push('/')}>
                    <MapleLogo />
                  </div>
                </div>
              </Link>
            </div>
            {/* Mobile Menu Toggle Button */}
            {isMenuOpen ? (
              <button
                onClick={toggleMenu}
                className="flex h-8 justify-center w-8 items-center relative lg:hidden"
              >
                {/* Top Line */}
                <span
                  className={`absolute w-[24px] h-0.5 bg-black transform transition-transform duration-300 ${
                    isMenuOpen ? 'rotate-45' : 'rotate-0'
                  }`}
                ></span>

                {/* Bottom Line */}
                <span
                  className={`absolute w-[24px] h-0.5 bg-black transform transition-transform duration-300 ${
                    isMenuOpen ? '-rotate-45' : 'rotate-0'
                  }`}
                ></span>
              </button>
            ) : (
              <button
                onClick={toggleMenu}
                className="flex flex-col h-8 justify-center w-8 items-center relative space-y-1.5 lg:hidden"
              >
                {/* Top Line */}
                <span
                  className={`w-[24px] h-0.5 rounded-full bg-black transform transition-transform duration-300 ${
                    isMenuOpen
                      ? 'rotate-45 translate-y-[8px]'
                      : 'rotate-0 translate-y-0'
                  }`}
                ></span>

                {/* Middle Line */}
                <span
                  className={`w-[24px] h-0.5 rounded-full bg-black transition-opacity duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                ></span>

                {/* Bottom Line */}
                <span
                  className={`w-[24px] h-0.5 rounded-full bg-black transform transition-transform duration-300 ${
                    isMenuOpen
                      ? '-rotate-45 -translate-y-[8px]'
                      : 'rotate-0 translate-y-0'
                  }`}
                ></span>
              </button>
            )}

            {/* Desktop Menu */}
            <div
              className={`flex lg:flex-row max-lg:flex-col items-center font-body  gap-10 duration-700 `}
            >
              <ul className="flex lg:flex-row max-lg:flex-col min-w-2xl justify-center font-medium gap-6 items-center">
                <li
                  className="flex justify-center max-w-max group items-center relative"
                  onMouseEnter={() => setPlatformPop(true)}
                  onMouseLeave={() => setPlatformPop(false)}
                >
                  <p
                    onMouseEnter={() => setPlatformPop(true)}
                    onMouseLeave={() => setPlatformPop(false)}
                    className="text-[#374151] text-base cursor-pointer font-medium hover:text-black"
                  >
                    <div className="flex items-center gap-0.5 text-stone700 hover:text-stone900 hover:font-semibold">
                      {' '}
                      <div>Platform</div> <DownArrowIcon />
                    </div>
                  </p>
                  {platformPop && (
                    <div
                      onMouseEnter={() => setPlatformPop(true)}
                      onMouseLeave={() => setPlatformPop(false)}
                      onClick={() => setPlatformPop(false)}
                      className="flex flex-col  bg-white p-[10px_0px] border border-solid border-bordergray shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-2xl w-max absolute box_shadow gap-2.5 -left-1 top-full z-30"
                    >
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                        href={'/platform/mr-records'}
                      >
                        Hybrid Records Management
                      </Link>
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                        href={'/platform/mr-request'}
                      >
                        Request Management
                      </Link>

                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                        href={'/platform/mr-workflow'}
                      >
                        Workflow Automation
                      </Link>
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                        href={'/platform/mr-forms'}
                      >
                        MR Forms
                      </Link>
                    </div>
                  )}
                </li>

                <li
                  className="flex justify-center group items-center relative "
                  onMouseEnter={() => setProductPop(true)}
                  onMouseLeave={() => setProductPop(false)}
                >
                  <p
                    onMouseEnter={() => setProductPop(true)}
                    onMouseLeave={() => setProductPop(false)}
                    className="text-[#374151] text-base cursor-pointer font-medium hover:text-black"
                  >
                    <div className="flex items-center gap-0.5 text-stone700 hover:text-stone900 hover:font-semibold">
                      {' '}
                      <div>Solutions</div> <DownArrowIcon />
                    </div>
                  </p>
                  {productPop && (
                    <div
                      onMouseEnter={() => setProductPop(true)}
                      onMouseLeave={() => setProductPop(false)}
                      className=" flex flex-row w-max bg-white p-[10px_0px] border border-solid border-bordergray shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-2xl absolute box_shadow -left-1 top-full z-30"
                    >
                      <div
                        onMouseEnter={() => setProductPop(true)}
                        onMouseLeave={() => setProductPop(false)}
                        onClick={() => setProductPop(false)}
                        className="flex flex-col  gap-2.5 w-50"
                      >
                        <p className="text-[#6b7280] p-[2px_15px] text-sm font-medium">
                          INDUSTRIES
                        </p>

                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                          href={'/solution/financial-services'}
                        >
                          Financial Services
                        </Link>

                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                          href={'/solution/insurance'}
                        >
                          Insurance
                        </Link>
                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                          href={'/solution/healthcare'}
                        >
                          Healthcare
                        </Link>
                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                          href={'/solution/education'}
                        >
                          Education
                        </Link>
                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                          href={'/solution/manufacturing'}
                        >
                          Manufacturing
                        </Link>
                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                          href={'/solution/state-local'}
                        >
                          State & Local Government
                        </Link>
                      </div>
                      <div
                        onMouseEnter={() => setProductPop(true)}
                        onMouseLeave={() => setProductPop(false)}
                        onClick={() => setProductPop(false)}
                        className="flex flex-col  gap-2.5 w-50"
                      >
                        <p className="text-[#6b7280] p-[2px_15px] text-sm font-medium">
                          DEPARTMENTS
                        </p>

                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                          href={'/solution/finance-accounting'}
                        >
                          Finance & Accounting
                        </Link>

                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                          href={'/solution/legal-compliance'}
                        >
                          Legal & Compliance
                        </Link>
                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                          href={'/solution/human-resource'}
                        >
                          Human Resources
                        </Link>

                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                          href={'/solution/operations'}
                        >
                          Operations
                        </Link>
                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                          href={'/solution/research-development'}
                        >
                          Research & Development
                        </Link>

                        <Link
                          onClick={() => setIsMenuOpen(false)}
                          className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                          href={'/solution/customer-service'}
                        >
                          Customer Service
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
                <li
                  className="flex justify-center group items-center relative "
                  onMouseEnter={() => setSolutionsPop(true)}
                  onMouseLeave={() => setSolutionsPop(false)}
                >
                  <p
                    onMouseEnter={() => setSolutionsPop(true)}
                    onMouseLeave={() => setSolutionsPop(false)}
                    className="text-[#374151] text-base cursor-pointer  font-medium hover:text-black"
                  >
                    <div className="flex items-center gap-0.5 text-stone700 hover:text-stone900 hover:font-semibold">
                      {' '}
                      <div>Resources</div> <DownArrowIcon />
                    </div>
                  </p>
                  {solutionsPop && (
                    <div
                      onMouseEnter={() => setSolutionsPop(true)}
                      onMouseLeave={() => setSolutionsPop(false)}
                      onClick={() => setSolutionsPop(false)}
                      className="flex flex-col  bg-white p-[10px_0px] border border-solid border-bordergray shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-2xl w-50 absolute box_shadow gap-2.5 -left-1 top-full z-30"
                    >
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                        href={'/blogs'}
                      >
                        Blogs
                      </Link>
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                        href={'/videos'}
                      >
                        Videos
                      </Link>
                      {/* <Link
                        href={'/'}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                      >
                        Customer Stories
                      </Link> */}
                      <Link
                        href={'/webinar'}
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                      >
                        Webinars
                      </Link>
                    </div>
                  )}
                </li>

                <li
                  className="flex justify-center  group items-center relative"
                  onMouseEnter={() => setResourcesPop(true)}
                  onMouseLeave={() => setResourcesPop(false)}
                >
                  <p
                    onMouseEnter={() => setResourcesPop(true)}
                    onMouseLeave={() => setResourcesPop(false)}
                    className="text-[#374151] text-base cursor-pointer font-medium hover:text-black"
                  >
                    <div className="flex items-center gap-0.5 text-stone700 hover:text-stone900 hover:font-semibold">
                      {' '}
                      <div>Company</div> <DownArrowIcon />
                    </div>
                  </p>
                  {resourcespop && (
                    <div
                      onMouseEnter={() => setResourcesPop(true)}
                      onMouseLeave={() => setResourcesPop(false)}
                      onClick={() => setResourcesPop(false)}
                      className="flex flex-col  bg-white p-[10px_0px] border border-solid border-bordergray shadow-[0_2px_10px_rgba(0,0,0,0.1)] rounded-2xl w-50 absolute box_shadow gap-2.5 -left-1 top-full z-30"
                    >
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                        href="/about-us"
                      >
                        About Us
                      </Link>
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                        href="/events"
                      >
                        Events
                      </Link>
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                        href="/media"
                      >
                        Media
                      </Link>
                      {/* <Link
                        onClick={() => setIsMenuOpen(false)}
                        className="flex text-[#000] text-sm p-[2px_15px] w-full text-start cursor-pointer font-normal gap-3  hover:bg-(--color-hoverBorderGray) hover:text-stone-900 transition-colors"
                        
                      >
                        Careers
                      </Link> */}
                    </div>
                  )}
                </li>
              </ul>
              <div className="flex flex-col items-center  gap-3  px-3 xl:hidden">
                <div
                  className="flex items-center justify-center gap-3 xl:hidden"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    onClickButton={() => router.push('/contact-us')}

                    //   className="border border-[rgb(229, 231, 235)] rounded-[10px] text-white bg-primary font-medium text-sm px-3.5 py-2 hover:bg-[#ef544c] hover:font-extrabold duration-500  text-center"
                  >
                    Contact
                  </Button>
                </div>
              </div>
            </div>
            {/* desktop Menu Toggle Button */}
            <div className="gap-3 w-60  hidden xl:flex justify-end">
              <Button
                onClickButton={() => router.push('/contact-us')}
                //   className="border border-[rgb(229, 231, 235)] rounded-[10px] text-white bg-primary font-medium text-sm px-3.5 py-2 hover:bg-[#ef544c] hover:font-extrabold duration-500  text-center"
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
