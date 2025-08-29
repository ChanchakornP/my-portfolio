"use client";

import Image from "next/image";

export type TimelineItemProps = {
    title: string;
    subtitle: string;
    description?: string[]; // always array from config
    logo: string;
};

export default function TimelineItem({
    title,
    subtitle,
    description = [],
    logo,
}: TimelineItemProps) {
    return (
        <li className="relative pl-4">
            {/* timeline dot */}
            <span className="absolute -left-2 top-1 w-4 h-4 bg-primary rounded-full" />

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-default-600 text-sm">{subtitle}</p>

                    {description.length > 0 && (
                        <ul className="mt-2 list-disc list-inside text-default-500 text-sm space-y-1">
                            {description.map((point, idx) => (
                                <li key={idx}>{point}</li>
                            ))}
                        </ul>
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
