const mongoose = require('mongoose');
const History = mongoose.model('History')
module.exports = {
    all: async (req, res) => {
        try {
            const historys = await History.find();
            res.json({historys: historys});
        }
        catch (err) {
            res.json(err);
        }
    },
    getOneById: (req, res) => {
        History.findById({ _id : req.params.id })
            .then((data) => {
                res.json({history: data})
            })
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        const history = new History(req.body);
        history.save()
            .then((data) => {
                res.json({newHistory: data});
            })
            .catch(err => res.json(err));
    },
    update: (req, res) => {
        History.updateOne({ _id : req.params.id }, req.body)
            .then((data) => {
                res.json({updatedHistory: data});
            })
            .catch(err => res.json(err));
    },
    delete: (req, res) => {
        History.findOneAndDelete({ _id : req.params.id })
            .then((data) => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    },
}
