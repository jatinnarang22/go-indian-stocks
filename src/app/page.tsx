import Navbar from "./Navbar/page";
import Tabs from "./Tabes/pages"

export default function Home() {
  return (
    <div className="flex  h-screen">
      <Navbar />
      <Tabs/>
    </div>
  );
}
