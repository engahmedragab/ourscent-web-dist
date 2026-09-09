import { PassThrough } from "node:stream";
import { Link, Links, Meta, Navigate, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, data, isRouteErrorResponse, useLoaderData, useNavigate, useParams, useRouteError } from "react-router";
import { createReadableStreamFromReadable } from "@react-router/node";
import { renderToPipeableStream } from "react-dom/server";
import { isbot } from "isbot";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { QueryClient, QueryClientProvider, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Toaster, toast } from "sonner";
import { jwtDecode } from "jwt-decode";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import axios, { AxiosHeaders } from "axios";
import { Link as Link$1, Navigate as Navigate$1, useNavigate as useNavigate$1, useParams as useParams$1 } from "react-router-dom";
import { clsx } from "clsx";
import { create } from "zustand";
import { readFileSync } from "node:fs";
import path from "node:path";
import { v4 } from "uuid";
import { useForm } from "react-hook-form";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var ar_default = {
	app: {
		"title": "عطرنا",
		"tagline": "اكتشف عطرك المثالي"
	},
	trending: {
		"title": "الأكثر شعبية",
		"subtitle": "أفضل العطور حسب نقاط الشعبية لدى المجتمع",
		"eyebrow": "الأكثر رواجاً الآن"
	},
	nav: {
		"browse": "تصفح العطور",
		"brands": "الماركات",
		"notes": "المكونات",
		"influencers": "المؤثرون",
		"wardrobe": "خزانة عطوري",
		"trending": "الأكثر شيوعاً",
		"discover": "اكتشف",
		"accords": "العائلات",
		"compare": "قارن",
		"login": "تسجيل الدخول",
		"notebook": "مفكرتي",
		"language": "اللغة",
		"shop": "المتجر"
	},
	home: {
		"hero_title": "عالم العطور العربية",
		"hero_subtitle": "اكتشف أفضل العطور العربية والعالمية. صوّت. قارن. اجمع.",
		"hero_cta": "تصفح العطور",
		"trending_title": "الأكثر شيوعاً هذا الأسبوع",
		"new_arrivals": "أحدث الإضافات",
		"brands_sub": "من العطور العربية الأصيلة إلى العالمية الفاخرة",
		"brands_title": "العلامات التجارية",
		"cta_men": "عطور الرجال",
		"cta_sub": "انضم إلى مجتمعنا وشاركنا تجربتك مع العطور",
		"cta_title": "ابدأ رحلتك العطرية",
		"cta_women": "عطور النساء",
		"explore_oud": "استكشف العود",
		"eyebrow": "موسوعة عطرية عربية شاملة",
		"scroll_hint": "استكشف",
		"trending_sub": "العطور الأعلى تقييماً هذا الأسبوع",
		"feat_oud": "عود وبخور",
		"feat_oud_desc": "أكبر مرجع للعطور الشرقية والعود",
		"feat_halal": "حلال ومعتمد",
		"feat_halal_desc": "معلومات واضحة عن الكحول والشهادات",
		"feat_price": "مقارنة الأسعار",
		"feat_price_desc": "قارن الأسعار بين المتاجر في منطقتك",
		"feat_region": "أداء إقليمي",
		"feat_region_desc": "تقييمات الثبات والفوحان في مناخ منطقتك"
	},
	browse: {
		"title": "تصفح العطور",
		"filter": "تصفية",
		"sort": "ترتيب",
		"clear_all": "مسح الكل",
		"results": "نتيجة",
		"no_results": "لا توجد نتائج",
		"load_more": "تحميل المزيد",
		"sort_popular": "الأكثر شيوعاً",
		"sort_rating": "الأعلى تقييماً",
		"sort_new": "الأحدث",
		"sort_year": "حسب السنة",
		"prev": "السابق",
		"next": "التالي"
	},
	filters: {
		"family": "العائلة العطرية",
		"concentration": "التركيز",
		"gender": "الجنس",
		"arab_filters": "خصائص عربية",
		"oud_only": "عود فقط",
		"alcohol_free": "خالٍ من الكحول",
		"halal_certified": "حلال معتمد",
		"mukhallat": "مخلط",
		"bakhoor": "بخور",
		"oud_grade": "درجة العود",
		"brand": "الماركة",
		"longevity_min": "الثبات الأدنى",
		"sillage_min": "الانتشار الأدنى",
		"rating_min": "التقييم الأدنى",
		"year_range": "سنة الإصدار",
		"search_placeholder": "ابحث عن عطر أو ماركة...",
		"halal": "الحلال والكحول",
		"alcohol_free_only": "خالٍ من الكحول",
		"contains_alcohol": "يحتوي على كحول"
	},
	discover: {
		"accords_subtitle": "اختر الأوتار العطرية للعثور على العطور المطابقة",
		"notes_subtitle": "اختر مكونات عطرية للعثور على العطور المطابقة"
	},
	gender_options: {
		"male": "رجالي",
		"female": "نسائي",
		"unisex": "للجنسين"
	},
	fragrance: {
		"votes": "صوت",
		"no_votes": "لا توجد أصوات بعد",
		"min_votes": "يحتاج 5 أصوات على الأقل لعرض التقييم",
		"concentration": "التركيز",
		"family": "العائلة",
		"gender": "الجنس",
		"launch_year": "سنة الإصدار",
		"notes_pyramid": "هرم المكونات",
		"top_notes": "مكونات القمة",
		"heart_notes": "مكونات القلب",
		"base_notes": "مكونات القاعدة",
		"accords": "الأوتار العطرية",
		"no_accords": "لا توجد بيانات عن الأوتار العطرية بعد",
		"perfumers": "المركّبون",
		"reviews": "التقييمات",
		"similar": "عطور مشابهة",
		"dupes": "البدائل الأرخص",
		"layering": "التوريق",
		"prices": "الأسعار",
		"notes": "نوتات العطر",
		"vote": "قيّم هذا العطر",
		"arab_context": "السياق العربي",
		"add_to_wardrobe": "أضف للخزانة",
		"in_wardrobe": "في خزانتي",
		"add_to_compare": "أضف للمقارنة",
		"compare": "قارن",
		"buy_now": "اشتري الآن",
		"best_value": "أفضل قيمة",
		"no_arab_data": "لا توجد بيانات السياق العربي بعد.",
		"no_similar": "لا توجد عطور مشابهة بعد.",
		"tab_overview": "نظرة عامة",
		"tab_ratings": "التقييمات",
		"tab_prices": "الأسعار",
		"tab_arab_context": "السياق العربي",
		"tab_similar": "مشابهة",
		"brand": "الماركة",
		"community_votes": "تقييمات المجتمع",
		"in_compare": "في المقارنة",
		"no_prices_country": "لا تتوفر أسعار لهذا البلد حالياً",
		"notes_not_set": "—",
		"overall_rating": "التقييم العام",
		"price_disclaimer": "الأسعار تقريبية وقد تتغير. تُحدَّث يومياً.",
		"see_prices": "الأسعار",
		"top_vote": "الأعلى",
		"year": "سنة الإصدار"
	},
	vote: {
		"title": "قيّم هذا العطر",
		"overall": "التقييم العام",
		"love": "أحبه",
		"like": "يعجبني",
		"dislike": "لا يعجبني",
		"longevity": "الثبات",
		"sillage": "الانتشار",
		"price_value": "القيمة مقابل السعر",
		"gender": "التصنيف الجندري",
		"season": "الموسم",
		"time_of_day": "وقت الاستخدام",
		"climate": "الطقس 🌡",
		"occasions": "المناسبات",
		"review_text": "اكتب تجربتك",
		"submit": "إرسال التقييم",
		"update": "تحديث التقييم",
		"submitted": "تم إرسال تقييمك ✓",
		"failed": "فشل إرسال التقييم",
		"review_placeholder": "اكتب تجربتك مع هذا العطر...",
		"edit_mode": "تعديل",
		"occasion": "المناسبات"
	},
	longevity_options: {
		"very_weak": "ضعيف جداً",
		"weak": "ضعيف",
		"moderate": "متوسط",
		"long": "طويل الأمد",
		"eternal": "خالد"
	},
	sillage_options: {
		"intimate": "حميمي",
		"moderate": "متوسط",
		"strong": "قوي",
		"enormous": "هائل"
	},
	season_options: {
		"spring": "ربيع",
		"summer": "صيف",
		"fall": "خريف",
		"winter": "شتاء",
		"all": "طوال السنة"
	},
	time_options: {
		"day": "نهار",
		"night": "ليل",
		"daily": "يومي",
		"special": "مناسبات خاصة"
	},
	climate_options: {
		"hot_dry": "حار وجاف (الخليج صيفاً)",
		"hot_humid": "حار ورطب (جدة/دبي)",
		"mediterranean": "متوسطي (المغرب/الشام)",
		"cold": "بارد (الخليج شتاءً)"
	},
	occasions: {
		"ramadan": "رمضان",
		"eid": "عيد",
		"wedding": "زفاف",
		"prayer": "صلاة",
		"hospitality": "ضيافة"
	},
	arab_data: {
		"contains_oud": "يحتوي على عود",
		"oud_grade": "درجة العود",
		"oud_origin": "أصل العود",
		"oud_wild": "عود بري",
		"oud_process": "طريقة الاستخلاص",
		"attar_subtype": "نوع العطر",
		"halal": "حلال",
		"alcohol_free": "خالٍ من الكحول",
		"burn_method": "طريقة الاستخدام",
		"suitable_for_prayer": "مناسب للصلاة",
		"gifting_index": "مناسب للإهداء في العيد",
		"inspired_by": "مستوحى من",
		"mukhallat": "مخلط",
		"bakhoor": "بخور",
		"contains_alcohol": "يحتوي على كحول",
		"halal_certified": "حلال معتمد",
		"halal_unknown": "غير محدد",
		"type": "النوع"
	},
	wardrobe: {
		"title": "خزانة عطوري",
		"owned": "أمتلكه",
		"wishlist": "قائمة الأمنيات",
		"gifted": "الهدايا",
		"samples": "العينات",
		"want": "أريده",
		"had": "امتلكته سابقاً",
		"testing": "للتجربة",
		"empty": "لا توجد عطور في هذا القسم",
		"empty_cta": "تصفح العطور",
		"added": "تمت الإضافة إلى {{shelf}}",
		"removed": "تمت الإزالة",
		"purchase_date": "تاريخ الشراء",
		"price_paid": "السعر المدفوع",
		"gifted_by": "هدية من",
		"gifted_to": "هدية إلى",
		"gift_occasion": "مناسبة الهدية"
	},
	brands: {
		"title": "الماركات",
		"all": "الكل",
		"arab": "عربية",
		"french": "فرنسية",
		"niche": "نيش",
		"designer": "مصمم",
		"all_brands": "جميع الماركات",
		"verified": "معتمدة",
		"fragrances": "عطر",
		"fragrances_count": "عطر",
		"eyebrow": "دور العطور"
	},
	notes: {
		"title": "المكونات",
		"categories": {
			"oud": "عود",
			"floral": "زهري",
			"citrus": "حمضي",
			"woody": "خشبي",
			"spices": "بهارات",
			"musk": "مسك",
			"resins": "راتينجات",
			"fresh": "منعش",
			"gourmand": "حلوى",
			"aquatic": "مائي"
		}
	},
	influencers: {
		"title": "مؤثرو العطور",
		"verified": "موثق",
		"suggest": "اقترح مؤثراً",
		"reviews": "التقييمات",
		"accuracy": "الدقة",
		"budget": "التنوع السعري",
		"authenticity": "الأصالة",
		"write_review": "اكتب تقييماً"
	},
	compare: {
		"title": "المقارنة",
		"add_fragrance": "أضف عطراً للمقارنة",
		"empty": "أضف عطوراً للمقارنة",
		"max_reached": "الحد الأقصى 3 عطور",
		"clear": "مسح المقارنة",
		"brand": "البراند",
		"family": "العائلة",
		"concentration": "التركيز",
		"gender": "الجنس",
		"overall_rating": "التقييم العام",
		"longevity": "الثبات",
		"longevity_scale": "الثبات / 5",
		"sillage": "الانتشار",
		"sillage_scale": "الانتشار / 5",
		"alcohol_free": "خالٍ من الكحول",
		"contains_oud": "يحتوي على عود",
		"launch_year": "سنة الإصدار",
		"price_range": "نطاق السعر",
		"add_one_more": "أضف عطراً للمقارنة",
		"eyebrow": "مقارنة العطور"
	},
	error: {
		"generic": "حدث خطأ. يرجى المحاولة مرة أخرى.",
		"network": "تعذّر الاتصال بالخادم.",
		"not_found": "الصفحة غير موجودة.",
		"retry": "إعادة المحاولة"
	},
	auth: {
		"login": "تسجيل الدخول",
		"logout": "تسجيل الخروج",
		"email": "البريد الإلكتروني",
		"password": "كلمة المرور",
		"login_button": "دخول",
		"login_error": "البريد الإلكتروني أو كلمة المرور غير صحيحة",
		"login_required": "يجب تسجيل الدخول أولاً",
		"login_to_vote": "سجّل دخولك للتقييم"
	},
	gdpr: {
		"banner_text": "نستخدم ملفات تعريف الارتباط لتحسين تجربتك. بمواصلة الاستخدام، فأنت توافق على استخدامنا لها.",
		"accept": "قبول",
		"reject": "رفض",
		"privacy_policy": "سياسة الخصوصية",
		"settings": "إعدادات ملفات الارتباط"
	},
	privacy: {
		"title": "سياسة الخصوصية",
		"last_updated": "آخر تحديث",
		"data_we_collect": "البيانات التي نجمعها",
		"how_we_use": "كيف نستخدم بياناتك",
		"your_rights": "حقوقك",
		"right_access": "الحق في الوصول إلى بياناتك الشخصية",
		"right_delete": "الحق في حذف حسابك وبياناتك",
		"right_export": "الحق في تصدير بياناتك",
		"contact": "تواصل معنا",
		"delete_account": "حذف حسابي",
		"export_data": "تصدير بياناتي",
		"delete_confirm": "هل أنت متأكد؟ لا يمكن التراجع عن هذا الإجراء.",
		"delete_success": "تمت جدولة حذف حسابك خلال 30 يومًا.",
		"export_success": "تم تجهيز تصدير بياناتك.",
		"data_collection_text": "نجمع عنوان بريدك الإلكتروني، ومحتوى خزانتك، وتقييماتك للعطور، وملاحظاتك الخاصة، وبيانات الاستخدام اللازمة لتقديم خدمة عطرنا. لا نبيع بياناتك الشخصية.",
		"how_we_use_text": "تُستخدم بياناتك لتخصيص تجربة اكتشاف العطور لديك، وحساب تقييمات المجتمع، وإرسال إشعارات اختيارية. تحليلات الاستخدام مجمّعة ومجهولة الهوية."
	},
	seo: {
		"home_title": "عطرنا | اكتشف عطرك المثالي",
		"home_desc": "عطرنا — منصة اكتشاف العطور العربية والعالمية. تصفح آلاف العطور، قارن بينها، واعرف الأكثر شعبية في مجتمع العطور العربي.",
		"browse_title": "تصفح العطور | عطرنا",
		"browse_desc": "ابحث وصفّح آلاف العطور بالفلاتر المتقدمة — الماركة، العائلة، المكونات، الجنس، نوع التركيز، العود، والمزيد.",
		"trending_title": "الأكثر شعبية | عطرنا",
		"trending_desc": "اكتشف أكثر العطور شعبية وتقييماً في مجتمع عطرنا.",
		"brands_title": "ماركات العطور | عطرنا",
		"brands_desc": "استكشف أكبر دليل لماركات العطور العربية والعالمية — عربية، فرنسية، نيش، ومصممي الأزياء.",
		"notes_title": "موسوعة مكونات العطور | عطرنا",
		"notes_desc": "موسوعة مكونات العطور — حمضية، زهرية، خشبية، شرقية وأكثر. اكتشف العطور التي تحتوي على مكوناتك المفضلة.",
		"influencers_title": "مراجعو العطور | عطرنا",
		"influencers_desc": "اكتشف أبرز مراجعي ومؤثري العطور العرب مع تقييمات المجتمع لدقة مراجعاتهم وتنوع ميزانياتهم وأصالتهم.",
		"accords_title": "اكتشف بالعائلات العطرية | عطرنا",
		"accords_desc": "اختر عائلة عطرية أو أكثر لاكتشاف العطور المناسبة لك. ورديّ، خشبي، عودي، حمضي، وأكثر.",
		"notes_search_title": "اكتشف بالمكونات | عطرنا",
		"notes_search_desc": "اختر مكوناً عطرياً أو أكثر لاكتشاف العطور التي تحتوي عليها. ورد، عود، مسك، عنبر، وأكثر.",
		"brand_title": "{{brand}} — العطور | عطرنا",
		"note_title": "{{name}} — مكون عطري | عطرنا",
		"note_fallback_desc": "{{name}} — مكون عطري. اكتشف العطور التي تحتوي على {{name}} على عطرنا.",
		"perfumer_title": "{{name}} — عطّار | عطرنا",
		"perfumer_desc": "{{name}}{{nationality}} — عطّار ومصمم عطور. اكتشف عطوره على عطرنا.",
		"influencer_title": "{{name}} — مراجع عطور | عطرنا",
		"influencer_desc": "{{name}}{{niche}} — مراجع عطور{{rating}}. اقرأ تقييمات المجتمع على عطرنا.",
		"fragrance_fallback_desc": "{{name}} من {{brand}}{{year}}. تقييم المجتمع: {{rating}}/5. اكتشفه على عطرنا."
	},
	common: {
		"loading": "جاري التحميل...",
		"see_all": "عرض الكل",
		"back": "رجوع",
		"share": "مشاركة",
		"report": "إبلاغ",
		"submit": "إرسال",
		"cancel": "إلغاء",
		"save": "حفظ",
		"delete": "حذف",
		"edit": "تعديل",
		"close": "إغلاق",
		"yes": "نعم",
		"no": "لا",
		"remove": "إزالة",
		"all_rights_reserved": "جميع الحقوق محفوظة.",
		"tola": "تولة"
	},
	brand: { "fragrances": "عطر" },
	card: {
		"bestseller": "الأكثر مبيعاً",
		"view_fragrance": "عرض العطر"
	},
	search: { "view_all": "عرض كل النتائج" },
	shop: {
		"eyebrow": "المتجر",
		"title": "المتجر",
		"subtitle": "اشترِ عطورك المفضلة مباشرة",
		"add_to_cart": "أضف إلى السلة",
		"adding": "جارٍ الإضافة…",
		"added_to_cart": "تمت الإضافة إلى السلة",
		"add_failed": "تعذّرت الإضافة إلى السلة",
		"out_of_stock": "غير متوفر",
		"wishlist_toggle": "أضف إلى المفضلة",
		"empty": "لا توجد منتجات حالياً",
		"load_error": "تعذّر تحميل المنتجات",
		"continue_shopping": "متابعة التسوق"
	},
	cart: {
		"title": "سلة التسوق",
		"empty": "سلتك فارغة",
		"summary": "الملخّص",
		"items": "منتج",
		"subtotal": "المجموع الفرعي",
		"shipping": "الشحن",
		"tax": "الضريبة",
		"discount": "الخصم",
		"total": "الإجمالي",
		"increase": "زيادة الكمية",
		"decrease": "إنقاص الكمية",
		"remove": "إزالة",
		"clear": "إفراغ السلة",
		"coupon_placeholder": "كود الخصم",
		"apply": "تطبيق"
	},
	checkout: {
		"details": "بيانات التوصيل",
		"first_name": "الاسم الأول",
		"last_name": "اسم العائلة",
		"email": "البريد الإلكتروني",
		"phone": "رقم الجوال",
		"address": "العنوان",
		"city": "المدينة",
		"country": "الدولة",
		"required": "هذا الحقل مطلوب",
		"place_order": "إتمام الطلب",
		"cod_note": "الدفع عند الاستلام",
		"order_placed": "تم استلام طلبك",
		"order_placed_sub": "سنتواصل معك لتأكيد التوصيل",
		"order_failed": "تعذّر إتمام الطلب"
	}
};
var en_default = {
	app: {
		"title": "OurScent",
		"tagline": "Discover Your Perfect Scent"
	},
	trending: {
		"title": "Trending",
		"subtitle": "Top fragrances by community popularity score",
		"eyebrow": "Trending right now"
	},
	nav: {
		"browse": "Browse",
		"brands": "Brands",
		"notes": "Notes",
		"influencers": "Influencers",
		"wardrobe": "My Wardrobe",
		"trending": "Trending",
		"discover": "Discover",
		"accords": "Accords",
		"compare": "Compare",
		"login": "Login",
		"notebook": "My Notebook",
		"language": "Language",
		"shop": "Shop"
	},
	home: {
		"hero_title": "The Arab Fragrance World",
		"hero_subtitle": "Discover the best Arab and international fragrances. Vote. Compare. Collect.",
		"hero_cta": "Browse Fragrances",
		"trending_title": "Trending This Week",
		"new_arrivals": "New Arrivals",
		"brands_sub": "From authentic Arabian scents to global luxury",
		"brands_title": "Brands",
		"cta_men": "Men's fragrances",
		"cta_sub": "Join our community and share your fragrance experience",
		"cta_title": "Start your fragrance journey",
		"cta_women": "Women's fragrances",
		"explore_oud": "Explore oud",
		"eyebrow": "The complete Arabian fragrance encyclopedia",
		"scroll_hint": "Explore",
		"trending_sub": "The highest rated fragrances this week",
		"feat_oud": "Oud & bakhoor",
		"feat_oud_desc": "The deepest reference for oriental and oud fragrances",
		"feat_halal": "Halal verified",
		"feat_halal_desc": "Clear alcohol content and certification details",
		"feat_price": "Price comparison",
		"feat_price_desc": "Compare prices across stores in your region",
		"feat_region": "Regional performance",
		"feat_region_desc": "Longevity and sillage rated for your climate"
	},
	browse: {
		"title": "Browse Fragrances",
		"filter": "Filter",
		"sort": "Sort",
		"clear_all": "Clear All",
		"results": "results",
		"no_results": "No results found",
		"load_more": "Load More",
		"sort_popular": "Most Popular",
		"sort_rating": "Top Rated",
		"sort_new": "Newest",
		"sort_year": "By Year",
		"prev": "Previous",
		"next": "Next"
	},
	filters: {
		"family": "Fragrance Family",
		"concentration": "Concentration",
		"gender": "Gender",
		"arab_filters": "Arab Specifics",
		"oud_only": "Oud Only",
		"alcohol_free": "Alcohol-Free",
		"halal_certified": "Halal Certified",
		"mukhallat": "Mukhallat",
		"bakhoor": "Bakhoor",
		"oud_grade": "Oud Grade",
		"brand": "Brand",
		"longevity_min": "Min Longevity",
		"sillage_min": "Min Sillage",
		"rating_min": "Min Rating",
		"year_range": "Launch Year",
		"search_placeholder": "Search fragrances or brands...",
		"halal": "Halal & alcohol",
		"alcohol_free_only": "Alcohol-free",
		"contains_alcohol": "Contains alcohol"
	},
	discover: {
		"accords_subtitle": "Select accords to find matching fragrances",
		"notes_subtitle": "Select notes to find matching fragrances"
	},
	gender_options: {
		"male": "Male",
		"female": "Female",
		"unisex": "Unisex"
	},
	fragrance: {
		"votes": "votes",
		"no_votes": "No votes yet",
		"min_votes": "Needs at least 5 votes to show rating",
		"concentration": "Concentration",
		"family": "Family",
		"gender": "Gender",
		"launch_year": "Launch Year",
		"notes_pyramid": "Notes Pyramid",
		"top_notes": "Top Notes",
		"heart_notes": "Heart Notes",
		"base_notes": "Base Notes",
		"accords": "Accords",
		"no_accords": "No accord data yet",
		"perfumers": "Perfumers",
		"reviews": "Reviews",
		"similar": "Similar Fragrances",
		"dupes": "Cheaper Alternatives",
		"layering": "Layering Pairs",
		"prices": "Prices",
		"notes": "Fragrance Notes",
		"vote": "Rate This Fragrance",
		"arab_context": "Arab Context",
		"add_to_wardrobe": "Add to Wardrobe",
		"in_wardrobe": "In My Wardrobe",
		"add_to_compare": "Add to Compare",
		"compare": "Compare",
		"buy_now": "Buy Now",
		"best_value": "Best Value",
		"no_arab_data": "No Arab context data available yet.",
		"no_similar": "No similar fragrances yet.",
		"tab_overview": "Overview",
		"tab_ratings": "Ratings",
		"tab_prices": "Prices",
		"tab_arab_context": "Arab Context",
		"tab_similar": "Similar",
		"brand": "Brand",
		"community_votes": "Community votes",
		"in_compare": "In compare",
		"no_prices_country": "No prices available for this country yet",
		"notes_not_set": "—",
		"overall_rating": "Overall rating",
		"price_disclaimer": "Prices are approximate and may change. Updated daily.",
		"see_prices": "Prices",
		"top_vote": "Top",
		"year": "Year"
	},
	vote: {
		"title": "Rate This Fragrance",
		"overall": "Overall",
		"love": "Love",
		"like": "Like",
		"dislike": "Dislike",
		"longevity": "Longevity",
		"sillage": "Sillage",
		"price_value": "Price / Value",
		"gender": "Gender",
		"season": "Season",
		"time_of_day": "Time of Day",
		"climate": "Climate 🌡",
		"occasions": "Occasions",
		"review_text": "Write your experience",
		"submit": "Submit Vote",
		"update": "Update Vote",
		"submitted": "Vote submitted ✓",
		"failed": "Failed to submit vote",
		"review_placeholder": "Write your experience with this fragrance...",
		"edit_mode": "Edit",
		"occasion": "Occasions"
	},
	longevity_options: {
		"very_weak": "Very Weak",
		"weak": "Weak",
		"moderate": "Moderate",
		"long": "Long-lasting",
		"eternal": "Eternal"
	},
	sillage_options: {
		"intimate": "Intimate",
		"moderate": "Moderate",
		"strong": "Strong",
		"enormous": "Enormous"
	},
	season_options: {
		"spring": "Spring",
		"summer": "Summer",
		"fall": "Fall",
		"winter": "Winter",
		"all": "Year-round"
	},
	time_options: {
		"day": "Day",
		"night": "Night",
		"daily": "Daily",
		"special": "Special Occasions"
	},
	climate_options: {
		"hot_dry": "Hot & Dry (Gulf Summer)",
		"hot_humid": "Hot & Humid (Jeddah/Dubai)",
		"mediterranean": "Mediterranean (Levant/Maghreb)",
		"cold": "Cold (Gulf Winter)"
	},
	occasions: {
		"ramadan": "Ramadan",
		"eid": "Eid",
		"wedding": "Wedding",
		"prayer": "Prayer",
		"hospitality": "Hospitality"
	},
	arab_data: {
		"contains_oud": "Contains Oud",
		"oud_grade": "Oud Grade",
		"oud_origin": "Oud Origin",
		"oud_wild": "Wild Oud",
		"oud_process": "Extraction Process",
		"attar_subtype": "Attar Type",
		"halal": "Halal",
		"alcohol_free": "Alcohol-Free",
		"burn_method": "Burn Method",
		"suitable_for_prayer": "Suitable for Prayer",
		"gifting_index": "Eid Gift Score",
		"inspired_by": "Inspired by",
		"mukhallat": "Mukhallat",
		"bakhoor": "Bakhoor",
		"contains_alcohol": "Contains alcohol",
		"halal_certified": "Halal certified",
		"halal_unknown": "Not specified",
		"type": "Type"
	},
	wardrobe: {
		"title": "My Wardrobe",
		"owned": "Owned",
		"wishlist": "Wishlist",
		"gifted": "Gifted",
		"samples": "Samples",
		"want": "Want",
		"had": "Had",
		"testing": "Testing",
		"empty": "No fragrances in this section",
		"empty_cta": "Browse Fragrances",
		"added": "Added to {{shelf}}",
		"removed": "Removed",
		"purchase_date": "Purchase Date",
		"price_paid": "Price Paid",
		"gifted_by": "Gifted By",
		"gifted_to": "Gifted To",
		"gift_occasion": "Gift Occasion"
	},
	brands: {
		"title": "Brands",
		"all": "All",
		"arab": "Arab",
		"french": "French",
		"niche": "Niche",
		"designer": "Designer",
		"all_brands": "All Brands",
		"verified": "Verified",
		"fragrances": "fragrances",
		"fragrances_count": "fragrances",
		"eyebrow": "Fragrance houses"
	},
	notes: {
		"title": "Fragrance Notes",
		"categories": {
			"oud": "Oud",
			"floral": "Floral",
			"citrus": "Citrus",
			"woody": "Woody",
			"spices": "Spices",
			"musk": "Musk",
			"resins": "Resins",
			"fresh": "Fresh",
			"gourmand": "Gourmand",
			"aquatic": "Aquatic"
		}
	},
	influencers: {
		"title": "Fragrance Influencers",
		"verified": "Verified",
		"suggest": "Suggest an Influencer",
		"reviews": "Reviews",
		"accuracy": "Accuracy",
		"budget": "Budget Variety",
		"authenticity": "Authenticity",
		"write_review": "Write a Review"
	},
	compare: {
		"title": "Compare",
		"add_fragrance": "Add fragrance to compare",
		"empty": "Add fragrances to compare",
		"max_reached": "Maximum 3 fragrances",
		"clear": "Clear compare",
		"brand": "Brand",
		"family": "Family",
		"concentration": "Concentration",
		"gender": "Gender",
		"overall_rating": "Overall Rating",
		"longevity": "Longevity",
		"longevity_scale": "Longevity / 5",
		"sillage": "Sillage",
		"sillage_scale": "Sillage / 5",
		"alcohol_free": "Alcohol-Free",
		"contains_oud": "Contains Oud",
		"launch_year": "Launch Year",
		"price_range": "Price Range",
		"add_one_more": "Add one more to compare",
		"eyebrow": "Compare fragrances"
	},
	error: {
		"generic": "Something went wrong. Please try again.",
		"network": "Could not connect to server.",
		"not_found": "Page not found.",
		"retry": "Try Again"
	},
	auth: {
		"login": "Login",
		"logout": "Logout",
		"email": "Email",
		"password": "Password",
		"login_button": "Sign In",
		"login_error": "Invalid email or password",
		"login_required": "Please login first",
		"login_to_vote": "Sign in to rate"
	},
	gdpr: {
		"banner_text": "We use cookies to improve your experience. By continuing, you agree to our use of cookies.",
		"accept": "Accept",
		"reject": "Reject",
		"privacy_policy": "Privacy Policy",
		"settings": "Cookie Settings"
	},
	privacy: {
		"title": "Privacy Policy",
		"last_updated": "Last updated",
		"data_we_collect": "Data We Collect",
		"how_we_use": "How We Use Your Data",
		"your_rights": "Your Rights",
		"right_access": "Right to access your personal data",
		"right_delete": "Right to delete your account and data",
		"right_export": "Right to export your data",
		"contact": "Contact Us",
		"delete_account": "Delete My Account",
		"export_data": "Export My Data",
		"delete_confirm": "Are you sure? This action cannot be undone.",
		"delete_success": "Your account has been scheduled for deletion within 30 days.",
		"export_success": "Your data export has been prepared.",
		"data_collection_text": "We collect your email address, wardrobe entries, fragrance votes, private notes, and usage data necessary to provide the OurScent service. We do not sell your personal data.",
		"how_we_use_text": "Your data is used to personalise your fragrance discovery experience, compute community ratings, and send optional notifications. Analytics are aggregated and anonymised."
	},
	seo: {
		"home_title": "OurScent | Discover Your Perfect Scent",
		"home_desc": "OurScent — Discover thousands of Arab and international fragrances. Browse, compare, and vote with the community.",
		"browse_title": "Browse Fragrances | OurScent",
		"browse_desc": "Search thousands of fragrances with advanced filters — brand, family, notes, gender, concentration, oud, and more.",
		"trending_title": "Trending Fragrances | OurScent",
		"trending_desc": "Discover the most popular and top-rated fragrances ranked by the OurScent community.",
		"brands_title": "Fragrance Brands | OurScent",
		"brands_desc": "Explore the largest directory of Arab and international fragrance brands — Arab, French, niche, and designer.",
		"notes_title": "Fragrance Notes Encyclopedia | OurScent",
		"notes_desc": "Encyclopedia of fragrance notes — citrus, floral, woody, oriental and more. Find fragrances by your favourite notes.",
		"influencers_title": "Fragrance Influencers | OurScent",
		"influencers_desc": "Discover the top Arab fragrance reviewers with community ratings for accuracy, budget variety, and authenticity.",
		"accords_title": "Discover by Accords | OurScent",
		"accords_desc": "Choose one or more accord families to discover matching fragrances. Floral, woody, oud, citrus and more.",
		"notes_search_title": "Discover by Notes | OurScent",
		"notes_search_desc": "Choose fragrance notes to discover fragrances that contain them. Rose, oud, musk, amber, and more.",
		"brand_title": "{{brand}} — Fragrances | OurScent",
		"note_title": "{{name}} — Fragrance Note | OurScent",
		"note_fallback_desc": "{{name}} — fragrance note. Discover fragrances containing {{name}} on OurScent.",
		"perfumer_title": "{{name}} — Perfumer | OurScent",
		"perfumer_desc": "{{name}}{{nationality}} — perfumer and fragrance designer. Discover their fragrances on OurScent.",
		"influencer_title": "{{name}} — Fragrance Reviewer | OurScent",
		"influencer_desc": "{{name}}{{niche}} — fragrance reviewer{{rating}}. Read community reviews on OurScent.",
		"fragrance_fallback_desc": "{{name}} by {{brand}}{{year}}. Community rating: {{rating}}/5. Discover on OurScent."
	},
	common: {
		"loading": "Loading...",
		"see_all": "See All",
		"back": "Back",
		"share": "Share",
		"report": "Report",
		"submit": "Submit",
		"cancel": "Cancel",
		"save": "Save",
		"delete": "Delete",
		"edit": "Edit",
		"close": "Close",
		"yes": "Yes",
		"no": "No",
		"remove": "Remove",
		"all_rights_reserved": "All rights reserved.",
		"tola": "tola"
	},
	brand: { "fragrances": "fragrances" },
	card: {
		"bestseller": "Bestseller",
		"view_fragrance": "View fragrance"
	},
	search: { "view_all": "View all results" },
	shop: {
		"eyebrow": "Shop",
		"title": "Shop",
		"subtitle": "Buy your favourite fragrances directly",
		"add_to_cart": "Add to cart",
		"adding": "Adding…",
		"added_to_cart": "Added to cart",
		"add_failed": "Could not add to cart",
		"out_of_stock": "Out of stock",
		"wishlist_toggle": "Toggle wishlist",
		"empty": "No products yet",
		"load_error": "Could not load products",
		"continue_shopping": "Continue shopping"
	},
	cart: {
		"title": "Cart",
		"empty": "Your cart is empty",
		"summary": "Summary",
		"items": "items",
		"subtotal": "Subtotal",
		"shipping": "Shipping",
		"tax": "Tax",
		"discount": "Discount",
		"total": "Total",
		"increase": "Increase quantity",
		"decrease": "Decrease quantity",
		"remove": "Remove",
		"clear": "Clear cart",
		"coupon_placeholder": "Coupon code",
		"apply": "Apply"
	},
	checkout: {
		"details": "Delivery details",
		"first_name": "First name",
		"last_name": "Last name",
		"email": "Email",
		"phone": "Phone",
		"address": "Address",
		"city": "City",
		"country": "Country",
		"required": "This field is required",
		"place_order": "Place order",
		"cod_note": "Cash on delivery",
		"order_placed": "Order placed",
		"order_placed_sub": "We'll contact you to confirm delivery",
		"order_failed": "Could not place the order"
	}
};
var fr_default = {
	app: {
		"title": "OurScent",
		"tagline": "Découvrez votre parfum idéal"
	},
	trending: {
		"title": "Tendances",
		"subtitle": "Les meilleurs parfums selon le score de popularité communautaire",
		"eyebrow": "Tendance en ce moment"
	},
	nav: {
		"browse": "Parfums",
		"brands": "Marques",
		"notes": "Ingrédients",
		"influencers": "Influenceurs",
		"wardrobe": "Ma garde-robe",
		"trending": "Tendances",
		"discover": "Découvrir",
		"accords": "Accords",
		"compare": "Comparer",
		"login": "Connexion",
		"notebook": "Mon carnet",
		"language": "Langue",
		"shop": "Boutique"
	},
	home: {
		"hero_title": "Le monde des parfums arabes",
		"hero_subtitle": "Découvrez les meilleurs parfums arabes et internationaux. Votez. Comparez. Collectionnez.",
		"hero_cta": "Parcourir les parfums",
		"trending_title": "Tendances cette semaine",
		"new_arrivals": "Nouveautés",
		"brands_sub": "Des parfums arabes authentiques au luxe international",
		"brands_title": "Marques",
		"cta_men": "Parfums homme",
		"cta_sub": "Rejoignez la communauté et partagez votre expérience",
		"cta_title": "Commencez votre voyage olfactif",
		"cta_women": "Parfums femme",
		"explore_oud": "Explorer l'oud",
		"eyebrow": "L'encyclopédie complète du parfum arabe",
		"scroll_hint": "Explorer",
		"trending_sub": "Les parfums les mieux notés cette semaine",
		"feat_oud": "Oud et bakhoor",
		"feat_oud_desc": "La référence des parfums orientaux et de l'oud",
		"feat_halal": "Halal vérifié",
		"feat_halal_desc": "Informations claires sur l'alcool et les certifications",
		"feat_price": "Comparaison des prix",
		"feat_price_desc": "Comparez les prix des boutiques de votre région",
		"feat_region": "Performance régionale",
		"feat_region_desc": "Tenue et sillage évalués pour votre climat"
	},
	browse: {
		"title": "Parcourir les parfums",
		"filter": "Filtrer",
		"sort": "Trier",
		"clear_all": "Tout effacer",
		"results": "résultats",
		"no_results": "Aucun résultat trouvé",
		"load_more": "Charger plus",
		"sort_popular": "Les plus populaires",
		"sort_rating": "Mieux notés",
		"sort_new": "Plus récents",
		"sort_year": "Par année",
		"prev": "Précédent",
		"next": "Suivant"
	},
	filters: {
		"family": "Famille olfactive",
		"concentration": "Concentration",
		"gender": "Genre",
		"arab_filters": "Spécificités arabes",
		"oud_only": "Oud uniquement",
		"alcohol_free": "Sans alcool",
		"halal_certified": "Certifié halal",
		"mukhallat": "Mukhallat",
		"bakhoor": "Bakhour",
		"oud_grade": "Grade d'oud",
		"brand": "Marque",
		"longevity_min": "Longévité min.",
		"sillage_min": "Sillage min.",
		"rating_min": "Note min.",
		"year_range": "Année de lancement",
		"search_placeholder": "Rechercher des parfums ou marques...",
		"halal": "Halal et alcool",
		"alcohol_free_only": "Sans alcool",
		"contains_alcohol": "Contient de l'alcool"
	},
	discover: {
		"accords_subtitle": "Sélectionnez des accords pour trouver les parfums correspondants",
		"notes_subtitle": "Sélectionnez des notes pour trouver les parfums correspondants"
	},
	gender_options: {
		"male": "Masculin",
		"female": "Féminin",
		"unisex": "Mixte"
	},
	fragrance: {
		"votes": "votes",
		"no_votes": "Aucun vote pour l'instant",
		"min_votes": "Nécessite au moins 5 votes pour afficher la note",
		"concentration": "Concentration",
		"family": "Famille",
		"gender": "Genre",
		"launch_year": "Année de lancement",
		"notes_pyramid": "Pyramide olfactive",
		"top_notes": "Notes de tête",
		"heart_notes": "Notes de cœur",
		"base_notes": "Notes de fond",
		"accords": "Accords",
		"no_accords": "Pas encore de données d'accords",
		"perfumers": "Parfumeurs",
		"reviews": "Avis",
		"similar": "Parfums similaires",
		"dupes": "Alternatives moins chères",
		"layering": "Associations",
		"prices": "Prix",
		"notes": "Notes olfactives",
		"vote": "Noter ce parfum",
		"arab_context": "Contexte arabe",
		"add_to_wardrobe": "Ajouter à ma garde-robe",
		"in_wardrobe": "Dans ma garde-robe",
		"add_to_compare": "Ajouter à la comparaison",
		"compare": "Comparer",
		"buy_now": "Acheter maintenant",
		"best_value": "Meilleur rapport qualité-prix",
		"no_arab_data": "Aucune donnée de contexte arabe disponible pour l'instant.",
		"no_similar": "Aucun parfum similaire pour l'instant.",
		"tab_overview": "Aperçu",
		"tab_ratings": "Évaluations",
		"tab_prices": "Prix",
		"tab_arab_context": "Contexte arabe",
		"tab_similar": "Similaires",
		"brand": "Marque",
		"community_votes": "Votes de la communauté",
		"in_compare": "Dans le comparateur",
		"no_prices_country": "Aucun prix disponible pour ce pays",
		"notes_not_set": "—",
		"overall_rating": "Note globale",
		"price_disclaimer": "Prix indicatifs, susceptibles de changer. Mis à jour quotidiennement.",
		"see_prices": "Prix",
		"top_vote": "Top",
		"year": "Année"
	},
	vote: {
		"title": "Noter ce parfum",
		"overall": "Global",
		"love": "J'adore",
		"like": "J'aime",
		"dislike": "Pas pour moi",
		"longevity": "Longévité",
		"sillage": "Sillage",
		"price_value": "Prix / Valeur",
		"gender": "Genre",
		"season": "Saison",
		"time_of_day": "Moment de la journée",
		"climate": "Climat 🌡",
		"occasions": "Occasions",
		"review_text": "Partagez votre expérience",
		"submit": "Soumettre le vote",
		"update": "Mettre à jour le vote",
		"submitted": "Vote soumis ✓",
		"failed": "Échec de la soumission du vote",
		"review_placeholder": "Partagez votre expérience avec ce parfum...",
		"edit_mode": "Modifier",
		"occasion": "Occasions"
	},
	longevity_options: {
		"very_weak": "Très faible",
		"weak": "Faible",
		"moderate": "Modérée",
		"long": "Longue durée",
		"eternal": "Éternelle"
	},
	sillage_options: {
		"intimate": "Intime",
		"moderate": "Modéré",
		"strong": "Fort",
		"enormous": "Énorme"
	},
	season_options: {
		"spring": "Printemps",
		"summer": "Été",
		"fall": "Automne",
		"winter": "Hiver",
		"all": "Toute l'année"
	},
	time_options: {
		"day": "Jour",
		"night": "Nuit",
		"daily": "Quotidien",
		"special": "Occasions spéciales"
	},
	climate_options: {
		"hot_dry": "Chaud et sec (Golfe en été)",
		"hot_humid": "Chaud et humide (Djeddah/Dubaï)",
		"mediterranean": "Méditerranéen (Maghreb/Levant)",
		"cold": "Froid (Golfe en hiver)"
	},
	occasions: {
		"ramadan": "Ramadan",
		"eid": "Aïd",
		"wedding": "Mariage",
		"prayer": "Prière",
		"hospitality": "Hospitalité"
	},
	arab_data: {
		"contains_oud": "Contient de l'oud",
		"oud_grade": "Grade d'oud",
		"oud_origin": "Origine de l'oud",
		"oud_wild": "Oud sauvage",
		"oud_process": "Processus d'extraction",
		"attar_subtype": "Type d'attar",
		"halal": "Halal",
		"alcohol_free": "Sans alcool",
		"burn_method": "Méthode de combustion",
		"suitable_for_prayer": "Adapté à la prière",
		"gifting_index": "Score cadeau pour l'Aïd",
		"inspired_by": "Inspiré par",
		"mukhallat": "Mukhallat",
		"bakhoor": "Bakhoor",
		"contains_alcohol": "Contient de l'alcool",
		"halal_certified": "Certifié halal",
		"halal_unknown": "Non précisé",
		"type": "Type"
	},
	wardrobe: {
		"title": "Ma garde-robe",
		"owned": "Possédé",
		"wishlist": "Liste de souhaits",
		"gifted": "Cadeaux",
		"samples": "Échantillons",
		"want": "Désiré",
		"had": "Eu",
		"testing": "En test",
		"empty": "Aucun parfum dans cette section",
		"empty_cta": "Parcourir les parfums",
		"added": "Ajouté à {{shelf}}",
		"removed": "Supprimé",
		"purchase_date": "Date d'achat",
		"price_paid": "Prix payé",
		"gifted_by": "Offert par",
		"gifted_to": "Offert à",
		"gift_occasion": "Occasion du cadeau"
	},
	brands: {
		"title": "Marques",
		"all": "Tout",
		"arab": "Arabes",
		"french": "Françaises",
		"niche": "Niche",
		"designer": "Créateur",
		"all_brands": "Toutes les marques",
		"verified": "Vérifiée",
		"fragrances": "parfums",
		"fragrances_count": "parfums",
		"eyebrow": "Maisons de parfum"
	},
	notes: {
		"title": "Notes olfactives",
		"categories": {
			"oud": "Oud",
			"floral": "Floral",
			"citrus": "Agrumes",
			"woody": "Boisé",
			"spices": "Épices",
			"musk": "Musc",
			"resins": "Résines",
			"fresh": "Frais",
			"gourmand": "Gourmand",
			"aquatic": "Aquatique"
		}
	},
	influencers: {
		"title": "Influenceurs de parfums",
		"verified": "Vérifié",
		"suggest": "Suggérer un influenceur",
		"reviews": "Avis",
		"accuracy": "Précision",
		"budget": "Variété de budget",
		"authenticity": "Authenticité",
		"write_review": "Écrire un avis"
	},
	compare: {
		"title": "Comparer",
		"add_fragrance": "Ajouter un parfum à comparer",
		"empty": "Ajoutez des parfums pour les comparer",
		"max_reached": "Maximum 3 parfums",
		"clear": "Effacer la comparaison",
		"brand": "Marque",
		"family": "Famille",
		"concentration": "Concentration",
		"gender": "Genre",
		"overall_rating": "Note globale",
		"longevity": "Longévité",
		"longevity_scale": "Longévité / 5",
		"sillage": "Sillage",
		"sillage_scale": "Sillage / 5",
		"alcohol_free": "Sans alcool",
		"contains_oud": "Contient du Oud",
		"launch_year": "Année de lancement",
		"price_range": "Fourchette de prix",
		"add_one_more": "Ajoutez-en un autre à comparer",
		"eyebrow": "Comparer les parfums"
	},
	error: {
		"generic": "Une erreur s'est produite. Veuillez réessayer.",
		"network": "Impossible de se connecter au serveur.",
		"not_found": "Page introuvable.",
		"retry": "Réessayer"
	},
	auth: {
		"login": "Connexion",
		"logout": "Déconnexion",
		"email": "Email",
		"password": "Mot de passe",
		"login_button": "Se connecter",
		"login_error": "Email ou mot de passe incorrect",
		"login_required": "Veuillez vous connecter d'abord",
		"login_to_vote": "Connectez-vous pour noter"
	},
	gdpr: {
		"banner_text": "Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre utilisation des cookies.",
		"accept": "Accepter",
		"reject": "Refuser",
		"privacy_policy": "Politique de confidentialité",
		"settings": "Paramètres des cookies"
	},
	privacy: {
		"title": "Politique de confidentialité",
		"last_updated": "Dernière mise à jour",
		"data_we_collect": "Données que nous collectons",
		"how_we_use": "Comment nous utilisons vos données",
		"your_rights": "Vos droits",
		"right_access": "Droit d'accès à vos données personnelles",
		"right_delete": "Droit de supprimer votre compte et vos données",
		"right_export": "Droit d'exporter vos données",
		"contact": "Nous contacter",
		"delete_account": "Supprimer mon compte",
		"export_data": "Exporter mes données",
		"delete_confirm": "Êtes-vous sûr ? Cette action est irréversible.",
		"delete_success": "La suppression de votre compte a été planifiée dans les 30 jours.",
		"export_success": "L'export de vos données a été préparé.",
		"data_collection_text": "Nous collectons votre adresse e-mail, le contenu de votre garde-robe, vos votes sur les parfums, vos notes privées et les données d'utilisation nécessaires à la fourniture du service OurScent. Nous ne vendons pas vos données personnelles.",
		"how_we_use_text": "Vos données sont utilisées pour personnaliser votre expérience de découverte des parfums, calculer les notes communautaires et envoyer des notifications optionnelles. Les analyses sont agrégées et anonymisées."
	},
	seo: {
		"home_title": "OurScent | Découvrez votre parfum idéal",
		"home_desc": "OurScent — Découvrez des milliers de parfums arabes et internationaux. Parcourez, comparez et votez avec la communauté.",
		"browse_title": "Parcourir les parfums | OurScent",
		"browse_desc": "Recherchez des milliers de parfums avec des filtres avancés — marque, famille, notes, genre, concentration et plus.",
		"trending_title": "Parfums tendance | OurScent",
		"trending_desc": "Découvrez les parfums les plus populaires et les mieux notés classés par la communauté OurScent.",
		"brands_title": "Marques de parfums | OurScent",
		"brands_desc": "Explorez le plus grand répertoire de marques de parfums arabes et internationales — arabes, françaises, niche et créateurs.",
		"notes_title": "Encyclopédie des notes olfactives | OurScent",
		"notes_desc": "Encyclopédie des notes de parfum — agrumes, floral, boisé, oriental et plus. Trouvez les parfums avec vos notes préférées.",
		"influencers_title": "Influenceurs de parfums | OurScent",
		"influencers_desc": "Découvrez les meilleurs critiques arabes de parfums avec les notes communautaires sur la précision et l'authenticité.",
		"accords_title": "Découvrir par accords | OurScent",
		"accords_desc": "Choisissez une ou plusieurs familles d'accords pour découvrir les parfums correspondants. Floral, boisé, oud, agrumes et plus.",
		"notes_search_title": "Découvrir par notes | OurScent",
		"notes_search_desc": "Choisissez des notes olfactives pour découvrir les parfums qui les contiennent. Rose, oud, musc, ambre et plus.",
		"brand_title": "{{brand}} — Parfums | OurScent",
		"note_title": "{{name}} — Note olfactive | OurScent",
		"note_fallback_desc": "{{name}} — note olfactive. Découvrez les parfums contenant {{name}} sur OurScent.",
		"perfumer_title": "{{name}} — Parfumeur | OurScent",
		"perfumer_desc": "{{name}}{{nationality}} — parfumeur et créateur de parfums. Découvrez ses créations sur OurScent.",
		"influencer_title": "{{name}} — Critique de parfums | OurScent",
		"influencer_desc": "{{name}}{{niche}} — critique de parfums{{rating}}. Lisez les avis communautaires sur OurScent.",
		"fragrance_fallback_desc": "{{name}} par {{brand}}{{year}}. Note communautaire : {{rating}}/5. Découvrir sur OurScent."
	},
	common: {
		"loading": "Chargement...",
		"see_all": "Voir tout",
		"back": "Retour",
		"share": "Partager",
		"report": "Signaler",
		"submit": "Soumettre",
		"cancel": "Annuler",
		"save": "Enregistrer",
		"delete": "Supprimer",
		"edit": "Modifier",
		"close": "Fermer",
		"yes": "Oui",
		"no": "Non",
		"remove": "Supprimer",
		"all_rights_reserved": "Tous droits réservés.",
		"tola": "tola"
	},
	brand: { "fragrances": "parfums" },
	card: {
		"bestseller": "Meilleure vente",
		"view_fragrance": "Voir le parfum"
	},
	search: { "view_all": "Voir tous les résultats" },
	shop: {
		"eyebrow": "Boutique",
		"title": "Boutique",
		"subtitle": "Achetez vos parfums préférés directement",
		"add_to_cart": "Ajouter au panier",
		"adding": "Ajout…",
		"added_to_cart": "Ajouté au panier",
		"add_failed": "Impossible d'ajouter au panier",
		"out_of_stock": "Rupture de stock",
		"wishlist_toggle": "Ajouter aux favoris",
		"empty": "Aucun produit pour le moment",
		"load_error": "Impossible de charger les produits",
		"continue_shopping": "Continuer les achats"
	},
	cart: {
		"title": "Panier",
		"empty": "Votre panier est vide",
		"summary": "Récapitulatif",
		"items": "articles",
		"subtotal": "Sous-total",
		"shipping": "Livraison",
		"tax": "TVA",
		"discount": "Remise",
		"total": "Total",
		"increase": "Augmenter la quantité",
		"decrease": "Diminuer la quantité",
		"remove": "Retirer",
		"clear": "Vider le panier",
		"coupon_placeholder": "Code promo",
		"apply": "Appliquer"
	},
	checkout: {
		"details": "Informations de livraison",
		"first_name": "Prénom",
		"last_name": "Nom",
		"email": "E-mail",
		"phone": "Téléphone",
		"address": "Adresse",
		"city": "Ville",
		"country": "Pays",
		"required": "Ce champ est requis",
		"place_order": "Passer la commande",
		"cod_note": "Paiement à la livraison",
		"order_placed": "Commande enregistrée",
		"order_placed_sub": "Nous vous contacterons pour confirmer la livraison",
		"order_failed": "Impossible de passer la commande"
	}
};
//#endregion
//#region src/i18n/index.ts
/**
* Language comes from the URL and nothing else.
*
* i18next-browser-languagedetector used to pick it from localStorage and
* navigator. Pages are prerendered with the fallback ('ar'), so a visitor whose
* stored i18nextLng said something else re-rendered different text on hydration
* and React bailed out with #418/#425 — and on /trending that cascaded into the
* error boundary. Deriving it from the path makes the prerendered HTML and the
* first client render identical by construction.
*/
function languageFromPath(pathname) {
	const seg = pathname.split("/")[1];
	return [
		"ar",
		"en",
		"fr"
	].includes(seg) ? seg : "ar";
}
i18n.use(initReactI18next).init({
	resources: {
		ar: { translation: ar_default },
		en: { translation: en_default },
		fr: { translation: fr_default }
	},
	fallbackLng: "ar",
	supportedLngs: [
		"ar",
		"en",
		"fr"
	],
	interpolation: { escapeValue: false }
});
//#endregion
//#region app/entry.server.tsx
var entry_server_exports = /* @__PURE__ */ __exportAll({ default: () => handleRequest });
var ABORT_DELAY = 1e4;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext) {
	const lang = languageFromPath(new URL(request.url).pathname);
	if (i18n.language !== lang) i18n.changeLanguage(lang);
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		const userAgent = request.headers.get("user-agent");
		const readyEvent = userAgent && isbot(userAgent) ? "onAllReady" : "onShellReady";
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyEvent]() {
				shellRendered = true;
				const body = new PassThrough();
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
				pipe(body);
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
		setTimeout(abort, ABORT_DELAY);
	});
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/auth/src/utils/jwt.ts
function decodeJwt(token) {
	try {
		return jwtDecode(token);
	} catch {
		return {};
	}
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/auth/src/utils/token-storage.ts
/** Build prefixed token storage backed by both localStorage and cookies. */
function createTokenStorage(storageKey) {
	const tokenKey = `_${storageKey}_AUTH_TOKEN`;
	const refreshTokenKey = `_${storageKey}_AUTH_REFRESH_TOKEN`;
	const sessionKey = `_${storageKey}_AUTH_`;
	const isBrowser = typeof window !== "undefined";
	function getToken() {
		if (!isBrowser) return null;
		return getCookie(tokenKey) ?? localStorage.getItem(tokenKey) ?? null;
	}
	function getRefreshToken() {
		if (!isBrowser) return null;
		return getCookie(refreshTokenKey) ?? localStorage.getItem(refreshTokenKey) ?? null;
	}
	function getSession() {
		if (!isBrowser) return null;
		return getCookie(sessionKey) ?? localStorage.getItem(sessionKey) ?? null;
	}
	function setToken(token) {
		if (!isBrowser) return;
		setCookie(tokenKey, token);
		localStorage.setItem(tokenKey, token);
	}
	function setRefreshToken(token) {
		if (!isBrowser) return;
		setCookie(refreshTokenKey, token);
		localStorage.setItem(refreshTokenKey, token);
	}
	function setSession(data) {
		if (!isBrowser) return;
		setCookie(sessionKey, data);
		localStorage.setItem(sessionKey, data);
	}
	function clearAll() {
		if (!isBrowser) return;
		deleteCookie(tokenKey);
		deleteCookie(refreshTokenKey);
		deleteCookie(sessionKey);
		localStorage.removeItem(tokenKey);
		localStorage.removeItem(refreshTokenKey);
		localStorage.removeItem(sessionKey);
	}
	return {
		getToken,
		getRefreshToken,
		getSession,
		setToken,
		setRefreshToken,
		setSession,
		clearAll,
		tokenKey,
		refreshTokenKey,
		sessionKey
	};
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/auth/src/utils/auth-guards.ts
var EventEmitter$1 = class {
	constructor() {
		this.listeners = /* @__PURE__ */ new Map();
	}
	on(event, fn) {
		const fns = this.listeners.get(event) ?? [];
		fns.push(fn);
		this.listeners.set(event, fns);
		return () => this.off(event, fn);
	}
	off(event, fn) {
		const fns = this.listeners.get(event) ?? [];
		this.listeners.set(event, fns.filter((f) => f !== fn));
	}
	emit(event, payload) {
		this.listeners.get(event)?.forEach((fn) => fn(payload));
	}
};
new EventEmitter$1();
async function performCompleteLogout(storageKeyPrefix, onCartClear) {
	if (typeof window === "undefined") return;
	const keysToRemove = [];
	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);
		if (key && (key.includes(storageKeyPrefix) || key.includes("auth") || key.includes("token"))) keysToRemove.push(key);
	}
	keysToRemove.forEach((k) => localStorage.removeItem(k));
	sessionStorage.clear();
	document.cookie.split(";").forEach((c) => {
		document.cookie = c.replace(/^ +/, "").replace(/=.*/, `=;expires=${(/* @__PURE__ */ new Date()).toUTCString()};path=/`);
	});
	onCartClear?.();
	if ("caches" in window) try {
		const names = await caches.keys();
		await Promise.all(names.map((n) => caches.delete(n)));
	} catch {}
	if ("serviceWorker" in navigator) try {
		const regs = await navigator.serviceWorker.getRegistrations();
		await Promise.all(regs.map((r) => r.unregister()));
	} catch {}
	setTimeout(() => window.location.reload(), 100);
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/auth/src/types/index.ts
var AuthUser = class {
	constructor(decoded) {
		this.id = String(decoded.nameIdentifier ?? decoded.sub ?? "");
		this.email = decoded.email != null ? String(decoded.email) : void 0;
		this.userName = decoded.name != null ? String(decoded.name) : void 0;
		this.type = decoded.type ?? "Guest";
		this.tier = decoded.tier != null ? decoded.tier : void 0;
		this.registerType = decoded.registerType != null ? String(decoded.registerType) : void 0;
		this.emailConfirmed = decoded.confirm === "True" || decoded.emailConfirmed === true;
		const rawLang = decoded.lang ?? decoded.langClam;
		this.language = rawLang != null ? langEnumToCode(Number(rawLang)) : "ar";
		this.isInit = decoded.init === "True" || decoded.isInit === true;
		this.phoneNumber = decoded.mobilePhone != null ? String(decoded.mobilePhone) : void 0;
		this.userId = decoded.sId != null ? String(decoded.sId) : this.id;
		this.roles = Array.isArray(decoded.role) ? decoded.role : decoded.role != null ? [String(decoded.role)] : [];
		this.permissions = Array.isArray(decoded.Permission) ? decoded.Permission : [];
		this.profileUrl = decoded.profileUrl != null ? String(decoded.profileUrl) : "";
		this.paymentInfo = extractPaymentInfo(decoded);
		this.countryId = decoded.countryId != null ? Number(decoded.countryId) : decoded.CountryId != null ? Number(decoded.CountryId) : null;
		this.currency = decoded.currency != null ? String(decoded.currency) : decoded.Currency != null ? String(decoded.Currency) : null;
		this.countryCode = decoded.country != null ? String(decoded.country) : decoded.countryCode != null ? String(decoded.countryCode) : decoded.CountryCode != null ? String(decoded.CountryCode) : null;
		this.firstName = decoded.firstName != null ? String(decoded.firstName) : void 0;
		this.lastName = decoded.lastName != null ? String(decoded.lastName) : void 0;
	}
};
function langEnumToCode(n) {
	if (n === 1) return "en";
	if (n === 2) return "fr";
	return "ar";
}
function extractPaymentInfo(decoded) {
	const raw = decoded.paymentInfo ?? decoded.PaymentInfo;
	if (raw && typeof raw === "object" && !Array.isArray(raw)) return {
		paymentMethod: raw.paymentMethod != null ? String(raw.paymentMethod) : void 0,
		cardLast4: raw.cardLast4 != null ? String(raw.cardLast4) : void 0,
		billingEmail: raw.billingEmail != null ? String(raw.billingEmail) : void 0,
		billingPhone: raw.billingPhone != null ? String(raw.billingPhone) : void 0
	};
	const paymentMethod = decoded.paymentMethod ?? decoded.PaymentMethod;
	const cardLast4 = decoded.cardLast4 ?? decoded.CardLast4;
	const billingEmail = decoded.billingEmail ?? decoded.BillingEmail;
	const billingPhone = decoded.billingPhone ?? decoded.BillingPhone;
	if (paymentMethod != null || cardLast4 != null || billingEmail != null || billingPhone != null) return {
		paymentMethod: paymentMethod != null ? String(paymentMethod) : void 0,
		cardLast4: cardLast4 != null ? String(cardLast4) : void 0,
		billingEmail: billingEmail != null ? String(billingEmail) : void 0,
		billingPhone: billingPhone != null ? String(billingPhone) : void 0
	};
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/auth/src/context/AuthContext.tsx
var AuthContext = createContext(void 0);
function AuthProvider({ children, config, onSessionSaved, onSessionRemoved, onCartClear }) {
	const [storage] = useState(() => createTokenStorage(config.storageKey));
	const [user, setUser] = useState(void 0);
	const [token, setToken] = useState(void 0);
	const [refreshToken, setRefreshToken] = useState(void 0);
	useEffect(() => {
		const storedToken = storage.getToken();
		const storedRefresh = storage.getRefreshToken();
		const storedSession = storage.getSession();
		if (storedToken) {
			setToken(storedToken);
			setRefreshToken(storedRefresh ?? void 0);
			try {
				const authUser = new AuthUser(decodeJwt(storedToken));
				setUser(authUser);
			} catch {
				if (storedSession) try {
					setUser(JSON.parse(storedSession));
				} catch {
					setUser(void 0);
				}
			}
		} else if (storedSession) try {
			setUser(JSON.parse(storedSession));
		} catch {
			setUser(void 0);
		}
		if (storedRefresh) setRefreshToken(storedRefresh);
	}, [storage]);
	const saveSession = useCallback((newToken, newRefreshToken) => {
		if (!newToken) return;
		let authUser;
		try {
			authUser = new AuthUser(decodeJwt(newToken));
		} catch {
			throw new Error("Invalid token");
		}
		if (config.blockedUserTypes.includes(authUser.type)) throw new Error("هذا الحساب غير مخصص لهذا الموقع.");
		if (config.allowedUserTypes.length > 0 && !config.allowedUserTypes.includes(authUser.type)) throw new Error("نوع الحساب غير مسموح به على هذه المنصة.");
		storage.setToken(newToken);
		if (newRefreshToken) storage.setRefreshToken(newRefreshToken);
		storage.setSession(JSON.stringify(authUser));
		setToken(newToken);
		setRefreshToken(newRefreshToken);
		setUser(authUser);
		onSessionSaved?.(authUser);
	}, [
		config,
		storage,
		onSessionSaved
	]);
	const removeSession = useCallback(async () => {
		setUser(void 0);
		setToken(void 0);
		setRefreshToken(void 0);
		onSessionRemoved?.();
		await performCompleteLogout(config.storageKey, onCartClear);
	}, [
		config.storageKey,
		onSessionRemoved,
		onCartClear
	]);
	const getToken = useCallback(() => token, [token]);
	const value = {
		user,
		token,
		refreshToken,
		isAuthenticated: !!user && !!token,
		getToken,
		saveSession,
		removeSession
	};
	return /* @__PURE__ */ jsx(AuthContext.Provider, {
		value,
		children
	});
}
function useAuth() {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
	return ctx;
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/auth/src/platform/configs.ts
function makeOAuthConfig(apiUrl) {
	return {
		google: {
			clientId: "591359109538-efi8t7sg613ugi3v3ks2b6s28m24rf0p.apps.googleusercontent.com",
			redirectUri: `${apiUrl}/v1/auth/google/callback`,
			scope: "openid email profile",
			authUrl: "https://accounts.google.com/o/oauth2/v2/auth"
		},
		facebook: {
			clientId: "217586813774188",
			appId: "217586813774188",
			redirectUri: `${apiUrl}/v1/auth/facebook/callback`,
			scope: "email,public_profile",
			authUrl: "https://www.facebook.com/v18.0/dialog/oauth"
		},
		linkedin: {
			clientId: "78iv9xkcm7u79p",
			redirectUri: `${apiUrl}/v1/auth/linkedin/callback`,
			scope: "r_liteprofile r_emailaddress",
			authUrl: "https://www.linkedin.com/oauth/v2/authorization"
		}
	};
}
var DEFAULT_API_URL = "https://api.our-bride.com";
var BRIDE_OPTION = {
	type: "Bride",
	labelAr: "عروسة",
	labelEn: "Bride",
	labelFr: "Mariée",
	emoji: "👰",
	description: {
		ar: "أنا العروسة وأبحث عن خدمات زفافي",
		en: "I'm the bride planning my wedding"
	}
};
var PROVIDER_OPTION = {
	type: "ProviderUser",
	labelAr: "مزود خدمة",
	labelEn: "Service Provider",
	labelFr: "Prestataire",
	emoji: "🏪",
	description: {
		ar: "أقدم خدمات أو منتجات للزفاف",
		en: "I offer wedding products or services"
	}
};
makeOAuthConfig(DEFAULT_API_URL);
({ ...BRIDE_OPTION }), { ...PROVIDER_OPTION }, makeOAuthConfig(DEFAULT_API_URL);
makeOAuthConfig(DEFAULT_API_URL);
makeOAuthConfig(DEFAULT_API_URL);
makeOAuthConfig(DEFAULT_API_URL);
makeOAuthConfig(DEFAULT_API_URL);
makeOAuthConfig(DEFAULT_API_URL);
makeOAuthConfig(DEFAULT_API_URL);
makeOAuthConfig(DEFAULT_API_URL);
makeOAuthConfig(DEFAULT_API_URL);
var OURSCENT_AUTH_CONFIG$1 = {
	storageKey: "OURSCENT",
	allowedUserTypes: [],
	blockedUserTypes: ["Admin"],
	loginMode: "email",
	registrationMode: "email",
	showUserTypeSelector: false,
	userTypeOptions: [],
	defaultUserType: "Guest",
	requireUsername: false,
	requirePhone: false,
	features: {
		emailVerification: false,
		phoneOtp: false,
		guestAuth: false,
		rememberMe: true,
		deleteAccount: true,
		googleLogin: true,
		facebookLogin: false,
		linkedinLogin: false
	},
	oauthConfig: makeOAuthConfig("https://api.ourscent.com"),
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
			ar: "مرحباً بك في OurScent",
			en: "Welcome to OurScent",
			fr: "Bienvenue sur OurScent"
		},
		registerSubtitle: {
			ar: "انضم إلى مجتمع عشاق العطور",
			en: "Join the fragrance community",
			fr: "Rejoignez la communauté des parfums"
		}
	}
};
makeOAuthConfig(DEFAULT_API_URL);
//#endregion
//#region src/lib/ourinc-auth.ts
var AUTH_API_URL = "https://auth.ourscent.com";
var OURSCENT_AUTH_CONFIG = {
	...OURSCENT_AUTH_CONFIG$1,
	oauthConfig: makeOAuthConfig(AUTH_API_URL)
};
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/platform-config/src/loader.ts
function toKebab(camel) {
	return camel.replace(/([A-Z])/g, (c) => `-${c.toLowerCase()}`);
}
var COLOR_FIELDS = /* @__PURE__ */ new Set([
	"primary",
	"primaryForeground",
	"accent",
	"accentForeground",
	"secondary",
	"secondaryForeground",
	"background",
	"foreground",
	"card",
	"cardForeground",
	"muted",
	"mutedForeground",
	"border",
	"success",
	"warning",
	"destructive",
	"info"
]);
var loadedFonts = /* @__PURE__ */ new Set();
function injectGoogleFont(family) {
	if (!family || family.includes("system-ui") || family.includes(",") || loadedFonts.has(family)) return;
	loadedFonts.add(family);
	const link = document.createElement("link");
	link.rel = "stylesheet";
	link.href = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@400;500;600;700&display=swap`;
	document.head.appendChild(link);
}
function deepMerge(base, ...overrides) {
	const result = { ...base };
	for (const override of overrides) {
		if (!override) continue;
		for (const key of Object.keys(override)) {
			const val = override[key];
			if (val !== void 0 && val !== null) {
				if (typeof val === "object" && !Array.isArray(val)) result[key] = deepMerge(result[key], val);
				else result[key] = val;
			}
		}
	}
	return result;
}
function resolvePlatformType() {
	if (window.__OURINC_BOOTSTRAP__?.platformType) return window.__OURINC_BOOTSTRAP__.platformType;
	return {
		"BASE_URL": "/",
		"DEV": false,
		"MODE": "production",
		"PROD": true,
		"SSR": true,
		"VITE_API_BASE_URL": "",
		"VITE_APP_URL": "https://ourscent.com",
		"VITE_AUTH_API_URL": "https://auth.ourscent.com",
		"VITE_CLARITY_ID": "",
		"VITE_COMMUNITY_API_URL": "https://community.ourscent.com",
		"VITE_GA4_ID": "",
		"VITE_GTM_ID": "",
		"VITE_META_PIXEL_ID": "",
		"VITE_NOTIFICATIONS_API_URL": "https://community.ourscent.com",
		"VITE_PLATFORM_TYPE": "OurScent",
		"VITE_STORE_API_URL": "https://store.ourscent.com",
		"VITE_STORE_PROVIDER_ID": "",
		"VITE_TIKTOK_PIXEL_ID": ""
	}.VITE_PLATFORM_TYPE ?? "OurBride";
}
function applyThemeTokens(tokens) {
	const root = document.documentElement;
	for (const [key, value] of Object.entries(tokens)) {
		if (key === "direction") {
			root.setAttribute("dir", value);
			root.setAttribute("lang", value === "rtl" ? "ar" : "en");
			continue;
		}
		const cssKey = `--ourinc-${toKebab(key)}`;
		const cssValue = COLOR_FIELDS.has(key) ? `hsl(${value})` : value;
		root.style.setProperty(cssKey, cssValue);
	}
	injectGoogleFont(tokens.fontSans);
	injectGoogleFont(tokens.fontDisplay);
}
async function loadStaticDefault(platformType) {
	switch (platformType) {
		case "OurBride": return (await import("./assets/ourbride.config-DX__jA7N.js")).default;
		case "OurBazaar": return (await import("./assets/ourbazaar.config-D4y6Wzg-.js")).default;
		case "OurStore": return (await import("./assets/ourstore.config-CpMkA03Q.js")).default;
		case "OurServices": return (await import("./assets/ourservices.config-M9JEVySP.js")).default;
		case "OurEvents": return (await import("./assets/ourevents.config-CMXUNatX.js")).default;
		case "OurDelivery": return (await import("./assets/ourdelivery.config-YMBGvvlt.js")).default;
		case "OurStorage": return (await import("./assets/ourstorage.config-CxCGopsD.js")).default;
		case "OurAIMarket": return (await import("./assets/ouraimarket.config-rMxmjPgd.js")).default;
		case "OurMarketing": return (await import("./assets/ourmarketing.config-BZcmm17i.js")).default;
		case "OurProviders": return (await import("./assets/ourproviders.config-DT6FLZcA.js")).default;
		case "OurShipping": return (await import("./assets/ourshipping.config-eZUUarg6.js")).default;
		case "OurScent": return (await import("./assets/ourscent.config-CulV27ZM.js")).default;
		default: return (await import("./assets/ourbride.config-DX__jA7N.js")).default;
	}
}
function adaptApiModules(staticModules, apiModules) {
	if (!Array.isArray(apiModules) || apiModules.length === 0) return staticModules;
	const apiMap = /* @__PURE__ */ new Map();
	for (const m of apiModules) if (m && typeof m.id === "string") apiMap.set(m.id, {
		enabled: Boolean(m.enabled),
		requiredTier: typeof m.requiredTier === "string" ? m.requiredTier : void 0
	});
	return staticModules.map((mod) => {
		const api = apiMap.get(mod.id);
		if (!api) return mod;
		return {
			...mod,
			enabled: api.enabled,
			...api.requiredTier ? { requiredTier: api.requiredTier } : {}
		};
	});
}
function adaptApiScreens(staticScreens, apiScreens) {
	if (!Array.isArray(apiScreens) || apiScreens.length === 0) return staticScreens;
	const apiMap = /* @__PURE__ */ new Map();
	for (const s of apiScreens) if (s && typeof s.route === "string") apiMap.set(s.route, {
		enabled: Boolean(s.enabled),
		requiresAuth: typeof s.requiresAuth === "string" ? s.requiresAuth : void 0,
		redirectWhenOff: typeof s.redirectWhenOff === "string" ? s.redirectWhenOff : void 0
	});
	return staticScreens.map((screen) => {
		const api = apiMap.get(screen.route);
		if (!api) return screen;
		return {
			...screen,
			enabled: api.enabled,
			...api.requiresAuth ? { requiresAuth: api.requiresAuth } : {},
			...api.redirectWhenOff ? { redirectWhenOff: api.redirectWhenOff } : {}
		};
	});
}
function adaptApiConfig(staticDefault, raw) {
	if (!raw || typeof raw !== "object") return {};
	const api = raw;
	const payload = api.data && typeof api.data === "object" ? api.data : api;
	const result = {};
	if (payload.theme && typeof payload.theme === "object") result.theme = payload.theme;
	if (Array.isArray(payload.modules)) result.modules = adaptApiModules(staticDefault.modules, payload.modules);
	if (Array.isArray(payload.screens)) result.screens = adaptApiScreens(staticDefault.screens, payload.screens);
	if (payload.community) result.community = payload.community;
	if (payload.auth) result.auth = payload.auth;
	if (payload.analytics) result.analytics = payload.analytics;
	if (payload.i18nOverrides && typeof payload.i18nOverrides === "object") result.i18nOverrides = payload.i18nOverrides;
	if (payload.push && typeof payload.push === "object") result.push = payload.push;
	if (typeof payload.tenantId === "string") result.tenantId = payload.tenantId;
	if (typeof payload.cacheTtl === "number") result.cacheTtl = payload.cacheTtl;
	return result;
}
async function loadPlatformConfig() {
	const bootstrap = window.__OURINC_BOOTSTRAP__;
	const platformType = resolvePlatformType();
	const staticDefault = await loadStaticDefault(platformType);
	let liveConfig;
	try {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => controller.abort(), 4e3);
		const res = await fetch(`/api/v1/platform-config?platform=${platformType}`, {
			signal: controller.signal,
			headers: { Accept: "application/json" }
		});
		clearTimeout(timeoutId);
		if (res.ok) liveConfig = adaptApiConfig(staticDefault, await res.json());
	} catch {}
	const themeOverride = bootstrap?.themeOverride ? { theme: bootstrap.themeOverride } : void 0;
	return deepMerge(staticDefault, liveConfig, themeOverride);
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/platform-config/src/adapter.ts
function createPlatformAdapter(opts = {}) {
	const { cacheTtl = 3e5, onConfigLoaded, onLoadError } = opts;
	let cached = null;
	let cachedAt = 0;
	let inflightPromise = null;
	const listeners = /* @__PURE__ */ new Set();
	function notify(config) {
		for (const listener of listeners) listener(config);
	}
	async function fetchConfig() {
		const config = await loadPlatformConfig();
		cached = config;
		cachedAt = Date.now();
		inflightPromise = null;
		onConfigLoaded?.(config);
		notify(config);
		return config;
	}
	return {
		getConfig() {
			return cached;
		},
		load() {
			if (cached && Date.now() - cachedAt < cacheTtl) return Promise.resolve(cached);
			if (inflightPromise) return inflightPromise;
			inflightPromise = fetchConfig().catch((err) => {
				inflightPromise = null;
				onLoadError?.(err);
				if (cached) return cached;
				throw err;
			});
			return inflightPromise;
		},
		reload() {
			cachedAt = 0;
			inflightPromise = null;
			inflightPromise = fetchConfig().catch((err) => {
				inflightPromise = null;
				onLoadError?.(err);
				if (cached) return cached;
				throw err;
			});
			return inflightPromise;
		},
		isModuleEnabled(moduleId) {
			if (!cached) return false;
			return cached.modules.some((m) => m.id === moduleId && m.enabled);
		},
		getModule(moduleId) {
			return cached?.modules.find((m) => m.id === moduleId);
		},
		getScreen(route) {
			return cached?.screens.find((s) => s.route === route);
		},
		getTheme() {
			return cached?.theme ?? {};
		},
		getI18nOverrides(locale) {
			if (!cached?.i18nOverrides) return {};
			const lang = locale.split("-")[0];
			return cached.i18nOverrides[lang] ?? {};
		},
		subscribe(listener) {
			listeners.add(listener);
			if (cached) listener(cached);
			return () => {
				listeners.delete(listener);
			};
		}
	};
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/platform-config/src/context/PlatformConfigContext.tsx
var PlatformConfigContext = createContext(null);
function PlatformConfigProvider({ children, platformType, adapterOpts, applyTheme = true }) {
	const adapter = useMemo(() => createPlatformAdapter({
		...adapterOpts,
		platformType
	}), [platformType]);
	const [config, setConfig] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	useEffect(() => {
		let cancelled = false;
		adapter.load().then((cfg) => {
			if (cancelled) return;
			setConfig(cfg);
			setIsLoading(false);
			if (applyTheme) applyThemeTokens(cfg.theme);
		}).catch((err) => {
			if (cancelled) return;
			setError(err);
			setIsLoading(false);
		});
		const unsub = adapter.subscribe((cfg) => {
			if (cancelled) return;
			setConfig(cfg);
			if (applyTheme) applyThemeTokens(cfg.theme);
		});
		return () => {
			cancelled = true;
			unsub();
		};
	}, [adapter, applyTheme]);
	const value = useMemo(() => ({
		config,
		isLoading,
		error,
		reload: async () => {
			setIsLoading(true);
			setError(null);
			try {
				const cfg = await adapter.reload();
				setConfig(cfg);
				if (applyTheme) applyThemeTokens(cfg.theme);
			} catch (err) {
				setError(err);
			} finally {
				setIsLoading(false);
			}
		},
		isModuleEnabled: (id) => adapter.isModuleEnabled(id),
		getModule: (id) => adapter.getModule(id),
		getScreen: (route) => adapter.getScreen(route),
		getTheme: () => adapter.getTheme(),
		getI18nOverrides: (locale) => adapter.getI18nOverrides(locale)
	}), [
		config,
		isLoading,
		error,
		adapter,
		applyTheme
	]);
	return /* @__PURE__ */ jsx(PlatformConfigContext.Provider, {
		value,
		children
	});
}
//#endregion
//#region src/context/communityContextValue.ts
var CommunityContext = createContext({
	activeTab: "community",
	setActiveTab: () => {},
	searchQuery: "",
	setSearchQuery: () => {},
	selectedContentType: null,
	setSelectedContentType: () => {},
	likeCache: {},
	setLiked: () => {}
});
//#endregion
//#region src/context/CommunityContext.tsx
function CommunityProvider({ children }) {
	const [activeTab, setActiveTab] = useState("community");
	const [searchQuery, setSearchQuery] = useState("");
	const [selectedContentType, setSelectedContentType] = useState(null);
	const [likeCache, setLikeCache] = useState({});
	const setLiked = useCallback((key, liked) => {
		setLikeCache((prev) => ({
			...prev,
			[key]: liked
		}));
	}, []);
	return /* @__PURE__ */ jsx(CommunityContext.Provider, {
		value: {
			activeTab,
			setActiveTab,
			searchQuery,
			setSearchQuery,
			selectedContentType,
			setSelectedContentType,
			likeCache,
			setLiked
		},
		children
	});
}
//#endregion
//#region src/context/storeCartContext.ts
var StoreCartContext = createContext(null);
/**
* Shared cart state. The cart must live in exactly one place: mounting
* useStoreCartWithApi per screen gives each consumer its own copy, so the navbar
* badge would not react to an add on the shop page, and every mount refetches.
*/
function useStoreCart() {
	const ctx = useContext(StoreCartContext);
	if (!ctx) throw new Error("useStoreCart must be used within <StoreCartProvider>");
	return ctx;
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/http-client/src/token-store.ts
function readCookie$1(name) {
	if (typeof document === "undefined") return null;
	const match = document.cookie.split("; ").find((row) => row.startsWith(`${name}=`));
	return match ? decodeURIComponent(match.split("=")[1]) : null;
}
function writeCookie$1(name, value, maxAge) {
	if (typeof document === "undefined") return;
	document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${maxAge}; secure; samesite=strict`;
}
function deleteCookie$2(name) {
	if (typeof document === "undefined") return;
	document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}
/**
* Reads/writes auth tokens from localStorage (primary) and cookies (fallback).
* Key names follow the pattern: `_${STORAGEKEY}_AUTH_TOKEN`
*/
function createTokenStore(storageKey) {
	const tokenKey = `_${storageKey}_AUTH_TOKEN`;
	const refreshKey = `_${storageKey}_AUTH_REFRESH_TOKEN`;
	return {
		getToken() {
			if (typeof window === "undefined") return null;
			return localStorage.getItem(tokenKey) ?? readCookie$1(tokenKey);
		},
		getRefreshToken() {
			if (typeof window === "undefined") return null;
			return localStorage.getItem(refreshKey) ?? readCookie$1(refreshKey);
		},
		setToken(token) {
			if (typeof window === "undefined") return;
			localStorage.setItem(tokenKey, token);
			writeCookie$1(tokenKey, token, 3600);
		},
		setRefreshToken(token) {
			if (typeof window === "undefined") return;
			localStorage.setItem(refreshKey, token);
			writeCookie$1(refreshKey, token, 86400);
		},
		clear() {
			if (typeof window === "undefined") return;
			localStorage.removeItem(tokenKey);
			localStorage.removeItem(refreshKey);
			deleteCookie$2(tokenKey);
			deleteCookie$2(refreshKey);
		}
	};
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/http-client/src/event-emitter.ts
var EventEmitter = class {
	constructor() {
		this.map = /* @__PURE__ */ new Map();
	}
	on(event, cb) {
		const list = this.map.get(event) ?? [];
		list.push(cb);
		this.map.set(event, list);
		return () => this.off(event, cb);
	}
	off(event, cb) {
		const list = this.map.get(event);
		if (!list) return;
		const idx = list.indexOf(cb);
		if (idx !== -1) list.splice(idx, 1);
	}
	emit(event, payload) {
		this.map.get(event)?.forEach((cb) => cb(payload));
	}
};
/** Singleton emitter — apps subscribe to `ourinc:auth-required` here */
var httpEventEmitter = new EventEmitter();
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/http-client/src/types.ts
var HTTP_AUTH_REQUIRED_EVENT = "ourinc:auth-required";
var HTTP_TOKEN_REFRESHED_EVENT = "ourinc:token-refreshed";
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/http-client/src/HttpClient.ts
var DEFAULT_DEDUP = {
	enabled: true,
	timeout: 5e3
};
var DEFAULT_CACHE = {
	enabled: true,
	maxAge: 3e5,
	maxSize: 100,
	excludePaths: ["/auth", "/user/profile"]
};
var DEFAULT_RETRY = {
	enabled: true,
	maxRetries: 3,
	retryDelay: 1e3,
	retryStatusCodes: [
		408,
		429,
		500,
		502,
		503,
		504
	]
};
var HttpClient = class HttpClient {
	static {
		this.pendingRequests = /* @__PURE__ */ new Map();
	}
	static {
		this.responseCache = /* @__PURE__ */ new Map();
	}
	static {
		this.cleanupTimer = null;
	}
	static {
		this.instanceCount = 0;
	}
	constructor(config) {
		this.isRefreshing = false;
		this.refreshQueue = [];
		this.cfg = {
			baseURL: config.baseURL,
			storageKey: config.storageKey,
			timeout: config.timeout ?? 3e4,
			platformHeaders: config.platformHeaders ?? {},
			authFreePaths: config.authFreePaths ?? ["/identity/guest-login", "/identity/refresh"],
			guestFallbackPaths: config.guestFallbackPaths ?? [],
			deduplication: {
				...DEFAULT_DEDUP,
				...config.deduplication ?? {}
			},
			cache: {
				...DEFAULT_CACHE,
				...config.cache ?? {}
			},
			retry: {
				...DEFAULT_RETRY,
				...config.retry ?? {}
			}
		};
		this.tokens = createTokenStore(config.storageKey);
		this.instance = axios.create({
			baseURL: config.baseURL,
			timeout: this.cfg.timeout,
			headers: { "Content-Type": "application/json" }
		});
		this.setupInterceptors();
		HttpClient.instanceCount++;
		if (HttpClient.instanceCount === 1) this.startCleanup();
		if (typeof window !== "undefined") window.addEventListener("beforeunload", () => this.destroy());
	}
	async get(url, config) {
		return this.request({
			method: "GET",
			url,
			...config
		});
	}
	async post(url, data, config) {
		return this.request({
			method: "POST",
			url,
			data,
			...config
		});
	}
	async put(url, data, config) {
		return this.request({
			method: "PUT",
			url,
			data,
			...config
		});
	}
	async patch(url, data, config) {
		return this.request({
			method: "PATCH",
			url,
			data,
			...config
		});
	}
	async delete(url, config) {
		return this.request({
			method: "DELETE",
			url,
			...config
		});
	}
	updateToken(token) {
		if (token) this.tokens.setToken(token);
		else this.tokens.clear();
	}
	getTokenStore() {
		return this.tokens;
	}
	triggerAuthRequired(reason = "unauthorized") {
		httpEventEmitter.emit(HTTP_AUTH_REQUIRED_EVENT, { reason });
	}
	clearCache() {
		HttpClient.responseCache.clear();
	}
	getCacheStats() {
		return {
			size: HttpClient.responseCache.size,
			maxSize: this.cfg.cache.maxSize,
			entries: Array.from(HttpClient.responseCache.entries()).map(([k, v]) => ({
				key: k,
				ageMs: Date.now() - v.timestamp
			}))
		};
	}
	getPendingCount() {
		return HttpClient.pendingRequests.size;
	}
	destroy() {
		HttpClient.instanceCount--;
		if (HttpClient.instanceCount <= 0) {
			HttpClient.instanceCount = 0;
			if (HttpClient.cleanupTimer) {
				clearInterval(HttpClient.cleanupTimer);
				HttpClient.cleanupTimer = null;
			}
			for (const c of HttpClient.pendingRequests.values()) c.abort();
			HttpClient.pendingRequests.clear();
			HttpClient.responseCache.clear();
		}
	}
	async request(options) {
		const { skipCache = false, skipDedup = false, ...axiosOpts } = options;
		const method = (axiosOpts.method ?? "GET").toUpperCase();
		const isRead = method === "GET" || method === "HEAD";
		const url = axiosOpts.url ?? "";
		const cacheKey = isRead ? `${url}${JSON.stringify(axiosOpts.params ?? "")}${JSON.stringify(axiosOpts.data ?? "")}` : null;
		if (isRead && !skipCache && cacheKey && this.cfg.cache.enabled) {
			const entry = HttpClient.responseCache.get(cacheKey);
			if (entry && Date.now() - entry.timestamp < this.cfg.cache.maxAge) return entry.data;
		}
		if (isRead && !skipDedup && cacheKey && this.cfg.deduplication.enabled) {
			if (HttpClient.pendingRequests.has(cacheKey)) return new Promise((_, reject) => {
				HttpClient.pendingRequests.get(cacheKey).signal.addEventListener("abort", () => reject(/* @__PURE__ */ new Error("Deduplicated request aborted")));
			});
		}
		const controller = new AbortController();
		if (isRead && cacheKey && this.cfg.deduplication.enabled) HttpClient.pendingRequests.set(cacheKey, controller);
		try {
			const res = await this.instance.request({
				...axiosOpts,
				signal: controller.signal
			});
			if (isRead && !skipCache && cacheKey && this.cfg.cache.enabled && res.status === 200) {
				if (!this.cfg.cache.excludePaths.some((p) => url.includes(p))) {
					if (HttpClient.responseCache.size >= this.cfg.cache.maxSize) {
						const oldest = Array.from(HttpClient.responseCache.entries()).sort((a, b) => a[1].timestamp - b[1].timestamp)[0][0];
						HttpClient.responseCache.delete(oldest);
					}
					HttpClient.responseCache.set(cacheKey, {
						data: res.data,
						timestamp: Date.now()
					});
				}
			}
			return res.data;
		} finally {
			if (cacheKey) HttpClient.pendingRequests.delete(cacheKey);
		}
	}
	setupInterceptors() {
		this.instance.interceptors.request.use((config) => {
			if (!this.cfg.authFreePaths.some((p) => config.url?.includes(p))) {
				const token = this.tokens.getToken();
				if (token) config.headers.Authorization = `Bearer ${token}`;
			}
			const ph = this.cfg.platformHeaders;
			if (ph.platformName) config.headers["X-Platform-Name"] = ph.platformName;
			if (ph.platformChannel) config.headers["X-Platform-Channel"] = ph.platformChannel;
			if (ph.platformVersion) config.headers["X-Platform-Version"] = ph.platformVersion;
			if (ph.providerId) config.headers["X-Provider-Id"] = ph.providerId;
			if (typeof window !== "undefined") {
				config.headers["Accept-Language"] = localStorage.getItem("_locale_lang") ?? "ar";
				config.headers["X-Country"] = localStorage.getItem("_locale_country") ?? "EG";
				config.headers["X-Currency"] = localStorage.getItem("_locale_currency") ?? "EGP";
			}
			return config;
		});
		this.instance.interceptors.response.use((res) => res, async (err) => {
			const orig = err.config;
			if (err.response?.status === 401 && !orig._retry) {
				const url = orig.url ?? "";
				if (url.includes("/identity/refresh") || url.includes("/identity/guest-login")) {
					this.emitAuthRequired("refresh-failed", url);
					return Promise.reject(err);
				}
				if (this.isRefreshing) return new Promise((resolve, reject) => {
					this.refreshQueue.push({
						resolve: (token) => {
							orig._retry = true;
							orig.headers = {
								...orig.headers,
								Authorization: `Bearer ${token}`
							};
							resolve(this.instance(orig));
						},
						reject
					});
				});
				const refreshToken = this.tokens.getRefreshToken();
				if (!refreshToken) {
					this.emitAuthRequired("no-token", url);
					return Promise.reject(err);
				}
				orig._retry = true;
				this.isRefreshing = true;
				try {
					const { token, refreshToken: newRefresh } = (await this.instance.post("/api/v1/identity/refresh", { refreshToken })).data;
					this.tokens.setToken(token);
					if (newRefresh) this.tokens.setRefreshToken(newRefresh);
					httpEventEmitter.emit(HTTP_TOKEN_REFRESHED_EVENT, { token });
					orig.headers = {
						...orig.headers,
						Authorization: `Bearer ${token}`
					};
					this.flushQueue(null, token);
					return this.instance(orig);
				} catch (refreshErr) {
					this.flushQueue(refreshErr, null);
					this.tokens.clear();
					this.emitAuthRequired("refresh-failed", url);
					return Promise.reject(err);
				} finally {
					this.isRefreshing = false;
				}
			}
			if (this.cfg.retry.enabled && err.response?.status && err.response.status !== 401 && this.cfg.retry.retryStatusCodes.includes(err.response.status)) {
				const retryCount = (orig._retryCount ?? 0) + 1;
				orig._retryCount = retryCount;
				if (retryCount <= this.cfg.retry.maxRetries) {
					await delay(this.cfg.retry.retryDelay * retryCount);
					return this.instance(orig);
				}
			}
			return Promise.reject(err);
		});
	}
	flushQueue(err, token) {
		this.refreshQueue.forEach(({ resolve, reject }) => {
			if (err || !token) reject(err);
			else resolve(token);
		});
		this.refreshQueue = [];
	}
	emitAuthRequired(reason, url) {
		this.tokens.clear();
		httpEventEmitter.emit(HTTP_AUTH_REQUIRED_EVENT, {
			reason,
			url
		});
	}
	startCleanup() {
		HttpClient.cleanupTimer = setInterval(() => {
			const now = Date.now();
			for (const [k, v] of HttpClient.responseCache.entries()) if (now - v.timestamp > this.cfg.cache.maxAge) HttpClient.responseCache.delete(k);
			for (const [k, c] of HttpClient.pendingRequests.entries()) if (now - (c.timestamp ?? 0) > this.cfg.deduplication.timeout) {
				c.abort();
				HttpClient.pendingRequests.delete(k);
			}
		}, 6e4);
	}
};
function delay(ms) {
	return new Promise((res) => setTimeout(res, ms));
}
//#endregion
//#region src/api/storeClient.ts
var storeHttpClient = new HttpClient({
	baseURL: "https://store.ourscent.com",
	storageKey: "OURSCENT",
	authFreePaths: [
		"/identity/login",
		"/identity/register",
		"/identity/guest-login",
		"/identity/refresh",
		"/identity/phonelogin",
		"/identity/phoneregister"
	],
	cache: { excludePaths: [
		"/identity",
		"/profile",
		"/auth"
	] }
});
storeHttpClient.instance.interceptors.request.use((config) => {
	config.headers["X-Platform-Name"] = "ourscent";
	config.headers["X-Platform-Channel"] = "web";
	config.headers["X-Platform-Version"] = "1.0.0";
	if (typeof window !== "undefined") config.headers["Accept-Language"] = localStorage.getItem("i18nextLng") ?? "ar";
	return config;
});
var storeApiClient = storeHttpClient.instance;
function unwrap(response) {
	const body = response.data;
	if (body && typeof body === "object" && "data" in body) return body.data;
	return body;
}
//#endregion
//#region src/api/purchaseService.ts
async function getCartByProvider(providerId) {
	return unwrap(await storeApiClient.get(`/purchases/cart/provider/${providerId}`));
}
async function addPurchase(providerId, payload) {
	return unwrap(await storeApiClient.post("/purchases", payload, { params: { providerId } }));
}
async function updatePurchase(providerId, purchaseId, payload) {
	return unwrap(await storeApiClient.put(`/purchases/${purchaseId}`, payload, { params: { providerId } }));
}
async function removePurchase(providerId, purchaseId) {
	return unwrap(await storeApiClient.delete(`/purchases/${purchaseId}`, { params: { providerId } }));
}
async function clearCartByProvider(providerId) {
	return unwrap(await storeApiClient.delete(`/purchases/cart/provider/${providerId}/clear`));
}
async function validateCoupon(providerId, couponCode) {
	return unwrap(await storeApiClient.post(`/purchases/coupon/${encodeURIComponent(couponCode)}/validate`, {}, { params: { providerId } }));
}
async function applyCouponToCart(providerId, couponCode) {
	await validateCoupon(providerId, couponCode);
	return getCartByProvider(providerId);
}
async function checkout(providerId, data) {
	return unwrap(await storeApiClient.post("/purchases/checkout", data, { params: { providerId } }));
}
async function createOrderForGuest(providerId, data, deviceId) {
	return unwrap(await storeApiClient.post("/purchases/walk-in/create-order", data, {
		params: { providerId },
		headers: { "X-Device-Id": deviceId }
	}));
}
async function getOrCreateProviderProductWishlist(providerId) {
	const data = unwrap(await storeApiClient.get(`/wishlists/for-provider/${providerId}`));
	const list = Array.isArray(data) ? data : data?.items ?? [];
	const isProductList = (v) => v?.toLowerCase() === "product";
	const productWishlist = list.find((w) => isProductList(w.type) || isProductList(w.wishlistType));
	if (productWishlist) return productWishlist;
	return unwrap(await storeApiClient.post("/wishlists", {
		providerId,
		type: "product",
		wishlistType: "product"
	}));
}
async function getStoreWishlistProductIds(wishlistId) {
	const data = unwrap(await storeApiClient.get(`/storewishlists/${wishlistId}/products`));
	return (Array.isArray(data) ? data : data?.items ?? []).map((i) => i.productId ?? i.id ?? 0).filter(Number.isFinite);
}
async function addProductToWishlist(wishlistId, productId, name) {
	return unwrap(await storeApiClient.post(`/storewishlists/${wishlistId}/products`, {
		productId,
		name
	}));
}
async function removeProductFromStoreWishlist(wishlistId, productId) {
	return unwrap(await storeApiClient.delete(`/storewishlists/${wishlistId}/products/${productId}`));
}
function purchaseToCartItem(p) {
	const id = typeof p.productId === "number" ? p.productId : typeof p.product_id === "number" ? p.product_id : typeof p.productID === "number" ? p.productID : typeof p.id === "number" ? p.id : 0;
	const unitPrice = p.unitPrice ?? (p.totalPrice && p.quantity ? p.totalPrice / p.quantity : void 0) ?? p.price ?? 0;
	return {
		id,
		productId: id,
		purchaseId: typeof p.purchaseId === "number" ? p.purchaseId : typeof p.id === "number" ? p.id : void 0,
		nameEn: p.nameEn,
		nameAr: p.nameAr,
		price: unitPrice,
		discountedPrice: void 0,
		imageUrl: p.imageUrl ?? p.image,
		quantity: p.quantity ?? 1
	};
}
function extractPriceCalculation(cart) {
	const keys = [
		"subtotal",
		"tax",
		"shippingCost",
		"discount",
		"total",
		"depositAmount",
		"depositPaid",
		"depositRemaining",
		"membershipDiscount",
		"membershipCreditUsed",
		"giftCardAmount",
		"walletAmount",
		"couponDiscount",
		"cashCardAmount",
		"couponCode",
		"appliedGiftCardCodes"
	];
	const calc = {};
	let hasAny = false;
	for (const k of keys) {
		const v = cart[k];
		if (v != null) {
			calc[k] = v;
			hasAny = true;
		}
	}
	return hasAny ? calc : null;
}
//#endregion
//#region src/hooks/useStoreCartWithApi.ts
function useStoreCartWithApi(providerId) {
	const [cartItems, setCartItems] = useState([]);
	const [wishlistItems, setWishlistItems] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);
	const [cartCount, setCartCount] = useState(0);
	const [cartId, setCartId] = useState(null);
	const [cartPriceCalculation, setCartPriceCalculation] = useState(null);
	const [cartLoading, setCartLoading] = useState(false);
	const [wishlistLoading, setWishlistLoading] = useState(false);
	const [cartError, setCartError] = useState(null);
	const [isApplyingCoupon, setIsApplyingCoupon] = useState(false);
	const [updatingProductId, setUpdatingProductId] = useState(null);
	const wishlistIdRef = useRef(null);
	const addingProductsRef = useRef(/* @__PURE__ */ new Set());
	const fetchCart = useCallback(async () => {
		if (!providerId) return;
		try {
			setCartLoading(true);
			setCartError(null);
			const cart = await getCartByProvider(providerId);
			const items = (cart.purchases ?? cart.items ?? []).map(purchaseToCartItem);
			setCartItems(items);
			setCartId(cart.cartId ?? cart.id ?? null);
			const calc = extractPriceCalculation(cart);
			setCartPriceCalculation(calc);
			const total = items.reduce((s, i) => s + (i.discountedPrice || i.price) * i.quantity, 0);
			setCartTotal(calc?.total ?? total);
			setCartCount(items.reduce((s, i) => s + i.quantity, 0));
		} catch (err) {
			setCartError(err?.message ?? "Failed to load cart");
		} finally {
			setCartLoading(false);
		}
	}, [providerId]);
	const fetchWishlist = useCallback(async () => {
		if (!providerId) return;
		try {
			setWishlistLoading(true);
			let wishlist = null;
			try {
				wishlist = await getOrCreateProviderProductWishlist(providerId);
			} catch {}
			if (!wishlist?.id) return;
			wishlistIdRef.current = wishlist.id;
			const ids = await getStoreWishlistProductIds(wishlist.id);
			setWishlistItems(ids.map((id) => ({
				id,
				price: 0
			})));
		} catch {} finally {
			setWishlistLoading(false);
		}
	}, [providerId]);
	useEffect(() => {
		if (!providerId) return;
		fetchCart();
		fetchWishlist();
	}, [
		providerId,
		fetchCart,
		fetchWishlist
	]);
	const addToCart = useCallback(async (product) => {
		if (!providerId) return;
		const productId = product.productId ?? product.id;
		if (addingProductsRef.current.has(product.id)) return;
		addingProductsRef.current.add(product.id);
		setUpdatingProductId(product.id);
		try {
			const price = product.discountedPrice ?? product.price;
			await addPurchase(providerId, {
				productId,
				quantity: 1,
				price,
				totalPrice: price
			});
			await fetchCart();
		} catch (err) {
			toast.error(err?.message ?? "Failed to add to cart");
		} finally {
			addingProductsRef.current.delete(product.id);
			setUpdatingProductId(null);
		}
	}, [providerId, fetchCart]);
	const removeFromCart = useCallback(async (id) => {
		if (!providerId) return;
		const purchaseId = cartItems.find((i) => i.id === id)?.purchaseId;
		if (!purchaseId) return;
		setUpdatingProductId(id);
		try {
			await removePurchase(providerId, purchaseId);
			await fetchCart();
		} catch (err) {
			toast.error(err?.message ?? "Failed to remove item");
		} finally {
			setUpdatingProductId(null);
		}
	}, [
		providerId,
		cartItems,
		fetchCart
	]);
	return {
		cartItems,
		wishlistItems,
		cartTotal,
		cartCount,
		cartId,
		cartPriceCalculation,
		isApplyingCoupon,
		cartLoading,
		wishlistLoading,
		cartError,
		updatingProductId,
		addToCart,
		removeFromCart,
		updateQuantity: useCallback(async (id, quantity) => {
			if (!providerId) return;
			if (quantity <= 0) {
				await removeFromCart(id);
				return;
			}
			const item = cartItems.find((i) => i.id === id);
			const purchaseId = item?.purchaseId;
			if (!purchaseId || !item) return;
			setUpdatingProductId(id);
			try {
				const price = item.discountedPrice ?? item.price;
				await updatePurchase(providerId, purchaseId, {
					quantity,
					price,
					totalPrice: price * quantity
				});
				await fetchCart();
			} catch (err) {
				toast.error(err?.message ?? "Failed to update quantity");
			} finally {
				setUpdatingProductId(null);
			}
		}, [
			providerId,
			cartItems,
			fetchCart,
			removeFromCart
		]),
		clearCart: useCallback(async () => {
			if (!providerId) return;
			try {
				await clearCartByProvider(providerId);
				setCartItems([]);
				setCartTotal(0);
				setCartCount(0);
				setCartPriceCalculation(null);
			} catch (err) {
				toast.error(err?.message ?? "Failed to clear cart");
			}
		}, [providerId]),
		toggleWishlist: useCallback(async (product) => {
			if (!wishlistIdRef.current) return;
			const wishlistId = wishlistIdRef.current;
			const isIn = wishlistItems.some((i) => i.id === product.id);
			try {
				if (isIn) {
					await removeProductFromStoreWishlist(wishlistId, product.productId ?? product.id);
					setWishlistItems((prev) => prev.filter((i) => i.id !== product.id));
				} else {
					await addProductToWishlist(wishlistId, product.productId ?? product.id, product.nameEn ?? "");
					setWishlistItems((prev) => [...prev, {
						id: product.id,
						nameEn: product.nameEn,
						nameAr: product.nameAr,
						price: product.price,
						discountedPrice: product.discountedPrice,
						imageUrl: product.imageUrl
					}]);
				}
			} catch (err) {
				toast.error(err?.message ?? "Failed to update wishlist");
			}
		}, [wishlistItems]),
		removeFromWishlist: useCallback(async (id) => {
			if (!wishlistIdRef.current) return;
			try {
				await removeProductFromStoreWishlist(wishlistIdRef.current, id);
				setWishlistItems((prev) => prev.filter((i) => i.id !== id));
			} catch (err) {
				toast.error(err?.message ?? "Failed to remove from wishlist");
			}
		}, []),
		isInWishlist: useCallback((id) => wishlistItems.some((i) => i.id === id), [wishlistItems]),
		applyCoupon: useCallback(async (code) => {
			if (!providerId) return;
			setIsApplyingCoupon(true);
			try {
				const cart = await applyCouponToCart(providerId, code);
				const raw = cart.purchases ?? cart.items ?? [];
				setCartItems(raw.map(purchaseToCartItem));
				setCartPriceCalculation(extractPriceCalculation(cart));
				toast.success("Coupon applied!");
			} catch (err) {
				toast.error(err?.message ?? "Invalid coupon code");
				throw err;
			} finally {
				setIsApplyingCoupon(false);
			}
		}, [providerId]),
		refetchCart: fetchCart
	};
}
//#endregion
//#region src/lib/storeConfig.ts
/**
* Storefront configuration.
*
* The cart/checkout API is provider-scoped: every purchase, wishlist and order
* call needs the marketplace providerId that owns the catalogue. There is no
* sensible default — a wrong id would read another tenant's products — so the
* storefront stays switched off until VITE_STORE_PROVIDER_ID is set, and the
* shop/cart routes and nav entries are hidden while it is unset.
*/
var raw = "";
function parseProviderId(value) {
	if (typeof value !== "string" || value.trim() === "") return null;
	const id = Number.parseInt(value, 10);
	return Number.isFinite(id) && id > 0 ? id : null;
}
var STORE_PROVIDER_ID = parseProviderId(raw);
var isStoreEnabled = STORE_PROVIDER_ID !== null;
//#endregion
//#region src/context/StoreCartProvider.tsx
function StoreCartProvider({ children }) {
	const cart = useStoreCartWithApi(isStoreEnabled ? STORE_PROVIDER_ID : null);
	return /* @__PURE__ */ jsx(StoreCartContext.Provider, {
		value: cart,
		children
	});
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/analytics/src/core/Throttler.ts
var THROTTLE_MS = {
	page_view: 2e3,
	view_item: 2e3,
	view_item_list: 3e3,
	select_item: 1e3,
	add_to_cart: 1e3,
	remove_from_cart: 1e3,
	view_cart: 5e3,
	search: 2e3,
	scroll: 5e3,
	video_play: 3e3,
	purchase: 0,
	sign_up: 0,
	generate_lead: 0,
	whatsapp_click: 0,
	form_submit: 0
};
var Throttler = class {
	constructor() {
		this.lastFired = /* @__PURE__ */ new Map();
	}
	/** Returns true if the event should be allowed through, false if throttled. */
	allow(event, key = event) {
		const window = THROTTLE_MS[event] ?? 1e3;
		if (window === 0) return true;
		const last = this.lastFired.get(key) ?? 0;
		const now = Date.now();
		if (now - last < window) return false;
		this.lastFired.set(key, now);
		return true;
	}
	reset(key) {
		if (key) this.lastFired.delete(key);
		else this.lastFired.clear();
	}
};
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/analytics/src/core/AnalyticsManager.ts
var AnalyticsManager = class {
	constructor({ config, platform: _platform, debug = false }) {
		this.adapters = [];
		this.throttler = new Throttler();
		this.initialized = false;
		this.config = config;
		this.debug = debug ?? config.debug ?? false;
	}
	register(adapter) {
		this.adapters.push(adapter);
		return this;
	}
	init() {
		if (this.initialized) return;
		this.initialized = true;
		for (const adapter of this.adapters) try {
			adapter.init();
			this.log(`[${adapter.name}] initialized`);
		} catch (err) {
			this.warn(`[${adapter.name}] init failed`, err);
		}
	}
	track(event, payload, throttleKey) {
		if (!this.initialized) return;
		if (!this.throttler.allow(event, throttleKey ?? event)) {
			this.log(`[throttled] ${event}`);
			return;
		}
		this.log(`[track] ${event}`, payload);
		for (const adapter of this.adapters) try {
			adapter.trackEvent(event, payload, this.config);
		} catch (err) {
			this.warn(`[${adapter.name}] trackEvent failed for ${event}`, err);
		}
	}
	identify(pii) {
		for (const adapter of this.adapters) try {
			adapter.identify?.(pii);
		} catch (err) {
			this.warn(`[${adapter.name}] identify failed`, err);
		}
	}
	destroy() {
		for (const adapter of this.adapters) try {
			adapter.destroy?.();
		} catch {}
		this.adapters.length = 0;
		this.initialized = false;
	}
	log(...args) {
		if (this.debug) console.debug("[analytics]", ...args);
	}
	warn(...args) {
		if (this.debug) console.warn("[analytics]", ...args);
	}
};
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/analytics/src/scripts/gtm.ts
function createGtmAdapter(gtmId) {
	return {
		name: "GTM",
		init() {
			if (!gtmId || typeof window === "undefined") return;
			window.dataLayer = window.dataLayer ?? [];
			const load = () => {
				const script = document.createElement("script");
				script.async = true;
				script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
				document.head.appendChild(script);
				const ns = document.createElement("noscript");
				ns.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`;
				document.body?.prepend(ns);
			};
			if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => setTimeout(load, 2e3), { once: true });
			else setTimeout(load, 2e3);
		},
		trackEvent(event, payload, config) {
			if (typeof window === "undefined") return;
			window.dataLayer = window.dataLayer ?? [];
			window.dataLayer.push({
				event,
				...payload,
				platform: config.country
			});
		}
	};
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/analytics/src/core/EventQueue.ts
var EventQueue = class {
	constructor(flushFn, flushIntervalMs = 5e3, maxSize = 10) {
		this.queue = [];
		this.timer = null;
		this.flushFn = flushFn;
		this.flushIntervalMs = flushIntervalMs;
		this.maxSize = maxSize;
	}
	push(name, payload) {
		this.queue.push({
			name,
			payload,
			timestamp: Date.now()
		});
		if (this.queue.length >= this.maxSize) {
			this.flush();
			return;
		}
		if (!this.timer) this.timer = setTimeout(() => this.flush(), this.flushIntervalMs);
	}
	flush() {
		if (this.timer) {
			clearTimeout(this.timer);
			this.timer = null;
		}
		if (this.queue.length === 0) return;
		const batch = this.queue.splice(0);
		try {
			this.flushFn(batch);
		} catch {}
	}
	destroy() {
		this.flush();
		if (this.timer) {
			clearTimeout(this.timer);
			this.timer = null;
		}
	}
};
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/analytics/src/scripts/ga4.ts
function toGa4Items(items) {
	return items.map((i) => ({
		item_id: i.itemId,
		item_name: i.itemName,
		item_category: i.itemCategory,
		item_brand: i.itemBrand,
		price: i.price,
		quantity: i.quantity ?? 1,
		item_variant: i.variant,
		index: i.index,
		item_list_name: i.listName
	}));
}
var GA4_EVENT_MAP = {
	page_view: "page_view",
	view_item: "view_item",
	add_to_cart: "add_to_cart",
	remove_from_cart: "remove_from_cart",
	view_cart: "view_cart",
	begin_checkout: "begin_checkout",
	add_shipping_info: "add_shipping_info",
	add_payment_info: "add_payment_info",
	purchase: "purchase",
	refund: "refund",
	view_item_list: "view_item_list",
	select_item: "select_item",
	search: "search",
	sign_up: "sign_up",
	login: "login",
	generate_lead: "generate_lead"
};
function createGa4Adapter(ga4Id) {
	let queue = null;
	function gtag(...args) {
		if (typeof window !== "undefined") {
			window.dataLayer = window.dataLayer ?? [];
			window.dataLayer.push(args);
		}
	}
	return {
		name: "GA4",
		init() {
			if (!ga4Id || typeof window === "undefined") return;
			window.dataLayer = window.dataLayer ?? [];
			window.gtag = gtag;
			const script = document.createElement("script");
			script.async = true;
			script.src = `https://www.googletagmanager.com/gtag/js?id=${ga4Id}`;
			document.head.appendChild(script);
			gtag("js", /* @__PURE__ */ new Date());
			gtag("config", ga4Id, {
				anonymize_ip: true,
				send_page_view: false
			});
			queue = new EventQueue((events) => {
				for (const e of events) window.gtag?.("event", e.name, e.payload);
			});
		},
		trackEvent(event, payload, config) {
			if (!queue) return;
			const ga4Name = GA4_EVENT_MAP[event] ?? event;
			const currency = config.currency;
			let params = { ...payload };
			if (event === "purchase") {
				const p = payload;
				params = {
					transaction_id: p.transactionId,
					value: p.value,
					currency: p.currency ?? currency,
					tax: p.tax,
					shipping: p.shipping,
					coupon: p.coupon,
					items: toGa4Items(p.items)
				};
			} else if ("items" in payload && Array.isArray(payload.items)) {
				const p = payload;
				params = {
					currency: p.currency ?? currency,
					value: p.value,
					coupon: p.coupon,
					items: toGa4Items(p.items)
				};
			} else if (event === "view_item" && "item" in payload) {
				const p = payload;
				params = {
					currency: p.currency ?? currency,
					value: p.value,
					items: toGa4Items([p.item])
				};
			} else if (event === "search" && "query" in payload) params = { search_term: payload.query };
			else if (event === "page_view" && "path" in payload) {
				const p = payload;
				params = {
					page_path: p.path,
					page_title: p.title
				};
			}
			queue.push(ga4Name, params);
		},
		identify(pii) {
			if (pii.email && typeof window !== "undefined") window.gtag?.("set", "user_data", {
				email: pii.email,
				phone_number: pii.phone,
				address: {
					first_name: pii.firstName,
					last_name: pii.lastName,
					city: pii.city,
					country: pii.country,
					postal_code: pii.zipCode
				}
			});
		},
		destroy() {
			queue?.destroy();
			queue = null;
		}
	};
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/analytics/src/utils/contentId.ts
/**
* Resolve a canonical content ID for a product/item in order of preference:
* numeric id > slug > sku > deterministic hash of name.
*/
function resolveContentId(item) {
	if (item.itemId && /^\d+$/.test(item.itemId)) return item.itemId;
	if (item.itemId) return item.itemId;
	return item.itemName.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 32);
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/analytics/src/scripts/meta.ts
var META_EVENT_MAP = {
	page_view: "PageView",
	view_item: "ViewContent",
	add_to_cart: "AddToCart",
	view_cart: "ViewContent",
	begin_checkout: "InitiateCheckout",
	add_payment_info: "AddPaymentInfo",
	purchase: "Purchase",
	sign_up: "CompleteRegistration",
	generate_lead: "Lead",
	whatsapp_click: "Contact",
	search: "Search"
};
function toMetaContents(items) {
	return items.map((i) => ({
		id: resolveContentId(i),
		quantity: i.quantity ?? 1,
		title: i.itemName,
		price: i.price
	}));
}
function createMetaAdapter(pixelId) {
	let queue = null;
	return {
		name: "Meta",
		init() {
			if (!pixelId || typeof window === "undefined") return;
			const fbq = function(...args) {
				if (fbq.callMethod) fbq.callMethod(...args);
				else fbq.queue.push(args);
			};
			fbq.queue = [];
			fbq.loaded = true;
			fbq.version = "2.0";
			window.fbq = fbq;
			window._fbq = fbq;
			const script = document.createElement("script");
			script.async = true;
			script.src = "https://connect.facebook.net/en_US/fbevents.js";
			document.head.appendChild(script);
			window.fbq("init", pixelId, { autoConfig: true });
			queue = new EventQueue((events) => {
				for (const e of events) {
					const p = e.payload;
					const eventId = p.eventId;
					window.fbq?.("track", e.name, p, eventId ? { eventID: eventId } : void 0);
				}
			});
		},
		trackEvent(event, payload, config) {
			if (!queue) return;
			const metaEvent = META_EVENT_MAP[event];
			if (!metaEvent) return;
			const currency = config.currency;
			let params = {};
			if (event === "purchase") {
				const p = payload;
				params = {
					value: p.value,
					currency: p.currency ?? currency,
					content_ids: p.items.map((i) => resolveContentId(i)),
					contents: toMetaContents(p.items),
					content_type: "product",
					order_id: p.transactionId,
					num_items: p.items.length
				};
			} else if (event === "view_item" && "item" in payload) {
				const p = payload;
				params = {
					value: p.value ?? p.item.price,
					currency: p.currency ?? currency,
					content_ids: [resolveContentId(p.item)],
					content_name: p.item.itemName,
					content_type: "product"
				};
			} else if ("items" in payload && Array.isArray(payload.items)) {
				const p = payload;
				params = {
					value: p.value,
					currency: p.currency ?? currency,
					content_ids: p.items.map((i) => resolveContentId(i)),
					contents: toMetaContents(p.items),
					num_items: p.items.length
				};
			} else if (event === "search" && "query" in payload) params = { search_string: payload.query };
			else if (event === "sign_up") params = { status: true };
			queue.push(metaEvent, params);
		},
		identify(pii) {
			if (typeof window === "undefined") return;
			window.fbq?.("init", pixelId, {
				em: pii.email,
				ph: pii.phone,
				fn: pii.firstName,
				ln: pii.lastName,
				ct: pii.city,
				country: pii.country,
				zp: pii.zipCode
			});
		},
		destroy() {
			queue?.destroy();
			queue = null;
		}
	};
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/analytics/src/utils/hash.ts
/** SHA-256 hash a string via Web Crypto API — required by TikTok for PII data. */
async function sha256(value) {
	const data = new TextEncoder().encode(value.trim().toLowerCase());
	const hashBuf = await crypto.subtle.digest("SHA-256", data);
	return Array.from(new Uint8Array(hashBuf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function hashPii(raw) {
	if (!raw) return void 0;
	return sha256(raw);
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/analytics/src/scripts/tiktok.ts
var TIKTOK_EVENT_MAP = {
	page_view: "PageView",
	view_item: "ViewContent",
	add_to_cart: "AddToCart",
	begin_checkout: "InitiateCheckout",
	add_payment_info: "AddPaymentInfo",
	purchase: "PlaceAnOrder",
	sign_up: "CompleteRegistration",
	generate_lead: "SubmitForm",
	search: "Search",
	whatsapp_click: "Contact"
};
function toTikTokContents(items) {
	return items.map((i) => ({
		content_id: resolveContentId(i),
		content_name: i.itemName,
		price: i.price ?? 0,
		quantity: i.quantity ?? 1
	}));
}
function createTikTokAdapter(pixelId) {
	let queue = null;
	return {
		name: "TikTok",
		init() {
			if (!pixelId || typeof window === "undefined") return;
			const ttq = {
				_i: {},
				load(id) {
					const el = document.createElement("script");
					el.async = true;
					el.src = `https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=${id}&lib=ttq`;
					document.head.appendChild(el);
					this._i[id] = [];
				},
				page() {
					this._i[pixelId].push(["page"]);
				},
				track(event, data) {
					this._i[pixelId].push([
						"track",
						event,
						data
					]);
				},
				identify(data) {
					this._i[pixelId].push(["identify", data]);
				}
			};
			window.ttq = ttq;
			ttq.load(pixelId);
			queue = new EventQueue((events) => {
				for (const e of events) window.ttq?.track(e.name, e.payload);
			});
		},
		trackEvent(event, payload, config) {
			if (!queue) return;
			const ttEvent = TIKTOK_EVENT_MAP[event];
			if (!ttEvent) return;
			const currency = config.currency;
			let params = {};
			if (event === "purchase") {
				const p = payload;
				params = {
					value: p.value,
					currency: p.currency ?? currency,
					contents: toTikTokContents(p.items),
					order_id: p.transactionId
				};
			} else if (event === "view_item" && "item" in payload) {
				const p = payload;
				params = {
					value: p.value ?? p.item.price ?? 0,
					currency: p.currency ?? currency,
					contents: toTikTokContents([p.item])
				};
			} else if ("items" in payload && Array.isArray(payload.items)) {
				const p = payload;
				params = {
					value: p.value ?? 0,
					currency: p.currency ?? currency,
					contents: toTikTokContents(p.items)
				};
			} else if (event === "search" && "query" in payload) params = { query: payload.query };
			queue.push(ttEvent, params);
		},
		async identify(pii) {
			if (typeof window === "undefined") return;
			const [email, phone] = await Promise.all([hashPii(pii.email), hashPii(pii.phone)]);
			window.ttq?.identify({
				email,
				phone_number: phone
			});
		},
		destroy() {
			queue?.destroy();
			queue = null;
		}
	};
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/analytics/src/scripts/clarity.ts
function createClarityAdapter(projectId) {
	return {
		name: "Clarity",
		init() {
			if (!projectId || typeof window === "undefined") return;
			const c = function(...args) {
				c.q = c.q ?? [];
				c.q.push(args);
			};
			c.q = [];
			window.clarity = c;
			const script = document.createElement("script");
			script.async = true;
			script.src = `https://www.clarity.ms/tag/${projectId}`;
			document.head.appendChild(script);
		},
		trackEvent(event, _payload, _config) {
			if (typeof window === "undefined" || !window.clarity) return;
			window.clarity("set", "event", event);
		}
	};
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/analytics/src/providers/AnalyticsProvider.tsx
var AnalyticsContext = createContext({
	track: () => void 0,
	identify: () => void 0,
	manager: null
});
function AnalyticsProvider({ config, platform, children }) {
	const managerRef = useRef(null);
	const manager = useMemo(() => {
		if (!config) return null;
		const m = new AnalyticsManager({
			config,
			platform,
			debug: config.debug
		});
		const { pixels } = config;
		if (pixels.gtmId) m.register(createGtmAdapter(pixels.gtmId));
		if (pixels.ga4Id) m.register(createGa4Adapter(pixels.ga4Id));
		if (pixels.metaPixelId) m.register(createMetaAdapter(pixels.metaPixelId));
		if (pixels.tiktokPixelId) m.register(createTikTokAdapter(pixels.tiktokPixelId));
		if (pixels.clarityId) m.register(createClarityAdapter(pixels.clarityId));
		return m;
	}, [config, platform]);
	useEffect(() => {
		if (!manager) return;
		managerRef.current = manager;
		manager.init();
		return () => {
			manager.destroy();
			managerRef.current = null;
		};
	}, [manager]);
	const value = useMemo(() => ({
		manager,
		track(event, payload, throttleKey) {
			managerRef.current?.track(event, payload, throttleKey);
		},
		identify(pii) {
			managerRef.current?.identify(pii);
		}
	}), [manager]);
	return /* @__PURE__ */ jsx(AnalyticsContext.Provider, {
		value,
		children
	});
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/notifications/src/api/notifications-api.ts
async function apiFetch(apiBase, path, options = {}) {
	const { token, headers, ...init } = options;
	const res = await fetch(`${apiBase}${path}`, {
		...init,
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			...token ? { Authorization: `Bearer ${token}` } : {},
			...headers
		}
	});
	if (!res.ok) throw new Error(`[notifications] ${res.status} ${path}`);
	const json = await res.json();
	if (json && typeof json === "object" && "success" in json && "data" in json) return json.data;
	return json;
}
async function getUnreadCount(cfg) {
	return (await apiFetch(cfg.apiBase, "/api/v1/notification/unread-count", { token: cfg.getToken() })).count ?? 0;
}
async function registerPushToken(cfg, registration) {
	await apiFetch(cfg.apiBase, "/api/v1/push/register-token", {
		method: "POST",
		body: JSON.stringify(registration),
		token: cfg.getToken()
	});
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/notifications/src/push/firebase.ts
var _messagingPromise = null;
async function getFirebaseMessaging(cfg) {
	if (_messagingPromise) return _messagingPromise;
	_messagingPromise = (async () => {
		const [{ initializeApp, getApps, getApp }, { getMessaging, isSupported }] = await Promise.all([import("./assets/dist-BjWqnQ_8.js"), import("./assets/dist-BEMkn_qT.js")]);
		if (!await isSupported()) return null;
		const firebaseConfig = {
			apiKey: cfg.firebaseApiKey,
			authDomain: cfg.firebaseAuthDomain,
			projectId: cfg.firebaseProjectId,
			storageBucket: cfg.firebaseStorageBucket,
			messagingSenderId: cfg.firebaseMessagingSenderId,
			appId: cfg.firebaseAppId
		};
		return getMessaging(getApps().length === 0 ? initializeApp(firebaseConfig) : getApp());
	})();
	return _messagingPromise;
}
async function getFCMToken(cfg) {
	const messaging = await getFirebaseMessaging(cfg);
	if (!messaging) return null;
	try {
		const { getToken } = await import("./assets/dist-BEMkn_qT.js");
		return await getToken(messaging, { vapidKey: cfg.vapidKey }) || null;
	} catch {
		return null;
	}
}
async function onForegroundMessage(cfg, handler) {
	const messaging = await getFirebaseMessaging(cfg);
	if (!messaging) return null;
	const { onMessage } = await import("./assets/dist-BEMkn_qT.js");
	return onMessage(messaging, handler);
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/notifications/src/providers/NotificationProvider.tsx
var NotificationContext = createContext(null);
function useNotificationContext() {
	const ctx = useContext(NotificationContext);
	if (!ctx) throw new Error("useNotificationContext must be inside <NotificationProvider>");
	return ctx;
}
function NotificationProvider({ children, apiBase, getToken, pushConfig, autoRegisterPush = true }) {
	const [pushToken, setPushToken] = useState(null);
	const [pushPermission, setPushPermission] = useState(() => {
		if (typeof Notification === "undefined") return "default";
		return Notification.permission;
	});
	const [foregroundMessage, setForegroundMessage] = useState(null);
	const apiConfig = useMemo(() => ({
		apiBase,
		getToken
	}), [apiBase, getToken]);
	const isReady = !!apiBase;
	useEffect(() => {
		if (!pushConfig?.firebaseApiKey || !pushConfig.vapidKey) return;
		if (pushPermission !== "granted" || !autoRegisterPush) return;
		let cancelled = false;
		getFCMToken(pushConfig).then((token) => {
			if (cancelled || !token) return;
			setPushToken(token);
			registerPushToken(apiConfig, {
				token,
				platform: "web"
			}).catch(() => {});
		});
		const cleanup = onForegroundMessage(pushConfig, (payload) => {
			setForegroundMessage({
				id: payload.messageId ?? Date.now().toString(),
				type: "system",
				title: payload.notification?.title ?? "",
				body: payload.notification?.body ?? "",
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				isRead: false,
				metadata: payload.data
			});
		});
		return () => {
			cancelled = true;
			cleanup.then((unsub) => unsub?.());
		};
	}, [
		pushConfig,
		pushPermission,
		autoRegisterPush,
		apiConfig
	]);
	const requestPushPermission = async () => {
		if (typeof Notification === "undefined" || !pushConfig) return "denied";
		const result = await Notification.requestPermission();
		setPushPermission(result);
		if (result === "granted") {
			const token = await getFCMToken(pushConfig);
			if (token) {
				setPushToken(token);
				registerPushToken(apiConfig, {
					token,
					platform: "web"
				}).catch(() => {});
			}
		}
		return result;
	};
	const value = {
		apiConfig,
		isReady,
		pushToken,
		pushPermission,
		requestPushPermission,
		foregroundMessage
	};
	return /* @__PURE__ */ jsx(NotificationContext.Provider, {
		value,
		children
	});
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/notifications/src/hooks/useUnreadCount.ts
function useUnreadCount() {
	const ctx = useNotificationContext();
	const { data = 0 } = useQuery({
		queryKey: ["ourinc-notifications-unread-count"],
		queryFn: () => getUnreadCount(ctx.apiConfig),
		enabled: ctx.isReady,
		staleTime: 3e4,
		refetchInterval: 6e4
	});
	return data;
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/notifications/src/components/NotificationBell.tsx
function NotificationBell({ onClick, className = "", badgeClassName = "" }) {
	const unreadCount = useUnreadCount();
	return /* @__PURE__ */ jsxs("button", {
		type: "button",
		onClick,
		"aria-label": unreadCount > 0 ? `${unreadCount} unread notifications` : "Notifications",
		className: `relative inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${className}`,
		children: [/* @__PURE__ */ jsxs("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			width: "20",
			height: "20",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			"aria-hidden": "true",
			children: [/* @__PURE__ */ jsx("path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" }), /* @__PURE__ */ jsx("path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0" })]
		}), unreadCount > 0 && /* @__PURE__ */ jsx("span", {
			"aria-hidden": "true",
			className: `absolute top-0.5 end-0.5 min-w-[18px] h-[18px] flex items-center justify-center rounded-full bg-destructive text-white text-[10px] font-semibold px-1 leading-none ${badgeClassName}`,
			children: unreadCount > 99 ? "99+" : unreadCount
		})]
	});
}
//#endregion
//#region src/lib/authToken.ts
/**
* Single source of truth for OurScent auth tokens.
*
* The @ourinc/auth AuthProvider and @ourinc/http-client both persist tokens under
* `_${storageKey}_AUTH_TOKEN` / `_${storageKey}_AUTH_REFRESH_TOKEN`, backed by both
* a cookie and localStorage. OURSCENT_AUTH_CONFIG uses storageKey 'OURSCENT', so
* everything in this app must read and write those exact keys — otherwise requests
* go out unauthenticated and every [Authorize] endpoint returns 401.
*/
var STORAGE_KEY$1 = "OURSCENT";
var TOKEN_KEY = `_${STORAGE_KEY$1}_AUTH_TOKEN`;
var REFRESH_TOKEN_KEY = `_${STORAGE_KEY$1}_AUTH_REFRESH_TOKEN`;
var isBrowser = typeof window !== "undefined";
function readCookie(name) {
	if (!isBrowser) return null;
	const match = document.cookie.split("; ").find((row) => row.startsWith(`${name}=`));
	return match ? decodeURIComponent(match.slice(name.length + 1)) : null;
}
function writeCookie(name, value) {
	if (!isBrowser) return;
	document.cookie = `${name}=${encodeURIComponent(value)}; path=/; SameSite=Lax`;
}
function deleteCookie$1(name) {
	if (!isBrowser) return;
	document.cookie = `${name}=; path=/; max-age=0`;
}
/** Cookie first, then localStorage — matches @ourinc/auth's createTokenStorage. */
function getAuthToken() {
	if (!isBrowser) return null;
	return readCookie(TOKEN_KEY) ?? localStorage.getItem(TOKEN_KEY);
}
function getRefreshToken() {
	if (!isBrowser) return null;
	return readCookie(REFRESH_TOKEN_KEY) ?? localStorage.getItem(REFRESH_TOKEN_KEY);
}
function setAuthToken(token) {
	if (!isBrowser) return;
	localStorage.setItem(TOKEN_KEY, token);
	writeCookie(TOKEN_KEY, token);
}
function setRefreshToken(token) {
	if (!isBrowser) return;
	localStorage.setItem(REFRESH_TOKEN_KEY, token);
	writeCookie(REFRESH_TOKEN_KEY, token);
}
function clearAuthTokens() {
	if (!isBrowser) return;
	localStorage.removeItem(TOKEN_KEY);
	localStorage.removeItem(REFRESH_TOKEN_KEY);
	deleteCookie$1(TOKEN_KEY);
	deleteCookie$1(REFRESH_TOKEN_KEY);
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default
});
var SUPPORTED_LANGS$1 = [
	"ar",
	"en",
	"fr"
];
var browserQueryClient;
function makeQueryClient() {
	return new QueryClient({ defaultOptions: { queries: {
		staleTime: 3e5,
		retry: 1
	} } });
}
function getQueryClient() {
	if (typeof window === "undefined") return makeQueryClient();
	browserQueryClient ??= makeQueryClient();
	return browserQueryClient;
}
var analyticsConfig = void 0;
/**
* The document shell. In framework mode this replaces index.html entirely —
* <Meta/> and <Links/> are where each route's own meta tags and stylesheets
* land, which is what finally puts them in the server-rendered HTML instead of
* having them appear only after the client bundle executes.
*/
function Layout({ children }) {
	const params = useParams();
	const lang = SUPPORTED_LANGS$1.includes(params.lang) ? params.lang : "ar";
	const dir = lang === "ar" ? "rtl" : "ltr";
	useEffect(() => {
		document.documentElement.lang = lang;
		document.documentElement.dir = dir;
	}, [lang, dir]);
	return /* @__PURE__ */ jsxs("html", {
		lang,
		dir,
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "UTF-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1.0"
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "theme-color",
				content: "#171717"
			}),
			/* @__PURE__ */ jsx("meta", {
				name: "application-name",
				content: "OurScent"
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "apple-touch-icon",
				href: "/apple-touch-icon.png"
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "manifest",
				href: "/manifest.json"
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			}),
			/* @__PURE__ */ jsx("link", {
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cairo+Play:wght@300;400;500;600;700;900&family=Noto+Sans+Arabic:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	const queryClient = getQueryClient();
	return /* @__PURE__ */ jsx(PlatformConfigProvider, {
		platformType: "OurScent",
		children: /* @__PURE__ */ jsx(AuthProvider, {
			config: OURSCENT_AUTH_CONFIG,
			children: /* @__PURE__ */ jsx(AnalyticsProvider, {
				config: analyticsConfig,
				platform: "OurScent",
				children: /* @__PURE__ */ jsx(NotificationProvider, {
					apiBase: "https://community.ourscent.com",
					getToken: getAuthToken,
					children: /* @__PURE__ */ jsx(CommunityProvider, { children: /* @__PURE__ */ jsx(QueryClientProvider, {
						client: queryClient,
						children: /* @__PURE__ */ jsxs(StoreCartProvider, { children: [/* @__PURE__ */ jsx(Outlet, {}), /* @__PURE__ */ jsx(Toaster, {
							position: "top-center",
							richColors: true
						})] })
					}) })
				})
			})
		})
	});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary() {
	const error = useRouteError();
	const is404 = isRouteErrorResponse(error) && error.status === 404;
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen flex flex-col items-center justify-center gap-3 p-8 text-center",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "text-2xl font-bold",
				children: is404 ? "404" : "خطأ"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-neutral-600",
				children: is404 ? "الصفحة غير موجودة" : "حدث خطأ غير متوقع"
			}),
			/* @__PURE__ */ jsx("a", {
				href: "/",
				className: "underline",
				children: "العودة للرئيسية"
			})
		]
	});
});
//#endregion
//#region src/hooks/useDirection.ts
function useDirection() {
	const { i18n } = useTranslation();
	const isRtl = i18n.language === "ar";
	useEffect(() => {
		document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
		document.documentElement.setAttribute("lang", i18n.language);
	}, [i18n.language, isRtl]);
	return {
		isRtl,
		lang: i18n.language
	};
}
//#endregion
//#region src/components/Navbar.tsx
var LANGS = [
	{
		code: "ar",
		label: "العربية",
		flag: "🇸🇦"
	},
	{
		code: "en",
		label: "English",
		flag: "🇬🇧"
	},
	{
		code: "fr",
		label: "Français",
		flag: "🇫🇷"
	}
];
function Navbar() {
	const { t, i18n } = useTranslation();
	const { lang } = useDirection();
	const { isAuthenticated: isAuth } = useAuth();
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const { cartCount } = useStoreCart();
	const [scrolled, setScrolled] = useState(false);
	const [discoverOpen, setDiscoverOpen] = useState(false);
	const [mobileOpen, setMobileOpen] = useState(false);
	const discoverRef = useRef(null);
	useEffect(() => {
		const handler = () => setScrolled(window.scrollY > 4);
		window.addEventListener("scroll", handler, { passive: true });
		return () => window.removeEventListener("scroll", handler);
	}, []);
	useEffect(() => {
		const handler = (e) => {
			if (discoverRef.current && !discoverRef.current.contains(e.target)) setDiscoverOpen(false);
		};
		document.addEventListener("mousedown", handler);
		return () => document.removeEventListener("mousedown", handler);
	}, []);
	const [prevLang, setPrevLang] = useState(lang);
	if (prevLang !== lang) {
		setPrevLang(lang);
		setMobileOpen(false);
	}
	const linkCls = "text-[13px] font-medium text-neutral-600 hover:text-neutral-1000 transition-colors duration-150";
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("nav", {
		className: clsx("sticky top-0 z-50 bg-white/92 border-b border-neutral-200 backdrop-blur-md", "transition-shadow duration-300", scrolled && "shadow-card"),
		children: [/* @__PURE__ */ jsxs("div", {
			className: "max-w-[1232px] mx-auto px-4 h-[77px] flex items-center justify-between gap-6",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "hidden md:flex items-center gap-6",
					children: [
						/* @__PURE__ */ jsx(Link$1, {
							to: `${prefix}/browse`,
							className: linkCls,
							children: t("nav.browse")
						}),
						/* @__PURE__ */ jsx(Link$1, {
							to: `${prefix}/brands`,
							className: linkCls,
							children: t("nav.brands")
						}),
						/* @__PURE__ */ jsx(Link$1, {
							to: `${prefix}/trending`,
							className: linkCls,
							children: t("nav.trending")
						}),
						/* @__PURE__ */ jsxs("div", {
							ref: discoverRef,
							className: "relative",
							children: [/* @__PURE__ */ jsxs("button", {
								onClick: () => setDiscoverOpen((v) => !v),
								className: clsx(linkCls, "flex items-center gap-1 focus:outline-none"),
								children: [t("nav.discover"), /* @__PURE__ */ jsx("svg", {
									className: clsx("w-3 h-3 transition-transform duration-200", discoverOpen && "rotate-180"),
									fill: "none",
									viewBox: "0 0 24 24",
									stroke: "currentColor",
									strokeWidth: 2.5,
									children: /* @__PURE__ */ jsx("path", {
										strokeLinecap: "round",
										strokeLinejoin: "round",
										d: "M19 9l-7 7-7-7"
									})
								})]
							}), discoverOpen && /* @__PURE__ */ jsxs("div", {
								className: "absolute top-full mt-2 start-0 w-56\n                  bg-white border border-neutral-200 rounded-b-[32px] rounded-t-2xl\n                  shadow-xl py-2 z-50 animate-fade-up",
								children: [
									/* @__PURE__ */ jsxs(Link$1, {
										to: `${prefix}/finder`,
										onClick: () => setDiscoverOpen(false),
										className: "flex items-center gap-2.5 px-5 py-3 text-[13px] text-neutral-700\n                               hover:bg-neutral-50 hover:text-neutral-1000 transition-colors",
										children: ["🧭 ", t("nav.finder", "مُكتشف العطور")]
									}),
									/* @__PURE__ */ jsxs(Link$1, {
										to: `${prefix}/notes`,
										onClick: () => setDiscoverOpen(false),
										className: "flex items-center gap-2.5 px-5 py-3 text-[13px] text-neutral-700\n                               hover:bg-neutral-50 hover:text-neutral-1000 transition-colors",
										children: ["🌿 ", t("nav.notes")]
									}),
									/* @__PURE__ */ jsxs(Link$1, {
										to: `${prefix}/discover/notes`,
										onClick: () => setDiscoverOpen(false),
										className: "flex items-center gap-2.5 px-5 py-3 text-[13px] text-neutral-700\n                               hover:bg-neutral-50 hover:text-neutral-1000 transition-colors",
										children: [
											"🔍 ",
											t("nav.discover"),
											" · ",
											t("nav.notes")
										]
									}),
									/* @__PURE__ */ jsxs(Link$1, {
										to: `${prefix}/discover/accords`,
										onClick: () => setDiscoverOpen(false),
										className: "flex items-center gap-2.5 px-5 py-3 text-[13px] text-neutral-700\n                               hover:bg-neutral-50 hover:text-neutral-1000 transition-colors",
										children: [
											"🎨 ",
											t("nav.discover"),
											" · ",
											t("nav.accords", "Accords")
										]
									}),
									/* @__PURE__ */ jsx("div", { className: "h-px bg-neutral-100 mx-4 my-1" }),
									/* @__PURE__ */ jsxs(Link$1, {
										to: `${prefix}/influencers`,
										onClick: () => setDiscoverOpen(false),
										className: "flex items-center gap-2.5 px-5 py-3 text-[13px] text-neutral-700\n                               hover:bg-neutral-50 hover:text-neutral-1000 transition-colors",
										children: ["✨ ", t("nav.influencers")]
									})
								]
							})]
						}),
						isAuth && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Link$1, {
							to: `${prefix}/wardrobe`,
							className: linkCls,
							children: t("nav.wardrobe")
						}), /* @__PURE__ */ jsx(Link$1, {
							to: `${prefix}/notebook`,
							className: linkCls,
							children: t("nav.notebook", "مفكرتي")
						})] })
					]
				}),
				/* @__PURE__ */ jsx(Link$1, {
					to: `${prefix}/`,
					className: "absolute left-1/2 -translate-x-1/2\n                       font-display font-bold text-xl text-neutral-1000 tracking-tight\n                       hover:opacity-80 transition-opacity duration-150 shrink-0",
					children: t("app.title", "عطرنا")
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2 ms-auto",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "hidden sm:flex items-center gap-0.5 bg-neutral-100 rounded-xl p-1",
							children: LANGS.map((l) => /* @__PURE__ */ jsxs("button", {
								onClick: () => i18n.changeLanguage(l.code),
								className: clsx("h-7 px-2.5 rounded-lg text-[11px] font-medium transition-all duration-150", i18n.language === l.code ? "bg-neutral-1000 text-white shadow-sm" : "text-neutral-600 hover:text-neutral-900"),
								children: [
									l.flag,
									" ",
									l.label
								]
							}, l.code))
						}),
						isStoreEnabled && /* @__PURE__ */ jsxs(Link$1, {
							to: `${prefix}/cart`,
							className: "relative h-10 w-10 rounded-xl text-neutral-600 flex items-center\n                           justify-center text-lg hover:bg-neutral-100 transition-colors",
							title: t("cart.title"),
							children: ["🛒", cartCount > 0 && /* @__PURE__ */ jsx("span", {
								className: "absolute -top-0.5 -end-0.5 min-w-[18px] h-[18px] px-1 rounded-full\n                                   bg-neutral-1000 text-white text-[10px] font-bold\n                                   flex items-center justify-center tabular-nums",
								children: cartCount > 99 ? "99+" : cartCount
							})]
						}),
						isAuth && /* @__PURE__ */ jsx(NotificationBell, {
							className: "h-10 w-10 rounded-xl text-neutral-600 hover:bg-neutral-100 transition-colors",
							badgeClassName: "bg-red-brand"
						}),
						!isAuth ? /* @__PURE__ */ jsx(Link$1, {
							to: `${prefix}/login`,
							className: "h-10 px-5 rounded-xl bg-neutral-1000 text-white text-[13px] font-semibold\n                           flex items-center shimmer shadow-primary-black\n                           hover:bg-neutral-800 transition-colors duration-150",
							children: t("auth.login", "دخول")
						}) : /* @__PURE__ */ jsx(Link$1, {
							to: `${prefix}/wardrobe`,
							className: "h-10 w-10 rounded-xl border border-neutral-200 text-neutral-600\n                           flex items-center justify-center text-lg\n                           hover:bg-neutral-50 hover:border-neutral-300 transition-colors hidden md:flex",
							title: t("nav.wardrobe"),
							children: "🗄️"
						}),
						/* @__PURE__ */ jsxs("button", {
							className: "md:hidden h-10 w-10 flex flex-col items-center justify-center gap-1.5\n                         rounded-xl hover:bg-neutral-100 transition-colors",
							onClick: () => setMobileOpen((v) => !v),
							"aria-label": "Menu",
							children: [
								/* @__PURE__ */ jsx("span", { className: clsx("block w-5 h-0.5 bg-neutral-1000 transition-all duration-300 origin-center", mobileOpen && "translate-y-2 rotate-45") }),
								/* @__PURE__ */ jsx("span", { className: clsx("block w-5 h-0.5 bg-neutral-1000 transition-all duration-300", mobileOpen && "opacity-0 scale-x-0") }),
								/* @__PURE__ */ jsx("span", { className: clsx("block w-5 h-0.5 bg-neutral-1000 transition-all duration-300 origin-center", mobileOpen && "-translate-y-2 -rotate-45") })
							]
						})
					]
				})
			]
		}), mobileOpen && /* @__PURE__ */ jsxs("div", {
			className: "md:hidden border-t border-neutral-100 bg-white px-4 py-3 space-y-0.5 animate-fade-up",
			children: [
				[
					{
						to: `${prefix}/browse`,
						label: t("nav.browse"),
						emoji: "🔍"
					},
					{
						to: `${prefix}/brands`,
						label: t("nav.brands"),
						emoji: "🏷️"
					},
					{
						to: `${prefix}/trending`,
						label: t("nav.trending"),
						emoji: "🔥"
					},
					{
						to: `${prefix}/finder`,
						label: t("nav.finder", "مُكتشف العطور"),
						emoji: "🧭"
					},
					{
						to: `${prefix}/notes`,
						label: t("nav.notes"),
						emoji: "🌿"
					},
					{
						to: `${prefix}/discover/accords`,
						label: t("nav.discover") + " · Accords",
						emoji: "🎨"
					},
					{
						to: `${prefix}/influencers`,
						label: t("nav.influencers"),
						emoji: "✨"
					},
					...isAuth ? [{
						to: `${prefix}/wardrobe`,
						label: t("nav.wardrobe"),
						emoji: "🗄️"
					}, {
						to: `${prefix}/notebook`,
						label: t("nav.notebook", "مفكرتي"),
						emoji: "📓"
					}] : []
				].map((item) => /* @__PURE__ */ jsxs(Link$1, {
					to: item.to,
					onClick: () => setMobileOpen(false),
					className: "flex items-center gap-3 px-3 py-3 rounded-xl text-[14px] font-medium\n                           text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-colors",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-base",
						children: item.emoji
					}), item.label]
				}, item.to)),
				/* @__PURE__ */ jsxs("div", {
					className: "pt-3 pb-1 border-t border-neutral-100 mt-2",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-[11px] text-neutral-400 uppercase tracking-wide px-3 mb-2",
						children: t("nav.language", "اللغة")
					}), /* @__PURE__ */ jsx("div", {
						className: "flex gap-2 px-3",
						children: LANGS.map((l) => /* @__PURE__ */ jsxs("button", {
							onClick: () => {
								i18n.changeLanguage(l.code);
								setMobileOpen(false);
							},
							className: clsx("flex-1 h-9 rounded-xl text-[12px] font-medium transition-all duration-150", i18n.language === l.code ? "bg-neutral-1000 text-white shadow-primary-black" : "border border-neutral-200 text-neutral-600 hover:border-neutral-400"),
							children: [
								l.flag,
								" ",
								l.label
							]
						}, l.code))
					})]
				}),
				!isAuth && /* @__PURE__ */ jsx(Link$1, {
					to: `${prefix}/login`,
					onClick: () => setMobileOpen(false),
					className: "flex items-center justify-center gap-2 mx-3 mt-2 mb-1 h-11 rounded-xl\n                           bg-neutral-1000 text-white text-[14px] font-semibold shimmer shadow-primary-black",
					children: t("auth.login", "دخول")
				})
			]
		})]
	}) });
}
//#endregion
//#region src/components/Footer.tsx
function Footer() {
	const { t } = useTranslation();
	const { lang } = useDirection();
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ jsxs("footer", {
		className: "bg-neutral-1000 text-neutral-400 text-sm mt-24",
		children: [/* @__PURE__ */ jsx("div", {
			className: "max-w-7xl mx-auto px-4 pt-16 pb-10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-2 md:grid-cols-4 gap-10",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "col-span-2 md:col-span-1",
						children: [
							/* @__PURE__ */ jsx(Link$1, {
								to: `${prefix}/`,
								className: "text-white font-bold text-2xl tracking-tight block mb-4",
								children: t("app.title")
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-neutral-500 text-[12px] leading-relaxed max-w-[200px]",
								children: t("home.hero_subtitle")
							}),
							/* @__PURE__ */ jsx("div", {
								className: "flex gap-3 mt-5",
								children: [
									{
										href: "https://instagram.com/ourscent",
										label: "Inst"
									},
									{
										href: "https://tiktok.com/@ourscent",
										label: "Tok"
									},
									{
										href: "https://twitter.com/ourscent",
										label: "X"
									}
								].map((s) => /* @__PURE__ */ jsx("a", {
									href: s.href,
									target: "_blank",
									rel: "noreferrer",
									className: "w-8 h-8 rounded-xl bg-neutral-800 border border-neutral-700\n                             flex items-center justify-center text-[10px] font-bold text-neutral-400\n                             hover:bg-neutral-700 hover:text-white transition-all",
									children: s.label
								}, s.label))
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "text-neutral-300 font-bold mb-4 uppercase text-[10px] tracking-widest",
						children: t("nav.browse")
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-2.5",
						children: [
							{
								to: `${prefix}/browse`,
								label: t("nav.browse")
							},
							{
								to: `${prefix}/trending`,
								label: t("nav.trending")
							},
							{
								to: `${prefix}/brands`,
								label: t("nav.brands")
							},
							{
								to: `${prefix}/compare`,
								label: t("nav.compare")
							}
						].map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link$1, {
							to: l.to,
							className: "text-[13px] hover:text-white transition-colors",
							children: l.label
						}) }, l.to))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "text-neutral-300 font-bold mb-4 uppercase text-[10px] tracking-widest",
						children: t("nav.discover")
					}), /* @__PURE__ */ jsx("ul", {
						className: "space-y-2.5",
						children: [
							{
								to: `${prefix}/notes`,
								label: t("nav.notes")
							},
							{
								to: `${prefix}/finder`,
								label: t("nav.finder", "مُكتشف العطور")
							},
							{
								to: `${prefix}/discover/notes`,
								label: `${t("nav.discover")} · ${t("nav.notes")}`
							},
							{
								to: `${prefix}/discover/accords`,
								label: `${t("nav.discover")} · ${t("nav.accords")}`
							},
							{
								to: `${prefix}/influencers`,
								label: t("nav.influencers")
							}
						].map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link$1, {
							to: l.to,
							className: "text-[13px] hover:text-white transition-colors",
							children: l.label
						}) }, l.to))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "text-neutral-300 font-bold mb-4 uppercase text-[10px] tracking-widest",
						children: "OurScent"
					}), /* @__PURE__ */ jsxs("ul", {
						className: "space-y-2.5",
						children: [/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link$1, {
							to: `${prefix}/privacy`,
							className: "text-[13px] hover:text-white transition-colors",
							children: t("privacy.title")
						}) }), /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "mailto:hello@ourscent.com",
							className: "text-[13px] hover:text-white transition-colors",
							children: "hello@ourscent.com"
						}) })]
					})] })
				]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-neutral-800",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3",
				children: [/* @__PURE__ */ jsxs("span", {
					className: "text-[11px] text-neutral-600",
					children: [
						"© ",
						/* @__PURE__ */ jsx("span", {
							suppressHydrationWarning: true,
							children: year
						}),
						" OurScent · ",
						t("app.title"),
						". ",
						t("common.all_rights_reserved")
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex gap-4",
					children: [
						/* @__PURE__ */ jsx("a", {
							href: "https://instagram.com/ourscent",
							target: "_blank",
							rel: "noreferrer",
							className: "text-[11px] hover:text-white transition-colors",
							children: "Instagram"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "https://tiktok.com/@ourscent",
							target: "_blank",
							rel: "noreferrer",
							className: "text-[11px] hover:text-white transition-colors",
							children: "TikTok"
						}),
						/* @__PURE__ */ jsx("a", {
							href: "https://twitter.com/ourscent",
							target: "_blank",
							rel: "noreferrer",
							className: "text-[11px] hover:text-white transition-colors",
							children: "X (Twitter)"
						})
					]
				})]
			})
		})]
	});
}
//#endregion
//#region src/stores/compareStore.ts
var useCompareStore = create((set, get) => ({
	items: [],
	add: (fragrance) => set((state) => {
		if (state.items.find((i) => i.id === fragrance.id)) return state;
		const next = [...state.items, fragrance];
		return { items: next.length > 3 ? next.slice(1) : next };
	}),
	remove: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
	clear: () => set({ items: [] }),
	isInCompare: (id) => get().items.some((i) => i.id === id)
}));
//#endregion
//#region src/components/CompareBasket.tsx
function CompareBasket() {
	const { t, i18n } = useTranslation();
	const { items, remove, clear } = useCompareStore();
	if (items.length === 0) return null;
	const lang = i18n.language;
	const prefix = lang === "ar" ? "" : `/${lang}`;
	return /* @__PURE__ */ jsxs("div", {
		className: "fixed bottom-5 end-5 z-50 w-64 glass-dark rounded-3xl shadow-primary-black\n                    p-4 flex flex-col gap-3 animate-fade-up border border-white/10",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsxs("span", {
					className: "text-white font-semibold text-[12px] uppercase tracking-wide",
					children: [
						"⚖️ ",
						t("compare.title"),
						" ",
						/* @__PURE__ */ jsxs("span", {
							className: "text-neutral-400",
							children: [
								"(",
								items.length,
								"/3)"
							]
						})
					]
				}), /* @__PURE__ */ jsx("button", {
					onClick: clear,
					className: "text-neutral-400 hover:text-red-400 text-[11px] transition-colors",
					children: t("compare.clear")
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "space-y-2",
				children: items.map((item) => /* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2.5",
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "w-9 h-9 rounded-xl bg-neutral-700 overflow-hidden shrink-0",
							children: item.imageMain ? /* @__PURE__ */ jsx("img", {
								src: item.imageMain,
								className: "w-full h-full object-contain",
								alt: ""
							}) : /* @__PURE__ */ jsx("div", {
								className: "w-full h-full flex items-center justify-center text-neutral-500 text-xs",
								children: "🌸"
							})
						}),
						/* @__PURE__ */ jsx("span", {
							className: "text-[12px] text-neutral-200 flex-1 truncate",
							children: lang === "ar" ? item.nameAr : item.nameEn
						}),
						/* @__PURE__ */ jsx("button", {
							onClick: () => remove(item.id),
							className: "text-neutral-500 hover:text-neutral-200 text-[11px] shrink-0 transition-colors",
							children: "✕"
						})
					]
				}, item.id))
			}),
			items.length < 3 && /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2.5",
				children: [/* @__PURE__ */ jsx("div", {
					className: "w-9 h-9 rounded-xl border-2 border-dashed border-neutral-600 shrink-0 flex items-center justify-center",
					children: /* @__PURE__ */ jsx("span", {
						className: "text-neutral-500 text-sm",
						children: "+"
					})
				}), /* @__PURE__ */ jsx("span", {
					className: "text-[11px] text-neutral-500",
					children: t("compare.add_one_more", "أضف عطراً للمقارنة")
				})]
			}),
			/* @__PURE__ */ jsxs(Link$1, {
				to: `${prefix}/compare?ids=${items.map((i) => i.id).join(",")}`,
				className: "w-full h-10 bg-white text-neutral-1000 rounded-xl text-[13px] font-semibold\n                   flex items-center justify-center gap-1 hover:bg-neutral-100 transition-colors",
				children: [t("compare.title"), " →"]
			})
		]
	});
}
//#endregion
//#region src/components/CookieConsent.tsx
var STORAGE_KEY = "cookie_consent";
function CookieConsent() {
	const { t } = useTranslation();
	const [visible, setVisible] = useState(false);
	useEffect(() => {
		try {
			setVisible(!localStorage.getItem(STORAGE_KEY));
		} catch {}
	}, []);
	if (!visible) return null;
	const accept = () => {
		localStorage.setItem(STORAGE_KEY, "accepted");
		setVisible(false);
	};
	const reject = () => {
		localStorage.setItem(STORAGE_KEY, "rejected");
		setVisible(false);
	};
	return /* @__PURE__ */ jsx("div", {
		className: "fixed bottom-0 inset-x-0 z-50 animate-fade-up",
		children: /* @__PURE__ */ jsx("div", {
			className: "glass-dark border-t border-white/10 backdrop-blur-xl",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-5xl mx-auto px-5 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-start gap-3 flex-1",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-xl shrink-0 mt-0.5",
						children: "🍪"
					}), /* @__PURE__ */ jsxs("p", {
						className: "text-[12px] text-neutral-300 leading-relaxed",
						children: [
							t("gdpr.banner_text"),
							" ",
							/* @__PURE__ */ jsx("a", {
								href: "/privacy",
								className: "text-white underline underline-offset-2 hover:no-underline",
								children: t("gdpr.privacy_policy")
							})
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex gap-2 shrink-0",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: reject,
						className: "h-9 px-4 text-[12px] font-medium rounded-xl border border-white/15\n                         text-neutral-400 hover:text-white hover:border-white/30 transition-all",
						children: t("gdpr.reject")
					}), /* @__PURE__ */ jsx("button", {
						onClick: accept,
						className: "h-9 px-4 text-[12px] font-semibold rounded-xl bg-orange text-white\n                         shimmer shadow-primary-black active:scale-[0.97] transition-transform",
						children: t("gdpr.accept")
					})]
				})]
			})
		})
	});
}
//#endregion
//#region app/routes/lang-layout.tsx
var lang_layout_exports = /* @__PURE__ */ __exportAll({ default: () => lang_layout_default });
var SUPPORTED_LANGS = [
	"ar",
	"en",
	"fr"
];
/**
* Chrome shared by every page.
*
* The old LangLayout carried a PAGE_SLUGS list to tell `/browse` apart from
* `/ar`, because both matched a single `/:lang?` route. routes.ts now registers
* the un-prefixed and `/:lang`-prefixed trees explicitly, so that ambiguity —
* and the hardcoded slug list that had to be updated on every new page — is
* gone.
*/
var lang_layout_default = UNSAFE_withComponentProps(function LangLayout() {
	const { lang } = useParams();
	const { i18n } = useTranslation();
	const target = lang && SUPPORTED_LANGS.includes(lang) ? lang : "ar";
	useEffect(() => {
		if (i18n.language !== target) i18n.changeLanguage(target);
	}, [target, i18n]);
	if (lang && !SUPPORTED_LANGS.includes(lang)) return /* @__PURE__ */ jsx(Navigate, {
		to: "/",
		replace: true
	});
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-white flex flex-col",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx("main", {
				className: "flex-1",
				children: /* @__PURE__ */ jsx(Outlet, {})
			}),
			/* @__PURE__ */ jsx(Footer, {}),
			/* @__PURE__ */ jsx(CompareBasket, {}),
			/* @__PURE__ */ jsx(CookieConsent, {})
		]
	});
});
//#endregion
//#region app/lib/seo.ts
var SITE_URL$1 = "https://ourscent.com";
var SITE_NAME = "OurScent — عطرنا";
var LOCALE = {
	ar: "ar_SA",
	en: "en_US",
	fr: "fr_FR"
};
/**
* Builds React Router meta descriptors.
*
* Replaces react-helmet-async, which was rendering without a HelmetProvider —
* it only appeared to work because React 19 hoists <title>/<meta>/<link> to
* <head> natively. On React 18 that crashes in HelmetDispatcher.init. Route
* `meta` exports are handled by <Meta /> in root.tsx, so the tags land in
* <head> on any React version.
*/
function buildMeta(input) {
	const lang = input.lang ?? "ar";
	const title = input.title.includes("OurScent") ? input.title : `${input.title} — OurScent`;
	const image = input.image ?? `https://ourscent.com/og-default.jpg`;
	const out = [
		{ title },
		{
			property: "og:site_name",
			content: SITE_NAME
		},
		{
			property: "og:type",
			content: input.type ?? "website"
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:image",
			content: image
		},
		{
			property: "og:locale",
			content: LOCALE[lang] ?? "ar_SA"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		},
		{
			name: "twitter:title",
			content: title
		},
		{
			name: "twitter:image",
			content: image
		}
	];
	if (input.description) out.push({
		name: "description",
		content: input.description
	}, {
		property: "og:description",
		content: input.description
	}, {
		name: "twitter:description",
		content: input.description
	});
	if (input.robots) out.push({
		name: "robots",
		content: input.robots
	});
	if (input.canonical) {
		out.push({
			tagName: "link",
			rel: "canonical",
			href: input.canonical
		});
		out.push({
			property: "og:url",
			content: input.canonical
		});
	}
	if (input.hrefLangPath !== void 0) {
		const p = input.hrefLangPath;
		out.push({
			tagName: "link",
			rel: "alternate",
			hrefLang: "ar",
			href: `${SITE_URL$1}${p || "/"}`
		}, {
			tagName: "link",
			rel: "alternate",
			hrefLang: "en",
			href: `${SITE_URL$1}/en${p}`
		}, {
			tagName: "link",
			rel: "alternate",
			hrefLang: "fr",
			href: `${SITE_URL$1}/fr${p}`
		}, {
			tagName: "link",
			rel: "alternate",
			hrefLang: "x-default",
			href: `${SITE_URL$1}${p || "/"}`
		});
	}
	for (const s of input.schema ? Array.isArray(input.schema) ? input.schema : [input.schema] : []) out.push({ "script:ld+json": s });
	return out;
}
//#endregion
//#region app/lib/corpus.server.ts
/**
* Server-only access to the perfume corpus.
*
* The deployed site is a single Node process with no backend: the content
* service cannot run in production because it reads the 5.1 GB corpus from
* local disk. So the fields the pages actually render are exported to
* snapshot/*.json at build time (services/content/scripts/export_snapshot.py)
* and read from disk here — ~17 MB, parsed once and cached in module scope.
*
* The scraped `description` prose is not in the snapshot at all, so third-party
* copy cannot reach the deployed site.
*
* The `.server.ts` suffix keeps this out of the client bundle.
*/
var SNAPSHOT_DIR = process.env.SNAPSHOT_DIR ?? path.resolve("./snapshot");
var cache = {};
function read(file, fallback) {
	try {
		return JSON.parse(readFileSync(path.join(SNAPSHOT_DIR, file), "utf8"));
	} catch {
		return fallback;
	}
}
var catalog = () => cache.catalog ??= read("catalog.json", []);
var aggregates = () => cache.agg ??= read("aggregates.json", {
	notes: [],
	accords: [],
	brands: []
});
var details = () => cache.details ??= read("details.json", {});
/** Catalog rows keyed by folder, so detail-driven scoring can reach card fields. */
var byFolder = () => cache.byFolder ??= new Map(catalog().map((r) => [r.folder, r]));
/**
* note (lowercased) -> folders containing it, across all three tiers.
*
* catalog.json carries accords but not notes, so note filtering has to come off
* details.json. Built once and cached — ~17.5k records is a few hundred ms of
* work we do not want to repeat per request.
*/
var noteIndex = () => cache.noteIndex ??= (() => {
	const index = /* @__PURE__ */ new Map();
	for (const d of Object.values(details())) for (const note of [
		...d.notes_top,
		...d.notes_heart,
		...d.notes_base
	]) {
		const key = note.toLowerCase();
		let set = index.get(key);
		if (!set) index.set(key, set = /* @__PURE__ */ new Set());
		set.add(d.folder);
	}
	return index;
})();
/** perfumer (lowercased) -> folders they composed. Same rationale as noteIndex. */
var perfumerIndex = () => cache.perfumerIndex ??= (() => {
	const index = /* @__PURE__ */ new Map();
	for (const d of Object.values(details())) for (const person of d.perfumers) {
		const key = person.toLowerCase();
		let set = index.get(key);
		if (!set) index.set(key, set = /* @__PURE__ */ new Set());
		set.add(d.folder);
	}
	return index;
})();
/**
* Per-folder similarity vectors, precomputed once.
*
* Accords arrive from the source ordered strongest-first, so an accord's rank
* is the only prominence signal in the snapshot. Weight it as 1/(1+rank) —
* sharing a lead accord counts for much more than sharing a trailing one.
*
* Built eagerly for every folder rather than per comparison: scoring one
* fragrance against the corpus otherwise allocated ~17.5k throwaway Maps.
*/
var vectors = () => cache.vectors ??= new Map(Object.values(details()).map((d) => [d.folder, {
	accords: new Map(d.accords.map((a, i) => [a, 1 / (1 + i)])),
	notes: new Set([
		...d.notes_top,
		...d.notes_heart,
		...d.notes_base
	].map((n) => n.toLowerCase()))
}]));
/** Strip the ranking-only fields so cards get a stable, minimal shape. */
function toCard(r) {
	return {
		folder: r.folder,
		name: r.name,
		brand: r.brand,
		rating: r.rating,
		oud: r.oud,
		thumbnail_url: r.thumbnail_url ?? null
	};
}
function listPerfumes(params) {
	const perPage = params.perPage ?? 24;
	const page = Math.max(1, params.page ?? 1);
	let rows = catalog();
	if (params.search) {
		const q = params.search.toLowerCase();
		rows = rows.filter((r) => r.name?.toLowerCase().includes(q) || r.brand?.toLowerCase().includes(q));
	}
	if (params.brand) {
		const b = params.brand.toLowerCase();
		rows = rows.filter((r) => (r.brand ?? "").toLowerCase() === b);
	}
	if (params.accord) {
		const a = params.accord.toLowerCase();
		rows = rows.filter((r) => (r.accords ?? []).includes(a));
	}
	if (params.note) {
		const folders = noteIndex().get(params.note.toLowerCase());
		rows = folders ? rows.filter((r) => folders.has(r.folder)) : [];
	}
	if (params.perfumer) {
		const folders = perfumerIndex().get(params.perfumer.toLowerCase());
		rows = folders ? rows.filter((r) => folders.has(r.folder)) : [];
	}
	if (params.gender) {
		const g = params.gender.toLowerCase();
		rows = rows.filter((r) => (r.gender ?? "").toLowerCase() === g);
	}
	if (params.oud !== void 0) rows = rows.filter((r) => r.oud === params.oud);
	if (params.minRating) rows = rows.filter((r) => (r.rating ?? 0) >= params.minRating);
	if (params.minVotes) rows = rows.filter((r) => r.votes >= params.minVotes);
	const sort = params.sort ?? "popular";
	const sorted = [...rows];
	if (sort === "popular") sorted.sort((a, b) => b.votes - a.votes || (b.rating ?? 0) - (a.rating ?? 0));
	else if (sort === "rating") sorted.sort((a, b) => (a.rating === null ? 1 : 0) - (b.rating === null ? 1 : 0) || (b.rating ?? 0) - (a.rating ?? 0) || b.votes - a.votes);
	else if (sort === "name") sorted.sort((a, b) => (a.name ?? "").localeCompare(b.name ?? ""));
	else if (sort === "brand") sorted.sort((a, b) => (a.brand ?? "").localeCompare(b.brand ?? "") || (a.name ?? "").localeCompare(b.name ?? ""));
	else if (sort === "year") sorted.sort((a, b) => (a.year === null ? 1 : 0) - (b.year === null ? 1 : 0) || (b.year ?? 0) - (a.year ?? 0));
	const start = (page - 1) * perPage;
	return Promise.resolve({
		items: sorted.slice(start, start + perPage).map(toCard),
		total: sorted.length
	});
}
async function topRated(limit = 12, minRating = 4.3) {
	return (await listPerfumes({
		perPage: limit,
		sort: "popular",
		minRating
	})).items;
}
async function oudPerfumes(limit = 12) {
	return (await listPerfumes({
		perPage: limit,
		sort: "popular",
		oud: true
	})).items;
}
async function searchPerfumes(query, limit = 40) {
	return (await listPerfumes({
		search: query,
		perPage: limit,
		sort: "popular"
	})).items;
}
function brands() {
	return Promise.resolve(aggregates().brands.map((b) => b.name));
}
function brandTerms(limit = 500) {
	return Promise.resolve(aggregates().brands.slice(0, limit));
}
function noteTerms(limit = 200) {
	return Promise.resolve(aggregates().notes.slice(0, limit));
}
function accordTerms(limit = 100) {
	return Promise.resolve(aggregates().accords.slice(0, limit));
}
function stats() {
	return Promise.resolve({
		total_perfumes: catalog().length,
		brands: aggregates().brands.length
	});
}
/** Null means the perfume genuinely does not exist — callers turn that into a 404. */
function perfumeDetail(folder) {
	return Promise.resolve(details()[folder] ?? null);
}
/**
* Content-based neighbours: rank-weighted accord overlap plus note overlap.
*
* The previous version scored same-brand at 3 and each shared accord at 1, so
* the rail was effectively "more from this brand" — a brand match outranked
* three shared accords. Brand is now a small tiebreak, which is what the rail
* is actually for: fragrances that smell alike, whoever made them.
*
* Deliberately content-only. A behavioural "people who liked this" rail needs
* collection and rating data from OurScent's own members, which does not exist
* yet — inheriting it from the source corpus would misattribute it.
*/
async function similarPerfumes(folder, limit = 8) {
	const source = details()[folder];
	if (!source) return [];
	const rows = byFolder();
	const vecs = vectors();
	const self = vecs.get(folder);
	if (!self) return [];
	const scored = [];
	for (const [candidateFolder, vec] of vecs) {
		if (candidateFolder === folder) continue;
		const row = rows.get(candidateFolder);
		if (!row) continue;
		let accordScore = 0;
		for (const [accord, weight] of vec.accords) {
			const sourceWeight = self.accords.get(accord);
			if (sourceWeight) accordScore += weight * sourceWeight;
		}
		let shared = 0;
		for (const note of vec.notes) if (self.notes.has(note)) shared++;
		const magnitude = Math.sqrt(self.notes.size * vec.notes.size);
		const noteScore = magnitude ? shared / magnitude : 0;
		const score = accordScore * 3 + noteScore + (row.brand === source.brand ? .15 : 0);
		if (score > 0) scored.push({
			row,
			score
		});
	}
	scored.sort((a, b) => b.score - a.score || b.row.votes - a.row.votes);
	return scored.slice(0, limit).map((x) => toCard(x.row));
}
/** Resolve seed folders to cards, dropping any that are not in the corpus. */
function cardsForFolders(folders) {
	const rows = byFolder();
	return Promise.resolve(folders.map((f) => rows.get(f)).filter((r) => !!r).map(toCard));
}
/**
* Multi-seed content recommender: name a few fragrances you like, get the ones
* sitting in the same olfactory cluster.
*
* Seeds are merged into one averaged profile rather than scored separately, so
* a note or accord shared by every seed outweighs one that appears in a single
* seed — which is what makes adding a third seed sharpen the result instead of
* just widening it.
*
* Content-only, like similarPerfumes: no collection or co-occurrence data
* exists for OurScent members yet.
*/
async function findBySeeds(folders, limit = 24) {
	const vecs = vectors();
	const seeds = folders.map((f) => vecs.get(f)).filter((v) => !!v);
	if (!seeds.length) return [];
	const profileAccords = /* @__PURE__ */ new Map();
	const profileNotes = /* @__PURE__ */ new Map();
	for (const seed of seeds) {
		for (const [accord, weight] of seed.accords) profileAccords.set(accord, (profileAccords.get(accord) ?? 0) + weight / seeds.length);
		for (const note of seed.notes) profileNotes.set(note, (profileNotes.get(note) ?? 0) + 1 / seeds.length);
	}
	const exclude = new Set(folders);
	const rows = byFolder();
	const scored = [];
	for (const [candidateFolder, vec] of vecs) {
		if (exclude.has(candidateFolder)) continue;
		const row = rows.get(candidateFolder);
		if (!row) continue;
		let accordScore = 0;
		const sharedAccords = [];
		for (const [accord, weight] of vec.accords) {
			const profileWeight = profileAccords.get(accord);
			if (profileWeight) {
				accordScore += weight * profileWeight;
				sharedAccords.push({
					name: accord,
					weight: profileWeight
				});
			}
		}
		let rawNoteScore = 0;
		const sharedNotes = [];
		for (const note of vec.notes) {
			const profileWeight = profileNotes.get(note);
			if (profileWeight) {
				rawNoteScore += profileWeight;
				sharedNotes.push({
					name: note,
					weight: profileWeight
				});
			}
		}
		const magnitude = Math.sqrt(profileNotes.size * vec.notes.size);
		const noteScore = magnitude ? rawNoteScore / magnitude : 0;
		const score = accordScore * 3 + noteScore;
		if (score <= 0) continue;
		sharedAccords.sort((a, b) => b.weight - a.weight);
		sharedNotes.sort((a, b) => b.weight - a.weight);
		scored.push({
			row,
			score,
			accords: sharedAccords.map((a) => a.name),
			notes: sharedNotes.map((n) => n.name)
		});
	}
	scored.sort((a, b) => b.score - a.score || b.row.votes - a.row.votes);
	return scored.slice(0, limit).map((x) => ({
		perfume: toCard(x.row),
		sharedAccords: x.accords.slice(0, 4),
		sharedNotes: x.notes.slice(0, 5)
	}));
}
//#endregion
//#region src/components/SEO.tsx
/**
* DEPRECATED — renders nothing.
*
* This used to wrap react-helmet-async. Helmet was being rendered without a
* HelmetProvider (the provider went away with main.tsx during the SSR
* migration) and only appeared to work because React 19 hoists
* <title>/<meta>/<link> into <head> natively. On React 18 the same code throws
* "Cannot read properties of undefined (reading 'add')" in
* HelmetDispatcher.init.
*
* Metadata now comes from React Router `meta` exports on the route modules,
* rendered by <Meta /> in app/root.tsx — which works on any React version and
* also carries JSON-LD via the "script:ld+json" descriptor. See app/lib/seo.ts.
*
* Kept as a no-op so screens not yet converted still compile; each should move
* its metadata to its route module's `meta` export and drop this import.
*/
function SEO(_props) {
	return null;
}
var SITE_URL = "https://ourscent.com";
//#endregion
//#region src/pages/HomePage.tsx
/** Locale-aware href: Arabic is served from the root, other locales are prefixed. */
function useHref(lang) {
	const prefix = lang === "ar" ? "" : `/${lang}`;
	return (path) => `${prefix}${path}`;
}
function Rating$1({ value }) {
	if (!value) return null;
	return /* @__PURE__ */ jsxs("span", {
		className: "inline-flex items-center gap-1 text-xs font-medium text-amber-700",
		children: [/* @__PURE__ */ jsx("span", {
			"aria-hidden": true,
			children: "★"
		}), value.toFixed(1)]
	});
}
function PerfumeTile({ perfume, href }) {
	const [failed, setFailed] = useState(false);
	return /* @__PURE__ */ jsxs(Link, {
		to: href,
		className: "group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative aspect-[3/4] overflow-hidden bg-neutral-100",
			children: [perfume.thumbnail_url && !failed ? /* @__PURE__ */ jsx("img", {
				src: perfume.thumbnail_url,
				alt: perfume.name,
				loading: "lazy",
				className: "h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105",
				onError: () => setFailed(true)
			}) : /* @__PURE__ */ jsx("div", {
				className: "flex h-full w-full items-center justify-center text-3xl text-neutral-300",
				"aria-hidden": true,
				children: "🫙"
			}), perfume.oud && /* @__PURE__ */ jsx("span", {
				className: "absolute top-2 end-2 rounded-full bg-amber-900/90 px-2 py-0.5 text-[10px] font-medium text-amber-50",
				children: "عود"
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col gap-1 p-3",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-[11px] uppercase tracking-wide text-neutral-500",
					children: perfume.brand
				}),
				/* @__PURE__ */ jsx("p", {
					className: "line-clamp-2 flex-1 text-sm font-medium leading-snug text-neutral-900",
					children: perfume.name
				}),
				/* @__PURE__ */ jsx(Rating$1, { value: perfume.rating })
			]
		})]
	});
}
function SectionHeader({ title, subtitle, href, seeAll }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-5 flex items-end justify-between gap-4",
		children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
			className: "text-xl font-bold text-neutral-900 sm:text-2xl",
			children: title
		}), /* @__PURE__ */ jsx("p", {
			className: "mt-1 text-sm text-neutral-500",
			children: subtitle
		})] }), /* @__PURE__ */ jsx(Link, {
			to: href,
			className: "shrink-0 text-sm font-medium text-neutral-700 underline-offset-4 hover:underline",
			children: seeAll
		})]
	});
}
function HomePage() {
	const { lang, featured, oud, brands, brandCount, counts } = useLoaderData();
	const { t } = useTranslation();
	const href = useHref(lang);
	const navigate = useNavigate();
	const [query, setQuery] = useState("");
	const detail = (p) => href(`/fragrance/${encodeURIComponent(p.folder)}`);
	function onSearch(e) {
		e.preventDefault();
		const q = query.trim();
		if (q) navigate(`${href("/browse")}?search=${encodeURIComponent(q)}`);
	}
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx(SEO, {
			title: t("seo.home_title"),
			description: t("seo.home_desc"),
			canonical: `${SITE_URL}${lang === "ar" ? "/" : `/${lang}`}`,
			lang,
			hrefLangs: [
				{
					lang: "ar",
					href: `${SITE_URL}/`
				},
				{
					lang: "en",
					href: `${SITE_URL}/en`
				},
				{
					lang: "fr",
					href: `${SITE_URL}/fr`
				}
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "border-b border-neutral-200 bg-neutral-50 px-4 py-14 sm:py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-3xl text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-xs font-medium uppercase tracking-[0.2em] text-neutral-500",
						children: t("home.eyebrow", "موسوعة عطرية عربية شاملة")
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-3 text-3xl font-black leading-tight text-neutral-900 sm:text-5xl",
						children: t("app.title", "عطرنا")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-4 max-w-xl text-base text-neutral-600 sm:text-lg",
						children: t("app.tagline", "اكتشف، قارن، وقيّم آلاف العطور العربية والعالمية")
					}),
					/* @__PURE__ */ jsxs("form", {
						onSubmit: onSearch,
						className: "mx-auto mt-8 flex max-w-xl gap-2",
						role: "search",
						children: [
							/* @__PURE__ */ jsx("label", {
								htmlFor: "home-search",
								className: "sr-only",
								children: t("home.search_label", "ابحث عن عطر أو ماركة")
							}),
							/* @__PURE__ */ jsx("input", {
								id: "home-search",
								type: "search",
								value: query,
								onChange: (e) => setQuery(e.target.value),
								placeholder: t("home.search_placeholder", "ابحث عن عطر أو ماركة…"),
								className: "h-12 flex-1 rounded-lg border border-neutral-300 bg-white px-4 text-base text-neutral-900 outline-none placeholder:text-neutral-400 focus:border-neutral-900"
							}),
							/* @__PURE__ */ jsx("button", {
								type: "submit",
								className: "h-12 shrink-0 rounded-lg bg-neutral-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-neutral-700",
								children: t("common.search", "بحث")
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-neutral-600",
						children: [
							/* @__PURE__ */ jsxs("span", { children: [
								/* @__PURE__ */ jsx("strong", {
									className: "text-neutral-900",
									children: counts.total_perfumes.toLocaleString("ar-EG")
								}),
								" ",
								t("home.stat_perfumes", "عطر")
							] }),
							/* @__PURE__ */ jsxs("span", { children: [
								/* @__PURE__ */ jsx("strong", {
									className: "text-neutral-900",
									children: brandCount.toLocaleString("ar-EG")
								}),
								" ",
								t("home.stat_brands", "ماركة")
							] }),
							/* @__PURE__ */ jsxs("span", { children: [
								/* @__PURE__ */ jsx("strong", {
									className: "text-neutral-900",
									children: "3"
								}),
								" ",
								t("home.stat_langs", "لغات")
							] })
						]
					})
				]
			})
		}),
		featured.length > 0 && /* @__PURE__ */ jsx("section", {
			className: "px-4 py-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-6xl",
				children: [/* @__PURE__ */ jsx(SectionHeader, {
					title: t("home.trending_title", "الأعلى تقييماً"),
					subtitle: t("home.trending_sub", "عطور نالت أعلى التقييمات في المجتمع"),
					href: href("/browse"),
					seeAll: t("common.see_all", "عرض الكل")
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6",
					children: featured.map((p) => /* @__PURE__ */ jsx(PerfumeTile, {
						perfume: p,
						href: detail(p)
					}, p.folder))
				})]
			})
		}),
		oud.length > 0 && /* @__PURE__ */ jsx("section", {
			className: "bg-amber-50/60 px-4 py-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-6xl",
				children: [/* @__PURE__ */ jsx(SectionHeader, {
					title: t("home.oud_title", "عطور العود"),
					subtitle: t("home.oud_sub", "من الدهن الخالص إلى المخلّطات الشرقية"),
					href: `${href("/browse")}?oud=true`,
					seeAll: t("common.see_all", "عرض الكل")
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 gap-4 sm:grid-cols-4",
					children: oud.map((p) => /* @__PURE__ */ jsx(PerfumeTile, {
						perfume: p,
						href: detail(p)
					}, p.folder))
				})]
			})
		}),
		brands.length > 0 && /* @__PURE__ */ jsx("section", {
			className: "px-4 py-12",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-6xl",
				children: [/* @__PURE__ */ jsx(SectionHeader, {
					title: t("home.brands_title", "العلامات التجارية"),
					subtitle: t("home.brands_sub", "من العطور العربية الأصيلة إلى العالمية الفاخرة"),
					href: href("/brands"),
					seeAll: t("common.see_all", "عرض الكل")
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-2",
					children: brands.map((b) => /* @__PURE__ */ jsx(Link, {
						to: `${href("/brand")}/${encodeURIComponent(b)}`,
						className: "rounded-full border border-neutral-200 bg-white px-4 py-2 text-sm text-neutral-700 transition-colors hover:border-neutral-900 hover:text-neutral-900",
						children: b
					}, b))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "border-t border-neutral-200 bg-neutral-900 px-4 py-14",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-4xl text-center",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-2xl font-bold text-white sm:text-3xl",
						children: t("home.glossary_title", "موسوعة المكوّنات العطرية")
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mx-auto mt-3 max-w-2xl text-neutral-300",
						children: t("home.glossary_sub", "تعرّف على المكوّنات والعائلات العطرية — من العود والمسك إلى الحمضيات والزهور — واكتشف العطور التي تحتويها.")
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-7 flex flex-wrap justify-center gap-3",
						children: [/* @__PURE__ */ jsx(Link, {
							to: href("/notes"),
							className: "rounded-lg bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-200",
							children: t("home.explore_notes", "تصفّح المكوّنات")
						}), /* @__PURE__ */ jsx(Link, {
							to: href("/discover/accords"),
							className: "rounded-lg border border-neutral-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white",
							children: t("home.explore_accords", "العائلات العطرية")
						})]
					})
				]
			})
		})
	] });
}
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	loader: () => loader$8,
	meta: () => meta$8
});
async function loader$8({ params }) {
	const lang = [
		"ar",
		"en",
		"fr"
	].includes(params.lang ?? "") ? params.lang : "ar";
	const [featured, oud, allBrands, counts] = await Promise.all([
		topRated(12),
		oudPerfumes(8),
		brands(),
		stats()
	]);
	return {
		lang,
		featured,
		oud,
		brands: allBrands.slice(0, 24),
		brandCount: allBrands.length,
		counts
	};
}
var home_default = UNSAFE_withComponentProps(HomePage);
function meta$8({ data }) {
	const lang = data?.lang ?? "ar";
	return buildMeta({
		title: "عطرنا | اكتشف عطرك المثالي",
		description: "موسوعة العطور العربية — تصفّح آلاف العطور، قارن بينها، واكتشف المكوّنات والعائلات العطرية.",
		canonical: `${SITE_URL$1}${lang === "ar" ? "/" : `/${lang}`}`,
		lang,
		hrefLangPath: ""
	});
}
//#endregion
//#region src/components/CorpusTile.tsx
function Rating({ value }) {
	if (!value) return null;
	return /* @__PURE__ */ jsxs("span", {
		className: "inline-flex items-center gap-1 text-xs font-medium text-amber-700",
		children: [/* @__PURE__ */ jsx("span", {
			"aria-hidden": true,
			children: "★"
		}), value.toFixed(1)]
	});
}
/**
* Shared perfume card. Extracted so the home, brand, trending and search
* screens render corpus records identically instead of drifting apart.
*/
function CorpusTile({ perfume, href }) {
	const [failed, setFailed] = useState(false);
	return /* @__PURE__ */ jsxs(Link, {
		to: href,
		className: "group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "relative aspect-[3/4] overflow-hidden bg-neutral-100",
			children: [perfume.thumbnail_url && !failed ? /* @__PURE__ */ jsx("img", {
				src: perfume.thumbnail_url,
				alt: perfume.name,
				loading: "lazy",
				className: "h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105",
				onError: () => setFailed(true)
			}) : /* @__PURE__ */ jsx("div", {
				className: "flex h-full w-full items-center justify-center text-3xl text-neutral-300",
				"aria-hidden": true,
				children: "🫙"
			}), perfume.oud && /* @__PURE__ */ jsx("span", {
				className: "absolute top-2 end-2 rounded-full bg-amber-900/90 px-2 py-0.5 text-[10px] font-medium text-amber-50",
				children: "عود"
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "flex flex-1 flex-col gap-1 p-3",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-[11px] uppercase tracking-wide text-neutral-500",
					children: perfume.brand
				}),
				/* @__PURE__ */ jsx("p", {
					className: "line-clamp-2 flex-1 text-sm font-medium leading-snug text-neutral-900",
					children: perfume.name
				}),
				/* @__PURE__ */ jsx(Rating, { value: perfume.rating })
			]
		})]
	});
}
//#endregion
//#region src/components/Pagination.tsx
/**
* Page navigation rendered as real links.
*
* Deliberately anchors, not buttons: crawlers follow hrefs, and on a site whose
* whole value is 18k deep pages, paginated listings are a primary discovery
* path. Callers should pair this with `robots: noindex,follow` on page > 1 so
* the pages get crawled without competing with page 1 in the index.
*/
function Pagination({ page, total, perPage, hrefFor, labels }) {
	const pages = Math.max(1, Math.ceil(total / perPage));
	if (pages <= 1) return null;
	const prev = labels?.prev ?? "السابق";
	const next = labels?.next ?? "التالي";
	const of = labels?.of ?? "من";
	const window = [];
	const from = Math.max(1, page - 2);
	const to = Math.min(pages, page + 2);
	for (let i = from; i <= to; i++) window.push(i);
	const base = "inline-flex h-10 min-w-10 items-center justify-center rounded-lg border px-3 text-sm transition-colors";
	const idle = "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-900";
	const current = "border-neutral-900 bg-neutral-900 text-white";
	return /* @__PURE__ */ jsxs("nav", {
		className: "mt-10 flex flex-wrap items-center justify-center gap-2",
		"aria-label": "ترقيم الصفحات",
		children: [
			page > 1 && /* @__PURE__ */ jsx(Link, {
				to: hrefFor(page - 1),
				rel: "prev",
				className: `${base} ${idle}`,
				children: prev
			}),
			from > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(Link, {
				to: hrefFor(1),
				className: `${base} ${idle}`,
				children: "1"
			}), from > 2 && /* @__PURE__ */ jsx("span", {
				className: "px-1 text-neutral-400",
				children: "…"
			})] }),
			window.map((p) => /* @__PURE__ */ jsx(Link, {
				to: hrefFor(p),
				"aria-current": p === page ? "page" : void 0,
				className: `${base} ${p === page ? current : idle}`,
				children: p
			}, p)),
			to < pages && /* @__PURE__ */ jsxs(Fragment, { children: [to < pages - 1 && /* @__PURE__ */ jsx("span", {
				className: "px-1 text-neutral-400",
				children: "…"
			}), /* @__PURE__ */ jsx(Link, {
				to: hrefFor(pages),
				className: `${base} ${idle}`,
				children: pages
			})] }),
			page < pages && /* @__PURE__ */ jsx(Link, {
				to: hrefFor(page + 1),
				rel: "next",
				className: `${base} ${idle}`,
				children: next
			}),
			/* @__PURE__ */ jsxs("span", {
				className: "ms-2 w-full text-center text-xs text-neutral-500 sm:w-auto",
				children: [
					page,
					" ",
					of,
					" ",
					pages.toLocaleString("ar-EG")
				]
			})
		]
	});
}
//#endregion
//#region src/pages/BrowsePage.tsx
function BrowsePage() {
	const { lang, perfumes, total, page, perPage, sort, filters, accords } = useLoaderData();
	const { t } = useTranslation();
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const base = `${prefix}/browse`;
	/** Rebuild the URL with one facet changed, always resetting to page 1. */
	const urlWith = (patch, keepPage = false) => {
		const qs = new URLSearchParams();
		const merged = {
			search: filters.search,
			accord: filters.accord,
			note: filters.note,
			perfumer: filters.perfumer,
			gender: filters.gender,
			oud: filters.oud ? "true" : void 0,
			sort: sort !== "popular" ? sort : void 0,
			...patch
		};
		for (const [k, v] of Object.entries(merged)) if (v) qs.set(k, String(v));
		if (keepPage && page > 1) qs.set("page", String(page));
		const s = qs.toString();
		return s ? `${base}?${s}` : base;
	};
	const hrefFor = (p) => {
		const url = urlWith({});
		if (p === 1) return url;
		return url.includes("?") ? `${url}&page=${p}` : `${url}?page=${p}`;
	};
	const activeFacets = [
		filters.search,
		filters.accord,
		filters.note,
		filters.perfumer,
		filters.gender,
		filters.oud
	].filter(Boolean).length;
	const heading = filters.perfumer ? `${t("browse.perfumer_heading", "عطور من تأليف")} ${filters.perfumer}` : filters.note ? `${t("browse.note_heading", "عطور تحتوي")} ${filters.note}` : filters.accord ? `${t("browse.accord_heading", "عطور")} ${filters.accord}` : filters.search ? `${t("common.search", "بحث")}: ${filters.search}` : t("nav.browse", "تصفّح العطور");
	const chip = (active) => `rounded-full border px-3 py-1.5 text-sm transition-colors ${active ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-900"}`;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: page > 1 ? `${heading} — ${t("common.page", "صفحة")} ${page}` : heading,
		description: t("seo.browse_desc", "تصفّح آلاف العطور العربية والعالمية حسب العائلة العطرية والمكوّنات."),
		canonical: `${SITE_URL}${hrefFor(page)}`,
		lang,
		robots: page > 1 || activeFacets > 1 ? "noindex,follow" : void 0
	}), /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "mb-6",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "text-2xl font-bold text-neutral-900 sm:text-3xl",
					children: heading
				}), /* @__PURE__ */ jsxs("p", {
					className: "mt-2 text-sm text-neutral-600",
					children: [
						total.toLocaleString("ar-EG"),
						" ",
						t("home.stat_perfumes", "عطر")
					]
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mb-6 flex flex-col gap-3",
				children: [
					[[
						"note",
						filters.note,
						t("fragrance.note", "المكوّن")
					], [
						"perfumer",
						filters.perfumer,
						t("fragrance.perfumers", "صانع العطر")
					]].map(([key, value, label]) => value ? /* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-xs font-semibold text-neutral-500",
							children: label
						}), /* @__PURE__ */ jsxs(Link, {
							to: urlWith({ [key]: void 0 }),
							className: "inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-3 py-1.5 text-sm text-white transition-colors hover:bg-neutral-700",
							children: [
								value,
								/* @__PURE__ */ jsx("span", {
									"aria-hidden": true,
									children: "×"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "sr-only",
									children: t("common.remove", "إزالة")
								})
							]
						})]
					}, key) : null),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-xs font-semibold text-neutral-500",
								children: t("home.explore_accords", "العائلات العطرية")
							}),
							/* @__PURE__ */ jsx(Link, {
								to: urlWith({ accord: void 0 }),
								className: chip(!filters.accord),
								children: t("common.all", "الكل")
							}),
							accords.slice(0, 14).map((a) => /* @__PURE__ */ jsx(Link, {
								to: urlWith({ accord: filters.accord === a.name ? void 0 : a.name }),
								className: chip(filters.accord === a.name),
								children: a.name
							}, a.name))
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-xs font-semibold text-neutral-500",
								children: t("browse.refine", "تصفية")
							}),
							/* @__PURE__ */ jsx(Link, {
								to: urlWith({ oud: filters.oud ? void 0 : "true" }),
								className: chip(!!filters.oud),
								children: t("fragrance.oud", "عود")
							}),
							[
								"Women",
								"Men",
								"Unisex"
							].map((g) => /* @__PURE__ */ jsx(Link, {
								to: urlWith({ gender: filters.gender === g ? void 0 : g }),
								className: chip(filters.gender === g),
								children: g
							}, g)),
							/* @__PURE__ */ jsx("span", {
								className: "mx-1 h-5 w-px bg-neutral-200",
								"aria-hidden": true
							}),
							[
								"popular",
								"rating",
								"name"
							].map((s) => /* @__PURE__ */ jsx(Link, {
								to: urlWith({ sort: s === "popular" ? void 0 : s }),
								className: chip(sort === s),
								children: s === "popular" ? t("sort.popular", "الأشهر") : s === "rating" ? t("sort.rating", "الأعلى تقييماً") : t("sort.name", "أبجدياً")
							}, s))
						]
					})
				]
			}),
			perfumes.length === 0 ? /* @__PURE__ */ jsx("p", {
				className: "py-16 text-center text-neutral-500",
				children: t("common.no_results", "لا توجد نتائج")
			}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
				children: perfumes.map((p) => /* @__PURE__ */ jsx(CorpusTile, {
					perfume: p,
					href: `${prefix}/fragrance/${encodeURIComponent(p.folder)}`
				}, p.folder))
			}), /* @__PURE__ */ jsx(Pagination, {
				page,
				total,
				perPage,
				hrefFor
			})] })
		]
	})] });
}
//#endregion
//#region app/routes/browse.tsx
var browse_exports = /* @__PURE__ */ __exportAll({
	default: () => browse_default,
	loader: () => loader$7,
	meta: () => meta$7
});
var PER_PAGE$2 = 24;
async function loader$7({ params, request }) {
	const lang = [
		"ar",
		"en",
		"fr"
	].includes(params.lang ?? "") ? params.lang : "ar";
	const q = new URL(request.url).searchParams;
	const filters = {
		search: q.get("search") ?? void 0,
		accord: q.get("accord") ?? void 0,
		note: q.get("note") ?? void 0,
		perfumer: q.get("perfumer") ?? void 0,
		gender: q.get("gender") ?? void 0,
		oud: q.get("oud") === "true" ? true : void 0
	};
	const page = Math.max(1, Number(q.get("page") ?? 1) || 1);
	const sort = q.get("sort") ?? "popular";
	const [result, accords] = await Promise.all([listPerfumes({
		...filters,
		page,
		perPage: PER_PAGE$2,
		sort,
		minVotes: sort === "rating" ? 100 : 0
	}), accordTerms(40)]);
	return {
		lang,
		perfumes: result.items,
		total: result.total,
		page,
		perPage: PER_PAGE$2,
		sort,
		filters,
		accords
	};
}
var browse_default = UNSAFE_withComponentProps(BrowsePage);
function meta$7({ data }) {
	const lang = data?.lang ?? "ar";
	const accord = data?.filters?.accord;
	const deep = (data?.page ?? 1) > 1;
	const facets = [
		data?.filters?.search,
		accord,
		data?.filters?.gender,
		data?.filters?.oud
	].filter(Boolean).length;
	return buildMeta({
		title: accord ? `عطور ${accord}` : "تصفّح العطور",
		description: "تصفّح آلاف العطور العربية والعالمية حسب العائلة العطرية والمكوّنات.",
		canonical: `${SITE_URL$1}${lang === "ar" ? "" : `/${lang}`}/browse`,
		lang,
		robots: deep || facets > 1 ? "noindex,follow" : void 0
	});
}
//#endregion
//#region src/pages/FragrancePage.tsx
/**
* Notes link into /browse?note=, not /note/:slug — the latter is served by the
* scent API, which the SSR deployment has no backend for. Browse reads the
* snapshot, so these links resolve on the deployed site.
*/
function NoteTier({ title, notes, prefix }) {
	if (!notes.length) return null;
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-2 sm:flex-row sm:items-baseline sm:gap-4",
		children: [/* @__PURE__ */ jsx("h3", {
			className: "w-28 shrink-0 text-sm font-semibold text-neutral-500",
			children: title
		}), /* @__PURE__ */ jsx("ul", {
			className: "flex flex-wrap gap-2",
			children: notes.map((note) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
				to: `${prefix}/browse?note=${encodeURIComponent(note)}`,
				className: "inline-block rounded-full border border-neutral-200 bg-white px-3 py-1 text-sm text-neutral-800 transition-colors hover:border-neutral-900 hover:bg-neutral-50",
				children: note
			}) }, note))
		})]
	});
}
/**
* Accords arrive ordered strongest-first and the snapshot carries no strength
* values, so the bar encodes rank alone. No percentage is shown, because we do
* not have one — inventing a number here would be fabricating data.
*/
function AccordStrengthBars({ accords, prefix }) {
	return /* @__PURE__ */ jsx("ul", {
		className: "flex flex-col gap-1.5",
		children: accords.map((accord, i) => {
			const width = 100 - i / Math.max(accords.length, 1) * 55;
			return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
				to: `${prefix}/browse?accord=${encodeURIComponent(accord)}`,
				className: "group flex items-center gap-3 rounded-md py-0.5",
				children: [/* @__PURE__ */ jsx("span", {
					className: "w-28 shrink-0 truncate text-sm text-neutral-700 group-hover:text-neutral-900",
					children: accord
				}), /* @__PURE__ */ jsx("span", {
					className: "h-2.5 flex-1 overflow-hidden rounded-full bg-neutral-100",
					children: /* @__PURE__ */ jsx("span", {
						className: "block h-full rounded-full bg-neutral-900 transition-opacity group-hover:opacity-80",
						style: { width: `${width}%` }
					})
				})]
			}) }, accord);
		})
	});
}
function FragrancePage() {
	const { lang, perfume, similar } = useLoaderData();
	const { t } = useTranslation();
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const numberLocale = lang === "ar" ? "ar-EG" : lang === "fr" ? "fr-FR" : "en-US";
	const [imgIndex, setImgIndex] = useState(0);
	const [failed, setFailed] = useState(false);
	const images = perfume.local_images ?? [];
	const hero = images[imgIndex];
	const canonical = `${SITE_URL}${prefix}/fragrance/${encodeURIComponent(perfume.folder)}`;
	const hasNotes = perfume.notes_top.length + perfume.notes_heart.length + perfume.notes_base.length > 0;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: `${perfume.name} — ${perfume.brand}`,
		description: t("seo.fragrance_desc", {
			name: perfume.name,
			brand: perfume.brand,
			defaultValue: `${perfume.name} من ${perfume.brand} — المكوّنات والعائلات العطرية والتقييمات في موسوعة عطرنا.`
		}),
		canonical,
		lang,
		ogType: "product",
		ogImage: hero,
		schema: [{
			"@context": "https://schema.org",
			"@type": "Product",
			name: perfume.name,
			brand: {
				"@type": "Brand",
				name: perfume.brand
			},
			category: "Fragrance",
			...hero ? { image: hero } : {},
			url: canonical
		}, {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: t("home.brands_title", "العلامات التجارية"),
					item: `${SITE_URL}${prefix}/brands`
				},
				{
					"@type": "ListItem",
					position: 2,
					name: perfume.brand,
					item: `${SITE_URL}${prefix}/brand/${encodeURIComponent(perfume.brand)}`
				},
				{
					"@type": "ListItem",
					position: 3,
					name: perfume.name,
					item: canonical
				}
			]
		}]
	}), /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl px-4 py-8",
		children: [
			/* @__PURE__ */ jsxs("nav", {
				className: "mb-6 text-sm text-neutral-500",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: `${prefix}/brands`,
						className: "underline-offset-4 hover:underline",
						children: t("home.brands_title", "العلامات التجارية")
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-2",
						"aria-hidden": true,
						children: "/"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: `${prefix}/brand/${encodeURIComponent(perfume.brand)}`,
						className: "underline-offset-4 hover:underline",
						children: perfume.brand
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "grid gap-8 lg:grid-cols-[minmax(0,380px)_1fr]",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("div", {
					className: "aspect-[3/4] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50",
					children: hero && !failed ? /* @__PURE__ */ jsx("img", {
						src: hero,
						alt: perfume.name,
						className: "h-full w-full object-contain p-6",
						onError: () => setFailed(true)
					}) : /* @__PURE__ */ jsx("div", {
						className: "flex h-full w-full items-center justify-center text-5xl text-neutral-300",
						"aria-hidden": true,
						children: "🫙"
					})
				}), images.length > 1 && /* @__PURE__ */ jsx("div", {
					className: "mt-3 flex gap-2",
					children: images.slice(0, 5).map((src, i) => /* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => {
							setImgIndex(i);
							setFailed(false);
						},
						"aria-label": `${t("fragrance.image", "صورة")} ${i + 1}`,
						className: `h-16 w-14 overflow-hidden rounded-lg border bg-white ${i === imgIndex ? "border-neutral-900" : "border-neutral-200"}`,
						children: /* @__PURE__ */ jsx("img", {
							src,
							alt: "",
							className: "h-full w-full object-contain p-1"
						})
					}, src))
				})] }), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx(Link, {
						to: `${prefix}/brand/${encodeURIComponent(perfume.brand)}`,
						className: "text-sm uppercase tracking-wide text-neutral-500 underline-offset-4 hover:text-neutral-900 hover:underline",
						children: perfume.brand
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-1 text-2xl font-bold text-neutral-900 sm:text-3xl",
						children: perfume.name
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-4 flex flex-wrap items-center gap-3",
						children: [
							perfume.rating ? /* @__PURE__ */ jsxs("span", {
								className: "inline-flex items-baseline gap-2 rounded-lg bg-amber-50 px-3 py-1.5",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-lg font-bold text-amber-800",
									children: perfume.rating.toFixed(2)
								}), /* @__PURE__ */ jsxs("span", {
									className: "text-xs text-amber-700",
									children: [
										perfume.votes.toLocaleString(numberLocale),
										" ",
										t("fragrance.votes", "تقييم")
									]
								})]
							}) : null,
							perfume.gender_official && /* @__PURE__ */ jsx(Link, {
								to: `${prefix}/browse?gender=${encodeURIComponent(perfume.gender_official)}`,
								className: "rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700 transition-colors hover:border-neutral-900",
								children: perfume.gender_official
							}),
							perfume.oud && /* @__PURE__ */ jsx(Link, {
								to: `${prefix}/browse?oud=true`,
								className: "rounded-full bg-amber-900 px-3 py-1 text-sm text-amber-50 transition-opacity hover:opacity-90",
								children: t("fragrance.oud", "يحتوي عود")
							}),
							perfume.is_alcohol_free && /* @__PURE__ */ jsx("span", {
								className: "rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-sm text-emerald-800",
								children: t("fragrance.alcohol_free", "خالٍ من الكحول")
							})
						]
					}),
					perfume.accords.length > 0 && /* @__PURE__ */ jsxs("section", {
						className: "mt-7",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "mb-3 text-base font-semibold text-neutral-900",
							children: t("fragrance.accords", "العائلات العطرية")
						}), /* @__PURE__ */ jsx(AccordStrengthBars, {
							accords: perfume.accords,
							prefix
						})]
					}),
					hasNotes && /* @__PURE__ */ jsxs("section", {
						className: "mt-7",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "mb-4 text-base font-semibold text-neutral-900",
							children: t("fragrance.pyramid", "هرم المكوّنات")
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col gap-4",
							children: [
								/* @__PURE__ */ jsx(NoteTier, {
									title: t("fragrance.notes_top", "المقدّمة"),
									notes: perfume.notes_top,
									prefix
								}),
								/* @__PURE__ */ jsx(NoteTier, {
									title: t("fragrance.notes_heart", "القلب"),
									notes: perfume.notes_heart,
									prefix
								}),
								/* @__PURE__ */ jsx(NoteTier, {
									title: t("fragrance.notes_base", "القاعدة"),
									notes: perfume.notes_base,
									prefix
								})
							]
						})]
					}),
					perfume.perfumers.length > 0 && /* @__PURE__ */ jsxs("section", {
						className: "mt-7",
						children: [/* @__PURE__ */ jsx("h2", {
							className: "mb-2 text-base font-semibold text-neutral-900",
							children: t("fragrance.perfumers", "صانعو العطر")
						}), /* @__PURE__ */ jsx("ul", {
							className: "flex flex-wrap gap-2",
							children: perfume.perfumers.map((person) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
								to: `${prefix}/browse?perfumer=${encodeURIComponent(person)}`,
								className: "rounded-lg border border-neutral-200 px-3 py-1.5 text-sm text-neutral-800 hover:border-neutral-900",
								children: person
							}) }, person))
						})]
					})
				] })]
			}),
			similar.length > 0 && /* @__PURE__ */ jsxs("section", {
				className: "mt-14",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "mb-5 text-xl font-bold text-neutral-900",
					children: t("fragrance.similar", "عطور مشابهة")
				}), /* @__PURE__ */ jsx("div", {
					className: "grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8",
					children: similar.map((p) => /* @__PURE__ */ jsx(CorpusTile, {
						perfume: p,
						href: `${prefix}/fragrance/${encodeURIComponent(p.folder)}`
					}, p.folder))
				})]
			})
		]
	})] });
}
//#endregion
//#region app/routes/fragrance.tsx
var fragrance_exports = /* @__PURE__ */ __exportAll({
	default: () => fragrance_default,
	loader: () => loader$6,
	meta: () => meta$6
});
async function loader$6({ params }) {
	const lang = [
		"ar",
		"en",
		"fr"
	].includes(params.lang ?? "") ? params.lang : "ar";
	const folder = decodeURIComponent(params.slug ?? "");
	const detail = await perfumeDetail(folder);
	if (!detail) throw data({ folder }, { status: 404 });
	const similar = await similarPerfumes(folder, 8);
	return {
		lang,
		perfume: {
			folder: detail.folder,
			name: detail.name,
			brand: detail.brand,
			rating: detail.rating,
			votes: detail.votes,
			oud: detail.oud,
			is_alcohol_free: detail.is_alcohol_free,
			gender_official: detail.gender_official,
			family_primary: detail.family_primary,
			perfumers: detail.perfumers,
			accords: detail.accords,
			notes_top: detail.notes_top,
			notes_heart: detail.notes_heart,
			notes_base: detail.notes_base,
			local_images: detail.local_images
		},
		similar
	};
}
var fragrance_default = UNSAFE_withComponentProps(FragrancePage);
function meta$6({ data }) {
	const lang = data?.lang ?? "ar";
	const p = data?.perfume;
	if (!p) return buildMeta({
		title: "عطر غير موجود",
		robots: "noindex,follow",
		lang
	});
	const canonical = `${SITE_URL$1}${lang === "ar" ? "" : `/${lang}`}/fragrance/${encodeURIComponent(p.folder)}`;
	return buildMeta({
		title: `${p.name} — ${p.brand}`,
		description: `${p.name} من ${p.brand} — المكوّنات والعائلات العطرية والتقييمات في موسوعة عطرنا.`,
		canonical,
		lang,
		type: "product",
		image: p.local_images?.[0],
		schema: [{
			"@context": "https://schema.org",
			"@type": "Product",
			name: p.name,
			brand: {
				"@type": "Brand",
				name: p.brand
			},
			category: "Fragrance",
			url: canonical
		}, {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [
				{
					"@type": "ListItem",
					position: 1,
					name: "العلامات التجارية",
					item: `${SITE_URL$1}/brands`
				},
				{
					"@type": "ListItem",
					position: 2,
					name: p.brand,
					item: `${SITE_URL$1}/brand/${encodeURIComponent(p.brand)}`
				},
				{
					"@type": "ListItem",
					position: 3,
					name: p.name,
					item: canonical
				}
			]
		}]
	});
}
//#endregion
//#region src/pages/BrandsPage.tsx
function BrandsPage() {
	const { lang, brands } = useLoaderData();
	const { t } = useTranslation();
	const [query, setQuery] = useState("");
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		return q ? brands.filter((b) => b.name.toLowerCase().includes(q)) : brands;
	}, [brands, query]);
	const totalPerfumes = useMemo(() => brands.reduce((sum, b) => sum + b.count, 0), [brands]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: t("seo.brands_title", "العلامات التجارية"),
		description: t("seo.brands_desc", "تصفح دور العطور العربية والعالمية في موسوعة عطرنا."),
		canonical: `${SITE_URL}${prefix}/brands`,
		lang
	}), /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [/* @__PURE__ */ jsxs("header", {
			className: "mb-8",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-2xl font-bold text-neutral-900 sm:text-3xl",
					children: t("home.brands_title", "العلامات التجارية")
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-2 text-sm text-neutral-600",
					children: [
						brands.length.toLocaleString("ar-EG"),
						" ",
						t("home.stat_brands", "ماركة"),
						" ·",
						" ",
						totalPerfumes.toLocaleString("ar-EG"),
						" ",
						t("home.stat_perfumes", "عطر")
					]
				}),
				/* @__PURE__ */ jsx("input", {
					type: "search",
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: t("brands.filter", "صفِّ العلامات…"),
					className: "mt-5 h-11 w-full max-w-sm rounded-lg border border-neutral-300 px-4 text-sm outline-none focus:border-neutral-900"
				})
			]
		}), filtered.length === 0 ? /* @__PURE__ */ jsx("p", {
			className: "py-16 text-center text-neutral-500",
			children: t("common.no_results", "لا توجد نتائج")
		}) : /* @__PURE__ */ jsx("ul", {
			className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
			children: filtered.map((brand) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
				to: `${prefix}/brand/${encodeURIComponent(brand.name)}`,
				className: "flex items-baseline justify-between gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-3 transition-colors hover:border-neutral-900",
				children: [/* @__PURE__ */ jsx("span", {
					className: "truncate text-sm font-medium text-neutral-900",
					children: brand.name
				}), /* @__PURE__ */ jsx("span", {
					className: "shrink-0 text-xs text-neutral-500",
					children: brand.count
				})]
			}) }, brand.name))
		})]
	})] });
}
//#endregion
//#region app/routes/brands.tsx
var brands_exports = /* @__PURE__ */ __exportAll({
	default: () => brands_default,
	loader: () => loader$5,
	meta: () => meta$5
});
async function loader$5({ params }) {
	return {
		lang: [
			"ar",
			"en",
			"fr"
		].includes(params.lang ?? "") ? params.lang : "ar",
		brands: await brandTerms(500)
	};
}
var brands_default = UNSAFE_withComponentProps(BrandsPage);
function meta$5({ data }) {
	const lang = data?.lang ?? "ar";
	return buildMeta({
		title: "العلامات التجارية",
		description: "تصفّح دور العطور العربية والعالمية في موسوعة عطرنا.",
		canonical: `${SITE_URL$1}${lang === "ar" ? "" : `/${lang}`}/brands`,
		lang,
		hrefLangPath: "/brands"
	});
}
//#endregion
//#region src/pages/BrandPage.tsx
function BrandPage() {
	const { lang, brand, perfumes, total, page, perPage, sort } = useLoaderData();
	const { t } = useTranslation();
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const base = `${prefix}/brand/${encodeURIComponent(brand)}`;
	const hrefFor = (p) => {
		const qs = new URLSearchParams();
		if (sort !== "popular") qs.set("sort", sort);
		if (p > 1) qs.set("page", String(p));
		const q = qs.toString();
		return q ? `${base}?${q}` : base;
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: page > 1 ? `${brand} — ${t("common.page", "صفحة")} ${page}` : brand,
		description: t("seo.brand_desc", {
			brand,
			defaultValue: `عطور ${brand} — القائمة الكاملة في موسوعة عطرنا.`
		}),
		canonical: `${SITE_URL}${hrefFor(page)}`,
		lang,
		ogType: "profile",
		robots: page > 1 ? "noindex,follow" : void 0
	}), /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ jsxs("nav", {
				className: "mb-4 text-sm text-neutral-500",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: `${prefix}/brands`,
						className: "underline-offset-4 hover:underline",
						children: t("home.brands_title", "العلامات التجارية")
					}),
					/* @__PURE__ */ jsx("span", {
						className: "mx-2",
						"aria-hidden": true,
						children: "/"
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-neutral-900",
						children: brand
					})
				]
			}),
			/* @__PURE__ */ jsxs("header", {
				className: "mb-6 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
					className: "text-2xl font-bold text-neutral-900 sm:text-3xl",
					children: brand
				}), /* @__PURE__ */ jsxs("p", {
					className: "mt-2 text-sm text-neutral-600",
					children: [
						total.toLocaleString("ar-EG"),
						" ",
						t("home.stat_perfumes", "عطر")
					]
				})] }), /* @__PURE__ */ jsx("div", {
					className: "flex gap-2 text-sm",
					children: [
						"popular",
						"rating",
						"name"
					].map((option) => /* @__PURE__ */ jsx(Link, {
						to: option === "popular" ? base : `${base}?sort=${option}`,
						className: `rounded-lg border px-3 py-1.5 transition-colors ${sort === option ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-900"}`,
						children: option === "popular" ? t("sort.popular", "الأشهر") : option === "rating" ? t("sort.rating", "الأعلى تقييماً") : t("sort.name", "أبجدياً")
					}, option))
				})]
			}),
			perfumes.length === 0 ? /* @__PURE__ */ jsx("p", {
				className: "py-16 text-center text-neutral-500",
				children: t("common.no_results", "لا توجد نتائج")
			}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
				children: perfumes.map((p) => /* @__PURE__ */ jsx(CorpusTile, {
					perfume: p,
					href: `${prefix}/fragrance/${encodeURIComponent(p.folder)}`
				}, p.folder))
			}), /* @__PURE__ */ jsx(Pagination, {
				page,
				total,
				perPage,
				hrefFor
			})] })
		]
	})] });
}
//#endregion
//#region app/routes/brand.tsx
var brand_exports = /* @__PURE__ */ __exportAll({
	default: () => brand_default,
	loader: () => loader$4,
	meta: () => meta$4
});
var PER_PAGE$1 = 24;
async function loader$4({ params, request }) {
	const lang = [
		"ar",
		"en",
		"fr"
	].includes(params.lang ?? "") ? params.lang : "ar";
	const slug = decodeURIComponent(params.slug ?? "");
	const url = new URL(request.url);
	const page = Math.max(1, Number(url.searchParams.get("page") ?? 1) || 1);
	const sort = url.searchParams.get("sort") ?? "popular";
	const [result, all] = await Promise.all([listPerfumes({
		brand: slug,
		page,
		perPage: PER_PAGE$1,
		sort
	}), brandTerms(500)]);
	const term = all.find((b) => b.name.toLowerCase() === slug.toLowerCase());
	if (!term && result.total === 0) throw data({ brand: slug }, { status: 404 });
	return {
		lang,
		brand: term?.name ?? slug,
		perfumes: result.items,
		total: result.total,
		page,
		perPage: PER_PAGE$1,
		sort
	};
}
var brand_default = UNSAFE_withComponentProps(BrandPage);
function meta$4({ data }) {
	const lang = data?.lang ?? "ar";
	const brand = data?.brand ?? "";
	const deep = (data?.page ?? 1) > 1;
	return buildMeta({
		title: deep ? `${brand} — صفحة ${data?.page}` : brand,
		description: `عطور ${brand} — القائمة الكاملة مع المكوّنات والتقييمات في موسوعة عطرنا.`,
		canonical: `${SITE_URL$1}${lang === "ar" ? "" : `/${lang}`}/brand/${encodeURIComponent(brand)}`,
		lang,
		type: "profile",
		robots: deep ? "noindex,follow" : void 0
	});
}
//#endregion
//#region src/pages/NotesPage.tsx
function NotesPage() {
	const { lang, notes } = useLoaderData();
	const { t } = useTranslation();
	const [query, setQuery] = useState("");
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		return q ? notes.filter((n) => n.name.toLowerCase().includes(q)) : notes;
	}, [notes, query]);
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: t("nav.notes", "المكوّنات العطرية"),
		description: t("seo.notes_desc", "قاموس المكوّنات العطرية — من العود والمسك إلى الحمضيات والزهور."),
		canonical: `${SITE_URL}${prefix}/notes`,
		lang,
		schema: {
			"@context": "https://schema.org",
			"@type": "DefinedTermSet",
			name: "موسوعة المكوّنات العطرية — عطرنا",
			url: `${SITE_URL}${prefix}/notes`,
			hasDefinedTerm: notes.slice(0, 50).map((n) => ({
				"@type": "DefinedTerm",
				name: n.name,
				url: `${SITE_URL}${prefix}/note/${encodeURIComponent(n.name)}`
			}))
		}
	}), /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [/* @__PURE__ */ jsxs("header", {
			className: "mb-8",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-2xl font-bold text-neutral-900 sm:text-3xl",
					children: t("home.glossary_title", "موسوعة المكوّنات العطرية")
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-2 text-sm text-neutral-600",
					children: [
						notes.length.toLocaleString("ar-EG"),
						" ",
						t("notes.count_label", "مكوّن")
					]
				}),
				/* @__PURE__ */ jsx("input", {
					type: "search",
					value: query,
					onChange: (e) => setQuery(e.target.value),
					placeholder: t("notes.filter", "ابحث عن مكوّن…"),
					className: "mt-5 h-11 w-full max-w-sm rounded-lg border border-neutral-300 px-4 text-sm outline-none focus:border-neutral-900"
				})
			]
		}), filtered.length === 0 ? /* @__PURE__ */ jsx("p", {
			className: "py-16 text-center text-neutral-500",
			children: t("common.no_results", "لا توجد نتائج")
		}) : /* @__PURE__ */ jsx("ul", {
			className: "flex flex-wrap gap-2",
			children: filtered.map((note) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
				to: `${prefix}/note/${encodeURIComponent(note.name)}`,
				className: "inline-flex items-baseline gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 transition-colors hover:border-neutral-900",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-sm text-neutral-900",
					children: note.name
				}), /* @__PURE__ */ jsx("span", {
					className: "text-xs text-neutral-400",
					children: note.count
				})]
			}) }, note.name))
		})]
	})] });
}
//#endregion
//#region app/routes/notes.tsx
var notes_exports = /* @__PURE__ */ __exportAll({
	default: () => notes_default,
	loader: () => loader$3,
	meta: () => meta$3
});
async function loader$3({ params }) {
	return {
		lang: [
			"ar",
			"en",
			"fr"
		].includes(params.lang ?? "") ? params.lang : "ar",
		notes: await noteTerms(600)
	};
}
var notes_default = UNSAFE_withComponentProps(NotesPage);
function meta$3({ data }) {
	const lang = data?.lang ?? "ar";
	const notes = data?.notes ?? [];
	return buildMeta({
		title: "موسوعة المكوّنات العطرية",
		description: "قاموس المكوّنات العطرية — من العود والمسك إلى الحمضيات والزهور.",
		canonical: `${SITE_URL$1}${lang === "ar" ? "" : `/${lang}`}/notes`,
		lang,
		hrefLangPath: "/notes",
		schema: {
			"@context": "https://schema.org",
			"@type": "DefinedTermSet",
			name: "موسوعة المكوّنات العطرية — عطرنا",
			hasDefinedTerm: notes.slice(0, 50).map((n) => ({
				"@type": "DefinedTerm",
				name: n.name
			}))
		}
	});
}
//#endregion
//#region src/api/authClient.ts
var AUTH_ROOT = "https://auth.ourscent.com";
/** `path` is the part after `/api`, e.g. '/v1/identity/login'. */
function authUrl(path) {
	return `${AUTH_ROOT.replace(/\/+$/, "")}/api${path}`;
}
var authHttp = axios.create({ headers: { "Content-Type": "application/json" } });
var authApi = {
	login: (email, password) => authHttp.post(authUrl("/v1/identity/login"), {
		email,
		password
	}).then((r) => r.data),
	refresh: (refreshToken) => authHttp.post(authUrl("/v1/identity/refresh"), { refreshToken }).then((r) => r.data)
};
//#endregion
//#region src/api/scentApiClient.ts
var API_BASE_URL = `${"".replace(/\/+$/, "")}/api`;
var apiClient = axios.create({
	baseURL: API_BASE_URL,
	headers: { "Content-Type": "application/json" }
});
apiClient.interceptors.request.use((config) => {
	config.headers = AxiosHeaders.from(config.headers);
	config.headers.set("Accept-Language", localStorage.getItem("i18nextLng") ?? "ar");
	const token = getAuthToken();
	if (token) config.headers.set("Authorization", `Bearer ${token}`);
	return config;
});
var isRefreshing = false;
var refreshQueue = [];
function flushQueue(err, token) {
	for (const p of refreshQueue) if (token) p.resolve(token);
	else p.reject(err);
	refreshQueue = [];
}
/** Send the user to login without losing the active language prefix. */
function redirectToLogin() {
	if (typeof window === "undefined") return;
	const seg = window.location.pathname.split("/")[1];
	const target = `${[
		"ar",
		"en",
		"fr"
	].includes(seg) ? `/${seg}` : ""}/login`;
	if (window.location.pathname !== target) window.location.href = target;
}
apiClient.interceptors.response.use((res) => res, async (err) => {
	const orig = err.config;
	if (err.response?.status !== 401 || !orig || orig._retry) return Promise.reject(err);
	const retryWith = (token) => {
		orig._retry = true;
		orig.headers = AxiosHeaders.from(orig.headers);
		orig.headers.set("Authorization", `Bearer ${token}`);
		return apiClient.request(orig);
	};
	if (isRefreshing) return new Promise((resolve, reject) => {
		refreshQueue.push({
			resolve: (token) => resolve(retryWith(token)),
			reject
		});
	});
	const refreshToken = getRefreshToken();
	if (!refreshToken) return Promise.reject(err);
	orig._retry = true;
	isRefreshing = true;
	try {
		const data = await authApi.refresh(refreshToken);
		if (!data.token) throw new Error("Refresh returned no token");
		setAuthToken(data.token);
		if (data.refreshToken) setRefreshToken(data.refreshToken);
		flushQueue(null, data.token);
		return retryWith(data.token);
	} catch (refreshErr) {
		flushQueue(refreshErr, null);
		clearAuthTokens();
		redirectToLogin();
		return Promise.reject(err);
	} finally {
		isRefreshing = false;
	}
});
//#endregion
//#region src/api/notes.ts
var notesApi = {
	list: () => apiClient.get("/scent/notes").then((r) => r.data),
	getBySlug: (slug) => apiClient.get(`/scent/notes/${slug}`).then((r) => r.data),
	getFragrances: (slug, query) => apiClient.get(`/scent/notes/${slug}/fragrances`, { params: query }).then((r) => r.data)
};
var perfumersApi = {
	list: () => apiClient.get("/scent/perfumers").then((r) => r.data),
	getBySlug: (slug) => apiClient.get(`/scent/perfumers/${slug}`).then((r) => r.data),
	getFragrances: (slug, query) => apiClient.get(`/scent/perfumers/${slug}/fragrances`, { params: query }).then((r) => r.data)
};
//#endregion
//#region src/api/wardrobe.ts
var wardrobeApi = {
	get: () => apiClient.get("/scent/wardrobe").then((r) => r.data),
	add: (dto) => apiClient.post("/scent/wardrobe", dto).then((r) => r.data),
	remove: (fragranceId, shelfType) => apiClient.delete(`/scent/wardrobe/${fragranceId}/${shelfType}`)
};
//#endregion
//#region src/hooks/useWardrobe.ts
function useWardrobe() {
	const { isAuthenticated: isAuth } = useAuth();
	return useQuery({
		queryKey: ["wardrobe"],
		queryFn: wardrobeApi.get,
		enabled: isAuth
	});
}
function useAddToWardrobe() {
	const qc = useQueryClient();
	return useMutation({
		mutationFn: wardrobeApi.add,
		onSuccess: () => qc.invalidateQueries({ queryKey: ["wardrobe"] })
	});
}
//#endregion
//#region src/components/FragranceCard.tsx
function FragranceCard({ fragrance, showCompare = true, rank }) {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const navigate = useNavigate$1();
	const [visible, setVisible] = useState(false);
	const [imgLoaded, setImgLoaded] = useState(false);
	const ref = useRef(null);
	const addToWardrobe = useAddToWardrobe();
	const { add: addCompare, isInCompare } = useCompareStore();
	const { isAuthenticated: isAuth } = useAuth();
	useEffect(() => {
		const observer = new IntersectionObserver(([e]) => {
			if (e.isIntersecting) setVisible(true);
		}, { threshold: .05 });
		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);
	const name = lang === "ar" ? fragrance.nameAr : lang === "fr" && fragrance.nameFr ? fragrance.nameFr : fragrance.nameEn;
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const showRating = fragrance.totalVotes >= 5;
	const inCompare = isInCompare(fragrance.id);
	const handleCardClick = () => navigate(`${prefix}/fragrance/${fragrance.slug}`);
	return /* @__PURE__ */ jsxs("div", {
		ref,
		className: "relative group rounded-2xl border border-neutral-200 bg-neutral-0 p-3\n                 transition-all duration-200 cursor-pointer overflow-hidden\n                 hover:border-neutral-300 hover:shadow-card",
		children: [
			fragrance.imageMain && /* @__PURE__ */ jsx("div", {
				className: "atmo-blur rounded-2xl",
				children: /* @__PURE__ */ jsx("img", {
					src: fragrance.imageMain,
					alt: "",
					"aria-hidden": true
				})
			}),
			rank !== void 0 && /* @__PURE__ */ jsx("span", {
				className: clsx("absolute top-2 start-2 z-10 w-7 h-7 rounded-full flex items-center justify-center", "text-xs font-bold shadow-primary-black", rank === 1 ? "bg-yellow-400 text-neutral-900" : rank === 2 ? "bg-neutral-400 text-white" : rank === 3 ? "bg-amber-700 text-white" : "bg-neutral-900 text-white"),
				children: rank
			}),
			rank === void 0 && fragrance.totalVotes > 50 && /* @__PURE__ */ jsxs("span", {
				className: "absolute top-2 start-2 z-10 flex items-center gap-1\n          rounded-full bg-white/90 py-1 ps-1.5 pe-2 text-[10px] font-medium\n          backdrop-blur-sm shadow-sm text-neutral-700",
				children: ["🔥 ", t("card.bestseller", "الأكثر مبيعاً")]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "absolute top-2 end-2 z-10 flex flex-col gap-1",
				children: [
					fragrance.oudGrade && /* @__PURE__ */ jsxs("span", {
						className: "rounded-full bg-neutral-900 text-white text-[10px] font-bold px-2 py-0.5 shadow-sm",
						children: [
							t("arab_data.oud_grade", "عود"),
							" ",
							fragrance.oudGrade
						]
					}),
					fragrance.halalStatus === "Certified" && /* @__PURE__ */ jsxs("span", {
						className: "rounded-full bg-green-brand text-white text-[10px] px-2 py-0.5 shadow-sm",
						children: ["✓ ", t("arab_data.halal", "حلال")]
					}),
					fragrance.isAlcoholFree && fragrance.halalStatus !== "Certified" && /* @__PURE__ */ jsx("span", {
						className: "rounded-full bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5",
						children: t("arab_data.alcohol_free", "خالٍ من الكحول")
					})
				]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "relative h-36 sm:h-40 flex items-center justify-center mb-3 pt-4 overflow-hidden",
				onClick: handleCardClick,
				children: visible && fragrance.imageMain ? /* @__PURE__ */ jsx("img", {
					src: fragrance.imageMain,
					alt: name,
					onLoad: () => setImgLoaded(true),
					className: clsx("h-28 sm:h-36 w-auto object-contain mx-auto mix-blend-multiply", "transition-all duration-500 group-hover:scale-105", imgLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-sm")
				}) : /* @__PURE__ */ jsx("div", { className: "w-20 h-28 rounded-xl bg-neutral-200 animate-pulse" })
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-[10px] font-medium tracking-wide uppercase text-neutral-500 mb-0.5 text-center",
						children: fragrance.brandName
					}),
					/* @__PURE__ */ jsx(Link$1, {
						to: `${prefix}/fragrance/${fragrance.slug}`,
						className: "block text-[13px] font-medium text-neutral-900 line-clamp-2 text-center\n                     leading-snug hover:underline underline-offset-2 mb-1",
						children: name
					}),
					(fragrance.familyPrimary || fragrance.concentrationType) && /* @__PURE__ */ jsx("p", {
						className: "text-[10px] text-neutral-400 text-center",
						children: [fragrance.familyPrimary, fragrance.concentrationType].filter(Boolean).join(" · ")
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between mt-2.5 gap-1",
						children: [showRating ? /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-1",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-yellow-warm text-xs",
									children: "★"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "text-[13px] font-semibold text-neutral-900",
									children: fragrance.overallRating.toFixed(2)
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "text-[10px] text-neutral-400",
									children: [
										"(",
										fragrance.totalVotes,
										")"
									]
								})
							]
						}) : /* @__PURE__ */ jsx("span", {
							className: "text-[10px] text-neutral-400 italic",
							children: t("fragrance.no_votes", "لا تقييمات")
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex gap-1",
							children: [showCompare && /* @__PURE__ */ jsx("button", {
								onClick: (e) => {
									e.stopPropagation();
									addCompare(fragrance);
								},
								className: clsx("h-7 w-7 rounded-full border text-xs transition-all duration-150", inCompare ? "bg-neutral-900 text-white border-neutral-900 shadow-primary-black" : "border-neutral-200 text-neutral-500 hover:border-neutral-400 hover:text-neutral-700"),
								title: t("compare.add_fragrance", "قارن"),
								children: "⚖"
							}), isAuth && /* @__PURE__ */ jsx("button", {
								onClick: (e) => {
									e.stopPropagation();
									addToWardrobe.mutate({
										fragranceId: fragrance.id,
										shelfType: "want"
									});
								},
								className: clsx("h-7 w-7 rounded-full border text-xs transition-all duration-150", fragrance.isWishlisted ? "bg-red-50 text-red-brand border-red-200" : "border-neutral-200 text-neutral-400 hover:text-red-brand hover:border-red-200"),
								title: t("wardrobe.want", "أريده"),
								children: fragrance.isWishlisted ? "♥" : "♡"
							})]
						})]
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: handleCardClick,
						className: "mt-3 h-10 sm:h-11 w-full rounded-xl bg-neutral-1000 text-white\n                     text-[11px] font-medium tracking-wide\n                     shadow-primary-black active:scale-[0.98] shimmer\n                     transition-transform duration-150",
						children: t("card.view_fragrance", "عرض العطر")
					})
				]
			})
		]
	});
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/ui/src/components/Button.tsx
var VARIANT = {
	primary: "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:opacity-90",
	secondary: "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:opacity-90",
	ghost: "text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))]",
	destructive: "bg-[hsl(var(--destructive))] text-[hsl(var(--destructive-foreground))] hover:opacity-90",
	outline: "border border-[hsl(var(--border))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--accent))]"
};
var SIZE$1 = {
	sm: "px-3 py-1.5 text-xs",
	md: "px-4 py-2 text-sm",
	lg: "px-5 py-2.5 text-base"
};
function Button({ variant = "primary", size = "md", loading, disabled, children, className = "", ...props }) {
	return /* @__PURE__ */ jsxs("button", {
		...props,
		disabled: disabled || loading,
		className: [
			"rounded-[var(--radius)] font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] disabled:opacity-50 disabled:pointer-events-none inline-flex items-center justify-center gap-2",
			VARIANT[variant],
			SIZE$1[size],
			className
		].join(" "),
		children: [loading && /* @__PURE__ */ jsx("span", { className: "w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin shrink-0" }), children]
	});
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/ui/src/components/Input.tsx
function Input({ label, error, helperText, id, className = "", ...props }) {
	const inputId = id ?? (label ? label.toLowerCase().replace(/\s+/g, "-") : void 0);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col gap-1 w-full",
		children: [
			label && /* @__PURE__ */ jsx("label", {
				htmlFor: inputId,
				className: "text-sm font-medium text-[hsl(var(--foreground))]",
				children: label
			}),
			/* @__PURE__ */ jsx("input", {
				id: inputId,
				...props,
				className: [
					"w-full rounded-[var(--radius)] border px-3 py-2 text-sm bg-[hsl(var(--background))] text-[hsl(var(--foreground))] placeholder:text-[hsl(var(--muted-foreground))] transition-colors",
					"focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:border-transparent",
					error ? "border-[hsl(var(--destructive))]" : "border-[hsl(var(--border))]",
					"disabled:opacity-50 disabled:cursor-not-allowed",
					className
				].join(" ")
			}),
			error && /* @__PURE__ */ jsx("p", {
				className: "text-xs text-[hsl(var(--destructive))]",
				children: error
			}),
			!error && helperText && /* @__PURE__ */ jsx("p", {
				className: "text-xs text-[hsl(var(--muted-foreground))]",
				children: helperText
			})
		]
	});
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/ui/src/components/EmptyState.tsx
function EmptyState({ icon, title, subtitle, action, className = "" }) {
	return /* @__PURE__ */ jsxs("div", {
		className: ["flex flex-col items-center justify-center gap-4 py-16 px-6 text-center", className].join(" "),
		children: [
			icon && /* @__PURE__ */ jsx("div", {
				className: "text-[hsl(var(--muted-foreground))] text-5xl",
				children: icon
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-1",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-base font-semibold text-[hsl(var(--foreground))]",
					children: title
				}), subtitle && /* @__PURE__ */ jsx("p", {
					className: "text-sm text-[hsl(var(--muted-foreground))]",
					children: subtitle
				})]
			}),
			action && /* @__PURE__ */ jsx("div", { children: action })
		]
	});
}
//#endregion
//#region ../../../OurIncFrontCores/packages/@ourinc/ui/src/components/Avatar.tsx
var SIZE = {
	sm: "w-8 h-8 text-xs",
	md: "w-10 h-10 text-sm",
	lg: "w-14 h-14 text-base"
};
function Avatar({ src, initials, size = "md", alt, className = "" }) {
	const base = [
		"rounded-full inline-flex items-center justify-center overflow-hidden shrink-0 font-medium select-none",
		SIZE[size],
		className
	].join(" ");
	if (src) return /* @__PURE__ */ jsx("img", {
		src,
		alt: alt ?? initials,
		className: [base, "object-cover"].join(" ")
	});
	return /* @__PURE__ */ jsx("span", {
		className: [base, "bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))]"].join(" "),
		"aria-label": alt ?? initials,
		children: initials.slice(0, 2).toUpperCase()
	});
}
//#endregion
//#region src/pages/NotePage.tsx
function NotePage() {
	const { slug } = useParams$1();
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const { data: note, isLoading: noteLoading } = useQuery({
		queryKey: ["note", slug],
		queryFn: () => notesApi.getBySlug(slug),
		enabled: !!slug
	});
	const { data: fragrances, isLoading: fragrancesLoading } = useQuery({
		queryKey: ["note-fragrances", slug],
		queryFn: () => notesApi.getFragrances(slug),
		enabled: !!slug
	});
	const name = note ? lang === "ar" ? note.nameAr : lang === "fr" ? note.nameFr ?? note.nameEn : note.nameEn : "";
	const hrefLangs = slug ? [
		{
			lang: "ar",
			href: `${SITE_URL}/note/${slug}`
		},
		{
			lang: "en",
			href: `${SITE_URL}/en/note/${slug}`
		},
		{
			lang: "fr",
			href: `${SITE_URL}/fr/note/${slug}`
		},
		{
			lang: "x-default",
			href: `${SITE_URL}/note/${slug}`
		}
	] : void 0;
	if (noteLoading) return /* @__PURE__ */ jsxs("div", {
		className: "max-w-5xl mx-auto px-4 py-12",
		children: [/* @__PURE__ */ jsx("div", { className: "h-8 w-48 bg-neutral-200 rounded animate-pulse mb-4" }), /* @__PURE__ */ jsx("div", { className: "h-4 w-full bg-neutral-100 rounded animate-pulse" })]
	});
	const description = note ? (lang === "ar" ? note.descriptionAr ?? note.descriptionEn : note.descriptionEn)?.slice(0, 160) ?? t("seo.note_fallback_desc", { name }) : void 0;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: t("seo.note_title", { name }),
		description,
		canonical: slug ? `${SITE_URL}/note/${slug}` : void 0,
		ogImage: note?.iconUrl ?? void 0,
		lang,
		hrefLangs
	}), /* @__PURE__ */ jsxs("div", {
		className: "max-w-5xl mx-auto px-4 py-10",
		dir: "auto",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-3 mb-6",
				children: [note?.iconUrl && /* @__PURE__ */ jsx("img", {
					src: note.iconUrl,
					alt: name,
					className: "w-10 h-10 object-contain",
					loading: "lazy"
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
					className: "text-2xl font-bold",
					children: name
				}), note?.category && /* @__PURE__ */ jsx("p", {
					className: "text-sm text-neutral-500 capitalize",
					children: note.category
				})] })]
			}),
			note?.descriptionEn && /* @__PURE__ */ jsx("p", {
				className: "text-neutral-600 mb-8 max-w-2xl leading-relaxed",
				children: lang === "ar" ? note.descriptionAr ?? note.descriptionEn : note.descriptionEn
			}),
			/* @__PURE__ */ jsxs("h2", {
				className: "text-base font-semibold mb-4",
				children: [
					t("browse.title"),
					" (",
					fragrances?.items.length ?? 0,
					")"
				]
			}),
			fragrancesLoading ? /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
				children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsx("div", { className: "h-48 rounded-2xl bg-neutral-100 animate-pulse" }, i))
			}) : !fragrances || fragrances.items.length === 0 ? /* @__PURE__ */ jsx(EmptyState, { title: t("browse.no_results") }) : /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
				children: fragrances.items.map((f) => /* @__PURE__ */ jsx(FragranceCard, { fragrance: f }, f.id))
			})
		]
	})] });
}
//#endregion
//#region app/routes/note.tsx
var note_exports = /* @__PURE__ */ __exportAll({ default: () => NotePage });
//#endregion
//#region src/pages/PerfumerPage.tsx
function PerfumerPage() {
	const { slug } = useParams$1();
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const { data: perfumer, isLoading } = useQuery({
		queryKey: ["perfumer", slug],
		queryFn: () => perfumersApi.getBySlug(slug),
		enabled: !!slug
	});
	const { data: fragrances, isLoading: fragrancesLoading } = useQuery({
		queryKey: ["perfumer-fragrances", slug],
		queryFn: () => perfumersApi.getFragrances(slug),
		enabled: !!slug
	});
	const name = perfumer ? lang === "ar" ? perfumer.nameAr ?? perfumer.nameEn : lang === "fr" ? perfumer.nameFr ?? perfumer.nameEn : perfumer.nameEn : "";
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "max-w-5xl mx-auto px-4 py-12",
		children: /* @__PURE__ */ jsx("div", { className: "h-8 w-48 bg-neutral-200 rounded animate-pulse mb-4" })
	});
	if (!perfumer) return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center py-24 text-neutral-400",
		children: /* @__PURE__ */ jsx("p", { children: t("error.not_found") })
	});
	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: perfumer.nameEn,
		alternateName: perfumer.nameAr ?? void 0,
		image: perfumer.photoUrl ?? void 0,
		jobTitle: "Perfumer",
		nationality: perfumer.nationality ?? void 0
	};
	const hrefLangs = slug ? [
		{
			lang: "ar",
			href: `${SITE_URL}/perfumer/${slug}`
		},
		{
			lang: "en",
			href: `${SITE_URL}/en/perfumer/${slug}`
		},
		{
			lang: "fr",
			href: `${SITE_URL}/fr/perfumer/${slug}`
		},
		{
			lang: "x-default",
			href: `${SITE_URL}/perfumer/${slug}`
		}
	] : void 0;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: t("seo.perfumer_title", { name }),
		description: t("seo.perfumer_desc", {
			name,
			nationality: perfumer.nationality ? ` — ${perfumer.nationality}` : ""
		}),
		canonical: slug ? `${SITE_URL}/perfumer/${slug}` : void 0,
		ogImage: perfumer.photoUrl ?? void 0,
		ogType: "profile",
		lang,
		hrefLangs,
		schema: personSchema
	}), /* @__PURE__ */ jsxs("div", {
		className: "max-w-5xl mx-auto px-4 py-10",
		dir: "auto",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-4 mb-8",
				children: [/* @__PURE__ */ jsx(Avatar, {
					src: perfumer.photoUrl ?? void 0,
					initials: name,
					className: "w-16 h-16 text-xl font-bold shadow"
				}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ jsx("h1", {
						className: "text-2xl font-bold",
						children: name
					}), perfumer.isArabMaster && /* @__PURE__ */ jsx("span", {
						className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700",
						children: "🇦🇪 Arab Master"
					})]
				}), perfumer.nationality && /* @__PURE__ */ jsx("p", {
					className: "text-neutral-500 text-sm",
					children: perfumer.nationality
				})] })]
			}),
			/* @__PURE__ */ jsxs("h2", {
				className: "text-base font-semibold mb-4",
				children: [
					t("fragrance.notes"),
					" (",
					fragrances?.items?.length ?? 0,
					")"
				]
			}),
			fragrancesLoading ? /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
				children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsx("div", { className: "h-48 rounded-2xl bg-neutral-100 animate-pulse" }, i))
			}) : !fragrances?.items?.length ? /* @__PURE__ */ jsx("p", {
				className: "text-neutral-400 py-8 text-center",
				children: t("browse.no_results")
			}) : /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
				children: fragrances.items.map((f) => /* @__PURE__ */ jsx(FragranceCard, { fragrance: f }, f.id))
			})
		]
	})] });
}
//#endregion
//#region app/routes/perfumer.tsx
var perfumer_exports = /* @__PURE__ */ __exportAll({ default: () => PerfumerPage });
//#endregion
//#region src/pages/TrendingPage.tsx
function TrendingPage() {
	const { lang, perfumes, total, page, perPage, sort } = useLoaderData();
	const { t } = useTranslation();
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const base = `${prefix}/trending`;
	const hrefFor = (p) => {
		const qs = new URLSearchParams();
		if (sort !== "popular") qs.set("sort", sort);
		if (p > 1) qs.set("page", String(p));
		const q = qs.toString();
		return q ? `${base}?${q}` : base;
	};
	const heading = sort === "rating" ? t("sort.rating", "الأعلى تقييماً") : t("sort.popular", "الأشهر");
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: page > 1 ? `${heading} — ${t("common.page", "صفحة")} ${page}` : heading,
		description: t("seo.trending_desc", "أشهر العطور وأعلاها تقييماً في موسوعة عطرنا."),
		canonical: `${SITE_URL}${hrefFor(page)}`,
		lang,
		robots: page > 1 ? "noindex,follow" : void 0
	}), /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [/* @__PURE__ */ jsxs("header", {
			className: "mb-6 flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
				className: "text-2xl font-bold text-neutral-900 sm:text-3xl",
				children: heading
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-2 text-sm text-neutral-600",
				children: sort === "popular" ? t("trending.sub_popular", "مرتّبة حسب عدد التقييمات — الأكثر شهرة أولاً.") : t("trending.sub_rating", "الأعلى تقييماً، بحد أدنى ١٠٠ تقييم لتجنّب النتائج غير الممثِّلة.")
			})] }), /* @__PURE__ */ jsx("div", {
				className: "flex gap-2 text-sm",
				children: ["popular", "rating"].map((option) => /* @__PURE__ */ jsx(Link, {
					to: option === "popular" ? base : `${base}?sort=${option}`,
					className: `rounded-lg border px-3 py-1.5 transition-colors ${sort === option ? "border-neutral-900 bg-neutral-900 text-white" : "border-neutral-200 bg-white text-neutral-700 hover:border-neutral-900"}`,
					children: option === "popular" ? t("sort.popular", "الأشهر") : t("sort.rating", "الأعلى تقييماً")
				}, option))
			})]
		}), perfumes.length === 0 ? /* @__PURE__ */ jsx("p", {
			className: "py-16 text-center text-neutral-500",
			children: t("common.no_results", "لا توجد نتائج")
		}) : /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6",
			children: perfumes.map((p) => /* @__PURE__ */ jsx(CorpusTile, {
				perfume: p,
				href: `${prefix}/fragrance/${encodeURIComponent(p.folder)}`
			}, p.folder))
		}), /* @__PURE__ */ jsx(Pagination, {
			page,
			total,
			perPage,
			hrefFor
		})] })]
	})] });
}
//#endregion
//#region app/routes/trending.tsx
var trending_exports = /* @__PURE__ */ __exportAll({
	default: () => trending_default,
	loader: () => loader$2,
	meta: () => meta$2
});
var PER_PAGE = 24;
async function loader$2({ params, request }) {
	const lang = [
		"ar",
		"en",
		"fr"
	].includes(params.lang ?? "") ? params.lang : "ar";
	const url = new URL(request.url);
	const page = Math.max(1, Number(url.searchParams.get("page") ?? 1) || 1);
	const sort = url.searchParams.get("sort") ?? "popular";
	const result = await listPerfumes({
		page,
		perPage: PER_PAGE,
		sort,
		minVotes: sort === "rating" ? 100 : 0
	});
	return {
		lang,
		perfumes: result.items,
		total: result.total,
		page,
		perPage: PER_PAGE,
		sort
	};
}
var trending_default = UNSAFE_withComponentProps(TrendingPage);
function meta$2({ data }) {
	const lang = data?.lang ?? "ar";
	const deep = (data?.page ?? 1) > 1;
	return buildMeta({
		title: data?.sort === "rating" ? "الأعلى تقييماً" : "أشهر العطور",
		description: "أشهر العطور وأعلاها تقييماً في موسوعة عطرنا.",
		canonical: `${SITE_URL$1}${lang === "ar" ? "" : `/${lang}`}/trending`,
		lang,
		robots: deep ? "noindex,follow" : void 0
	});
}
//#endregion
//#region src/components/Wardrobe/WardrobeCard.tsx
var SHELF_STYLE = {
	owned: "bg-neutral-1000 text-white",
	wishlist: "bg-amber-100 text-amber-800",
	tried: "bg-blue-50 text-blue-700",
	loved: "bg-rose-50 text-rose-700"
};
function WardrobeCard({ item, lang, onRemove, isRemoving }) {
	const { t } = useTranslation();
	const shelf = item.shelfType.toLowerCase();
	const badgeStyle = SHELF_STYLE[shelf] ?? "bg-neutral-100 text-neutral-700";
	return /* @__PURE__ */ jsxs("div", {
		className: "spring-enter rounded-3xl border border-neutral-100 bg-white p-4 hover:shadow-card\n                    transition-all duration-150 flex flex-col gap-3",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("span", {
					className: `inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${badgeStyle}`,
					children: t(`wardrobe.${shelf}`, item.shelfType)
				}), /* @__PURE__ */ jsx("button", {
					onClick: () => onRemove(item.fragranceId, item.shelfType),
					disabled: isRemoving,
					"aria-label": t("common.delete"),
					className: "w-7 h-7 rounded-xl flex items-center justify-center text-neutral-300\n                     hover:bg-red-50 hover:text-red-400 transition-all disabled:opacity-40 text-sm",
					children: "🗑"
				})]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-[11px] text-neutral-400",
				children: new Date(item.addedAt).toLocaleDateString(lang === "ar" ? "ar-SA" : lang, {
					year: "numeric",
					month: "short",
					day: "numeric"
				})
			}),
			item.notes && /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-neutral-600 line-clamp-2 leading-relaxed",
				children: item.notes
			}),
			item.pricePaid != null && item.currency && /* @__PURE__ */ jsx("span", {
				className: "inline-block self-start bg-neutral-50 border border-neutral-100\n                         text-neutral-600 text-[11px] font-semibold px-2.5 py-0.5 rounded-full",
				children: new Intl.NumberFormat(lang === "ar" ? "ar-SA" : lang, {
					style: "currency",
					currency: item.currency,
					maximumFractionDigits: 0
				}).format(item.pricePaid)
			})
		]
	});
}
function WardrobeCardSkeleton() {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-3xl border border-neutral-100 p-4 animate-pulse space-y-3 h-36",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex justify-between",
				children: [/* @__PURE__ */ jsx("div", { className: "h-5 w-20 rounded-full bg-neutral-100" }), /* @__PURE__ */ jsx("div", { className: "h-5 w-7 rounded-xl bg-neutral-100" })]
			}),
			/* @__PURE__ */ jsx("div", { className: "h-3 w-24 rounded-full bg-neutral-50" }),
			/* @__PURE__ */ jsx("div", { className: "h-3 w-full rounded-full bg-neutral-50" })
		]
	});
}
//#endregion
//#region src/components/Wardrobe/WardrobeShelf.tsx
function WardrobeShelf({ items, lang, isLoading, onRemove, isRemoving }) {
	const { t } = useTranslation();
	if (isLoading) return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
		children: Array.from({ length: 6 }).map((_, i) => /* @__PURE__ */ jsx(WardrobeCardSkeleton, {}, i))
	});
	if (items.length === 0) return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center py-20 gap-4 text-center",
		children: [/* @__PURE__ */ jsx("span", {
			className: "text-5xl",
			children: "🌸"
		}), /* @__PURE__ */ jsx("p", {
			className: "text-neutral-500 text-[14px]",
			children: t("wardrobe.empty")
		})]
	});
	return /* @__PURE__ */ jsx("div", {
		className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3",
		children: items.map((item) => /* @__PURE__ */ jsx(WardrobeCard, {
			item,
			lang,
			onRemove,
			isRemoving
		}, `${item.fragranceId}-${item.shelfType}`))
	});
}
//#endregion
//#region src/pages/WardrobePage.tsx
var SHELF_KEYS = [
	{
		key: "Owned",
		label: "wardrobe.owned"
	},
	{
		key: "Wishlist",
		label: "wardrobe.wishlist"
	},
	{
		key: "Gifted",
		label: "wardrobe.gifted"
	},
	{
		key: "Samples",
		label: "wardrobe.samples"
	}
];
function WardrobePage() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const { isAuthenticated } = useAuth();
	const queryClient = useQueryClient();
	const [shelf, setShelf] = useState("Owned");
	const { data: wardrobe, isLoading } = useWardrobe();
	const removeMutation = useMutation({
		mutationFn: ({ fragranceId, shelfType }) => wardrobeApi.remove(fragranceId, shelfType),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["wardrobe"] })
	});
	if (!isAuthenticated) return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4",
		dir: "auto",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-xl text-neutral-700 text-center",
			children: t("auth.login_required")
		}), /* @__PURE__ */ jsx(Link$1, {
			to: `${prefix}/login`,
			className: "shimmer inline-flex items-center px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm shadow-primary-black hover:scale-[1.03] active:scale-[0.98] transition-transform",
			children: t("auth.login")
		})]
	});
	const filteredItems = wardrobe?.filter((w) => w.shelfType === shelf) ?? [];
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		className: "max-w-5xl mx-auto py-10 px-4",
		dir: "auto",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "text-3xl font-bold text-neutral-900 mb-6",
				children: t("wardrobe.title")
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex gap-2 border-b border-neutral-200 mb-8 overflow-x-auto",
				children: SHELF_KEYS.map(({ key, label }) => /* @__PURE__ */ jsx("button", {
					onClick: () => setShelf(key),
					className: `whitespace-nowrap px-5 py-2.5 text-sm font-semibold rounded-t-lg transition-colors ${shelf === key ? "bg-neutral-900 text-white" : "text-neutral-500 hover:text-neutral-900"}`,
					children: t(label)
				}, key))
			}),
			/* @__PURE__ */ jsx(WardrobeShelf, {
				items: filteredItems,
				lang,
				isLoading,
				onRemove: (fragranceId, shelfType) => removeMutation.mutate({
					fragranceId,
					shelfType
				}),
				isRemoving: removeMutation.isPending
			})
		]
	}) });
}
//#endregion
//#region app/routes/wardrobe.tsx
var wardrobe_exports = /* @__PURE__ */ __exportAll({ default: () => WardrobePage });
//#endregion
//#region src/pages/NotebookPage.tsx
function NotebookPage() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const { isAuthenticated } = useAuth();
	const queryClient = useQueryClient();
	const [editing, setEditing] = useState(null);
	const [editContent, setEditContent] = useState("");
	const { data: notes = [], isLoading } = useQuery({
		queryKey: ["notebook"],
		queryFn: () => apiClient.get("/scent/notebook").then((r) => r.data),
		enabled: isAuthenticated
	});
	const upsertMutation = useMutation({
		mutationFn: ({ fragranceId, text }) => apiClient.put(`/scent/notebook/${fragranceId}`, { text }),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["notebook"] });
			setEditing(null);
		}
	});
	const deleteMutation = useMutation({
		mutationFn: (fragranceId) => apiClient.delete(`/scent/notebook/${fragranceId}`),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ["notebook"] })
	});
	if (!isAuthenticated) return /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center min-h-[60vh] gap-4 px-4",
		children: [/* @__PURE__ */ jsx("p", {
			className: "text-xl text-neutral-700 text-center",
			children: t("auth.login_required")
		}), /* @__PURE__ */ jsx(Link$1, {
			to: `${prefix}/login`,
			className: "shimmer inline-flex px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm shadow-primary-black hover:scale-[1.03] transition-transform",
			children: t("auth.login")
		})]
	});
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		className: "max-w-3xl mx-auto px-4 py-10",
		dir: "auto",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "text-3xl font-bold text-neutral-900 mb-8",
			children: t("nav.notebook")
		}), isLoading ? /* @__PURE__ */ jsx("div", {
			className: "space-y-3",
			children: [
				1,
				2,
				3
			].map((i) => /* @__PURE__ */ jsx("div", { className: "h-24 rounded-xl bg-neutral-100 animate-pulse" }, i))
		}) : notes.length === 0 ? /* @__PURE__ */ jsxs("div", {
			className: "text-center py-20 space-y-2",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-4xl",
				children: "📝"
			}), /* @__PURE__ */ jsx("p", {
				className: "text-neutral-400",
				children: t("wardrobe.empty")
			})]
		}) : /* @__PURE__ */ jsx("div", {
			className: "space-y-4",
			children: notes.map((note) => /* @__PURE__ */ jsxs("div", {
				className: "spring-enter rounded-2xl border border-neutral-100 p-4 space-y-3",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center justify-between",
						children: [note.fragranceSlug ? /* @__PURE__ */ jsx(Link$1, {
							to: `${prefix}/fragrance/${note.fragranceSlug}`,
							className: "font-semibold text-neutral-800 hover:underline",
							children: note.fragranceName ?? `#${note.fragranceId}`
						}) : /* @__PURE__ */ jsx("span", {
							className: "font-semibold text-neutral-800",
							children: note.fragranceName ?? `#${note.fragranceId}`
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ jsx("button", {
								onClick: () => {
									setEditing(note.fragranceId);
									setEditContent(note.text);
								},
								className: "text-sm text-neutral-500 hover:text-neutral-900 transition-colors",
								children: t("common.edit")
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => deleteMutation.mutate(note.fragranceId),
								disabled: deleteMutation.isPending,
								className: "text-sm text-red-400 hover:text-red-600 transition-colors",
								children: t("common.delete")
							})]
						})]
					}),
					editing === note.fragranceId ? /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx("textarea", {
							value: editContent,
							onChange: (e) => setEditContent(e.target.value),
							rows: 4,
							className: "w-full px-3 py-2 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-neutral-400 resize-none",
							dir: "auto"
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ jsx("button", {
								onClick: () => upsertMutation.mutate({
									fragranceId: note.fragranceId,
									text: editContent
								}),
								disabled: upsertMutation.isPending,
								className: "px-4 py-1.5 rounded-full bg-neutral-900 text-white text-sm font-medium disabled:opacity-50",
								children: t("common.save")
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => setEditing(null),
								className: "px-4 py-1.5 rounded-full border border-neutral-200 text-sm",
								children: t("common.cancel")
							})]
						})]
					}) : /* @__PURE__ */ jsx("p", {
						className: "text-sm text-neutral-600 leading-relaxed whitespace-pre-wrap",
						children: note.text
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-xs text-neutral-400",
						children: new Date(note.updatedAt).toLocaleDateString(lang === "ar" ? "ar-SA" : lang, {
							year: "numeric",
							month: "short",
							day: "numeric"
						})
					})
				]
			}, note.fragranceId))
		})]
	}) });
}
//#endregion
//#region app/routes/notebook.tsx
var notebook_exports = /* @__PURE__ */ __exportAll({ default: () => NotebookPage });
//#endregion
//#region src/api/influencers.ts
var influencersApi = {
	list: () => apiClient.get("/scent/influencers").then((r) => r.data),
	getById: (id) => apiClient.get(`/scent/influencers/${id}`).then((r) => r.data)
};
//#endregion
//#region src/utils/influencerSlug.ts
/**
* Influencer URL slugs.
*
* The backend exposes influencers by numeric id only (`GET /api/scent/influencers/{id}`)
* and its InfluencerResponse.Slug is never populated — the entity has no slug column.
* So we build a readable, SEO-friendly slug client-side that keeps the id as its
* leading segment (`12-ahmed-al-oud`) and parse that id back on the detail route.
*/
function slugifyName(name) {
	return name.toLowerCase().normalize("NFKD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function influencerSlug(influencer) {
	const name = slugifyName(influencer.nameEn ?? "");
	return name ? `${influencer.id}-${name}` : String(influencer.id);
}
/** Pull the numeric id back out of `12-ahmed-al-oud` (or a bare `12`). */
function parseInfluencerId(param) {
	if (!param) return null;
	const id = Number.parseInt(param, 10);
	return Number.isFinite(id) && id > 0 ? id : null;
}
//#endregion
//#region src/components/Influencer/InfluencerCard.tsx
function formatFollowers(count) {
	if (!count) return "0";
	if (count >= 1e6) return `${(count / 1e6).toFixed(1)}M`;
	if (count >= 1e3) return `${(count / 1e3).toFixed(1)}K`;
	return String(count);
}
function InfluencerCard({ influencer, lang }) {
	const { t } = useTranslation();
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const name = lang === "ar" && influencer.nameAr ? influencer.nameAr : influencer.nameEn;
	return /* @__PURE__ */ jsxs(Link$1, {
		to: `${prefix}/influencer/${influencerSlug(influencer)}`,
		className: "spring-enter rounded-2xl border border-neutral-100 p-4 hover:shadow-md transition-shadow flex flex-col items-center gap-3 text-center",
		children: [
			influencer.profilePhotoUrl ? /* @__PURE__ */ jsx("img", {
				src: influencer.profilePhotoUrl,
				alt: name,
				loading: "lazy",
				className: "w-16 h-16 rounded-full object-cover shadow"
			}) : /* @__PURE__ */ jsx("div", {
				className: "w-16 h-16 rounded-full bg-neutral-200 flex items-center justify-center text-2xl font-bold text-neutral-500 shadow",
				children: name.charAt(0).toUpperCase()
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1.5 flex-wrap justify-center",
				children: [/* @__PURE__ */ jsx("span", {
					className: "font-bold text-neutral-900 text-sm leading-snug",
					children: name
				}), influencer.isVerified && /* @__PURE__ */ jsx("span", {
					title: t("influencers.verified"),
					className: "inline-flex items-center justify-center w-4 h-4 rounded-full bg-green-500 text-white text-[9px] font-bold",
					"aria-label": t("influencers.verified"),
					children: "✓"
				})]
			}),
			influencer.countryCode && /* @__PURE__ */ jsx("span", {
				className: "text-xs text-neutral-400 uppercase tracking-wide",
				children: influencer.countryCode
			}),
			influencer.tiktokFollowers != null && /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-1 text-xs text-neutral-500",
				children: [/* @__PURE__ */ jsx("svg", {
					width: "12",
					height: "12",
					viewBox: "0 0 24 24",
					fill: "currentColor",
					"aria-hidden": "true",
					children: /* @__PURE__ */ jsx("path", { d: "M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.81a8.18 8.18 0 004.78 1.52V6.89a4.85 4.85 0 01-1.01-.2z" })
				}), /* @__PURE__ */ jsx("span", { children: formatFollowers(influencer.tiktokFollowers) })]
			}),
			influencer.avgOverallRating != null && /* @__PURE__ */ jsxs("span", {
				className: "text-xs font-medium text-amber-500",
				children: ["★ ", influencer.avgOverallRating.toFixed(1)]
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "text-xs text-neutral-400",
				children: [
					influencer.totalReviews,
					" ",
					t("influencers.reviews")
				]
			}),
			influencer.niche && /* @__PURE__ */ jsx("span", {
				className: "px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-600",
				children: influencer.niche
			})
		]
	});
}
function InfluencerCardSkeleton() {
	return /* @__PURE__ */ jsxs("div", {
		className: "rounded-2xl border border-neutral-100 p-4 animate-pulse flex flex-col items-center gap-3",
		children: [
			/* @__PURE__ */ jsx("div", { className: "w-16 h-16 rounded-full bg-neutral-200" }),
			/* @__PURE__ */ jsx("div", { className: "w-24 h-3 rounded bg-neutral-200" }),
			/* @__PURE__ */ jsx("div", { className: "w-12 h-2 rounded bg-neutral-100" }),
			/* @__PURE__ */ jsx("div", { className: "w-16 h-2 rounded bg-neutral-100" })
		]
	});
}
//#endregion
//#region src/pages/InfluencersPage.tsx
function InfluencersPage() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const { data: influencers, isLoading } = useQuery({
		queryKey: ["influencers"],
		queryFn: influencersApi.list
	});
	const hrefLangs = [
		{
			lang: "ar",
			href: `${SITE_URL}/influencers`
		},
		{
			lang: "en",
			href: `${SITE_URL}/en/influencers`
		},
		{
			lang: "fr",
			href: `${SITE_URL}/fr/influencers`
		},
		{
			lang: "x-default",
			href: `${SITE_URL}/influencers`
		}
	];
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: t("seo.influencers_title"),
		description: t("seo.influencers_desc"),
		canonical: `${SITE_URL}/influencers`,
		lang,
		hrefLangs
	}), /* @__PURE__ */ jsxs("div", {
		className: "max-w-6xl mx-auto py-10 px-4",
		dir: "auto",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "text-3xl font-bold text-neutral-900 mb-8",
			children: t("influencers.title")
		}), /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
			children: isLoading ? Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsx(InfluencerCardSkeleton, {}, i)) : (influencers ?? []).map((influencer) => /* @__PURE__ */ jsx(InfluencerCard, {
				influencer,
				lang
			}, influencer.id))
		})]
	})] });
}
//#endregion
//#region app/routes/influencers.tsx
var influencers_exports = /* @__PURE__ */ __exportAll({ default: () => InfluencersPage });
//#endregion
//#region src/pages/InfluencerDetailPage.tsx
var RATING_OPTIONS = [
	1,
	2,
	3,
	4,
	5
];
function StarRating$1({ value, onChange }) {
	return /* @__PURE__ */ jsx("div", {
		className: "flex gap-1",
		children: RATING_OPTIONS.map((n) => /* @__PURE__ */ jsx("button", {
			type: "button",
			onClick: () => onChange?.(n),
			className: `text-lg transition-transform hover:scale-125 ${n <= value ? "text-yellow-400" : "text-neutral-200"}`,
			children: "★"
		}, n))
	});
}
function InfluencerDetailPage() {
	const { slug } = useParams$1();
	const influencerId = parseInfluencerId(slug);
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const { isAuthenticated } = useAuth();
	const [reviewForm, setReviewForm] = useState({
		overallRating: 0,
		accuracyRating: 0,
		budgetVarietyRating: 0,
		authenticityRating: 0,
		comment: "",
		isAnonymous: false
	});
	const [submitted, setSubmitted] = useState(false);
	const { data: influencer, isLoading, isError } = useQuery({
		queryKey: ["influencer", influencerId],
		queryFn: () => influencersApi.getById(influencerId),
		enabled: influencerId != null
	});
	const reviewMutation = useMutation({
		mutationFn: (body) => apiClient.post(`/scent/influencers/${influencer.id}/reviews`, body),
		onSuccess: () => setSubmitted(true)
	});
	if (isLoading) return /* @__PURE__ */ jsxs("div", {
		className: "max-w-3xl mx-auto px-4 py-12 space-y-4",
		children: [
			/* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-full bg-neutral-200 animate-pulse" }),
			/* @__PURE__ */ jsx("div", { className: "h-6 w-48 bg-neutral-200 rounded animate-pulse" }),
			/* @__PURE__ */ jsx("div", { className: "h-4 w-full bg-neutral-100 rounded animate-pulse" })
		]
	});
	if (isError || !influencer) return /* @__PURE__ */ jsx("div", {
		className: "flex items-center justify-center py-24 text-neutral-400",
		children: /* @__PURE__ */ jsx("p", { children: t("error.not_found") })
	});
	const name = lang === "ar" && influencer.nameAr ? influencer.nameAr : influencer.nameEn;
	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: influencer.nameEn,
		alternateName: influencer.nameAr ?? void 0,
		image: influencer.profilePhotoUrl ?? void 0,
		jobTitle: influencer.niche ?? "Fragrance Reviewer",
		sameAs: [influencer.tiktokHandle ? `https://tiktok.com/@${influencer.tiktokHandle}` : null, influencer.instagramHandle ? `https://instagram.com/${influencer.instagramHandle}` : null].filter(Boolean)
	};
	const hrefLangs = [
		{
			lang: "ar",
			href: `${SITE_URL}/influencer/${slug}`
		},
		{
			lang: "en",
			href: `${SITE_URL}/en/influencer/${slug}`
		},
		{
			lang: "fr",
			href: `${SITE_URL}/fr/influencer/${slug}`
		},
		{
			lang: "x-default",
			href: `${SITE_URL}/influencer/${slug}`
		}
	];
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: t("seo.influencer_title", { name }),
		description: t("seo.influencer_desc", {
			name,
			niche: influencer.niche ? ` — ${influencer.niche}` : "",
			rating: influencer.avgOverallRating ? ` (${influencer.avgOverallRating.toFixed(1)}/5)` : ""
		}),
		canonical: `${SITE_URL}/influencer/${slug}`,
		ogImage: influencer.profilePhotoUrl ?? void 0,
		ogType: "profile",
		lang,
		hrefLangs,
		schema: personSchema
	}), /* @__PURE__ */ jsxs("div", {
		className: "max-w-3xl mx-auto px-4 py-10 space-y-8",
		dir: "auto",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-5",
				children: [/* @__PURE__ */ jsx(Avatar, {
					src: influencer.profilePhotoUrl ?? void 0,
					initials: name,
					className: "w-20 h-20 shadow text-2xl font-bold"
				}), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ jsx("h1", {
							className: "text-2xl font-bold",
							children: name
						}), influencer.isVerified && /* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700",
							children: ["✓ ", t("influencers.verified")]
						})]
					}),
					influencer.niche && /* @__PURE__ */ jsx("p", {
						className: "text-neutral-500 text-sm mt-0.5",
						children: influencer.niche
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex gap-4 mt-2 text-sm text-neutral-500",
						children: [
							influencer.tiktokFollowers && /* @__PURE__ */ jsxs("span", { children: [
								"TikTok: ",
								(influencer.tiktokFollowers / 1e3).toFixed(0),
								"K"
							] }),
							/* @__PURE__ */ jsxs("span", { children: [
								influencer.totalReviews,
								" ",
								t("influencers.reviews")
							] }),
							influencer.avgOverallRating && /* @__PURE__ */ jsxs("span", { children: ["★ ", influencer.avgOverallRating.toFixed(1)] })
						]
					})
				] })]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex gap-3 flex-wrap",
				children: [influencer.tiktokHandle && /* @__PURE__ */ jsxs("a", {
					href: `https://tiktok.com/@${influencer.tiktokHandle}`,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "px-4 py-1.5 rounded-full border border-neutral-200 text-sm hover:border-neutral-400 transition-colors",
					children: [
						"@",
						influencer.tiktokHandle,
						" · TikTok"
					]
				}), influencer.instagramHandle && /* @__PURE__ */ jsxs("a", {
					href: `https://instagram.com/${influencer.instagramHandle}`,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "px-4 py-1.5 rounded-full border border-neutral-200 text-sm hover:border-neutral-400 transition-colors",
					children: [
						"@",
						influencer.instagramHandle,
						" · Instagram"
					]
				})]
			}),
			isAuthenticated && /* @__PURE__ */ jsxs("div", {
				className: "border border-neutral-200 rounded-2xl p-6 space-y-4",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-base font-semibold",
					children: t("influencers.write_review")
				}), submitted ? /* @__PURE__ */ jsxs("p", {
					className: "text-green-600 text-sm",
					children: ["✓ ", t("vote.submitted")]
				}) : /* @__PURE__ */ jsxs("form", {
					onSubmit: (e) => {
						e.preventDefault();
						reviewMutation.mutate(reviewForm);
					},
					className: "space-y-4",
					children: [
						[
							{
								label: t("influencers.accuracy"),
								field: "accuracyRating"
							},
							{
								label: t("influencers.budget"),
								field: "budgetVarietyRating"
							},
							{
								label: t("influencers.authenticity"),
								field: "authenticityRating"
							}
						].map(({ label, field }) => /* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-sm text-neutral-600 w-36 shrink-0",
								children: label
							}), /* @__PURE__ */ jsx(StarRating$1, {
								value: reviewForm[field],
								onChange: (v) => setReviewForm((f) => ({
									...f,
									[field]: v
								}))
							})]
						}, field)),
						/* @__PURE__ */ jsx("textarea", {
							value: reviewForm.comment,
							onChange: (e) => setReviewForm((f) => ({
								...f,
								comment: e.target.value
							})),
							rows: 3,
							placeholder: t("vote.review_text"),
							className: "w-full px-3 py-2 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-neutral-400 resize-none",
							dir: "auto"
						}),
						/* @__PURE__ */ jsx("button", {
							type: "submit",
							disabled: reviewMutation.isPending || reviewForm.accuracyRating === 0,
							className: "shimmer px-5 py-2 rounded-full bg-neutral-900 text-white text-sm font-semibold shadow-primary-black disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98] transition-transform",
							children: reviewMutation.isPending ? t("common.loading") : t("common.submit")
						})
					]
				})]
			})
		]
	})] });
}
//#endregion
//#region app/routes/influencer.tsx
var influencer_exports = /* @__PURE__ */ __exportAll({ default: () => InfluencerDetailPage });
//#endregion
//#region src/api/fragrances.ts
var fragrancesApi = {
	browse: (query) => apiClient.get("/scent/fragrances", { params: query }).then((r) => r.data),
	getBySlug: (slug) => apiClient.get(`/scent/fragrances/${slug}`).then((r) => r.data),
	getTrending: (count = 20) => apiClient.get("/scent/trending", { params: { count } }).then((r) => r.data),
	getSimilar: (id) => apiClient.get(`/scent/fragrances/${id}/similar`).then((r) => r.data),
	getPrices: (id) => apiClient.get(`/scent/fragrances/${id}/prices`).then((r) => r.data),
	getDupes: (id) => apiClient.get(`/scent/fragrances/${id}/dupes`).then((r) => r.data),
	getLayeringPairs: (id) => apiClient.get(`/scent/fragrances/${id}/layering-pairs`).then((r) => r.data),
	submitVote: (id, vote) => apiClient.post(`/scent/fragrances/${id}/vote`, vote).then((r) => r.data),
	getMyVote: (id) => apiClient.get(`/scent/fragrances/${id}/my-vote`).then((r) => r.data),
	deleteVote: (id) => apiClient.delete(`/scent/fragrances/${id}/vote`),
	compare: (ids) => apiClient.get("/scent/compare", { params: { ids: ids.join(",") } }).then((r) => r.data)
};
//#endregion
//#region src/pages/ComparePage.tsx
function formatBool(val) {
	if (val === void 0) return /* @__PURE__ */ jsx("span", {
		className: "text-neutral-300",
		children: "—"
	});
	return val ? /* @__PURE__ */ jsx("span", {
		className: "text-green-brand font-semibold",
		children: "✓"
	}) : /* @__PURE__ */ jsx("span", {
		className: "text-neutral-300",
		children: "✗"
	});
}
function StarRating({ value }) {
	if (value === void 0) return /* @__PURE__ */ jsx("span", {
		className: "text-neutral-300",
		children: "—"
	});
	return /* @__PURE__ */ jsxs("span", {
		className: "text-amber-500 font-bold tabular-nums",
		children: ["★ ", value.toFixed(1)]
	});
}
function ComparePage() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const DATA_ROWS = [
		{
			label: t("compare.brand"),
			key: (d) => /* @__PURE__ */ jsx("span", {
				className: "font-medium",
				children: d.brandName
			})
		},
		{
			label: t("compare.family"),
			key: (d) => d.familyPrimary ?? "—"
		},
		{
			label: t("compare.concentration"),
			key: (d) => d.concentrationType ?? "—"
		},
		{
			label: t("compare.gender"),
			key: (d) => d.genderOfficial ?? "—"
		},
		{
			label: t("compare.overall_rating"),
			key: (d) => /* @__PURE__ */ jsx(StarRating, { value: d.overallRating })
		},
		{
			label: t("compare.longevity_scale"),
			key: (d) => d.longevityAvg != null ? `${d.longevityAvg.toFixed(1)} / 5` : "—"
		},
		{
			label: t("compare.sillage_scale"),
			key: (d) => d.sillageAvg != null ? `${d.sillageAvg.toFixed(1)} / 5` : "—"
		},
		{
			label: t("compare.alcohol_free"),
			key: (d) => formatBool(d.isAlcoholFree)
		},
		{
			label: t("compare.contains_oud"),
			key: (d) => d.containsOud ? /* @__PURE__ */ jsxs("span", {
				className: "text-amber-700 font-semibold",
				children: ["✓", d.oudGrade ? ` ${d.oudGrade}` : ""]
			}) : /* @__PURE__ */ jsx("span", {
				className: "text-neutral-300",
				children: "✗"
			})
		},
		{
			label: t("compare.launch_year"),
			key: (d) => d.launchYear ?? "—"
		}
	];
	const { items, remove, clear } = useCompareStore();
	const ids = items.map((i) => i.id);
	const { data: details, isLoading } = useQuery({
		queryKey: ["compare", ids],
		queryFn: () => fragrancesApi.compare(ids),
		enabled: ids.length > 0
	});
	const fragrances = details ?? [];
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-white",
		dir: "auto",
		children: [/* @__PURE__ */ jsx("div", {
			className: "bg-neutral-1000 text-white",
			children: /* @__PURE__ */ jsxs("div", {
				className: "max-w-6xl mx-auto px-4 py-10 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
					className: "text-[11px] text-neutral-400 uppercase tracking-widest mb-2",
					children: ["⚖️ ", t("compare.eyebrow", "مقارنة العطور")]
				}), /* @__PURE__ */ jsx("h1", {
					className: "text-3xl font-bold",
					children: t("compare.title")
				})] }), items.length > 0 && /* @__PURE__ */ jsxs("button", {
					onClick: clear,
					className: "text-[12px] text-neutral-400 hover:text-red-400 transition-colors font-medium shrink-0",
					children: [t("compare.clear"), " ✕"]
				})]
			})
		}), /* @__PURE__ */ jsx("div", {
			className: "max-w-6xl mx-auto py-8 px-4",
			children: items.length === 0 ? /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-center justify-center py-24 gap-5 text-center",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-6xl",
						children: "⚖️"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "text-neutral-500 text-[14px]",
						children: t("compare.empty")
					}),
					/* @__PURE__ */ jsx(Link$1, {
						to: `${prefix}/browse`,
						className: "shimmer inline-flex items-center px-6 py-3 rounded-full bg-neutral-1000 text-white\n                           font-semibold text-[13px] shadow-primary-black hover:scale-[1.02] active:scale-[0.98] transition-transform",
						children: t("wardrobe.empty_cta")
					})
				]
			}) : /* @__PURE__ */ jsx("div", {
				className: "overflow-x-auto rounded-3xl border border-neutral-100 shadow-card",
				children: /* @__PURE__ */ jsxs("table", {
					className: "w-full min-w-[520px] text-[13px] border-collapse",
					children: [/* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", {
						className: "bg-neutral-50 border-b border-neutral-100",
						children: [/* @__PURE__ */ jsx("th", { className: "w-36 p-4 text-end font-semibold text-neutral-400 text-[11px] uppercase tracking-widest" }), items.slice(0, 3).map((item) => {
							const detail = fragrances.find((d) => d.id === item.id);
							const nameAr = detail?.nameAr ?? item.nameAr;
							const nameEn = detail?.nameEn ?? item.nameEn;
							const imgUrl = detail?.imageMain ?? item.imageMain;
							return /* @__PURE__ */ jsx("th", {
								className: "p-5 text-center align-top min-w-[160px]",
								children: /* @__PURE__ */ jsxs("div", {
									className: "flex flex-col items-center gap-2.5",
									children: [
										/* @__PURE__ */ jsx("div", {
											className: "relative w-24 h-24",
											children: imgUrl ? /* @__PURE__ */ jsx("img", {
												src: imgUrl,
												alt: lang === "ar" ? nameAr : nameEn,
												className: "w-full h-full object-contain mix-blend-multiply"
											}) : /* @__PURE__ */ jsx("div", {
												className: "w-full h-full rounded-2xl bg-neutral-100 flex items-center justify-center text-3xl",
												children: "🌸"
											})
										}),
										/* @__PURE__ */ jsx("span", {
											className: "font-bold text-neutral-900 text-[13px] text-center leading-snug",
											children: lang === "ar" ? nameAr : nameEn
										}),
										isLoading ? /* @__PURE__ */ jsx("span", { className: "w-20 h-3 rounded-full bg-neutral-200 animate-pulse inline-block" }) : /* @__PURE__ */ jsx("span", {
											className: "text-[11px] text-neutral-400",
											children: detail?.brandName ?? item.brandName
										}),
										/* @__PURE__ */ jsxs("button", {
											onClick: () => remove(item.id),
											className: "text-[11px] text-neutral-400 hover:text-red-400 transition-colors mt-0.5",
											children: ["✕ ", t("common.remove")]
										})
									]
								})
							}, item.id);
						})]
					}) }), /* @__PURE__ */ jsx("tbody", { children: DATA_ROWS.map(({ label, key }, rowIdx) => /* @__PURE__ */ jsxs("tr", {
						className: `border-b border-neutral-50 ${rowIdx % 2 === 0 ? "bg-white" : "bg-neutral-50/40"}`,
						children: [/* @__PURE__ */ jsx("td", {
							className: "p-4 text-[11px] font-semibold text-neutral-400 uppercase tracking-wide text-end whitespace-nowrap",
							children: label
						}), items.slice(0, 3).map((item) => {
							const detail = fragrances.find((d) => d.id === item.id);
							return /* @__PURE__ */ jsx("td", {
								className: "p-4 text-center text-neutral-800",
								children: isLoading ? /* @__PURE__ */ jsx("span", { className: "inline-block w-16 h-3 rounded-full bg-neutral-200 animate-pulse" }) : detail ? key(detail) : /* @__PURE__ */ jsx("span", {
									className: "text-neutral-300",
									children: "—"
								})
							}, item.id);
						})]
					}, label)) })]
				})
			})
		})]
	}) });
}
//#endregion
//#region app/routes/compare.tsx
var compare_exports = /* @__PURE__ */ __exportAll({ default: () => ComparePage });
//#endregion
//#region src/pages/FinderPage.tsx
function FinderPage() {
	const { lang, seeds, matches, query, searchResults, maxSeeds } = useLoaderData();
	const { t } = useTranslation();
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const base = `${prefix}/finder`;
	const seedFolders = seeds.map((s) => s.folder);
	const full = seedFolders.length >= maxSeeds;
	/** Every control is a link or a GET form, so the whole finder works without JS. */
	const urlFor = (folders, q) => {
		const qs = new URLSearchParams();
		for (const f of folders) qs.append("seed", f);
		if (q) qs.set("q", q);
		const s = qs.toString();
		return s ? `${base}?${s}` : base;
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: t("finder.title", "مُكتشف العطور"),
		description: t("seo.finder_desc", "اختر عطوراً تحبها ودع المُكتشف يقترح عطوراً من العائلة العطرية نفسها."),
		canonical: `${SITE_URL}${base}`,
		lang,
		robots: seedFolders.length ? "noindex,follow" : void 0
	}), /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-6xl px-4 py-10",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "mb-8 max-w-2xl",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "text-2xl font-bold text-neutral-900 sm:text-3xl",
					children: t("finder.title", "مُكتشف العطور")
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm leading-relaxed text-neutral-600",
					children: t("finder.intro", "أضف عطراً أو أكثر تحبه، وسنقترح عطوراً تشترك معه في العائلات العطرية والمكوّنات. كلما أضفت عطراً، صار الاقتراح أدق.")
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mb-8 rounded-xl border border-neutral-200 bg-white p-4 sm:p-5",
				children: [
					/* @__PURE__ */ jsxs("h2", {
						className: "text-sm font-semibold text-neutral-900",
						children: [
							t("finder.your_picks", "اختياراتك"),
							" ",
							/* @__PURE__ */ jsxs("span", {
								className: "font-normal text-neutral-500",
								children: [
									"(",
									seedFolders.length,
									"/",
									maxSeeds,
									")"
								]
							})
						]
					}),
					seeds.length === 0 ? /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-sm text-neutral-500",
						children: t("finder.no_seeds", "لم تختر أي عطر بعد. ابحث عن عطر تحبه وأضفه.")
					}) : /* @__PURE__ */ jsx("ul", {
						className: "mt-3 flex flex-wrap gap-2",
						children: seeds.map((seed) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
							to: urlFor(seedFolders.filter((f) => f !== seed.folder), query),
							className: "inline-flex items-center gap-2 rounded-full border border-neutral-900 bg-neutral-900 px-3 py-1.5 text-sm text-white transition-colors hover:bg-neutral-700",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "max-w-[16rem] truncate",
									children: [
										seed.name,
										" ",
										/* @__PURE__ */ jsxs("span", {
											className: "opacity-70",
											children: ["· ", seed.brand]
										})
									]
								}),
								/* @__PURE__ */ jsx("span", {
									"aria-hidden": true,
									children: "×"
								}),
								/* @__PURE__ */ jsx("span", {
									className: "sr-only",
									children: t("common.remove", "إزالة")
								})
							]
						}) }, seed.folder))
					}),
					/* @__PURE__ */ jsxs("form", {
						method: "get",
						action: base,
						className: "mt-4 flex flex-wrap gap-2",
						children: [
							seedFolders.map((f) => /* @__PURE__ */ jsx("input", {
								type: "hidden",
								name: "seed",
								value: f
							}, f)),
							/* @__PURE__ */ jsx("input", {
								type: "search",
								name: "q",
								defaultValue: query,
								disabled: full,
								placeholder: t("finder.search_placeholder", "ابحث عن عطر بالاسم أو العلامة…"),
								"aria-label": t("finder.search_label", "ابحث عن عطر لإضافته"),
								className: "min-w-0 flex-1 rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-neutral-900 focus:outline-none disabled:bg-neutral-50 disabled:text-neutral-400"
							}),
							/* @__PURE__ */ jsx("button", {
								type: "submit",
								disabled: full,
								className: "rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700 disabled:cursor-not-allowed disabled:bg-neutral-300",
								children: t("common.search", "بحث")
							})
						]
					}),
					full && /* @__PURE__ */ jsx("p", {
						className: "mt-2 text-xs text-neutral-500",
						children: t("finder.max_reached", "وصلت للحد الأقصى. احذف عطراً لإضافة آخر.")
					}),
					query && !full && (searchResults.length === 0 ? /* @__PURE__ */ jsx("p", {
						className: "mt-3 text-sm text-neutral-500",
						children: t("common.no_results", "لا توجد نتائج")
					}) : /* @__PURE__ */ jsx("ul", {
						className: "mt-3 flex flex-col gap-1.5",
						children: searchResults.filter((r) => !seedFolders.includes(r.folder)).map((result) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
							to: urlFor([...seedFolders, result.folder]),
							className: "flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2 text-sm text-neutral-800 transition-colors hover:border-neutral-900 hover:bg-neutral-50",
							children: [/* @__PURE__ */ jsx("span", {
								"aria-hidden": true,
								className: "text-neutral-400",
								children: "+"
							}), /* @__PURE__ */ jsxs("span", {
								className: "truncate",
								children: [result.name, /* @__PURE__ */ jsxs("span", {
									className: "text-neutral-500",
									children: [" · ", result.brand]
								})]
							})]
						}) }, result.folder))
					}))
				]
			}),
			seedFolders.length === 0 ? /* @__PURE__ */ jsx("p", {
				className: "rounded-xl border border-dashed border-neutral-300 py-16 text-center text-sm text-neutral-500",
				children: t("finder.empty_hint", "أضف عطراً واحداً على الأقل لعرض الاقتراحات.")
			}) : matches.length === 0 ? /* @__PURE__ */ jsx("p", {
				className: "py-16 text-center text-sm text-neutral-500",
				children: t("common.no_results", "لا توجد نتائج")
			}) : /* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
				className: "mb-5 text-xl font-bold text-neutral-900",
				children: t("finder.results", "قد يعجبك أيضاً")
			}), /* @__PURE__ */ jsx("ul", {
				className: "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4",
				children: matches.map((match) => /* @__PURE__ */ jsxs("li", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ jsx(CorpusTile, {
						perfume: match.perfume,
						href: `${prefix}/fragrance/${encodeURIComponent(match.perfume.folder)}`
					}), (match.sharedAccords.length > 0 || match.sharedNotes.length > 0) && /* @__PURE__ */ jsxs("div", {
						className: "px-1 text-[11px] leading-relaxed text-neutral-500",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "font-medium text-neutral-600",
								children: [t("finder.because", "يشترك في"), ":"]
							}),
							" ",
							[...match.sharedAccords, ...match.sharedNotes].slice(0, 4).join("، ")
						]
					})]
				}, match.perfume.folder))
			})] })
		]
	})] });
}
//#endregion
//#region app/routes/finder.tsx
var finder_exports = /* @__PURE__ */ __exportAll({
	default: () => finder_default,
	loader: () => loader$1,
	meta: () => meta$1
});
/** Enough seeds to sharpen a profile, few enough to keep the URL shareable. */
var MAX_SEEDS = 5;
async function loader$1({ params, request }) {
	const lang = [
		"ar",
		"en",
		"fr"
	].includes(params.lang ?? "") ? params.lang : "ar";
	const url = new URL(request.url);
	const seedFolders = url.searchParams.getAll("seed").filter(Boolean).slice(0, MAX_SEEDS);
	const query = url.searchParams.get("q")?.trim() ?? "";
	const [seeds, matches, searchResults] = await Promise.all([
		cardsForFolders(seedFolders),
		seedFolders.length ? findBySeeds(seedFolders, 24) : Promise.resolve([]),
		query ? searchPerfumes(query, 12) : Promise.resolve([])
	]);
	return {
		lang,
		seeds,
		matches,
		query,
		searchResults,
		maxSeeds: MAX_SEEDS
	};
}
var finder_default = UNSAFE_withComponentProps(FinderPage);
function meta$1({ data }) {
	const lang = data?.lang ?? "ar";
	return buildMeta({
		title: "مُكتشف العطور",
		description: "اختر عطوراً تحبها ودع المُكتشف يقترح عطوراً من العائلة العطرية نفسها — بالمكوّنات والعائلات، لا بالتخمين.",
		canonical: `${SITE_URL$1}${lang === "ar" ? "" : `/${lang}`}/finder`,
		lang,
		robots: data?.seeds.length ? "noindex,follow" : void 0
	});
}
//#endregion
//#region src/pages/AccordSearchPage.tsx
function AccordSearchPage() {
	const { lang, accords } = useLoaderData();
	const { t } = useTranslation();
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const max = accords[0]?.count ?? 1;
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: t("home.explore_accords", "العائلات العطرية"),
		description: t("seo.accords_desc", "استكشف العائلات العطرية — خشبي، حمضي، زهري، عنبري وغيرها."),
		canonical: `${SITE_URL}${prefix}/discover/accords`,
		lang
	}), /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-5xl px-4 py-10",
		children: [/* @__PURE__ */ jsxs("header", {
			className: "mb-8",
			children: [/* @__PURE__ */ jsx("h1", {
				className: "text-2xl font-bold text-neutral-900 sm:text-3xl",
				children: t("home.explore_accords", "العائلات العطرية")
			}), /* @__PURE__ */ jsxs("p", {
				className: "mt-2 text-sm text-neutral-600",
				children: [
					accords.length.toLocaleString("ar-EG"),
					" ",
					t("accords.count_label", "عائلة عطرية")
				]
			})]
		}), accords.length === 0 ? /* @__PURE__ */ jsx("p", {
			className: "py-16 text-center text-neutral-500",
			children: t("common.no_results", "لا توجد نتائج")
		}) : /* @__PURE__ */ jsx("ul", {
			className: "space-y-2",
			children: accords.map((accord) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
				to: `${prefix}/browse?accord=${encodeURIComponent(accord.name)}`,
				className: "group flex items-center gap-4 rounded-lg border border-neutral-200 bg-white p-3 transition-colors hover:border-neutral-900",
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "w-40 shrink-0 truncate text-sm font-medium text-neutral-900",
						children: accord.name
					}),
					/* @__PURE__ */ jsx("span", {
						className: "h-2 flex-1 overflow-hidden rounded-full bg-neutral-100",
						children: /* @__PURE__ */ jsx("span", {
							className: "block h-full rounded-full bg-neutral-800",
							style: { width: `${Math.max(2, accord.count / max * 100)}%` }
						})
					}),
					/* @__PURE__ */ jsx("span", {
						className: "w-14 shrink-0 text-end text-xs text-neutral-500",
						children: accord.count.toLocaleString("ar-EG")
					})
				]
			}) }, accord.name))
		})]
	})] });
}
//#endregion
//#region app/routes/discover-accords.tsx
var discover_accords_exports = /* @__PURE__ */ __exportAll({
	default: () => discover_accords_default,
	loader: () => loader,
	meta: () => meta
});
async function loader({ params }) {
	return {
		lang: [
			"ar",
			"en",
			"fr"
		].includes(params.lang ?? "") ? params.lang : "ar",
		accords: await accordTerms(100)
	};
}
var discover_accords_default = UNSAFE_withComponentProps(AccordSearchPage);
function meta({ data }) {
	const lang = data?.lang ?? "ar";
	return buildMeta({
		title: "العائلات العطرية",
		description: "استكشف العائلات العطرية — خشبي، حمضي، زهري، عنبري وغيرها.",
		canonical: `${SITE_URL$1}${lang === "ar" ? "" : `/${lang}`}/discover/accords`,
		lang
	});
}
//#endregion
//#region src/api/discovery.ts
var discoveryApi = {
	accordSearch: (accords, minMatches = 1) => apiClient.get("/scent/discover/accord-search", { params: {
		...accords,
		f_min_matches: minMatches
	} }).then((r) => r.data),
	noteSearch: (notes, logic = "AND") => apiClient.get("/scent/discover/note-search", { params: {
		notes,
		logic
	} }).then((r) => r.data),
	topRated: () => apiClient.get("/scent/discover/top-rated").then((r) => r.data),
	mostVoted: () => apiClient.get("/scent/discover/most-voted").then((r) => r.data),
	recent: () => apiClient.get("/scent/discover/recent").then((r) => r.data)
};
//#endregion
//#region src/pages/NoteSearchPage.tsx
function NoteSearchPage() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const [selected, setSelected] = useState([]);
	const [logic, setLogic] = useState("AND");
	const { data: notes = [] } = useQuery({
		queryKey: ["notes"],
		queryFn: notesApi.list,
		staleTime: 36e5
	});
	const hasSelection = selected.length > 0;
	const { data: results, isLoading } = useQuery({
		queryKey: [
			"note-search",
			selected,
			logic
		],
		queryFn: () => discoveryApi.noteSearch(selected, logic),
		enabled: hasSelection
	});
	function toggleNote(slug) {
		setSelected((prev) => prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]);
	}
	const grouped = notes.reduce((acc, note) => {
		const cat = note.category || "other";
		if (!acc[cat]) acc[cat] = [];
		acc[cat].push(note);
		return acc;
	}, {});
	const hrefLangs = [
		{
			lang: "ar",
			href: `${SITE_URL}/discover/notes`
		},
		{
			lang: "en",
			href: `${SITE_URL}/en/discover/notes`
		},
		{
			lang: "fr",
			href: `${SITE_URL}/fr/discover/notes`
		},
		{
			lang: "x-default",
			href: `${SITE_URL}/discover/notes`
		}
	];
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: t("seo.notes_search_title"),
		description: t("seo.notes_search_desc"),
		canonical: `${SITE_URL}/discover/notes`,
		lang,
		hrefLangs
	}), /* @__PURE__ */ jsxs("div", {
		className: "max-w-5xl mx-auto px-4 py-10",
		dir: "auto",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "text-2xl font-bold mb-2",
				children: t("notes.title")
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex gap-2 mb-6",
				children: [["AND", "OR"].map((op) => /* @__PURE__ */ jsx("button", {
					onClick: () => setLogic(op),
					className: `px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${logic === op ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-200 text-neutral-600 hover:border-neutral-400"}`,
					children: op
				}, op)), hasSelection && /* @__PURE__ */ jsx("button", {
					onClick: () => setSelected([]),
					className: "ms-auto text-sm text-neutral-500 hover:text-neutral-900 transition-colors",
					children: t("browse.clear_all")
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "space-y-4 mb-8",
				children: Object.entries(grouped).sort().map(([cat, catNotes]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
					className: "text-xs uppercase tracking-widest text-neutral-400 mb-2",
					children: t(`notes.categories.${cat}`, cat)
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-2",
					children: catNotes.map((note) => {
						const name = lang === "ar" ? note.nameAr : lang === "fr" ? note.nameFr ?? note.nameEn : note.nameEn;
						const isActive = selected.includes(note.slug);
						return /* @__PURE__ */ jsx("button", {
							onClick: () => toggleNote(note.slug),
							className: `inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm transition-colors ${isActive ? "bg-neutral-900 text-white border-neutral-900" : "border-neutral-200 text-neutral-600 hover:border-neutral-400"}`,
							children: name
						}, note.id);
					})
				})] }, cat))
			}),
			hasSelection && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h2", {
				className: "text-base font-semibold mb-4",
				children: [
					t("browse.title"),
					" (",
					Array.isArray(results) ? results.length : 0,
					")"
				]
			}), isLoading ? /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
				children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsx("div", { className: "h-48 rounded-2xl bg-neutral-100 animate-pulse" }, i))
			}) : !results?.length ? /* @__PURE__ */ jsx(EmptyState, { title: t("browse.no_results") }) : /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
				children: results.map((f) => /* @__PURE__ */ jsx(FragranceCard, { fragrance: f }, f.id))
			})] })
		]
	})] });
}
//#endregion
//#region app/routes/discover-notes.tsx
var discover_notes_exports = /* @__PURE__ */ __exportAll({ default: () => NoteSearchPage });
//#endregion
//#region src/lib/storeProduct.ts
/**
* Marketplace products come back with loose, inconsistently populated fields
* (`id` vs `productId`, `name` vs `nameEn`/`nameAr`, `image` vs `images[]`),
* while the cart hook wants a narrow, fully-populated StoreProduct. These
* helpers are the single place that reconciles the two.
*/
function productId(p) {
	return p.productId ?? p.id;
}
function productName(p, lang) {
	return (lang === "ar" ? p.nameAr : p.nameEn) || p.name || p.nameEn || p.nameAr || "";
}
function productImage(p) {
	return p.image ?? p.images?.[0]?.thumbnailUrl ?? p.images?.[0]?.url ?? null;
}
/** Effective unit price — the sale price when the product is actually on sale. */
function productPrice(p) {
	return (p.onSale ?? p.hasDiscount) === true && p.salePrice != null ? p.salePrice : p.price ?? 0;
}
/** Returns null when the product lacks the id the cart API requires. */
function toStoreProduct(p) {
	const id = productId(p);
	if (id == null) return null;
	return {
		id,
		productId: p.productId,
		nameEn: p.nameEn ?? p.name,
		nameAr: p.nameAr ?? void 0,
		price: p.price ?? productPrice(p),
		discountedPrice: productPrice(p),
		imageUrl: productImage(p) ?? void 0
	};
}
//#endregion
//#region src/utils/formatPrice.ts
function formatPrice(amount, currency, lang) {
	try {
		const locale = lang === "ar" ? "ar-SA" : lang === "fr" ? "fr-FR" : "en-US";
		return new Intl.NumberFormat(locale, {
			style: "currency",
			currency,
			maximumFractionDigits: 2
		}).format(amount);
	} catch {
		return `${amount} ${currency}`;
	}
}
//#endregion
//#region src/components/Store/ProductCard.tsx
function ProductCard({ product, isBusy, isWishlisted, onAddToCart, onToggleWishlist }) {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const name = productName(product, lang);
	const image = productImage(product);
	const price = productPrice(product);
	const wasPrice = product.price ?? void 0;
	const discounted = price !== wasPrice && wasPrice != null;
	const outOfStock = product.inStock === false;
	return /* @__PURE__ */ jsxs("div", {
		className: "spring-enter rounded-3xl border border-neutral-100 bg-white p-4 flex flex-col gap-3\n                    hover:shadow-card transition-all duration-150",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "relative aspect-square rounded-2xl bg-neutral-50 overflow-hidden",
				children: [
					image ? /* @__PURE__ */ jsx("img", {
						src: image,
						alt: name,
						loading: "lazy",
						className: "w-full h-full object-cover"
					}) : /* @__PURE__ */ jsx("div", {
						className: "w-full h-full flex items-center justify-center text-3xl text-neutral-300",
						children: "🧴"
					}),
					/* @__PURE__ */ jsx("button", {
						type: "button",
						onClick: () => onToggleWishlist(product),
						"aria-label": t("shop.wishlist_toggle"),
						"aria-pressed": !!isWishlisted,
						className: "absolute top-2 end-2 w-9 h-9 rounded-full bg-white/90 backdrop-blur\n                     flex items-center justify-center shadow-sm hover:scale-110 transition-transform",
						children: /* @__PURE__ */ jsx("span", {
							className: clsx("text-base", isWishlisted ? "text-red-500" : "text-neutral-300"),
							children: isWishlisted ? "♥" : "♡"
						})
					}),
					outOfStock && /* @__PURE__ */ jsx("div", {
						className: "absolute inset-0 bg-white/70 flex items-center justify-center",
						children: /* @__PURE__ */ jsx("span", {
							className: "rounded-full bg-neutral-900 text-white text-[11px] font-bold px-3 py-1",
							children: t("shop.out_of_stock")
						})
					})
				]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "flex-1 min-w-0",
				children: [/* @__PURE__ */ jsx("h3", {
					className: "text-[13px] font-semibold text-neutral-900 line-clamp-2",
					children: name
				}), /* @__PURE__ */ jsxs("div", {
					className: "mt-1 flex items-baseline gap-2",
					children: [/* @__PURE__ */ jsx("span", {
						className: "text-[14px] font-bold text-neutral-900 tabular-nums",
						children: formatPrice(price, "SAR", lang)
					}), discounted && /* @__PURE__ */ jsx("span", {
						className: "text-[11px] text-neutral-400 line-through tabular-nums",
						children: formatPrice(wasPrice, "SAR", lang)
					})]
				})]
			}),
			/* @__PURE__ */ jsx("button", {
				type: "button",
				disabled: isBusy || outOfStock,
				onClick: () => onAddToCart(product),
				className: "h-10 rounded-xl bg-neutral-1000 text-white text-[12px] font-semibold\n                   shadow-primary-black active:scale-[0.97] transition-transform\n                   disabled:opacity-40 disabled:active:scale-100",
				children: isBusy ? t("shop.adding") : t("shop.add_to_cart")
			})
		]
	});
}
//#endregion
//#region src/api/productService.ts
var ProductService = {
	getProducts: async (params) => {
		return unwrap(await storeApiClient.get("/api/v1/services/marketplace/products", { params }));
	},
	getProductById: async (id) => {
		return unwrap(await storeApiClient.get(`/api/v1/services/marketplace/products/${id}`));
	}
};
//#endregion
//#region src/api/guestAuth.ts
var GUEST_TOKEN_KEY = "_OURSCENT_GUEST_TOKEN";
var GUEST_DEVICE_ID_KEY = "_OURSCENT_GUEST_DEVICE_ID";
function getOrCreateDeviceId() {
	let id = localStorage.getItem(GUEST_DEVICE_ID_KEY);
	if (!id) {
		id = `web-${v4()}`;
		localStorage.setItem(GUEST_DEVICE_ID_KEY, id);
	}
	return id;
}
function getBrowserName() {
	const ua = navigator.userAgent;
	if (ua.includes("Chrome")) return "Chrome";
	if (ua.includes("Firefox")) return "Firefox";
	if (ua.includes("Safari")) return "Safari";
	if (ua.includes("Edge")) return "Edge";
	return "Unknown";
}
var ensurePromise = null;
async function ensureGuestToken() {
	const existing = localStorage.getItem(GUEST_TOKEN_KEY);
	if (existing) return existing;
	if (ensurePromise) return ensurePromise;
	ensurePromise = (async () => {
		try {
			const deviceId = getOrCreateDeviceId();
			const body = (await storeApiClient.post("/identity/guest-login", {
				deviceId,
				userAgent: navigator.userAgent,
				platform: navigator.platform,
				timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
				language: navigator.language,
				browserName: getBrowserName()
			})).data;
			const token = body?.data?.token ?? body?.token ?? "";
			if (token) {
				localStorage.setItem(GUEST_TOKEN_KEY, token);
				document.cookie = `ourscentGuestToken=${token}; path=/; max-age=86400`;
			}
			return token;
		} finally {
			ensurePromise = null;
		}
	})();
	return ensurePromise;
}
//#endregion
//#region src/pages/ShopPage.tsx
function ShopPage() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const { addToCart, toggleWishlist, isInWishlist, updatingProductId, cartCount } = useStoreCart();
	const [guestReady, setGuestReady] = useState(false);
	useEffect(() => {
		if (!isStoreEnabled) return;
		ensureGuestToken().catch(() => {}).finally(() => setGuestReady(true));
	}, []);
	const { data: products = [], isLoading, isError } = useQuery({
		queryKey: ["shop-products", STORE_PROVIDER_ID],
		queryFn: () => ProductService.getProducts({
			providerId: STORE_PROVIDER_ID,
			pageSize: 48
		}),
		enabled: isStoreEnabled && guestReady
	});
	if (!isStoreEnabled) return /* @__PURE__ */ jsx(Navigate$1, {
		to: `${prefix}/`,
		replace: true
	});
	const handleAdd = async (product) => {
		const storeProduct = toStoreProduct(product);
		if (!storeProduct) return;
		try {
			await addToCart(storeProduct);
			toast.success(t("shop.added_to_cart"));
		} catch {
			toast.error(t("shop.add_failed"));
		}
	};
	const handleToggleWishlist = (product) => {
		const storeProduct = toStoreProduct(product);
		if (!storeProduct) return;
		toggleWishlist(storeProduct);
	};
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: t("shop.title"),
		description: t("shop.subtitle"),
		lang,
		robots: "noindex"
	}), /* @__PURE__ */ jsxs("div", {
		className: "max-w-7xl mx-auto px-4 py-10",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-end justify-between gap-4 mb-8",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsxs("p", {
					className: "text-[11px] text-neutral-400 uppercase tracking-widest mb-3",
					children: ["🛍️ ", t("shop.eyebrow")]
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "text-3xl md:text-4xl font-bold",
					children: t("shop.title")
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-neutral-400 text-[13px]",
					children: t("shop.subtitle")
				})
			] }), /* @__PURE__ */ jsxs(Link$1, {
				to: `${prefix}/cart`,
				className: "shrink-0 h-11 px-5 rounded-xl border border-neutral-200 text-[13px] font-semibold\n                       flex items-center gap-2 hover:border-neutral-400 transition-colors",
				children: [
					"🛒 ",
					t("cart.title"),
					cartCount > 0 && /* @__PURE__ */ jsx("span", {
						className: "rounded-full bg-neutral-1000 text-white text-[11px] font-bold px-2 py-0.5 tabular-nums",
						children: cartCount
					})
				]
			})]
		}), isLoading ? /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
			children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ jsxs("div", {
				className: "rounded-3xl border border-neutral-100 p-4 space-y-3",
				children: [
					/* @__PURE__ */ jsx("div", { className: "aspect-square rounded-2xl bg-neutral-100 animate-pulse" }),
					/* @__PURE__ */ jsx("div", { className: "h-4 bg-neutral-100 rounded animate-pulse" }),
					/* @__PURE__ */ jsx("div", { className: "h-9 bg-neutral-100 rounded-xl animate-pulse" })
				]
			}, i))
		}) : isError ? /* @__PURE__ */ jsx("div", {
			className: "py-24 text-center text-neutral-400",
			children: t("shop.load_error")
		}) : products.length === 0 ? /* @__PURE__ */ jsx("div", {
			className: "rounded-3xl border border-dashed border-neutral-200 py-24 text-center",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-neutral-400",
				children: t("shop.empty")
			})
		}) : /* @__PURE__ */ jsx("div", {
			className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
			children: products.map((p) => {
				const id = productId(p);
				return /* @__PURE__ */ jsx(ProductCard, {
					product: p,
					isBusy: updatingProductId === id,
					isWishlisted: id != null && isInWishlist(id),
					onAddToCart: handleAdd,
					onToggleWishlist: handleToggleWishlist
				}, id ?? p.name);
			})
		})]
	})] });
}
//#endregion
//#region app/routes/shop.tsx
var shop_exports = /* @__PURE__ */ __exportAll({ default: () => ShopPage });
//#endregion
//#region src/pages/CartPage.tsx
function CartPage() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const { isAuthenticated } = useAuth();
	const { cartItems, cartTotal, cartCount, cartId, cartPriceCalculation, cartLoading, updatingProductId, isApplyingCoupon, updateQuantity, removeFromCart, clearCart, applyCoupon, refetchCart } = useStoreCart();
	const [coupon, setCoupon] = useState("");
	const [placing, setPlacing] = useState(false);
	const [placedOrder, setPlacedOrder] = useState(false);
	const { register, handleSubmit, formState: { errors } } = useForm();
	useEffect(() => {
		if (!isStoreEnabled) return;
		ensureGuestToken().catch(() => {});
	}, []);
	if (!isStoreEnabled) return /* @__PURE__ */ jsx(Navigate$1, {
		to: `${prefix}/`,
		replace: true
	});
	const money = (v) => formatPrice(v ?? 0, "SAR", lang);
	const calc = cartPriceCalculation;
	const onCheckout = handleSubmit(async (form) => {
		if (!STORE_PROVIDER_ID || cartId == null) return;
		setPlacing(true);
		try {
			const { orderNotes, ...customer } = form;
			const payload = {
				providerId: STORE_PROVIDER_ID,
				cartId,
				customer,
				paymentMethod: "CashOnDelivery",
				orderNotes: orderNotes || null,
				couponCode: calc?.couponCode ?? void 0
			};
			if (isAuthenticated) await checkout(STORE_PROVIDER_ID, payload);
			else await createOrderForGuest(STORE_PROVIDER_ID, payload, getOrCreateDeviceId());
			setPlacedOrder(true);
			await refetchCart();
			toast.success(t("checkout.order_placed"));
		} catch (err) {
			toast.error(err?.message ?? t("checkout.order_failed"));
		} finally {
			setPlacing(false);
		}
	});
	if (placedOrder) return /* @__PURE__ */ jsxs("div", {
		className: "max-w-lg mx-auto px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ jsx("div", {
				className: "text-5xl mb-4",
				children: "✅"
			}),
			/* @__PURE__ */ jsx("h1", {
				className: "text-2xl font-bold mb-2",
				children: t("checkout.order_placed")
			}),
			/* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-neutral-500 mb-8",
				children: t("checkout.order_placed_sub")
			}),
			/* @__PURE__ */ jsx(Link$1, {
				to: `${prefix}/shop`,
				className: "inline-flex h-11 px-6 rounded-xl bg-neutral-1000 text-white text-[13px]\n                     font-semibold items-center shadow-primary-black",
				children: t("shop.continue_shopping")
			})
		]
	});
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SEO, {
		title: t("cart.title"),
		lang,
		robots: "noindex"
	}), /* @__PURE__ */ jsxs("div", {
		className: "max-w-5xl mx-auto px-4 py-10",
		children: [/* @__PURE__ */ jsx("h1", {
			className: "text-3xl font-bold mb-8",
			children: t("cart.title")
		}), cartLoading ? /* @__PURE__ */ jsx("div", {
			className: "space-y-3",
			children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ jsx("div", { className: "h-24 rounded-2xl bg-neutral-100 animate-pulse" }, i))
		}) : cartItems.length === 0 ? /* @__PURE__ */ jsxs("div", {
			className: "rounded-3xl border border-dashed border-neutral-200 py-24 text-center",
			children: [/* @__PURE__ */ jsx("p", {
				className: "text-[13px] text-neutral-400 mb-6",
				children: t("cart.empty")
			}), /* @__PURE__ */ jsx(Link$1, {
				to: `${prefix}/shop`,
				className: "inline-flex h-11 px-6 rounded-xl bg-neutral-1000 text-white text-[13px]\n                         font-semibold items-center shadow-primary-black",
				children: t("shop.continue_shopping")
			})]
		}) : /* @__PURE__ */ jsxs("div", {
			className: "grid lg:grid-cols-[1fr_340px] gap-8 items-start",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "space-y-3",
				children: [cartItems.map((item) => {
					const name = (lang === "ar" ? item.nameAr : item.nameEn) || item.nameEn || item.nameAr || "";
					const unit = item.discountedPrice || item.price;
					const busy = updatingProductId === (item.productId ?? item.id);
					return /* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-4 p-4 rounded-2xl border border-neutral-100 bg-white",
						children: [
							/* @__PURE__ */ jsx("div", {
								className: "w-16 h-16 shrink-0 rounded-xl bg-neutral-50 overflow-hidden",
								children: item.imageUrl ? /* @__PURE__ */ jsx("img", {
									src: item.imageUrl,
									alt: name,
									className: "w-full h-full object-cover"
								}) : /* @__PURE__ */ jsx("div", {
									className: "w-full h-full flex items-center justify-center text-xl text-neutral-300",
									children: "🧴"
								})
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex-1 min-w-0",
								children: [/* @__PURE__ */ jsx("p", {
									className: "text-[13px] font-semibold text-neutral-900 line-clamp-2",
									children: name
								}), /* @__PURE__ */ jsx("p", {
									className: "text-[12px] text-neutral-500 tabular-nums mt-0.5",
									children: money(unit)
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-1.5",
								children: [
									/* @__PURE__ */ jsx("button", {
										type: "button",
										"aria-label": t("cart.decrease"),
										disabled: busy,
										onClick: () => updateQuantity(item.id, item.quantity - 1),
										className: "w-8 h-8 rounded-lg border border-neutral-200 text-[15px]\n                                   hover:border-neutral-400 disabled:opacity-40 transition-colors",
										children: "−"
									}),
									/* @__PURE__ */ jsx("span", {
										className: "w-8 text-center text-[13px] font-semibold tabular-nums",
										children: item.quantity
									}),
									/* @__PURE__ */ jsx("button", {
										type: "button",
										"aria-label": t("cart.increase"),
										disabled: busy,
										onClick: () => updateQuantity(item.id, item.quantity + 1),
										className: "w-8 h-8 rounded-lg border border-neutral-200 text-[15px]\n                                   hover:border-neutral-400 disabled:opacity-40 transition-colors",
										children: "+"
									})
								]
							}),
							/* @__PURE__ */ jsx("button", {
								type: "button",
								"aria-label": t("cart.remove"),
								disabled: busy,
								onClick: () => removeFromCart(item.id),
								className: "w-8 h-8 rounded-lg text-neutral-300 hover:text-red-500 disabled:opacity-40 transition-colors",
								children: "✕"
							})
						]
					}, item.purchaseId ?? item.id);
				}), /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => clearCart(),
					className: "text-[12px] text-neutral-400 hover:text-red-500 transition-colors pt-1",
					children: t("cart.clear")
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "rounded-3xl border border-neutral-100 p-5 space-y-4 lg:sticky lg:top-4",
				children: [
					/* @__PURE__ */ jsxs("h2", {
						className: "text-[15px] font-bold",
						children: [
							t("cart.summary"),
							" · ",
							cartCount,
							" ",
							t("cart.items")
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "space-y-1.5 text-[13px]",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex justify-between text-neutral-500",
								children: [/* @__PURE__ */ jsx("span", { children: t("cart.subtotal") }), /* @__PURE__ */ jsx("span", {
									className: "tabular-nums",
									children: money(calc?.subtotal ?? cartTotal)
								})]
							}),
							!!calc?.shippingCost && /* @__PURE__ */ jsxs("div", {
								className: "flex justify-between text-neutral-500",
								children: [/* @__PURE__ */ jsx("span", { children: t("cart.shipping") }), /* @__PURE__ */ jsx("span", {
									className: "tabular-nums",
									children: money(calc.shippingCost)
								})]
							}),
							!!calc?.tax && /* @__PURE__ */ jsxs("div", {
								className: "flex justify-between text-neutral-500",
								children: [/* @__PURE__ */ jsx("span", { children: t("cart.tax") }), /* @__PURE__ */ jsx("span", {
									className: "tabular-nums",
									children: money(calc.tax)
								})]
							}),
							!!calc?.couponDiscount && /* @__PURE__ */ jsxs("div", {
								className: "flex justify-between text-green-brand",
								children: [/* @__PURE__ */ jsx("span", { children: t("cart.discount") }), /* @__PURE__ */ jsxs("span", {
									className: "tabular-nums",
									children: ["−", money(calc.couponDiscount)]
								})]
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "flex justify-between pt-2 border-t border-neutral-100 text-[15px] font-bold",
								children: [/* @__PURE__ */ jsx("span", { children: t("cart.total") }), /* @__PURE__ */ jsx("span", {
									className: "tabular-nums",
									children: money(calc?.total ?? cartTotal)
								})]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ jsx("input", {
							value: coupon,
							onChange: (e) => setCoupon(e.target.value),
							placeholder: t("cart.coupon_placeholder"),
							className: "flex-1 h-10 px-3 rounded-xl border border-neutral-200 text-[13px]\n                             focus:border-neutral-900 outline-none transition-colors"
						}), /* @__PURE__ */ jsx("button", {
							type: "button",
							disabled: !coupon || isApplyingCoupon,
							onClick: () => applyCoupon(coupon).catch(() => {}),
							className: "h-10 px-4 rounded-xl border border-neutral-200 text-[12px] font-semibold\n                             hover:border-neutral-400 disabled:opacity-40 transition-colors",
							children: t("cart.apply")
						})]
					}),
					/* @__PURE__ */ jsxs("form", {
						onSubmit: onCheckout,
						className: "space-y-3 pt-2 border-t border-neutral-100",
						noValidate: true,
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "text-[13px] font-bold pt-2",
								children: t("checkout.details")
							}),
							/* @__PURE__ */ jsx(Input, {
								label: t("checkout.first_name"),
								...register("firstName", { required: true }),
								error: errors.firstName ? t("checkout.required") : void 0
							}),
							/* @__PURE__ */ jsx(Input, {
								label: t("checkout.last_name"),
								...register("lastName", { required: true }),
								error: errors.lastName ? t("checkout.required") : void 0
							}),
							/* @__PURE__ */ jsx(Input, {
								label: t("checkout.email"),
								type: "email",
								...register("email", { required: true }),
								error: errors.email ? t("checkout.required") : void 0
							}),
							/* @__PURE__ */ jsx(Input, {
								label: t("checkout.phone"),
								type: "tel",
								...register("phone", { required: true }),
								error: errors.phone ? t("checkout.required") : void 0
							}),
							/* @__PURE__ */ jsx(Input, {
								label: t("checkout.address"),
								...register("address", { required: true }),
								error: errors.address ? t("checkout.required") : void 0
							}),
							/* @__PURE__ */ jsx(Input, {
								label: t("checkout.city"),
								...register("city", { required: true }),
								error: errors.city ? t("checkout.required") : void 0
							}),
							/* @__PURE__ */ jsx(Input, {
								label: t("checkout.country"),
								...register("country", { required: true }),
								error: errors.country ? t("checkout.required") : void 0
							}),
							/* @__PURE__ */ jsx(Button, {
								type: "submit",
								variant: "primary",
								size: "lg",
								loading: placing,
								className: "w-full mt-2",
								children: t("checkout.place_order")
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-[10px] text-neutral-400 text-center",
								children: t("checkout.cod_note")
							})
						]
					})
				]
			})]
		})]
	})] });
}
//#endregion
//#region app/routes/cart.tsx
var cart_exports = /* @__PURE__ */ __exportAll({ default: () => CartPage });
//#endregion
//#region src/pages/LoginPage.tsx
function LoginPage() {
	const { t, i18n } = useTranslation();
	const lang = i18n.language;
	const prefix = lang === "ar" ? "" : `/${lang}`;
	const navigate = useNavigate$1();
	const { saveSession } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [formError, setFormError] = useState(null);
	const mutation = useMutation({
		mutationFn: (creds) => authApi.login(creds.email, creds.password),
		onSuccess: (data) => {
			if (data.success === false || !data.token) {
				setFormError(data.errors?.[0] ?? data.message ?? t("auth.login_error"));
				return;
			}
			try {
				saveSession(data.token, data.refreshToken);
			} catch (err) {
				setFormError(err.message);
				return;
			}
			navigate(`${prefix}/`);
		},
		onError: () => setFormError(t("auth.login_error"))
	});
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		className: "max-w-sm mx-auto py-16 px-4",
		dir: "auto",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mb-8 text-center",
			children: /* @__PURE__ */ jsx("h1", {
				className: "text-3xl font-bold text-neutral-900",
				children: t("auth.login")
			})
		}), /* @__PURE__ */ jsxs("form", {
			onSubmit: (e) => {
				e.preventDefault();
				setFormError(null);
				mutation.mutate({
					email,
					password
				});
			},
			className: "flex flex-col gap-4",
			noValidate: true,
			children: [
				/* @__PURE__ */ jsx(Input, {
					label: t("auth.email"),
					type: "email",
					required: true,
					value: email,
					onChange: (e) => setEmail(e.target.value),
					autoComplete: "email",
					placeholder: "name@example.com"
				}),
				/* @__PURE__ */ jsx(Input, {
					label: t("auth.password"),
					type: "password",
					required: true,
					value: password,
					onChange: (e) => setPassword(e.target.value),
					autoComplete: "current-password",
					placeholder: "••••••••",
					error: formError ?? void 0
				}),
				/* @__PURE__ */ jsx(Button, {
					type: "submit",
					variant: "primary",
					size: "lg",
					loading: mutation.isPending,
					className: "shimmer mt-2 w-full shadow-primary-black hover:scale-[1.02] active:scale-[0.98] transition-transform",
					children: t("auth.login_button")
				})
			]
		})]
	}) });
}
//#endregion
//#region app/routes/login.tsx
var login_exports = /* @__PURE__ */ __exportAll({ default: () => LoginPage });
//#endregion
//#region src/pages/PrivacyPage.tsx
function PrivacyPage() {
	const { t, i18n } = useTranslation();
	const { user, removeSession } = useAuth();
	const [deleteConfirm, setDeleteConfirm] = useState(false);
	const [status, setStatus] = useState("idle");
	const [action, setAction] = useState(null);
	const handleDelete = async () => {
		setAction("delete");
		setStatus("loading");
		try {
			await apiClient.delete("/api/users/me");
			setStatus("done");
			setTimeout(() => void removeSession(), 3e3);
		} catch {
			setStatus("error");
		}
	};
	const handleExport = async () => {
		setAction("export");
		setStatus("loading");
		try {
			const res = await apiClient.get("/api/users/me/export", { responseType: "blob" });
			const url = URL.createObjectURL(res.data);
			const a = document.createElement("a");
			a.href = url;
			a.download = "my-ourscent-data.json";
			a.click();
			URL.revokeObjectURL(url);
			setStatus("done");
		} catch {
			setStatus("error");
		}
	};
	const lang = i18n.language;
	const updatedDate = (/* @__PURE__ */ new Date("2024-01-01")).toLocaleDateString(lang === "ar" ? "ar-SA" : lang === "fr" ? "fr-FR" : "en-US", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		className: "max-w-3xl mx-auto px-4 py-12",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "text-3xl font-bold mb-2",
				children: t("privacy.title")
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "text-sm text-neutral-500 mb-10",
				children: [
					t("privacy.last_updated"),
					": ",
					updatedDate
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mb-8",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-xl font-semibold mb-3",
					children: t("privacy.data_we_collect")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-neutral-700 leading-relaxed",
					children: t("privacy.data_collection_text")
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mb-8",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-xl font-semibold mb-3",
					children: t("privacy.how_we_use")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-neutral-700 leading-relaxed",
					children: t("privacy.how_we_use_text")
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mb-10",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-xl font-semibold mb-3",
					children: t("privacy.your_rights")
				}), /* @__PURE__ */ jsxs("ul", {
					className: "list-disc list-inside space-y-1 text-neutral-700",
					children: [
						/* @__PURE__ */ jsx("li", { children: t("privacy.right_access") }),
						/* @__PURE__ */ jsx("li", { children: t("privacy.right_delete") }),
						/* @__PURE__ */ jsx("li", { children: t("privacy.right_export") })
					]
				})]
			}),
			user && /* @__PURE__ */ jsxs("section", {
				className: "border border-neutral-200 rounded-xl p-6 space-y-4",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "text-xl font-semibold",
						children: t("privacy.your_rights")
					}),
					status === "done" && action === "export" && /* @__PURE__ */ jsx("p", {
						className: "text-green-600 text-sm",
						children: t("privacy.export_success")
					}),
					status === "done" && action === "delete" && /* @__PURE__ */ jsx("p", {
						className: "text-green-600 text-sm",
						children: t("privacy.delete_success")
					}),
					status === "error" && /* @__PURE__ */ jsx("p", {
						className: "text-red-500 text-sm",
						children: t("error.generic")
					}),
					/* @__PURE__ */ jsx("button", {
						onClick: handleExport,
						disabled: status === "loading",
						className: "w-full sm:w-auto px-5 py-2 text-sm rounded-full border border-neutral-400 hover:border-neutral-700 transition-colors disabled:opacity-50",
						children: t("privacy.export_data")
					}),
					!deleteConfirm ? /* @__PURE__ */ jsx("button", {
						onClick: () => setDeleteConfirm(true),
						className: "w-full sm:w-auto px-5 py-2 text-sm rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors",
						children: t("privacy.delete_account")
					}) : /* @__PURE__ */ jsxs("div", {
						className: "space-y-2",
						children: [/* @__PURE__ */ jsx("p", {
							className: "text-sm text-red-600 font-medium",
							children: t("privacy.delete_confirm")
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ jsx("button", {
								onClick: handleDelete,
								disabled: status === "loading",
								className: "px-5 py-2 text-sm rounded-full bg-red-600 text-white hover:bg-red-700 transition-colors disabled:opacity-50",
								children: t("common.yes")
							}), /* @__PURE__ */ jsx("button", {
								onClick: () => setDeleteConfirm(false),
								className: "px-5 py-2 text-sm rounded-full border border-neutral-400 hover:border-neutral-700 transition-colors",
								children: t("common.cancel")
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mt-10 pt-6 border-t border-neutral-100",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "text-base font-semibold mb-1",
					children: t("privacy.contact")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-neutral-600 text-sm",
					children: "privacy@ourscent.com"
				})]
			})
		]
	}) });
}
//#endregion
//#region app/routes/privacy.tsx
var privacy_exports = /* @__PURE__ */ __exportAll({ default: () => PrivacyPage });
//#endregion
//#region src/pages/NotFoundPage.tsx
function NotFoundPage() {
	const { t } = useTranslation();
	const { lang } = useDirection();
	const prefix = lang === "ar" ? "" : `/${lang}`;
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", {
		className: "flex flex-col items-center justify-center min-h-[70vh] gap-6 px-4 text-center",
		dir: "auto",
		children: [
			/* @__PURE__ */ jsx("span", {
				className: "text-8xl font-bold text-neutral-100 select-none",
				children: "404"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "text-2xl font-semibold text-neutral-900",
					children: t("error.not_found")
				}), /* @__PURE__ */ jsx("p", {
					className: "text-neutral-500 max-w-sm",
					children: t("error.generic")
				})]
			}),
			/* @__PURE__ */ jsx(Link$1, {
				to: `${prefix}/`,
				className: "shimmer inline-flex items-center px-6 py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm shadow-primary-black hover:scale-[1.03] active:scale-[0.98] transition-transform",
				children: t("home.hero_cta")
			})
		]
	}) });
}
//#endregion
//#region app/routes/not-found.tsx
var not_found_exports = /* @__PURE__ */ __exportAll({ default: () => NotFoundPage });
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-187ZfUq7.js",
		"imports": [
			"/assets/jsx-runtime-OQpaS_Dv.js",
			"/assets/react-dom-Ccy8f0CG.js",
			"/assets/chunk-BV7QT456-DRL8PfnM.js",
			"/assets/i18nInstance-DuAUdJZQ.js"
		],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-mb1JC33i.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/react-dom-Ccy8f0CG.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/mutation-BUj0tB9x.js",
				"/assets/storeClient-CBSnZLv0.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/storeConfig-D7SbHWCY.js",
				"/assets/purchaseService-B9TR_JtR.js",
				"/assets/ourinc-notifications-BZfY8PPZ.js",
				"/assets/authToken-DnaOPsTB.js"
			],
			"css": ["/assets/style-BHgLW_K6.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/lang-layout": {
			"id": "routes/lang-layout",
			"parentId": "root",
			"path": void 0,
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/lang-layout-Z16syJ_h.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/storeConfig-D7SbHWCY.js",
				"/assets/ourinc-notifications-BZfY8PPZ.js",
				"/assets/useDirection-BV4UucQV.js",
				"/assets/clsx-DB0hHKMi.js",
				"/assets/compareStore-BL3jgjuM.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-home": {
			"id": "root-home",
			"parentId": "routes/lang-layout",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-DWvtuyMS.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-browse": {
			"id": "root-browse",
			"parentId": "routes/lang-layout",
			"path": "browse",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/browse-CWOvGXGy.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/CorpusTile-4Vgm0u2a.js",
				"/assets/Pagination-B2_nnLW1.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-fragrance": {
			"id": "root-fragrance",
			"parentId": "routes/lang-layout",
			"path": "fragrance/:slug",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/fragrance-CafPPrVe.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/CorpusTile-4Vgm0u2a.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-brands": {
			"id": "root-brands",
			"parentId": "routes/lang-layout",
			"path": "brands",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/brands-CHl81RKB.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-brand": {
			"id": "root-brand",
			"parentId": "routes/lang-layout",
			"path": "brand/:slug",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/brand-DfSviMxQ.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/CorpusTile-4Vgm0u2a.js",
				"/assets/Pagination-B2_nnLW1.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-notes": {
			"id": "root-notes",
			"parentId": "routes/lang-layout",
			"path": "notes",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/notes-ClsZWNY6.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-note": {
			"id": "root-note",
			"parentId": "routes/lang-layout",
			"path": "note/:slug",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/note-BFvU2sUC.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/FragranceCard-DutW-UXy.js",
				"/assets/ourinc-ui-BzoEoP2w.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/clsx-DB0hHKMi.js",
				"/assets/compareStore-BL3jgjuM.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/useWardrobe-8OjDD9MN.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js",
				"/assets/useMutation-BmzgRI6A.js",
				"/assets/mutation-BUj0tB9x.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-perfumer": {
			"id": "root-perfumer",
			"parentId": "routes/lang-layout",
			"path": "perfumer/:slug",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/perfumer-CcHsi7se.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/FragranceCard-DutW-UXy.js",
				"/assets/ourinc-ui-BzoEoP2w.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/clsx-DB0hHKMi.js",
				"/assets/compareStore-BL3jgjuM.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/useWardrobe-8OjDD9MN.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js",
				"/assets/useMutation-BmzgRI6A.js",
				"/assets/mutation-BUj0tB9x.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-trending": {
			"id": "root-trending",
			"parentId": "routes/lang-layout",
			"path": "trending",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/trending-C7SoEO7F.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/CorpusTile-4Vgm0u2a.js",
				"/assets/Pagination-B2_nnLW1.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-wardrobe": {
			"id": "root-wardrobe",
			"parentId": "routes/lang-layout",
			"path": "wardrobe",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/wardrobe-BGPRUhLS.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/useMutation-BmzgRI6A.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/useWardrobe-8OjDD9MN.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/mutation-BUj0tB9x.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-notebook": {
			"id": "root-notebook",
			"parentId": "routes/lang-layout",
			"path": "notebook",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/notebook-Dyyzt3sI.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/useMutation-BmzgRI6A.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/mutation-BUj0tB9x.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-influencers": {
			"id": "root-influencers",
			"parentId": "routes/lang-layout",
			"path": "influencers",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/influencers-De8vknqq.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/influencerSlug-Cv9BzdGk.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-influencer": {
			"id": "root-influencer",
			"parentId": "routes/lang-layout",
			"path": "influencer/:slug",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/influencer-nZVrEGmW.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/useMutation-BmzgRI6A.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/ourinc-ui-BzoEoP2w.js",
				"/assets/influencerSlug-Cv9BzdGk.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/mutation-BUj0tB9x.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-compare": {
			"id": "root-compare",
			"parentId": "routes/lang-layout",
			"path": "compare",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/compare-Bs_zI0bM.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/compareStore-BL3jgjuM.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-finder": {
			"id": "root-finder",
			"parentId": "routes/lang-layout",
			"path": "finder",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/finder-DeB-sE_j.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/CorpusTile-4Vgm0u2a.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-discover-accords": {
			"id": "root-discover-accords",
			"parentId": "routes/lang-layout",
			"path": "discover/accords",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/discover-accords-C4qV2Z8s.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-discover-notes": {
			"id": "root-discover-notes",
			"parentId": "routes/lang-layout",
			"path": "discover/notes",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/discover-notes-B_msHpUl.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/FragranceCard-DutW-UXy.js",
				"/assets/ourinc-ui-BzoEoP2w.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/clsx-DB0hHKMi.js",
				"/assets/compareStore-BL3jgjuM.js",
				"/assets/useWardrobe-8OjDD9MN.js",
				"/assets/useMutation-BmzgRI6A.js",
				"/assets/mutation-BUj0tB9x.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-shop": {
			"id": "root-shop",
			"parentId": "routes/lang-layout",
			"path": "shop",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/shop-B9bLQKaN.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/storeClient-CBSnZLv0.js",
				"/assets/storeConfig-D7SbHWCY.js",
				"/assets/clsx-DB0hHKMi.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/guestAuth-C6dU4QGC.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/react-dom-Ccy8f0CG.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-cart": {
			"id": "root-cart",
			"parentId": "routes/lang-layout",
			"path": "cart",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/cart-DFF2R1gy.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/storeClient-CBSnZLv0.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/storeConfig-D7SbHWCY.js",
				"/assets/purchaseService-B9TR_JtR.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/ourinc-ui-BzoEoP2w.js",
				"/assets/guestAuth-C6dU4QGC.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/react-dom-Ccy8f0CG.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-login": {
			"id": "root-login",
			"parentId": "routes/lang-layout",
			"path": "login",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/login-CbR_UEvr.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useMutation-BmzgRI6A.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/authClient-C4MvO4Y2.js",
				"/assets/ourinc-ui-BzoEoP2w.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/mutation-BUj0tB9x.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-privacy": {
			"id": "root-privacy",
			"parentId": "routes/lang-layout",
			"path": "privacy",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/privacy-Ls0i0ih1.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"root-not-found": {
			"id": "root-not-found",
			"parentId": "routes/lang-layout",
			"path": "*",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/not-found-D8U4cn0G.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useDirection-BV4UucQV.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang": {
			"id": "lang",
			"parentId": "routes/lang-layout",
			"path": ":lang",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/lang-layout-Z16syJ_h.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/storeConfig-D7SbHWCY.js",
				"/assets/ourinc-notifications-BZfY8PPZ.js",
				"/assets/useDirection-BV4UucQV.js",
				"/assets/clsx-DB0hHKMi.js",
				"/assets/compareStore-BL3jgjuM.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-home": {
			"id": "lang-home",
			"parentId": "lang",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-DWvtuyMS.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-browse": {
			"id": "lang-browse",
			"parentId": "lang",
			"path": "browse",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/browse-CWOvGXGy.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/CorpusTile-4Vgm0u2a.js",
				"/assets/Pagination-B2_nnLW1.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-fragrance": {
			"id": "lang-fragrance",
			"parentId": "lang",
			"path": "fragrance/:slug",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/fragrance-CafPPrVe.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/CorpusTile-4Vgm0u2a.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-brands": {
			"id": "lang-brands",
			"parentId": "lang",
			"path": "brands",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/brands-CHl81RKB.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-brand": {
			"id": "lang-brand",
			"parentId": "lang",
			"path": "brand/:slug",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/brand-DfSviMxQ.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/CorpusTile-4Vgm0u2a.js",
				"/assets/Pagination-B2_nnLW1.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-notes": {
			"id": "lang-notes",
			"parentId": "lang",
			"path": "notes",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/notes-ClsZWNY6.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-note": {
			"id": "lang-note",
			"parentId": "lang",
			"path": "note/:slug",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/note-BFvU2sUC.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/FragranceCard-DutW-UXy.js",
				"/assets/ourinc-ui-BzoEoP2w.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/clsx-DB0hHKMi.js",
				"/assets/compareStore-BL3jgjuM.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/useWardrobe-8OjDD9MN.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js",
				"/assets/useMutation-BmzgRI6A.js",
				"/assets/mutation-BUj0tB9x.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-perfumer": {
			"id": "lang-perfumer",
			"parentId": "lang",
			"path": "perfumer/:slug",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/perfumer-CcHsi7se.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/FragranceCard-DutW-UXy.js",
				"/assets/ourinc-ui-BzoEoP2w.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/clsx-DB0hHKMi.js",
				"/assets/compareStore-BL3jgjuM.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/useWardrobe-8OjDD9MN.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js",
				"/assets/useMutation-BmzgRI6A.js",
				"/assets/mutation-BUj0tB9x.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-trending": {
			"id": "lang-trending",
			"parentId": "lang",
			"path": "trending",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/trending-C7SoEO7F.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/CorpusTile-4Vgm0u2a.js",
				"/assets/Pagination-B2_nnLW1.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-wardrobe": {
			"id": "lang-wardrobe",
			"parentId": "lang",
			"path": "wardrobe",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/wardrobe-BGPRUhLS.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/useMutation-BmzgRI6A.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/useWardrobe-8OjDD9MN.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/mutation-BUj0tB9x.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-notebook": {
			"id": "lang-notebook",
			"parentId": "lang",
			"path": "notebook",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/notebook-Dyyzt3sI.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/useMutation-BmzgRI6A.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/mutation-BUj0tB9x.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-influencers": {
			"id": "lang-influencers",
			"parentId": "lang",
			"path": "influencers",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/influencers-De8vknqq.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/influencerSlug-Cv9BzdGk.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-influencer": {
			"id": "lang-influencer",
			"parentId": "lang",
			"path": "influencer/:slug",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/influencer-nZVrEGmW.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/useMutation-BmzgRI6A.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/ourinc-ui-BzoEoP2w.js",
				"/assets/influencerSlug-Cv9BzdGk.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/mutation-BUj0tB9x.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-compare": {
			"id": "lang-compare",
			"parentId": "lang",
			"path": "compare",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/compare-Bs_zI0bM.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/compareStore-BL3jgjuM.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-finder": {
			"id": "lang-finder",
			"parentId": "lang",
			"path": "finder",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/finder-DeB-sE_j.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/CorpusTile-4Vgm0u2a.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-discover-accords": {
			"id": "lang-discover-accords",
			"parentId": "lang",
			"path": "discover/accords",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": true,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/discover-accords-C4qV2Z8s.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/seo-BPqXQ8mV.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-discover-notes": {
			"id": "lang-discover-notes",
			"parentId": "lang",
			"path": "discover/notes",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/discover-notes-B_msHpUl.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/FragranceCard-DutW-UXy.js",
				"/assets/ourinc-ui-BzoEoP2w.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/clsx-DB0hHKMi.js",
				"/assets/compareStore-BL3jgjuM.js",
				"/assets/useWardrobe-8OjDD9MN.js",
				"/assets/useMutation-BmzgRI6A.js",
				"/assets/mutation-BUj0tB9x.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-shop": {
			"id": "lang-shop",
			"parentId": "lang",
			"path": "shop",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/shop-B9bLQKaN.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useQuery-XV6l3m8P.js",
				"/assets/storeClient-CBSnZLv0.js",
				"/assets/storeConfig-D7SbHWCY.js",
				"/assets/clsx-DB0hHKMi.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/guestAuth-C6dU4QGC.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/query-BsPMCmHT.js",
				"/assets/react-dom-Ccy8f0CG.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-cart": {
			"id": "lang-cart",
			"parentId": "lang",
			"path": "cart",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/cart-DFF2R1gy.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/storeClient-CBSnZLv0.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/storeConfig-D7SbHWCY.js",
				"/assets/purchaseService-B9TR_JtR.js",
				"/assets/SEO-DwlER4MH.js",
				"/assets/ourinc-ui-BzoEoP2w.js",
				"/assets/guestAuth-C6dU4QGC.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/react-dom-Ccy8f0CG.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-login": {
			"id": "lang-login",
			"parentId": "lang",
			"path": "login",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/login-CbR_UEvr.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useMutation-BmzgRI6A.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/authClient-C4MvO4Y2.js",
				"/assets/ourinc-ui-BzoEoP2w.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/removable-DUdL2ZLr.js",
				"/assets/mutation-BUj0tB9x.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-privacy": {
			"id": "lang-privacy",
			"parentId": "lang",
			"path": "privacy",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/privacy-Ls0i0ih1.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/ourinc-auth-Ba5JrUQw.js",
				"/assets/scentApiClient-CGN8fqCw.js",
				"/assets/i18nInstance-DuAUdJZQ.js",
				"/assets/authToken-DnaOPsTB.js",
				"/assets/authClient-C4MvO4Y2.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"lang-not-found": {
			"id": "lang-not-found",
			"parentId": "lang",
			"path": "*",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/not-found-D8U4cn0G.js",
			"imports": [
				"/assets/jsx-runtime-OQpaS_Dv.js",
				"/assets/chunk-BV7QT456-DRL8PfnM.js",
				"/assets/useTranslation-D3cieaht.js",
				"/assets/useDirection-BV4UucQV.js",
				"/assets/i18nInstance-DuAUdJZQ.js"
			],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-25a08541.js",
	"version": "25a08541",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"v8_passThroughRequests": false,
	"v8_trailingSlashAwareDataRequests": false,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": false,
	"v8_splitRouteModules": false,
	"v8_viteEnvironmentApi": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/lang-layout": {
		id: "routes/lang-layout",
		parentId: "root",
		path: void 0,
		index: void 0,
		caseSensitive: void 0,
		module: lang_layout_exports
	},
	"root-home": {
		id: "root-home",
		parentId: "routes/lang-layout",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"root-browse": {
		id: "root-browse",
		parentId: "routes/lang-layout",
		path: "browse",
		index: void 0,
		caseSensitive: void 0,
		module: browse_exports
	},
	"root-fragrance": {
		id: "root-fragrance",
		parentId: "routes/lang-layout",
		path: "fragrance/:slug",
		index: void 0,
		caseSensitive: void 0,
		module: fragrance_exports
	},
	"root-brands": {
		id: "root-brands",
		parentId: "routes/lang-layout",
		path: "brands",
		index: void 0,
		caseSensitive: void 0,
		module: brands_exports
	},
	"root-brand": {
		id: "root-brand",
		parentId: "routes/lang-layout",
		path: "brand/:slug",
		index: void 0,
		caseSensitive: void 0,
		module: brand_exports
	},
	"root-notes": {
		id: "root-notes",
		parentId: "routes/lang-layout",
		path: "notes",
		index: void 0,
		caseSensitive: void 0,
		module: notes_exports
	},
	"root-note": {
		id: "root-note",
		parentId: "routes/lang-layout",
		path: "note/:slug",
		index: void 0,
		caseSensitive: void 0,
		module: note_exports
	},
	"root-perfumer": {
		id: "root-perfumer",
		parentId: "routes/lang-layout",
		path: "perfumer/:slug",
		index: void 0,
		caseSensitive: void 0,
		module: perfumer_exports
	},
	"root-trending": {
		id: "root-trending",
		parentId: "routes/lang-layout",
		path: "trending",
		index: void 0,
		caseSensitive: void 0,
		module: trending_exports
	},
	"root-wardrobe": {
		id: "root-wardrobe",
		parentId: "routes/lang-layout",
		path: "wardrobe",
		index: void 0,
		caseSensitive: void 0,
		module: wardrobe_exports
	},
	"root-notebook": {
		id: "root-notebook",
		parentId: "routes/lang-layout",
		path: "notebook",
		index: void 0,
		caseSensitive: void 0,
		module: notebook_exports
	},
	"root-influencers": {
		id: "root-influencers",
		parentId: "routes/lang-layout",
		path: "influencers",
		index: void 0,
		caseSensitive: void 0,
		module: influencers_exports
	},
	"root-influencer": {
		id: "root-influencer",
		parentId: "routes/lang-layout",
		path: "influencer/:slug",
		index: void 0,
		caseSensitive: void 0,
		module: influencer_exports
	},
	"root-compare": {
		id: "root-compare",
		parentId: "routes/lang-layout",
		path: "compare",
		index: void 0,
		caseSensitive: void 0,
		module: compare_exports
	},
	"root-finder": {
		id: "root-finder",
		parentId: "routes/lang-layout",
		path: "finder",
		index: void 0,
		caseSensitive: void 0,
		module: finder_exports
	},
	"root-discover-accords": {
		id: "root-discover-accords",
		parentId: "routes/lang-layout",
		path: "discover/accords",
		index: void 0,
		caseSensitive: void 0,
		module: discover_accords_exports
	},
	"root-discover-notes": {
		id: "root-discover-notes",
		parentId: "routes/lang-layout",
		path: "discover/notes",
		index: void 0,
		caseSensitive: void 0,
		module: discover_notes_exports
	},
	"root-shop": {
		id: "root-shop",
		parentId: "routes/lang-layout",
		path: "shop",
		index: void 0,
		caseSensitive: void 0,
		module: shop_exports
	},
	"root-cart": {
		id: "root-cart",
		parentId: "routes/lang-layout",
		path: "cart",
		index: void 0,
		caseSensitive: void 0,
		module: cart_exports
	},
	"root-login": {
		id: "root-login",
		parentId: "routes/lang-layout",
		path: "login",
		index: void 0,
		caseSensitive: void 0,
		module: login_exports
	},
	"root-privacy": {
		id: "root-privacy",
		parentId: "routes/lang-layout",
		path: "privacy",
		index: void 0,
		caseSensitive: void 0,
		module: privacy_exports
	},
	"root-not-found": {
		id: "root-not-found",
		parentId: "routes/lang-layout",
		path: "*",
		index: void 0,
		caseSensitive: void 0,
		module: not_found_exports
	},
	"lang": {
		id: "lang",
		parentId: "routes/lang-layout",
		path: ":lang",
		index: void 0,
		caseSensitive: void 0,
		module: lang_layout_exports
	},
	"lang-home": {
		id: "lang-home",
		parentId: "lang",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	},
	"lang-browse": {
		id: "lang-browse",
		parentId: "lang",
		path: "browse",
		index: void 0,
		caseSensitive: void 0,
		module: browse_exports
	},
	"lang-fragrance": {
		id: "lang-fragrance",
		parentId: "lang",
		path: "fragrance/:slug",
		index: void 0,
		caseSensitive: void 0,
		module: fragrance_exports
	},
	"lang-brands": {
		id: "lang-brands",
		parentId: "lang",
		path: "brands",
		index: void 0,
		caseSensitive: void 0,
		module: brands_exports
	},
	"lang-brand": {
		id: "lang-brand",
		parentId: "lang",
		path: "brand/:slug",
		index: void 0,
		caseSensitive: void 0,
		module: brand_exports
	},
	"lang-notes": {
		id: "lang-notes",
		parentId: "lang",
		path: "notes",
		index: void 0,
		caseSensitive: void 0,
		module: notes_exports
	},
	"lang-note": {
		id: "lang-note",
		parentId: "lang",
		path: "note/:slug",
		index: void 0,
		caseSensitive: void 0,
		module: note_exports
	},
	"lang-perfumer": {
		id: "lang-perfumer",
		parentId: "lang",
		path: "perfumer/:slug",
		index: void 0,
		caseSensitive: void 0,
		module: perfumer_exports
	},
	"lang-trending": {
		id: "lang-trending",
		parentId: "lang",
		path: "trending",
		index: void 0,
		caseSensitive: void 0,
		module: trending_exports
	},
	"lang-wardrobe": {
		id: "lang-wardrobe",
		parentId: "lang",
		path: "wardrobe",
		index: void 0,
		caseSensitive: void 0,
		module: wardrobe_exports
	},
	"lang-notebook": {
		id: "lang-notebook",
		parentId: "lang",
		path: "notebook",
		index: void 0,
		caseSensitive: void 0,
		module: notebook_exports
	},
	"lang-influencers": {
		id: "lang-influencers",
		parentId: "lang",
		path: "influencers",
		index: void 0,
		caseSensitive: void 0,
		module: influencers_exports
	},
	"lang-influencer": {
		id: "lang-influencer",
		parentId: "lang",
		path: "influencer/:slug",
		index: void 0,
		caseSensitive: void 0,
		module: influencer_exports
	},
	"lang-compare": {
		id: "lang-compare",
		parentId: "lang",
		path: "compare",
		index: void 0,
		caseSensitive: void 0,
		module: compare_exports
	},
	"lang-finder": {
		id: "lang-finder",
		parentId: "lang",
		path: "finder",
		index: void 0,
		caseSensitive: void 0,
		module: finder_exports
	},
	"lang-discover-accords": {
		id: "lang-discover-accords",
		parentId: "lang",
		path: "discover/accords",
		index: void 0,
		caseSensitive: void 0,
		module: discover_accords_exports
	},
	"lang-discover-notes": {
		id: "lang-discover-notes",
		parentId: "lang",
		path: "discover/notes",
		index: void 0,
		caseSensitive: void 0,
		module: discover_notes_exports
	},
	"lang-shop": {
		id: "lang-shop",
		parentId: "lang",
		path: "shop",
		index: void 0,
		caseSensitive: void 0,
		module: shop_exports
	},
	"lang-cart": {
		id: "lang-cart",
		parentId: "lang",
		path: "cart",
		index: void 0,
		caseSensitive: void 0,
		module: cart_exports
	},
	"lang-login": {
		id: "lang-login",
		parentId: "lang",
		path: "login",
		index: void 0,
		caseSensitive: void 0,
		module: login_exports
	},
	"lang-privacy": {
		id: "lang-privacy",
		parentId: "lang",
		path: "privacy",
		index: void 0,
		caseSensitive: void 0,
		module: privacy_exports
	},
	"lang-not-found": {
		id: "lang-not-found",
		parentId: "lang",
		path: "*",
		index: void 0,
		caseSensitive: void 0,
		module: not_found_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
