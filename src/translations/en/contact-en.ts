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
        'location': {
            'label': 'Location',
            'value': 'Online or directly at your home'
        },
        'hours': {
            'label': 'Business Hours'
        }
    },
    'hours': {
        'weekdays': 'Monday to Saturday',
        'weekdays_time': '7:00 AM - 6:00 PM',
        'sunday': 'Sunday',
        'closed': 'Closed'
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