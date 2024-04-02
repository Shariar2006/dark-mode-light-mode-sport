import Sports from "./Sports";
import CollectionSpotlight from "./CollectionSpotlight";
import ThemeSwitch from "./ThemeSwitch";

export default function Home() {
  return (
    <main className="m-20">
      <div className="flex justify-between items-center">
      <header className="text-2xl font-bold underline">Sports</header>

<ThemeSwitch/>
      </div>

      <Sports/>
      <CollectionSpotlight/>
    </main>
  );
}



