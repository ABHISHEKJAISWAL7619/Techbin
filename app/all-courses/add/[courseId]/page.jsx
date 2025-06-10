import AddNewCourse from "@/component/pages/AddNewCourse";
import MainLayout from "@/component/templates/MainLayout";

const page = async ({ params }) => {
  const { courseId } = await params;
  return (
    <MainLayout>
      <AddNewCourse courseId={courseId} />
    </MainLayout>
  );
};

export default page;
