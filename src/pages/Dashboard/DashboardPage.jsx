import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";

const DashboardPage = () => {
  return (
    <section id="dashboard" className=" w-screen min-h-[100dvh] bg-neutral-200">
      <div className="lg:container mx-auto  flex lg:flex-row flex-col ">
        <Sidebar />
      </div>
    </section>
  );
};

export default DashboardPage;
