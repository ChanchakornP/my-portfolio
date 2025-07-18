import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { title, subtitle } from "@/components/primitives";

export const PageHero = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: "violet" })}>Welcome&nbsp;</span>
        <span className={title()}>to my website</span>
        <div className={subtitle({ class: "mt-4" })}>
          I am Chanchakorn Pattana (Sean), a machine learning engineer.
        </div>
      </div>
      <div className="flex gap-3">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/about"
        >
          VIEW MY PROFILE
        </Link>
      </div>
    </section>
  );
};
