export type CredentialingStatus =
  | "Application Received"
  | "Document Collection"
  | "Primary Source Verification"
  | "Peer Review"
  | "Committee Review"
  | "Approved"
  | "Expiring Soon"
  | "Incomplete";

export type RiskLevel = "Low" | "Medium" | "High";

export type ProviderType = "Physician" | "Advanced Practice Professional";

export interface Provider {
  id: number;
  name: string;
  credentials: string;
  providerType: ProviderType;
  specialty: string;
  status: CredentialingStatus;
  riskLevel: RiskLevel;
  completion: number;
  committeeDate: string;
  licenseExpiration: string;
  deaExpiration?: string;
  malpracticeExpiration: string;
  caqhStatus: "Current" | "Needs Attestation" | "Missing";
  peerReferences: "Complete" | "Pending" | "Missing";
  missingDocuments: string[];
  smartNote: string;
}