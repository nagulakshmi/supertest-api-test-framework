
describe('POST/api/addfineuser', function () {
  it('it should return data sucessfully inserted', function () {
    return httprequest.httpPostRequest('/api/addfineuser')
      .send({ "bill_no": "null", "name": "hari", "mobile_no": "9788207185", "division": 1, "ward_no": 4, "door_no": 1, "street_name": "KIRAPPATTI", "fine_dep": 1, "fine_for": 4, "fine_amt": 3000, "mode_of_pay": "Cash", "lat": "0", "lang": "0", "fine_user_id": 11357, "fine_user_name": "Paneerselvam", "fine_user_contact": "8072561814", "fineimg1": "null", "fineimg2": "null" })
      .expect(200)
      .then(response => {
        assert.deepEqualExcludingEvery(response.body, { "response_status": "success" }, ['result', 'result1'])
        return dbConnection.excecuteQuery("select * from smart_fine where id = ".concat(response.body.result1))
          .then(result => {
            assert.equal(result.length, 1);
            assert.deepEqualExcluding(result[0], { "name": "hari", "mobile_no": "9788207185", "division": 1, "ward_no": 4, "door_no": "1", "street_name": "KIRAPPATTI", "fine_dep": 1, "fine_for": 4, "fine_amt": 3000, "mode_of_pay": "Cash", "lat": 0, "lang": 0, "fine_user_id": 11357, "fine_user_name": "Paneerselvam", "fine_user_contact": "8072561814" }, ['id', 'bill_no', 'fineimg1', 'fineimg2', 'created_date', 'created_time','working_time'])
          })
      })
  })
});