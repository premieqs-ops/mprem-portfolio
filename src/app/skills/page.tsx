import type { Metadata } from "next";
import SkillsEcosystem from "@/components/home/SkillsEcosystem";

export const metadata: Metadata = {
  title: "Skills",
  description: "Interactive skill ecosystem of M Prem.",
};

export default function SkillsPage() {
  return (
    <div className="pt-16">
      <SkillsEcosystem />
    </div>
  );
}
