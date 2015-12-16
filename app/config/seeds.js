var mongoose = require('./database');

var Print = require('../models/print');

var prints = [
  { // 0
    title: "Amháin",
    category: "people",
    size: "16x20",
    price: "$100",
    imageURL: "https://i.imgur.com/dtzkV88.jpg"
  },
  { // 1
    title: "Ingrid",
    category: "people",
    size: "16x20",
    price: "$20",
    imageURL: "https://i.imgur.com/4v184lp.jpg"
  },
  { // 2
    title: "Capone",
    category: "people",
    size: "16x20",
    price: "$30",
    imageURL: "https://i.imgur.com/RQk2n6E.jpg"
  },
  { // 3
    title: "Tréighte",
    category: "people",
    size: "16x20",
    price: "$30",
    imageUrl: "https://i.imgur.com/xO8DLbJ.jpg"
  },
  { // 4
    title: "Siray",
    category: "people",
    size: "16x20",
    price: "$25",
    imageURL: "https://i.imgur.com/yDwkh40.jpg"
  },
  { // 5
    title: "Íonachta",
    category: "people",
    size: "16x20",
    price: "$50",
    imageURL: "https://i.imgur.com/Sg8lWIe.jpg"
  },
  { // 6
    title: "Bill",
    category: "people",
    size: "16x20",
    price: "$50",
    imageURL: "https://i.imgur.com/txLihir.jpg"
  },
  { // 7
    title: "Caoilainn",
    category: "people",
    size: "16x20",
    price: "$35",
    imageURL: "https://i.imgur.com/mxMEGhn.jpg"
  },
  { // 8
    title: "Brigid",
    category: "people",
    size: "8x20",
    price: "$30",
    imageURL: "https://i.imgur.com/fmUGdhp.jpg"
  },
  { // 9
    title: "Kelly & Andy",
    category: "people",
    size: "16x20",
    price: "$25",
    imageURL: "https://i.imgur.com/QdSL9dx.jpg"
  },
  { // 10
    title: "Moirin",
    category: "people",
    size: "16x20",
    price: "$25",
    imageURL: "https://i.imgur.com/dA16XDP.jpg"
  },
  { // 11
    title: "Follow the Slash Rabbit",
    category: "people",
    size: "16x20",
    price: "$35",
    imageURL: "https://i.imgur.com/7g4CLms.jpg"
  },
  { // 12
    title: "Maebh",
    category: "people",
    size: "16x20",
    price: "$100",
    imageURL: "https://i.imgur.com/1w1LPgO.jpg"
  },
  { // 13
    title: "Caillte",
    category: "people",
    size: "16x20",
    price: "$50",
    imageURL: "https://i.imgur.com/wqe7SDD.jpg"
  },
  { // 14
    title: "Kat",
    category: "people",
    size: "16x20",
    price: "$50",
    imageURL: "https://i.imgur.com/fAwHwWe.jpg"
  },
  { // 15
    title: "Walter",
    category: "people",
    size: "12x12",
    price: "$25",
    imageURL: "https://i.imgur.com/ktj3lpE.jpg"
  },
  { // 16
    title: "Boys and Their Toys",
    category: "people",
    size: "16x20",
    price: "$35",
    imageURL: "https://i.imgur.com/RDhCMZD.jpg"
  },
  { // 17
    title: "Baby Angel 1",
    category: "people",
    size: "16x20",
    price: "$35",
    imageURL: "https://i.imgur.com/DDLH2E6.jpg"
  },
  { // 18
    title: "Baby Angel 2",
    category: "people",
    size: "16x20",
    price: "$35",
    imageURL: "https://i.imgur.com/SLeGaYZ.jpg"
  },
  { // 19
    title: "Twins",
    category: "people",
    size: "16x20",
    price: "$35",
    imageURL: "https://i.imgur.com/zqhE59h.jpg"
  },
  { // 20
    title: "Jesse Breaks",
    category: "people",
    size: "12x12",
    price: "$25",
    imageURL: "https://i.imgur.com/sinmMXa.jpg"
  },
  { // 21
    title: "How",
    category: "people",
    size: "16x20",
    price: "$25",
    imageURL: "https://i.imgur.com/yNSIhqo.jpg"
  },
  { // 22
    title: "Shil",
    category: "people",
    size: "16x20",
    price: "$50",
    imageURL: "https://i.imgur.com/DEzjtwJ.jpg"
  },
  { // 23
    title: "Kurt",
    category: "people",
    size: "16x20",
    price: "$50",
    imageURL: "https://i.imgur.com/DE0blaL.jpg"
  },
  { // 24
    title: "Fiosracht",
    category: "pets",
    size: "16x20",
    price: "$35",
    imageURL: "https://i.imgur.com/RxrHd1Y.jpg"
  },
  { // 25
    title: "Billy-Jack",
    category: "pets",
    size: "11x17",
    price: "$20",
    imageURL: "https://i.imgur.com/wCLnzdi.jpg"
  },
  { // 26
    title: "Bear n' Taz",
    category: "pets",
    size: "16x20",
    price: "$50",
    imageURL: "https://i.imgur.com/87jRlP2.jpg"
  },
  { // 27
    title: "David & Goliath",
    category: "pets",
    size: "16x20",
    price: "$25",
    imageURL: "https://i.imgur.com/Jye3qdr.jpg"
  },
  { // 28
    title: "Bridge Over Whispering Haze",
    category: "landscape",
    size: "16x20",
    price: "$35",
    imageURL: "https://i.imgur.com/eskBX5y.jpg"
  },
  { // 29
    title: "Stop Light",
    category: "landscape",
    size: "12x16",
    price: "$25",
    imageURL: "https://i.imgur.com/FOlkPfR.jpg"
  },
  { // 30
    title: "Shuthain",
    category: "objects",
    size: "16x20",
    price: "$25",
    imageURL: "https://i.imgur.com/rggn079.jpg"
  },
  { // 31
    title: "Follow Me iLife",
    category: "objects",
    size: "11x17",
    price: "$20",
    imageURL: "https://i.imgur.com/DGzDCvh.jpg"
  },
];
