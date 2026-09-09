import { t as buildScreens } from "./_screens-bP9Afs3U.js";
//#region ../../../OurIncFrontCores/packages/@ourinc/platform-config/src/defaults/ourdelivery.config.ts
var ENABLED = [
	{
		id: "coupons",
		enabled: true,
		visibleOn: ["account"],
		order: 1,
		labelAr: "القسائم",
		labelEn: "Coupons",
		icon: "Tag",
		requiredTier: "basic"
	},
	{
		id: "referral",
		enabled: true,
		visibleOn: ["account"],
		order: 2,
		labelAr: "الإحالة",
		labelEn: "Referral",
		icon: "Users",
		requiredTier: "pro"
	},
	{
		id: "links",
		enabled: true,
		visibleOn: ["landing"],
		order: 3,
		labelAr: "الروابط",
		labelEn: "Links",
		icon: "Link",
		requiredTier: "basic"
	}
];
var enabledIds = new Set(ENABLED.map((m) => m.id));
var config = {
	platformType: "OurDelivery",
	tenantId: "tb-ourdelivery-001",
	updatedAt: "2024-01-01T00:00:00Z",
	cacheTtl: 60,
	theme: {
		primary: "145 63% 42%",
		primaryForeground: "0 0% 100%",
		accent: "60 100% 50%",
		accentForeground: "60 50% 10%",
		secondary: "145 25% 93%",
		secondaryForeground: "145 35% 18%",
		background: "140 10% 99%",
		foreground: "140 12% 7%",
		card: "0 0% 100%",
		cardForeground: "140 12% 7%",
		muted: "140 8% 95%",
		mutedForeground: "140 5% 44%",
		border: "140 8% 87%",
		success: "142 71% 45%",
		warning: "43 100% 50%",
		destructive: "0 84% 60%",
		info: "217 91% 60%",
		fontSans: "Roboto",
		fontDisplay: "Roboto",
		fontMono: "Roboto Mono",
		fontSizeBase: "14px",
		lineHeightBase: "1.5",
		radiusBase: "0.25rem",
		radiusCard: "0.375rem",
		radiusButton: "0.25rem",
		direction: "ltr",
		heroStyle: "minimal",
		productCardStyle: "list",
		navStyle: "top",
		priceFormat: "symbol-before",
		ratingStyle: "numeric"
	},
	modules: ENABLED,
	screens: buildScreens(enabledIds, "https://ourdelivery.ourinc.com"),
	i18nOverrides: {
		en: { "cta.viewStore": "Track Delivery" },
		ar: { "cta.viewStore": "تتبع التوصيل" }
	}
};
//#endregion
export { config as default };
