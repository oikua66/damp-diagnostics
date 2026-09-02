'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { track } from '@vercel/analytics';

const FORM_ACTION = 'https://53dd1021.sibforms.com/serve/MUIFAP6khDSCtTXui1vV180d_8MzBkQcSZU5V9zEb8y3vMpTVGVTKV6q0Gsn_Vg9amrhVM_8sC6I-FTZvCINqmIiY6Ss_Wr-ZJJ2a1N6jY8FQpM3jA4R0SC-fUdWfS0zJvyh17IPgwytNjBwIC2BB6o_a7vKgz8g1uPxRQzwtb-Xrmfvp9k9K3xbisRtcicfbeSkX_jZjAKkKIsGOg==';
const RECAPTCHA_SITE_KEY = '6Lck46QtAAAAANoY84wfV8xVYtoTaWqVqCkMNuT7';

const copy: Record<string, {
  eyebrow: string;
  title: string;
  text: string;
  email: string;
  placeholder: string;
  consent: string;
  unsubscribe: string;
  brevo: string;
  button: string;
  success: string;
  error: string;
}> = {
  en: {
    eyebrow: 'Updates',
    title: 'Koretskiy Consulting Updates',
    text: 'New projects, practical materials and tools. No regular promotional emails.',
    email: 'Email',
    placeholder: 'your@email.com',
    consent: 'I agree to receive updates from Koretskiy Consulting and accept the data privacy statement.',
    unsubscribe: 'You may unsubscribe at any time using the link in our emails.',
    brevo: 'We use Brevo to manage subscriptions and email delivery. Your data is processed in accordance with Brevo’s Privacy Policy.',
    button: 'Subscribe',
    success: 'Almost done. Please check your email and confirm your subscription.',
    error: 'Your subscription could not be saved. Please try again.',
  },
  ru: {
    eyebrow: 'Обновления',
    title: 'Обновления Koretskiy Consulting',
    text: 'Новые проекты, практические материалы и инструменты. Без регулярной рекламной рассылки.',
    email: 'Email',
    placeholder: 'your@email.com',
    consent: 'Я согласен получать обновления Koretskiy Consulting и принимаю условия обработки персональных данных.',
    unsubscribe: 'Отписаться можно в любой момент по ссылке в письме.',
    brevo: 'Для управления подпиской и отправки писем используется Brevo. Данные обрабатываются в соответствии с политикой конфиденциальности Brevo.',
    button: 'Подписаться',
    success: 'Почти готово. Проверьте почту и подтвердите подписку.',
    error: 'Не удалось сохранить подписку. Попробуйте ещё раз.',
  },
  uk: {
    eyebrow: 'Оновлення',
    title: 'Оновлення Koretskiy Consulting',
    text: 'Нові проєкти, практичні матеріали та інструменти. Без регулярної рекламної розсилки.',
    email: 'Email',
    placeholder: 'your@email.com',
    consent: 'Я погоджуюся отримувати оновлення Koretskiy Consulting та приймаю умови обробки персональних даних.',
    unsubscribe: 'Відписатися можна будь-коли за посиланням у листі.',
    brevo: 'Для керування підпискою та надсилання листів використовується Brevo. Дані обробляються відповідно до політики конфіденційності Brevo.',
    button: 'Підписатися',
    success: 'Майже готово. Перевірте пошту та підтвердьте підписку.',
    error: 'Не вдалося зберегти підписку. Спробуйте ще раз.',
  },
  sr: {
    eyebrow: 'Ažuriranja',
    title: 'Koretskiy Consulting — ažuriranja',
    text: 'Novi projekti, praktični materijali i alati. Bez redovnih promotivnih poruka.',
    email: 'Email',
    placeholder: 'your@email.com',
    consent: 'Saglasan/saglasna sam da primam ažuriranja Koretskiy Consulting i prihvatam uslove obrade ličnih podataka.',
    unsubscribe: 'Možete se odjaviti u bilo kom trenutku putem linka u poruci.',
    brevo: 'Brevo koristimo za upravljanje pretplatama i slanje poruka. Podaci se obrađuju u skladu sa Brevo politikom privatnosti.',
    button: 'Prijavi se',
    success: 'Još samo jedan korak. Proverite email i potvrdite prijavu.',
    error: 'Prijavu nije bilo moguće sačuvati. Pokušajte ponovo.',
  },
};

