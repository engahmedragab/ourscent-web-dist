import { t as buildScreens } from "./_screens-bP9Afs3U.js";
//#region ../../../OurIncFrontCores/packages/@ourinc/platform-config/src/defaults/ourshipping.config.ts
var ENABLED = [
	{
		id: "shipping",
		enabled: true,
		visibleOn: ["dashboard", "sidebar"],
		order: 1,
		labelAr: "الشحن",
		labelEn: "Shipping",
		icon: "Truck",
		requiredTier: "basic"
	},
	{
		id: "warehouses",
		enabled: true,
		visibleOn: ["dashboard", "sidebar"],
		order: 2,
		labelAr: "المستودعات",
		labelEn: "Warehouses",
		icon: "Building2",
		requiredTier: "basic"
	},
	{
		id: "rates",
		enabled: true,
		visibleOn: ["dashboard", "sidebar"],
		order: 3,
		labelAr: "بطاقات الأسعار",
		labelEn: "Rate Cards",
		icon: "Tag",
		requiredTier: "starter"
	},
	{
		id: "analytics",
		enabled: true,
		visibleOn: ["dashboard", "sidebar"],
		order: 4,
		labelAr: "التحليلات",
		labelEn: "Analytics",
		icon: "BarChart3",
		requiredTier: "starter"
	},
	{
		id: "billing",
		enabled: true,
		visibleOn: ["sidebar"],
		order: 5,
		labelAr: "الفواتير",
		labelEn: "Billing",
		icon: "CreditCard",
		requiredTier: "basic"
	},
	{
		id: "reconciliation",
		enabled: true,
		visibleOn: ["sidebar"],
		order: 6,
		labelAr: "التسوية",
		labelEn: "Reconciliation",
		icon: "FileCheck",
		requiredTier: "pro"
	},
	{
		id: "notifications",
		enabled: true,
		visibleOn: ["sidebar"],
		order: 7,
		labelAr: "الإشعارات",
		labelEn: "Notifications",
		icon: "Bell",
		requiredTier: "basic"
	},
	{
		id: "team",
		enabled: true,
		visibleOn: ["sidebar"],
		order: 8,
		labelAr: "الفريق",
		labelEn: "Team",
		icon: "Users",
		requiredTier: "starter"
	}
];
var enabledIds = new Set(ENABLED.map((m) => m.id));
var config = {
	platformType: "OurShipping",
	tenantId: "tb-ourshipping-001",
	updatedAt: "2024-01-01T00:00:00Z",
	cacheTtl: 60,
	theme: {
		primary: "210 100% 40%",
		primaryForeground: "0 0% 100%",
		accent: "142 76% 36%",
		accentForeground: "0 0% 100%",
		secondary: "210 40% 96%",
		secondaryForeground: "210 40% 10%",
		background: "0 0% 100%",
		foreground: "210 40% 10%",
		card: "0 0% 100%",
		cardForeground: "210 40% 10%",
		muted: "210 40% 96%",
		mutedForeground: "210 30% 50%",
		border: "210 20% 90%",
		success: "142 76% 36%",
		warning: "38 92% 50%",
		destructive: "0 84% 60%",
		info: "199 89% 48%",
		fontSans: "Inter",
		fontDisplay: "Inter",
		fontMono: "JetBrains Mono",
		fontSizeBase: "15px",
		lineHeightBase: "1.55",
		radiusBase: "0.5rem",
		radiusCard: "0.75rem",
		radiusButton: "0.5rem",
		direction: "ltr",
		heroStyle: "centered",
		productCardStyle: "grid",
		navStyle: "sidebar",
		priceFormat: "symbol-before",
		ratingStyle: "numeric"
	},
	modules: ENABLED,
	screens: buildScreens(enabledIds, "https://ourshipping.ourinc.com"),
	community: {
		subCommunityName: {
			ar: "مجتمع الشحن",
			en: "Shipping Community",
			fr: "Communauté livraison"
		},
		reviewCategories: [
			"speed",
			"reliability",
			"support",
			"value"
		],
		feedContentTypes: ["Post"],
		enabledTabs: ["community", "posts"],
		moderationAutoFlagThreshold: 3,
		reputationWeights: {
			reviewScore: .5,
			responseRate: .4,
			followCount: .1
		}
	},
	auth: {
		storageKey: "OURSHIPPING",
		loginMode: "email",
		registrationMode: "email",
		showUserTypeSelector: false,
		defaultUserType: "ShippingPortalUser",
		requireUsername: false,
		requirePhone: false,
		allowedUserTypes: ["ShippingPortalUser"],
		blockedUserTypes: [
			"Admin",
			"Owner",
			"ProviderUser",
			"Bride",
			"Groom",
			"FamilyMember",
			"WeddingPlanner",
			"LocalGuider",
			"StoragePortalUser",
			"Guest"
		],
		features: {
			emailVerification: true,
			phoneOtp: false,
			guestAuth: false,
			rememberMe: true,
			deleteAccount: false,
			googleLogin: false,
			facebookLogin: false,
			linkedinLogin: false
		},
		userTypeOptions: [{
			type: "ShippingPortalUser",
			labelAr: "مزود الشحن",
			labelEn: "Shipping Provider",
			labelFr: "Fournisseur de livraison",
			order: 1
		}],
		labels: {
			loginTitle: {
				ar: "تسجيل الدخول",
				en: "Sign In",
				fr: "Connexion"
			},
			registerTitle: {
				ar: "إنشاء حساب",
				en: "Create Account",
				fr: "Créer un compte"
			},
			loginSubtitle: {
				ar: "مرحباً بك في OurShipping",
				en: "Welcome to OurShipping",
				fr: "Bienvenue sur OurShipping"
			},
			registerSubtitle: {
				ar: "أرسل شحناتك بسهولة",
				en: "Ship your packages easily",
				fr: "Expédiez vos colis facilement"
			},
			emailPlaceholder: {
				ar: "البريد الإلكتروني",
				en: "Email address",
				fr: "Adresse e-mail"
			},
			passwordPlaceholder: {
				ar: "كلمة المرور",
				en: "Password",
				fr: "Mot de passe"
			},
			loginButton: {
				ar: "دخول",
				en: "Sign In",
				fr: "Se connecter"
			},
			registerButton: {
				ar: "إنشاء حساب",
				en: "Create Account",
				fr: "Créer"
			},
			forgotPassword: {
				ar: "نسيت كلمة المرور؟",
				en: "Forgot password?",
				fr: "Mot de passe oublié ?"
			},
			noAccount: {
				ar: "ليس لديك حساب؟",
				en: "No account?",
				fr: "Pas de compte ?"
			},
			hasAccount: {
				ar: "لديك حساب بالفعل؟",
				en: "Have an account?",
				fr: "Déjà un compte ?"
			}
		}
	},
	i18nOverrides: {
		en: {
			"module.shipping": "Shipments",
			"module.warehouses": "Warehouses",
			"module.rates": "Rate Cards",
			"module.reconciliation": "Reconciliation",
			"cta.bookNow": "Book Shipment",
			"cta.getQuote": "Get Quote"
		},
		ar: {
			"module.shipping": "الشحنات",
			"module.warehouses": "المستودعات",
			"module.rates": "بطاقات الأسعار",
			"module.reconciliation": "التسوية",
			"cta.bookNow": "احجز شحنة",
			"cta.getQuote": "احصل على عرض"
		},
		fr: {
			"module.shipping": "Expéditions",
			"module.warehouses": "Entrepôts",
			"module.rates": "Tarifs",
			"module.reconciliation": "Réconciliation",
			"cta.bookNow": "Réserver une expédition",
			"cta.getQuote": "Obtenir un devis"
		}
	},
	analytics: {
		pixels: {
			gtmId: "",
			ga4Id: "",
			metaPixelId: "",
			tiktokPixelId: "",
			clarityId: ""
		},
		currency: "EGP",
		country: "EG",
		language: "en"
	},
	push: {
		firebaseApiKey: "",
		firebaseAuthDomain: "",
		firebaseProjectId: "",
		firebaseStorageBucket: "",
		firebaseMessagingSenderId: "",
		firebaseAppId: "",
		vapidKey: ""
	}
};
//#endregion
export { config as default };
