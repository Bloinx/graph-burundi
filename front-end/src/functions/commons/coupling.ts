export function shortenAddress(address: string): string {
  if (address.length <= 6) {
    return address; // In case the address is too short to shorten.
  }

  const firstPart = address.slice(0, 4); // First 4 characters, including '0x'
  const lastPart = address.slice(-3); // Last 3 characters

  return `${firstPart}...${lastPart}`;
}