export default function NewsletterSignup() {
  const pathname = usePathname() || '/en';
  const segment = pathname.split('/').filter(Boolean)[0] || 'en';
  const lang = copy[segment] ? segment : 'en';
  const t = copy[lang];

  return (
    <section id="subscribe" className="newsletter-signup" aria-labelledby="newsletter-title">
      <div className="newsletter-signup-inner">
        <div className="newsletter-intro">
          <p className="eyebrow">{t.eyebrow}</p>
          <h2 id="newsletter-title">{t.title}</h2>
          <p>{t.text}</p>
        </div>

        <div className="newsletter-form-wrap">
          <div id="error-message" className="sib-form-message-panel newsletter-message newsletter-message-error">
            <span className="sib-form-message-panel__inner-text">{t.error}</span>
          </div>
          <div id="success-message" className="sib-form-message-panel newsletter-message newsletter-message-success">
            <span className="sib-form-message-panel__inner-text">{t.success}</span>
          </div>

          <div id="sib-container">
            <form
              id="sib-form"
              method="POST"
              action={FORM_ACTION}
              data-type="subscription"
              onSubmit={() => track('Newsletter Subscribe Attempt', { lang, path: pathname })}
            >
              <div className="sib-input newsletter-field">
                <label htmlFor="EMAIL">{t.email}</label>
                <input
                  className="input"
                  type="email"
                  id="EMAIL"
                  name="EMAIL"
                  autoComplete="email"
                  placeholder={t.placeholder}
                  data-required="true"
                  required
                />
                <label className="entry__error entry__error--primary newsletter-field-error" />
              </div>

              <div className="sib-optin newsletter-optin" data-required="true">
                <label className="newsletter-checkbox">
                  <input type="checkbox" className="input_replaced" value="1" id="OPT_IN" name="OPT_IN" required />
                  <span>{t.consent}</span>
                </label>
                <label className="entry__error entry__error--primary newsletter-field-error" />
                <small>{t.unsubscribe}</small>
              </div>

              <p className="newsletter-privacy">
                {t.brevo}{' '}
                <a href="https://www.brevo.com/en/legal/privacypolicy/" target="_blank" rel="nofollow noopener noreferrer">
                  Privacy Policy
                </a>
              </p>

              <div className="sib-captcha newsletter-captcha">
                <div className="form__entry entry_block">
                  <div className="form__label-row">
                    <div
                      className="g-recaptcha sib-visible-recaptcha"
                      id="sib-captcha"
                      data-sitekey={RECAPTCHA_SITE_KEY}
                      data-callback="handleCaptchaResponse"
                    />
                  </div>
                  <label className="entry__error entry__error--primary newsletter-field-error" />
                </div>
              </div>

              <button className="button button-dark sib-form-block__button sib-form-block__button-with-loader" form="sib-form" type="submit">
                {t.button}
              </button>

              <input type="text" name="email_address_check" defaultValue="" className="input--hidden" aria-hidden="true" tabIndex={-1} />
              <input type="hidden" name="locale" value="en" />
            </form>
          </div>
        </div>
      </div>

      <Script id="brevo-form-config" strategy="afterInteractive">{`
        window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
        window.LOCALE = 'en';
        window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = 'The information provided is invalid. Please review the field format and try again.';
        window.REQUIRED_ERROR_MESSAGE = 'This field cannot be left blank. ';
        window.GENERIC_INVALID_MESSAGE = 'The information provided is invalid. Please review the field format and try again.';
        window.INVALID_NUMBER = 'The information provided is invalid. Please review the field format and try again.';
        window.INVALID_DATE = 'Please enter a valid date';
        window.REQUIRED_MULTISELECT_MESSAGE = 'Please select at least 1 option';
        window.translation = { common: { selectedList: '{quantity} list selected', selectedLists: '{quantity} lists selected', selectedOption: '{quantity} selected', selectedOptions: '{quantity} selected' } };
        window.AUTOHIDE = false;
        window.handleCaptchaResponse = function () {
          var event = new Event('captchaChange');
          var captcha = document.getElementById('sib-captcha');
          if (captcha) captcha.dispatchEvent(event);
        };
      `}</Script>
      <Script src="https://sibforms.com/forms/end-form/build/main.js" strategy="afterInteractive" />
      <Script src="https://www.google.com/recaptcha/api.js?hl=en" strategy="afterInteractive" />
    </section>
  );
}
