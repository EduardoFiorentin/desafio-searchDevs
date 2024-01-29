export const calcDaysAgo = (dateString: string): number => {
    const today = new Date();
    const lastUpdate = new Date(dateString);
    const diferenceInMilisseconds = today.getTime() - lastUpdate.getTime();
    const differenceInDays = diferenceInMilisseconds / (1000 * 3600 * 24);
    return Math.round(differenceInDays);
}