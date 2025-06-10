import Courselessons from "@/component/pages/Courselessons";

import MainLayout from "@/component/templates/MainLayout";

const page = async ({ params }) => {
  const { courseId } = await params;
  return (
    <MainLayout>
      <Courselessons courseId={courseId} />
    </MainLayout>
  );
};

export default page;
