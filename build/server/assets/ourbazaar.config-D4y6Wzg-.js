import { t as buildScreens } from "./_screens-bP9Afs3U.js";
//#region ../../../OurIncFrontCores/packages/@ourinc/platform-config/src/defaults/ourbazaar.config.ts
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
		labelAr: "المنتجات",
		labelEn: "Products",
		icon: "ShoppingBag",
		requiredTier: "basic"
	},
	{
		id: "coupons",
		enabled: true,
		visibleOn: ["account"],
		order: 2,
		labelAr: "القسائم",
		labelEn: "Coupons",
		icon: "Tag",
		requiredTier: "basic"
	},
	{
		id: "giftcards",
		enabled: true,
		visibleOn: ["store", "account"],
		order: 3,
		labelAr: "بطاقات الهدايا",
		labelEn: "Gift Cards",
		icon: "Gift",
		requiredTier: "pro"
	},
	{
		id: "affiliate",
		enabled: true,
		visibleOn: ["account"],
		order: 4,
		labelAr: "التسويق",
		labelEn: "Affiliate",
		icon: "Share2",
		requiredTier: "premium"
	},
	{
		id: "referral",
		enabled: true,
		visibleOn: ["account"],
		order: 5,
		labelAr: "الإحالة",
		labelEn: "Referral",
		icon: "Users",
		requiredTier: "pro"
	},
	{
		id: "flash-sales",
		enabled: true,
		visibleOn: ["store", "browse"],
		order: 6,
		labelAr: "تخفيضات سريعة",
		labelEn: "Flash Sales",
		icon: "Zap",
		requiredTier: "pro"
	},
	{
		id: "stories",
		enabled: true,
		visibleOn: ["store"],
		order: 7,
		labelAr: "قصص",
		labelEn: "Stories",
		icon: "BookOpen",
		requiredTier: "pro"
	},
	{
		id: "links",
		enabled: true,
		visibleOn: ["landing"],
		order: 8,
		labelAr: "الروابط",
		labelEn: "Links",
		icon: "Link",
		requiredTier: "basic"
	},
	{
		id: "reviews",
		enabled: true,
		visibleOn: ["store", "browse"],
		order: 9,
		labelAr: "التقييمات",
		labelEn: "Reviews",
		icon: "Star",
		requiredTier: "basic"
	},
	{
		id: "follow",
		enabled: true,
		visibleOn: ["store", "browse"],
		order: 10,
		labelAr: "المتابعة",
		labelEn: "Follow",
		icon: "Heart",
		requiredTier: "basic"
	}
];
var enabledIds = new Set(ENABLED.map((m) => m.id));
var config = {
	platformType: "OurBazaar",
	tenantId: "tb-ourbazaar-001",
	updatedAt: "2024-01-01T00:00:00Z",
	cacheTtl: 60,
	theme: {
		primary: "28 100% 55%",
		primaryForeground: "0 0% 100%",
		accent: "45 100% 50%",
		accentForeground: "30 50% 15%",
		secondary: "32 100% 92%",
		secondaryForeground: "28 60% 25%",
		background: "30 20% 99%",
		foreground: "20 15% 7%",
		card: "0 0% 100%",
		cardForeground: "20 15% 7%",
		muted: "30 15% 95%",
		mutedForeground: "25 8% 43%",
		border: "30 12% 87%",
		success: "142 71% 45%",
		warning: "43 100% 50%",
		destructive: "0 84% 60%",
		info: "217 91% 60%",
		fontSans: "Cairo",
		fontDisplay: "Cairo",
		fontMono: "JetBrains Mono",
		fontSizeBase: "16px",
		lineHeightBase: "1.6",
		radiusBase: "0.5rem",
		radiusCard: "0.75rem",
		radiusButton: "0.5rem",
		direction: "rtl",
		heroStyle: "contained",
		productCardStyle: "grid",
		navStyle: "top",
		priceFormat: "symbol-before",
		ratingStyle: "stars"
	},
	modules: ENABLED,
	screens: buildScreens(enabledIds, "https://ourbazaar.ourinc.com"),
	i18nOverrides: {
		ar: {
			"module.products": "منتجات البازار",
			"cta.addToCart": "أضف للسلة",
			"cta.viewStore": "تصفح المتجر"
		},
		en: {
			"module.products": "Bazaar Products",
			"cta.addToCart": "Add to Cart",
			"cta.viewStore": "Browse Store"
		}
	}
};
//#endregion
export { config as default };
