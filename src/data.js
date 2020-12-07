const employees = [
  {
    "id": 1,
    "name": {
      "title": "Ms",
      "first": "Erica",
      "last": "Hanson"
    },
    "email": "erica.hanson@example.com",
    "dob": {
      "monthNum": 1,
      "month": "January",
      "day": 28
    },
    "phone": "(080)-733-3122",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/64.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
    }
  },
  {
    "id": 2,
    "name": {
      "title": "Mr",
      "first": "Alfredo",
      "last": "Sullivan"
    },
    "email": "alfredo.sullivan@example.com",
    "dob": {
      "monthNum": 11,
      "month": "November",
      "day": 17
    },
    "phone": "(289)-250-8539",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/90.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/90.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/90.jpg"
    }
  },
  {
    "id": 3,
    "name": {
      "title": "Mrs",
      "first": "Marian",
      "last": "Johnston"
    },
    "email": "marian.johnston@example.com",
    "dob": {
      "monthNum": 4,
      "month": "April",
      "day": 9
    },
    "phone": "(782)-164-4185",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/23.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/23.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/23.jpg"
    }
  },
  {
    "id": 4,
    "name": {
      "title": "Ms",
      "first": "Caroline",
      "last": "Schmidt"
    },
    "email": "caroline.schmidt@example.com",
    "dob": {
      "monthNum": 4,
      "month": "April",
      "day": 7
    },
    "phone": "(448)-880-3750",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/69.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/69.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/69.jpg"
    }
  },
  {
    "id": 5,
    "name": {
      "title": "Mr",
      "first": "Mathew",
      "last": "Mitchell"
    },
    "email": "mathew.mitchell@example.com",
    "dob": {
      "monthNum": 11,
      "month": "November",
      "day": 8
    },
    "phone": "(908)-006-2024",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/84.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/84.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/84.jpg"
    }
  },
  {
    "id": 6,
    "name": {
      "title": "Mrs",
      "first": "Vivan",
      "last": "Rhodes"
    },
    "email": "vivan.rhodes@example.com",
    "dob": {
      "monthNum": 1,
      "month": "January",
      "day": 13
    },
    "phone": "(050)-392-1284",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/51.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/51.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/51.jpg"
    }
  },
  {
    "id": 7,
    "name": {
      "title": "Ms",
      "first": "Alma",
      "last": "Austin"
    },
    "email": "alma.austin@example.com",
    "dob": {
      "monthNum": 12,
      "month": "December",
      "day": 23
    },
    "phone": "(644)-595-8253",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/42.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/42.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/42.jpg"
    }
  },
  {
    "id": 8,
    "name": {
      "title": "Mr",
      "first": "Roger",
      "last": "Fisher"
    },
    "email": "roger.fisher@example.com",
    "dob": {
      "monthNum": 3,
      "month": "March",
      "day": 11
    },
    "phone": "(152)-199-0095",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/48.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/48.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/48.jpg"
    }
  },
  {
    "id": 9,
    "name": {
      "title": "Mr",
      "first": "Brad",
      "last": "Baker"
    },
    "email": "brad.baker@example.com",
    "dob": {
      "monthNum": 12,
      "month": "December",
      "day": 5
    },
    "phone": "(228)-352-5519",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/88.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/88.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/88.jpg"
    }
  },
  {
    "id": 10,
    "name": {
      "title": "Mr",
      "first": "Caleb",
      "last": "Howell"
    },
    "email": "caleb.howell@example.com",
    "dob": {
      "monthNum": 1,
      "month": "January",
      "day": 19
    },
    "phone": "(284)-906-7951",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/68.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/68.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/68.jpg"
    }
  },
  {
    "id": 11,
    "name": {
      "title": "Mr",
      "first": "Cory",
      "last": "Ferguson"
    },
    "email": "cory.ferguson@example.com",
    "dob": {
      "monthNum": 8,
      "month": "August",
      "day": 23
    },
    "phone": "(504)-301-2654",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/42.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/42.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/42.jpg"
    }
  },
  {
    "id": 12,
    "name": {
      "title": "Ms",
      "first": "Brianna",
      "last": "Hill"
    },
    "email": "brianna.hill@example.com",
    "dob": {
      "monthNum": 3,
      "month": "March",
      "day": 17
    },
    "phone": "(537)-245-7013",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/57.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/57.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/57.jpg"
    }
  },
  {
    "id": 13,
    "name": {
      "title": "Mrs",
      "first": "Pauline",
      "last": "Jones"
    },
    "email": "pauline.jones@example.com",
    "dob": {
      "monthNum": 6,
      "month": "June",
      "day": 15
    },
    "phone": "(850)-949-5455",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/77.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/77.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/77.jpg"
    }
  },
  {
    "id": 14,
    "name": {
      "title": "Mr",
      "first": "Jeffery",
      "last": "Gutierrez"
    },
    "email": "jeffery.gutierrez@example.com",
    "dob": {
      "monthNum": 3,
      "month": "March",
      "day": 12
    },
    "phone": "(435)-154-1353",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/31.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/31.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/31.jpg"
    }
  },
  {
    "id": 15,
    "name": {
      "title": "Ms",
      "first": "Marjorie",
      "last": "Lee"
    },
    "email": "marjorie.lee@example.com",
    "dob": {
      "monthNum": 4,
      "month": "April",
      "day": 12
    },
    "phone": "(148)-902-9004",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/87.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/87.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/87.jpg"
    }
  },
  {
    "id": 16,
    "name": {
      "title": "Mrs",
      "first": "Lillian",
      "last": "Knight"
    },
    "email": "lillian.knight@example.com",
    "dob": {
      "monthNum": 10,
      "month": "October",
      "day": 20
    },
    "phone": "(359)-395-0233",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/96.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/96.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/96.jpg"
    }
  },
  {
    "id": 17,
    "name": {
      "title": "Mr",
      "first": "Mathew",
      "last": "Fernandez"
    },
    "email": "mathew.fernandez@example.com",
    "dob": {
      "monthNum": 2,
      "month": "February",
      "day": 19
    },
    "phone": "(224)-974-5963",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/46.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/46.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/46.jpg"
    }
  },
  {
    "id": 18,
    "name": {
      "title": "Mr",
      "first": "Luis",
      "last": "Boyd"
    },
    "email": "luis.boyd@example.com",
    "dob": {
      "monthNum": 1,
      "month": "January",
      "day": 31
    },
    "phone": "(047)-169-2239",
    "picture": {
      "large": "https://randomuser.me/api/portraits/men/33.jpg",
      "medium": "https://randomuser.me/api/portraits/med/men/33.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/33.jpg"
    }
  },
  {
    "id": 19,
    "name": {
      "title": "Mrs",
      "first": "Brandy",
      "last": "Kuhn"
    },
    "email": "brandy.kuhn@example.com",
    "dob": {
      "monthNum": 3,
      "month": "March",
      "day": 14
    },
    "phone": "(355)-487-8666",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/41.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/41.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/41.jpg"
    }
  },
  {
    "id": 20,
    "name": {
      "title": "Ms",
      "first": "Wanda",
      "last": "Cook"
    },
    "email": "wanda.cook@example.com",
    "dob": {
      "monthNum": 4,
      "month": "April",
      "day": 13
    },
    "phone": "(779)-199-6456",
    "picture": {
      "large": "https://randomuser.me/api/portraits/women/79.jpg",
      "medium": "https://randomuser.me/api/portraits/med/women/79.jpg",
      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/79.jpg"
    }
  }
];

export default employees;