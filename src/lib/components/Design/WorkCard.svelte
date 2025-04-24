<script lang="ts">
	import Badge from '$lib/components/Helpers/Badge/badge.svelte';
	import * as Avatar from '$lib/components/Helpers/Avatar/index';
	import { marked } from 'marked';
	export let title: string;
	export let description: string;
	export let dates: string;
	export let location: string;
	export let image: string = '';
	export let links: readonly {
		icon?: any;
		title: string;
		href: string;
	}[] = [];

    import { slide } from 'svelte/transition';
    import { quartOut } from 'svelte/easing';
    import { ChevronRightIcon } from 'lucide-svelte';
    import { cn } from '$lib/utils';
    export let tags: readonly string[];
    let isExpanded = false;
    let handleClick = (e: MouseEvent) => {
		if (description) {
			e.preventDefault();
			isExpanded = !isExpanded;
		}
	};
</script>

<li class="relative ml-10 py-4">
	<div class="absolute -left-16 top-2 flex items-center justify-center rounded-full bg-white">
		<Avatar.Root class="m-auto size-12 border">
			<Avatar.Image src={image} alt={title} class="object-contain" />
			<Avatar.Fallback>{title[0]}</Avatar.Fallback>
		</Avatar.Root>
	</div>
	<div class="flex flex-1 flex-col justify-start gap-1">
		{#if dates}
			<time class="text-xs text-muted-foreground">{dates}</time>
		{/if}
        <h2 class="font-semibold leading-none">{title} </h2>

        <!-- <div class="flex items-center justify-between gap-x-2 text-base">
            <h2 class="font-semibold leading-none">
                {title}
                <ChevronRightIcon
            class={cn(
                'size-4 translate-x-0 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100',
                isExpanded ? 'rotate-90' : 'rotate-0'
            )}
            />
            </h2>
        </div>
		 -->
        
		{#if location}
			<p class="text-sm text-muted-foreground">{location}</p>
		{/if}
		{#if description}
			<span class="prose dark:prose-invert text-sm text-muted-foreground">
				{@html marked(description)}
			</span>
		{/if}
        <!-- {#if extraDescription}
            {#if isExpanded}
                <div
                    class="mt-2 text-xs sm:text-sm"
                    transition:slide={{
                        duration: 700,
                        easing: quartOut
                    }}
                >
                    {description}
                </div>
            {/if}
         {/if} -->
	</div>

    {#if links && links.length > 0}
		<div class="mt-2 flex flex-row flex-wrap items-start gap-2">
			{#each links as link, idx}
				<a href={link.href}>
					<Badge key={idx} title={link.title} class="flex gap-2">
						<svelte:component this={link.icon} class="h-4 w-4 " strokeWidth={1.6} />
						{link.title}
					</Badge>
				</a>
			{/each}
		</div>
	{/if}

    <div class="mt-auto flex flex-col px-2 text-pretty font-sans text-sm text-muted-foreground">
		{#if tags && tags.length > 0}
			<div class="mt-2 flex flex-wrap gap-1">
				{#each tags as tag}
					<Badge class="rounded-[4px] px-1 py-0 text-[10px]" variant="secondary">
						{tag}
					</Badge>
				{/each}
			</div>
		{/if}
	</div>

	
</li>
