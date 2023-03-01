export const FROM = new Date().getTime();
export const TO = (time) => { 
    return new Date(Date.parse(new Date()) + 1000 * 60 * time).getTime();
}