before(function () {
  console.log("before hookjs");
  return httprequest.httpPostRequest('/oauth/token')
    .send({ "grant_type": "password", "client_id": "2", "client_secret": "uUJgzh932OVewizbumTRY7fw1VCLaVr6JSl1qNwq", "username": "8754977907", "password": "123456" })
    .then(response => {
      util.setAccessToken(response.body.access_token);
      return dbConnection.excecuteQuery("delete  from smart_fine")
        
    })
})

after(function () {
  console.log("after hookjs");
})