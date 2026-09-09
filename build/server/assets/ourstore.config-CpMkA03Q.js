import { t as buildScreens } from "./_screens-bP9Afs3U.js";
//#region ../../../OurIncFrontCores/packages/@ourinc/platform-config/src/defaults/ourstore.config.ts
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
		id: "links",
		enabled: true,
		visibleOn: ["landing"],
		order: 7,
		labelAr: "الروابط",
		labelEn: "Links",
		icon: "Link",
		requiredTier: "basic"
	},
	{
		id: "reviews",
		enabled: true,
		visibleOn: ["store", "browse"],
		order: 8,
		labelAr: "التقييمات",
		labelEn: "Reviews",
		icon: "Star",
		requiredTier: "basic"
	},
	{
		id: "follow",
		enabled: true,
		visibleOn: ["store", "browse"],
		order: 9,
		labelAr: "المتابعة",
		labelEn: "Follow",
		icon: "Heart",
		requiredTier: "basic"
	}
];
var enabledIds = new Set(ENABLED.map((m) => m.id));
var config = {
	platformType: "OurStore",
	tenantId: "tb-ourstore-001",
	updatedAt: "2024-01-01T00:00:00Z",
	cacheTtl: 60,
	theme: {
		primary: "280 60% 50%",
		primaryForeground: "0 0% 100%",
		accent: "300 80% 60%",
		accentForeground: "0 0% 100%",
		secondary: "280 30% 94%",
		secondaryForeground: "280 40% 25%",
		background: "270 20% 99%",
		foreground: "270 10% 7%",
		card: "0 0% 100%",
		cardForeground: "270 10% 7%",
		muted: "270 12% 96%",
		mutedForeground: "270 6% 44%",
		border: "270 10% 88%",
		success: "142 71% 45%",
		warning: "43 100% 50%",
		destructive: "0 84% 60%",
		info: "217 91% 60%",
		fontSans: "Nunito",
		fontDisplay: "Nunito",
		fontMono: "JetBrains Mono",
		fontSizeBase: "15px",
		lineHeightBase: "1.65",
		radiusBase: "0.5rem",
		radiusCard: "0.875rem",
		radiusButton: "0.5rem",
		direction: "ltr",
		heroStyle: "split",
		productCardStyle: "grid",
		navStyle: "top",
		priceFormat: "symbol-before",
		ratingStyle: "stars"
	},
	modules: ENABLED,
	screens: buildScreens(enabledIds, "https://ourstore.ourinc.com"),
	i18nOverrides: {
		en: {
			"module.products": "Shop Products",
			"cta.addToCart": "Add to Bag",
			"cta.viewStore": "Shop Now"
		},
		ar: {
			"module.products": "منتجات المتجر",
			"cta.addToCart": "أضف للحقيبة",
			"cta.viewStore": "تسوق الآن"
		}
	}
};
//#endregion
export { config as default };
