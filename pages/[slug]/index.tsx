import { useRouter } from "next/router";
import { useEffect } from "react";

// required to use getStaticPaths
export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export { getSchoolStaticPaths as getStaticPaths } from "services/SchoolService";

export default function IndexSchool() {
  const router = useRouter();

  useEffect(() => {
    router.push(`/${router.query.slug}/schedule`);
  }, []);

  return <></>;
}
