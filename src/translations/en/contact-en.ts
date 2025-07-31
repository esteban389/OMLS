import type { ContactTranslations } from "../translation";

const contactEn: ContactTranslations = {
    'header': {
        'badge': "Let's Talk",
        'title': 'Contact',
        'subtitle': 'Ready to start? We\'re here to help clearly, quickly, and reliably.'
    },
    'info': {
        'title': 'Contact Us',
        'email': {
            'label': 'Email'
        },
        'phone': {
            'label': 'Phone'
        },
        'hours': {
            'label': 'Business Hours'
        }
    },
    'hours': {
        'weekdays': 'Monday to Saturday',
        'weekdays_time': '7:00 AM - 6:00 PM',
        'sunday': 'Sunday',
        'closed': 'Closed',
        'status': {
            'open': 'Open Now'
        }
    },
    'actions': {
        'email': 'Send Email',
        'call': 'Call Now'
    },
    'cta': {
        'title': 'Ready to Get Started?',
        'description': 'Choose your preferred way to reach us. We\'re here to help with all your legal service needs.',
        'email_button': 'Send Email',
        'call_button': 'Call Us'
    },
    'form': {
        'title': 'Send Us a Message',
        'fields': {
            'fullname': {
                'label': 'Full Name *',
                'placeholder': ''
            },
            'email': {
                'label': 'Email *',
                'placeholder': ''
            },
            'phone': {
                'label': 'Phone (optional)',
                'placeholder': ''
            },
            'service': {
                'label': 'Requested Service (optional)',
                'options': {
                    'default': 'Select a service',
                    'tax': 'Tax Preparation',
                    'notary': 'Notary Services',
                    'accounting': 'Accounting',
                    'other': 'Other'
                }
            },
            'message': {
                'label': 'Message *',
                'placeholder': ''
            }
        },
        'submit': 'Send Message'
    }
};

export default contactEn; 