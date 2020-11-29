const { getDate } = require('./time')
    // sql语句的操作方法,使用时只需引入即可
const queryOne = (_Modal, _query = {}) => {
    return new Promise((resolve, reject) => {
        _Modal.findOne(_query, (err, res) => {
            if (err) {
                reject(err)
            }
            resolve(res)
        });
    });
};
const query = (_Modal, _query) => {
    return new Promise((resolve, reject) => {
        let pageSize = _query.pageSize - 0 || 10;
        let page = _query.page - 0 || 1;
        let by = _query.by && JSON.parse(_query.by) || {};
        // 将正则字符串转为正则表达式
        for (let i in by) {
            by[i] = eval(by[i])
        }
        _Modal.find(by, { password: 0 }, {
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
        })


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

const update = (_model, oldData, newData) => {
    return new Promise((resolve, reject) => {
        _model.update(oldData, newData, (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    });
};

const updateOne = (_model, oldData, newData) => {
    return new Promise((resolve, reject) => {
        _model.updateOne(oldData, newData, (err, data) => {
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