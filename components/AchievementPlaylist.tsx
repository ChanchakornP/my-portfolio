"use client";

import React, { useState, useEffect } from "react";
import { AchievementCard } from "./AchievementCard";
import { achievementConfig } from "@/config/achievement";
const SLIDE_DURATION_SECONDS = 5;


export const AchievementPlaylist = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progressSeconds, setProgressSeconds] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % achievementConfig.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? achievementConfig.length - 1 : prev - 1
        );
    };

    const handlePause = () => setIsPlaying((prev) => !prev);

    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setProgressSeconds((prevProgress) => {
                if (prevProgress + 1 >= SLIDE_DURATION_SECONDS) {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievementConfig.length);
                    return 0;
                }
                return prevProgress + 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [isPlaying]);

    useEffect(() => {
        setProgressSeconds(0); // Reset progress when changing slide
    }, [currentIndex]);

    const current = achievementConfig[currentIndex];

    return (
        <AchievementCard
            {...current}
            totalSteps={SLIDE_DURATION_SECONDS}
            completedSteps={progressSeconds}
            onNext={handleNext}
            onPrev={handlePrev}
            onPause={handlePause}
            isPlaying={isPlaying}
        />
    );
};
