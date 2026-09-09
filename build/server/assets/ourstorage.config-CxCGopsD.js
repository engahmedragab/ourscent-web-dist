import { t as buildScreens } from "./_screens-bP9Afs3U.js";
//#region ../../../OurIncFrontCores/packages/@ourinc/platform-config/src/defaults/ourstorage.config.ts
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
		labelAr: "الوحدات",
		labelEn: "Units",
		icon: "Package",
		requiredTier: "basic"
	},
	{
		id: "bookings",
		enabled: true,
		visibleOn: ["store", "account"],
		order: 2,
		labelAr: "الحجوزات",
		labelEn: "Reservations",
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
	}
];
var enabledIds = new Set(ENABLED.map((m) => m.id));
var config = {
	platformType: "OurStorage",
	tenantId: "tb-ourstorage-001",
	updatedAt: "2024-01-01T00:00:00Z",
	cacheTtl: 60,
	theme: {
		primary: "0 0% 40%",
		primaryForeground: "0 0% 100%",
		accent: "210 30% 50%",
		accentForeground: "0 0% 100%",
		secondary: "0 0% 93%",
		secondaryForeground: "0 0% 20%",
		background: "0 0% 99%",
		foreground: "0 0% 8%",
		card: "0 0% 100%",
		cardForeground: "0 0% 8%",
		muted: "0 0% 95%",
		mutedForeground: "0 0% 45%",
		border: "0 0% 87%",
		success: "142 71% 45%",
		warning: "43 100% 50%",
		destructive: "0 84% 60%",
		info: "217 91% 60%",
		fontSans: "Inter",
		fontDisplay: "Inter",
		fontMono: "JetBrains Mono",
		fontSizeBase: "15px",
		lineHeightBase: "1.55",
		radiusBase: "0.25rem",
		radiusCard: "0.375rem",
		radiusButton: "0.25rem",
		direction: "ltr",
		heroStyle: "minimal",
		productCardStyle: "grid",
		navStyle: "top",
		priceFormat: "symbol-before",
		ratingStyle: "numeric"
	},
	modules: ENABLED,
	screens: buildScreens(enabledIds, "https://ourstorage.ourinc.com"),
	i18nOverrides: {
		en: {
			"module.products": "Storage Units",
			"module.bookings": "Unit Reservation",
			"cta.bookNow": "Reserve Unit",
			"cta.viewStore": "View Facility"
		},
		ar: {
			"module.products": "وحدات التخزين",
			"module.bookings": "حجز الوحدات",
			"cta.bookNow": "احجز وحدة",
			"cta.viewStore": "عرض المنشأة"
		}
	}
};
//#endregion
export { config as default };
