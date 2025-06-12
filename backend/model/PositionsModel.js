const { model } = require("mongoose");

const { PositionModel } = require("../schemas/PositionsModel");

const PositionModel = new model("position", PositionModel);

model.exports = { PositionModel };