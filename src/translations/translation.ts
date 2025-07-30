import en from './en/index';
import es from './es/index';

export type NavTranslations = {
    home: string;
    services: string;
    about: string;
    contact: string;
    faq: string;
};

export type HeroTranslations = {
    badge: string;
    title: {
        line1: string;
        line2: string;
    };
    lead: string;
    actions: {
        primary: string;
        secondary: string;
    };
    why_choose_us: {
        title: string;
        points: {
            bilingual: string;
            personalized: string;
            transparent: string;
            quick: string;
        };
    };
};

export type ServiceFeature = {
    personal: string;
    itin: string;
    payment: string;
    audit: string;
};

export type ServiceNotaryFeature = {
    contracts: string;
    mobile: string;
    closings: string;
    bilingual: string;
};

export type ServiceAccountingFeature = {
    personal: string;
    control: string;
    documents: string;
    support: string;
};

export type ServiceItem = {
    title: string;
    description: string;
    features: ServiceFeature | ServiceNotaryFeature | ServiceAccountingFeature;
    cta: string;
};

export type ServicesTranslations = {
    header: {
        badge: string;
        title: string;
        subtitle: string;
    };
    tax: ServiceItem;
    notary: ServiceItem;
    accounting: ServiceItem;
};

export type AboutFeature = {
    title: string;
    subtitle: string;
};

export type AboutTranslations = {
    philosophy_tag: string;
    title: {
        line1: string;
        line2: string;
    };
    intro: {
        paragraph1: string;
        paragraph2: string;
    };
    features: {
        excellence: AboutFeature;
        services: AboutFeature;
        bilingual: AboutFeature;
    };
    differences: {
        title: string;
        points: {
            dedication: string;
            pricing: string;
            responsiveness: string;
            support: string;
        };
    };
};

export type ContactInfo = {
    title: string;
    email: {
        label: string;
    };
    phone: {
        label: string;
    };
    location: {
        label: string;
        value: string;
    };
    hours: {
        label: string;
    };
};

export type ContactHours = {
    weekdays: string;
    weekdays_time: string;
    sunday: string;
    closed: string;
};

export type ContactFormField = {
    label: string;
    placeholder: string;
};

export type ContactFormServiceField = {
    label: string;
    options: {
        default: string;
        tax: string;
        notary: string;
        accounting: string;
        other: string;
    };
};

export type ContactForm = {
    title: string;
    fields: {
        fullname: ContactFormField;
        email: ContactFormField;
        phone: ContactFormField;
        service: ContactFormServiceField;
        message: ContactFormField;
    };
    submit: string;
};

export type ContactTranslations = {
    header: {
        badge: string;
        title: string;
        subtitle: string;
    };
    info: ContactInfo;
    hours: ContactHours;
    form: ContactForm;
};

export type FAQQuestion = {
    question: string;
    answer: string;
};

export type FAQTranslations = {
    header: {
        badge: string;
        title: string;
        subtitle: string;
    };
    questions: {
        tax_time: FAQQuestion;
        mobile_notary: FAQQuestion;
        documents: FAQQuestion;
        spanish: FAQQuestion;
        irs_problems: FAQQuestion;
        itin_requirements: FAQQuestion;
        payment_methods: FAQQuestion;
        appointment: FAQQuestion;
    };
};

export type FooterSection = {
    title: string;
    links?: {
        tax?: string;
        notary?: string;
        accounting?: string;
        itin?: string;
        about?: string;
        contact?: string;
        faq?: string;
    };
};

export type FooterTranslations = {
    description: string;
    sections: {
        services: FooterSection;
        company: FooterSection;
        contact_info: FooterSection;
    };
    copyright: string;
};

export type LanguageSwitcherTranslations = {
    title: string;
    english: string;
    spanish: string;
};

export type Translation = {
    nav: NavTranslations;
    hero: HeroTranslations;
    services: ServicesTranslations;
    about: AboutTranslations;
    contact: ContactTranslations;
    faq: FAQTranslations;
    footer: FooterTranslations;
    language_switcher: LanguageSwitcherTranslations;
};

export type TranslationLanguage = 'en' | 'es';

// Helper: Join two parts with a dot, skip dot if second part is empty
type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

// Recursive type to deeply traverse object keys and produce dot-notation paths
type Paths<T> = {
  [K in keyof T]: T[K] extends object
    ? T[K] extends Array<any> // skip arrays
      ? K
      : Join<K, Paths<T[K]>>
    : K;
}[keyof T];

export type TranslationKey = Paths<Translation>;

// Translation lookup function
export function _(language: TranslationLanguage, key: TranslationKey): string {
    const translations = language === 'en' ? en : es;
    
    // Handle direct keys (e.g., 'nav', 'hero')
    if (key in translations) {
        const value = translations[key as keyof Translation];
        if (typeof value === 'string') {
            return value;
        }
        // If it's an object, we need a more specific key
        throw new Error(`Key "${key}" refers to an object, not a string. Use a more specific key like "${key}.someProperty"`);
    }
    
    // Handle dot-notation paths (e.g., 'nav.home', 'hero.title.line1')
    const keys = key.split('.');
    let current: any = translations;
    
    for (const k of keys) {
        if (current && typeof current === 'object' && k in current) {
            current = current[k];
        } else {
            throw new Error(`Translation key "${key}" not found for language "${language}"`);
        }
    }
    
    if (typeof current === 'string') {
        return current;
    } else {
        throw new Error(`Translation key "${key}" does not resolve to a string for language "${language}"`);
    }
}
