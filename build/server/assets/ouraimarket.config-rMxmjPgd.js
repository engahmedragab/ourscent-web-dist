import { t as buildScreens } from "./_screens-bP9Afs3U.js";
//#region ../../../OurIncFrontCores/packages/@ourinc/platform-config/src/defaults/ouraimarket.config.ts
var ENABLED = [
	{
		id: "products",
		enabled: true,
		visibleOn: [
			"store",
			"browse",
			"account"
		],
		order: 1,
		labelAr: "النماذج والأدوات",
		labelEn: "AI Products",
		icon: "Bot",
		requiredTier: "basic"
	},
	{
		id: "services",
		enabled: true,
		visibleOn: [
			"store",
			"browse",
			"account"
		],
		order: 2,
		labelAr: "الخدمات الذكية",
		labelEn: "AI Services",
		icon: "Sparkles",
		requiredTier: "basic"
	},
	{
		id: "affiliate",
		enabled: true,
		visibleOn: ["account"],
		order: 3,
		labelAr: "التسويق",
		labelEn: "Affiliate",
		icon: "Share2",
		requiredTier: "premium"
	},
	{
		id: "referral",
		enabled: true,
		visibleOn: ["account"],
		order: 4,
		labelAr: "الإحالة",
		labelEn: "Referral",
		icon: "Users",
		requiredTier: "pro"
	},
	{
		id: "links",
		enabled: true,
		visibleOn: ["landing"],
		order: 5,
		labelAr: "الروابط",
		labelEn: "Links",
		icon: "Link",
		requiredTier: "basic"
	},
	{
		id: "reviews",
		enabled: true,
		visibleOn: ["store", "browse"],
		order: 6,
		labelAr: "التقييمات",
		labelEn: "Reviews",
		icon: "Star",
		requiredTier: "basic"
	},
	{
		id: "follow",
		enabled: true,
		visibleOn: ["store", "browse"],
		order: 7,
		labelAr: "المتابعة",
		labelEn: "Follow",
		icon: "Heart",
		requiredTier: "basic"
	}
];
var enabledIds = new Set(ENABLED.map((m) => m.id));
var config = {
	platformType: "OurAIMarket",
	tenantId: "tb-ouraimarket-001",
	updatedAt: "2024-01-01T00:00:00Z",
	cacheTtl: 60,
	theme: {
		primary: "270 70% 55%",
		primaryForeground: "0 0% 100%",
		accent: "200 90% 55%",
		accentForeground: "0 0% 100%",
		secondary: "270 30% 94%",
		secondaryForeground: "270 40% 22%",
		background: "265 15% 99%",
		foreground: "270 12% 7%",
		card: "0 0% 100%",
		cardForeground: "270 12% 7%",
		muted: "268 10% 95%",
		mutedForeground: "268 5% 44%",
		border: "268 10% 87%",
		success: "142 71% 45%",
		warning: "43 100% 50%",
		destructive: "0 84% 60%",
		info: "200 90% 55%",
		fontSans: "Space Grotesk",
		fontDisplay: "Space Grotesk",
		fontMono: "JetBrains Mono",
		fontSizeBase: "15px",
		lineHeightBase: "1.6",
		radiusBase: "0.5rem",
		radiusCard: "0.75rem",
		radiusButton: "0.5rem",
		direction: "ltr",
		heroStyle: "split",
		productCardStyle: "masonry",
		navStyle: "top",
		priceFormat: "symbol-before",
		ratingStyle: "both"
	},
	modules: ENABLED,
	screens: buildScreens(enabledIds, "https://ouraimarket.ourinc.com"),
	i18nOverrides: {
		en: {
			"module.products": "AI Models & Tools",
			"module.services": "AI Services",
			"cta.viewStore": "Explore AI Solutions"
		},
		ar: {
			"module.products": "نماذج وأدوات الذكاء الاصطناعي",
			"module.services": "خدمات الذكاء الاصطناعي",
			"cta.viewStore": "استكشف الحلول"
		}
	}
};
//#endregion
export { config as default };
