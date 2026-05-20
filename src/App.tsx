import { useMemo, useState } from "react";
import { DashboardCards } from "./components/DashboardCards";
import { FilterBar } from "./components/FilterBar";
import { ProviderCard } from "./components/ProviderCard";
import { providers } from "./data/providers";
import { SmartInsights } from "./components/SmartInsights";
import { CredentialingChecklist } from "./components/CredentialingChecklist";
import { RiskLegend } from "./components/RiskLegend";
import { PriorityQueue } from "./components/PriorityQueue";
import { BackToTopButton } from "./components/BackToTopButton";
import "./App.css";

function App() {
  const [statusFilter, setStatusFilter] = useState("All");
  const [specialtyFilter, setSpecialtyFilter] = useState("All");
  const [riskFilter, setRiskFilter] = useState("All");
  const [providerTypeFilter, setProviderTypeFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const specialties = useMemo(() => {
    return Array.from(
      new Set(providers.map((provider) => provider.specialty))
    ).sort();
  }, []);

  const filteredProviders = providers.filter((provider) => {
  const normalizedSearch = searchTerm.toLowerCase().trim();

  const searchableText = [
    provider.name,
    provider.name.replace("Dr. ", ""),
    provider.credentials,
    provider.specialty,
    provider.status,
    provider.providerType,
    provider.riskLevel,
    provider.caqhStatus,
    provider.peerReferences,
    ...provider.missingDocuments,
  ]
    .join(" ")
    .toLowerCase();

  const searchWords = normalizedSearch.split(" ").filter(Boolean);

  const matchesSearch =
    normalizedSearch === "" ||
    searchWords.every((word) => searchableText.includes(word));

  const matchesStatus =
    statusFilter === "All" || provider.status === statusFilter;

  const matchesSpecialty =
    specialtyFilter === "All" || provider.specialty === specialtyFilter;

  const matchesRisk = riskFilter === "All" || provider.riskLevel === riskFilter;

  const matchesProviderType =
    providerTypeFilter === "All" ||
    provider.providerType === providerTypeFilter;

  return (
    matchesSearch &&
    matchesStatus &&
    matchesSpecialty &&
    matchesRisk &&
    matchesProviderType
  );
});

const riskOrder = {
  High: 1,
  Medium: 2,
  Low: 3,
};

const sortedProviders = [...filteredProviders].sort((a, b) => {
  if (sortOption === "completionLow") {
    return a.completion - b.completion;
  }

  if (sortOption === "completionHigh") {
    return b.completion - a.completion;
  }

  if (sortOption === "riskHigh") {
    return riskOrder[a.riskLevel] - riskOrder[b.riskLevel];
  }

  if (sortOption === "committeeDate") {
    return (
      new Date(a.committeeDate).getTime() -
      new Date(b.committeeDate).getTime()
    );
  }

  if (sortOption === "licenseExpiration") {
    return (
      new Date(a.licenseExpiration).getTime() -
      new Date(b.licenseExpiration).getTime()
    );
  }

  return a.id - b.id;
});

function clearFilters() {
  setSearchTerm("");
  setStatusFilter("All");
  setSpecialtyFilter("All");
  setRiskFilter("All");
  setProviderTypeFilter("All");
  setSortOption("default");
}

  return (
    <main className="app">
      <section className="hero">
        <p className="eyebrow">Medical Staff Office Workflow</p>
        <h1>CredentialFlow Dashboard</h1>
        <p>
          A healthcare operations dashboard for tracking provider credentialing
          readiness, missing documents, expiration risks, and committee review
          status.
        </p>
      </section>

              <div className="tech-tags" aria-label="Project tech stack">
          <span>React</span>
          <span>TypeScript</span>
          <span>Vite</span>
          <span>Mock Data</span>
          <span>Healthcare Workflow</span>
          <span>Responsive Dashboard</span>
        </div>

            <section className="facility-banner">
        <div>
          <span>Demo Facility</span>
          <strong>Northstar Regional Medical Center</strong>
        </div>

        <div>
          <span>Credentialing Cycle</span>
          <strong>June 2026 Committee Review</strong>
        </div>

        <div>
          <span>Last Updated</span>
          <strong>May 20, 2026</strong>
        </div>
      </section>

      <DashboardCards providers={providers} />

      <SmartInsights providers={providers} />

      <PriorityQueue providers={providers} />

      <CredentialingChecklist />

      <RiskLegend />

      <FilterBar
        searchTerm={searchTerm}
        statusFilter={statusFilter}
        specialtyFilter={specialtyFilter}
        riskFilter={riskFilter}
        providerTypeFilter={providerTypeFilter}
        sortOption={sortOption}
        specialties={specialties}
        onSearchChange={setSearchTerm}
        onStatusChange={setStatusFilter}
        onSpecialtyChange={setSpecialtyFilter}
        onRiskChange={setRiskFilter}
        onProviderTypeChange={setProviderTypeFilter}
        onSortChange={setSortOption}
        onClearFilters={clearFilters}
      />

      <section className="results-header">
        <h2>Provider Files</h2>
        <p>
          Showing {sortedProviders.length} of {providers.length} providers
        </p>
      </section>

      {sortedProviders.length > 0 ? (
        <section className="provider-grid">
          {sortedProviders.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <h2>No providers match those filters.</h2>
          <p>Try clearing filters or selecting a different credentialing view.</p>
          <button type="button" onClick={clearFilters}>
            Clear Filters
          </button>
        </section>
      )}

      <footer className="project-footer">
        <p>
          CredentialFlow Dashboard is a portfolio project using fictional
          provider data for demonstration purposes only.
        </p>
      </footer>
      <BackToTopButton />
    </main>
  );
}

export default App;
