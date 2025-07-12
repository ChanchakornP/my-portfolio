"use client";

import Image from "next/image";

type TimelineItemProps = {
    title: string;
    subtitle: string;
    description?: string;
    logo: string;
};

function TimelineItem({ title, subtitle, description, logo }: TimelineItemProps) {
    return (
        <li className="relative pl-4">
            <span className="absolute -left-2 top-1 w-4 h-4 bg-primary rounded-full" />
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-default-600 text-sm">{subtitle}</p>
                    {description && (
                        <p className="text-default-500 text-sm mt-1 whitespace-pre-line">
                            {description}
                        </p>
                    )}
                </div>
                <Image
                    src={logo}
                    alt={title}
                    width={60}
                    height={60}
                    className="object-contain shrink-0"
                />
            </div>
        </li>
    );
}

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
                    <TimelineItem
                        title="University of Sydney"
                        subtitle="Master of Computer Science (2024 - Present)"
                        description="AVG WAM: 85.5"
                        logo="/aboutme/usyd-logo.png"
                    />
                    <TimelineItem
                        title="Chiang Mai University"
                        subtitle="Bachelor of Electrical Engineering (2016 - 2020)"
                        description="GPA: 3.93 / 4.00 — First Class Honour"
                        logo="/aboutme/cmu-logo.png"
                    />
                </ol>
            </section>

            {/* === Work Experience === */}
            <section>
                <h2 className="text-2xl font-semibold flex items-center gap-2 mb-6">
                    Work Experience
                </h2>

                <ol className="relative border-l border-default-300 space-y-10 pl-4">
                    <TimelineItem
                        title="Machine Learning Engineer"
                        subtitle="AppMan Co., Ltd. — Thailand"
                        description={`Built OCR + NLP pipelines, vector DB APIs, used Kubernetes, Argo, RAG, and distributed training methods (ZeRO, gradient accumulation).`}
                        logo="/aboutme/appman-logo.png"
                    />
                    <TimelineItem
                        title="Super AI Engineer Participant"
                        subtitle="AIAT (SIIT Bootcamp)"
                        description="Worked on NLP, robotics, image processing, and signal tasks in hackathons using real-world data challenges."
                        logo="/aboutme/super-ai-logo.jpeg"
                    />
                    <TimelineItem
                        title="Software Engineer"
                        subtitle="Toyota Tsusho Nexty Electronics"
                        description="Developed and tested embedded software, focused on unit and integration testing in automotive systems."
                        logo="/aboutme/nexty-logo.webp"
                    />
                    <TimelineItem
                        title="Test Development Engineer"
                        subtitle="Maxim Integrated Thailand"
                        description="Analyzed OS upgrades for wafer productivity; used data analysis to validate results."
                        logo="/aboutme/maxim-logo.jpg"
                    />
                </ol>
            </section>
        </div>
    );
}
