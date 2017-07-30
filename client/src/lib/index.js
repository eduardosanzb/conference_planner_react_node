export const showCMS = user =>
  user.permissions.some(({ name }) => name === 'ADMIN' || name === 'ORGANIZER');
