import HomePage from "@/component/pages/HomePage";
import MainLayout from "@/component/templates/MainLayout";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <HomePage />
    </MainLayout>
  );
}
