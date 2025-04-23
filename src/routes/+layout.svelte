<script>
	import '../app.css';
	
	let { children } = $props();
</script>

<div class="relative mx-auto min-h-screen max-w-2xl bg-background px-6 py-12 font-sans antialiased sm:py-24">
	{@render children()}
</div>


