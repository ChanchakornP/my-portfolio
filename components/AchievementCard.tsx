"use client";

import React from "react";
import { Card, CardBody, Image, Button, Slider } from "@heroui/react";
import {
    HeartIcon,
    PauseCircleIcon,
    PlayIcon,
    RepeatOneIcon,
    NextIcon,
    PreviousIcon,
    ShuffleIcon,
} from "@/components/icons";

type AchievementCardProps = {
    title: string;
    subtitle: string;
    image: string;
    totalSteps: number;         // Always 5 (seconds)
    completedSteps: number;     // Increments 0 to 5 each second
    onNext?: () => void;
    onPrev?: () => void;
    onPause?: () => void;
    isPlaying?: boolean;
};

export const AchievementCard = ({
    title,
    subtitle,
    image,
    totalSteps,
    completedSteps,
    onNext,
    onPrev,
    onPause,
    isPlaying,
}: AchievementCardProps) => {
    const [liked, setLiked] = React.useState(false);
    const progress = Math.floor((completedSteps / totalSteps) * 100);

    return (
        <Card
            isBlurred
            className="border-none bg-background/60 dark:bg-default-100/50 max-w-[760px] p-6"
            shadow="sm"
        >
            <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
                    <div className="relative col-span-6 md:col-span-7">
                        <Image
                            alt={`${title} badge`}
                            className="object-cover"
                            height={280}
                            shadow="md"
                            src={image}
                            width="100%"
                        />
                    </div>

                    <div className="flex flex-col col-span-6 md:col-span-5">
                        <div className="flex justify-between items-start">
                            <div className="flex flex-col gap-0">
                                <h3 className="font-semibold text-foreground/90">{subtitle}</h3>
                                <p className="text-small text-foreground/80">{totalSteps} sec</p>
                                <h1 className="text-large font-medium mt-2">{title}</h1>
                            </div>
                            <Button
                                isIconOnly
                                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                                radius="full"
                                variant="light"
                                onPress={() => setLiked((v) => !v)}
                            >
                                <HeartIcon
                                    className={liked ? "[&>path]:stroke-transparent" : ""}
                                    fill={liked ? "currentColor" : "none"}
                                />
                            </Button>
                        </div>

                        <div className="flex flex-col mt-3 gap-1">
                            <Slider
                                aria-label="Progress"
                                classNames={{
                                    track: "bg-default-500/30",
                                    thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                                }}
                                color="foreground"
                                value={progress}
                                size="sm"
                            />
                            <div className="flex justify-between">
                                <p className="text-small">{completedSteps} sec</p>
                                <p className="text-small text-foreground/50">{progress}%</p>
                            </div>
                        </div>

                        <div className="flex w-full items-center justify-center gap-1 mt-2">
                            <Button isIconOnly variant="light" radius="full">
                                <RepeatOneIcon className="text-foreground/80" />
                            </Button>
                            <Button isIconOnly variant="light" radius="full" onPress={onPrev}>
                                <PreviousIcon />
                            </Button>
                            <Button isIconOnly variant="light" radius="full" onPress={onPause}>
                                {isPlaying ? (
                                    <PauseCircleIcon size={54} />
                                ) : (
                                    <PlayIcon size={54} />
                                )}
                            </Button>
                            <Button isIconOnly variant="light" radius="full" onPress={onNext}>
                                <NextIcon />
                            </Button>
                            <Button isIconOnly variant="light" radius="full">
                                <ShuffleIcon className="text-foreground/80" />
                            </Button>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};
