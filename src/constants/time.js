export const currentTime = Math.floor(Date.now() / 1000);
export const tenMinutesAgo = currentTime - (10 * 60); // 10분 전
export const thirtyMinutesAgo = currentTime - (30 * 60); // 30분 전
export const oneHourAgo = currentTime - (60 * 60); // 1시간 전