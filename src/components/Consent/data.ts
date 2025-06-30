import { ConsentObject } from './types/types.consent'

export const data: ConsentObject = {
  essential: {
    checked: true,
    disabled: true,
    name: 'Essenziell',
    desc: 'Essenzielle Cookies ermöglichen grundlegende Funktionen und sind für die einwandfreie Funktion der Website erforderlich.',
    details: [
      {
        checked: true,
        name: 'Consent Cookie',
        cookies: [
          'consent_given_new',
          'consent_ga',
          'consent_signals',
          //'consent_matomo', 'consent_clarity'
        ],
        provider: 'Eigentümer dieser Website',
        reason:
          'Speichert die Einstellungen der Besucher, die in der Cookie Box ausgewählt wurden.',
        duration: '3 Monate',
        consent_name: 'consent_given_new',
      },
    ],
  },
  statistics: {
    checked: false,
    name: 'Statistik',
    desc: 'Statistik Cookies erfassen Informationen anonym. Diese Informationen helfen uns zu verstehen, wie unsere Besucher unsere Website nutzen.',
    details: [
      {
        checked: false,
        name: 'Google Analytics',
        consent_name: 'consent_ga',
        cookies: ['_ga', '_gat', '_gid'],
        provider: 'Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland',
        reason:
          'Cookie von Google für Website-Analysen. Erzeugt statistische Daten darüber, wie der Besucher die Website nutzt.',
        duration: '2 Monate',
        policy: 'https://policies.google.com/privacy',
      },
      /*{
         name: 'Matomo',
          checked: false,
          consent_name: 'consent_matomo',
          cookies: [ '_pk_id', '_pk_ref', '_pk_ses' ],
          provider: 'Matomo Org',
          reason: 'Cookie von Matomo für Website-Analysen. Erzeugt statistische Daten darüber, wie der Besucher die' +
            ' Website nutzt.',
          duration: '2 Monate',
        },*/
    ],
  },
  marketing: {
    checked: false,
    name: 'Marketing',
    desc: 'Marketing Cookies erfassen Informationen anonym. Diese Informationen helfen uns zu verstehen, wie unsere Besucher unsere Website nutzen.',
    details: [
      {
        checked: false,
        name: 'Google Werbedienste',
        consent_name: 'consent_signals',
        cookies: ['_gid'],
        provider: 'Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland',
        reason:
          'Cookie von Google für Website-Analysen. Erzeugt statistische Daten darüber, wie der Besucher die Website nutzt.',
        duration: '2 Jahre',
        policy: 'https://policies.google.com/privacy',
      },
    ],
  },
}
