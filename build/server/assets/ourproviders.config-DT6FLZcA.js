import { t as buildScreens } from "./_screens-bP9Afs3U.js";
//#region ../../../OurIncFrontCores/packages/@ourinc/platform-config/src/defaults/ourproviders.config.ts
var ENABLED = [
	{
		id: "bookings",
		enabled: true,
		visibleOn: ["store", "account"],
		order: 1,
		labelAr: "الحجوزات",
		labelEn: "Bookings",
		icon: "Calendar",
		requiredTier: "pro"
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
		id: "stories",
		enabled: true,
		visibleOn: ["store"],
		order: 5,
		labelAr: "قصص",
		labelEn: "Stories",
		icon: "BookOpen",
		requiredTier: "pro"
	},
	{
		id: "links",
		enabled: true,
		visibleOn: ["landing"],
		order: 6,
		labelAr: "الروابط",
		labelEn: "Links",
		icon: "Link",
		requiredTier: "basic"
	},
	{
		id: "reviews",
		enabled: true,
		visibleOn: ["store", "browse"],
		order: 7,
		labelAr: "التقييمات",
		labelEn: "Reviews",
		icon: "Star",
		requiredTier: "basic"
	},
	{
		id: "follow",
		enabled: true,
		visibleOn: ["store", "browse"],
		order: 8,
		labelAr: "المتابعة",
		labelEn: "Follow",
		icon: "Heart",
		requiredTier: "basic"
	}
];
var enabledIds = new Set(ENABLED.map((m) => m.id));
var config = {
	platformType: "OurProviders",
	tenantId: "tb-ourproviders-001",
	updatedAt: "2024-01-01T00:00:00Z",
	cacheTtl: 60,
	theme: {
		primary: "25 90% 50%",
		primaryForeground: "0 0% 100%",
		accent: "340 70% 55%",
		accentForeground: "0 0% 100%",
		secondary: "25 40% 93%",
		secondaryForeground: "25 50% 20%",
		background: "25 10% 99%",
		foreground: "25 12% 7%",
		card: "0 0% 100%",
		cardForeground: "25 12% 7%",
		muted: "25 8% 95%",
		mutedForeground: "25 5% 44%",
		border: "25 8% 87%",
		success: "142 71% 45%",
		warning: "43 100% 50%",
		destructive: "0 84% 60%",
		info: "217 91% 60%",
		fontSans: "Plus Jakarta Sans",
		fontDisplay: "Plus Jakarta Sans",
		fontMono: "JetBrains Mono",
		fontSizeBase: "16px",
		lineHeightBase: "1.6",
		radiusBase: "0.5rem",
		radiusCard: "0.875rem",
		radiusButton: "0.5rem",
		direction: "rtl",
		heroStyle: "contained",
		productCardStyle: "grid",
		navStyle: "top",
		priceFormat: "symbol-before",
		ratingStyle: "both"
	},
	modules: ENABLED,
	screens: buildScreens(enabledIds, "https://ourproviders.ourinc.com"),
	i18nOverrides: {
		ar: {
			"module.bookings": "الحجوزات",
			"module.stories": "قصص مزودي الخدمة",
			"cta.bookNow": "احجز الآن",
			"cta.viewStore": "عرض مقدم الخدمة"
		},
		en: {
			"module.bookings": "Provider Bookings",
			"module.stories": "Provider Stories",
			"cta.bookNow": "Book Now",
			"cta.viewStore": "View Provider"
		}
	}
};
//#endregion
export { config as default };
