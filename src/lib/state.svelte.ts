import { browser } from "$app/environment";
import type { UsageCategory } from "@kulupu-linku/sona/utils";
// import { persisted, type Serializer } from "svelte-persisted-store/dist/index.mjs";
import { writable } from "svelte/store";
import { entries, fromEntries } from "$lib/utils";

const persisted = <T>(
	key: string,
	initialValue?: T,
	options?: { parse: (val: string) => T; stringify: (val: T) => string },
) => {
	const {
		parse = (val: string) => JSON.parse(val) as T,
		stringify = (val: T) => JSON.stringify(val),
	} = options ?? {};
	let value = $state(browser ? parse(localStorage.getItem(key) ?? ) : initialValue);

	$effect(() => {
		if (browser) {
			localStorage.setItem(key, stringify(value));
		}
	});
};

export const searchQuery = writable(
	browser ? new URLSearchParams(window.location.search).get("q") ?? "" : "",
);

export const defaultCategories: Record<Exclude<UsageCategory, "sandbox">, boolean> = {
	core: true,
	common: true,
	uncommon: false,
	obscure: false,
};

export const categoriesSerializer: Serializer<typeof defaultCategories> = {
	parse: (list) => {
		const keys = list.split(",");
		const entries = fromEntries(
			keys.map((it) => [it as keyof typeof defaultCategories, true] as const),
		);

		return {
			...defaultCategories,
			...entries,
		};
	},
	stringify: (obj) =>
		entries(obj)
			.filter(([, on]) => on)
			.map(([key]) => key)
			.join(","),
};

export const categories = persisted("categories", defaultCategories, {
	serializer: categoriesSerializer,
});

export const writingSystem = persisted<"sitelen_pona" | "sitelen_sitelen">(
	"writing_system",
	"sitelen_pona",
);
export const etymologiesEnabled = persisted("etymologies_enabled", true);

export const fontSentence = persisted("font_sentence", "jan li pana e moku tawa sina");
