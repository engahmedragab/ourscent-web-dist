import { t as buildScreens } from "./_screens-bP9Afs3U.js";
//#region ../../../OurIncFrontCores/packages/@ourinc/platform-config/src/defaults/ourbride.config.ts
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
		id: "services",
		enabled: true,
		visibleOn: [
			"store",
			"browse",
			"account"
		],
		order: 2,
		labelAr: "الخدمات",
		labelEn: "Services",
		icon: "Briefcase",
		requiredTier: "basic"
	},
	{
		id: "bookings",
		enabled: true,
		visibleOn: ["store", "account"],
		order: 3,
		labelAr: "الحجوزات",
		labelEn: "Bookings",
		icon: "Calendar",
		requiredTier: "pro"
	},
	{
		id: "coupons",
		enabled: true,
		visibleOn: ["account"],
		order: 4,
		labelAr: "القسائم",
		labelEn: "Coupons",
		icon: "Tag",
		requiredTier: "basic"
	},
	{
		id: "giftcards",
		enabled: true,
		visibleOn: ["store", "account"],
		order: 5,
		labelAr: "بطاقات الهدايا",
		labelEn: "Gift Cards",
		icon: "Gift",
		requiredTier: "pro"
	},
	{
		id: "affiliate",
		enabled: true,
		visibleOn: ["account"],
		order: 6,
		labelAr: "التسويق",
		labelEn: "Affiliate",
		icon: "Share2",
		requiredTier: "premium"
	},
	{
		id: "referral",
		enabled: true,
		visibleOn: ["account"],
		order: 7,
		labelAr: "الإحالة",
		labelEn: "Referral",
		icon: "Users",
		requiredTier: "pro"
	},
	{
		id: "flash-sales",
		enabled: true,
		visibleOn: ["store", "browse"],
		order: 8,
		labelAr: "تخفيضات سريعة",
		labelEn: "Flash Sales",
		icon: "Zap",
		requiredTier: "pro"
	},
	{
		id: "stories",
		enabled: true,
		visibleOn: ["store"],
		order: 9,
		labelAr: "قصص",
		labelEn: "Stories",
		icon: "BookOpen",
		requiredTier: "pro"
	},
	{
		id: "links",
		enabled: true,
		visibleOn: ["landing"],
		order: 10,
		labelAr: "الروابط",
		labelEn: "Links",
		icon: "Link",
		requiredTier: "basic"
	},
	{
		id: "reviews",
		enabled: true,
		visibleOn: ["store", "browse"],
		order: 11,
		labelAr: "التقييمات",
		labelEn: "Reviews",
		icon: "Star",
		requiredTier: "basic"
	},
	{
		id: "follow",
		enabled: true,
		visibleOn: ["store", "browse"],
		order: 12,
		labelAr: "المتابعة",
		labelEn: "Follow",
		icon: "Heart",
		requiredTier: "basic"
	}
];
var enabledIds = new Set(ENABLED.map((m) => m.id));
var config = {
	platformType: "OurBride",
	tenantId: "tb-ourbride-001",
	updatedAt: "2024-01-01T00:00:00Z",
	cacheTtl: 60,
	theme: {
		primary: "16 100% 50%",
		primaryForeground: "0 0% 100%",
		accent: "340 80% 60%",
		accentForeground: "0 0% 100%",
		secondary: "340 40% 95%",
		secondaryForeground: "340 50% 30%",
		background: "0 0% 99%",
		foreground: "30 10% 8%",
		card: "0 0% 100%",
		cardForeground: "30 10% 8%",
		muted: "30 20% 96%",
		mutedForeground: "30 8% 45%",
		border: "30 15% 88%",
		success: "142 71% 45%",
		warning: "43 100% 50%",
		destructive: "0 84% 60%",
		info: "217 91% 60%",
		fontSans: "Cairo",
		fontDisplay: "Playfair Display",
		fontMono: "JetBrains Mono",
		fontSizeBase: "16px",
		lineHeightBase: "1.6",
		radiusBase: "0.625rem",
		radiusCard: "1rem",
		radiusButton: "9999px",
		direction: "rtl",
		heroStyle: "full-bleed",
		productCardStyle: "grid",
		navStyle: "top",
		priceFormat: "symbol-before",
		ratingStyle: "stars"
	},
	modules: ENABLED,
	screens: buildScreens(enabledIds, "https://ourbride.ourinc.com"),
	i18nOverrides: {
		ar: {
			"module.products": "المنتجات",
			"module.services": "الخدمات",
			"module.bookings": "الحجوزات",
			"cta.addToCart": "أضف إلى السلة",
			"cta.bookNow": "احجز الآن",
			"cta.viewStore": "زيارة المتجر"
		},
		en: {
			"module.products": "Wedding Products",
			"module.services": "Wedding Services",
			"module.bookings": "Reserve",
			"cta.addToCart": "Add to Cart",
			"cta.bookNow": "Book Now",
			"cta.viewStore": "Visit Store"
		}
	}
};
//#endregion
export { config as default };
