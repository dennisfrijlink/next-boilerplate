import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { NextjsLogo } from "@/assets/svg";
import Title from "@/components/Title";

export default function Home() {
  const { t } = useTranslation();

  const router = useRouter();

  const changeTo = router.locale === "en" ? "nl" : "en";

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-5">
      <NextjsLogo className="w-auto h-10" />
      <Title text={t("common.title")} />
      <Link href="/" locale={changeTo}>
        <button>{t("change-locale", { changeTo })}</button>
      </Link>
    </main>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
