import { mrRecordsPlatformContent } from '../../constants/constants';
import PlatformPageClient from '../../components/platform/PlatformPageClient';

/* REQUIRED FOR STATIC EXPORT */
export async function generateStaticParams() {
  return Object.keys(mrRecordsPlatformContent).map((key) => ({
    id: key,
  }));
}

async function Page({ params }) {
  console.log({ params });

  const { id } = await params;
  console.log('ID:', id);
  // const parseValue = JSON.parse(JSON.stringify(value));

  const contentToDisplay = mrRecordsPlatformContent[id];

  if (!contentToDisplay) {
    return null;
  }

  return <PlatformPageClient contentToDisplay={contentToDisplay} />;
}

export default Page;
