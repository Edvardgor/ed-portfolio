import type { CaseMeta } from '../data/cases';

const CaseCard = ({ title, years, role, scope, result }: CaseMeta) => {
  return (
    <article className="case-card">
      <header className="case-card-header">
        <h3>{title}</h3>
        <div className="case-meta">
          <span>{years}</span>
          <span>{role}</span>
          <span>{scope}</span>
        </div>
      </header>
      <div className="case-media" aria-hidden="true" />
      <p className="case-result">{result}</p>
      <div className="case-actions">
        <button
          className="secondary-button disabled-button"
          type="button"
          disabled
          aria-disabled="true"
          tabIndex={-1}
        >
          Подробнее
          <span className="soon-label">Скоро</span>
        </button>
        <button
          className="secondary-button disabled-button"
          type="button"
          disabled
          aria-disabled="true"
          tabIndex={-1}
        >
          Figma
          <span className="soon-label">Скоро</span>
        </button>
      </div>
    </article>
  );
};

export default CaseCard;
