export function getDaysUntil(dateString: string) {
  const today = new Date();
  const targetDate = new Date(dateString);

  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  const differenceInMs = targetDate.getTime() - today.getTime();
  return Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));
}

export function getExpirationStatus(dateString: string) {
  const daysUntil = getDaysUntil(dateString);

  if (daysUntil < 0) {
    return {
      label: "Expired",
      className: "expiration-badge expiration-badge--critical",
    };
  }

  if (daysUntil <= 30) {
    return {
      label: `${daysUntil} days`,
      className: "expiration-badge expiration-badge--critical",
    };
  }

  if (daysUntil <= 60) {
    return {
      label: `${daysUntil} days`,
      className: "expiration-badge expiration-badge--warning",
    };
  }

  return {
    label: "Current",
    className: "expiration-badge expiration-badge--safe",
  };
}