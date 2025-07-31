import type { ContactTranslations } from "../translation";

const contactEs: ContactTranslations = {
    'header': {
        'badge': "Hablemos",
        'title': 'Contacto',
        'subtitle': '¿Listo para comenzar? Estamos aquí para ayudarte de manera clara, rápida y confiable.'
    },
    'info': {
        'title': 'Contáctanos',
        'email': {
            'label': 'Correo electrónico'
        },
        'phone': {
            'label': 'Teléfono'
        },
        'hours': {
            'label': 'Horario de atención'
        }
    },
    'hours': {
        'weekdays': 'Lunes a sábado',
        'weekdays_time': '7:00 AM - 6:00 PM',
        'sunday': 'Domingo',
        'closed': 'Cerrado',
        'status': {
            'open': 'Abierto Ahora'
        }
    },
    'actions': {
        'email': 'Enviar Correo',
        'call': 'Llamar Ahora'
    },
    'cta': {
        'title': '¿Listo para Comenzar?',
        'description': 'Elige tu forma preferida de contactarnos. Estamos aquí para ayudarte con todas tus necesidades de servicios legales.',
        'email_button': 'Enviar Correo',
        'call_button': 'Llamarnos'
    },
    'form': {
        'title': 'Envíanos un mensaje',
        'fields': {
            'fullname': {
                'label': 'Nombre completo *',
                'placeholder': ''
            },
            'email': {
                'label': 'Correo electrónico *',
                'placeholder': ''
            },
            'phone': {
                'label': 'Teléfono (opcional)',
                'placeholder': ''
            },
            'service': {
                'label': 'Servicio solicitado (opcional)',
                'options': {
                    'default': 'Selecciona un servicio',
                    'tax': 'Preparación de impuestos',
                    'notary': 'Servicios de notaría',
                    'accounting': 'Contabilidad',
                    'other': 'Otro'
                }
            },
            'message': {
                'label': 'Mensaje *',
                'placeholder': ''
            }
        },
        'submit': 'Enviar mensaje'
    }
};

export default contactEs; 