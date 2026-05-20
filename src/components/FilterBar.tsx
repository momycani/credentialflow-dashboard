import type {
  CredentialingStatus,
  ProviderType,
  RiskLevel,
} from "../types/provider";

interface FilterBarProps {
  searchTerm: string;
  statusFilter: string;
  specialtyFilter: string;
  riskFilter: string;
  providerTypeFilter: string;
  specialties: string[];
  sortOption: string;
onSortChange: (value: string) => void;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onSpecialtyChange: (value: string) => void;
  onRiskChange: (value: string) => void;
  onProviderTypeChange: (value: string) => void;
  onClearFilters: () => void;
}

const statuses: CredentialingStatus[] = [
  "Application Received",
  "Document Collection",
  "Primary Source Verification",
  "Peer Review",
  "Committee Review",
  "Approved",
  "Expiring Soon",
  "Incomplete",
];

const riskLevels: RiskLevel[] = ["Low", "Medium", "High"];

const providerTypes: ProviderType[] = [
  "Physician",
  "Advanced Practice Professional",
];

export function FilterBar({
  searchTerm,
  statusFilter,
  specialtyFilter,
  riskFilter,
  providerTypeFilter,
  specialties,
  sortOption,
  onSortChange,
  onSearchChange,
  onStatusChange,
  onSpecialtyChange,
  onRiskChange,
  onProviderTypeChange,
  onClearFilters,
}: FilterBarProps) {
  return (
    <section className="filter-bar" aria-label="Provider filters">
      <div className="filter-group filter-group--search">
        <label htmlFor="search">Search</label>
        <input
          id="search"
          type="search"
          value={searchTerm}
          placeholder="Search provider, specialty, or status"
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>

      <div className="filter-group">
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={statusFilter}
          onChange={(event) => onStatusChange(event.target.value)}
        >
          <option value="All">All Statuses</option>
          {statuses.map((status) => (
            <option value={status} key={status}>
              {status}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="specialty">Specialty</label>
        <select
          id="specialty"
          value={specialtyFilter}
          onChange={(event) => onSpecialtyChange(event.target.value)}
        >
          <option value="All">All Specialties</option>
          {specialties.map((specialty) => (
            <option value={specialty} key={specialty}>
              {specialty}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="risk">Risk Level</label>
        <select
          id="risk"
          value={riskFilter}
          onChange={(event) => onRiskChange(event.target.value)}
        >
          <option value="All">All Risk Levels</option>
          {riskLevels.map((risk) => (
            <option value={risk} key={risk}>
              {risk}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="provider-type">Provider Type</label>
        <select
          id="provider-type"
          value={providerTypeFilter}
          onChange={(event) => onProviderTypeChange(event.target.value)}
        >
          <option value="All">All Provider Types</option>
          {providerTypes.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

            <div className="filter-group">
        <label htmlFor="sort">Sort By</label>
        <select
          id="sort"
          value={sortOption}
          onChange={(event) => onSortChange(event.target.value)}
        >
          <option value="default">Default Order</option>
          <option value="completionLow">Completion: Low to High</option>
          <option value="completionHigh">Completion: High to Low</option>
          <option value="riskHigh">Risk: High First</option>
          <option value="committeeDate">Committee Date</option>
          <option value="licenseExpiration">License Expiration</option>
        </select>
      </div>

      <button className="clear-button" type="button" onClick={onClearFilters}>
        Clear Filters
      </button>
    </section>
  );
}