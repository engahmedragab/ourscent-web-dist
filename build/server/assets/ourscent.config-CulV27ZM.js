import { t as buildScreens } from "./_screens-bP9Afs3U.js";
//#region ../../../OurIncFrontCores/packages/@ourinc/platform-config/src/defaults/ourscent.config.ts
var ENABLED = [
	{
		id: "reviews",
		enabled: true,
		visibleOn: ["store", "browse"],
		order: 1,
		labelAr: "التقييمات",
		labelEn: "Reviews",
		icon: "Star",
		requiredTier: "basic"
	},
	{
		id: "follow",
		enabled: true,
		visibleOn: ["store", "browse"],
		order: 2,
		labelAr: "المتابعة",
		labelEn: "Follow",
		icon: "Heart",
		requiredTier: "basic"
	},
	{
		id: "stories",
		enabled: true,
		visibleOn: ["store"],
		order: 3,
		labelAr: "قصص",
		labelEn: "Stories",
		icon: "BookOpen",
		requiredTier: "pro"
	}
];
var enabledIds = new Set(ENABLED.map((m) => m.id));
var config = {
	platformType: "OurScent",
	tenantId: "tb-ourscent-001",
	updatedAt: "2024-01-01T00:00:00Z",
	cacheTtl: 60,
	theme: {
		primary: "0 0% 9%",
		primaryForeground: "0 0% 100%",
		accent: "30 60% 50%",
		accentForeground: "0 0% 100%",
		secondary: "0 0% 96%",
		secondaryForeground: "0 0% 9%",
		background: "0 0% 100%",
		foreground: "0 0% 9%",
		card: "0 0% 100%",
		cardForeground: "0 0% 9%",
		muted: "0 0% 96%",
		mutedForeground: "0 0% 45%",
		border: "0 0% 90%",
		success: "142 71% 45%",
		warning: "43 100% 50%",
		destructive: "0 84% 51%",
		info: "217 91% 60%",
		fontSans: "Cairo Play",
		fontDisplay: "Cairo Play",
		fontMono: "JetBrains Mono",
		fontSizeBase: "16px",
		lineHeightBase: "1.6",
		radiusBase: "9999px",
		radiusCard: "1rem",
		radiusButton: "9999px",
		direction: "rtl",
		heroStyle: "centered",
		productCardStyle: "grid",
		navStyle: "top",
		priceFormat: "symbol-before",
		ratingStyle: "stars"
	},
	modules: ENABLED,
	screens: buildScreens(enabledIds, "https://ourscent.com"),
	i18nOverrides: {
		ar: {
			"module.reviews": "مراجعات العطور",
			"module.follow": "تابع الماركات",
			"cta.viewStore": "استكشف العطور"
		},
		en: {
			"module.reviews": "Fragrance Reviews",
			"module.follow": "Follow Brands",
			"cta.viewStore": "Explore Fragrances"
		},
		fr: {
			"module.reviews": "Avis parfums",
			"module.follow": "Suivre les marques",
			"cta.viewStore": "Explorer les parfums"
		}
	},
	community: {
		subCommunityName: {
			ar: "مجتمع عشاق العطور",
			en: "Fragrance Enthusiast Community",
			fr: "Communauté des passionnés de parfums"
		},
		reviewCategories: [
			"longevity",
			"sillage",
			"value",
			"authenticity"
		],
		feedContentTypes: [
			"review",
			"collection",
			"recommendation"
		],
		enabledTabs: [
			"community",
			"posts",
			"reels"
		],
		moderationAutoFlagThreshold: 3,
		reputationWeights: {
			reviewScore: .6,
			responseRate: .1,
			followCount: .3
		}
	}
};
//#endregion
export { config as default };
