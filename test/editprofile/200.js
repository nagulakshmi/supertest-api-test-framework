
describe('post /api/editprofile',function(){
    it.only('it should return Profile Updated Successfully',function(){
      return httprequest.httpPostRequest('/api/editprofile')
      .send({"id":"11372","phone":"8056665041","division":"6","address":"RMS colony","wardno":"20"})
      .expect(200)
      .then(response =>{
         assert.deepEqual(response.body,{"success":"true","result":"Profile Updated Successfully"})
        return dbConnection.excecuteQuery("select * from users where id = 11372")
        .then(result => {
          assert.equal(result.length, 1);
          assert.deepEqualExcluding(result[0],{"phone":"8056665041","division":"6","address": "RMS colony","wardno":"20"},["id","role","username","email","password","otp_number","remember_token","created_at","updated_at","activate","access","department","mid"])
        })
      })
    })
  });

  