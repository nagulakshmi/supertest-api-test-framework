
describe('POST/api/addfineuser', function () {
    it('it should return 500 Internal Server Error', function () {
      return httprequest.httpPostRequest('/api/addfineuser')
        .send({ "bill_no": "null", "name": "", "mobile_no": "9788207185", "division": 1, "ward_no": 4, "door_no": 1, "street_name": "KIRAPPATTI", "fine_dep": 1, "fine_for": 4, "fine_amt": 3000, "mode_of_pay": "Cash", "lat": "0", "lang": "0", "fine_user_id": 11357, "fine_user_name": "Paneerselvam", "fine_user_contact": "8072561814", "fineimg1": "null", "fineimg2": "null" })
        .expect(500)
        .then(response => {
           // console.log("response:" + response.body.code);
           assert.equal(response.body.code)
        })
    })

    it('it should return 500 Internal Server Error', function () {
        return httprequest.httpPostRequest('/api/addfineuser')
          .send({ "bill_no": "null","mobile_no": "9788207185", "division": 1, "ward_no": 4, "door_no": 1, "street_name": "KIRAPPATTI", "fine_dep": 1, "fine_for": 4, "fine_amt": 3000, "mode_of_pay": "Cash", "lat": "0", "lang": "0", "fine_user_id": 11357, "fine_user_name": "Paneerselvam", "fine_user_contact": "8072561814", "fineimg1": "null", "fineimg2": "null" })
          .expect(500)
          .then(response => {
             assert.equal(response.body.code)
          })
      })

      it('it should return 500 Internal Server Error', function () {
        return httprequest.httpPostRequest('/api/addfineuser')
        .send()
          .expect(500)
          .then(response => {
             assert.equal(response.body.code)
          })
      })
  });