const { getDate } = require('./time')
    // sql语句的操作方法,使用时只需引入即可
const queryOne = (_Modal, _query = {}) => {

    let populate = _query['populate[]'] && arrJSON(_query['populate[]']) || []
    delete _query['populate[]']

    return new Promise((resolve, reject) => {
        _Modal.findOne(_query, (err, res) => {
            if (err) {
                reject(err)
            }
            resolve(res)
        }).populate(populate);
    });
};
// 转get请求数组参数为对象
function arrJSON(arr) {
    //数组长度为1时,传递过来的是一个对象,需要转为数组
    if (typeof(arr) == 'string') {
        arr = [arr]
    }
    arr = arr.map(item => {
        return JSON.parse(item)
    })
    return arr
}
const query = (_Modal, _query = {}) => {

    return new Promise((resolve, reject) => {
        let pageSize = (_query.pageSize && _query.pageSize - 0) || 10;
        let page = (_query.page && _query.page - 0) || 1;
        let by = _query.by && JSON.parse(_query.by) || {};
        let filters = _query.filters && JSON.parse(_query.filters) || {}
        let populate = _query['populate[]'] && arrJSON(_query['populate[]']) || []



        // 将正则字符串转为正则表达式

        // for (let i in by) {
        //     by[i] = eval(by[i])
        // }
        filters.password = 0
        _Modal.find(by, filters, {
            skip: (page - 1) * pageSize,
            limit: pageSize,
            sort: _query.sort && JSON.parse(_query.sort),
        }, async(err, res) => {
            if (err) {
                reject(err)
            }
            // 获取数据总数 countDocuments(by)通过查询条件获取总数
            const count = await _Modal.countDocuments(by)
            resolve({ data: res, count })
        }).populate(populate)


    });
};

const save = (_Modal, _query) => {
    _query.createTime = getDate('yyyy-mm-dd hh:mm:ss')
    const _model = new _Modal(_query)
    return new Promise((resolve, reject) => {
        _model.save((err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};

const update = (_model, _query, newData) => {
    return new Promise((resolve, reject) => {
        _model.update(_query, newData, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};

const updateOne = (_model, _query, newData) => {
    return new Promise((resolve, reject) => {
        _model.updateOne(_query, newData, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};

const deleteMany = (_model, _data) => {
    return new Promise((resolve, reject) => {
        _model.deleteMany(_data, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};

const deleteOne = (_model, _data) => {
    return new Promise((resolve, reject) => {
        _model.deleteOne(_data, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};

module.exports = {
    query,
    queryOne,
    save,
    update,
    updateOne,
    deleteOne,
    deleteMany
};