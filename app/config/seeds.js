var mongoose = require('./database');

var Print = require('../models/print');

var prints = [
  { // 0
    title: "Amháin",
    category: "people",
    size: "16x20",
    price: "$100",
    imageURL: String
  },
  { // 1
    title: "Ingrid",
    category: "people",
    size: "16x20",
    price: "$20",
    imageURL: String
  },
  { // 2
    title: "Capone",
    category: "people",
    size: "16x20",
    price: "$30",
    imageURL: String
  },
  { // 3
    title: "Tréighte",
    category: "people",
    size: "16x20",
    price: "$30",
    imageUrl: String
  },
  { // 4
    title: "Siray",
    category: "people",
    size: "16x20",
    price: "$25",
    imageURL: String
  },
  { // 5
    title: "Íonachta",
    category: "people",
    size: "16x20",
    price: "$50",
    imageURL: String
  },
  { // 6
    title: "Bill",
    category: "people",
    size: "16x20",
    price: "$50",
    imageURL: String
  },
  { // 7
    title: "Caoilainn",
    category: "people",
    size: "16x20",
    price: "$35",
    imageURL: String
  },
  { // 8
    title: "Brigid",
    category: "people",
    size: "8x20",
    price: "$30",
    imageURL: String
  },
  { // 9
    title: "Kelly & Andy",
    category: "people",
    size: "16x20",
    price: "$25",
    imageURL: String
  },
  { // 10
    title: "Moirin",
    category: "people",
    size: "16x20",
    price: "$25",
    imageURL: String
  },
  { // 11
    title: "Follow the Slash Rabbit",
    category: "people",
    size: "16x20",
    price: "$35",
    imageURL: String
  },
  { // 12
    title: "Maebh",
    category: "people",
    size: "16x20",
    price: "$100",
    imageURL: String
  },
  { // 13
    title: "Caillte",
    category: "people",
    size: "16x20",
    price: "$50",
    imageURL: String
  },
  { // 14
    title: "Kat",
    category: "people",
    size: "16x20",
    price: "$50",
    imageURL: String
  },
  { // 15
    title: "Walter",
    category: "people",
    size: "12x12",
    price: "$25",
    imageURL: String
  },
  { // 16
    title: "Boys and Their Toys",
    category: "people",
    size: "16x20",
    price: "$35",
    imageURL: String
  },
  { // 17
    title: "Baby Angel 1",
    category: "people",
    size: "16x20",
    price: "$35",
    imageURL: String
  },
  { // 18
    title: "Baby Angel 2",
    category: "people",
    size: "16x20",
    price: "$35",
    imageURL: String
  },
  { // 19
    title: "Twins",
    category: "people",
    size: "16x20",
    price: "$35",
    imageURL: String
  },
  { // 20
    title: "Jesse Breaks",
    category: "people",
    size: "12x12",
    price: "$25",
    imageURL: String
  },
  { // 21
    title: "How",
    category: "people",
    size: "16x20",
    price: "$25",
    imageURL: String
  },
  { // 22
    title: "Shil",
    category: "people",
    size: "16x20",
    price: "$50",
    imageURL: String
  },
  { // 23
    title: "Kurt",
    category: "people",
    size: "16x20",
    price: "$50",
    imageURL: String
  },
  { // 24
    title: "Fiosracht",
    category: "pets",
    size: "16x20",
    price: "$35",
    imageURL: String
  },
  { // 25
    title: "Billy-Jack",
    category: "pets",
    size: "11x17",
    price: "$20",
    imageURL: String
  },
  { // 26
    title: "Bear n' Taz",
    category: "pets",
    size: "16x20",
    price: "$50",
    imageURL: String
  },
  { // 27
    title: "David & Goliath",
    category: "pets",
    size: "16x20",
    price: "$25",
    imageURL: String
  },
  { // 28
    title: "Bridge Over Whispering Haze",
    category: "landscape",
    size: "16x20",
    price: "$35",
    imageURL: String
  },
  { // 29
    title: "Stop Light",
    category: "landscape",
    size: "12x16",
    price: "$25",
    imageURL: String
  },
  { // 30
    title: "Shuthain",
    category: "objects",
    size: "16x20",
    price: "$25",
    imageURL: String
  },
  { // 31
    title: "Follow Me iLife",
    category: "objects",
    size: "11x17",
    price: "$20",
    imageURL: String
  },
];
