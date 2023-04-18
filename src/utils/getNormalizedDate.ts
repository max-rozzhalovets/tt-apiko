export const getNormalizedDate = (timeInterval: number) => {
  const dateOneHourAgo = new Date(Date.now() - timeInterval).toISOString();

  return dateOneHourAgo
    .split('T')
    .join(' ')
    .split('.')[0];
}
