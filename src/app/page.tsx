import Sports from "./Sports";
import CollectionSpotlight from "./CollectionSpotlight";

export default function Home() {
  return (
    <main className="m-20">
      <header className="text-2xl font-bold underline">Sports</header>

      <Sports/>
      <CollectionSpotlight/>
    </main>
  );
}



