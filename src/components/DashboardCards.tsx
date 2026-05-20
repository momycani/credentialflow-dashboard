import type { Provider } from "../types/provider";

interface DashboardCardsProps {
  providers: Provider[];
}

export function DashboardCards({ providers }: DashboardCardsProps) {
  const totalProviders = providers.length;

  const readyForCommittee = providers.filter(
    (provider) => provider.status === "Committee Review"
  ).length;

  const missingDocuments = providers.reduce(
    (total, provider) => total + provider.missingDocuments.length,
    0
  );

  const expiringSoon = providers.filter(
    (provider) => provider.status === "Expiring Soon"
  ).length;

  const highRiskFiles = providers.filter(
    (provider) => provider.riskLevel === "High"
  ).length;

  const averageCompletion = Math.round(
    providers.reduce((total, provider) => total + provider.completion, 0) /
      totalProviders
  );

  const dashboardStats = [
    {
      label: "Total Providers",
      value: totalProviders,
      helper: "Active credentialing files",
    },
    {
      label: "Ready for Committee",
      value: readyForCommittee,
      helper: "Pending committee review",
    },
    {
      label: "Missing Documents",
      value: missingDocuments,
      helper: "Items still required",
    },
    {
      label: "Expiring Soon",
      value: expiringSoon,
      helper: "Needs renewal review",
    },
    {
      label: "High Risk Files",
      value: highRiskFiles,
      helper: "Requires priority action",
    },
    {
      label: "Average Completion",
      value: `${averageCompletion}%`,
      helper: "Across all files",
    },
  ];

  return (
    <section className="dashboard-grid" aria-label="Credentialing summary">
      {dashboardStats.map((stat) => (
        <article className="dashboard-card" key={stat.label}>
          <p>{stat.label}</p>
          <strong>{stat.value}</strong>
          <span>{stat.helper}</span>
        </article>
      ))}
    </section>
  );
}