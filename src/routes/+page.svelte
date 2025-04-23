<script>
    import BlurFade from "$lib/components/Design/BlurFade.svelte";
    import * as Avatar from "$lib/components/Helpers/Avatar";
    import { DATA } from '$lib/data/resume';
    let BLUR_FADE_DELAY = 0.04;
</script>

<main class="flex min-h-[100dvh] flex-col space-y-10">

    <section id="hero">
		<div class="mx-auto w-full max-w-2xl space-y-8">
			<div class="flex justify-between gap-2">
				<div class="flex flex-1 flex-col space-y-1.5">
					<BlurFade
						delay={BLUR_FADE_DELAY}
						class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
						yOffset={8}>Hi, I'm Suprada 👋</BlurFade
					>
					<BlurFade class="max-w-[600px] md:text-xl" delay={BLUR_FADE_DELAY}
						>Full Stack Web Developer. I love building things and helping people. Linux Enthusiast.</BlurFade
					>
				</div>
				<BlurFade delay={BLUR_FADE_DELAY}>
					<Avatar.Root class="size-28 border">
						<Avatar.Image alt={DATA.name} src={DATA.avatarUrl} />
						<Avatar.Fallback>{DATA.initials}</Avatar.Fallback>
					</Avatar.Root>
				</BlurFade>
			</div>
		</div>
	</section>
    
</main>
