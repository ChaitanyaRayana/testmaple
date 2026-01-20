import { useEffect } from 'react';
import { ICONS } from './icons/AllIcons';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Table({ stats = [] }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (!stats || stats.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-6 text-center text-gray-500">
        No records available.
      </div>
    );
  }

  return (
    // <div className=" mx-auto overflow-x-auto">
    <table className="min-w-full divide-y divide-gray-200 bg-white">
      <caption className="sr-only">Statistics table</caption>
      {/* <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-600">
              #
            </th>
            <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-600">
              Value
            </th>
            <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-600">
              Title
            </th>
            <th scope="col" className="px-4 py-3 text-left text-sm font-medium text-gray-600">
              Description
            </th>
          </tr>
        </thead> */}

      <tbody className="divide-y divide-gray-100">
        {stats.map((item, index) => {
          const Icon = item?.isIcon ? ICONS[item?.value] : null;
          return (
            <tr
              data-aos="fade-left"
              data-aos-duration={(index + 1) * 400}
              key={index}
              className="hover:bg-gray-50"
            >
              {/* <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td> */}

              <td className="px-4 py-4 whitespace-nowrap text-sm font-semibold">
                {Icon ? (
                  <div className="w-12 h-12 text-center rounded-2xl bg-[#DFEDFA] flex justify-center items-center">
                    <Icon width={24} height={24} className="text-[#0f5291]" />
                  </div>
                ) : (
                  <span className="text-[#0f5291] text-2xl">{item?.value}</span>
                )}
              </td>

              <td className="px-4 py-4 align-center text-sm text-black font-medium">
                {item?.title}
              </td>

              <td className="px-4 py-4 text-sm text-gray-600 leading-relaxed max-w-2xl">
                {item?.description}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    // </div>
  );
}

export default Table;
