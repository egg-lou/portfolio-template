import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Hi I am&nbsp;</span>
          <span className={title({ color: "violet" })}>Nickaname&nbsp;</span>
          <br />
          <span className={title()}>and I am an aspiring blank developer.</span>
          <div className={subtitle({ class: "mt-4" })}>
            This is where you can find me and my projects.
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
