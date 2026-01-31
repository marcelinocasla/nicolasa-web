import Hero from '@/components/Hero';
import MenuList from '@/components/MenuList';
import BannerPlayer from '@/components/remotion/BannerPlayer';

export default function Home() {
  return (
    <main className="min-h-screen pb-20">
      <Hero />
      <BannerPlayer title="¡PLATO ESTRELLA!" content="Pique a lo Macho" />
      <MenuList />
    </main>
  );
}
