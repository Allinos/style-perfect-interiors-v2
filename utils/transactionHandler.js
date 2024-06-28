exports.transactHandler = async function (query, data, connn, res, type) {
    const clientTableData = data
    const qToclient = query
    await connn.query(qToclient, type ? [clientTableData] : clientTableData, (errClient, responseClient) => {
        if (errClient) {
            res.status(500).send({ msg: "something error occured" })
            return connn.rollback(function () {
                throw errClient;
            })
        }
    })
}