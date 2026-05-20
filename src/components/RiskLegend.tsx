export function RiskLegend() {
  return (
    <section className="risk-legend" aria-label="Risk and status legend">
      <div>
        <p className="eyebrow">Review Guide</p>
        <h2>Risk & Completion Legend</h2>
      </div>

      <div className="legend-grid">
        <article className="legend-item">
          <span className="legend-dot legend-dot--low" />
          <div>
            <strong>Low Risk</strong>
            <p>File is mostly complete with no urgent credentialing concerns.</p>
          </div>
        </article>

        <article className="legend-item">
          <span className="legend-dot legend-dot--medium" />
          <div>
            <strong>Medium Risk</strong>
            <p>File needs follow-up before committee review or approval.</p>
          </div>
        </article>

        <article className="legend-item">
          <span className="legend-dot legend-dot--high" />
          <div>
            <strong>High Risk</strong>
            <p>File has missing critical items or upcoming expiration issues.</p>
          </div>
        </article>

        <article className="legend-item">
          <span className="legend-dot legend-dot--completion" />
          <div>
            <strong>Completion %</strong>
            <p>Shows overall readiness based on documents and review status.</p>
          </div>
        </article>
      </div>
    </section>
  );
}