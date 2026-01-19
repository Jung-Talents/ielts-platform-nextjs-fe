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

	const userInteractedAtRef = useRef(0);

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
		userInteractedAtRef.current = Date.now();
	};

	useEffect(() => {
		if (!autoPlay || total <= 1) return;

		const startedAt = Date.now();

		const id = window.setTimeout(() => {
			if (pausedRef.current) return;

			if (userInteractedAtRef.current > startedAt) return;

			setEnableTransition(true);
			setIndex((i) => i + 1);
		}, intervalMs);

		return () => window.clearTimeout(id);
	}, [autoPlay, intervalMs, total, index, enableTransition]);

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
		<section className="w-full bg-white">
			<div className="mx-auto max-w-[1440px]">
				<div
					className="relative overflow-hidden rounded-3xl"
					onMouseEnter={() => setPaused(true)}
					onMouseLeave={() => setPaused(false)}
				>
					<div
						onTransitionEnd={onTransitionEnd}
						className={[
							"flex will-change-transform",
							enableTransition
								? "transition-transform duration-250 ease-out"
								: "transition-none",
						].join(" ")}
						style={{ transform: `translateX(-${index * 100}%)` }}
					>
						{extended.map((s, i) => (
							<div key={`${s.id}-${i}`} className="w-full flex-shrink-0">
								<div className="relative w-full" style={{ aspectRatio: "1253 / 773" }}>
									<Image
										src={s.imageSrc}
										alt={s.imageAlt}
										fill
										priority={i === 1}
										sizes="100vw"
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
								className="fixed left-0 top-1/2 z-50 -translate-y-1/2 h-14 w-10 bg-zinc-300/80 text-lg text-white flex items-center justify-center hover:bg-zinc-300"
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
								className="fixed right-0 top-1/2 z-50 -translate-y-1/2 h-14 w-10 bg-zinc-300/80 text-lg text-white flex items-center justify-center hover:bg-zinc-300"
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
			</div>
		</section>
	);
}
