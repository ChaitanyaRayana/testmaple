import {
  departmentalSolutions,
  industriesSolutions,
} from '../../constants/constants';

import SolutionPageClient from '../../components/solutions/SolutionPageClient';

/* REQUIRED FOR STATIC EXPORT */
export async function generateStaticParams() {
  return Object.keys({ ...industriesSolutions, ...departmentalSolutions }).map(
    (key) => ({
      id: key,
    })
  );
}
async function Page({ params }) {
  console.log({ params });

  const { id } = await params;
  console.log('ID:', id);
  const contentToDisplay =
    industriesSolutions?.[id] || departmentalSolutions?.[id];

  console.log({ contentToDisplay });

  return (
    <SolutionPageClient contentToDisplay={contentToDisplay} pathName={id} />
  );
}

export default Page;
