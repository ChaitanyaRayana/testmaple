'use client';
import { useRouter } from 'next/navigation';
import { MapleLogo, VerticalBorderPattern } from './Icon';
import Link from 'next/link';
import Button from './Button';

function Fotter() {
  const footerContent = {
    'Quick Links': [
      { label: 'About Us', href: '/about-us' },
      // { label: 'Pricing', href: '/pricing' },
      { label: 'Blog', href: '/blogs' },
      { label: 'Become an affiliate', href: '/affiliate' },
      { label: 'Events', href: '/events' },
      // { label: 'Sign in', href: '/sign-in' },
      // { label: 'Start now', href: '/start' },
    ],
    'Social Media': [
      { label: 'Facebook', href: '/facebook' },
      { label: 'Instagram', href: '/instagram' },
      { label: 'Twitter', href: '/twitter' },
      { label: 'LinkedIn', href: '/linkedin' },
      // { label: 'YouTube', href: '/youtube' },
      // { label: 'Email', href: '/email' },
    ],
  };

  const router = useRouter();

  return (
    <footer className="  flex max-h-max w-full max-w-7xl  mx-auto flex-col flex-wrap items-center justify-between  bg-white font-body h-full">
      <div className="flex  flex-row flex-wrap items-center w-full text-center pb-5">
        <VerticalBorderPattern>
          <div className="flex w-full max-w-300 mx-auto flex-row flex-wrap flex-1 h-full items-start justify-between px-10 gap-8">
            <div className="w-full flex lg:flex-row max-lg:flex-col justify-start gap-8 items-start pt-16">
              <div className="flex flex-col gap-6">
                <div className="w-60 h-8">
                  <MapleLogo />
                </div>
                <div className="flex flex-col gap-4 w-40">
                  <Button
                    padding="w-full"
                    onClickButton={() => {
                      router.push('/contact-us#schedule-demo');
                    }}
                  >
                    Start Now
                  </Button>
                  <Button
                    onClickButton={() => {
                      router.push('/contact-us#schedule-demo');
                    }}
                    padding="w-full"
                    gradientColor="rounded bg-linear-to-br from-[#faf6eb] to-[#f9adad] hover:text-white hover:from-[#faf6eb] hover:to-[#ff5b5b]"
                  >
                    Simple Pricing
                  </Button>
                </div>
              </div>
              <div className="flex flex-wrap gap-8">
                {Object.keys(footerContent).map((section, i) => (
                  <div key={i} className="flex flex-col gap-6 p-[2px_15px]">
                    <p className="text-gray-500 text-xl h-6 text-start font-medium">
                      {section}
                    </p>
                    <div className="flex flex-col gap-3">
                      {footerContent[section]?.map((sectionItem) => (
                        <Link
                          key={sectionItem.href}
                          href={sectionItem.href}
                          className="relative text-stone-700 h-6  w-fit text-lg font-normal cursor-pointer transition-all duration-300 hover:text-black after:absolute after:left-0 after:-bottom-0.5 after:h-0.5 after:w-0 after:bg-stone-400 hover:after:w-full after:transition-all after:duration-300"
                        >
                          {sectionItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div></div>
              <div></div>
            </div>
            <div className="w-full font-body flex flex-wrap gap-8 justify-between items-center pb-8">
              <p className="text-stone700 h-5 font-normal">
                &#169; 2026 MapleRecord Inc. All rights reserved.
              </p>
              <div className="flex flex-row h-5 gap-11.5">
                <Link
                  href="/terms"
                  className="text-stone700 hover:text-stone900"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/privacy-policy"
                  className="text-stone700 hover:text-stone900"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </VerticalBorderPattern>
      </div>
    </footer>
  );
}

export default Fotter;
