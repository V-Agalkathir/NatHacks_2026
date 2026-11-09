// Made by make_snapshot.py from the engine's real output. Don't edit by hand.
window.PURRCAST_SNAPSHOT = {
 "made": "2026-11-09T06:15:04Z",
 "source": "sensors/output/daily.csv",
 "cats": [
  {
   "cat_id": "mochi",
   "name": "Mochi",
   "level": "good",
   "sex": "male",
   "age": 4,
   "scenario": "healthy"
  },
  {
   "cat_id": "luna",
   "name": "Luna",
   "level": "blip",
   "sex": "female",
   "age": 7,
   "scenario": "blip"
  },
  {
   "cat_id": "lena",
   "name": "Lena",
   "level": "vet",
   "sex": "female",
   "age": 5,
   "scenario": "slow_drinking"
  },
  {
   "cat_id": "oscar",
   "name": "Oscar",
   "level": "urgent",
   "sex": "male",
   "age": 9,
   "scenario": "litter_emergency"
  },
  {
   "cat_id": "bella",
   "name": "Bella",
   "level": "vet",
   "sex": "female",
   "age": 11,
   "scenario": "diabetes"
  },
  {
   "cat_id": "milo",
   "name": "Milo",
   "level": "vet",
   "sex": "male",
   "age": 13,
   "scenario": "hyperthyroid"
  },
  {
   "cat_id": "coco",
   "name": "Coco",
   "level": "vet",
   "sex": "female",
   "age": 8,
   "scenario": "dental"
  },
  {
   "cat_id": "nala",
   "name": "Nala",
   "level": "urgent",
   "sex": "female",
   "age": 6,
   "scenario": "not_eating"
  },
  {
   "cat_id": "pip",
   "name": "Pip",
   "level": "good",
   "sex": "male",
   "age": 0.5,
   "scenario": "growing"
  },
  {
   "cat_id": "ziggy",
   "name": "Ziggy",
   "level": "vet",
   "sex": "female",
   "age": 14,
   "scenario": "sick_from_start"
  },
  {
   "cat_id": "simba",
   "name": "Simba",
   "level": "good",
   "sex": "male",
   "age": 4,
   "scenario": "early_blockage"
  }
 ],
 "status": {
  "mochi": {
   "kitten": {
    "cat_id": "mochi",
    "name": "Mochi",
    "updated": "2026-11-09T06:15:04Z",
    "level": "good",
    "age_group": "kitten",
    "message": "Mochi's patterns have been consistent over the last 24 hours. If you notice any other symptoms, contact your vet.",
    "tiles": [
     {
      "key": "water",
      "label": "Water steady",
      "ok": true
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Eating, drinking, litter use, weight and rest are all consistent with his usual patterns.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet.",
     "age_note": "Mochi is a kitten, so eating and drinking more while growing is expected. Purrcast compares food and water per kg of body weight and doesn't flag weight gain."
    }
   },
   "adult": {
    "cat_id": "mochi",
    "name": "Mochi",
    "updated": "2026-11-09T06:15:04Z",
    "level": "good",
    "age_group": "adult",
    "message": "Mochi's patterns have been consistent over the last 24 hours. If you notice any other symptoms, contact your vet.",
    "tiles": [
     {
      "key": "water",
      "label": "Water steady",
      "ok": true
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Eating, drinking, litter use, weight and rest are all consistent with his usual patterns.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet.",
     "age_note": ""
    }
   },
   "senior": {
    "cat_id": "mochi",
    "name": "Mochi",
    "updated": "2026-11-09T06:15:04Z",
    "level": "good",
    "age_group": "senior",
    "message": "Mochi's patterns have been consistent over the last 24 hours. If you notice any other symptoms, contact your vet.",
    "tiles": [
     {
      "key": "water",
      "label": "Water steady",
      "ok": true
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Eating, drinking, litter use, weight and rest are all consistent with his usual patterns.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet.",
     "age_note": "Mochi is a senior cat, so Purrcast flags gradual changes a little earlier."
    }
   }
  },
  "luna": {
   "kitten": {
    "cat_id": "luna",
    "name": "Luna",
    "updated": "2026-11-09T06:15:04Z",
    "level": "blip",
    "age_group": "kitten",
    "message": "Luna's patterns have changed: she drank about 24% more than usual yesterday.",
    "tiles": [
     {
      "key": "water",
      "label": "Water up",
      "ok": false
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Water 262 ml yesterday vs her usual 212 ml. Everything else is consistent with usual.",
     "maybe_nothing": "Things to check: Is her water bowl in a warm spot? Has her food changed (dry vs wet)? Has she been more active? We'll keep watching over the next 48 hours.",
     "call_if": "If you have any concerns, contact your vet.",
     "age_note": "Luna is a kitten, so eating and drinking more while growing is expected. Purrcast compares food and water per kg of body weight and doesn't flag weight gain."
    }
   },
   "adult": {
    "cat_id": "luna",
    "name": "Luna",
    "updated": "2026-11-09T06:15:04Z",
    "level": "blip",
    "age_group": "adult",
    "message": "Luna's patterns have changed: she drank about 24% more than usual yesterday.",
    "tiles": [
     {
      "key": "water",
      "label": "Water up",
      "ok": false
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Water 263 ml yesterday vs her usual 212 ml. Everything else is consistent with usual.",
     "maybe_nothing": "Things to check: Is her water bowl in a warm spot? Has her food changed (dry vs wet)? Has she been more active? We'll keep watching over the next 48 hours.",
     "call_if": "If you have any concerns, contact your vet.",
     "age_note": ""
    }
   },
   "senior": {
    "cat_id": "luna",
    "name": "Luna",
    "updated": "2026-11-09T06:15:04Z",
    "level": "blip",
    "age_group": "senior",
    "message": "Luna's patterns have changed: she drank about 24% more than usual yesterday.",
    "tiles": [
     {
      "key": "water",
      "label": "Water up",
      "ok": false
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Water 263 ml yesterday vs her usual 212 ml. Everything else is consistent with usual.",
     "maybe_nothing": "Things to check: Is her water bowl in a warm spot? Has her food changed (dry vs wet)? Has she been more active? We'll keep watching over the next 48 hours.",
     "call_if": "If you have any concerns, contact your vet.",
     "age_note": "Luna is a senior cat, so Purrcast flags gradual changes a little earlier."
    }
   }
  },
  "lena": {
   "kitten": {
    "cat_id": "lena",
    "name": "Lena",
    "updated": "2026-11-09T06:15:04Z",
    "level": "vet",
    "age_group": "kitten",
    "message": "Lena's patterns have changed: she has been drinking more and visiting the litter box more often.",
    "tiles": [
     {
      "key": "water",
      "label": "Water up",
      "ok": false
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter more visits",
      "ok": false
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Drinking more (453 ml yesterday vs her usual 238 ml) and visiting the litter box more often at the same time. Litter visits averaged 6.6 a day this week vs her usual 4.1. Visiting more often is worth mentioning to your vet.",
     "maybe_nothing": "Things to check: Is her water bowl in a warm spot? Has her food changed (dry vs wet)? Has she been more active?",
     "call_if": "This change has lasted long enough that it's worth mentioning to your vet. Contact them sooner if she stops eating, hides, vomits, or strains in the litter box.",
     "age_note": "Lena is a kitten, so eating and drinking more while growing is expected. Purrcast compares food and water per kg of body weight and doesn't flag weight gain."
    }
   },
   "adult": {
    "cat_id": "lena",
    "name": "Lena",
    "updated": "2026-11-09T06:15:04Z",
    "level": "vet",
    "age_group": "adult",
    "message": "Lena's patterns have changed: she has been drinking more and visiting the litter box more often.",
    "tiles": [
     {
      "key": "water",
      "label": "Water up",
      "ok": false
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter more visits",
      "ok": false
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Drinking more (442 ml yesterday vs her usual 238 ml) and visiting the litter box more often at the same time. Litter visits averaged 6.6 a day this week vs her usual 4.1. Visiting more often is worth mentioning to your vet.",
     "maybe_nothing": "Things to check: Is her water bowl in a warm spot? Has her food changed (dry vs wet)? Has she been more active?",
     "call_if": "This change has lasted long enough that it's worth mentioning to your vet. Contact them sooner if she stops eating, hides, vomits, or strains in the litter box.",
     "age_note": ""
    }
   },
   "senior": {
    "cat_id": "lena",
    "name": "Lena",
    "updated": "2026-11-09T06:15:04Z",
    "level": "vet",
    "age_group": "senior",
    "message": "Lena's patterns have changed: she has been drinking more and visiting the litter box more often.",
    "tiles": [
     {
      "key": "water",
      "label": "Water up",
      "ok": false
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter more visits",
      "ok": false
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Drinking more (442 ml yesterday vs her usual 238 ml) and visiting the litter box more often at the same time. Litter visits averaged 6.6 a day this week vs her usual 4.1. Visiting more often is worth mentioning to your vet.",
     "maybe_nothing": "Things to check: Is her water bowl in a warm spot? Has her food changed (dry vs wet)? Has she been more active?",
     "call_if": "This change has lasted long enough that it's worth mentioning to your vet. Contact them sooner if she stops eating, hides, vomits, or strains in the litter box.",
     "age_note": "Lena is a senior cat, so Purrcast flags gradual changes a little earlier."
    }
   }
  },
  "oscar": {
   "kitten": {
    "cat_id": "oscar",
    "name": "Oscar",
    "updated": "2026-11-09T06:15:04Z",
    "level": "urgent",
    "age_group": "kitten",
    "message": "Oscar has visited the litter box 20 times in the last day, far more often than usual (about 4). This pattern can need urgent care. Contact your vet or an emergency clinic now.",
    "tiles": [
     {
      "key": "water",
      "label": "Water steady",
      "ok": true
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter many visits",
      "ok": false
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "20 litter visits in the last day (usually about 4), most of them very short.",
     "maybe_nothing": "",
     "call_if": "Contact your vet or an emergency clinic now. Don't wait to see if it passes.",
     "age_note": "Oscar is a kitten, so eating and drinking more while growing is expected. Purrcast compares food and water per kg of body weight and doesn't flag weight gain."
    }
   },
   "adult": {
    "cat_id": "oscar",
    "name": "Oscar",
    "updated": "2026-11-09T06:15:04Z",
    "level": "urgent",
    "age_group": "adult",
    "message": "Oscar has visited the litter box 20 times in the last day, far more often than usual (about 4). This pattern can need urgent care. Contact your vet or an emergency clinic now.",
    "tiles": [
     {
      "key": "water",
      "label": "Water steady",
      "ok": true
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter many visits",
      "ok": false
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "20 litter visits in the last day (usually about 4), most of them very short.",
     "maybe_nothing": "",
     "call_if": "Contact your vet or an emergency clinic now. Don't wait to see if it passes.",
     "age_note": ""
    }
   },
   "senior": {
    "cat_id": "oscar",
    "name": "Oscar",
    "updated": "2026-11-09T06:15:04Z",
    "level": "urgent",
    "age_group": "senior",
    "message": "Oscar has visited the litter box 20 times in the last day, far more often than usual (about 4). This pattern can need urgent care. Contact your vet or an emergency clinic now.",
    "tiles": [
     {
      "key": "water",
      "label": "Water steady",
      "ok": true
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter many visits",
      "ok": false
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "20 litter visits in the last day (usually about 4), most of them very short.",
     "maybe_nothing": "",
     "call_if": "Contact your vet or an emergency clinic now. Don't wait to see if it passes.",
     "age_note": "Oscar is a senior cat, so Purrcast flags gradual changes a little earlier."
    }
   }
  },
  "bella": {
   "kitten": {
    "cat_id": "bella",
    "name": "Bella",
    "updated": "2026-11-09T06:15:04Z",
    "level": "vet",
    "age_group": "kitten",
    "message": "Bella's patterns have changed: she has been drinking more and visiting the litter box more often.",
    "tiles": [
     {
      "key": "water",
      "label": "Water up",
      "ok": false
     },
     {
      "key": "food",
      "label": "Food up",
      "ok": false
     },
     {
      "key": "litter",
      "label": "Litter more visits",
      "ok": false
     },
     {
      "key": "weight",
      "label": "Weight down",
      "ok": false
     }
    ],
    "details": {
     "changed": "Drinking more (488 ml yesterday vs her usual 222 ml) and visiting the litter box more often at the same time. Eating more (126 g yesterday vs her usual 72 g) while slowly losing weight. Weight 4.11 kg yesterday vs her usual 4.40 kg. Litter visits averaged 5.1 a day this week vs her usual 3.0. Visiting more often is worth mentioning to your vet.",
     "maybe_nothing": "Things to check: Is her water bowl in a warm spot? Has her food changed (dry vs wet)? Has she been more active?",
     "call_if": "This change has lasted long enough that it's worth mentioning to your vet. Contact them sooner if she stops eating, hides, vomits, or strains in the litter box.",
     "age_note": "Bella is a kitten, so eating and drinking more while growing is expected. Purrcast compares food and water per kg of body weight and doesn't flag weight gain."
    }
   },
   "adult": {
    "cat_id": "bella",
    "name": "Bella",
    "updated": "2026-11-09T06:15:04Z",
    "level": "vet",
    "age_group": "adult",
    "message": "Bella's patterns have changed: she has been drinking more and visiting the litter box more often.",
    "tiles": [
     {
      "key": "water",
      "label": "Water up",
      "ok": false
     },
     {
      "key": "food",
      "label": "Food up",
      "ok": false
     },
     {
      "key": "litter",
      "label": "Litter more visits",
      "ok": false
     },
     {
      "key": "weight",
      "label": "Weight down",
      "ok": false
     }
    ],
    "details": {
     "changed": "Drinking more (456 ml yesterday vs her usual 222 ml) and visiting the litter box more often at the same time. Eating more (118 g yesterday vs her usual 72 g) while slowly losing weight. Weight 4.11 kg yesterday vs her usual 4.40 kg. Litter visits averaged 5.1 a day this week vs her usual 3.0. Visiting more often is worth mentioning to your vet.",
     "maybe_nothing": "Things to check: Is her water bowl in a warm spot? Has her food changed (dry vs wet)? Has she been more active?",
     "call_if": "This change has lasted long enough that it's worth mentioning to your vet. Contact them sooner if she stops eating, hides, vomits, or strains in the litter box.",
     "age_note": ""
    }
   },
   "senior": {
    "cat_id": "bella",
    "name": "Bella",
    "updated": "2026-11-09T06:15:04Z",
    "level": "vet",
    "age_group": "senior",
    "message": "Bella's patterns have changed: she has been drinking more and visiting the litter box more often.",
    "tiles": [
     {
      "key": "water",
      "label": "Water up",
      "ok": false
     },
     {
      "key": "food",
      "label": "Food up",
      "ok": false
     },
     {
      "key": "litter",
      "label": "Litter more visits",
      "ok": false
     },
     {
      "key": "weight",
      "label": "Weight down",
      "ok": false
     }
    ],
    "details": {
     "changed": "Drinking more (456 ml yesterday vs her usual 222 ml) and visiting the litter box more often at the same time. Eating more (118 g yesterday vs her usual 72 g) while slowly losing weight. Weight 4.11 kg yesterday vs her usual 4.40 kg. Litter visits averaged 5.1 a day this week vs her usual 3.0. Visiting more often is worth mentioning to your vet.",
     "maybe_nothing": "Things to check: Is her water bowl in a warm spot? Has her food changed (dry vs wet)? Has she been more active?",
     "call_if": "This change has lasted long enough that it's worth mentioning to your vet. Contact them sooner if she stops eating, hides, vomits, or strains in the litter box.",
     "age_note": "Bella is a senior cat, so Purrcast flags gradual changes a little earlier."
    }
   }
  },
  "milo": {
   "kitten": {
    "cat_id": "milo",
    "name": "Milo",
    "updated": "2026-11-09T06:15:04Z",
    "level": "vet",
    "age_group": "kitten",
    "message": "Milo's patterns have changed: he has been eating more but slowly losing weight.",
    "tiles": [
     {
      "key": "water",
      "label": "Water up",
      "ok": false
     },
     {
      "key": "food",
      "label": "Food up",
      "ok": false
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight down",
      "ok": false
     }
    ],
    "details": {
     "changed": "Eating more (112 g yesterday vs his usual 66 g) while slowly losing weight. Weight 3.77 kg yesterday vs his usual 4.01 kg. Water 251 ml yesterday vs his usual 198 ml.",
     "maybe_nothing": "Things to check: Has his food or treat routine changed? Has anything new been stressing him?",
     "call_if": "This change has lasted long enough that it's worth mentioning to your vet. Contact them sooner if he stops eating, hides, vomits, or strains in the litter box.",
     "age_note": "Milo is a kitten, so eating and drinking more while growing is expected. Purrcast compares food and water per kg of body weight and doesn't flag weight gain."
    }
   },
   "adult": {
    "cat_id": "milo",
    "name": "Milo",
    "updated": "2026-11-09T06:15:05Z",
    "level": "vet",
    "age_group": "adult",
    "message": "Milo's patterns have changed: he has been eating more but slowly losing weight.",
    "tiles": [
     {
      "key": "water",
      "label": "Water up",
      "ok": false
     },
     {
      "key": "food",
      "label": "Food up",
      "ok": false
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight down",
      "ok": false
     }
    ],
    "details": {
     "changed": "Eating more (105 g yesterday vs his usual 66 g) while slowly losing weight. Weight 3.77 kg yesterday vs his usual 4.01 kg. Water 236 ml yesterday vs his usual 198 ml.",
     "maybe_nothing": "Things to check: Has his food or treat routine changed? Has anything new been stressing him?",
     "call_if": "This change has lasted long enough that it's worth mentioning to your vet. Contact them sooner if he stops eating, hides, vomits, or strains in the litter box.",
     "age_note": ""
    }
   },
   "senior": {
    "cat_id": "milo",
    "name": "Milo",
    "updated": "2026-11-09T06:15:05Z",
    "level": "vet",
    "age_group": "senior",
    "message": "Milo's patterns have changed: he has been eating more but slowly losing weight.",
    "tiles": [
     {
      "key": "water",
      "label": "Water up",
      "ok": false
     },
     {
      "key": "food",
      "label": "Food up",
      "ok": false
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight down",
      "ok": false
     }
    ],
    "details": {
     "changed": "Eating more (105 g yesterday vs his usual 66 g) while slowly losing weight. Weight 3.77 kg yesterday vs his usual 4.01 kg. Water 236 ml yesterday vs his usual 198 ml.",
     "maybe_nothing": "Things to check: Has his food or treat routine changed? Has anything new been stressing him?",
     "call_if": "This change has lasted long enough that it's worth mentioning to your vet. Contact them sooner if he stops eating, hides, vomits, or strains in the litter box.",
     "age_note": "Milo is a senior cat, so Purrcast flags gradual changes a little earlier."
    }
   }
  },
  "coco": {
   "kitten": {
    "cat_id": "coco",
    "name": "Coco",
    "updated": "2026-11-09T06:15:05Z",
    "level": "vet",
    "age_group": "kitten",
    "message": "Coco's patterns have changed: she has been eating less and slowly losing weight.",
    "tiles": [
     {
      "key": "water",
      "label": "Water steady",
      "ok": true
     },
     {
      "key": "food",
      "label": "Food down",
      "ok": false
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight down",
      "ok": false
     }
    ],
    "details": {
     "changed": "Weight 3.73 kg yesterday vs her usual 3.90 kg. Eating less (40 g yesterday vs her usual 62 g) while slowly losing weight.",
     "maybe_nothing": "Things to check: Has her food or treat routine changed? Has anything new been stressing her?",
     "call_if": "This change has lasted long enough that it's worth mentioning to your vet. Contact them sooner if she stops eating, hides, vomits, or strains in the litter box.",
     "age_note": "Coco is a kitten, so eating and drinking more while growing is expected. Purrcast compares food and water per kg of body weight and doesn't flag weight gain."
    }
   },
   "adult": {
    "cat_id": "coco",
    "name": "Coco",
    "updated": "2026-11-09T06:15:05Z",
    "level": "vet",
    "age_group": "adult",
    "message": "Coco's patterns have changed: she has been eating less and slowly losing weight.",
    "tiles": [
     {
      "key": "water",
      "label": "Water steady",
      "ok": true
     },
     {
      "key": "food",
      "label": "Food down",
      "ok": false
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight down",
      "ok": false
     }
    ],
    "details": {
     "changed": "Weight 3.73 kg yesterday vs her usual 3.90 kg. Eating less (38 g yesterday vs her usual 62 g) while slowly losing weight.",
     "maybe_nothing": "Things to check: Has her food or treat routine changed? Has anything new been stressing her?",
     "call_if": "This change has lasted long enough that it's worth mentioning to your vet. Contact them sooner if she stops eating, hides, vomits, or strains in the litter box.",
     "age_note": ""
    }
   },
   "senior": {
    "cat_id": "coco",
    "name": "Coco",
    "updated": "2026-11-09T06:15:05Z",
    "level": "vet",
    "age_group": "senior",
    "message": "Coco's patterns have changed: she has been eating less and slowly losing weight.",
    "tiles": [
     {
      "key": "water",
      "label": "Water steady",
      "ok": true
     },
     {
      "key": "food",
      "label": "Food down",
      "ok": false
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight down",
      "ok": false
     }
    ],
    "details": {
     "changed": "Weight 3.73 kg yesterday vs her usual 3.90 kg. Eating less (38 g yesterday vs her usual 62 g) while slowly losing weight.",
     "maybe_nothing": "Things to check: Has her food or treat routine changed? Has anything new been stressing her?",
     "call_if": "This change has lasted long enough that it's worth mentioning to your vet. Contact them sooner if she stops eating, hides, vomits, or strains in the litter box.",
     "age_note": "Coco is a senior cat, so Purrcast flags gradual changes a little earlier."
    }
   }
  },
  "nala": {
   "kitten": {
    "cat_id": "nala",
    "name": "Nala",
    "updated": "2026-11-09T06:15:05Z",
    "level": "urgent",
    "age_group": "kitten",
    "message": "Nala has eaten very little for 2 days in a row. This pattern can need urgent care. Contact your vet or an emergency clinic now.",
    "tiles": [
     {
      "key": "water",
      "label": "Water steady",
      "ok": true
     },
     {
      "key": "food",
      "label": "Food down",
      "ok": false
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Ate 11 g in the last day vs her usual 66 g, for 2 days in a row.",
     "maybe_nothing": "",
     "call_if": "Contact your vet or an emergency clinic now. Don't wait to see if it passes.",
     "age_note": "Nala is a kitten, so eating and drinking more while growing is expected. Purrcast compares food and water per kg of body weight and doesn't flag weight gain."
    }
   },
   "adult": {
    "cat_id": "nala",
    "name": "Nala",
    "updated": "2026-11-09T06:15:05Z",
    "level": "urgent",
    "age_group": "adult",
    "message": "Nala has eaten very little for 2 days in a row. This pattern can need urgent care. Contact your vet or an emergency clinic now.",
    "tiles": [
     {
      "key": "water",
      "label": "Water steady",
      "ok": true
     },
     {
      "key": "food",
      "label": "Food down",
      "ok": false
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Ate 11 g in the last day vs her usual 66 g, for 2 days in a row.",
     "maybe_nothing": "",
     "call_if": "Contact your vet or an emergency clinic now. Don't wait to see if it passes.",
     "age_note": ""
    }
   },
   "senior": {
    "cat_id": "nala",
    "name": "Nala",
    "updated": "2026-11-09T06:15:05Z",
    "level": "urgent",
    "age_group": "senior",
    "message": "Nala has eaten very little for 2 days in a row. This pattern can need urgent care. Contact your vet or an emergency clinic now.",
    "tiles": [
     {
      "key": "water",
      "label": "Water steady",
      "ok": true
     },
     {
      "key": "food",
      "label": "Food down",
      "ok": false
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Ate 11 g in the last day vs her usual 66 g, for 2 days in a row.",
     "maybe_nothing": "",
     "call_if": "Contact your vet or an emergency clinic now. Don't wait to see if it passes.",
     "age_note": "Nala is a senior cat, so Purrcast flags gradual changes a little earlier."
    }
   }
  },
  "pip": {
   "kitten": {
    "cat_id": "pip",
    "name": "Pip",
    "updated": "2026-11-09T06:15:05Z",
    "level": "good",
    "age_group": "kitten",
    "message": "Pip's patterns have been consistent over the last 24 hours. If you notice any other symptoms, contact your vet.",
    "tiles": [
     {
      "key": "water",
      "label": "Water steady",
      "ok": true
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Eating, drinking, litter use, weight and rest are all consistent with his usual patterns.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet.",
     "age_note": "Pip is a kitten, so eating and drinking more while growing is expected. Purrcast compares food and water per kg of body weight and doesn't flag weight gain."
    }
   },
   "adult": {
    "cat_id": "pip",
    "name": "Pip",
    "updated": "2026-11-09T06:15:05Z",
    "level": "vet",
    "age_group": "adult",
    "message": "Pip's patterns have changed: he drank about 19% more than usual yesterday, and he ate about 32% more than usual yesterday.",
    "tiles": [
     {
      "key": "water",
      "label": "Water up",
      "ok": false
     },
     {
      "key": "food",
      "label": "Food up",
      "ok": false
     },
     {
      "key": "litter",
      "label": "Litter changed",
      "ok": false
     },
     {
      "key": "weight",
      "label": "Weight up",
      "ok": false
     }
    ],
    "details": {
     "changed": "Water 152 ml yesterday vs his usual 127 ml. Food 76 g yesterday vs his usual 58 g. Weight 2.69 kg yesterday vs his usual 2.08 kg.",
     "maybe_nothing": "Things to check: Is his water bowl in a warm spot? Has his food changed (dry vs wet)? Has he been more active? Has his food or treat routine changed? Has anything new been stressing him?",
     "call_if": "This change has lasted long enough that it's worth mentioning to your vet. Contact them sooner if he stops eating, hides, vomits, or strains in the litter box.",
     "age_note": ""
    }
   },
   "senior": {
    "cat_id": "pip",
    "name": "Pip",
    "updated": "2026-11-09T06:15:05Z",
    "level": "vet",
    "age_group": "senior",
    "message": "Pip's patterns have changed: he drank about 19% more than usual yesterday, and he ate about 32% more than usual yesterday.",
    "tiles": [
     {
      "key": "water",
      "label": "Water up",
      "ok": false
     },
     {
      "key": "food",
      "label": "Food up",
      "ok": false
     },
     {
      "key": "litter",
      "label": "Litter changed",
      "ok": false
     },
     {
      "key": "weight",
      "label": "Weight up",
      "ok": false
     }
    ],
    "details": {
     "changed": "Water 152 ml yesterday vs his usual 127 ml. Food 76 g yesterday vs his usual 58 g. Weight 2.69 kg yesterday vs his usual 2.08 kg.",
     "maybe_nothing": "Things to check: Is his water bowl in a warm spot? Has his food changed (dry vs wet)? Has he been more active? Has his food or treat routine changed? Has anything new been stressing him?",
     "call_if": "This change has lasted long enough that it's worth mentioning to your vet. Contact them sooner if he stops eating, hides, vomits, or strains in the litter box.",
     "age_note": "Pip is a senior cat, so Purrcast flags gradual changes a little earlier."
    }
   }
  },
  "ziggy": {
   "kitten": {
    "cat_id": "ziggy",
    "name": "Ziggy",
    "updated": "2026-11-09T06:15:05Z",
    "level": "good",
    "age_group": "kitten",
    "message": "Ziggy's patterns have been consistent over the last 24 hours. If you notice any other symptoms, contact your vet.",
    "tiles": [
     {
      "key": "water",
      "label": "Water steady",
      "ok": true
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Eating, drinking, litter use, weight and rest are all consistent with her usual patterns.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet.",
     "age_note": "Ziggy is a kitten, so eating and drinking more while growing is expected. Purrcast compares food and water per kg of body weight and doesn't flag weight gain."
    }
   },
   "adult": {
    "cat_id": "ziggy",
    "name": "Ziggy",
    "updated": "2026-11-09T06:15:05Z",
    "level": "vet",
    "age_group": "adult",
    "message": "Ziggy's usual drinking is higher than typical for a cat her size. It's worth mentioning to your vet.",
    "tiles": [
     {
      "key": "water",
      "label": "Water high",
      "ok": false
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Purrcast learned her usual from the first 14 days: about 453 ml of water a day. That's above the typical range for a 3.6 kg cat (under about 360 ml a day), so this may have started before monitoring did.",
     "maybe_nothing": "Things to check: Is her water bowl in a warm spot? Has her food changed (dry vs wet)? Has she been more active?",
     "call_if": "This has been steady since monitoring started, so it won't show up as a change, but it's worth mentioning to your vet. Contact them sooner if she stops eating, hides, vomits, or strains in the litter box.",
     "age_note": ""
    }
   },
   "senior": {
    "cat_id": "ziggy",
    "name": "Ziggy",
    "updated": "2026-11-09T06:15:05Z",
    "level": "vet",
    "age_group": "senior",
    "message": "Ziggy's usual drinking is higher than typical for a cat her size. It's worth mentioning to your vet.",
    "tiles": [
     {
      "key": "water",
      "label": "Water high",
      "ok": false
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Purrcast learned her usual from the first 14 days: about 453 ml of water a day. That's above the typical range for a 3.6 kg cat (under about 360 ml a day), so this may have started before monitoring did.",
     "maybe_nothing": "Things to check: Is her water bowl in a warm spot? Has her food changed (dry vs wet)? Has she been more active?",
     "call_if": "This has been steady since monitoring started, so it won't show up as a change, but it's worth mentioning to your vet. Contact them sooner if she stops eating, hides, vomits, or strains in the litter box.",
     "age_note": "Ziggy is a senior cat, so Purrcast flags gradual changes a little earlier."
    }
   }
  },
  "simba": {
   "kitten": {
    "cat_id": "simba",
    "name": "Simba",
    "updated": "2026-11-09T06:15:05Z",
    "level": "good",
    "age_group": "kitten",
    "message": "Simba's patterns have been consistent over the last 24 hours. If you notice any other symptoms, contact your vet.",
    "tiles": [
     {
      "key": "water",
      "label": "Water steady",
      "ok": true
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Eating, drinking, litter use, weight and rest are all consistent with his usual patterns.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet.",
     "age_note": "Simba is a kitten, so eating and drinking more while growing is expected. Purrcast compares food and water per kg of body weight and doesn't flag weight gain."
    }
   },
   "adult": {
    "cat_id": "simba",
    "name": "Simba",
    "updated": "2026-11-09T06:15:05Z",
    "level": "good",
    "age_group": "adult",
    "message": "Simba's patterns have been consistent over the last 24 hours. If you notice any other symptoms, contact your vet.",
    "tiles": [
     {
      "key": "water",
      "label": "Water steady",
      "ok": true
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Eating, drinking, litter use, weight and rest are all consistent with his usual patterns.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet.",
     "age_note": ""
    }
   },
   "senior": {
    "cat_id": "simba",
    "name": "Simba",
    "updated": "2026-11-09T06:15:05Z",
    "level": "good",
    "age_group": "senior",
    "message": "Simba's patterns have been consistent over the last 24 hours. If you notice any other symptoms, contact your vet.",
    "tiles": [
     {
      "key": "water",
      "label": "Water steady",
      "ok": true
     },
     {
      "key": "food",
      "label": "Food steady",
      "ok": true
     },
     {
      "key": "litter",
      "label": "Litter steady",
      "ok": true
     },
     {
      "key": "weight",
      "label": "Weight steady",
      "ok": true
     }
    ],
    "details": {
     "changed": "Eating, drinking, litter use, weight and rest are all consistent with his usual patterns.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet.",
     "age_note": "Simba is a senior cat, so Purrcast flags gradual changes a little earlier."
    }
   }
  }
 },
 "now": {
  "mochi": {
   "cat_id": "mochi",
   "scene": "drink",
   "type": "drink",
   "time": "2026-11-08T23:03:24",
   "text": "Drank 29 ml at 11:03 PM"
  },
  "luna": {
   "cat_id": "luna",
   "scene": "eat",
   "type": "eat",
   "time": "2026-11-08T23:38:10",
   "text": "Ate 9 g at 11:38 PM"
  },
  "lena": {
   "cat_id": "lena",
   "scene": "eat",
   "type": "eat",
   "time": "2026-11-08T23:19:42",
   "text": "Ate 13 g at 11:19 PM"
  },
  "oscar": {
   "cat_id": "oscar",
   "scene": "litter",
   "type": "litter_visit",
   "time": "2026-11-08T23:02:22",
   "text": "Used the litter box at 11:02 PM"
  },
  "bella": {
   "cat_id": "bella",
   "scene": "eat",
   "type": "eat",
   "time": "2026-11-08T23:41:00",
   "text": "Ate 6 g at 11:41 PM"
  },
  "milo": {
   "cat_id": "milo",
   "scene": "drink",
   "type": "drink",
   "time": "2026-11-08T22:40:58",
   "text": "Drank 20 ml at 10:40 PM"
  },
  "coco": {
   "cat_id": "coco",
   "scene": "eat",
   "type": "eat",
   "time": "2026-11-08T22:51:44",
   "text": "Ate 4 g at 10:51 PM"
  },
  "nala": {
   "cat_id": "nala",
   "scene": "drink",
   "type": "drink",
   "time": "2026-11-08T22:42:55",
   "text": "Drank 24 ml at 10:42 PM"
  },
  "pip": {
   "cat_id": "pip",
   "scene": "drink",
   "type": "drink",
   "time": "2026-11-08T23:40:01",
   "text": "Drank 14 ml at 11:40 PM"
  },
  "ziggy": {
   "cat_id": "ziggy",
   "scene": "litter",
   "type": "litter_visit",
   "time": "2026-11-08T23:28:55",
   "text": "Used the litter box at 11:28 PM"
  },
  "simba": {
   "cat_id": "simba",
   "scene": "eat",
   "type": "eat",
   "time": "2026-11-08T23:23:15",
   "text": "Ate 9 g at 11:23 PM"
  }
 },
 "recent": {
  "mochi": [
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T23:03:24",
    "text": "Drank 29 ml at 11:03 PM"
   },
   {
    "scene": "eat",
    "type": "eat",
    "time": "2026-11-08T23:00:25",
    "text": "Ate 5 g at 11:00 PM"
   },
   {
    "scene": "litter",
    "type": "litter_visit",
    "time": "2026-11-08T21:21:36",
    "text": "Used the litter box at 9:21 PM"
   },
   {
    "scene": "sleep",
    "type": "bed_session",
    "time": "2026-11-08T21:00:02",
    "text": "Napping on the bed since 9:00 PM (8 h 15 min)"
   },
   {
    "scene": "eat",
    "type": "eat",
    "time": "2026-11-08T20:30:55",
    "text": "Ate 11 g at 8:30 PM"
   }
  ],
  "luna": [
   {
    "scene": "eat",
    "type": "eat",
    "time": "2026-11-08T23:38:10",
    "text": "Ate 9 g at 11:38 PM"
   },
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T22:44:02",
    "text": "Drank 34 ml at 10:44 PM"
   },
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T21:11:33",
    "text": "Drank 29 ml at 9:11 PM"
   },
   {
    "scene": "litter",
    "type": "litter_visit",
    "time": "2026-11-08T21:08:10",
    "text": "Used the litter box at 9:08 PM"
   },
   {
    "scene": "sleep",
    "type": "bed_session",
    "time": "2026-11-08T21:00:02",
    "text": "Napping on the bed since 9:00 PM (8 h 37 min)"
   }
  ],
  "lena": [
   {
    "scene": "eat",
    "type": "eat",
    "time": "2026-11-08T23:19:42",
    "text": "Ate 13 g at 11:19 PM"
   },
   {
    "scene": "litter",
    "type": "litter_visit",
    "time": "2026-11-08T22:52:21",
    "text": "Used the litter box at 10:52 PM"
   },
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T22:01:58",
    "text": "Drank 67 ml at 10:01 PM"
   },
   {
    "scene": "sleep",
    "type": "bed_session",
    "time": "2026-11-08T21:00:01",
    "text": "Napping on the bed since 9:00 PM (11 h 7 min)"
   },
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T20:34:25",
    "text": "Drank 53 ml at 8:34 PM"
   }
  ],
  "oscar": [
   {
    "scene": "litter",
    "type": "litter_visit",
    "time": "2026-11-08T23:02:22",
    "text": "Used the litter box at 11:02 PM"
   },
   {
    "scene": "eat",
    "type": "eat",
    "time": "2026-11-08T22:46:55",
    "text": "Ate 8 g at 10:46 PM"
   },
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T22:27:40",
    "text": "Drank 37 ml at 10:27 PM"
   },
   {
    "scene": "litter",
    "type": "litter_visit",
    "time": "2026-11-08T22:03:55",
    "text": "Used the litter box at 10:03 PM"
   },
   {
    "scene": "sleep",
    "type": "bed_session",
    "time": "2026-11-08T21:00:01",
    "text": "Napping on the bed since 9:00 PM (10 h 34 min)"
   }
  ],
  "bella": [
   {
    "scene": "eat",
    "type": "eat",
    "time": "2026-11-08T23:41:00",
    "text": "Ate 6 g at 11:41 PM"
   },
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T23:24:32",
    "text": "Drank 64 ml at 11:24 PM"
   },
   {
    "scene": "sleep",
    "type": "bed_session",
    "time": "2026-11-08T21:00:02",
    "text": "Napping on the bed since 9:00 PM (9 h 14 min)"
   },
   {
    "scene": "litter",
    "type": "litter_visit",
    "time": "2026-11-08T20:53:55",
    "text": "Used the litter box at 8:53 PM"
   },
   {
    "scene": "eat",
    "type": "eat",
    "time": "2026-11-08T20:40:39",
    "text": "Ate 7 g at 8:40 PM"
   }
  ],
  "milo": [
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T22:40:58",
    "text": "Drank 20 ml at 10:40 PM"
   },
   {
    "scene": "eat",
    "type": "eat",
    "time": "2026-11-08T21:54:22",
    "text": "Ate 13 g at 9:54 PM"
   },
   {
    "scene": "sleep",
    "type": "bed_session",
    "time": "2026-11-08T21:00:02",
    "text": "Napping on the bed since 9:00 PM (8 h 6 min)"
   },
   {
    "scene": "eat",
    "type": "eat",
    "time": "2026-11-08T20:46:20",
    "text": "Ate 6 g at 8:46 PM"
   },
   {
    "scene": "litter",
    "type": "litter_visit",
    "time": "2026-11-08T19:44:49",
    "text": "Used the litter box at 7:44 PM"
   }
  ],
  "coco": [
   {
    "scene": "eat",
    "type": "eat",
    "time": "2026-11-08T22:51:44",
    "text": "Ate 4 g at 10:51 PM"
   },
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T22:23:00",
    "text": "Drank 23 ml at 10:23 PM"
   },
   {
    "scene": "sleep",
    "type": "bed_session",
    "time": "2026-11-08T21:00:02",
    "text": "Napping on the bed since 9:00 PM (9 h 49 min)"
   },
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T19:26:47",
    "text": "Drank 18 ml at 7:26 PM"
   },
   {
    "scene": "eat",
    "type": "eat",
    "time": "2026-11-08T18:17:04",
    "text": "Ate 6 g at 6:17 PM"
   }
  ],
  "nala": [
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T22:42:55",
    "text": "Drank 24 ml at 10:42 PM"
   },
   {
    "scene": "eat",
    "type": "eat",
    "time": "2026-11-08T21:55:51",
    "text": "Ate 4 g at 9:55 PM"
   },
   {
    "scene": "sleep",
    "type": "bed_session",
    "time": "2026-11-08T21:00:02",
    "text": "Napping on the bed since 9:00 PM (10 h 42 min)"
   },
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T17:40:34",
    "text": "Drank 22 ml at 5:40 PM"
   },
   {
    "scene": "litter",
    "type": "litter_visit",
    "time": "2026-11-08T14:55:44",
    "text": "Used the litter box at 2:55 PM"
   }
  ],
  "pip": [
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T23:40:01",
    "text": "Drank 14 ml at 11:40 PM"
   },
   {
    "scene": "eat",
    "type": "eat",
    "time": "2026-11-08T22:34:42",
    "text": "Ate 12 g at 10:34 PM"
   },
   {
    "scene": "sleep",
    "type": "bed_session",
    "time": "2026-11-08T21:00:02",
    "text": "Napping on the bed since 9:00 PM (10 h 56 min)"
   },
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T20:25:00",
    "text": "Drank 25 ml at 8:25 PM"
   },
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T18:32:30",
    "text": "Drank 14 ml at 6:32 PM"
   }
  ],
  "ziggy": [
   {
    "scene": "litter",
    "type": "litter_visit",
    "time": "2026-11-08T23:28:55",
    "text": "Used the litter box at 11:28 PM"
   },
   {
    "scene": "eat",
    "type": "eat",
    "time": "2026-11-08T22:54:21",
    "text": "Ate 8 g at 10:54 PM"
   },
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T22:35:39",
    "text": "Drank 54 ml at 10:35 PM"
   },
   {
    "scene": "sleep",
    "type": "bed_session",
    "time": "2026-11-08T21:00:02",
    "text": "Napping on the bed since 9:00 PM (10 h 14 min)"
   },
   {
    "scene": "eat",
    "type": "eat",
    "time": "2026-11-08T20:59:00",
    "text": "Ate 9 g at 8:59 PM"
   }
  ],
  "simba": [
   {
    "scene": "eat",
    "type": "eat",
    "time": "2026-11-08T23:23:15",
    "text": "Ate 9 g at 11:23 PM"
   },
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T23:10:09",
    "text": "Drank 28 ml at 11:10 PM"
   },
   {
    "scene": "sleep",
    "type": "bed_session",
    "time": "2026-11-08T21:00:01",
    "text": "Napping on the bed since 9:00 PM (9 h 28 min)"
   },
   {
    "scene": "drink",
    "type": "drink",
    "time": "2026-11-08T20:46:54",
    "text": "Drank 17 ml at 8:46 PM"
   },
   {
    "scene": "eat",
    "type": "eat",
    "time": "2026-11-08T20:36:11",
    "text": "Ate 10 g at 8:36 PM"
   }
  ]
 },
 "history": {
  "mochi": [
   {
    "cat_id": "mochi",
    "date": "2026-09-10",
    "water_ml": 184.0,
    "food_g": 55.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 39.2,
    "litter_output_g": 97.4,
    "weight_kg": 3.609,
    "rest_min": 407.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-11",
    "water_ml": 175.6,
    "food_g": 63.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 39.7,
    "litter_output_g": 103.4,
    "weight_kg": 3.591,
    "rest_min": 750.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-12",
    "water_ml": 168.7,
    "food_g": 58.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 45.0,
    "litter_output_g": 120.5,
    "weight_kg": 3.598,
    "rest_min": 730.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-13",
    "water_ml": 183.0,
    "food_g": 59.9,
    "litter_visits": 4.0,
    "litter_avg_sec": 37.0,
    "litter_output_g": 114.1,
    "weight_kg": 3.603,
    "rest_min": 722.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-14",
    "water_ml": 178.9,
    "food_g": 61.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 37.5,
    "litter_output_g": 106.6,
    "weight_kg": 3.616,
    "rest_min": 732.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-15",
    "water_ml": 194.6,
    "food_g": 57.1,
    "litter_visits": 2.0,
    "litter_avg_sec": 46.0,
    "litter_output_g": 111.4,
    "weight_kg": 3.606,
    "rest_min": 740.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-16",
    "water_ml": 184.3,
    "food_g": 62.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 47.2,
    "litter_output_g": 105.1,
    "weight_kg": 3.602,
    "rest_min": 725.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-17",
    "water_ml": 192.8,
    "food_g": 58.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 37.0,
    "litter_output_g": 112.6,
    "weight_kg": 3.616,
    "rest_min": 762.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-18",
    "water_ml": 176.0,
    "food_g": 61.0,
    "litter_visits": 3.0,
    "litter_avg_sec": 43.0,
    "litter_output_g": 98.8,
    "weight_kg": 3.595,
    "rest_min": 662.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-19",
    "water_ml": 196.0,
    "food_g": 56.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 43.8,
    "litter_output_g": 96.2,
    "weight_kg": 3.597,
    "rest_min": 689.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-20",
    "water_ml": 167.6,
    "food_g": 60.2,
    "litter_visits": 3.0,
    "litter_avg_sec": 43.0,
    "litter_output_g": 110.0,
    "weight_kg": 3.585,
    "rest_min": 724.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-21",
    "water_ml": 179.9,
    "food_g": 57.9,
    "litter_visits": 4.0,
    "litter_avg_sec": 41.5,
    "litter_output_g": 113.9,
    "weight_kg": 3.616,
    "rest_min": 720.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-22",
    "water_ml": 177.0,
    "food_g": 62.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 42.5,
    "litter_output_g": 118.5,
    "weight_kg": 3.592,
    "rest_min": 778.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-23",
    "water_ml": 161.7,
    "food_g": 61.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 45.2,
    "litter_output_g": 102.5,
    "weight_kg": 3.606,
    "rest_min": 732.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-24",
    "water_ml": 182.3,
    "food_g": 64.6,
    "litter_visits": 2.0,
    "litter_avg_sec": 48.0,
    "litter_output_g": 93.3,
    "weight_kg": 3.587,
    "rest_min": 723.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-25",
    "water_ml": 196.2,
    "food_g": 59.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 37.0,
    "litter_output_g": 119.1,
    "weight_kg": 3.592,
    "rest_min": 686.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-26",
    "water_ml": 179.3,
    "food_g": 58.2,
    "litter_visits": 3.0,
    "litter_avg_sec": 39.3,
    "litter_output_g": 105.8,
    "weight_kg": 3.602,
    "rest_min": 702.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-27",
    "water_ml": 184.7,
    "food_g": 59.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 44.0,
    "litter_output_g": 104.9,
    "weight_kg": 3.611,
    "rest_min": 770.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-28",
    "water_ml": 193.4,
    "food_g": 51.9,
    "litter_visits": 2.0,
    "litter_avg_sec": 46.5,
    "litter_output_g": 98.9,
    "weight_kg": 3.587,
    "rest_min": 771.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-29",
    "water_ml": 168.6,
    "food_g": 55.3,
    "litter_visits": 2.0,
    "litter_avg_sec": 44.5,
    "litter_output_g": 118.6,
    "weight_kg": 3.597,
    "rest_min": 719.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-09-30",
    "water_ml": 193.7,
    "food_g": 61.6,
    "litter_visits": 3.0,
    "litter_avg_sec": 41.7,
    "litter_output_g": 116.5,
    "weight_kg": 3.617,
    "rest_min": 761.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-01",
    "water_ml": 196.7,
    "food_g": 64.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 45.7,
    "litter_output_g": 111.0,
    "weight_kg": 3.602,
    "rest_min": 705.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-02",
    "water_ml": 171.0,
    "food_g": 58.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 44.5,
    "litter_output_g": 107.5,
    "weight_kg": 3.583,
    "rest_min": 713.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-03",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-04",
    "water_ml": 174.9,
    "food_g": 62.3,
    "litter_visits": 2.0,
    "litter_avg_sec": 45.0,
    "litter_output_g": 111.4,
    "weight_kg": 3.607,
    "rest_min": 702.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-05",
    "water_ml": 189.9,
    "food_g": 57.9,
    "litter_visits": 3.0,
    "litter_avg_sec": 48.0,
    "litter_output_g": 111.4,
    "weight_kg": 3.592,
    "rest_min": 706.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-06",
    "water_ml": 179.3,
    "food_g": 62.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 44.0,
    "litter_output_g": 92.7,
    "weight_kg": 3.584,
    "rest_min": 653.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-07",
    "water_ml": 168.7,
    "food_g": 55.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 42.5,
    "litter_output_g": 107.2,
    "weight_kg": 3.606,
    "rest_min": 751.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-08",
    "water_ml": 195.6,
    "food_g": 59.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 49.8,
    "litter_output_g": 91.8,
    "weight_kg": 3.599,
    "rest_min": 759.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-09",
    "water_ml": 199.7,
    "food_g": 55.3,
    "litter_visits": 2.0,
    "litter_avg_sec": 45.5,
    "litter_output_g": 114.9,
    "weight_kg": 3.611,
    "rest_min": 707.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-10",
    "water_ml": 161.0,
    "food_g": 59.9,
    "litter_visits": 3.0,
    "litter_avg_sec": 42.7,
    "litter_output_g": 120.6,
    "weight_kg": 3.595,
    "rest_min": 810.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-11",
    "water_ml": 178.4,
    "food_g": 57.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 40.5,
    "litter_output_g": 102.1,
    "weight_kg": 3.608,
    "rest_min": 795.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-12",
    "water_ml": 196.1,
    "food_g": 53.5,
    "litter_visits": 2.0,
    "litter_avg_sec": 46.0,
    "litter_output_g": 114.1,
    "weight_kg": 3.595,
    "rest_min": 729.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-13",
    "water_ml": 196.5,
    "food_g": 56.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 40.2,
    "litter_output_g": 95.5,
    "weight_kg": 3.589,
    "rest_min": 718.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-14",
    "water_ml": 196.6,
    "food_g": 62.9,
    "litter_visits": 2.0,
    "litter_avg_sec": 49.5,
    "litter_output_g": 119.9,
    "weight_kg": 3.613,
    "rest_min": 747.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-15",
    "water_ml": 166.1,
    "food_g": 57.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 44.0,
    "litter_output_g": 91.4,
    "weight_kg": 3.601,
    "rest_min": 659.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-16",
    "water_ml": 162.5,
    "food_g": 56.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 36.8,
    "litter_output_g": 97.1,
    "weight_kg": 3.584,
    "rest_min": 730.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-17",
    "water_ml": 175.2,
    "food_g": 62.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 49.2,
    "litter_output_g": 95.2,
    "weight_kg": 3.583,
    "rest_min": 783.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-18",
    "water_ml": 197.4,
    "food_g": 57.7,
    "litter_visits": 4.0,
    "litter_avg_sec": 40.5,
    "litter_output_g": 98.5,
    "weight_kg": 3.611,
    "rest_min": 778.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-19",
    "water_ml": 165.7,
    "food_g": 58.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 40.0,
    "litter_output_g": 95.3,
    "weight_kg": 3.614,
    "rest_min": 720.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-20",
    "water_ml": 194.3,
    "food_g": 56.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 46.0,
    "litter_output_g": 92.6,
    "weight_kg": 3.615,
    "rest_min": 671.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-21",
    "water_ml": 175.3,
    "food_g": 64.0,
    "litter_visits": 3.0,
    "litter_avg_sec": 44.0,
    "litter_output_g": 113.7,
    "weight_kg": 3.609,
    "rest_min": 754.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-22",
    "water_ml": 170.7,
    "food_g": 54.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 43.0,
    "litter_output_g": 101.2,
    "weight_kg": 3.617,
    "rest_min": 690.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-23",
    "water_ml": 174.2,
    "food_g": 65.0,
    "litter_visits": 3.0,
    "litter_avg_sec": 45.7,
    "litter_output_g": 116.8,
    "weight_kg": 3.617,
    "rest_min": 730.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-24",
    "water_ml": 185.2,
    "food_g": 60.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 41.0,
    "litter_output_g": 100.7,
    "weight_kg": 3.591,
    "rest_min": 676.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-25",
    "water_ml": 183.6,
    "food_g": 64.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 48.3,
    "litter_output_g": 90.4,
    "weight_kg": 3.6,
    "rest_min": 738.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-26",
    "water_ml": 176.1,
    "food_g": 62.1,
    "litter_visits": 2.0,
    "litter_avg_sec": 48.0,
    "litter_output_g": 89.7,
    "weight_kg": 3.591,
    "rest_min": 777.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-27",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-28",
    "water_ml": 174.0,
    "food_g": 65.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 36.5,
    "litter_output_g": 112.8,
    "weight_kg": 3.597,
    "rest_min": 759.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-29",
    "water_ml": 175.9,
    "food_g": 60.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 39.7,
    "litter_output_g": 111.2,
    "weight_kg": 3.596,
    "rest_min": 639.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-30",
    "water_ml": 190.7,
    "food_g": 56.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 47.8,
    "litter_output_g": 117.7,
    "weight_kg": 3.598,
    "rest_min": 678.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-10-31",
    "water_ml": 180.7,
    "food_g": 59.9,
    "litter_visits": 2.0,
    "litter_avg_sec": 40.5,
    "litter_output_g": 104.3,
    "weight_kg": 3.605,
    "rest_min": 666.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-11-01",
    "water_ml": 176.0,
    "food_g": 60.6,
    "litter_visits": 2.0,
    "litter_avg_sec": 39.0,
    "litter_output_g": 92.3,
    "weight_kg": 3.609,
    "rest_min": 707.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-11-02",
    "water_ml": 182.8,
    "food_g": 65.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 46.8,
    "litter_output_g": 104.3,
    "weight_kg": 3.595,
    "rest_min": 736.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-11-03",
    "water_ml": 184.1,
    "food_g": 59.9,
    "litter_visits": 2.0,
    "litter_avg_sec": 44.5,
    "litter_output_g": 103.2,
    "weight_kg": 3.605,
    "rest_min": 672.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-11-04",
    "water_ml": 177.8,
    "food_g": 57.1,
    "litter_visits": 4.0,
    "litter_avg_sec": 48.5,
    "litter_output_g": 113.8,
    "weight_kg": 3.585,
    "rest_min": 712.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-11-05",
    "water_ml": 191.3,
    "food_g": 59.9,
    "litter_visits": 4.0,
    "litter_avg_sec": 44.8,
    "litter_output_g": 110.3,
    "weight_kg": 3.606,
    "rest_min": 725.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-11-06",
    "water_ml": 188.3,
    "food_g": 58.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 39.8,
    "litter_output_g": 97.4,
    "weight_kg": 3.59,
    "rest_min": 720.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-11-07",
    "water_ml": 181.6,
    "food_g": 58.0,
    "litter_visits": 2.0,
    "litter_avg_sec": 39.5,
    "litter_output_g": 104.8,
    "weight_kg": 3.613,
    "rest_min": 741.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "mochi",
    "date": "2026-11-08",
    "water_ml": 165.7,
    "food_g": 63.0,
    "litter_visits": 2.0,
    "litter_avg_sec": 39.5,
    "litter_output_g": 101.7,
    "weight_kg": 3.609,
    "rest_min": 647.8,
    "sleep_breaths": null,
    "data_ok": true
   }
  ],
  "luna": [
   {
    "cat_id": "luna",
    "date": "2026-09-10",
    "water_ml": 193.2,
    "food_g": 67.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 44.0,
    "litter_output_g": 107.7,
    "weight_kg": 4.2,
    "rest_min": 380.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-11",
    "water_ml": 220.5,
    "food_g": 63.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 45.7,
    "litter_output_g": 128.7,
    "weight_kg": 4.221,
    "rest_min": 676.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-12",
    "water_ml": 200.4,
    "food_g": 66.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 48.8,
    "litter_output_g": 108.7,
    "weight_kg": 4.204,
    "rest_min": 686.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-13",
    "water_ml": 195.1,
    "food_g": 75.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 43.5,
    "litter_output_g": 108.0,
    "weight_kg": 4.204,
    "rest_min": 711.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-14",
    "water_ml": 213.2,
    "food_g": 75.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 42.5,
    "litter_output_g": 128.3,
    "weight_kg": 4.184,
    "rest_min": 795.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-15",
    "water_ml": 227.6,
    "food_g": 75.2,
    "litter_visits": 4.0,
    "litter_avg_sec": 50.2,
    "litter_output_g": 129.4,
    "weight_kg": 4.184,
    "rest_min": 776.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-16",
    "water_ml": 227.1,
    "food_g": 68.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 53.0,
    "litter_output_g": 135.6,
    "weight_kg": 4.191,
    "rest_min": 864.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-17",
    "water_ml": 223.4,
    "food_g": 71.0,
    "litter_visits": 2.0,
    "litter_avg_sec": 55.0,
    "litter_output_g": 134.7,
    "weight_kg": 4.187,
    "rest_min": 791.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-18",
    "water_ml": 225.3,
    "food_g": 71.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 41.0,
    "litter_output_g": 117.6,
    "weight_kg": 4.219,
    "rest_min": 672.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-19",
    "water_ml": 199.2,
    "food_g": 69.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 47.0,
    "litter_output_g": 123.3,
    "weight_kg": 4.215,
    "rest_min": 746.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-20",
    "water_ml": 201.6,
    "food_g": 63.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 46.7,
    "litter_output_g": 112.4,
    "weight_kg": 4.2,
    "rest_min": 871.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-21",
    "water_ml": 199.9,
    "food_g": 69.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 46.7,
    "litter_output_g": 138.7,
    "weight_kg": 4.192,
    "rest_min": 804.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-22",
    "water_ml": 207.7,
    "food_g": 68.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 50.0,
    "litter_output_g": 129.0,
    "weight_kg": 4.197,
    "rest_min": 757.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-23",
    "water_ml": 229.0,
    "food_g": 67.7,
    "litter_visits": 4.0,
    "litter_avg_sec": 40.8,
    "litter_output_g": 116.2,
    "weight_kg": 4.216,
    "rest_min": 743.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-24",
    "water_ml": 213.1,
    "food_g": 64.6,
    "litter_visits": 2.0,
    "litter_avg_sec": 42.0,
    "litter_output_g": 115.8,
    "weight_kg": 4.197,
    "rest_min": 762.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-25",
    "water_ml": 215.2,
    "food_g": 67.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 44.0,
    "litter_output_g": 131.2,
    "weight_kg": 4.184,
    "rest_min": 740.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-26",
    "water_ml": 193.0,
    "food_g": 73.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 40.8,
    "litter_output_g": 108.0,
    "weight_kg": 4.218,
    "rest_min": 861.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-27",
    "water_ml": 228.5,
    "food_g": 71.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 49.3,
    "litter_output_g": 113.6,
    "weight_kg": 4.2,
    "rest_min": 871.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-28",
    "water_ml": 196.6,
    "food_g": 72.4,
    "litter_visits": 3.0,
    "litter_avg_sec": 54.0,
    "litter_output_g": 130.1,
    "weight_kg": 4.209,
    "rest_min": 822.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-29",
    "water_ml": 201.6,
    "food_g": 64.2,
    "litter_visits": 3.0,
    "litter_avg_sec": 52.3,
    "litter_output_g": 122.6,
    "weight_kg": 4.198,
    "rest_min": 677.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-09-30",
    "water_ml": 205.2,
    "food_g": 73.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 41.5,
    "litter_output_g": 117.2,
    "weight_kg": 4.197,
    "rest_min": 711.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-01",
    "water_ml": 225.4,
    "food_g": 73.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 50.0,
    "litter_output_g": 140.2,
    "weight_kg": 4.212,
    "rest_min": 769.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-02",
    "water_ml": 202.0,
    "food_g": 73.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 52.5,
    "litter_output_g": 123.4,
    "weight_kg": 4.208,
    "rest_min": 767.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-03",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "luna",
    "date": "2026-10-04",
    "water_ml": 228.9,
    "food_g": 67.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 54.5,
    "litter_output_g": 117.3,
    "weight_kg": 4.22,
    "rest_min": 739.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-05",
    "water_ml": 213.3,
    "food_g": 67.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 44.7,
    "litter_output_g": 142.7,
    "weight_kg": 4.221,
    "rest_min": 827.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-06",
    "water_ml": 198.4,
    "food_g": 69.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 53.2,
    "litter_output_g": 113.6,
    "weight_kg": 4.198,
    "rest_min": 799.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-07",
    "water_ml": 220.7,
    "food_g": 69.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 43.8,
    "litter_output_g": 115.3,
    "weight_kg": 4.215,
    "rest_min": 778.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-08",
    "water_ml": 219.2,
    "food_g": 69.1,
    "litter_visits": 4.0,
    "litter_avg_sec": 45.5,
    "litter_output_g": 114.2,
    "weight_kg": 4.191,
    "rest_min": 704.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-09",
    "water_ml": 227.7,
    "food_g": 70.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 50.0,
    "litter_output_g": 115.7,
    "weight_kg": 4.19,
    "rest_min": 764.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-10",
    "water_ml": 197.0,
    "food_g": 69.6,
    "litter_visits": 2.0,
    "litter_avg_sec": 52.5,
    "litter_output_g": 121.1,
    "weight_kg": 4.191,
    "rest_min": 738.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-11",
    "water_ml": 223.6,
    "food_g": 70.6,
    "litter_visits": 2.0,
    "litter_avg_sec": 52.5,
    "litter_output_g": 117.3,
    "weight_kg": 4.194,
    "rest_min": 768.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-12",
    "water_ml": 211.0,
    "food_g": 68.3,
    "litter_visits": 2.0,
    "litter_avg_sec": 51.5,
    "litter_output_g": 110.5,
    "weight_kg": 4.198,
    "rest_min": 820.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-13",
    "water_ml": 191.3,
    "food_g": 68.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 42.2,
    "litter_output_g": 106.3,
    "weight_kg": 4.213,
    "rest_min": 741.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-14",
    "water_ml": 198.4,
    "food_g": 72.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 51.8,
    "litter_output_g": 137.2,
    "weight_kg": 4.207,
    "rest_min": 855.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-15",
    "water_ml": 218.1,
    "food_g": 74.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 47.0,
    "litter_output_g": 143.7,
    "weight_kg": 4.185,
    "rest_min": 748.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-16",
    "water_ml": 179.8,
    "food_g": 71.9,
    "litter_visits": 4.0,
    "litter_avg_sec": 47.0,
    "litter_output_g": 133.5,
    "weight_kg": 4.196,
    "rest_min": 719.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-17",
    "water_ml": 219.1,
    "food_g": 68.5,
    "litter_visits": 2.0,
    "litter_avg_sec": 47.0,
    "litter_output_g": 118.3,
    "weight_kg": 4.209,
    "rest_min": 786.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-18",
    "water_ml": 202.1,
    "food_g": 69.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 54.5,
    "litter_output_g": 114.6,
    "weight_kg": 4.185,
    "rest_min": 761.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-19",
    "water_ml": 213.9,
    "food_g": 71.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 53.3,
    "litter_output_g": 124.8,
    "weight_kg": 4.199,
    "rest_min": 795.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-20",
    "water_ml": 190.8,
    "food_g": 67.2,
    "litter_visits": 3.0,
    "litter_avg_sec": 42.3,
    "litter_output_g": 133.8,
    "weight_kg": 4.184,
    "rest_min": 714.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-21",
    "water_ml": 193.3,
    "food_g": 75.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 45.5,
    "litter_output_g": 118.0,
    "weight_kg": 4.219,
    "rest_min": 754.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-22",
    "water_ml": 213.9,
    "food_g": 65.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 46.5,
    "litter_output_g": 116.1,
    "weight_kg": 4.215,
    "rest_min": 677.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-23",
    "water_ml": 229.5,
    "food_g": 69.4,
    "litter_visits": 2.0,
    "litter_avg_sec": 44.5,
    "litter_output_g": 137.8,
    "weight_kg": 4.197,
    "rest_min": 713.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-24",
    "water_ml": 211.6,
    "food_g": 70.6,
    "litter_visits": 3.0,
    "litter_avg_sec": 40.7,
    "litter_output_g": 127.8,
    "weight_kg": 4.221,
    "rest_min": 836.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-25",
    "water_ml": 210.7,
    "food_g": 68.9,
    "litter_visits": 4.0,
    "litter_avg_sec": 42.8,
    "litter_output_g": 139.1,
    "weight_kg": 4.221,
    "rest_min": 845.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-26",
    "water_ml": 214.3,
    "food_g": 61.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 53.0,
    "litter_output_g": 110.7,
    "weight_kg": 4.181,
    "rest_min": 727.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-27",
    "water_ml": 225.4,
    "food_g": 73.5,
    "litter_visits": 2.0,
    "litter_avg_sec": 47.0,
    "litter_output_g": 125.2,
    "weight_kg": 4.216,
    "rest_min": 693.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-28",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "luna",
    "date": "2026-10-29",
    "water_ml": 207.9,
    "food_g": 66.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 51.0,
    "litter_output_g": 122.4,
    "weight_kg": 4.21,
    "rest_min": 767.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-30",
    "water_ml": 220.4,
    "food_g": 70.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 48.5,
    "litter_output_g": 134.0,
    "weight_kg": 4.204,
    "rest_min": 766.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-10-31",
    "water_ml": 230.1,
    "food_g": 65.9,
    "litter_visits": 4.0,
    "litter_avg_sec": 48.5,
    "litter_output_g": 143.0,
    "weight_kg": 4.179,
    "rest_min": 794.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-11-01",
    "water_ml": 206.7,
    "food_g": 70.4,
    "litter_visits": 2.0,
    "litter_avg_sec": 43.0,
    "litter_output_g": 126.1,
    "weight_kg": 4.188,
    "rest_min": 732.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-11-02",
    "water_ml": 218.8,
    "food_g": 68.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 48.0,
    "litter_output_g": 124.5,
    "weight_kg": 4.196,
    "rest_min": 834.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-11-03",
    "water_ml": 189.5,
    "food_g": 71.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 50.0,
    "litter_output_g": 112.0,
    "weight_kg": 4.181,
    "rest_min": 785.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-11-04",
    "water_ml": 205.6,
    "food_g": 65.5,
    "litter_visits": 2.0,
    "litter_avg_sec": 52.5,
    "litter_output_g": 133.4,
    "weight_kg": 4.203,
    "rest_min": 764.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-11-05",
    "water_ml": 187.7,
    "food_g": 65.1,
    "litter_visits": 4.0,
    "litter_avg_sec": 52.2,
    "litter_output_g": 143.9,
    "weight_kg": 4.194,
    "rest_min": 709.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-11-06",
    "water_ml": 203.9,
    "food_g": 73.4,
    "litter_visits": 2.0,
    "litter_avg_sec": 42.0,
    "litter_output_g": 110.7,
    "weight_kg": 4.219,
    "rest_min": 762.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-11-07",
    "water_ml": 216.2,
    "food_g": 60.0,
    "litter_visits": 3.0,
    "litter_avg_sec": 47.7,
    "litter_output_g": 135.6,
    "weight_kg": 4.205,
    "rest_min": 775.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "luna",
    "date": "2026-11-08",
    "water_ml": 262.6,
    "food_g": 74.6,
    "litter_visits": 3.0,
    "litter_avg_sec": 50.3,
    "litter_output_g": 108.1,
    "weight_kg": 4.215,
    "rest_min": 759.4,
    "sleep_breaths": null,
    "data_ok": true
   }
  ],
  "lena": [
   {
    "cat_id": "lena",
    "date": "2026-09-10",
    "water_ml": 251.2,
    "food_g": 83.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 52.3,
    "litter_output_g": 141.5,
    "weight_kg": 4.789,
    "rest_min": 459.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-11",
    "water_ml": 222.2,
    "food_g": 74.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 55.0,
    "litter_output_g": 128.4,
    "weight_kg": 4.814,
    "rest_min": 899.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-12",
    "water_ml": 245.4,
    "food_g": 77.1,
    "litter_visits": 5.0,
    "litter_avg_sec": 58.8,
    "litter_output_g": 162.7,
    "weight_kg": 4.779,
    "rest_min": 806.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-13",
    "water_ml": 236.9,
    "food_g": 83.8,
    "litter_visits": 5.0,
    "litter_avg_sec": 54.2,
    "litter_output_g": 146.7,
    "weight_kg": 4.778,
    "rest_min": 762.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-14",
    "water_ml": 259.0,
    "food_g": 77.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 46.2,
    "litter_output_g": 134.0,
    "weight_kg": 4.813,
    "rest_min": 795.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-15",
    "water_ml": 230.2,
    "food_g": 79.7,
    "litter_visits": 4.0,
    "litter_avg_sec": 49.8,
    "litter_output_g": 141.8,
    "weight_kg": 4.782,
    "rest_min": 901.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-16",
    "water_ml": 247.0,
    "food_g": 79.4,
    "litter_visits": 5.0,
    "litter_avg_sec": 49.6,
    "litter_output_g": 126.1,
    "weight_kg": 4.789,
    "rest_min": 812.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-17",
    "water_ml": 227.3,
    "food_g": 79.9,
    "litter_visits": 4.0,
    "litter_avg_sec": 60.5,
    "litter_output_g": 127.4,
    "weight_kg": 4.798,
    "rest_min": 789.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-18",
    "water_ml": 234.9,
    "food_g": 80.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 52.7,
    "litter_output_g": 134.7,
    "weight_kg": 4.81,
    "rest_min": 793.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-19",
    "water_ml": 242.6,
    "food_g": 74.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 46.5,
    "litter_output_g": 164.6,
    "weight_kg": 4.813,
    "rest_min": 840.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-20",
    "water_ml": 254.1,
    "food_g": 80.7,
    "litter_visits": 4.0,
    "litter_avg_sec": 50.2,
    "litter_output_g": 143.2,
    "weight_kg": 4.792,
    "rest_min": 897.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-21",
    "water_ml": 234.4,
    "food_g": 83.6,
    "litter_visits": 5.0,
    "litter_avg_sec": 61.0,
    "litter_output_g": 160.7,
    "weight_kg": 4.8,
    "rest_min": 887.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-22",
    "water_ml": 224.6,
    "food_g": 78.3,
    "litter_visits": 5.0,
    "litter_avg_sec": 48.8,
    "litter_output_g": 144.9,
    "weight_kg": 4.803,
    "rest_min": 763.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-23",
    "water_ml": 226.9,
    "food_g": 74.0,
    "litter_visits": 3.0,
    "litter_avg_sec": 59.7,
    "litter_output_g": 159.6,
    "weight_kg": 4.791,
    "rest_min": 846.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-24",
    "water_ml": 238.9,
    "food_g": 83.4,
    "litter_visits": 3.0,
    "litter_avg_sec": 46.3,
    "litter_output_g": 146.0,
    "weight_kg": 4.8,
    "rest_min": 857.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-25",
    "water_ml": 220.6,
    "food_g": 78.8,
    "litter_visits": 5.0,
    "litter_avg_sec": 51.8,
    "litter_output_g": 132.9,
    "weight_kg": 4.803,
    "rest_min": 938.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-26",
    "water_ml": 237.1,
    "food_g": 77.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 49.3,
    "litter_output_g": 151.3,
    "weight_kg": 4.795,
    "rest_min": 922.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-27",
    "water_ml": 220.6,
    "food_g": 85.4,
    "litter_visits": 3.0,
    "litter_avg_sec": 56.7,
    "litter_output_g": 138.0,
    "weight_kg": 4.8,
    "rest_min": 897.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-28",
    "water_ml": 248.1,
    "food_g": 75.9,
    "litter_visits": 5.0,
    "litter_avg_sec": 49.4,
    "litter_output_g": 142.3,
    "weight_kg": 4.812,
    "rest_min": 778.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-29",
    "water_ml": 243.5,
    "food_g": 74.2,
    "litter_visits": 5.0,
    "litter_avg_sec": 48.6,
    "litter_output_g": 147.5,
    "weight_kg": 4.783,
    "rest_min": 825.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-09-30",
    "water_ml": 242.3,
    "food_g": 77.2,
    "litter_visits": 4.0,
    "litter_avg_sec": 55.5,
    "litter_output_g": 127.7,
    "weight_kg": 4.791,
    "rest_min": 835.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-01",
    "water_ml": 262.3,
    "food_g": 82.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 52.8,
    "litter_output_g": 133.3,
    "weight_kg": 4.793,
    "rest_min": 863.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-02",
    "water_ml": 248.0,
    "food_g": 75.3,
    "litter_visits": 5.0,
    "litter_avg_sec": 52.4,
    "litter_output_g": 140.9,
    "weight_kg": 4.792,
    "rest_min": 825.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-03",
    "water_ml": 255.8,
    "food_g": 80.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 59.5,
    "litter_output_g": 129.8,
    "weight_kg": 4.783,
    "rest_min": 809.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-04",
    "water_ml": 225.3,
    "food_g": 81.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 50.5,
    "litter_output_g": 136.1,
    "weight_kg": 4.821,
    "rest_min": 938.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-05",
    "water_ml": 260.1,
    "food_g": 75.3,
    "litter_visits": 5.0,
    "litter_avg_sec": 49.0,
    "litter_output_g": 144.9,
    "weight_kg": 4.815,
    "rest_min": 879.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-06",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "lena",
    "date": "2026-10-07",
    "water_ml": 263.0,
    "food_g": 77.1,
    "litter_visits": 4.0,
    "litter_avg_sec": 54.5,
    "litter_output_g": 162.5,
    "weight_kg": 4.804,
    "rest_min": 862.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-08",
    "water_ml": 231.5,
    "food_g": 78.2,
    "litter_visits": 4.0,
    "litter_avg_sec": 53.2,
    "litter_output_g": 146.2,
    "weight_kg": 4.781,
    "rest_min": 924.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-09",
    "water_ml": 219.6,
    "food_g": 84.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 48.7,
    "litter_output_g": 143.9,
    "weight_kg": 4.809,
    "rest_min": 909.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-10",
    "water_ml": 219.4,
    "food_g": 74.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 55.3,
    "litter_output_g": 155.0,
    "weight_kg": 4.812,
    "rest_min": 790.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-11",
    "water_ml": 243.5,
    "food_g": 80.4,
    "litter_visits": 5.0,
    "litter_avg_sec": 53.8,
    "litter_output_g": 152.1,
    "weight_kg": 4.822,
    "rest_min": 804.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-12",
    "water_ml": 254.4,
    "food_g": 74.9,
    "litter_visits": 5.0,
    "litter_avg_sec": 55.4,
    "litter_output_g": 160.0,
    "weight_kg": 4.809,
    "rest_min": 807.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-13",
    "water_ml": 246.9,
    "food_g": 78.8,
    "litter_visits": 5.0,
    "litter_avg_sec": 56.4,
    "litter_output_g": 145.5,
    "weight_kg": 4.797,
    "rest_min": 755.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-14",
    "water_ml": 246.9,
    "food_g": 81.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 46.0,
    "litter_output_g": 139.8,
    "weight_kg": 4.814,
    "rest_min": 801.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-15",
    "water_ml": 219.9,
    "food_g": 84.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 50.7,
    "litter_output_g": 128.8,
    "weight_kg": 4.79,
    "rest_min": 878.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-16",
    "water_ml": 246.1,
    "food_g": 78.3,
    "litter_visits": 5.0,
    "litter_avg_sec": 53.2,
    "litter_output_g": 135.8,
    "weight_kg": 4.786,
    "rest_min": 842.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-17",
    "water_ml": 243.4,
    "food_g": 74.6,
    "litter_visits": 3.0,
    "litter_avg_sec": 45.7,
    "litter_output_g": 153.1,
    "weight_kg": 4.787,
    "rest_min": 895.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-18",
    "water_ml": 223.3,
    "food_g": 76.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 51.7,
    "litter_output_g": 145.1,
    "weight_kg": 4.802,
    "rest_min": 877.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-19",
    "water_ml": 226.8,
    "food_g": 75.2,
    "litter_visits": 3.0,
    "litter_avg_sec": 53.7,
    "litter_output_g": 165.3,
    "weight_kg": 4.801,
    "rest_min": 944.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-20",
    "water_ml": 277.4,
    "food_g": 78.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 51.3,
    "litter_output_g": 174.0,
    "weight_kg": 4.771,
    "rest_min": 878.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-21",
    "water_ml": 282.2,
    "food_g": 76.3,
    "litter_visits": 5.0,
    "litter_avg_sec": 60.2,
    "litter_output_g": 137.9,
    "weight_kg": 4.808,
    "rest_min": 792.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-22",
    "water_ml": 293.2,
    "food_g": 83.0,
    "litter_visits": 3.0,
    "litter_avg_sec": 55.0,
    "litter_output_g": 171.9,
    "weight_kg": 4.763,
    "rest_min": 830.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-23",
    "water_ml": 275.7,
    "food_g": 85.4,
    "litter_visits": 3.0,
    "litter_avg_sec": 53.0,
    "litter_output_g": 163.4,
    "weight_kg": 4.777,
    "rest_min": 875.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-24",
    "water_ml": 289.8,
    "food_g": 81.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 56.0,
    "litter_output_g": 161.2,
    "weight_kg": 4.77,
    "rest_min": 805.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-25",
    "water_ml": 318.7,
    "food_g": 84.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 58.8,
    "litter_output_g": 159.8,
    "weight_kg": 4.751,
    "rest_min": 779.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-26",
    "water_ml": 296.1,
    "food_g": 81.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 47.2,
    "litter_output_g": 182.2,
    "weight_kg": 4.771,
    "rest_min": 775.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-27",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "lena",
    "date": "2026-10-28",
    "water_ml": 331.2,
    "food_g": 79.5,
    "litter_visits": 5.0,
    "litter_avg_sec": 58.4,
    "litter_output_g": 185.2,
    "weight_kg": 4.767,
    "rest_min": 882.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-29",
    "water_ml": 334.9,
    "food_g": 77.4,
    "litter_visits": 6.0,
    "litter_avg_sec": 54.2,
    "litter_output_g": 215.2,
    "weight_kg": 4.734,
    "rest_min": 878.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-30",
    "water_ml": 328.0,
    "food_g": 74.6,
    "litter_visits": 5.0,
    "litter_avg_sec": 47.8,
    "litter_output_g": 218.5,
    "weight_kg": 4.727,
    "rest_min": 789.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-10-31",
    "water_ml": 360.0,
    "food_g": 78.3,
    "litter_visits": 6.0,
    "litter_avg_sec": 58.5,
    "litter_output_g": 224.7,
    "weight_kg": 4.724,
    "rest_min": 867.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-11-01",
    "water_ml": 333.8,
    "food_g": 83.2,
    "litter_visits": 7.0,
    "litter_avg_sec": 45.7,
    "litter_output_g": 222.8,
    "weight_kg": 4.745,
    "rest_min": 935.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-11-02",
    "water_ml": 354.6,
    "food_g": 85.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 56.2,
    "litter_output_g": 259.4,
    "weight_kg": 4.741,
    "rest_min": 899.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-11-03",
    "water_ml": 359.9,
    "food_g": 85.2,
    "litter_visits": 7.0,
    "litter_avg_sec": 51.4,
    "litter_output_g": 235.2,
    "weight_kg": 4.746,
    "rest_min": 786.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-11-04",
    "water_ml": 387.2,
    "food_g": 76.5,
    "litter_visits": 7.0,
    "litter_avg_sec": 51.6,
    "litter_output_g": 260.6,
    "weight_kg": 4.7,
    "rest_min": 858.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-11-05",
    "water_ml": 383.1,
    "food_g": 73.8,
    "litter_visits": 7.0,
    "litter_avg_sec": 59.9,
    "litter_output_g": 263.3,
    "weight_kg": 4.717,
    "rest_min": 844.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-11-06",
    "water_ml": 442.9,
    "food_g": 80.7,
    "litter_visits": 7.0,
    "litter_avg_sec": 52.9,
    "litter_output_g": 219.3,
    "weight_kg": 4.715,
    "rest_min": 879.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-11-07",
    "water_ml": 413.9,
    "food_g": 80.0,
    "litter_visits": 6.0,
    "litter_avg_sec": 58.0,
    "litter_output_g": 267.5,
    "weight_kg": 4.698,
    "rest_min": 831.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "lena",
    "date": "2026-11-08",
    "water_ml": 442.3,
    "food_g": 85.2,
    "litter_visits": 8.0,
    "litter_avg_sec": 53.8,
    "litter_output_g": 305.1,
    "weight_kg": 4.683,
    "rest_min": 858.3,
    "sleep_breaths": null,
    "data_ok": true
   }
  ],
  "oscar": [
   {
    "cat_id": "oscar",
    "date": "2026-09-10",
    "water_ml": 280.9,
    "food_g": 88.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 66.0,
    "litter_output_g": 147.9,
    "weight_kg": 5.391,
    "rest_min": 417.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-11",
    "water_ml": 263.1,
    "food_g": 92.6,
    "litter_visits": 5.0,
    "litter_avg_sec": 53.6,
    "litter_output_g": 162.2,
    "weight_kg": 5.403,
    "rest_min": 858.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-12",
    "water_ml": 269.5,
    "food_g": 89.9,
    "litter_visits": 4.0,
    "litter_avg_sec": 65.0,
    "litter_output_g": 176.0,
    "weight_kg": 5.404,
    "rest_min": 962.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-13",
    "water_ml": 274.9,
    "food_g": 88.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 52.8,
    "litter_output_g": 186.7,
    "weight_kg": 5.412,
    "rest_min": 830.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-14",
    "water_ml": 294.9,
    "food_g": 94.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 53.3,
    "litter_output_g": 185.3,
    "weight_kg": 5.382,
    "rest_min": 874.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-15",
    "water_ml": 279.9,
    "food_g": 93.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 54.2,
    "litter_output_g": 170.5,
    "weight_kg": 5.403,
    "rest_min": 916.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-16",
    "water_ml": 247.0,
    "food_g": 85.1,
    "litter_visits": 4.0,
    "litter_avg_sec": 51.5,
    "litter_output_g": 158.7,
    "weight_kg": 5.385,
    "rest_min": 798.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-17",
    "water_ml": 252.0,
    "food_g": 92.4,
    "litter_visits": 3.0,
    "litter_avg_sec": 51.0,
    "litter_output_g": 177.2,
    "weight_kg": 5.417,
    "rest_min": 921.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-18",
    "water_ml": 247.7,
    "food_g": 84.8,
    "litter_visits": 5.0,
    "litter_avg_sec": 54.8,
    "litter_output_g": 172.5,
    "weight_kg": 5.404,
    "rest_min": 985.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-19",
    "water_ml": 278.4,
    "food_g": 84.9,
    "litter_visits": 5.0,
    "litter_avg_sec": 50.4,
    "litter_output_g": 148.5,
    "weight_kg": 5.373,
    "rest_min": 890.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-20",
    "water_ml": 291.6,
    "food_g": 95.0,
    "litter_visits": 5.0,
    "litter_avg_sec": 64.6,
    "litter_output_g": 139.6,
    "weight_kg": 5.398,
    "rest_min": 854.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-21",
    "water_ml": 296.0,
    "food_g": 87.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 64.0,
    "litter_output_g": 144.7,
    "weight_kg": 5.378,
    "rest_min": 848.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-22",
    "water_ml": 259.6,
    "food_g": 99.4,
    "litter_visits": 5.0,
    "litter_avg_sec": 54.0,
    "litter_output_g": 173.0,
    "weight_kg": 5.404,
    "rest_min": 992.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-23",
    "water_ml": 244.0,
    "food_g": 83.1,
    "litter_visits": 4.0,
    "litter_avg_sec": 51.2,
    "litter_output_g": 188.6,
    "weight_kg": 5.386,
    "rest_min": 938.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-24",
    "water_ml": 282.7,
    "food_g": 94.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 54.5,
    "litter_output_g": 174.0,
    "weight_kg": 5.408,
    "rest_min": 869.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-25",
    "water_ml": 275.9,
    "food_g": 95.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 65.7,
    "litter_output_g": 140.9,
    "weight_kg": 5.418,
    "rest_min": 792.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-26",
    "water_ml": 286.8,
    "food_g": 89.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 65.7,
    "litter_output_g": 181.0,
    "weight_kg": 5.378,
    "rest_min": 883.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-27",
    "water_ml": 280.9,
    "food_g": 97.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 60.0,
    "litter_output_g": 166.5,
    "weight_kg": 5.393,
    "rest_min": 998.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-28",
    "water_ml": 256.4,
    "food_g": 96.8,
    "litter_visits": 5.0,
    "litter_avg_sec": 65.4,
    "litter_output_g": 179.0,
    "weight_kg": 5.383,
    "rest_min": 993.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-29",
    "water_ml": 261.6,
    "food_g": 90.1,
    "litter_visits": 5.0,
    "litter_avg_sec": 61.0,
    "litter_output_g": 149.4,
    "weight_kg": 5.401,
    "rest_min": 922.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-09-30",
    "water_ml": 252.8,
    "food_g": 89.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 62.0,
    "litter_output_g": 162.5,
    "weight_kg": 5.422,
    "rest_min": 882.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-01",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-02",
    "water_ml": 258.1,
    "food_g": 96.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 56.0,
    "litter_output_g": 157.3,
    "weight_kg": 5.414,
    "rest_min": 995.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-03",
    "water_ml": 252.5,
    "food_g": 98.3,
    "litter_visits": 5.0,
    "litter_avg_sec": 54.6,
    "litter_output_g": 176.1,
    "weight_kg": 5.391,
    "rest_min": 929.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-04",
    "water_ml": 258.4,
    "food_g": 92.2,
    "litter_visits": 3.0,
    "litter_avg_sec": 65.0,
    "litter_output_g": 166.7,
    "weight_kg": 5.394,
    "rest_min": 949.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-05",
    "water_ml": 268.6,
    "food_g": 87.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 62.0,
    "litter_output_g": 149.6,
    "weight_kg": 5.416,
    "rest_min": 876.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-06",
    "water_ml": 273.6,
    "food_g": 91.0,
    "litter_visits": 3.0,
    "litter_avg_sec": 54.7,
    "litter_output_g": 173.3,
    "weight_kg": 5.374,
    "rest_min": 892.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-07",
    "water_ml": 257.3,
    "food_g": 96.5,
    "litter_visits": 5.0,
    "litter_avg_sec": 58.2,
    "litter_output_g": 187.4,
    "weight_kg": 5.395,
    "rest_min": 835.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-08",
    "water_ml": 229.7,
    "food_g": 87.7,
    "litter_visits": 5.0,
    "litter_avg_sec": 54.6,
    "litter_output_g": 151.2,
    "weight_kg": 5.375,
    "rest_min": 886.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-09",
    "water_ml": 278.0,
    "food_g": 95.2,
    "litter_visits": 3.0,
    "litter_avg_sec": 50.7,
    "litter_output_g": 178.6,
    "weight_kg": 5.393,
    "rest_min": 973.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-10",
    "water_ml": 248.1,
    "food_g": 97.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 62.5,
    "litter_output_g": 161.8,
    "weight_kg": 5.379,
    "rest_min": 876.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-11",
    "water_ml": 256.9,
    "food_g": 94.7,
    "litter_visits": 5.0,
    "litter_avg_sec": 50.0,
    "litter_output_g": 180.4,
    "weight_kg": 5.419,
    "rest_min": 845.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-12",
    "water_ml": 256.9,
    "food_g": 85.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 59.0,
    "litter_output_g": 147.7,
    "weight_kg": 5.425,
    "rest_min": 934.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-13",
    "water_ml": 243.2,
    "food_g": 93.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 53.8,
    "litter_output_g": 153.6,
    "weight_kg": 5.402,
    "rest_min": 822.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-14",
    "water_ml": 270.9,
    "food_g": 87.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 55.7,
    "litter_output_g": 185.5,
    "weight_kg": 5.424,
    "rest_min": 823.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-15",
    "water_ml": 276.6,
    "food_g": 91.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 59.0,
    "litter_output_g": 146.5,
    "weight_kg": 5.406,
    "rest_min": 840.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-16",
    "water_ml": 259.1,
    "food_g": 91.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 60.5,
    "litter_output_g": 177.2,
    "weight_kg": 5.408,
    "rest_min": 821.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-17",
    "water_ml": 294.9,
    "food_g": 84.3,
    "litter_visits": 5.0,
    "litter_avg_sec": 54.2,
    "litter_output_g": 164.5,
    "weight_kg": 5.419,
    "rest_min": 850.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-18",
    "water_ml": 266.9,
    "food_g": 88.7,
    "litter_visits": 5.0,
    "litter_avg_sec": 50.6,
    "litter_output_g": 182.7,
    "weight_kg": 5.417,
    "rest_min": 851.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-19",
    "water_ml": 294.1,
    "food_g": 93.8,
    "litter_visits": 5.0,
    "litter_avg_sec": 58.8,
    "litter_output_g": 157.9,
    "weight_kg": 5.399,
    "rest_min": 896.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-20",
    "water_ml": 295.5,
    "food_g": 92.0,
    "litter_visits": 5.0,
    "litter_avg_sec": 60.6,
    "litter_output_g": 161.5,
    "weight_kg": 5.399,
    "rest_min": 963.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-21",
    "water_ml": 294.0,
    "food_g": 93.4,
    "litter_visits": 3.0,
    "litter_avg_sec": 60.7,
    "litter_output_g": 161.8,
    "weight_kg": 5.406,
    "rest_min": 860.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-22",
    "water_ml": 293.5,
    "food_g": 85.5,
    "litter_visits": 5.0,
    "litter_avg_sec": 52.4,
    "litter_output_g": 151.5,
    "weight_kg": 5.375,
    "rest_min": 853.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-23",
    "water_ml": 270.2,
    "food_g": 84.4,
    "litter_visits": 5.0,
    "litter_avg_sec": 58.2,
    "litter_output_g": 155.4,
    "weight_kg": 5.38,
    "rest_min": 848.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-24",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-25",
    "water_ml": 275.5,
    "food_g": 87.0,
    "litter_visits": 3.0,
    "litter_avg_sec": 49.0,
    "litter_output_g": 172.0,
    "weight_kg": 5.388,
    "rest_min": 883.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-26",
    "water_ml": 266.2,
    "food_g": 84.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 60.3,
    "litter_output_g": 167.0,
    "weight_kg": 5.411,
    "rest_min": 942.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-27",
    "water_ml": 279.7,
    "food_g": 84.0,
    "litter_visits": 5.0,
    "litter_avg_sec": 55.4,
    "litter_output_g": 159.2,
    "weight_kg": 5.375,
    "rest_min": 899.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-28",
    "water_ml": 274.7,
    "food_g": 90.6,
    "litter_visits": 5.0,
    "litter_avg_sec": 60.8,
    "litter_output_g": 163.3,
    "weight_kg": 5.412,
    "rest_min": 903.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-29",
    "water_ml": 258.8,
    "food_g": 86.4,
    "litter_visits": 5.0,
    "litter_avg_sec": 66.6,
    "litter_output_g": 174.9,
    "weight_kg": 5.408,
    "rest_min": 864.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-30",
    "water_ml": 244.5,
    "food_g": 84.9,
    "litter_visits": 4.0,
    "litter_avg_sec": 51.8,
    "litter_output_g": 154.5,
    "weight_kg": 5.419,
    "rest_min": 946.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-10-31",
    "water_ml": 285.4,
    "food_g": 92.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 62.5,
    "litter_output_g": 187.7,
    "weight_kg": 5.381,
    "rest_min": 803.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-11-01",
    "water_ml": 267.6,
    "food_g": 91.2,
    "litter_visits": 4.0,
    "litter_avg_sec": 50.2,
    "litter_output_g": 156.1,
    "weight_kg": 5.378,
    "rest_min": 910.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-11-02",
    "water_ml": 250.2,
    "food_g": 95.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 66.5,
    "litter_output_g": 173.9,
    "weight_kg": 5.413,
    "rest_min": 941.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-11-03",
    "water_ml": 280.0,
    "food_g": 93.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 53.0,
    "litter_output_g": 186.4,
    "weight_kg": 5.406,
    "rest_min": 894.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-11-04",
    "water_ml": 257.5,
    "food_g": 95.6,
    "litter_visits": 3.0,
    "litter_avg_sec": 55.3,
    "litter_output_g": 161.6,
    "weight_kg": 5.388,
    "rest_min": 909.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-11-05",
    "water_ml": 292.0,
    "food_g": 89.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 54.0,
    "litter_output_g": 188.3,
    "weight_kg": 5.406,
    "rest_min": 909.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-11-06",
    "water_ml": 289.6,
    "food_g": 88.4,
    "litter_visits": 5.0,
    "litter_avg_sec": 65.6,
    "litter_output_g": 190.0,
    "weight_kg": 5.388,
    "rest_min": 819.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-11-07",
    "water_ml": 290.6,
    "food_g": 97.1,
    "litter_visits": 16.0,
    "litter_avg_sec": 16.4,
    "litter_output_g": 4.9,
    "weight_kg": 5.408,
    "rest_min": 821.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "oscar",
    "date": "2026-11-08",
    "water_ml": 250.9,
    "food_g": 90.7,
    "litter_visits": 20.0,
    "litter_avg_sec": 16.7,
    "litter_output_g": 6.1,
    "weight_kg": 5.403,
    "rest_min": 840.3,
    "sleep_breaths": null,
    "data_ok": true
   }
  ],
  "bella": [
   {
    "cat_id": "bella",
    "date": "2026-09-10",
    "water_ml": 214.1,
    "food_g": 70.4,
    "litter_visits": 3.0,
    "litter_avg_sec": 41.0,
    "litter_output_g": 122.0,
    "weight_kg": 4.398,
    "rest_min": 403.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-11",
    "water_ml": 231.2,
    "food_g": 72.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 44.3,
    "litter_output_g": 132.4,
    "weight_kg": 4.406,
    "rest_min": 744.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-12",
    "water_ml": 233.8,
    "food_g": 68.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 47.0,
    "litter_output_g": 113.9,
    "weight_kg": 4.397,
    "rest_min": 768.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-13",
    "water_ml": 203.1,
    "food_g": 73.1,
    "litter_visits": 4.0,
    "litter_avg_sec": 54.8,
    "litter_output_g": 128.0,
    "weight_kg": 4.419,
    "rest_min": 797.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-14",
    "water_ml": 237.0,
    "food_g": 63.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 45.5,
    "litter_output_g": 139.4,
    "weight_kg": 4.419,
    "rest_min": 776.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-15",
    "water_ml": 207.0,
    "food_g": 76.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 45.5,
    "litter_output_g": 132.8,
    "weight_kg": 4.397,
    "rest_min": 906.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-16",
    "water_ml": 221.3,
    "food_g": 71.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 46.8,
    "litter_output_g": 118.8,
    "weight_kg": 4.418,
    "rest_min": 877.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-17",
    "water_ml": 222.7,
    "food_g": 78.5,
    "litter_visits": 2.0,
    "litter_avg_sec": 54.0,
    "litter_output_g": 132.1,
    "weight_kg": 4.395,
    "rest_min": 888.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-18",
    "water_ml": 213.5,
    "food_g": 77.3,
    "litter_visits": 2.0,
    "litter_avg_sec": 45.5,
    "litter_output_g": 131.8,
    "weight_kg": 4.398,
    "rest_min": 903.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-19",
    "water_ml": 220.4,
    "food_g": 64.6,
    "litter_visits": 2.0,
    "litter_avg_sec": 44.5,
    "litter_output_g": 121.6,
    "weight_kg": 4.416,
    "rest_min": 773.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-20",
    "water_ml": 213.6,
    "food_g": 75.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 52.0,
    "litter_output_g": 135.4,
    "weight_kg": 4.387,
    "rest_min": 767.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-21",
    "water_ml": 228.9,
    "food_g": 69.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 42.7,
    "litter_output_g": 136.4,
    "weight_kg": 4.399,
    "rest_min": 884.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-22",
    "water_ml": 241.5,
    "food_g": 75.6,
    "litter_visits": 2.0,
    "litter_avg_sec": 53.0,
    "litter_output_g": 139.4,
    "weight_kg": 4.418,
    "rest_min": 943.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-23",
    "water_ml": 218.2,
    "food_g": 74.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 54.5,
    "litter_output_g": 139.1,
    "weight_kg": 4.396,
    "rest_min": 906.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-24",
    "water_ml": 236.0,
    "food_g": 71.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 51.0,
    "litter_output_g": 114.2,
    "weight_kg": 4.398,
    "rest_min": 912.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-25",
    "water_ml": 208.5,
    "food_g": 74.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 45.8,
    "litter_output_g": 146.9,
    "weight_kg": 4.386,
    "rest_min": 883.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-26",
    "water_ml": 216.3,
    "food_g": 70.1,
    "litter_visits": 2.0,
    "litter_avg_sec": 53.5,
    "litter_output_g": 113.3,
    "weight_kg": 4.411,
    "rest_min": 755.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-27",
    "water_ml": 216.6,
    "food_g": 69.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 52.0,
    "litter_output_g": 134.9,
    "weight_kg": 4.406,
    "rest_min": 757.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-28",
    "water_ml": 241.0,
    "food_g": 71.3,
    "litter_visits": 2.0,
    "litter_avg_sec": 46.0,
    "litter_output_g": 121.5,
    "weight_kg": 4.401,
    "rest_min": 798.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-29",
    "water_ml": 221.5,
    "food_g": 76.0,
    "litter_visits": 3.0,
    "litter_avg_sec": 41.0,
    "litter_output_g": 130.2,
    "weight_kg": 4.416,
    "rest_min": 887.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-09-30",
    "water_ml": 210.9,
    "food_g": 78.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 41.8,
    "litter_output_g": 148.1,
    "weight_kg": 4.406,
    "rest_min": 749.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-01",
    "water_ml": 219.7,
    "food_g": 71.3,
    "litter_visits": 2.0,
    "litter_avg_sec": 49.0,
    "litter_output_g": 126.4,
    "weight_kg": 4.384,
    "rest_min": 801.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-02",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "bella",
    "date": "2026-10-03",
    "water_ml": 219.6,
    "food_g": 71.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 40.7,
    "litter_output_g": 130.2,
    "weight_kg": 4.393,
    "rest_min": 773.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-04",
    "water_ml": 209.5,
    "food_g": 68.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 45.7,
    "litter_output_g": 138.2,
    "weight_kg": 4.397,
    "rest_min": 752.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-05",
    "water_ml": 205.9,
    "food_g": 75.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 53.0,
    "litter_output_g": 145.6,
    "weight_kg": 4.401,
    "rest_min": 765.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-06",
    "water_ml": 230.4,
    "food_g": 73.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 46.0,
    "litter_output_g": 112.2,
    "weight_kg": 4.381,
    "rest_min": 804.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-07",
    "water_ml": 241.0,
    "food_g": 76.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 49.7,
    "litter_output_g": 146.8,
    "weight_kg": 4.397,
    "rest_min": 926.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-08",
    "water_ml": 204.3,
    "food_g": 69.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 49.0,
    "litter_output_g": 146.9,
    "weight_kg": 4.396,
    "rest_min": 812.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-09",
    "water_ml": 226.9,
    "food_g": 74.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 53.5,
    "litter_output_g": 114.4,
    "weight_kg": 4.406,
    "rest_min": 765.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-10",
    "water_ml": 217.9,
    "food_g": 73.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 41.0,
    "litter_output_g": 127.1,
    "weight_kg": 4.394,
    "rest_min": 779.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-11",
    "water_ml": 220.4,
    "food_g": 71.9,
    "litter_visits": 2.0,
    "litter_avg_sec": 50.5,
    "litter_output_g": 119.8,
    "weight_kg": 4.409,
    "rest_min": 789.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-12",
    "water_ml": 225.0,
    "food_g": 67.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 46.3,
    "litter_output_g": 136.3,
    "weight_kg": 4.41,
    "rest_min": 919.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-13",
    "water_ml": 220.9,
    "food_g": 73.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 48.2,
    "litter_output_g": 130.1,
    "weight_kg": 4.403,
    "rest_min": 889.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-14",
    "water_ml": 236.7,
    "food_g": 75.5,
    "litter_visits": 2.0,
    "litter_avg_sec": 55.0,
    "litter_output_g": 113.8,
    "weight_kg": 4.406,
    "rest_min": 813.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-15",
    "water_ml": 229.1,
    "food_g": 72.5,
    "litter_visits": 2.0,
    "litter_avg_sec": 46.5,
    "litter_output_g": 116.5,
    "weight_kg": 4.408,
    "rest_min": 901.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-16",
    "water_ml": 230.7,
    "food_g": 77.1,
    "litter_visits": 4.0,
    "litter_avg_sec": 41.8,
    "litter_output_g": 112.8,
    "weight_kg": 4.397,
    "rest_min": 899.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-17",
    "water_ml": 219.1,
    "food_g": 68.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 52.3,
    "litter_output_g": 121.7,
    "weight_kg": 4.411,
    "rest_min": 812.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-18",
    "water_ml": 229.2,
    "food_g": 64.9,
    "litter_visits": 3.0,
    "litter_avg_sec": 45.3,
    "litter_output_g": 141.4,
    "weight_kg": 4.382,
    "rest_min": 775.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-19",
    "water_ml": 218.4,
    "food_g": 72.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 49.3,
    "litter_output_g": 114.7,
    "weight_kg": 4.366,
    "rest_min": 818.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-20",
    "water_ml": 256.6,
    "food_g": 77.5,
    "litter_visits": 2.0,
    "litter_avg_sec": 52.5,
    "litter_output_g": 157.9,
    "weight_kg": 4.362,
    "rest_min": 901.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-21",
    "water_ml": 224.0,
    "food_g": 73.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 51.0,
    "litter_output_g": 131.5,
    "weight_kg": 4.37,
    "rest_min": 873.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-22",
    "water_ml": 249.6,
    "food_g": 83.4,
    "litter_visits": 2.0,
    "litter_avg_sec": 53.0,
    "litter_output_g": 154.4,
    "weight_kg": 4.337,
    "rest_min": 911.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-23",
    "water_ml": 237.0,
    "food_g": 75.0,
    "litter_visits": 3.0,
    "litter_avg_sec": 53.0,
    "litter_output_g": 168.1,
    "weight_kg": 4.324,
    "rest_min": 909.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-24",
    "water_ml": 272.2,
    "food_g": 77.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 53.3,
    "litter_output_g": 139.7,
    "weight_kg": 4.335,
    "rest_min": 824.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-25",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "bella",
    "date": "2026-10-26",
    "water_ml": 291.1,
    "food_g": 85.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 52.3,
    "litter_output_g": 160.7,
    "weight_kg": 4.295,
    "rest_min": 836.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-27",
    "water_ml": 329.4,
    "food_g": 81.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 42.0,
    "litter_output_g": 199.2,
    "weight_kg": 4.279,
    "rest_min": 824.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-28",
    "water_ml": 292.5,
    "food_g": 86.0,
    "litter_visits": 5.0,
    "litter_avg_sec": 55.0,
    "litter_output_g": 202.3,
    "weight_kg": 4.261,
    "rest_min": 761.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-29",
    "water_ml": 324.0,
    "food_g": 91.8,
    "litter_visits": 5.0,
    "litter_avg_sec": 52.0,
    "litter_output_g": 201.7,
    "weight_kg": 4.26,
    "rest_min": 850.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-30",
    "water_ml": 346.8,
    "food_g": 86.8,
    "litter_visits": 5.0,
    "litter_avg_sec": 45.4,
    "litter_output_g": 177.2,
    "weight_kg": 4.225,
    "rest_min": 887.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-10-31",
    "water_ml": 310.6,
    "food_g": 86.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 44.2,
    "litter_output_g": 183.8,
    "weight_kg": 4.213,
    "rest_min": 940.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-11-01",
    "water_ml": 388.0,
    "food_g": 92.0,
    "litter_visits": 3.0,
    "litter_avg_sec": 44.0,
    "litter_output_g": 220.7,
    "weight_kg": 4.21,
    "rest_min": 864.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-11-02",
    "water_ml": 335.2,
    "food_g": 101.5,
    "litter_visits": 6.0,
    "litter_avg_sec": 44.3,
    "litter_output_g": 200.8,
    "weight_kg": 4.195,
    "rest_min": 776.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-11-03",
    "water_ml": 355.9,
    "food_g": 104.3,
    "litter_visits": 6.0,
    "litter_avg_sec": 52.3,
    "litter_output_g": 232.7,
    "weight_kg": 4.207,
    "rest_min": 845.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-11-04",
    "water_ml": 387.1,
    "food_g": 105.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 46.0,
    "litter_output_g": 232.7,
    "weight_kg": 4.183,
    "rest_min": 765.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-11-05",
    "water_ml": 413.5,
    "food_g": 99.6,
    "litter_visits": 3.0,
    "litter_avg_sec": 42.3,
    "litter_output_g": 233.2,
    "weight_kg": 4.151,
    "rest_min": 780.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-11-06",
    "water_ml": 391.6,
    "food_g": 104.4,
    "litter_visits": 7.0,
    "litter_avg_sec": 54.4,
    "litter_output_g": 242.9,
    "weight_kg": 4.136,
    "rest_min": 792.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-11-07",
    "water_ml": 425.3,
    "food_g": 111.2,
    "litter_visits": 5.0,
    "litter_avg_sec": 51.4,
    "litter_output_g": 257.6,
    "weight_kg": 4.16,
    "rest_min": 804.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "bella",
    "date": "2026-11-08",
    "water_ml": 456.0,
    "food_g": 118.3,
    "litter_visits": 5.0,
    "litter_avg_sec": 44.0,
    "litter_output_g": 265.8,
    "weight_kg": 4.114,
    "rest_min": 804.4,
    "sleep_breaths": null,
    "data_ok": true
   }
  ],
  "milo": [
   {
    "cat_id": "milo",
    "date": "2026-09-10",
    "water_ml": 182.5,
    "food_g": 63.9,
    "litter_visits": 2.0,
    "litter_avg_sec": 48.5,
    "litter_output_g": 119.0,
    "weight_kg": 3.994,
    "rest_min": 425.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-11",
    "water_ml": 186.5,
    "food_g": 61.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 46.0,
    "litter_output_g": 121.9,
    "weight_kg": 4.019,
    "rest_min": 862.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-12",
    "water_ml": 180.9,
    "food_g": 65.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 37.5,
    "litter_output_g": 119.6,
    "weight_kg": 4.009,
    "rest_min": 973.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-13",
    "water_ml": 218.6,
    "food_g": 70.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 39.0,
    "litter_output_g": 99.8,
    "weight_kg": 3.991,
    "rest_min": 991.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-14",
    "water_ml": 214.7,
    "food_g": 64.9,
    "litter_visits": 2.0,
    "litter_avg_sec": 37.5,
    "litter_output_g": 125.0,
    "weight_kg": 4.015,
    "rest_min": 1010.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-15",
    "water_ml": 200.0,
    "food_g": 68.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 38.8,
    "litter_output_g": 125.4,
    "weight_kg": 3.983,
    "rest_min": 968.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-16",
    "water_ml": 182.2,
    "food_g": 68.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 42.7,
    "litter_output_g": 118.0,
    "weight_kg": 4.018,
    "rest_min": 886.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-17",
    "water_ml": 182.7,
    "food_g": 67.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 37.5,
    "litter_output_g": 119.4,
    "weight_kg": 4.011,
    "rest_min": 890.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-18",
    "water_ml": 183.9,
    "food_g": 62.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 43.5,
    "litter_output_g": 101.4,
    "weight_kg": 4.01,
    "rest_min": 940.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-19",
    "water_ml": 218.2,
    "food_g": 67.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 45.2,
    "litter_output_g": 119.7,
    "weight_kg": 4.017,
    "rest_min": 834.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-20",
    "water_ml": 198.1,
    "food_g": 68.1,
    "litter_visits": 2.0,
    "litter_avg_sec": 49.0,
    "litter_output_g": 100.6,
    "weight_kg": 4.004,
    "rest_min": 864.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-21",
    "water_ml": 204.5,
    "food_g": 64.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 40.7,
    "litter_output_g": 101.0,
    "weight_kg": 4.007,
    "rest_min": 853.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-22",
    "water_ml": 203.7,
    "food_g": 65.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 44.5,
    "litter_output_g": 119.1,
    "weight_kg": 4.007,
    "rest_min": 924.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-23",
    "water_ml": 214.7,
    "food_g": 67.7,
    "litter_visits": 4.0,
    "litter_avg_sec": 44.5,
    "litter_output_g": 127.5,
    "weight_kg": 4.018,
    "rest_min": 923.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-24",
    "water_ml": 203.3,
    "food_g": 61.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 45.0,
    "litter_output_g": 108.1,
    "weight_kg": 4.002,
    "rest_min": 844.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-25",
    "water_ml": 194.9,
    "food_g": 57.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 36.7,
    "litter_output_g": 119.1,
    "weight_kg": 4.01,
    "rest_min": 843.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-26",
    "water_ml": 184.2,
    "food_g": 64.7,
    "litter_visits": 4.0,
    "litter_avg_sec": 39.0,
    "litter_output_g": 116.4,
    "weight_kg": 4.011,
    "rest_min": 834.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-27",
    "water_ml": 202.1,
    "food_g": 63.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 48.0,
    "litter_output_g": 106.6,
    "weight_kg": 4.019,
    "rest_min": 880.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-28",
    "water_ml": 212.6,
    "food_g": 60.6,
    "litter_visits": 2.0,
    "litter_avg_sec": 45.0,
    "litter_output_g": 106.2,
    "weight_kg": 4.015,
    "rest_min": 923.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-29",
    "water_ml": 221.7,
    "food_g": 60.1,
    "litter_visits": 4.0,
    "litter_avg_sec": 46.8,
    "litter_output_g": 97.6,
    "weight_kg": 3.994,
    "rest_min": 929.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-09-30",
    "water_ml": 207.8,
    "food_g": 69.5,
    "litter_visits": 2.0,
    "litter_avg_sec": 44.5,
    "litter_output_g": 103.5,
    "weight_kg": 4.011,
    "rest_min": 906.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-01",
    "water_ml": 199.1,
    "food_g": 67.3,
    "litter_visits": 2.0,
    "litter_avg_sec": 48.0,
    "litter_output_g": 109.4,
    "weight_kg": 4.011,
    "rest_min": 823.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-02",
    "water_ml": 215.9,
    "food_g": 63.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 48.2,
    "litter_output_g": 132.3,
    "weight_kg": 4.013,
    "rest_min": 961.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-03",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "milo",
    "date": "2026-10-04",
    "water_ml": 189.6,
    "food_g": 68.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 43.8,
    "litter_output_g": 107.2,
    "weight_kg": 3.991,
    "rest_min": 863.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-05",
    "water_ml": 183.1,
    "food_g": 70.0,
    "litter_visits": 3.0,
    "litter_avg_sec": 49.0,
    "litter_output_g": 115.0,
    "weight_kg": 3.98,
    "rest_min": 816.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-06",
    "water_ml": 219.8,
    "food_g": 65.1,
    "litter_visits": 4.0,
    "litter_avg_sec": 38.8,
    "litter_output_g": 108.0,
    "weight_kg": 3.985,
    "rest_min": 889.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-07",
    "water_ml": 217.9,
    "food_g": 66.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 40.7,
    "litter_output_g": 124.9,
    "weight_kg": 3.997,
    "rest_min": 898.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-08",
    "water_ml": 189.1,
    "food_g": 64.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 43.3,
    "litter_output_g": 105.3,
    "weight_kg": 4.018,
    "rest_min": 820.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-09",
    "water_ml": 216.4,
    "food_g": 68.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 48.3,
    "litter_output_g": 106.5,
    "weight_kg": 4.008,
    "rest_min": 874.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-10",
    "water_ml": 211.2,
    "food_g": 70.2,
    "litter_visits": 4.0,
    "litter_avg_sec": 42.0,
    "litter_output_g": 99.6,
    "weight_kg": 4.011,
    "rest_min": 930.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-11",
    "water_ml": 197.8,
    "food_g": 65.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 43.7,
    "litter_output_g": 118.2,
    "weight_kg": 4.017,
    "rest_min": 972.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-12",
    "water_ml": 202.1,
    "food_g": 65.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 39.0,
    "litter_output_g": 121.9,
    "weight_kg": 4.01,
    "rest_min": 994.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-13",
    "water_ml": 211.3,
    "food_g": 63.0,
    "litter_visits": 3.0,
    "litter_avg_sec": 37.0,
    "litter_output_g": 126.5,
    "weight_kg": 4.009,
    "rest_min": 962.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-14",
    "water_ml": 212.4,
    "food_g": 62.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 47.3,
    "litter_output_g": 130.9,
    "weight_kg": 4.0,
    "rest_min": 894.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-15",
    "water_ml": 215.0,
    "food_g": 61.3,
    "litter_visits": 2.0,
    "litter_avg_sec": 46.5,
    "litter_output_g": 102.9,
    "weight_kg": 3.994,
    "rest_min": 860.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-16",
    "water_ml": 181.2,
    "food_g": 66.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 38.5,
    "litter_output_g": 120.9,
    "weight_kg": 3.981,
    "rest_min": 857.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-17",
    "water_ml": 205.7,
    "food_g": 62.1,
    "litter_visits": 2.0,
    "litter_avg_sec": 38.5,
    "litter_output_g": 124.1,
    "weight_kg": 4.016,
    "rest_min": 852.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-18",
    "water_ml": 194.5,
    "food_g": 60.6,
    "litter_visits": 3.0,
    "litter_avg_sec": 47.3,
    "litter_output_g": 108.1,
    "weight_kg": 3.987,
    "rest_min": 985.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-19",
    "water_ml": 182.6,
    "food_g": 72.6,
    "litter_visits": 2.0,
    "litter_avg_sec": 46.5,
    "litter_output_g": 116.8,
    "weight_kg": 4.008,
    "rest_min": 1020.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-20",
    "water_ml": 199.5,
    "food_g": 71.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 38.5,
    "litter_output_g": 107.4,
    "weight_kg": 3.956,
    "rest_min": 992.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-21",
    "water_ml": 213.8,
    "food_g": 66.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 41.5,
    "litter_output_g": 101.6,
    "weight_kg": 3.966,
    "rest_min": 916.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-22",
    "water_ml": 191.1,
    "food_g": 72.5,
    "litter_visits": 2.0,
    "litter_avg_sec": 47.5,
    "litter_output_g": 117.0,
    "weight_kg": 3.953,
    "rest_min": 901.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-23",
    "water_ml": 217.4,
    "food_g": 69.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 43.0,
    "litter_output_g": 126.7,
    "weight_kg": 3.946,
    "rest_min": 908.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-24",
    "water_ml": 218.3,
    "food_g": 76.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 49.7,
    "litter_output_g": 121.0,
    "weight_kg": 3.919,
    "rest_min": 779.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-25",
    "water_ml": 211.3,
    "food_g": 83.4,
    "litter_visits": 2.0,
    "litter_avg_sec": 36.5,
    "litter_output_g": 111.5,
    "weight_kg": 3.905,
    "rest_min": 820.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-26",
    "water_ml": 230.4,
    "food_g": 87.4,
    "litter_visits": 2.0,
    "litter_avg_sec": 42.0,
    "litter_output_g": 109.4,
    "weight_kg": 3.892,
    "rest_min": 817.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-27",
    "water_ml": 225.0,
    "food_g": 75.4,
    "litter_visits": 2.0,
    "litter_avg_sec": 43.5,
    "litter_output_g": 126.6,
    "weight_kg": 3.903,
    "rest_min": 852.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-28",
    "water_ml": 203.5,
    "food_g": 88.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 47.7,
    "litter_output_g": 114.0,
    "weight_kg": 3.891,
    "rest_min": 851.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-29",
    "water_ml": 231.7,
    "food_g": 87.1,
    "litter_visits": 2.0,
    "litter_avg_sec": 43.5,
    "litter_output_g": 128.5,
    "weight_kg": 3.885,
    "rest_min": 790.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-30",
    "water_ml": 239.6,
    "food_g": 84.9,
    "litter_visits": 4.0,
    "litter_avg_sec": 43.8,
    "litter_output_g": 125.7,
    "weight_kg": 3.842,
    "rest_min": 805.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-10-31",
    "water_ml": 222.2,
    "food_g": 88.1,
    "litter_visits": 2.0,
    "litter_avg_sec": 40.5,
    "litter_output_g": 111.8,
    "weight_kg": 3.843,
    "rest_min": 802.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-11-01",
    "water_ml": 222.3,
    "food_g": 91.9,
    "litter_visits": 3.0,
    "litter_avg_sec": 40.0,
    "litter_output_g": 120.1,
    "weight_kg": 3.838,
    "rest_min": 728.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-11-02",
    "water_ml": 251.4,
    "food_g": 92.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 42.3,
    "litter_output_g": 113.6,
    "weight_kg": 3.806,
    "rest_min": 823.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-11-03",
    "water_ml": 236.3,
    "food_g": 91.2,
    "litter_visits": 3.0,
    "litter_avg_sec": 48.7,
    "litter_output_g": 123.4,
    "weight_kg": 3.816,
    "rest_min": 820.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-11-04",
    "water_ml": 240.0,
    "food_g": 101.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 38.0,
    "litter_output_g": 111.6,
    "weight_kg": 3.815,
    "rest_min": 668.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-11-05",
    "water_ml": 253.9,
    "food_g": 109.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 47.3,
    "litter_output_g": 128.4,
    "weight_kg": 3.792,
    "rest_min": 708.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-11-06",
    "water_ml": 252.1,
    "food_g": 103.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 43.2,
    "litter_output_g": 102.2,
    "weight_kg": 3.771,
    "rest_min": 746.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-11-07",
    "water_ml": 242.4,
    "food_g": 112.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 45.0,
    "litter_output_g": 126.0,
    "weight_kg": 3.783,
    "rest_min": 659.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "milo",
    "date": "2026-11-08",
    "water_ml": 235.5,
    "food_g": 105.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 47.3,
    "litter_output_g": 97.1,
    "weight_kg": 3.768,
    "rest_min": 711.5,
    "sleep_breaths": null,
    "data_ok": true
   }
  ],
  "coco": [
   {
    "cat_id": "coco",
    "date": "2026-09-10",
    "water_ml": 172.2,
    "food_g": 55.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 37.7,
    "litter_output_g": 103.7,
    "weight_kg": 3.89,
    "rest_min": 385.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-11",
    "water_ml": 205.0,
    "food_g": 69.0,
    "litter_visits": 2.0,
    "litter_avg_sec": 45.0,
    "litter_output_g": 102.8,
    "weight_kg": 3.904,
    "rest_min": 690.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-12",
    "water_ml": 181.6,
    "food_g": 62.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 42.0,
    "litter_output_g": 107.6,
    "weight_kg": 3.891,
    "rest_min": 705.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-13",
    "water_ml": 204.2,
    "food_g": 62.2,
    "litter_visits": 4.0,
    "litter_avg_sec": 47.5,
    "litter_output_g": 98.9,
    "weight_kg": 3.908,
    "rest_min": 746.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-14",
    "water_ml": 177.6,
    "food_g": 61.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 47.2,
    "litter_output_g": 105.7,
    "weight_kg": 3.914,
    "rest_min": 778.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-15",
    "water_ml": 194.6,
    "food_g": 59.4,
    "litter_visits": 2.0,
    "litter_avg_sec": 39.5,
    "litter_output_g": 125.0,
    "weight_kg": 3.893,
    "rest_min": 756.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-16",
    "water_ml": 203.9,
    "food_g": 67.5,
    "litter_visits": 2.0,
    "litter_avg_sec": 46.5,
    "litter_output_g": 106.8,
    "weight_kg": 3.902,
    "rest_min": 837.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-17",
    "water_ml": 203.1,
    "food_g": 66.5,
    "litter_visits": 2.0,
    "litter_avg_sec": 37.0,
    "litter_output_g": 113.7,
    "weight_kg": 3.901,
    "rest_min": 808.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-18",
    "water_ml": 198.8,
    "food_g": 61.1,
    "litter_visits": 2.0,
    "litter_avg_sec": 46.5,
    "litter_output_g": 113.3,
    "weight_kg": 3.904,
    "rest_min": 840.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-19",
    "water_ml": 180.3,
    "food_g": 59.7,
    "litter_visits": 4.0,
    "litter_avg_sec": 38.0,
    "litter_output_g": 102.5,
    "weight_kg": 3.883,
    "rest_min": 879.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-20",
    "water_ml": 181.1,
    "food_g": 59.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 39.0,
    "litter_output_g": 107.2,
    "weight_kg": 3.913,
    "rest_min": 800.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-21",
    "water_ml": 195.2,
    "food_g": 67.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 43.8,
    "litter_output_g": 109.2,
    "weight_kg": 3.905,
    "rest_min": 697.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-22",
    "water_ml": 197.2,
    "food_g": 60.3,
    "litter_visits": 2.0,
    "litter_avg_sec": 44.5,
    "litter_output_g": 95.9,
    "weight_kg": 3.882,
    "rest_min": 756.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-23",
    "water_ml": 184.7,
    "food_g": 60.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 47.8,
    "litter_output_g": 124.4,
    "weight_kg": 3.884,
    "rest_min": 840.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-24",
    "water_ml": 191.4,
    "food_g": 64.7,
    "litter_visits": 4.0,
    "litter_avg_sec": 37.5,
    "litter_output_g": 113.0,
    "weight_kg": 3.908,
    "rest_min": 835.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-25",
    "water_ml": 189.6,
    "food_g": 58.6,
    "litter_visits": 2.0,
    "litter_avg_sec": 40.5,
    "litter_output_g": 104.4,
    "weight_kg": 3.917,
    "rest_min": 844.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-26",
    "water_ml": 201.3,
    "food_g": 62.1,
    "litter_visits": 4.0,
    "litter_avg_sec": 39.0,
    "litter_output_g": 97.9,
    "weight_kg": 3.904,
    "rest_min": 813.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-27",
    "water_ml": 182.5,
    "food_g": 66.6,
    "litter_visits": 3.0,
    "litter_avg_sec": 41.0,
    "litter_output_g": 97.5,
    "weight_kg": 3.918,
    "rest_min": 836.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-28",
    "water_ml": 198.6,
    "food_g": 63.1,
    "litter_visits": 4.0,
    "litter_avg_sec": 37.5,
    "litter_output_g": 96.8,
    "weight_kg": 3.887,
    "rest_min": 808.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-29",
    "water_ml": 175.0,
    "food_g": 64.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 38.2,
    "litter_output_g": 117.6,
    "weight_kg": 3.894,
    "rest_min": 760.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-09-30",
    "water_ml": 180.3,
    "food_g": 66.4,
    "litter_visits": 3.0,
    "litter_avg_sec": 49.0,
    "litter_output_g": 105.6,
    "weight_kg": 3.882,
    "rest_min": 729.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-01",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "coco",
    "date": "2026-10-02",
    "water_ml": 181.3,
    "food_g": 66.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 43.0,
    "litter_output_g": 111.1,
    "weight_kg": 3.9,
    "rest_min": 769.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-03",
    "water_ml": 202.3,
    "food_g": 66.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 46.0,
    "litter_output_g": 111.9,
    "weight_kg": 3.903,
    "rest_min": 725.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-04",
    "water_ml": 193.3,
    "food_g": 57.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 43.3,
    "litter_output_g": 116.1,
    "weight_kg": 3.905,
    "rest_min": 694.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-05",
    "water_ml": 201.1,
    "food_g": 67.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 46.0,
    "litter_output_g": 103.6,
    "weight_kg": 3.881,
    "rest_min": 717.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-06",
    "water_ml": 195.6,
    "food_g": 64.6,
    "litter_visits": 3.0,
    "litter_avg_sec": 41.7,
    "litter_output_g": 125.6,
    "weight_kg": 3.914,
    "rest_min": 833.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-07",
    "water_ml": 177.8,
    "food_g": 65.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 39.0,
    "litter_output_g": 101.4,
    "weight_kg": 3.914,
    "rest_min": 821.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-08",
    "water_ml": 209.5,
    "food_g": 66.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 38.8,
    "litter_output_g": 110.0,
    "weight_kg": 3.912,
    "rest_min": 698.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-09",
    "water_ml": 173.3,
    "food_g": 61.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 48.7,
    "litter_output_g": 123.3,
    "weight_kg": 3.902,
    "rest_min": 692.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-10",
    "water_ml": 205.1,
    "food_g": 68.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 38.7,
    "litter_output_g": 112.6,
    "weight_kg": 3.895,
    "rest_min": 678.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-11",
    "water_ml": 191.2,
    "food_g": 65.0,
    "litter_visits": 2.0,
    "litter_avg_sec": 48.5,
    "litter_output_g": 105.7,
    "weight_kg": 3.901,
    "rest_min": 730.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-12",
    "water_ml": 192.9,
    "food_g": 65.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 41.5,
    "litter_output_g": 112.1,
    "weight_kg": 3.888,
    "rest_min": 775.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-13",
    "water_ml": 175.2,
    "food_g": 67.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 40.0,
    "litter_output_g": 118.1,
    "weight_kg": 3.919,
    "rest_min": 713.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-14",
    "water_ml": 183.5,
    "food_g": 66.1,
    "litter_visits": 2.0,
    "litter_avg_sec": 43.0,
    "litter_output_g": 112.8,
    "weight_kg": 3.894,
    "rest_min": 784.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-15",
    "water_ml": 180.6,
    "food_g": 67.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 44.2,
    "litter_output_g": 101.8,
    "weight_kg": 3.909,
    "rest_min": 794.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-16",
    "water_ml": 179.5,
    "food_g": 67.3,
    "litter_visits": 2.0,
    "litter_avg_sec": 47.0,
    "litter_output_g": 110.5,
    "weight_kg": 3.909,
    "rest_min": 721.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-17",
    "water_ml": 176.3,
    "food_g": 68.9,
    "litter_visits": 2.0,
    "litter_avg_sec": 43.5,
    "litter_output_g": 94.6,
    "weight_kg": 3.905,
    "rest_min": 738.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-18",
    "water_ml": 190.8,
    "food_g": 66.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 37.5,
    "litter_output_g": 96.9,
    "weight_kg": 3.911,
    "rest_min": 785.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-19",
    "water_ml": 180.6,
    "food_g": 58.9,
    "litter_visits": 2.0,
    "litter_avg_sec": 46.5,
    "litter_output_g": 111.7,
    "weight_kg": 3.901,
    "rest_min": 736.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-20",
    "water_ml": 185.3,
    "food_g": 67.1,
    "litter_visits": 4.0,
    "litter_avg_sec": 36.5,
    "litter_output_g": 124.7,
    "weight_kg": 3.888,
    "rest_min": 852.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-21",
    "water_ml": 184.9,
    "food_g": 57.9,
    "litter_visits": 2.0,
    "litter_avg_sec": 45.5,
    "litter_output_g": 103.2,
    "weight_kg": 3.881,
    "rest_min": 827.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-22",
    "water_ml": 202.6,
    "food_g": 59.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 42.0,
    "litter_output_g": 109.3,
    "weight_kg": 3.866,
    "rest_min": 706.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-23",
    "water_ml": 181.2,
    "food_g": 53.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 49.0,
    "litter_output_g": 108.6,
    "weight_kg": 3.86,
    "rest_min": 725.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-24",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "coco",
    "date": "2026-10-25",
    "water_ml": 204.4,
    "food_g": 57.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 36.5,
    "litter_output_g": 111.0,
    "weight_kg": 3.827,
    "rest_min": 831.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-26",
    "water_ml": 196.7,
    "food_g": 51.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 36.2,
    "litter_output_g": 102.0,
    "weight_kg": 3.822,
    "rest_min": 790.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-27",
    "water_ml": 208.9,
    "food_g": 53.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 43.2,
    "litter_output_g": 103.8,
    "weight_kg": 3.838,
    "rest_min": 687.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-28",
    "water_ml": 192.4,
    "food_g": 44.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 41.5,
    "litter_output_g": 124.0,
    "weight_kg": 3.821,
    "rest_min": 733.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-29",
    "water_ml": 192.3,
    "food_g": 47.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 45.5,
    "litter_output_g": 98.4,
    "weight_kg": 3.804,
    "rest_min": 843.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-30",
    "water_ml": 180.5,
    "food_g": 48.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 43.0,
    "litter_output_g": 95.2,
    "weight_kg": 3.804,
    "rest_min": 823.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-10-31",
    "water_ml": 196.3,
    "food_g": 50.2,
    "litter_visits": 4.0,
    "litter_avg_sec": 44.2,
    "litter_output_g": 117.8,
    "weight_kg": 3.807,
    "rest_min": 755.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-11-01",
    "water_ml": 200.2,
    "food_g": 51.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 40.5,
    "litter_output_g": 99.2,
    "weight_kg": 3.803,
    "rest_min": 724.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-11-02",
    "water_ml": 172.9,
    "food_g": 50.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 40.0,
    "litter_output_g": 113.8,
    "weight_kg": 3.794,
    "rest_min": 820.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-11-03",
    "water_ml": 185.6,
    "food_g": 37.5,
    "litter_visits": 2.0,
    "litter_avg_sec": 48.0,
    "litter_output_g": 99.2,
    "weight_kg": 3.777,
    "rest_min": 787.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-11-04",
    "water_ml": 188.8,
    "food_g": 48.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 39.2,
    "litter_output_g": 99.5,
    "weight_kg": 3.766,
    "rest_min": 755.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-11-05",
    "water_ml": 193.2,
    "food_g": 43.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 49.0,
    "litter_output_g": 118.2,
    "weight_kg": 3.76,
    "rest_min": 750.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-11-06",
    "water_ml": 178.4,
    "food_g": 40.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 44.5,
    "litter_output_g": 104.2,
    "weight_kg": 3.745,
    "rest_min": 776.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-11-07",
    "water_ml": 192.3,
    "food_g": 44.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 38.3,
    "litter_output_g": 97.2,
    "weight_kg": 3.737,
    "rest_min": 775.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "coco",
    "date": "2026-11-08",
    "water_ml": 191.4,
    "food_g": 38.4,
    "litter_visits": 3.0,
    "litter_avg_sec": 46.7,
    "litter_output_g": 109.7,
    "weight_kg": 3.732,
    "rest_min": 768.5,
    "sleep_breaths": null,
    "data_ok": true
   }
  ],
  "nala": [
   {
    "cat_id": "nala",
    "date": "2026-09-10",
    "water_ml": 196.5,
    "food_g": 70.2,
    "litter_visits": 4.0,
    "litter_avg_sec": 43.8,
    "litter_output_g": 104.0,
    "weight_kg": 4.007,
    "rest_min": 428.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-11",
    "water_ml": 202.6,
    "food_g": 68.9,
    "litter_visits": 3.0,
    "litter_avg_sec": 38.7,
    "litter_output_g": 116.2,
    "weight_kg": 3.993,
    "rest_min": 779.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-12",
    "water_ml": 197.4,
    "food_g": 68.0,
    "litter_visits": 2.0,
    "litter_avg_sec": 39.5,
    "litter_output_g": 116.1,
    "weight_kg": 4.02,
    "rest_min": 724.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-13",
    "water_ml": 201.9,
    "food_g": 67.9,
    "litter_visits": 3.0,
    "litter_avg_sec": 52.0,
    "litter_output_g": 117.5,
    "weight_kg": 3.984,
    "rest_min": 861.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-14",
    "water_ml": 188.3,
    "food_g": 62.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 52.3,
    "litter_output_g": 128.1,
    "weight_kg": 3.991,
    "rest_min": 851.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-15",
    "water_ml": 182.6,
    "food_g": 62.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 51.2,
    "litter_output_g": 113.0,
    "weight_kg": 3.983,
    "rest_min": 797.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-16",
    "water_ml": 199.1,
    "food_g": 58.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 44.2,
    "litter_output_g": 114.0,
    "weight_kg": 4.007,
    "rest_min": 786.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-17",
    "water_ml": 201.0,
    "food_g": 65.2,
    "litter_visits": 4.0,
    "litter_avg_sec": 50.5,
    "litter_output_g": 126.4,
    "weight_kg": 3.984,
    "rest_min": 861.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-18",
    "water_ml": 192.4,
    "food_g": 66.3,
    "litter_visits": 2.0,
    "litter_avg_sec": 49.0,
    "litter_output_g": 108.0,
    "weight_kg": 3.985,
    "rest_min": 823.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-19",
    "water_ml": 208.4,
    "food_g": 65.9,
    "litter_visits": 3.0,
    "litter_avg_sec": 40.7,
    "litter_output_g": 108.1,
    "weight_kg": 4.008,
    "rest_min": 719.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-20",
    "water_ml": 205.7,
    "food_g": 58.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 43.0,
    "litter_output_g": 130.8,
    "weight_kg": 4.008,
    "rest_min": 806.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-21",
    "water_ml": 216.2,
    "food_g": 73.6,
    "litter_visits": 2.0,
    "litter_avg_sec": 45.0,
    "litter_output_g": 123.9,
    "weight_kg": 3.984,
    "rest_min": 775.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-22",
    "water_ml": 203.2,
    "food_g": 69.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 43.0,
    "litter_output_g": 101.6,
    "weight_kg": 4.01,
    "rest_min": 779.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-23",
    "water_ml": 217.6,
    "food_g": 67.9,
    "litter_visits": 3.0,
    "litter_avg_sec": 42.7,
    "litter_output_g": 100.0,
    "weight_kg": 4.019,
    "rest_min": 758.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-24",
    "water_ml": 215.0,
    "food_g": 66.2,
    "litter_visits": 3.0,
    "litter_avg_sec": 45.0,
    "litter_output_g": 127.2,
    "weight_kg": 4.016,
    "rest_min": 847.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-25",
    "water_ml": 187.7,
    "food_g": 68.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 40.2,
    "litter_output_g": 98.9,
    "weight_kg": 3.998,
    "rest_min": 760.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-26",
    "water_ml": 181.2,
    "food_g": 69.7,
    "litter_visits": 4.0,
    "litter_avg_sec": 45.8,
    "litter_output_g": 120.1,
    "weight_kg": 4.003,
    "rest_min": 773.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-27",
    "water_ml": 186.2,
    "food_g": 69.6,
    "litter_visits": 2.0,
    "litter_avg_sec": 46.5,
    "litter_output_g": 100.2,
    "weight_kg": 4.006,
    "rest_min": 780.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-28",
    "water_ml": 185.0,
    "food_g": 61.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 42.0,
    "litter_output_g": 129.6,
    "weight_kg": 3.998,
    "rest_min": 741.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-29",
    "water_ml": 188.4,
    "food_g": 68.3,
    "litter_visits": 2.0,
    "litter_avg_sec": 49.0,
    "litter_output_g": 114.4,
    "weight_kg": 4.005,
    "rest_min": 777.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-09-30",
    "water_ml": 219.2,
    "food_g": 63.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 47.2,
    "litter_output_g": 124.9,
    "weight_kg": 4.001,
    "rest_min": 823.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-01",
    "water_ml": 186.7,
    "food_g": 63.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 43.5,
    "litter_output_g": 121.9,
    "weight_kg": 4.018,
    "rest_min": 790.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-02",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "nala",
    "date": "2026-10-03",
    "water_ml": 206.6,
    "food_g": 68.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 50.2,
    "litter_output_g": 111.1,
    "weight_kg": 3.99,
    "rest_min": 711.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-04",
    "water_ml": 191.8,
    "food_g": 66.6,
    "litter_visits": 2.0,
    "litter_avg_sec": 41.0,
    "litter_output_g": 120.8,
    "weight_kg": 4.019,
    "rest_min": 825.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-05",
    "water_ml": 190.6,
    "food_g": 68.7,
    "litter_visits": 4.0,
    "litter_avg_sec": 41.0,
    "litter_output_g": 114.2,
    "weight_kg": 4.007,
    "rest_min": 887.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-06",
    "water_ml": 184.3,
    "food_g": 70.9,
    "litter_visits": 4.0,
    "litter_avg_sec": 40.8,
    "litter_output_g": 125.7,
    "weight_kg": 4.014,
    "rest_min": 822.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-07",
    "water_ml": 216.5,
    "food_g": 65.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 47.0,
    "litter_output_g": 130.8,
    "weight_kg": 3.985,
    "rest_min": 699.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-08",
    "water_ml": 202.0,
    "food_g": 62.6,
    "litter_visits": 2.0,
    "litter_avg_sec": 53.0,
    "litter_output_g": 129.5,
    "weight_kg": 4.018,
    "rest_min": 739.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-09",
    "water_ml": 181.5,
    "food_g": 62.2,
    "litter_visits": 3.0,
    "litter_avg_sec": 50.7,
    "litter_output_g": 101.7,
    "weight_kg": 4.013,
    "rest_min": 813.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-10",
    "water_ml": 191.2,
    "food_g": 62.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 43.0,
    "litter_output_g": 103.4,
    "weight_kg": 3.992,
    "rest_min": 870.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-11",
    "water_ml": 184.2,
    "food_g": 63.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 41.0,
    "litter_output_g": 119.9,
    "weight_kg": 4.005,
    "rest_min": 830.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-12",
    "water_ml": 215.4,
    "food_g": 66.4,
    "litter_visits": 3.0,
    "litter_avg_sec": 47.3,
    "litter_output_g": 119.8,
    "weight_kg": 4.004,
    "rest_min": 796.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-13",
    "water_ml": 214.7,
    "food_g": 61.1,
    "litter_visits": 4.0,
    "litter_avg_sec": 40.5,
    "litter_output_g": 128.4,
    "weight_kg": 4.012,
    "rest_min": 773.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-14",
    "water_ml": 179.9,
    "food_g": 66.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 39.0,
    "litter_output_g": 126.1,
    "weight_kg": 4.017,
    "rest_min": 708.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-15",
    "water_ml": 181.0,
    "food_g": 68.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 42.0,
    "litter_output_g": 127.3,
    "weight_kg": 4.004,
    "rest_min": 702.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-16",
    "water_ml": 208.6,
    "food_g": 70.9,
    "litter_visits": 3.0,
    "litter_avg_sec": 40.3,
    "litter_output_g": 123.0,
    "weight_kg": 4.016,
    "rest_min": 717.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-17",
    "water_ml": 217.4,
    "food_g": 61.1,
    "litter_visits": 4.0,
    "litter_avg_sec": 51.2,
    "litter_output_g": 122.0,
    "weight_kg": 4.009,
    "rest_min": 725.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-18",
    "water_ml": 212.7,
    "food_g": 71.7,
    "litter_visits": 4.0,
    "litter_avg_sec": 50.5,
    "litter_output_g": 102.2,
    "weight_kg": 3.995,
    "rest_min": 724.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-19",
    "water_ml": 202.5,
    "food_g": 70.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 52.0,
    "litter_output_g": 112.2,
    "weight_kg": 4.02,
    "rest_min": 778.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-20",
    "water_ml": 189.1,
    "food_g": 67.4,
    "litter_visits": 3.0,
    "litter_avg_sec": 40.7,
    "litter_output_g": 129.6,
    "weight_kg": 4.01,
    "rest_min": 708.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-21",
    "water_ml": 188.6,
    "food_g": 66.9,
    "litter_visits": 3.0,
    "litter_avg_sec": 45.7,
    "litter_output_g": 130.9,
    "weight_kg": 3.985,
    "rest_min": 757.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-22",
    "water_ml": 204.0,
    "food_g": 70.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 40.2,
    "litter_output_g": 100.9,
    "weight_kg": 4.011,
    "rest_min": 846.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-23",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "nala",
    "date": "2026-10-24",
    "water_ml": 200.5,
    "food_g": 70.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 48.5,
    "litter_output_g": 129.4,
    "weight_kg": 4.0,
    "rest_min": 785.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-25",
    "water_ml": 207.5,
    "food_g": 64.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 44.0,
    "litter_output_g": 102.3,
    "weight_kg": 4.004,
    "rest_min": 813.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-26",
    "water_ml": 207.7,
    "food_g": 62.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 46.3,
    "litter_output_g": 101.3,
    "weight_kg": 4.009,
    "rest_min": 697.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-27",
    "water_ml": 208.0,
    "food_g": 66.9,
    "litter_visits": 4.0,
    "litter_avg_sec": 48.0,
    "litter_output_g": 120.0,
    "weight_kg": 3.986,
    "rest_min": 737.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-28",
    "water_ml": 194.3,
    "food_g": 67.4,
    "litter_visits": 3.0,
    "litter_avg_sec": 48.0,
    "litter_output_g": 100.3,
    "weight_kg": 4.007,
    "rest_min": 806.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-29",
    "water_ml": 220.7,
    "food_g": 67.9,
    "litter_visits": 4.0,
    "litter_avg_sec": 39.8,
    "litter_output_g": 102.9,
    "weight_kg": 4.011,
    "rest_min": 697.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-30",
    "water_ml": 194.8,
    "food_g": 70.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 43.8,
    "litter_output_g": 121.0,
    "weight_kg": 3.992,
    "rest_min": 763.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-10-31",
    "water_ml": 183.8,
    "food_g": 70.2,
    "litter_visits": 3.0,
    "litter_avg_sec": 40.3,
    "litter_output_g": 107.3,
    "weight_kg": 4.011,
    "rest_min": 849.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-11-01",
    "water_ml": 197.9,
    "food_g": 68.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 49.3,
    "litter_output_g": 102.3,
    "weight_kg": 4.015,
    "rest_min": 767.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-11-02",
    "water_ml": 186.8,
    "food_g": 68.6,
    "litter_visits": 3.0,
    "litter_avg_sec": 48.0,
    "litter_output_g": 110.4,
    "weight_kg": 4.013,
    "rest_min": 775.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-11-03",
    "water_ml": 204.8,
    "food_g": 63.5,
    "litter_visits": 2.0,
    "litter_avg_sec": 47.5,
    "litter_output_g": 128.0,
    "weight_kg": 4.015,
    "rest_min": 784.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-11-04",
    "water_ml": 205.1,
    "food_g": 67.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 44.5,
    "litter_output_g": 100.1,
    "weight_kg": 4.005,
    "rest_min": 806.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-11-05",
    "water_ml": 212.7,
    "food_g": 65.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 44.2,
    "litter_output_g": 106.6,
    "weight_kg": 4.012,
    "rest_min": 810.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-11-06",
    "water_ml": 192.1,
    "food_g": 71.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 41.7,
    "litter_output_g": 109.2,
    "weight_kg": 3.997,
    "rest_min": 728.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-11-07",
    "water_ml": 209.9,
    "food_g": 0.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 51.8,
    "litter_output_g": 111.9,
    "weight_kg": 4.011,
    "rest_min": 850.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "nala",
    "date": "2026-11-08",
    "water_ml": 204.8,
    "food_g": 10.6,
    "litter_visits": 2.0,
    "litter_avg_sec": 41.5,
    "litter_output_g": 116.3,
    "weight_kg": 4.015,
    "rest_min": 1016.8,
    "sleep_breaths": null,
    "data_ok": true
   }
  ],
  "pip": [
   {
    "cat_id": "pip",
    "date": "2026-09-10",
    "water_ml": 123.8,
    "food_g": 54.9,
    "litter_visits": 4.0,
    "litter_avg_sec": 33.2,
    "litter_output_g": 36.1,
    "weight_kg": 2.003,
    "rest_min": 457.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-11",
    "water_ml": 130.5,
    "food_g": 58.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 26.5,
    "litter_output_g": 37.7,
    "weight_kg": 2.028,
    "rest_min": 974.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-12",
    "water_ml": 131.4,
    "food_g": 59.9,
    "litter_visits": 2.0,
    "litter_avg_sec": 31.0,
    "litter_output_g": 36.7,
    "weight_kg": 2.024,
    "rest_min": 1041.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-13",
    "water_ml": 114.5,
    "food_g": 52.9,
    "litter_visits": 2.0,
    "litter_avg_sec": 28.5,
    "litter_output_g": 41.6,
    "weight_kg": 2.042,
    "rest_min": 958.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-14",
    "water_ml": 128.1,
    "food_g": 59.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 25.8,
    "litter_output_g": 38.7,
    "weight_kg": 2.058,
    "rest_min": 983.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-15",
    "water_ml": 129.0,
    "food_g": 58.9,
    "litter_visits": 2.0,
    "litter_avg_sec": 30.0,
    "litter_output_g": 39.8,
    "weight_kg": 2.053,
    "rest_min": 927.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-16",
    "water_ml": 115.7,
    "food_g": 57.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 32.5,
    "litter_output_g": 36.6,
    "weight_kg": 2.061,
    "rest_min": 988.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-17",
    "water_ml": 134.5,
    "food_g": 55.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 27.5,
    "litter_output_g": 37.3,
    "weight_kg": 2.082,
    "rest_min": 951.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-18",
    "water_ml": 125.9,
    "food_g": 58.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 35.0,
    "litter_output_g": 35.7,
    "weight_kg": 2.092,
    "rest_min": 1022.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-19",
    "water_ml": 126.6,
    "food_g": 58.0,
    "litter_visits": 3.0,
    "litter_avg_sec": 26.0,
    "litter_output_g": 36.3,
    "weight_kg": 2.101,
    "rest_min": 1019.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-20",
    "water_ml": 138.2,
    "food_g": 56.6,
    "litter_visits": 2.0,
    "litter_avg_sec": 29.5,
    "litter_output_g": 43.0,
    "weight_kg": 2.122,
    "rest_min": 924.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-21",
    "water_ml": 126.4,
    "food_g": 60.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 26.3,
    "litter_output_g": 47.6,
    "weight_kg": 2.13,
    "rest_min": 943.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-22",
    "water_ml": 134.7,
    "food_g": 63.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 30.7,
    "litter_output_g": 40.6,
    "weight_kg": 2.129,
    "rest_min": 889.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-23",
    "water_ml": 118.5,
    "food_g": 55.1,
    "litter_visits": 2.0,
    "litter_avg_sec": 36.0,
    "litter_output_g": 44.6,
    "weight_kg": 2.135,
    "rest_min": 877.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-24",
    "water_ml": 126.5,
    "food_g": 60.2,
    "litter_visits": 4.0,
    "litter_avg_sec": 29.2,
    "litter_output_g": 40.9,
    "weight_kg": 2.15,
    "rest_min": 965.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-25",
    "water_ml": 128.0,
    "food_g": 58.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 27.0,
    "litter_output_g": 46.6,
    "weight_kg": 2.165,
    "rest_min": 1032.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-26",
    "water_ml": 142.7,
    "food_g": 61.3,
    "litter_visits": 2.0,
    "litter_avg_sec": 32.5,
    "litter_output_g": 45.8,
    "weight_kg": 2.185,
    "rest_min": 927.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-27",
    "water_ml": 134.1,
    "food_g": 64.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 33.0,
    "litter_output_g": 46.8,
    "weight_kg": 2.188,
    "rest_min": 998.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-28",
    "water_ml": 129.2,
    "food_g": 56.0,
    "litter_visits": 3.0,
    "litter_avg_sec": 30.0,
    "litter_output_g": 42.7,
    "weight_kg": 2.19,
    "rest_min": 965.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-29",
    "water_ml": 139.1,
    "food_g": 66.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 27.7,
    "litter_output_g": 37.8,
    "weight_kg": 2.216,
    "rest_min": 937.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-09-30",
    "water_ml": 127.4,
    "food_g": 65.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 27.5,
    "litter_output_g": 37.6,
    "weight_kg": 2.221,
    "rest_min": 1073.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-01",
    "water_ml": 127.5,
    "food_g": 62.7,
    "litter_visits": 4.0,
    "litter_avg_sec": 27.2,
    "litter_output_g": 45.4,
    "weight_kg": 2.228,
    "rest_min": 1046.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-02",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "pip",
    "date": "2026-10-03",
    "water_ml": 125.0,
    "food_g": 57.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 29.5,
    "litter_output_g": 85.3,
    "weight_kg": 2.259,
    "rest_min": 1022.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-04",
    "water_ml": 133.7,
    "food_g": 67.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 33.0,
    "litter_output_g": 101.0,
    "weight_kg": 2.259,
    "rest_min": 981.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-05",
    "water_ml": 144.7,
    "food_g": 64.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 38.0,
    "litter_output_g": 94.3,
    "weight_kg": 2.274,
    "rest_min": 1029.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-06",
    "water_ml": 134.3,
    "food_g": 57.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 36.7,
    "litter_output_g": 105.6,
    "weight_kg": 2.294,
    "rest_min": 944.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-07",
    "water_ml": 133.9,
    "food_g": 59.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 31.5,
    "litter_output_g": 91.0,
    "weight_kg": 2.301,
    "rest_min": 1084.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-08",
    "water_ml": 150.7,
    "food_g": 66.2,
    "litter_visits": 4.0,
    "litter_avg_sec": 32.0,
    "litter_output_g": 99.7,
    "weight_kg": 2.319,
    "rest_min": 1003.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-09",
    "water_ml": 128.7,
    "food_g": 60.7,
    "litter_visits": 4.0,
    "litter_avg_sec": 32.0,
    "litter_output_g": 102.5,
    "weight_kg": 2.332,
    "rest_min": 891.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-10",
    "water_ml": 132.7,
    "food_g": 61.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 34.0,
    "litter_output_g": 97.6,
    "weight_kg": 2.327,
    "rest_min": 892.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-11",
    "water_ml": 145.9,
    "food_g": 64.4,
    "litter_visits": 3.0,
    "litter_avg_sec": 38.0,
    "litter_output_g": 99.2,
    "weight_kg": 2.344,
    "rest_min": 838.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-12",
    "water_ml": 136.4,
    "food_g": 65.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 34.5,
    "litter_output_g": 84.6,
    "weight_kg": 2.365,
    "rest_min": 897.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-13",
    "water_ml": 144.8,
    "food_g": 64.5,
    "litter_visits": 2.0,
    "litter_avg_sec": 34.0,
    "litter_output_g": 100.8,
    "weight_kg": 2.362,
    "rest_min": 1013.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-14",
    "water_ml": 128.3,
    "food_g": 69.9,
    "litter_visits": 2.0,
    "litter_avg_sec": 35.0,
    "litter_output_g": 87.5,
    "weight_kg": 2.373,
    "rest_min": 900.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-15",
    "water_ml": 137.8,
    "food_g": 60.6,
    "litter_visits": 3.0,
    "litter_avg_sec": 37.7,
    "litter_output_g": 107.7,
    "weight_kg": 2.393,
    "rest_min": 956.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-16",
    "water_ml": 137.4,
    "food_g": 61.2,
    "litter_visits": 3.0,
    "litter_avg_sec": 34.0,
    "litter_output_g": 102.6,
    "weight_kg": 2.395,
    "rest_min": 877.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-17",
    "water_ml": 161.0,
    "food_g": 65.3,
    "litter_visits": 2.0,
    "litter_avg_sec": 38.0,
    "litter_output_g": 109.4,
    "weight_kg": 2.409,
    "rest_min": 931.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-18",
    "water_ml": 132.9,
    "food_g": 67.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 28.5,
    "litter_output_g": 108.4,
    "weight_kg": 2.442,
    "rest_min": 889.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-19",
    "water_ml": 147.2,
    "food_g": 66.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 37.5,
    "litter_output_g": 102.7,
    "weight_kg": 2.43,
    "rest_min": 916.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-20",
    "water_ml": 137.3,
    "food_g": 70.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 35.3,
    "litter_output_g": 86.1,
    "weight_kg": 2.457,
    "rest_min": 1033.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-21",
    "water_ml": 147.9,
    "food_g": 69.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 33.3,
    "litter_output_g": 86.0,
    "weight_kg": 2.458,
    "rest_min": 1071.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-22",
    "water_ml": 159.3,
    "food_g": 72.6,
    "litter_visits": 2.0,
    "litter_avg_sec": 35.0,
    "litter_output_g": 91.4,
    "weight_kg": 2.48,
    "rest_min": 1035.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-23",
    "water_ml": 160.0,
    "food_g": 71.2,
    "litter_visits": 4.0,
    "litter_avg_sec": 30.0,
    "litter_output_g": 91.6,
    "weight_kg": 2.484,
    "rest_min": 929.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-24",
    "water_ml": 161.6,
    "food_g": 66.5,
    "litter_visits": 2.0,
    "litter_avg_sec": 29.0,
    "litter_output_g": 88.4,
    "weight_kg": 2.497,
    "rest_min": 927.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-25",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "pip",
    "date": "2026-10-26",
    "water_ml": 155.7,
    "food_g": 69.9,
    "litter_visits": 2.0,
    "litter_avg_sec": 30.5,
    "litter_output_g": 115.3,
    "weight_kg": 2.517,
    "rest_min": 1065.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-27",
    "water_ml": 139.3,
    "food_g": 71.4,
    "litter_visits": 2.0,
    "litter_avg_sec": 36.5,
    "litter_output_g": 91.4,
    "weight_kg": 2.55,
    "rest_min": 1054.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-28",
    "water_ml": 153.0,
    "food_g": 71.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 38.0,
    "litter_output_g": 103.4,
    "weight_kg": 2.541,
    "rest_min": 1054.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-29",
    "water_ml": 141.1,
    "food_g": 73.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 36.8,
    "litter_output_g": 91.0,
    "weight_kg": 2.573,
    "rest_min": 1039.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-30",
    "water_ml": 155.9,
    "food_g": 75.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 38.0,
    "litter_output_g": 112.6,
    "weight_kg": 2.567,
    "rest_min": 1048.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-10-31",
    "water_ml": 166.8,
    "food_g": 65.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 29.8,
    "litter_output_g": 93.0,
    "weight_kg": 2.599,
    "rest_min": 1019.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-11-01",
    "water_ml": 164.8,
    "food_g": 72.4,
    "litter_visits": 2.0,
    "litter_avg_sec": 34.5,
    "litter_output_g": 92.1,
    "weight_kg": 2.594,
    "rest_min": 1000.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-11-02",
    "water_ml": 171.7,
    "food_g": 68.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 36.5,
    "litter_output_g": 100.3,
    "weight_kg": 2.614,
    "rest_min": 940.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-11-03",
    "water_ml": 144.7,
    "food_g": 73.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 33.5,
    "litter_output_g": 117.2,
    "weight_kg": 2.618,
    "rest_min": 1056.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-11-04",
    "water_ml": 159.1,
    "food_g": 73.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 30.5,
    "litter_output_g": 94.1,
    "weight_kg": 2.641,
    "rest_min": 1057.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-11-05",
    "water_ml": 150.9,
    "food_g": 70.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 33.0,
    "litter_output_g": 121.0,
    "weight_kg": 2.645,
    "rest_min": 1010.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-11-06",
    "water_ml": 155.7,
    "food_g": 73.1,
    "litter_visits": 2.0,
    "litter_avg_sec": 34.0,
    "litter_output_g": 106.3,
    "weight_kg": 2.684,
    "rest_min": 1042.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-11-07",
    "water_ml": 163.3,
    "food_g": 79.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 29.8,
    "litter_output_g": 104.2,
    "weight_kg": 2.671,
    "rest_min": 1017.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "pip",
    "date": "2026-11-08",
    "water_ml": 151.7,
    "food_g": 76.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 31.5,
    "litter_output_g": 104.6,
    "weight_kg": 2.691,
    "rest_min": 999.1,
    "sleep_breaths": null,
    "data_ok": true
   }
  ],
  "ziggy": [
   {
    "cat_id": "ziggy",
    "date": "2026-09-10",
    "water_ml": 456.2,
    "food_g": 61.5,
    "litter_visits": 5.0,
    "litter_avg_sec": 52.2,
    "litter_output_g": 218.1,
    "weight_kg": 3.584,
    "rest_min": 456.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-11",
    "water_ml": 459.8,
    "food_g": 71.1,
    "litter_visits": 6.0,
    "litter_avg_sec": 48.5,
    "litter_output_g": 263.9,
    "weight_kg": 3.587,
    "rest_min": 908.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-12",
    "water_ml": 409.5,
    "food_g": 60.0,
    "litter_visits": 6.0,
    "litter_avg_sec": 54.3,
    "litter_output_g": 222.3,
    "weight_kg": 3.61,
    "rest_min": 851.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-13",
    "water_ml": 457.1,
    "food_g": 69.8,
    "litter_visits": 6.0,
    "litter_avg_sec": 44.3,
    "litter_output_g": 229.5,
    "weight_kg": 3.615,
    "rest_min": 768.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-14",
    "water_ml": 480.3,
    "food_g": 59.7,
    "litter_visits": 6.0,
    "litter_avg_sec": 47.2,
    "litter_output_g": 203.5,
    "weight_kg": 3.608,
    "rest_min": 746.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-15",
    "water_ml": 464.7,
    "food_g": 62.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 51.0,
    "litter_output_g": 250.7,
    "weight_kg": 3.599,
    "rest_min": 811.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-16",
    "water_ml": 454.8,
    "food_g": 61.1,
    "litter_visits": 5.0,
    "litter_avg_sec": 53.6,
    "litter_output_g": 224.5,
    "weight_kg": 3.589,
    "rest_min": 831.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-17",
    "water_ml": 467.0,
    "food_g": 65.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 46.8,
    "litter_output_g": 228.4,
    "weight_kg": 3.608,
    "rest_min": 780.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-18",
    "water_ml": 421.1,
    "food_g": 65.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 54.8,
    "litter_output_g": 219.0,
    "weight_kg": 3.591,
    "rest_min": 826.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-19",
    "water_ml": 397.9,
    "food_g": 61.8,
    "litter_visits": 6.0,
    "litter_avg_sec": 53.2,
    "litter_output_g": 241.9,
    "weight_kg": 3.603,
    "rest_min": 867.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-20",
    "water_ml": 472.1,
    "food_g": 62.9,
    "litter_visits": 4.0,
    "litter_avg_sec": 46.8,
    "litter_output_g": 250.1,
    "weight_kg": 3.616,
    "rest_min": 755.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-21",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-22",
    "water_ml": 481.6,
    "food_g": 65.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 52.5,
    "litter_output_g": 255.4,
    "weight_kg": 3.599,
    "rest_min": 750.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-23",
    "water_ml": 463.4,
    "food_g": 61.9,
    "litter_visits": 4.0,
    "litter_avg_sec": 49.0,
    "litter_output_g": 251.9,
    "weight_kg": 3.603,
    "rest_min": 788.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-24",
    "water_ml": 476.0,
    "food_g": 60.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 41.8,
    "litter_output_g": 253.0,
    "weight_kg": 3.585,
    "rest_min": 913.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-25",
    "water_ml": 447.8,
    "food_g": 67.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 43.8,
    "litter_output_g": 215.9,
    "weight_kg": 3.617,
    "rest_min": 848.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-26",
    "water_ml": 433.0,
    "food_g": 65.2,
    "litter_visits": 4.0,
    "litter_avg_sec": 52.2,
    "litter_output_g": 240.4,
    "weight_kg": 3.603,
    "rest_min": 750.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-27",
    "water_ml": 439.8,
    "food_g": 61.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 54.8,
    "litter_output_g": 215.5,
    "weight_kg": 3.594,
    "rest_min": 833.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-28",
    "water_ml": 478.6,
    "food_g": 68.4,
    "litter_visits": 5.0,
    "litter_avg_sec": 52.2,
    "litter_output_g": 240.9,
    "weight_kg": 3.587,
    "rest_min": 870.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-29",
    "water_ml": 478.1,
    "food_g": 66.7,
    "litter_visits": 4.0,
    "litter_avg_sec": 48.5,
    "litter_output_g": 263.2,
    "weight_kg": 3.591,
    "rest_min": 821.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-09-30",
    "water_ml": 419.6,
    "food_g": 63.9,
    "litter_visits": 5.0,
    "litter_avg_sec": 55.6,
    "litter_output_g": 225.8,
    "weight_kg": 3.592,
    "rest_min": 916.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-01",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-02",
    "water_ml": 409.5,
    "food_g": 63.8,
    "litter_visits": 6.0,
    "litter_avg_sec": 46.5,
    "litter_output_g": 221.3,
    "weight_kg": 3.584,
    "rest_min": 876.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-03",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-04",
    "water_ml": 419.8,
    "food_g": 60.1,
    "litter_visits": 4.0,
    "litter_avg_sec": 50.2,
    "litter_output_g": 248.8,
    "weight_kg": 3.59,
    "rest_min": 806.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-05",
    "water_ml": 436.7,
    "food_g": 67.0,
    "litter_visits": 6.0,
    "litter_avg_sec": 46.0,
    "litter_output_g": 263.5,
    "weight_kg": 3.607,
    "rest_min": 913.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-06",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-07",
    "water_ml": 419.3,
    "food_g": 69.6,
    "litter_visits": 6.0,
    "litter_avg_sec": 53.7,
    "litter_output_g": 236.7,
    "weight_kg": 3.589,
    "rest_min": 832.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-08",
    "water_ml": 408.2,
    "food_g": 63.2,
    "litter_visits": 5.0,
    "litter_avg_sec": 41.2,
    "litter_output_g": 227.3,
    "weight_kg": 3.605,
    "rest_min": 918.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-09",
    "water_ml": 407.7,
    "food_g": 72.0,
    "litter_visits": 5.0,
    "litter_avg_sec": 48.0,
    "litter_output_g": 246.8,
    "weight_kg": 3.617,
    "rest_min": 882.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-10",
    "water_ml": 396.7,
    "food_g": 65.5,
    "litter_visits": 5.0,
    "litter_avg_sec": 46.2,
    "litter_output_g": 253.0,
    "weight_kg": 3.613,
    "rest_min": 756.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-11",
    "water_ml": 415.9,
    "food_g": 69.8,
    "litter_visits": 5.0,
    "litter_avg_sec": 51.0,
    "litter_output_g": 233.8,
    "weight_kg": 3.59,
    "rest_min": 819.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-12",
    "water_ml": 405.2,
    "food_g": 63.0,
    "litter_visits": 6.0,
    "litter_avg_sec": 45.2,
    "litter_output_g": 203.0,
    "weight_kg": 3.589,
    "rest_min": 832.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-13",
    "water_ml": 468.4,
    "food_g": 70.1,
    "litter_visits": 6.0,
    "litter_avg_sec": 48.5,
    "litter_output_g": 233.7,
    "weight_kg": 3.603,
    "rest_min": 848.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-14",
    "water_ml": 472.5,
    "food_g": 70.1,
    "litter_visits": 6.0,
    "litter_avg_sec": 45.8,
    "litter_output_g": 200.8,
    "weight_kg": 3.585,
    "rest_min": 793.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-15",
    "water_ml": 452.0,
    "food_g": 62.6,
    "litter_visits": 5.0,
    "litter_avg_sec": 40.8,
    "litter_output_g": 256.3,
    "weight_kg": 3.595,
    "rest_min": 855.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-16",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-17",
    "water_ml": 478.0,
    "food_g": 70.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 51.0,
    "litter_output_g": 230.6,
    "weight_kg": 3.595,
    "rest_min": 945.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-18",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-19",
    "water_ml": 444.8,
    "food_g": 65.9,
    "litter_visits": 5.0,
    "litter_avg_sec": 55.4,
    "litter_output_g": 207.8,
    "weight_kg": 3.614,
    "rest_min": 758.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-20",
    "water_ml": 396.4,
    "food_g": 62.2,
    "litter_visits": 4.0,
    "litter_avg_sec": 45.8,
    "litter_output_g": 243.7,
    "weight_kg": 3.61,
    "rest_min": 855.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-21",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-22",
    "water_ml": 419.8,
    "food_g": 62.7,
    "litter_visits": 5.0,
    "litter_avg_sec": 51.0,
    "litter_output_g": 236.1,
    "weight_kg": 3.583,
    "rest_min": 880.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-23",
    "water_ml": 432.1,
    "food_g": 62.4,
    "litter_visits": 6.0,
    "litter_avg_sec": 51.8,
    "litter_output_g": 251.2,
    "weight_kg": 3.582,
    "rest_min": 939.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-24",
    "water_ml": 479.0,
    "food_g": 69.5,
    "litter_visits": 5.0,
    "litter_avg_sec": 43.8,
    "litter_output_g": 240.0,
    "weight_kg": 3.59,
    "rest_min": 940.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-25",
    "water_ml": 427.7,
    "food_g": 69.5,
    "litter_visits": 5.0,
    "litter_avg_sec": 43.2,
    "litter_output_g": 220.3,
    "weight_kg": 3.616,
    "rest_min": 937.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-26",
    "water_ml": 470.8,
    "food_g": 65.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 47.0,
    "litter_output_g": 242.7,
    "weight_kg": 3.586,
    "rest_min": 940.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-27",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-28",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-29",
    "water_ml": 451.7,
    "food_g": 64.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 52.2,
    "litter_output_g": 232.5,
    "weight_kg": 3.607,
    "rest_min": 797.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-30",
    "water_ml": 418.3,
    "food_g": 69.1,
    "litter_visits": 5.0,
    "litter_avg_sec": 44.2,
    "litter_output_g": 259.7,
    "weight_kg": 3.583,
    "rest_min": 903.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-10-31",
    "water_ml": 421.5,
    "food_g": 67.5,
    "litter_visits": 6.0,
    "litter_avg_sec": 53.7,
    "litter_output_g": 216.7,
    "weight_kg": 3.617,
    "rest_min": 935.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-11-01",
    "water_ml": 474.6,
    "food_g": 63.9,
    "litter_visits": 6.0,
    "litter_avg_sec": 49.8,
    "litter_output_g": 246.8,
    "weight_kg": 3.608,
    "rest_min": 934.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-11-02",
    "water_ml": 398.3,
    "food_g": 71.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 44.0,
    "litter_output_g": 225.2,
    "weight_kg": 3.601,
    "rest_min": 892.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-11-03",
    "water_ml": 453.0,
    "food_g": 64.6,
    "litter_visits": 5.0,
    "litter_avg_sec": 41.4,
    "litter_output_g": 221.7,
    "weight_kg": 3.601,
    "rest_min": 780.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-11-04",
    "water_ml": 430.8,
    "food_g": 70.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 48.2,
    "litter_output_g": 237.7,
    "weight_kg": 3.608,
    "rest_min": 799.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-11-05",
    "water_ml": 420.2,
    "food_g": 62.3,
    "litter_visits": 5.0,
    "litter_avg_sec": 45.4,
    "litter_output_g": 245.9,
    "weight_kg": 3.602,
    "rest_min": 832.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-11-06",
    "water_ml": 457.5,
    "food_g": 68.4,
    "litter_visits": 6.0,
    "litter_avg_sec": 53.2,
    "litter_output_g": 235.3,
    "weight_kg": 3.589,
    "rest_min": 805.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-11-07",
    "water_ml": 419.0,
    "food_g": 67.9,
    "litter_visits": 5.0,
    "litter_avg_sec": 43.6,
    "litter_output_g": 248.2,
    "weight_kg": 3.596,
    "rest_min": 862.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "ziggy",
    "date": "2026-11-08",
    "water_ml": 443.5,
    "food_g": 69.1,
    "litter_visits": 6.0,
    "litter_avg_sec": 51.2,
    "litter_output_g": 237.4,
    "weight_kg": 3.592,
    "rest_min": 779.7,
    "sleep_breaths": null,
    "data_ok": true
   }
  ],
  "simba": [
   {
    "cat_id": "simba",
    "date": "2026-09-10",
    "water_ml": 223.7,
    "food_g": 68.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 44.0,
    "litter_output_g": 151.5,
    "weight_kg": 5.011,
    "rest_min": 393.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-11",
    "water_ml": 216.8,
    "food_g": 77.2,
    "litter_visits": 4.0,
    "litter_avg_sec": 49.2,
    "litter_output_g": 139.3,
    "weight_kg": 5.021,
    "rest_min": 750.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-12",
    "water_ml": 250.5,
    "food_g": 81.5,
    "litter_visits": 2.0,
    "litter_avg_sec": 46.0,
    "litter_output_g": 137.4,
    "weight_kg": 4.983,
    "rest_min": 807.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-13",
    "water_ml": 226.1,
    "food_g": 73.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 46.8,
    "litter_output_g": 116.1,
    "weight_kg": 5.007,
    "rest_min": 729.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-14",
    "water_ml": 251.6,
    "food_g": 69.6,
    "litter_visits": 20.0,
    "litter_avg_sec": 10.2,
    "litter_output_g": 4.5,
    "weight_kg": 4.977,
    "rest_min": 736.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-15",
    "water_ml": 228.3,
    "food_g": 78.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 49.7,
    "litter_output_g": 142.1,
    "weight_kg": 5.005,
    "rest_min": 801.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-16",
    "water_ml": 216.9,
    "food_g": 74.2,
    "litter_visits": 3.0,
    "litter_avg_sec": 41.7,
    "litter_output_g": 145.8,
    "weight_kg": 5.013,
    "rest_min": 877.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-17",
    "water_ml": 245.6,
    "food_g": 69.7,
    "litter_visits": 3.0,
    "litter_avg_sec": 39.3,
    "litter_output_g": 149.7,
    "weight_kg": 4.998,
    "rest_min": 842.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-18",
    "water_ml": 246.3,
    "food_g": 71.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 44.8,
    "litter_output_g": 119.4,
    "weight_kg": 4.978,
    "rest_min": 773.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-19",
    "water_ml": 242.9,
    "food_g": 74.3,
    "litter_visits": 3.0,
    "litter_avg_sec": 38.7,
    "litter_output_g": 144.8,
    "weight_kg": 5.001,
    "rest_min": 718.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-20",
    "water_ml": 220.4,
    "food_g": 71.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 49.5,
    "litter_output_g": 137.6,
    "weight_kg": 4.999,
    "rest_min": 745.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-21",
    "water_ml": 245.0,
    "food_g": 77.9,
    "litter_visits": 3.0,
    "litter_avg_sec": 48.3,
    "litter_output_g": 124.9,
    "weight_kg": 4.982,
    "rest_min": 719.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-22",
    "water_ml": 247.1,
    "food_g": 79.2,
    "litter_visits": 3.0,
    "litter_avg_sec": 49.0,
    "litter_output_g": 154.4,
    "weight_kg": 5.015,
    "rest_min": 764.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-23",
    "water_ml": 221.8,
    "food_g": 70.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 36.0,
    "litter_output_g": 151.6,
    "weight_kg": 5.018,
    "rest_min": 733.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-24",
    "water_ml": 232.6,
    "food_g": 74.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 40.8,
    "litter_output_g": 138.9,
    "weight_kg": 4.981,
    "rest_min": 711.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-25",
    "water_ml": 219.5,
    "food_g": 71.2,
    "litter_visits": 4.0,
    "litter_avg_sec": 39.8,
    "litter_output_g": 119.9,
    "weight_kg": 4.991,
    "rest_min": 721.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-26",
    "water_ml": 222.6,
    "food_g": 72.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 47.5,
    "litter_output_g": 117.4,
    "weight_kg": 4.979,
    "rest_min": 724.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-27",
    "water_ml": 216.2,
    "food_g": 70.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 47.8,
    "litter_output_g": 117.2,
    "weight_kg": 4.98,
    "rest_min": 858.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-28",
    "water_ml": 238.2,
    "food_g": 69.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 42.0,
    "litter_output_g": 144.2,
    "weight_kg": 4.975,
    "rest_min": 794.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-29",
    "water_ml": 221.1,
    "food_g": 80.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 45.0,
    "litter_output_g": 116.4,
    "weight_kg": 4.989,
    "rest_min": 732.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-09-30",
    "water_ml": 215.2,
    "food_g": 69.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 38.8,
    "litter_output_g": 118.1,
    "weight_kg": 5.011,
    "rest_min": 863.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-01",
    "water_ml": 246.0,
    "food_g": 76.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 36.5,
    "litter_output_g": 147.6,
    "weight_kg": 4.977,
    "rest_min": 871.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-02",
    "water_ml": 216.2,
    "food_g": 74.1,
    "litter_visits": 4.0,
    "litter_avg_sec": 43.2,
    "litter_output_g": 118.7,
    "weight_kg": 5.013,
    "rest_min": 787.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-03",
    "water_ml": 252.6,
    "food_g": 75.3,
    "litter_visits": 4.0,
    "litter_avg_sec": 49.2,
    "litter_output_g": 129.8,
    "weight_kg": 4.998,
    "rest_min": 746.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-04",
    "water_ml": 248.4,
    "food_g": 71.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 38.3,
    "litter_output_g": 151.0,
    "weight_kg": 5.021,
    "rest_min": 820.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-05",
    "water_ml": 243.9,
    "food_g": 78.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 45.5,
    "litter_output_g": 145.6,
    "weight_kg": 5.005,
    "rest_min": 881.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-06",
    "water_ml": 215.4,
    "food_g": 79.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 36.5,
    "litter_output_g": 146.0,
    "weight_kg": 5.008,
    "rest_min": 835.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-07",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "simba",
    "date": "2026-10-08",
    "water_ml": 238.0,
    "food_g": 69.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 42.0,
    "litter_output_g": 136.5,
    "weight_kg": 4.976,
    "rest_min": 862.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-09",
    "water_ml": 218.6,
    "food_g": 71.0,
    "litter_visits": 3.0,
    "litter_avg_sec": 44.7,
    "litter_output_g": 139.0,
    "weight_kg": 5.005,
    "rest_min": 849.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-10",
    "water_ml": 244.7,
    "food_g": 79.8,
    "litter_visits": 2.0,
    "litter_avg_sec": 38.0,
    "litter_output_g": 107.1,
    "weight_kg": 4.991,
    "rest_min": 888.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-11",
    "water_ml": 243.3,
    "food_g": 77.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 41.0,
    "litter_output_g": 134.9,
    "weight_kg": 4.976,
    "rest_min": 825.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-12",
    "water_ml": 225.5,
    "food_g": 76.4,
    "litter_visits": 4.0,
    "litter_avg_sec": 42.0,
    "litter_output_g": 136.7,
    "weight_kg": 4.999,
    "rest_min": 717.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-13",
    "water_ml": 220.5,
    "food_g": 76.3,
    "litter_visits": 2.0,
    "litter_avg_sec": 43.5,
    "litter_output_g": 152.6,
    "weight_kg": 5.02,
    "rest_min": 808.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-14",
    "water_ml": 216.6,
    "food_g": 74.2,
    "litter_visits": 4.0,
    "litter_avg_sec": 45.8,
    "litter_output_g": 126.0,
    "weight_kg": 4.987,
    "rest_min": 842.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-15",
    "water_ml": 246.0,
    "food_g": 76.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 45.5,
    "litter_output_g": 129.8,
    "weight_kg": 5.013,
    "rest_min": 837.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-16",
    "water_ml": 241.2,
    "food_g": 71.4,
    "litter_visits": 3.0,
    "litter_avg_sec": 36.7,
    "litter_output_g": 134.6,
    "weight_kg": 5.018,
    "rest_min": 836.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-17",
    "water_ml": 233.2,
    "food_g": 76.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 41.5,
    "litter_output_g": 140.9,
    "weight_kg": 5.005,
    "rest_min": 707.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-18",
    "water_ml": 211.5,
    "food_g": 77.2,
    "litter_visits": 3.0,
    "litter_avg_sec": 46.0,
    "litter_output_g": 133.1,
    "weight_kg": 5.0,
    "rest_min": 700.0,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-19",
    "water_ml": 215.4,
    "food_g": 69.5,
    "litter_visits": 3.0,
    "litter_avg_sec": 44.7,
    "litter_output_g": 117.1,
    "weight_kg": 4.976,
    "rest_min": 759.2,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-20",
    "water_ml": 224.5,
    "food_g": 77.7,
    "litter_visits": 4.0,
    "litter_avg_sec": 48.0,
    "litter_output_g": 153.8,
    "weight_kg": 5.0,
    "rest_min": 767.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-21",
    "water_ml": 240.9,
    "food_g": 75.7,
    "litter_visits": 4.0,
    "litter_avg_sec": 41.0,
    "litter_output_g": 118.6,
    "weight_kg": 5.002,
    "rest_min": 793.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-22",
    "water_ml": 239.4,
    "food_g": 69.2,
    "litter_visits": 3.0,
    "litter_avg_sec": 39.7,
    "litter_output_g": 135.0,
    "weight_kg": 4.994,
    "rest_min": 845.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-23",
    "water_ml": 215.3,
    "food_g": 80.0,
    "litter_visits": 4.0,
    "litter_avg_sec": 44.8,
    "litter_output_g": 124.4,
    "weight_kg": 5.022,
    "rest_min": 768.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-24",
    "water_ml": 242.3,
    "food_g": 72.6,
    "litter_visits": 4.0,
    "litter_avg_sec": 40.2,
    "litter_output_g": 124.7,
    "weight_kg": 5.018,
    "rest_min": 812.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-25",
    "water_ml": 207.7,
    "food_g": 71.1,
    "litter_visits": 2.0,
    "litter_avg_sec": 39.5,
    "litter_output_g": 154.7,
    "weight_kg": 4.976,
    "rest_min": 775.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-26",
    "water_ml": 206.7,
    "food_g": 69.2,
    "litter_visits": 3.0,
    "litter_avg_sec": 40.7,
    "litter_output_g": 140.6,
    "weight_kg": 5.02,
    "rest_min": 812.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-27",
    "water_ml": 226.3,
    "food_g": 71.9,
    "litter_visits": 3.0,
    "litter_avg_sec": 47.3,
    "litter_output_g": 132.8,
    "weight_kg": 4.997,
    "rest_min": 879.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-28",
    "water_ml": 214.5,
    "food_g": 70.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 45.0,
    "litter_output_g": 118.0,
    "weight_kg": 5.005,
    "rest_min": 825.8,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-29",
    "water_ml": 250.0,
    "food_g": 73.3,
    "litter_visits": 2.0,
    "litter_avg_sec": 49.0,
    "litter_output_g": 152.9,
    "weight_kg": 4.991,
    "rest_min": 754.4,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-30",
    "water_ml": 250.8,
    "food_g": 81.1,
    "litter_visits": 3.0,
    "litter_avg_sec": 43.3,
    "litter_output_g": 130.3,
    "weight_kg": 4.989,
    "rest_min": 817.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-10-31",
    "water_ml": 223.2,
    "food_g": 79.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 43.8,
    "litter_output_g": 136.8,
    "weight_kg": 4.981,
    "rest_min": 812.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-11-01",
    "water_ml": 235.9,
    "food_g": 78.8,
    "litter_visits": 3.0,
    "litter_avg_sec": 46.7,
    "litter_output_g": 137.3,
    "weight_kg": 4.986,
    "rest_min": 666.3,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-11-02",
    "water_ml": 215.0,
    "food_g": 71.7,
    "litter_visits": 4.0,
    "litter_avg_sec": 38.0,
    "litter_output_g": 118.3,
    "weight_kg": 4.987,
    "rest_min": 725.9,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-11-03",
    "water_ml": null,
    "food_g": null,
    "litter_visits": null,
    "litter_avg_sec": null,
    "litter_output_g": null,
    "weight_kg": null,
    "rest_min": null,
    "sleep_breaths": null,
    "data_ok": false
   },
   {
    "cat_id": "simba",
    "date": "2026-11-04",
    "water_ml": 237.5,
    "food_g": 75.2,
    "litter_visits": 2.0,
    "litter_avg_sec": 45.0,
    "litter_output_g": 123.6,
    "weight_kg": 5.015,
    "rest_min": 797.1,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-11-05",
    "water_ml": 222.4,
    "food_g": 81.0,
    "litter_visits": 3.0,
    "litter_avg_sec": 49.0,
    "litter_output_g": 125.8,
    "weight_kg": 5.009,
    "rest_min": 773.7,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-11-06",
    "water_ml": 212.7,
    "food_g": 78.8,
    "litter_visits": 4.0,
    "litter_avg_sec": 43.0,
    "litter_output_g": 120.8,
    "weight_kg": 5.025,
    "rest_min": 871.6,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-11-07",
    "water_ml": 231.0,
    "food_g": 67.7,
    "litter_visits": 2.0,
    "litter_avg_sec": 46.5,
    "litter_output_g": 129.8,
    "weight_kg": 4.979,
    "rest_min": 820.5,
    "sleep_breaths": null,
    "data_ok": true
   },
   {
    "cat_id": "simba",
    "date": "2026-11-08",
    "water_ml": 244.7,
    "food_g": 74.5,
    "litter_visits": 4.0,
    "litter_avg_sec": 38.8,
    "litter_output_g": 149.2,
    "weight_kg": 4.989,
    "rest_min": 750.6,
    "sleep_breaths": null,
    "data_ok": true
   }
  ]
 },
 "early": {
  "mochi": [
   {
    "level": "good",
    "message": "Learning Mochi's usual patterns (1 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Mochi's usual patterns (2 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Mochi's usual patterns (3 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Mochi's usual patterns (4 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Mochi's usual patterns (5 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Mochi's usual patterns (6 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Mochi's usual patterns (7 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Mochi's usual patterns (8 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Mochi's usual patterns (9 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Mochi's usual patterns (10 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Mochi's usual patterns (11 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Mochi's usual patterns (12 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Mochi's usual patterns (13 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Mochi's usual patterns (14 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   }
  ],
  "luna": [
   {
    "level": "good",
    "message": "Learning Luna's usual patterns (1 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Luna's usual patterns (2 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Luna's usual patterns (3 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Luna's usual patterns (4 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Luna's usual patterns (5 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Luna's usual patterns (6 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Luna's usual patterns (7 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Luna's usual patterns (8 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Luna's usual patterns (9 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Luna's usual patterns (10 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Luna's usual patterns (11 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Luna's usual patterns (12 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Luna's usual patterns (13 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Luna's usual patterns (14 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   }
  ],
  "lena": [
   {
    "level": "good",
    "message": "Learning Lena's usual patterns (1 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Lena's usual patterns (2 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Lena's usual patterns (3 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Lena's usual patterns (4 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Lena's usual patterns (5 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Lena's usual patterns (6 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Lena's usual patterns (7 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Lena's usual patterns (8 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Lena's usual patterns (9 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Lena's usual patterns (10 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Lena's usual patterns (11 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Lena's usual patterns (12 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Lena's usual patterns (13 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Lena's usual patterns (14 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   }
  ],
  "oscar": [
   {
    "level": "good",
    "message": "Learning Oscar's usual patterns (1 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Oscar's usual patterns (2 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Oscar's usual patterns (3 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Oscar's usual patterns (4 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Oscar's usual patterns (5 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Oscar's usual patterns (6 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Oscar's usual patterns (7 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Oscar's usual patterns (8 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Oscar's usual patterns (9 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Oscar's usual patterns (10 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Oscar's usual patterns (11 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Oscar's usual patterns (12 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Oscar's usual patterns (13 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Oscar's usual patterns (14 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   }
  ],
  "bella": [
   {
    "level": "good",
    "message": "Learning Bella's usual patterns (1 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Bella's usual patterns (2 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Bella's usual patterns (3 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Bella's usual patterns (4 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Bella's usual patterns (5 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Bella's usual patterns (6 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Bella's usual patterns (7 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Bella's usual patterns (8 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Bella's usual patterns (9 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Bella's usual patterns (10 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Bella's usual patterns (11 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Bella's usual patterns (12 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Bella's usual patterns (13 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Bella's usual patterns (14 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   }
  ],
  "milo": [
   {
    "level": "good",
    "message": "Learning Milo's usual patterns (1 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Milo's usual patterns (2 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Milo's usual patterns (3 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Milo's usual patterns (4 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Milo's usual patterns (5 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Milo's usual patterns (6 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Milo's usual patterns (7 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Milo's usual patterns (8 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Milo's usual patterns (9 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Milo's usual patterns (10 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Milo's usual patterns (11 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Milo's usual patterns (12 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Milo's usual patterns (13 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Milo's usual patterns (14 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   }
  ],
  "coco": [
   {
    "level": "good",
    "message": "Learning Coco's usual patterns (1 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Coco's usual patterns (2 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Coco's usual patterns (3 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Coco's usual patterns (4 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Coco's usual patterns (5 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Coco's usual patterns (6 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Coco's usual patterns (7 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Coco's usual patterns (8 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Coco's usual patterns (9 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Coco's usual patterns (10 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Coco's usual patterns (11 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Coco's usual patterns (12 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Coco's usual patterns (13 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Coco's usual patterns (14 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   }
  ],
  "nala": [
   {
    "level": "good",
    "message": "Learning Nala's usual patterns (1 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Nala's usual patterns (2 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Nala's usual patterns (3 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Nala's usual patterns (4 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Nala's usual patterns (5 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Nala's usual patterns (6 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Nala's usual patterns (7 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Nala's usual patterns (8 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Nala's usual patterns (9 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Nala's usual patterns (10 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Nala's usual patterns (11 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Nala's usual patterns (12 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Nala's usual patterns (13 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Nala's usual patterns (14 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   }
  ],
  "pip": [
   {
    "level": "good",
    "message": "Learning Pip's usual patterns (1 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Pip's usual patterns (2 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Pip's usual patterns (3 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Pip's usual patterns (4 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Pip's usual patterns (5 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Pip's usual patterns (6 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Pip's usual patterns (7 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Pip's usual patterns (8 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Pip's usual patterns (9 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Pip's usual patterns (10 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Pip's usual patterns (11 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Pip's usual patterns (12 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Pip's usual patterns (13 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Pip's usual patterns (14 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   }
  ],
  "ziggy": [
   {
    "level": "good",
    "message": "Learning Ziggy's usual patterns (1 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Ziggy's usual patterns (2 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Ziggy's usual patterns (3 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Ziggy's usual patterns (4 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Ziggy's usual patterns (5 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Ziggy's usual patterns (6 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Ziggy's usual patterns (7 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Ziggy's usual patterns (8 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Ziggy's usual patterns (9 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Ziggy's usual patterns (10 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Ziggy's usual patterns (11 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Ziggy's usual patterns (12 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Ziggy's usual patterns (13 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Ziggy's usual patterns (14 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   }
  ],
  "simba": [
   {
    "level": "good",
    "message": "Learning Simba's usual patterns (1 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Simba's usual patterns (2 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Simba's usual patterns (3 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Simba's usual patterns (4 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "urgent",
    "message": "Simba visited the litter box 20 times in the last day. Most healthy cats only go a few times a day. This pattern can need urgent care. Contact your vet or an emergency clinic now.",
    "details": {
     "changed": "20 litter visits in the last day. Most healthy cats go only a few times a day.",
     "maybe_nothing": "",
     "call_if": "Contact your vet or an emergency clinic now. Don't wait to see if it passes."
    }
   },
   {
    "level": "good",
    "message": "Learning Simba's usual patterns (6 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Simba's usual patterns (7 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Simba's usual patterns (8 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Simba's usual patterns (9 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Simba's usual patterns (10 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Simba's usual patterns (11 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Simba's usual patterns (12 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Simba's usual patterns (13 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   },
   {
    "level": "good",
    "message": "Learning Simba's usual patterns (14 of 14 days). If you notice any symptoms, contact your vet.",
    "details": {
     "changed": "Not enough days yet to know what's usual for this cat.",
     "maybe_nothing": "",
     "call_if": "Purrcast tracks changes in habits and measurements; it can't detect every illness. If you notice any other symptoms, contact your vet."
    }
   }
  ]
 }
};
