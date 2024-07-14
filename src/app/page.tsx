import {lazy, Suspense} from 'react';
// import GridEmployees from "@/components/grid/grid";
const GridEmployees = lazy(() => import('@/components/grid/grid'));

export default function Home() {
  return (
    <main className="p-4 py-10 pb-6">
      <h1 className={`w-full flex justify-center text-xl text-center text-black font-bold mb-2`}>Next app - Dashboard Employees management</h1>
      <h2 className={`w-full flex justify-center text-lg text-black font-bold`}>CRUD operation</h2>
      <Suspense fallback={<p>Loading...</p>}>
        <GridEmployees />
      </Suspense>
    </main>
  );
}
