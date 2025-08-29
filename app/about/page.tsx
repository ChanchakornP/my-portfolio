"use client";

import { education, workExperience } from "@/config/aboutMe";
import TimelineItem from "@/components/TimelineItem"; // if you moved it out

export default function About() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
            <h1 className="text-4xl font-bold text-center">About Me</h1>

            {/* === Education === */}
            <section>
                <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
                    Education
                </h2>
                <ol className="relative border-l border-default-300 space-y-10 pl-4">
                    {education.map((item, idx) => (
                        <TimelineItem key={idx} {...item} />
                    ))}
                </ol>
            </section>

            {/* === Work Experience === */}
            <section>
                <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
                    Work Experience
                </h2>
                <ol className="relative border-l border-default-300 space-y-10 pl-4">
                    {workExperience.map((item, idx) => (
                        <TimelineItem key={idx} {...item} />
                    ))}
                </ol>
            </section>
        </div>
    );
}
