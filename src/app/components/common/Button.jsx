'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

function Button({
  children,
  gradientColor = 'bg-linear-to-br from-[#EBF3FA] to-[#DFEDFA] rounded  hover:text-white',
  padding = '',
  onClickButton = () => {},
  type = 'submit',
  disabled = false,
  arrowIcon = false,
}) {
  const childrenName =
    children === 'Schedule Demo' ||
    children === 'Get Started Today' ||
    children === 'Contact Us' ||
    children === 'Contact Our Team' ||
    children === 'Contact Sales' ||
    children === 'Contact'
      ? true
      : false;
  const router = useRouter();
  return (
    <button
      href={''}
      onClick={(e) => {
        if (childrenName) {
          router.push('/contact-us#schedule-demo');
          return;
        }
        onClickButton && onClickButton(e);
      }}
      type={type}
      disabled={disabled}
      className={`px-3.5 py-2 cursor-pointer text-sm font-semibold font-body text-black hover:bg-linear-to-bl hover:from-[#96badb] hover:to-[#5f7e9a] ${gradientColor} ${padding}`}
    >
      {children}
      {arrowIcon && (
        <span
          className=" inline-block
        ml-2
        transition duration-300 ease-out
        hover:translate-x-1"
        >
          →
        </span>
      )}
    </button>
  );
}

export default Button;
