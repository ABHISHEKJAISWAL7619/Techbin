import Courselessons from "@/component/pages/Courselessons";
import MainLayout from "@/component/templates/MainLayout";

// import MainLayout from "@/ui/templates/MainLayout";

const page = async () => {
  return (
    <MainLayout>
      <Courselessons />
    </MainLayout>
  );
};

export default page;
