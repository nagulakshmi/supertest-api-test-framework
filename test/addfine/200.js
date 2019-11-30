
describe('post /api/addfineuser',function(){
    it('it should return data sucessfully inserted',function(){
    return httprequest.httpPostRequest('/api/addfineuser')
    .send({ "Bill_no": "null","name": "hari","mobile_no": "9788207185","division": "1","ward_no": "4","door_no": "1","street_name": "KIRAPPATTI","fine_dep": "1","fine_for":"4", "fine_amt": "3000","mode_of_pay": "Cash", "fineimg1": "null","fineimg2":"null", "lat": "0","lang": "0","fine_user_id": "11357","fine_user_name": "Paneerselvam","fine_user_contact": "8072561814","created_date": "2019-07-28","created_time": "2019-11-19 03:45:00"})
    .expect(200)
    .then(response => {
      assert.deepEqualExcludingEvery(response.body,{"response_status":"success"},['result','result1'])
      return dbConnection.excecuteQuery("delete  from smart_fine where mobile_no = 9788207185")
      .then(result => {
         
       })
        
    })
        
    })
});