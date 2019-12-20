const moment = require("moment");

describe('post /api/getlogbydate', function () {
    it('it should return officer log data', function () {
        return httprequest.httpPostRequest('/api/addfineuser')
            .send({ "bill_no": "null", "name": "hari", "mobile_no": "9788207185", "division": 1, "ward_no": 4, "door_no": 1, "street_name": "KIRAPPATTI", "fine_dep": 1, "fine_for": 4, "fine_amt": 3000, "mode_of_pay": "Cash", "lat": "0", "lang": "0", "fine_user_id": 11357, "fine_user_name": "Paneerselvam", "fine_user_contact": "8072561814", "fineimg1": "null", "fineimg2": "null" })
            .expect(200)
            .then(response => {
                var currentDate = new Date();
                var fromDate = moment(currentDate).format("YYYY-MM-DD")
                var toDate = moment(currentDate).add(1, 'months').format("YYYY-MM-DD")
                return dbConnection.excecuteQuery("select * from smart_fine where fine_user_id = 11357")
                    .then(result => {
                        return httprequest.httpPostRequest('/api/getlogbydate')
                            .expect(200)
                            .send({ "user_id": "11357", "from_date": fromDate, "to_date": toDate })
                            .then(response => {
                                assert.equal(response.body.result.length, result.length)
                            })
                    })
            })
    })

    it('it should return officer log data', function () {
        return httprequest.httpPostRequest('/api/addfineuser')
            .send({ "bill_no": "null", "name": "hari", "mobile_no": "9788207185", "division": 1, "ward_no": 4, "door_no": 1, "street_name": "KIRAPPATTI", "fine_dep": 1, "fine_for": 4, "fine_amt": 3000, "mode_of_pay": "Cash", "lat": "0", "lang": "0", "fine_user_id": 11357, "fine_user_name": "Paneerselvam", "fine_user_contact": "8072561814", "fineimg1": "null", "fineimg2": "null" })
            .expect(200)
            .then(response => {
                var currentDate = new Date();
                var fromDate = moment(currentDate).format("YYYY-MM-DD")
                var toDate = moment(currentDate).add(1, 'months').format("YYYY-MM-DD")
                return dbConnection.excecuteQuery("select * from smart_fine where fine_user_id = 113")
                    .then(result => {
                        return httprequest.httpPostRequest('/api/getlogbydate')
                            .expect(200)
                            .send({ "user_id": "113", "from_date": fromDate, "to_date": toDate })
                            .then(response => {
                                assert.equal(response.body.result.length, result.length)
                            })
                    })
            })
    })
});