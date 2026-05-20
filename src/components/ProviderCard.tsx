import { useState } from "react";
import type { Provider } from "../types/provider";
import { getExpirationStatus } from "../utils/dashboardUtils";

interface ProviderCardProps {
  provider: Provider;
}

function getInitials(name: string) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function getStatusClass(status: string) {
  return status.toLowerCase().replaceAll(" ", "-").replaceAll("/", "");
}

export function ProviderCard({ provider }: ProviderCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

 const licenseStatus = getExpirationStatus(provider.licenseExpiration);
    const deaStatus = provider.deaExpiration
    ? getExpirationStatus(provider.deaExpiration)
    : null;
    const malpracticeStatus = getExpirationStatus(provider.malpracticeExpiration); 

  return (
    <article className="provider-card">
      <div className="provider-card__header">
        <div className="provider-identity">
          <div className="provider-avatar">{getInitials(provider.name)}</div>

          <div>
            <h2>{provider.name}</h2>
            <p>
              {provider.credentials} • {provider.specialty}
            </p>
          </div>
        </div>

        <span
          className={`risk-badge risk-badge--${provider.riskLevel.toLowerCase()}`}
        >
          {provider.riskLevel}
        </span>
      </div>

      <div className="badge-row">
        <span className={`status-badge status-badge--${getStatusClass(provider.status)}`}>
          {provider.status}
        </span>
      </div>

      <div className="provider-card__meta">
        <p>
          <strong>Type:</strong> {provider.providerType}
        </p>
        <p>
          <strong>Committee Date:</strong> {provider.committeeDate}
        </p>
      </div>

      <div className="progress">
        <div className="progress__top">
          <span>File Completion</span>
          <span>{provider.completion}%</span>
        </div>
        <div className="progress__bar">
          <div
            className="progress__fill"
            style={{ width: `${provider.completion}%` }}
          />
        </div>
      </div>

      <div className="missing-docs">
        <strong>Missing Documents:</strong>
        {provider.missingDocuments.length > 0 ? (
          <ul>
            {provider.missingDocuments.map((document) => (
              <li key={document}>{document}</li>
            ))}
          </ul>
        ) : (
          <p>None — ready for review.</p>
        )}
      </div>

      <button
        className="details-button"
        type="button"
        onClick={() => setIsExpanded((currentValue) => !currentValue)}
      >
        {isExpanded ? "Hide Details" : "View Details"}
      </button>

      {isExpanded && (
        <div className="provider-details">
         <div className="detail-row">
  <span>License Expiration</span>
  <div className="detail-value">
    <strong>{provider.licenseExpiration}</strong>
    <span className={licenseStatus.className}>{licenseStatus.label}</span>
  </div>
</div>

{provider.deaExpiration && deaStatus && (
  <div className="detail-row">
    <span>DEA Expiration</span>
    <div className="detail-value">
      <strong>{provider.deaExpiration}</strong>
      <span className={deaStatus.className}>{deaStatus.label}</span>
    </div>
  </div>
)}

<div className="detail-row">
  <span>Malpractice Expiration</span>
  <div className="detail-value">
    <strong>{provider.malpracticeExpiration}</strong>
    <span className={malpracticeStatus.className}>
      {malpracticeStatus.label}
    </span>
  </div>
</div>

          <div className="detail-row">
            <span>CAQH Status</span>
            <strong>{provider.caqhStatus}</strong>
          </div>

          <div className="detail-row">
            <span>Peer References</span>
            <strong>{provider.peerReferences}</strong>
          </div>

          <p className="smart-note">{provider.smartNote}</p>
        </div>
      )}
    </article>
  );
}