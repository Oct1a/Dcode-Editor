module.exports = {
  port: 3333,
  mongodb: {
    url: 'mongodb://localhost:27017/Oct1a',
    options: {}
  },
  middleware: ['handlerError'],
  jwt: { secret: 'Oct1a_H' },
  crypto: { secret: '#*#*Oct1a_H*#*#' },
  baseUrl: '',
  eqxiuCookie: '_tracker_distinct_id_=2020111920aaabbc; ARK_ID=JSdfda9e002ba3079ecdec774543e214ebdfda; _tracker_user_id_=b9564bd5d2714e12b5cc243eabfe3ea1; bigdata_user_reg_time=2020-12-17%2008%3A46%3A50; Hm_lvt_93cd06ebda2db598041456a9d18c7299=1618806303,1619361256,1620872002; _tracker_ab=abTest_v1_undefined_undefined; ab_trace_id=8794808596b941fa865a543cb2a7fef8; JSESSIONID=79319b30297241978acbcbf913cc818d; canvasId=51a92dcf-a5f0-4040-90a5-b108292fc4f5; ARK_STARTUP=eyJTVEFSVFVQIjp0cnVlLCJTVEFSVFVQVElNRSI6IjIwMjEtMDUtMjAgMDk6MTA6NTEuMTgwIn0%3D; eip-user-login-first={"e3ea1":"2021-05-20"}; _tracker_session_id_=3d01aaab-e93c-42d0-88d6-4cda23b74234; _tracker_launch_=1; FZ_STROAGE.eqxiu.com=eyJBUktTVVBFUiI6eyJwcm9kdWN0IjoiSDXllYbln44ifSwiU0VFU0lPTklEIjoiZjU1YjI0NTk0MDkzOTFlZSIsIlNFRVNJT05EQVRFIjoxNjIxNDczMDYxODgzLCJBTlNBUFBJRCI6ImYxY2MwYWUzZTBkMDc4MjIiLCJBTlMkREVCVUciOjAsIkFOU1VQTE9BRFVSTCI6Imh0dHBzOi8vYXJrLXB1c2gxLmVxeGl1LmNvbS8iLCJGUklTVERBWSI6IjIwMjEwNTE0IiwiRlJJU1RJTUUiOmZhbHNlLCJBUktfSUQiOiJKU2RmZGE5ZTAwMmJhMzA3OWVjZGVjNzc0NTQzZTIxNGViZGZkYSIsIkFSS0ZSSVNUUFJPRklMRSI6IjIwMjEtMDUtMTQgMTU6MzY6NTAuMzUxIn0%3D; _tracker_share_level_=0; _tracker_from_user_=; _tracker_from_id_='
}