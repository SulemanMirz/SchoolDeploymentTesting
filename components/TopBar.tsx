import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { memo, useContext, useState } from "react";
import { SchoolTableFields } from "../models/SchoolModel";
import styles from "../styles/TopBar.module.scss";
import { SchoolContext } from "./SchoolContext";

export const getThumbUrl = (originalPath: string) =>
  `/assets/thumb/${originalPath.split(".attachmentThumbnails/")[1]}`;

export const TopBar: React.ComponentType<{ children: React.ReactNode }> = memo(
  ({ children }) => {
    const school = useContext(SchoolContext);
    const slug = school[SchoolTableFields.SLUG];
    const router = useRouter();
    const [schoolLogo, setSchoolLogo] = useState<string>(
      school[SchoolTableFields.LOGO]?.[0]?.url
    );

    const DefaultSchoolAvatar = "/assets/DefaultSchoolGrey.svg";

    const getNewImage = () => {
      setSchoolLogo(DefaultSchoolAvatar);
      axios("/api/School", {
        params: {
          slug: router?.query?.slug,
        },
      })
        .then((res) => {
          setSchoolLogo(res.data[SchoolTableFields.LOGO]?.[0]?.url);
        })
        .catch((error) => console.log(error));
    };

    return (
      <nav className="w-full shadow-sm">
        <div className={"max-w-screen-md my-0 mx-auto px-5"}>
          <div itemScope className={"flex items-center my-3.5"}>
            {school[SchoolTableFields.LOGO] && (
              <Link href={`/${slug}`}>
                <span itemProp="schoolLogo" style={{ marginRight: "15px", height: "40px" }}>
                  <img
                    src={schoolLogo}
                    className={styles.logo}
                    alt={`${school[SchoolTableFields.NAME]} logo`}
                    onError={() => getNewImage()}
                    placeholder="blur"
                    width="40px"
                    height="40px"
                  />
                </span>
              </Link>
            )}
            <h1 itemProp="schoolName" className={styles.title}>
              <Link href={`/${slug}`}>
                {school[SchoolTableFields.NAME] || "Missing name"}
              </Link>
            </h1>
            {!router.pathname.endsWith("/trial") && (
              <Link href={`/${slug}/trial`}>
                <div className="cursor-pointer ml-auto px-4 py-2 bg-dojored uppercase text-xs font-black flex-shrink-0">
                  Try for free
                </div>
              </Link>
            )}
          </div>
          {children}
        </div>
      </nav>
    );
  }
);
