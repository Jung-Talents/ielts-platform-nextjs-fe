"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Slide = {
	id: string;
	imageSrc: string;
	imageAlt: string;
	href?: string;
};

type Props = {
	slides: Slide[];
	autoPlay?: boolean;
	intervalMs?: number;
};

export default function CallToActionSlider({
	slides,
	autoPlay = true,
	intervalMs = 4500,
}: Props) {
	const realSlides = useMemo(() => slides.filter(Boolean), [slides]);
	const total = realSlides.length;

	const extended = useMemo(() => {
		if (total <= 1) return realSlides;
		const first = realSlides[0];
		const last = realSlides[total - 1];
		return [last, ...realSlides, first];
	}, [realSlides, total]);

	const [index, setIndex] = useState(0);
	const [enableTransition, setEnableTransition] = useState(true);

	const [paused, setPaused] = useState(false);
	const pausedRef = useRef(false);
	pausedRef.current = paused;

	const [tick, setTick] = useState(0);

	useEffect(() => {
		if (total > 1) {
			setEnableTransition(false);
			setIndex(1);
		} else {
			setIndex(0);
		}
	}, [total]);

	const next = useCallback(() => {
		if (total <= 1) return;
		setEnableTransition(true);
		setIndex((i) => i + 1);
	}, [total]);

	const prev = useCallback(() => {
		if (total <= 1) return;
		setEnableTransition(true);
		setIndex((i) => i - 1);
	}, [total]);

	const markInteracted = () => {
		setTick((t) => t + 1);
	};

	useEffect(() => {
		if (!autoPlay || total <= 1) return;
		if (paused) return;

		const id = window.setTimeout(() => {
			if (pausedRef.current) return;
			setEnableTransition(true);
			setIndex((i) => i + 1);
		}, intervalMs);

		return () => window.clearTimeout(id);
	}, [autoPlay, intervalMs, total, index, paused, tick]);

	const onTransitionEnd = () => {
		if (total <= 1) return;

		if (index === extended.length - 1) {
			setEnableTransition(false);
			setIndex(1);
			return;
		}

		if (index === 0) {
			setEnableTransition(false);
			setIndex(total);
			return;
		}
	};

	useEffect(() => {
		if (!enableTransition) {
			const id = requestAnimationFrame(() => setEnableTransition(true));
			return () => cancelAnimationFrame(id);
		}
	}, [enableTransition]);

	if (total === 0) return null;

	const activeDot = total <= 1 ? 0 : (index - 1 + total) % total;

	return (
		<div
			className="relative overflow-hidden rounded-3xl"
			onMouseEnter={() => setPaused(true)}
			onMouseLeave={() => setPaused(false)}
		>
			<div
				onTransitionEnd={onTransitionEnd}
				className={[
					"flex will-change-transform",
					enableTransition ? "transition-transform duration-250 ease-out" : "transition-none",
				].join(" ")}
				style={{ transform: `translateX(-${index * 100}%)` }}
			>
				{extended.map((s, i) => (
					<div key={`${s.id}-${i}`} className="w-full flex-shrink-0">
						<div className="relative w-full aspect-[1440/888]">
							<Image
								src={s.imageSrc}
								alt={s.imageAlt}
								fill
								priority={i === 1}
								sizes="(max-width: 1440px) 100vw, 1440px"
								className="object-cover"
							/>
						</div>
					</div>
				))}
			</div>

			{total > 1 && (
				<>
					<button
						type="button"
						onClick={() => {
							markInteracted();
							setPaused(false);
							prev();
						}}
						aria-label="Previous slide"
						className="absolute left-0 top-1/2 z-50 -translate-y-1/2 h-14 w-10 bg-zinc-300/80 text-lg text-white flex items-center justify-center hover:bg-zinc-300"
					>
						‹
					</button>

					<button
						type="button"
						onClick={() => {
							markInteracted();
							setPaused(false);
							next();
						}}
						aria-label="Next slide"
						className="absolute right-0 top-1/2 z-50 -translate-y-1/2 h-14 w-10 bg-zinc-300/80 text-lg text-white flex items-center justify-center hover:bg-zinc-300"
					>
						›
					</button>

					<div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
						{realSlides.map((_, i) => (
							<button
								key={i}
								type="button"
								onClick={() => {
									markInteracted();
									setPaused(false);
									setEnableTransition(true);
									setIndex(i + 1);
								}}
								aria-label={`Go to slide ${i + 1}`}
								className={`h-2 w-2 rounded-full ${
									i === activeDot ? "bg-rose-500" : "bg-zinc-300"
								}`}
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
}
