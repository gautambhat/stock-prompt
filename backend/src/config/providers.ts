export const providers = {
  alphavantage: {
    apiKey: 'DWTEGBWQ24FIN2EW',
    responseParser: data => data['Global Quote']['05. price'],
  },
};