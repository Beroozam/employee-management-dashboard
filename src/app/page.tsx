import GridEmployees from "@/components/grid/grid";

export default function Home() {
  return (
    <main className="p-4 py-10">
      <h1 className={`w-full flex justify-center text-xl text-center text-white font-bold mb-2`}>Next app - Dashboard Employees management</h1>
      <h2 className={`w-full flex justify-center text-lg text-white font-bold`}>CRUD operation</h2>
      <GridEmployees />
    </main>
  );
}
