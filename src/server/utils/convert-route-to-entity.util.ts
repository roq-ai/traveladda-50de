const mapping: Record<string, string> = {
  bookings: 'booking',
  companies: 'company',
  tickets: 'ticket',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
