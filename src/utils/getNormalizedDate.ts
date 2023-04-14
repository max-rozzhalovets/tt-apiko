export const getNormalizedDate = () => {
  const dateOneHourAgo = new Date(Date.now() - (1000 * 60 * 60)).toISOString();

  return dateOneHourAgo
    .split('T')
    .join(' ')
    .split('.')[0];
}
