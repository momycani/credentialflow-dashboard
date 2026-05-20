import type { Provider } from "../types/provider";

interface SmartInsightsProps {
  providers: Provider[];
}

export function SmartInsights({ providers }: SmartInsightsProps) {
  const highRiskProviders = providers.filter(
    (provider) => provider.riskLevel === "High"
  );

  const readyForCommittee = providers.filter(
    (provider) => provider.status === "Committee Review"
  );

  const expiringSoon = providers.filter(
    (provider) => provider.status === "Expiring Soon"
  );

  const totalMissingDocuments = providers.reduce(
    (total, provider) => total + provider.missingDocuments.length,
    0
  );

  const allMissingDocuments = providers.flatMap(
    (provider) => provider.missingDocuments
  );

  const mostCommonMissingDocument =
    allMissingDocuments.length > 0
      ? allMissingDocuments.reduce((mostCommon, currentDocument) => {
          const currentCount = allMissingDocuments.filter(
            (document) => document === currentDocument
          ).length;

          const mostCommonCount = allMissingDocuments.filter(
            (document) => document === mostCommon
          ).length;

          return currentCount > mostCommonCount ? currentDocument : mostCommon;
        })
      : "No missing documents";

  const insights = [
    {
      title: "Priority Review",
      text:
        highRiskProviders.length > 0
          ? `${highRiskProviders.length} high-risk provider files need immediate follow-up.`
          : "No high-risk files currently require immediate review.",
    },
    {
      title: "Committee Readiness",
      text:
        readyForCommittee.length > 0
          ? `${readyForCommittee.length} provider files are ready for committee review.`
          : "No files are currently marked for committee review.",
    },
    {
      title: "Renewal Watch",
      text:
        expiringSoon.length > 0
          ? `${expiringSoon.length} provider files include upcoming expiration concerns.`
          : "No provider files are currently marked as expiring soon.",
    },
    {
      title: "Document Trend",
      text:
        totalMissingDocuments > 0
          ? `${totalMissingDocuments} total documents are missing. Most common item: ${mostCommonMissingDocument}.`
          : "All provider files currently show complete documentation.",
    },
  ];

  return (
    <section className="smart-insights" aria-label="Smart review notes">
      <div className="smart-insights__header">
        <p className="eyebrow">Smart Review Notes</p>
        <h2>Credentialing Workflow Insights</h2>
      </div>

      <div className="insight-grid">
        {insights.map((insight) => (
          <article className="insight-card" key={insight.title}>
            <h3>{insight.title}</h3>
            <p>{insight.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}