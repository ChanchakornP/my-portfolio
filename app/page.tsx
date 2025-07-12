import { PageHero } from "@/components/page-hero";
import { AchievementPlaylist } from "@/components/AchievementPlaylist";
const options = { loop: true };

export default async function Home() {

  return (
    <div>
      <PageHero />
      <AchievementPlaylist />
    </div>
  );
}
