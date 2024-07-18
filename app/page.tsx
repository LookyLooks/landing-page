import { HeaderWrapper } from "../components/HeaderWrapper";
import { MainWrapper } from "../components/MainWrapper";
import { Button } from "../components/Button";
import { NavbarMenu } from "../components/NavbarMenu";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-backgrounddefault">
      <div className="w-full flex justify-center">
        <HeaderWrapper />
      </div>
      <main className="w-full flex justify-center">
        <MainWrapper />
      </main>
    </div>
  );
}