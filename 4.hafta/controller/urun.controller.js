const Bardak = require("../models/bardak"); //modelde hangi adla export ettiysek o adla çağıracağız!!!

exports.bardakSave = async (req, res) => {
  try {
    const { adi, fiyat, indirimli } = req.body;

    let bardak = new Bardak();
    bardak.adi = adi;
    bardak.fiyat = fiyat;
    bardak.indirimli = indirimli;

    await bardak.save();

    res.status(201).send();
  } catch (e) {
    res.status(406).send();
  }
};

exports.bardakGet = async (req, res) => {
  try {
    let bardak = await Bardak.findOne({ _id: req.params.id });
    res.status(200).send(bardak);
  } catch (error) {
    res.status(404).send();
  }
};

exports.bardakGetQuery = async (req, res) => {
    let query=req.query

    try {
      let bardak = await Bardak.findOne(query);
      res.status(200).send(bardak);
    } catch (error) {
      res.status(404).send();
    }
  };

exports.bardakGetAll = async (req, res) => {
  try {
    let bardak = await Bardak.find().exec();
    res.status(200).send(bardak);
  } catch (error) {
    res.status(404).send();
  }
};

exports.bardakUpdate = async (req, res) => {
    const { adi, fiyat, indirimli } = req.body;
  try {
    await Bardak.findOneAndUpdate({ _id: req.params.id },
      {
        $set: {
          adi,
          fiyat,
          indirimli,
        },
      },{ upsert: true } //upsert:belge mevcut değilse yeni bir belge oluşturur
    );

    res.status(203).send();
  } catch (error) {
    res.status(404).send();
  }
};

exports.bardakDelete = async (req, res) => {
  try {
    await Bardak.findOneAndDelete({ _id: req.params.id });
    res.status(204).send();
  } catch (error) {
    res.status(404).send();
  }
};
