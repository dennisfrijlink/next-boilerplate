import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  const { t } = useTranslation();

  const router = useRouter();

  const changeTo = router.locale === "en" ? "nl" : "en";

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-5">
      <h1 className="text-5xl font-bold">{t("common.title")}</h1>
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
