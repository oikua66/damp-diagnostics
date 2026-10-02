"use client";

import { useMemo, useState } from 'react';
import type { Lang } from '../../../../lib/translations';
import { glossaryTerms } from '../../../../lib/glossary';

const copy: Record<Lang, { search: string; placeholder: string; noResults: string; formal: string; definition: string }> = {
  en: { search: 'Search glossary', placeholder: 'Term, translation or definition…', noResults: 'No matching terms.', formal: 'Formal name', definition: 'Definition' },
  ru: { search: 'Поиск по глоссарию', placeholder: 'Термин, перевод или определение…', noResults: 'Совпадений не найдено.', formal: 'Формальное название', definition: 'Определение' },
  uk: { search: 'Пошук у глосарії', placeholder: 'Термін, переклад або визначення…', noResults: 'Збігів не знайдено.', formal: 'Формальна назва', definition: 'Визначення' },
  sr: { search: 'Pretraga glosara', placeholder: 'Termin, prevod ili definicija…', noResults: 'Nema odgovarajućih termina.', formal: 'Formalni naziv', definition: 'Definicija' },
};

export default function GlossaryList({ lang }: { lang: Lang }) {
  const [query, setQuery] = useState('');
  const t = copy[lang];

  const terms = useMemo(() => {
    const q = query.trim().toLocaleLowerCase();
    if (!q) return glossaryTerms;
    return glossaryTerms.filter((item) => {
      const haystack = [
        item.canonical,
        item.terms.en,
        item.terms.ru,
        item.terms.uk,
        item.terms.sr,
        item.definition[lang],
      ].join(' ').toLocaleLowerCase();
      return haystack.includes(q);
    });
  }, [lang, query]);

  return (
    <>
      <div className="glossary-search">
        <label htmlFor="glossary-search-input">{t.search}</label>
        <input
          id="glossary-search-input"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t.placeholder}
        />
        <span>{terms.length} / {glossaryTerms.length}</span>
      </div>

      <div className="glossary-list">
        {terms.map((item) => (
          <article className="glossary-item" id={`term-${item.id}`} key={item.id}>
            <div className="glossary-term-heading">
              <span className="card-number">{item.id}</span>
              <div>
                <h2>{item.terms[lang]}</h2>
                {lang !== 'en' && <p className="glossary-canonical">{item.canonical}</p>}
                {item.formal && <span className="glossary-formal">{t.formal}</span>}
              </div>
            </div>

            <div className="glossary-term-body">
              <div className="glossary-definition">
                <strong>{t.definition}</strong>
                <p>{item.definition[lang]}</p>
              </div>
              <dl className="glossary-languages">
                <div><dt>EN</dt><dd>{item.terms.en}</dd></div>
                <div><dt>RU</dt><dd>{item.terms.ru}</dd></div>
                <div><dt>UA</dt><dd>{item.terms.uk}</dd></div>
                <div><dt>SR</dt><dd>{item.terms.sr}</dd></div>
              </dl>
            </div>
          </article>
        ))}
      </div>

      {!terms.length && <p className="glossary-empty">{t.noResults}</p>}
    </>
  );
}
