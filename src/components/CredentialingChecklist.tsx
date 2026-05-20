const checklistCategories = [
  {
    title: "Education & Training",
    items: [
      "Medical school diploma or transcript",
      "Residency or fellowship completion",
      "Board certification",
      "ECFMG certification, if applicable",
    ],
  },
  {
    title: "Licensure & Registrations",
    items: [
      "State medical license",
      "DEA registration",
      "National Provider Identifier",
      "State controlled substance registration, if applicable",
    ],
  },
  {
    title: "Clinical Competence",
    items: [
      "Current CV with gap review",
      "Peer references",
      "Life support certifications",
      "Procedure logs, if applicable",
    ],
  },
  {
    title: "Risk & Background",
    items: [
      "Malpractice history",
      "NPDB check",
      "OIG check",
      "Hospital affiliation verification",
    ],
  },
  {
    title: "Administrative Requirements",
    items: [
      "Government-issued ID",
      "Professional liability insurance",
      "Immunization records",
      "CAQH profile status",
    ],
  },
];

export function CredentialingChecklist() {
  return (
    <section className="credentialing-checklist">
      <div className="checklist-header">
        <p className="eyebrow">Credentialing Requirements</p>
        <h2>Document Categories Tracked</h2>
        <p>
          This demo groups provider file requirements into common credentialing
          categories used during document collection, verification, and committee
          readiness review.
        </p>
      </div>

      <div className="checklist-grid">
        {checklistCategories.map((category) => (
          <article className="checklist-card" key={category.title}>
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}