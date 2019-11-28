
describe('post /api/editprofile',function(){
    it('it should return Profile Updated Successfully',function(){
      return httprequest.httpPostRequest('/api/editprofile')
      .send({"id":"11372","address":"ramijnagar","wardno":"59"})
      .expect(200)
      .then(response =>{
        console.log(JSON.stringify(response.body));
        assert.deepEqual(response.body,{"success":"true","result":"Profile Updated Successfully"})
      })
    })
  });

