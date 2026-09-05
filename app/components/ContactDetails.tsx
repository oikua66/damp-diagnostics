import { business, mailtoHref } from '../../lib/business';

export default function ContactDetails() {
  return (
    <section className="contact-details" aria-label={`${business.operatingName} contact details`}>
      <div className="contact-details-inner">
        <div>
          <p className="eyebrow">{business.operatingName}</p>
          <h3>{business.founder.canonicalName}</h3>
          <p className="contact-company">{business.registeredSerbianName}</p>
        </div>
        <div className="contact-links">
          <a href={mailtoHref()}>{business.email}</a>
          <a href={business.phone.href}>{business.phone.display}</a>
          <a href={business.website.contactUrl}>{business.website.contactDisplay}</a>
          <span>{business.messagingChannelLabels.join(' · ')}</span>
        </div>
      </div>
    </section>
  );
}
