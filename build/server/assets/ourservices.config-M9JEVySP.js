import { t as buildScreens } from "./_screens-bP9Afs3U.js";
//#region ../../../OurIncFrontCores/packages/@ourinc/platform-config/src/defaults/ourservices.config.ts
var ENABLED = [
	{
		id: "services",
		enabled: true,
		visibleOn: [
			"store",
			"browse",
			"account"
		],
		order: 1,
		labelAr: "الخدمات",
		labelEn: "Services",
		icon: "Briefcase",
		requiredTier: "basic"
	},
	{
		id: "bookings",
		enabled: true,
		visibleOn: ["store", "account"],
		order: 2,
		labelAr: "الحجوزات",
		labelEn: "Bookings",
		icon: "Calendar",
		requiredTier: "pro"
	},
	{
		id: "coupons",
		enabled: true,
		visibleOn: ["account"],
		order: 3,
		labelAr: "القسائم",
		labelEn: "Coupons",
		icon: "Tag",
		requiredTier: "basic"
	},
	{
		id: "giftcards",
		enabled: true,
		visibleOn: ["store", "account"],
		order: 4,
		labelAr: "بطاقات الهدايا",
		labelEn: "Gift Cards",
		icon: "Gift",
		requiredTier: "pro"
	},
	{
		id: "affiliate",
		enabled: true,
		visibleOn: ["account"],
		order: 5,
		labelAr: "التسويق",
		labelEn: "Affiliate",
		icon: "Share2",
		requiredTier: "premium"
	},
	{
		id: "referral",
		enabled: true,
		visibleOn: ["account"],
		order: 6,
		labelAr: "الإحالة",
		labelEn: "Referral",
		icon: "Users",
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
	platformType: "OurServices",
	tenantId: "tb-ourservices-001",
	updatedAt: "2024-01-01T00:00:00Z",
	cacheTtl: 60,
	theme: {
		primary: "168 76% 42%",
		primaryForeground: "0 0% 100%",
		accent: "190 80% 50%",
		accentForeground: "0 0% 100%",
		secondary: "168 30% 93%",
		secondaryForeground: "168 40% 20%",
		background: "165 15% 99%",
		foreground: "168 12% 7%",
		card: "0 0% 100%",
		cardForeground: "168 12% 7%",
		muted: "168 10% 95%",
		mutedForeground: "168 6% 44%",
		border: "168 10% 87%",
		success: "142 71% 45%",
		warning: "43 100% 50%",
		destructive: "0 84% 60%",
		info: "217 91% 60%",
		fontSans: "IBM Plex Sans",
		fontDisplay: "IBM Plex Sans",
		fontMono: "IBM Plex Mono",
		fontSizeBase: "15px",
		lineHeightBase: "1.6",
		radiusBase: "0.375rem",
		radiusCard: "0.625rem",
		radiusButton: "0.375rem",
		direction: "ltr",
		heroStyle: "minimal",
		productCardStyle: "grid",
		navStyle: "top",
		priceFormat: "symbol-before",
		ratingStyle: "both"
	},
	modules: ENABLED,
	screens: buildScreens(enabledIds, "https://ourservices.ourinc.com"),
	i18nOverrides: {
		en: {
			"module.services": "Services",
			"module.bookings": "Appointments",
			"cta.bookNow": "Book Appointment",
			"cta.viewStore": "View Provider"
		},
		ar: {
			"module.services": "الخدمات",
			"module.bookings": "المواعيد",
			"cta.bookNow": "احجز موعداً",
			"cta.viewStore": "عرض مقدم الخدمة"
		}
	}
};
//#endregion
export { config as default };
