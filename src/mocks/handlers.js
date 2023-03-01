import { rest, setupWorker } from 'msw';
import timeseriesDataGet from './resolver/timeseries';
import { pieResolver } from './resolver/pie';
import { valueResolver } from './resolver/value';
const chartHandlers = [
  rest.get(`/timeseries`, timeseriesDataGet),
  rest.get('/pie', pieResolver),
  rest.get('/value', valueResolver),
];
// handlers = [chartHandlers]에서 []를 지운 이유는 이미 chartHandlers를 배열로 한 번 묶었기 때문
export const handlers = chartHandlers;