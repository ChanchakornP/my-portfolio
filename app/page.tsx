import { PageHero } from "@/components/page-hero";
import { AchievementPlaylist } from "@/components/AchievementPlaylist";
import { Image } from "@heroui/image";
export default async function Home() {
  return (
    <div>
      <PageHero />

      <div className="flex flex-col items-center gap-6">
        <Image
          src="/certificates/AWS-SAA-Badge.png"
          alt="AWS Solutions Architect – Associate"
          width={120}
          height={120}
          className="object-contain"
        />

        <AchievementPlaylist />
      </div>
    </div>
  );
}
