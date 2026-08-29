export default function ContactDetails() {
  return (
    <section className="contact-details" aria-label="Koretskiy Consulting contact details">
      <div className="contact-details-inner">
        <div>
          <p className="eyebrow">Koretskiy Consulting</p>
          <h3>Oleksandr Koretskiy</h3>
          <p className="contact-company">OLEKSANDR KORETSKIY PR AGENCIJA ZA TEHNIČKI KONSALTING FUTOG</p>
        </div>
        <div className="contact-links">
          <a href="mailto:consulting@koretskiy.com">consulting@koretskiy.com</a>
          <a href="tel:+381638421005">+381 63 842 1005</a>
          <a href="https://www.koretskiy.com">www.koretskiy.com</a>
          <span>WhatsApp · Viber · Telegram</span>
        </div>
      </div>
    </section>
  );
}
