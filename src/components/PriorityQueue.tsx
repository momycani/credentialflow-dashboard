import type { Provider } from "../types/provider";

interface PriorityQueueProps {
  providers: Provider[];
}

export function PriorityQueue({ providers }: PriorityQueueProps) {
  const priorityProviders = providers
    .filter(
      (provider) =>
        provider.riskLevel === "High" ||
        provider.status === "Expiring Soon" ||
        provider.status === "Incomplete" ||
        provider.missingDocuments.length >= 3
    )
    .sort((a, b) => {
      const riskOrder = {
        High: 1,
        Medium: 2,
        Low: 3,
      };

      return riskOrder[a.riskLevel] - riskOrder[b.riskLevel];
    })
    .slice(0, 4);

  return (
    <section className="priority-queue">
      <div className="priority-header">
        <div>
          <p className="eyebrow">Priority Queue</p>
          <h2>Files Needing Attention</h2>
        </div>
        <p>
          High-risk, incomplete, or expiring files are surfaced first for
          follow-up.
        </p>
      </div>

      <div className="priority-grid">
        {priorityProviders.map((provider) => (
          <article className="priority-card" key={provider.id}>
            <div className="priority-card__top">
              <div>
                <h3>{provider.name}</h3>
                <p>
                  {provider.credentials} • {provider.specialty}
                </p>
              </div>

              <span
                className={`risk-badge risk-badge--${provider.riskLevel.toLowerCase()}`}
              >
                {provider.riskLevel}
              </span>
            </div>

            <p className="priority-status">{provider.status}</p>

            <ul>
              {provider.missingDocuments.length > 0 ? (
                provider.missingDocuments.slice(0, 3).map((document) => (
                  <li key={document}>{document}</li>
                ))
              ) : (
                <li>Review upcoming expiration dates.</li>
              )}
            </ul>

            <p className="priority-note">{provider.smartNote}</p>
          </article>
        ))}
      </div>
    </section>
  );
}