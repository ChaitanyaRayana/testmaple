import { dummyBlogsPosts } from '../../constants/constants';
import BlogContent from '../../components/blog-content/BlogContent';

/* REQUIRED FOR STATIC EXPORT */
export async function generateStaticParams() {
  return dummyBlogsPosts.map((key) => ({
    id: key?.id,
  }));
}

async function Page({ params }) {
  console.log({ params });

  const { id } = await params;
  console.log('ID:', id);
  // const parseValue = JSON.parse(JSON.stringify(value));

  const contentToDisplay = dummyBlogsPosts?.find((item) => item?.id === id);

  if (!contentToDisplay) {
    return null;
  }

  return <BlogContent contentToDisplay={contentToDisplay} />;
}

export default Page;
