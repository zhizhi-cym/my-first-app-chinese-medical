import { FormulaItem } from '../types';

export const FORMULA_CATEGORIES_LIST: string[] = [
  '解表剂',
  '泻下剂',
  '和解剂',
  '清热剂',
  '祛暑剂',
  '温里剂',
  '表里双解剂',
  '补益剂',
  '安神剂',
  '开窍剂',
  '固涩剂',
  '理气剂',
  '理血剂',
  '治风剂',
  '治燥剂',
  '祛湿剂',
  '祛痰剂',
  '消食剂',
  '驱虫剂',
  '治痈疡剂',
];

export const FORMULA_DATABASE: FormulaItem[] = [
  {
    "id": "f_1",
    "name": "麻黄汤",
    "pinyin": "",
    "code": "350",
    "category": "解表剂",
    "subCategory": "辛温解表",
    "source": "《伤寒论》",
    "efficacy": "外感风寒表实证",
    "indications": [
      "外感风寒表实证"
    ],
    "mnemonicHtml": "<u>麻黄</u>三中二桂枝，杏仁炙草四般施。<div>恶寒发热头身痛，无汗而喘服之宜。</div>",
    "mnemonic": "麻黄 三中二桂枝，杏仁炙草四般施。 恶寒发热头身痛，无汗而喘服之宜。",
    "composition": [
      "麻黄"
    ]
  },
  {
    "id": "f_2",
    "name": "桂枝汤",
    "pinyin": "",
    "code": "350",
    "category": "解表剂",
    "subCategory": "辛温解表",
    "source": "《伤寒论》",
    "efficacy": "外感风寒表虚证或营卫不和证",
    "indications": [
      "外感风寒表虚证或营卫不和证"
    ],
    "mnemonicHtml": "<u>桂枝</u>芍药等量伍，姜枣甘草微火煮。<div>解肌发表调营卫，中风表虚自汗出。</div>",
    "mnemonic": "桂枝 芍药等量伍，姜枣甘草微火煮。 解肌发表调营卫，中风表虚自汗出。",
    "composition": [
      "桂枝"
    ]
  },
  {
    "id": "f_3",
    "name": "小青龙汤",
    "pinyin": "",
    "code": "350",
    "category": "解表剂",
    "subCategory": "辛温解表",
    "source": "《伤寒论》",
    "efficacy": "外寒内饮证",
    "indications": [
      "外寒内饮证"
    ],
    "mnemonicHtml": "小青龙汤治水气，解表散寒兼温肺。<div><u>桂麻</u>干姜芍药甘，细辛半夏兼五味。</div>",
    "mnemonic": "小青龙汤治水气，解表散寒兼温肺。 桂麻 干姜芍药甘，细辛半夏兼五味。",
    "composition": [
      "桂麻"
    ]
  },
  {
    "id": "f_4",
    "name": "九味羌活汤",
    "pinyin": "",
    "code": "350",
    "category": "解表剂",
    "subCategory": "辛温解表",
    "source": "《方剂学》核心名方",
    "efficacy": "外感风寒湿邪，兼有里热证",
    "indications": [
      "外感风寒湿邪，兼有里热证"
    ],
    "mnemonicHtml": "九味<u>羌活</u>防芎苍，辛芷芩草生地黄。<div>发汗祛湿兼清热，分经论治变通良。</div><div><br></div><div>防风</div>",
    "mnemonic": "九味 羌活 防芎苍，辛芷芩草生地黄。 发汗祛湿兼清热，分经论治变通良。 防风",
    "composition": [
      "羌活"
    ]
  },
  {
    "id": "f_5",
    "name": "香苏散",
    "pinyin": "",
    "code": "351",
    "category": "解表剂",
    "subCategory": "辛温解表",
    "source": "《方剂学》核心名方",
    "efficacy": "外感风寒内有气滞证",
    "indications": [
      "外感风寒内有气滞证"
    ],
    "mnemonicHtml": "香<u>苏</u>散内草陈皮，疏散风寒中理气。<div>外感风寒兼气滞，寒热无汗胸脘痞。</div>",
    "mnemonic": "香 苏 散内草陈皮，疏散风寒中理气。 外感风寒兼气滞，寒热无汗胸脘痞。",
    "composition": [
      "苏"
    ]
  },
  {
    "id": "f_6",
    "name": "正柴胡饮",
    "pinyin": "",
    "code": "351",
    "category": "解表剂",
    "subCategory": "辛温解表",
    "source": "《景岳全书》",
    "efficacy": "外感风寒轻证",
    "indications": [
      "外感风寒轻证"
    ],
    "mnemonicHtml": "正<u>柴胡</u>饮平散方，芍药陈草生姜防。<div>轻疏风邪解热痛，表寒轻证服之康。</div>",
    "mnemonic": "正 柴胡 饮平散方，芍药陈草生姜防。 轻疏风邪解热痛，表寒轻证服之康。",
    "composition": [
      "柴胡"
    ]
  },
  {
    "id": "f_7",
    "name": "大青龙汤",
    "pinyin": "",
    "code": "350",
    "category": "解表剂",
    "subCategory": "辛温解表",
    "source": "《伤寒论》",
    "efficacy": "外感风寒，内有郁热；溢饮",
    "indications": [
      "外感风寒，内有郁热",
      "溢饮"
    ],
    "mnemonicHtml": "大青龙汤桂<u>麻黄</u>，杏草石膏姜枣藏。<div>太阳无汗兼烦躁，发表清里溢饮良。</div>",
    "mnemonic": "大青龙汤桂 麻黄 ，杏草石膏姜枣藏。 太阳无汗兼烦躁，发表清里溢饮良。",
    "composition": [
      "麻黄"
    ]
  },
  {
    "id": "f_8",
    "name": "射干麻黄汤",
    "pinyin": "",
    "code": "350",
    "category": "解表剂",
    "subCategory": "辛温解表",
    "source": "《伤寒论》",
    "efficacy": "痰饮、寒饮郁结，气逆咳喘证",
    "indications": [
      "痰饮",
      "寒饮郁结，气逆咳喘证"
    ],
    "mnemonicHtml": "射干麻黄与生姜，细辛紫菀款冬藏。<div>大枣半夏加五味，寒饮喘咳水鸡降。</div>",
    "mnemonic": "射干麻黄与生姜，细辛紫菀款冬藏。 大枣半夏加五味，寒饮喘咳水鸡降。",
    "composition": [
      "射干麻黄汤"
    ]
  },
  {
    "id": "f_9",
    "name": "荆防败毒散",
    "pinyin": "",
    "code": "350",
    "category": "解表剂",
    "subCategory": "辛温解表",
    "source": "《方剂学》核心名方",
    "efficacy": "疮肿初起",
    "indications": [
      "疮肿初起"
    ],
    "mnemonicHtml": "荆防败毒茯苓草，枳桔柴前羌独芎。<div>发汗解表消疮痛，疮肿初起表证除。</div><div><br></div><div>枳壳</div>",
    "mnemonic": "荆防败毒茯苓草，枳桔柴前羌独芎。 发汗解表消疮痛，疮肿初起表证除。 枳壳",
    "composition": [
      "荆防败毒散"
    ]
  },
  {
    "id": "f_10",
    "name": "银翘散",
    "pinyin": "",
    "code": "351",
    "category": "解表剂",
    "subCategory": "辛凉解表",
    "source": "《温病条辨》",
    "efficacy": "温病初起",
    "indications": [
      "温病初起"
    ],
    "mnemonicHtml": "<u>银翘</u>散主上焦疴，竹叶荆牛薄荷豉。<div>甘桔芦根凉解法，辛凉透表热毒痊。</div>",
    "mnemonic": "银翘 散主上焦疴，竹叶荆牛薄荷豉。 甘桔芦根凉解法，辛凉透表热毒痊。",
    "composition": [
      "银翘"
    ]
  },
  {
    "id": "f_11",
    "name": "桑菊饮",
    "pinyin": "",
    "code": "351",
    "category": "解表剂",
    "subCategory": "辛凉解表",
    "source": "《温病条辨》",
    "efficacy": "风温初起",
    "indications": [
      "风温初起"
    ],
    "mnemonicHtml": "<u>桑菊</u>饮中桔杏翘，芦根甘草薄荷饶。<div>清疏肺卫轻宣剂，风温咳嗽服之消。</div>",
    "mnemonic": "桑菊 饮中桔杏翘，芦根甘草薄荷饶。 清疏肺卫轻宣剂，风温咳嗽服之消。",
    "composition": [
      "桑菊"
    ]
  },
  {
    "id": "f_12",
    "name": "麻杏甘石汤",
    "pinyin": "",
    "code": "351",
    "category": "解表剂",
    "subCategory": "辛凉解表",
    "source": "《方剂学》核心名方",
    "efficacy": "外感风邪，邪热壅肺证",
    "indications": [
      "外感风邪，邪热壅肺证"
    ],
    "mnemonicHtml": "仲景<u>麻</u>杏甘石汤，辛凉宣肺清热良。<div>邪热壅肺咳喘急，有汗无汗均可尝。</div>",
    "mnemonic": "仲景 麻 杏甘石汤，辛凉宣肺清热良。 邪热壅肺咳喘急，有汗无汗均可尝。",
    "composition": [
      "麻"
    ]
  },
  {
    "id": "f_13",
    "name": "越婢汤",
    "pinyin": "",
    "code": "351",
    "category": "解表剂",
    "subCategory": "辛凉解表",
    "source": "《方剂学》核心名方",
    "efficacy": "风水夹热证",
    "indications": [
      "风水夹热证"
    ],
    "mnemonicHtml": "越婢石膏与麻黄，甘草大枣与生姜。<div>发汗行水风水热，恶风身肿自汗良。</div>",
    "mnemonic": "越婢石膏与麻黄，甘草大枣与生姜。 发汗行水风水热，恶风身肿自汗良。",
    "composition": [
      "越婢汤"
    ]
  },
  {
    "id": "f_14",
    "name": "升麻葛根汤",
    "pinyin": "",
    "code": "351",
    "category": "解表剂",
    "subCategory": "辛凉解表",
    "source": "《方剂学》核心名方",
    "efficacy": "麻疹初起",
    "indications": [
      "麻疹初起"
    ],
    "mnemonicHtml": "<u>升麻</u>葛根芍药炙，麻疹初起不透方。<div>辛凉解肌热毒解，疹发不畅舌红良。</div>",
    "mnemonic": "升麻 葛根芍药炙，麻疹初起不透方。 辛凉解肌热毒解，疹发不畅舌红良。",
    "composition": [
      "升麻"
    ]
  },
  {
    "id": "f_15",
    "name": "柴葛解肌汤",
    "pinyin": "",
    "code": "351",
    "category": "解表剂",
    "subCategory": "辛凉解表",
    "source": "《方剂学》核心名方",
    "efficacy": "感冒风寒、邪郁化热、三阳合病",
    "indications": [
      "感冒风寒",
      "邪郁化热",
      "三阳合病"
    ],
    "mnemonicHtml": "<u>柴葛</u>解肌芷桔羌，膏芩芍草枣生姜。<div>恶寒渐轻热增重，解肌清热此方良。</div>",
    "mnemonic": "柴葛 解肌芷桔羌，膏芩芍草枣生姜。 恶寒渐轻热增重，解肌清热此方良。",
    "composition": [
      "柴葛"
    ]
  },
  {
    "id": "f_16",
    "name": "葱豉桔梗汤",
    "pinyin": "",
    "code": "351",
    "category": "解表剂",
    "subCategory": "辛凉解表",
    "source": "《方剂学》核心名方",
    "efficacy": "风温初起",
    "indications": [
      "风温初起"
    ],
    "mnemonicHtml": "<u>葱豉</u>桔梗薄荷翘，山栀竹叶生甘草。<div>热邪束肺嗽咽痛，风温初起此方疗。</div>",
    "mnemonic": "葱豉 桔梗薄荷翘，山栀竹叶生甘草。 热邪束肺嗽咽痛，风温初起此方疗。",
    "composition": [
      "葱豉"
    ]
  },
  {
    "id": "f_17",
    "name": "败毒散",
    "pinyin": "",
    "code": "351",
    "category": "解表剂",
    "subCategory": "扶正解表",
    "source": "《方剂学》核心名方",
    "efficacy": "气虚之人外感风寒湿邪",
    "indications": [
      "气虚之人外感风寒湿邪"
    ],
    "mnemonicHtml": "人参败毒茯苓草，枳桔柴前<u>羌独</u>芎。<div>薄荷少许姜三片，益气解表有奇功。</div>",
    "mnemonic": "人参败毒茯苓草，枳桔柴前 羌独 芎。 薄荷少许姜三片，益气解表有奇功。",
    "composition": [
      "羌独"
    ]
  },
  {
    "id": "f_18",
    "name": "再造散",
    "pinyin": "",
    "code": "352",
    "category": "解表剂",
    "subCategory": "扶正解表",
    "source": "《方剂学》核心名方",
    "efficacy": "阳气虚弱，外感风寒表证",
    "indications": [
      "阳气虚弱，外感风寒表证"
    ],
    "mnemonicHtml": "再造散用参芪甘，桂附羌防芎芍参。<div>细辛大枣煨姜煎，益气助阳表散寒。</div><div><br></div><div>桂枝 防风</div>",
    "mnemonic": "再造散用参芪甘，桂附羌防芎芍参。 细辛大枣煨姜煎，益气助阳表散寒。 桂枝 防风",
    "composition": [
      "再造散"
    ]
  },
  {
    "id": "f_19",
    "name": "加减葳蕤汤",
    "pinyin": "",
    "code": "352",
    "category": "解表剂",
    "subCategory": "扶正解表",
    "source": "《方剂学》核心名方",
    "efficacy": "素体阴虚，外感风热证",
    "indications": [
      "素体阴虚，外感风热证"
    ],
    "mnemonicHtml": "加减<u>葳蕤</u>用薄荷，豆豉葱白桔梗随。<div>草枣白薇共八味，滋阴发汗此方魁。</div>",
    "mnemonic": "加减 葳蕤 用薄荷，豆豉葱白桔梗随。 草枣白薇共八味，滋阴发汗此方魁。",
    "composition": [
      "葳蕤"
    ]
  },
  {
    "id": "f_20",
    "name": "麻黄细辛附子汤",
    "pinyin": "",
    "code": "352",
    "category": "解表剂",
    "subCategory": "扶正解表",
    "source": "《方剂学》核心名方",
    "efficacy": "素体阳虚，外感风寒表证；暴哑",
    "indications": [
      "素体阳虚，外感风寒表证",
      "暴哑"
    ],
    "mnemonicHtml": "<u>麻黄</u>细辛附子汤，助阳解表两法彰。<div>少阴反发热脉沉，阳虚外感暴哑痊。</div>",
    "mnemonic": "麻黄 细辛附子汤，助阳解表两法彰。 少阴反发热脉沉，阳虚外感暴哑痊。",
    "composition": [
      "麻黄"
    ]
  },
  {
    "id": "f_21",
    "name": "参苏饮",
    "pinyin": "",
    "code": "352",
    "category": "解表剂",
    "subCategory": "扶正解表",
    "source": "《方剂学》核心名方",
    "efficacy": "气虚外感风寒，内有痰湿证",
    "indications": [
      "气虚外感风寒，内有痰湿证"
    ],
    "mnemonicHtml": "参<u>苏</u>饮内用陈皮，枳壳前胡半夏齐。<div>干葛木香甘桔茯，姜枣气虚痰湿宜。</div>",
    "mnemonic": "参 苏 饮内用陈皮，枳壳前胡半夏齐。 干葛木香甘桔茯，姜枣气虚痰湿宜。",
    "composition": [
      "苏"
    ]
  },
  {
    "id": "f_22",
    "name": "葱白七味饮",
    "pinyin": "",
    "code": "352",
    "category": "解表剂",
    "subCategory": "扶正解表",
    "source": "《方剂学》核心名方",
    "efficacy": "血虚外感风寒证",
    "indications": [
      "血虚外感风寒证"
    ],
    "mnemonicHtml": "葱白七味外台方，新豉葛根与生姜。<div>麦冬生地千扬水，血虚外感最相当。</div>",
    "mnemonic": "葱白七味外台方，新豉葛根与生姜。 麦冬生地千扬水，血虚外感最相当。",
    "composition": [
      "葱白七味饮"
    ]
  },
  {
    "id": "f_23",
    "name": "大承气汤",
    "pinyin": "",
    "code": "352",
    "category": "泻下剂",
    "subCategory": "寒下",
    "source": "《伤寒论》",
    "efficacy": "阳明腑实热结；热结旁流；里热实证之热厥、痉病或发狂",
    "indications": [
      "阳明腑实热结",
      "热结旁流",
      "里热实证之热厥",
      "痉病或发狂"
    ],
    "mnemonicHtml": "大承气汤<b><u>大黄</u></b>硝，枳实厚朴先煮好。<div>峻下热结急存阴，阳明腑实重症疗。</div><div>去硝名为小承气，缓下热结服之效。</div><div>调味承气硝黄草，轻下热结此方宜。</div>",
    "mnemonic": "大承气汤 大黄 硝，枳实厚朴先煮好。 峻下热结急存阴，阳明腑实重症疗。 去硝名为小承气，缓下热结服之效。 调味承气硝黄草，轻下热结此方宜。",
    "composition": [
      "大黄"
    ]
  },
  {
    "id": "f_24",
    "name": "大陷胸汤",
    "pinyin": "",
    "code": "352",
    "category": "泻下剂",
    "subCategory": "寒下",
    "source": "《方剂学》核心名方",
    "efficacy": "水热互结之大结胸证",
    "indications": [
      "水热互结之大结胸证"
    ],
    "mnemonicHtml": "大陷胸汤用硝黄，<u>甘遂</u>一克共成方。<div>专治水热结胸证，泻热逐水效非常。</div>",
    "mnemonic": "大陷胸汤用硝黄， 甘遂 一克共成方。 专治水热结胸证，泻热逐水效非常。",
    "composition": [
      "甘遂"
    ]
  },
  {
    "id": "f_25",
    "name": "大黄牡丹汤",
    "pinyin": "",
    "code": "353",
    "category": "泻下剂",
    "subCategory": "寒下",
    "source": "《金匮要略》",
    "efficacy": "湿热淤滞之肠痈初起",
    "indications": [
      "湿热淤滞之肠痈初起"
    ],
    "mnemonicHtml": "金匱<u>大黄</u>牡丹汤，<u>桃仁</u>瓜子芒硝襄。<div>肠痈初起腹按痛，泻热逐瘀肿结康。</div>",
    "mnemonic": "金匱 大黄 牡丹汤， 桃仁 瓜子芒硝襄。 肠痈初起腹按痛，泻热逐瘀肿结康。",
    "composition": [
      "大黄",
      "桃仁"
    ]
  },
  {
    "id": "f_26",
    "name": "温脾汤",
    "pinyin": "",
    "code": "353",
    "category": "泻下剂",
    "subCategory": "温下",
    "source": "《方剂学》核心名方",
    "efficacy": "脾阳不足，冷积内停证",
    "indications": [
      "脾阳不足，冷积内停证"
    ],
    "mnemonicHtml": "温脾参附与干姜，甘草当归硝大黄。<div>寒热并行补兼泻，温痛寒积振脾阳。</div><div>若加当归与芒硝，大黄量增至五两。</div>",
    "mnemonic": "温脾参附与干姜，甘草当归硝大黄。 寒热并行补兼泻，温痛寒积振脾阳。 若加当归与芒硝，大黄量增至五两。",
    "composition": [
      "温脾汤"
    ]
  },
  {
    "id": "f_27",
    "name": "大黄附子汤",
    "pinyin": "",
    "code": "353",
    "category": "泻下剂",
    "subCategory": "温下",
    "source": "《方剂学》核心名方",
    "efficacy": "寒积里实证",
    "indications": [
      "寒积里实证"
    ],
    "mnemonicHtml": "大黄附子细辛汤，寒积腹痛便秘方。<div>寒积里实需止痛，温里散寒通便强。</div>",
    "mnemonic": "大黄附子细辛汤，寒积腹痛便秘方。 寒积里实需止痛，温里散寒通便强。",
    "composition": [
      "大黄附子汤"
    ]
  },
  {
    "id": "f_28",
    "name": "济川煎",
    "pinyin": "",
    "code": "353",
    "category": "泻下剂",
    "subCategory": "润下",
    "source": "《景岳全书》",
    "efficacy": "肾阳虚弱，阴津不足之便秘",
    "indications": [
      "肾阳虚弱，阴津不足之便秘"
    ],
    "mnemonicHtml": "济川归膝<u>肉苁蓉</u>，泽泻升麻枳壳从。<div>肾阳精亏肠中燥，寓通于补法堪宗。</div>",
    "mnemonic": "济川归膝 肉苁蓉 ，泽泻升麻枳壳从。 肾阳精亏肠中燥，寓通于补法堪宗。",
    "composition": [
      "肉苁蓉"
    ]
  },
  {
    "id": "f_29",
    "name": "麻子仁丸",
    "pinyin": "",
    "code": "353",
    "category": "泻下剂",
    "subCategory": "润下",
    "source": "《方剂学》核心名方",
    "efficacy": "脾约证",
    "indications": [
      "脾约证"
    ],
    "mnemonicHtml": "<u>麻子仁</u>丸治脾约，枳朴大黄麻杏芍。<div>胃燥津枯便难解，润肠泄热功效高。</div>",
    "mnemonic": "麻子仁 丸治脾约，枳朴大黄麻杏芍。 胃燥津枯便难解，润肠泄热功效高。",
    "composition": [
      "麻子仁"
    ]
  },
  {
    "id": "f_30",
    "name": "十枣汤",
    "pinyin": "",
    "code": "353",
    "category": "泻下剂",
    "subCategory": "逐水",
    "source": "《方剂学》核心名方",
    "efficacy": "悬饮、实水水肿",
    "indications": [
      "悬饮",
      "实水水肿"
    ],
    "mnemonicHtml": "十枣逐水效堪夸，<u>大戟甘遂与芫花</u>。<div>悬饮内停胸胁痛，实水腹胀用无差。</div>",
    "mnemonic": "十枣逐水效堪夸， 大戟甘遂与芫花 。 悬饮内停胸胁痛，实水腹胀用无差。",
    "composition": [
      "大戟甘遂与芫花"
    ]
  },
  {
    "id": "f_31",
    "name": "舟车丸",
    "pinyin": "",
    "code": "354",
    "category": "泻下剂",
    "subCategory": "逐水",
    "source": "《方剂学》核心名方",
    "efficacy": "水热内壅，气机阻滞证",
    "indications": [
      "水热内壅，气机阻滞证"
    ],
    "mnemonicHtml": "舟车牵牛及大黄，<u>遂戟芫花</u>槟木香。<div>青皮橘皮轻粉入，行气逐水热壅强。</div>",
    "mnemonic": "舟车牵牛及大黄， 遂戟芫花 槟木香。 青皮橘皮轻粉入，行气逐水热壅强。",
    "composition": [
      "遂戟芫花"
    ]
  },
  {
    "id": "f_32",
    "name": "黄龙汤",
    "pinyin": "",
    "code": "354",
    "category": "泻下剂",
    "subCategory": "攻补兼施",
    "source": "《方剂学》核心名方",
    "efficacy": "阳明热结，气血不足证",
    "indications": [
      "阳明热结，气血不足证"
    ],
    "mnemonicHtml": "黄龙枳朴与硝<u>黄</u>，参归甘桔枣生姜。<div>阳明腑实气血弱，攻补兼施效力强。</div>",
    "mnemonic": "黄龙枳朴与硝 黄 ，参归甘桔枣生姜。 阳明腑实气血弱，攻补兼施效力强。",
    "composition": [
      "黄"
    ]
  },
  {
    "id": "f_33",
    "name": "新加黄龙汤",
    "pinyin": "",
    "code": "354",
    "category": "泻下剂",
    "subCategory": "攻补兼施",
    "source": "《方剂学》核心名方",
    "efficacy": "热结里实，气阴不足证",
    "indications": [
      "热结里实，气阴不足证"
    ],
    "mnemonicHtml": "新加黄龙草硝黄，参归麦地玄海姜。<div>滋阴益气热便泻，热结里实气阴伤。</div>",
    "mnemonic": "新加黄龙草硝黄，参归麦地玄海姜。 滋阴益气热便泻，热结里实气阴伤。",
    "composition": [
      "新加黄龙汤"
    ]
  },
  {
    "id": "f_34",
    "name": "增液承气汤",
    "pinyin": "",
    "code": "354",
    "category": "泻下剂",
    "subCategory": "寒下",
    "source": "《方剂学》核心名方",
    "efficacy": "阳明热结阴亏证",
    "indications": [
      "阳明热结阴亏证"
    ],
    "mnemonicHtml": "增液承气<u>玄</u>地冬，加入硝黄效力增。<div>热结阴亏大便秘，增水行舟脏腑通，</div><div>热结阴亏痔疮久。</div>",
    "mnemonic": "增液承气 玄 地冬，加入硝黄效力增。 热结阴亏大便秘，增水行舟脏腑通， 热结阴亏痔疮久。",
    "composition": [
      "玄"
    ]
  },
  {
    "id": "f_35",
    "name": "小柴胡汤",
    "pinyin": "",
    "code": "354",
    "category": "和解剂",
    "subCategory": "和解少阳",
    "source": "《伤寒论》",
    "efficacy": "伤寒少阳证；热入血室，经水适断，寒热发作有时",
    "indications": [
      "伤寒少阳证",
      "热入血室，经水适断，寒热发作有时"
    ],
    "mnemonicHtml": "小<u>柴胡</u>汤和解供，半夏人参甘草从。<div>更用黄芩加姜枣，中风血室疟疸宗。</div>",
    "mnemonic": "小 柴胡 汤和解供，半夏人参甘草从。 更用黄芩加姜枣，中风血室疟疸宗。",
    "composition": [
      "柴胡"
    ]
  },
  {
    "id": "f_36",
    "name": "蒿芩清胆汤",
    "pinyin": "",
    "code": "354",
    "category": "和解剂",
    "subCategory": "和解少阳",
    "source": "《方剂学》核心名方",
    "efficacy": "少阳湿热痰浊证",
    "indications": [
      "少阳湿热痰浊证"
    ],
    "mnemonicHtml": "<u>蒿芩</u>清胆竹枳壳，陈夏赤茯加碧玉。<div>热重寒轻兼痰湿，清胆利湿胃痰除。</div>",
    "mnemonic": "蒿芩 清胆竹枳壳，陈夏赤茯加碧玉。 热重寒轻兼痰湿，清胆利湿胃痰除。",
    "composition": [
      "蒿芩"
    ]
  },
  {
    "id": "f_37",
    "name": "达原饮",
    "pinyin": "",
    "code": "355",
    "category": "和解剂",
    "subCategory": "和解少阳",
    "source": "《方剂学》核心名方",
    "efficacy": "温疫、疟疾",
    "indications": [
      "温疫",
      "疟疾"
    ],
    "mnemonicHtml": "达原饮中<u>槟</u>朴芩，芍药知甘草果仁。<div>开达膜原治瘟疫，避秽化浊功效神。</div>",
    "mnemonic": "达原饮中 槟 朴芩，芍药知甘草果仁。 开达膜原治瘟疫，避秽化浊功效神。",
    "composition": [
      "槟"
    ]
  },
  {
    "id": "f_38",
    "name": "柴胡桂枝干姜汤",
    "pinyin": "",
    "code": "354",
    "category": "和解剂",
    "subCategory": "和解少阳",
    "source": "《方剂学》核心名方",
    "efficacy": "伤寒邪入少阳，兼有寒饮",
    "indications": [
      "伤寒邪入少阳，兼有寒饮"
    ],
    "mnemonicHtml": "柴胡桂枝干姜汤，芩炙牡蛎栝楼根。<div>和解少阳温水饮，伤寒少阳寒饮方。</div>",
    "mnemonic": "柴胡桂枝干姜汤，芩炙牡蛎栝楼根。 和解少阳温水饮，伤寒少阳寒饮方。",
    "composition": [
      "柴胡桂枝干姜汤"
    ]
  },
  {
    "id": "f_39",
    "name": "柴胡加龙骨牡蛎汤",
    "pinyin": "",
    "code": "354",
    "category": "和解剂",
    "subCategory": "和解少阳",
    "source": "《方剂学》核心名方",
    "efficacy": "伤寒少阳兼痰热扰心证",
    "indications": [
      "伤寒少阳兼痰热扰心证"
    ],
    "mnemonicHtml": "柴胡加龙牡蛎汤，桂枝参苓夏铅丹。<div>黄芩大黄枣生姜，少阳痰热心神安。</div>",
    "mnemonic": "柴胡加龙牡蛎汤，桂枝参苓夏铅丹。 黄芩大黄枣生姜，少阳痰热心神安。",
    "composition": [
      "柴胡加龙骨牡蛎汤"
    ]
  },
  {
    "id": "f_40",
    "name": "四逆散",
    "pinyin": "",
    "code": "355",
    "category": "和解剂",
    "subCategory": "调和肝脾",
    "source": "《方剂学》核心名方",
    "efficacy": "阳郁厥逆证；肝脾不和证",
    "indications": [
      "阳郁厥逆证",
      "肝脾不和证"
    ],
    "mnemonicHtml": "四逆散方用<u>柴胡</u>，枳实芍药炙草须。<div>证为阳郁成厥逆，疏肝理脾厥自除。</div><div>腹中痛加炮附子，泄利下重加薤白。</div>",
    "mnemonic": "四逆散方用 柴胡 ，枳实芍药炙草须。 证为阳郁成厥逆，疏肝理脾厥自除。 腹中痛加炮附子，泄利下重加薤白。",
    "composition": [
      "柴胡"
    ]
  },
  {
    "id": "f_41",
    "name": "逍遥散",
    "pinyin": "",
    "code": "355",
    "category": "和解剂",
    "subCategory": "调和肝脾",
    "source": "《太平惠民和剂局方》",
    "efficacy": "肝郁脾弱血虚证",
    "indications": [
      "肝郁脾弱血虚证"
    ],
    "mnemonicHtml": "逍遥散用当归芍，<u>柴</u>苓术草加姜薄。<div>疏肝养血又健脾，肝郁血虚脾气弱。</div>",
    "mnemonic": "逍遥散用当归芍， 柴 苓术草加姜薄。 疏肝养血又健脾，肝郁血虚脾气弱。",
    "composition": [
      "柴"
    ]
  },
  {
    "id": "f_42",
    "name": "痛泻要方",
    "pinyin": "",
    "code": "355",
    "category": "和解剂",
    "subCategory": "调和肝脾",
    "source": "《方剂学》核心名方",
    "efficacy": "脾虚肝郁之痛泻",
    "indications": [
      "脾虚肝郁之痛泻"
    ],
    "mnemonicHtml": "痛泻要方用陈皮，<u>术</u>芍防风共成剂。<div>肠鸣泄泻腹又痛，治在泻肝与补脾。</div>",
    "mnemonic": "痛泻要方用陈皮， 术 芍防风共成剂。 肠鸣泄泻腹又痛，治在泻肝与补脾。",
    "composition": [
      "术"
    ]
  },
  {
    "id": "f_43",
    "name": "当归芍药散",
    "pinyin": "",
    "code": "355",
    "category": "和解剂",
    "subCategory": "调和肝脾",
    "source": "《方剂学》核心名方",
    "efficacy": "肝血不足，脾虚湿停证",
    "indications": [
      "肝血不足，脾虚湿停证"
    ],
    "mnemonicHtml": "当归芍药用川芎，白术苓泽六味同。<div>妊娠血虚少腹痛，养血调肝加健脾，</div><div>利湿缓急止痛痊。</div>",
    "mnemonic": "当归芍药用川芎，白术苓泽六味同。 妊娠血虚少腹痛，养血调肝加健脾， 利湿缓急止痛痊。",
    "composition": [
      "当归芍药散"
    ]
  },
  {
    "id": "f_44",
    "name": "半夏泻心汤、生姜泻心汤、甘草泻心汤",
    "pinyin": "",
    "code": "355",
    "category": "和解剂",
    "subCategory": "调和寒热",
    "source": "《伤寒论》",
    "efficacy": "寒热互结之痞证；水热互结痞证；胃气虚弱痞证",
    "indications": [
      "寒热互结之痞证",
      "水热互结痞证",
      "胃气虚弱痞证"
    ],
    "mnemonicHtml": "半夏泻心黄连芩，干姜草枣人参行。<div>辛开苦降消痞满，治在调阳与和阴。</div><div>减二干姜生四两，和胃消痞散水气，</div><div>水热互结痞硬良。</div><div>再加一两炙甘草，和胃补中降逆痞。</div>",
    "mnemonic": "半夏泻心黄连芩，干姜草枣人参行。 辛开苦降消痞满，治在调阳与和阴。 减二干姜生四两，和胃消痞散水气， 水热互结痞硬良。 再加一两炙甘草，和胃补中降逆痞。",
    "composition": [
      "半夏泻心汤、生姜泻心汤、甘草泻心汤"
    ]
  },
  {
    "id": "f_45",
    "name": "白虎汤",
    "pinyin": "",
    "code": "355",
    "category": "清热剂",
    "subCategory": "清气分热",
    "source": "《伤寒论》",
    "efficacy": "阳明气分热盛证",
    "indications": [
      "阳明气分热盛证"
    ],
    "mnemonicHtml": "白虎<u>膏</u>知炙草粳，气分大热此方清。<div>热渴汗出脉洪大，加入人参气津生。</div>",
    "mnemonic": "白虎 膏 知炙草粳，气分大热此方清。 热渴汗出脉洪大，加入人参气津生。",
    "composition": [
      "膏"
    ]
  },
  {
    "id": "f_46",
    "name": "竹叶石膏汤",
    "pinyin": "",
    "code": "356",
    "category": "清热剂",
    "subCategory": "清气分热",
    "source": "《方剂学》核心名方",
    "efficacy": "热病后期，余热未清，气津两伤证",
    "indications": [
      "热病后期，余热未清，气津两伤证"
    ],
    "mnemonicHtml": "竹叶<u>石膏</u>汤人参，麦二夏一炙草从。<div>再加粳米同煎服，清热益气养阴津，</div><div>伤寒温病和暑热。</div>",
    "mnemonic": "竹叶 石膏 汤人参，麦二夏一炙草从。 再加粳米同煎服，清热益气养阴津， 伤寒温病和暑热。",
    "composition": [
      "石膏"
    ]
  },
  {
    "id": "f_47",
    "name": "栀子豉汤",
    "pinyin": "",
    "code": "356",
    "category": "清热剂",
    "subCategory": "清气分热",
    "source": "《方剂学》核心名方",
    "efficacy": "热郁胸膈",
    "indications": [
      "热郁胸膈"
    ],
    "mnemonicHtml": "<u>栀子</u>豉汤治懊恼，虚烦不眠此方好。<div>热郁胸膈宣郁热，呕姜少气加甘草。</div>",
    "mnemonic": "栀子 豉汤治懊恼，虚烦不眠此方好。 热郁胸膈宣郁热，呕姜少气加甘草。",
    "composition": [
      "栀子"
    ]
  },
  {
    "id": "f_48",
    "name": "清营汤",
    "pinyin": "",
    "code": "356",
    "category": "清热剂",
    "subCategory": "清营凉血",
    "source": "《温病条辨》",
    "efficacy": "热入营分证",
    "indications": [
      "热入营分证"
    ],
    "mnemonicHtml": "清营汤治热传营，身热夜甚神不宁。<div><u>犀</u>地银翘玄连竹，丹麦清热更护阴。</div>",
    "mnemonic": "清营汤治热传营，身热夜甚神不宁。 犀 地银翘玄连竹，丹麦清热更护阴。",
    "composition": [
      "犀"
    ]
  },
  {
    "id": "f_49",
    "name": "犀角地黄汤",
    "pinyin": "",
    "code": "356",
    "category": "清热剂",
    "subCategory": "清营凉血",
    "source": "《方剂学》核心名方",
    "efficacy": "热入血分证",
    "indications": [
      "热入血分证"
    ],
    "mnemonicHtml": "<u>犀角</u>地黄芍药丹，血热妄行吐衄斑。<div>蓄血发狂舌质绛，解毒凉血散瘀安。</div>",
    "mnemonic": "犀角 地黄芍药丹，血热妄行吐衄斑。 蓄血发狂舌质绛，解毒凉血散瘀安。",
    "composition": [
      "犀角"
    ]
  },
  {
    "id": "f_50",
    "name": "清瘟败毒饮",
    "pinyin": "",
    "code": "356",
    "category": "清热剂",
    "subCategory": "清热解毒",
    "source": "《方剂学》核心名方",
    "efficacy": "温病气血两燔证",
    "indications": [
      "温病气血两燔证"
    ],
    "mnemonicHtml": "清瘟败毒地连芩，丹石栀甘竹叶寻。<div>犀角翘芍知玄桔，瘟邪泻毒亦滋阴。</div><div>口渴痛劈呕狂昏，斑血抽搐厥逆求。</div>",
    "mnemonic": "清瘟败毒地连芩，丹石栀甘竹叶寻。 犀角翘芍知玄桔，瘟邪泻毒亦滋阴。 口渴痛劈呕狂昏，斑血抽搐厥逆求。",
    "composition": [
      "清瘟败毒饮"
    ]
  },
  {
    "id": "f_51",
    "name": "凉膈散",
    "pinyin": "",
    "code": "356",
    "category": "清热剂",
    "subCategory": "清热解毒",
    "source": "《方剂学》核心名方",
    "efficacy": "上中二焦邪热炽盛证",
    "indications": [
      "上中二焦邪热炽盛证"
    ],
    "mnemonicHtml": "凉膈硝黄栀子<u>翘</u>，黄芩炙草薄荷饶。<div>竹叶蜜煎疗膈热，上中郁热服之消。</div><div>胸膈口疮卧不宁，谵妄便秘咽吐衄。</div>",
    "mnemonic": "凉膈硝黄栀子 翘 ，黄芩炙草薄荷饶。 竹叶蜜煎疗膈热，上中郁热服之消。 胸膈口疮卧不宁，谵妄便秘咽吐衄。",
    "composition": [
      "翘"
    ]
  },
  {
    "id": "f_52",
    "name": "普济消毒饮",
    "pinyin": "",
    "code": "357",
    "category": "清热剂",
    "subCategory": "清热解毒",
    "source": "《脾胃论》/《内外伤辨惑论》",
    "efficacy": "风热疫毒，壅于上焦之大头瘟",
    "indications": [
      "风热疫毒，壅于上焦之大头瘟"
    ],
    "mnemonicHtml": "普济消毒蒡<u>芩连</u>，甘桔蓝根勃翘玄。<div>升柴陈薄僵蚕入，大头瘟毒服之痊。</div><div>或加人参及大黄，大头天行力能痊。</div>",
    "mnemonic": "普济消毒蒡 芩连 ，甘桔蓝根勃翘玄。 升柴陈薄僵蚕入，大头瘟毒服之痊。 或加人参及大黄，大头天行力能痊。",
    "composition": [
      "芩连"
    ]
  },
  {
    "id": "f_53",
    "name": "仙方活命饮",
    "pinyin": "",
    "code": "357",
    "category": "清热剂",
    "subCategory": "清热解毒",
    "source": "《方剂学》核心名方",
    "efficacy": "痈疡肿毒初起",
    "indications": [
      "痈疡肿毒初起"
    ],
    "mnemonicHtml": "仙方活命<u>金银花</u>，防芷生草归陈芍。<div>贝母花粉及乳没，穿山皂刺酒煎佳。</div><div>热毒肿坚活血痛，初起疮毒用无差。</div>",
    "mnemonic": "仙方活命 金银花 ，防芷生草归陈芍。 贝母花粉及乳没，穿山皂刺酒煎佳。 热毒肿坚活血痛，初起疮毒用无差。",
    "composition": [
      "金银花"
    ]
  },
  {
    "id": "f_54",
    "name": "黄连解毒汤",
    "pinyin": "",
    "code": "357",
    "category": "清热剂",
    "subCategory": "清热解毒",
    "source": "《方剂学》核心名方",
    "efficacy": "三焦火毒热盛证",
    "indications": [
      "三焦火毒热盛证"
    ],
    "mnemonicHtml": "<u>黄连</u>解毒栀柏芩，三焦热盛是主因。<div>烦狂火热兼谵妄，吐衄发斑痢疸疡。</div>",
    "mnemonic": "黄连 解毒栀柏芩，三焦热盛是主因。 烦狂火热兼谵妄，吐衄发斑痢疸疡。",
    "composition": [
      "黄连"
    ]
  },
  {
    "id": "f_55",
    "name": "青蒿鳖甲汤",
    "pinyin": "",
    "code": "359",
    "category": "清热剂",
    "subCategory": "清热解毒",
    "source": "《方剂学》核心名方",
    "efficacy": "温病后期，邪伏阴分证",
    "indications": [
      "温病后期，邪伏阴分证"
    ],
    "mnemonicHtml": "<u>青蒿鳖甲</u>知地丹，热伏阴分仔细看。<div>夜热早凉无汗出，养阴透热服之安。</div>",
    "mnemonic": "青蒿鳖甲 知地丹，热伏阴分仔细看。 夜热早凉无汗出，养阴透热服之安。",
    "composition": [
      "青蒿鳖甲"
    ]
  },
  {
    "id": "f_56",
    "name": "清暑益气汤",
    "pinyin": "",
    "code": "360",
    "category": "祛暑剂",
    "subCategory": "祛暑清热",
    "source": "《方剂学》核心名方",
    "efficacy": "暑热气津两伤",
    "indications": [
      "暑热气津两伤"
    ],
    "mnemonicHtml": "王氏清暑益气汤，善治中暑气津伤。<div><u>洋参</u>冬斛荷<u>瓜翠</u>，连竹知母甘粳襄。</div>",
    "mnemonic": "王氏清暑益气汤，善治中暑气津伤。 洋参 冬斛荷 瓜翠 ，连竹知母甘粳襄。",
    "composition": [
      "洋参",
      "瓜翠"
    ]
  },
  {
    "id": "f_57",
    "name": "生脉散",
    "pinyin": "",
    "code": "363",
    "category": "补益剂",
    "subCategory": "补气",
    "source": "《方剂学》核心名方",
    "efficacy": "气阴两伤证",
    "indications": [
      "气阴两伤证"
    ],
    "mnemonicHtml": "生脉麦味与<u>人参</u>，保肺清心治暑淫。<div>气少汗多兼口渴，气阴两伤急煎斟。</div>",
    "mnemonic": "生脉麦味与 人参 ，保肺清心治暑淫。 气少汗多兼口渴，气阴两伤急煎斟。",
    "composition": [
      "人参"
    ]
  },
  {
    "id": "f_58",
    "name": "五味消毒饮",
    "pinyin": "",
    "code": "357",
    "category": "清热剂",
    "subCategory": "清热解毒",
    "source": "《方剂学》核心名方",
    "efficacy": "火毒结聚之疔疮",
    "indications": [
      "火毒结聚之疔疮"
    ],
    "mnemonicHtml": "五味消毒疗诸疔，<u>银花</u>野菊蒲公英。<div>紫花地丁天葵子，煎加酒服效非轻。</div><div>清热解毒疔疮散，火毒结聚疮粟疔。</div>",
    "mnemonic": "五味消毒疗诸疔， 银花 野菊蒲公英。 紫花地丁天葵子，煎加酒服效非轻。 清热解毒疔疮散，火毒结聚疮粟疔。",
    "composition": [
      "银花"
    ]
  },
  {
    "id": "f_59",
    "name": "四妙勇安汤",
    "pinyin": "",
    "code": "357",
    "category": "清热剂",
    "subCategory": "清热解毒",
    "source": "《方剂学》核心名方",
    "efficacy": "热毒炽盛之脱疽",
    "indications": [
      "热毒炽盛之脱疽"
    ],
    "mnemonicHtml": "四妙勇安<u>金银花</u>，玄参生草当归加。<div>清热解毒痛活血，热毒脱疽效堪夸。</div>",
    "mnemonic": "四妙勇安 金银花 ，玄参生草当归加。 清热解毒痛活血，热毒脱疽效堪夸。",
    "composition": [
      "金银花"
    ]
  },
  {
    "id": "f_60",
    "name": "牛蒡解肌汤",
    "pinyin": "",
    "code": "357",
    "category": "清热剂",
    "subCategory": "清热解毒",
    "source": "《方剂学》核心名方",
    "efficacy": "风邪热毒上攻之痈疮",
    "indications": [
      "风邪热毒上攻之痈疮"
    ],
    "mnemonicHtml": "<u>牛蒡</u>解肌丹栀翘，荆薄斛玄夏枯草。<div>疏风凉血又散肿，头面风热疮疡消，</div><div>颈项痰毒牙痛痈。</div>",
    "mnemonic": "牛蒡 解肌丹栀翘，荆薄斛玄夏枯草。 疏风凉血又散肿，头面风热疮疡消， 颈项痰毒牙痛痈。",
    "composition": [
      "牛蒡"
    ]
  },
  {
    "id": "f_61",
    "name": "龙胆泻肝汤",
    "pinyin": "",
    "code": "358",
    "category": "清热剂",
    "subCategory": "清脏腑热",
    "source": "《方剂学》核心名方",
    "efficacy": "肝胆实火上炎或肝经湿热下注",
    "indications": [
      "肝胆实火上炎或肝经湿热下注"
    ],
    "mnemonicHtml": "<u>龙胆</u>泻肝栀芩柴，生地车前泽泻偕。<div>木通甘草当归合，肝经湿热力能排。</div>",
    "mnemonic": "龙胆 泻肝栀芩柴，生地车前泽泻偕。 木通甘草当归合，肝经湿热力能排。",
    "composition": [
      "龙胆"
    ]
  },
  {
    "id": "f_62",
    "name": "左金丸",
    "pinyin": "",
    "code": "358",
    "category": "清热剂",
    "subCategory": "清脏腑热",
    "source": "《方剂学》核心名方",
    "efficacy": "肝火犯胃证",
    "indications": [
      "肝火犯胃证"
    ],
    "mnemonicHtml": "左金<u>连</u>茱六一丸，胁痛吞酸悉能除。<div>再加芍药名戊己，热泻热痢服之安。</div>",
    "mnemonic": "左金 连 茱六一丸，胁痛吞酸悉能除。 再加芍药名戊己，热泻热痢服之安。",
    "composition": [
      "连"
    ]
  },
  {
    "id": "f_63",
    "name": "泻白散",
    "pinyin": "",
    "code": "358",
    "category": "清热剂",
    "subCategory": "清脏腑热",
    "source": "《方剂学》核心名方",
    "efficacy": "肺热伏火之喘咳",
    "indications": [
      "肺热伏火之喘咳"
    ],
    "mnemonicHtml": "泻白<u>桑皮</u>地骨皮，甘草粳米四般宜。<div>泻肺清热平咳喘，培土生金和胃中。</div>",
    "mnemonic": "泻白 桑皮 地骨皮，甘草粳米四般宜。 泻肺清热平咳喘，培土生金和胃中。",
    "composition": [
      "桑皮"
    ]
  },
  {
    "id": "f_64",
    "name": "清胃散",
    "pinyin": "",
    "code": "358",
    "category": "清热剂",
    "subCategory": "清脏腑热",
    "source": "《方剂学》核心名方",
    "efficacy": "胃火上攻证",
    "indications": [
      "胃火上攻证"
    ],
    "mnemonicHtml": "清胃散用<u>连</u>升麻，当归生地丹皮全。<div>或益石膏清胃热，口疮吐衄与牙宣。</div>",
    "mnemonic": "清胃散用 连 升麻，当归生地丹皮全。 或益石膏清胃热，口疮吐衄与牙宣。",
    "composition": [
      "连"
    ]
  },
  {
    "id": "f_65",
    "name": "玉女煎",
    "pinyin": "",
    "code": "358",
    "category": "清热剂",
    "subCategory": "清脏腑热",
    "source": "《方剂学》核心名方",
    "efficacy": "胃热阴虚证",
    "indications": [
      "胃热阴虚证"
    ],
    "mnemonicHtml": "玉女煎用熟地黄，<u>膏</u>知牛膝麦冬襄。<div>胃火阴虚相因病，牙痛齿衄宜煎尝。</div>",
    "mnemonic": "玉女煎用熟地黄， 膏 知牛膝麦冬襄。 胃火阴虚相因病，牙痛齿衄宜煎尝。",
    "composition": [
      "膏"
    ]
  },
  {
    "id": "f_66",
    "name": "芍药汤",
    "pinyin": "",
    "code": "358",
    "category": "清热剂",
    "subCategory": "清脏腑热",
    "source": "《方剂学》核心名方",
    "efficacy": "湿热痢疾",
    "indications": [
      "湿热痢疾"
    ],
    "mnemonicHtml": "芍药汤中槟大黄，<u>芩连</u>归桂草木香。<div>清热燥湿调气血，下痢腹痛自安康。</div>",
    "mnemonic": "芍药汤中槟大黄， 芩连 归桂草木香。 清热燥湿调气血，下痢腹痛自安康。",
    "composition": [
      "芩连"
    ]
  },
  {
    "id": "f_67",
    "name": "白头翁汤",
    "pinyin": "",
    "code": "358",
    "category": "清热剂",
    "subCategory": "清脏腑热",
    "source": "《方剂学》核心名方",
    "efficacy": "热毒痢疾",
    "indications": [
      "热毒痢疾"
    ],
    "mnemonicHtml": "<u>白头翁</u>汤治热痢，黄连黄柏佐秦皮。<div>清热解毒并凉血，赤多白少脓血医。</div>",
    "mnemonic": "白头翁 汤治热痢，黄连黄柏佐秦皮。 清热解毒并凉血，赤多白少脓血医。",
    "composition": [
      "白头翁"
    ]
  },
  {
    "id": "f_68",
    "name": "导赤散",
    "pinyin": "",
    "code": "359",
    "category": "清热剂",
    "subCategory": "清脏腑热",
    "source": "《方剂学》核心名方",
    "efficacy": "心经火热证",
    "indications": [
      "心经火热证"
    ],
    "mnemonicHtml": "导赤<u>生地与木通</u>，草梢竹叶四般攻。<div>口糜淋痛小肠火，引热同归小便中。</div>",
    "mnemonic": "导赤 生地与木通 ，草梢竹叶四般攻。 口糜淋痛小肠火，引热同归小便中。",
    "composition": [
      "生地与木通"
    ]
  },
  {
    "id": "f_69",
    "name": "苇茎汤",
    "pinyin": "",
    "code": "359",
    "category": "清热剂",
    "subCategory": "清脏腑热",
    "source": "《方剂学》核心名方",
    "efficacy": "痰热瘀血壅结之肺痈",
    "indications": [
      "痰热瘀血壅结之肺痈"
    ],
    "mnemonicHtml": "<u>苇茎</u>汤方出千金，桃仁薏苡冬瓜仁。<div>肺痈痰热兼瘀血，化浊排脓病自宁。</div>",
    "mnemonic": "苇茎 汤方出千金，桃仁薏苡冬瓜仁。 肺痈痰热兼瘀血，化浊排脓病自宁。",
    "composition": [
      "苇茎"
    ]
  },
  {
    "id": "f_70",
    "name": "泻黄散",
    "pinyin": "",
    "code": "359",
    "category": "清热剂",
    "subCategory": "清脏腑热",
    "source": "《方剂学》核心名方",
    "efficacy": "脾胃伏火证",
    "indications": [
      "脾胃伏火证"
    ],
    "mnemonicHtml": "泻黄甘草与防风，石膏栀子藿香充。<div>炒香蜜酒调和服，胃热口疮脾弄舌。</div>",
    "mnemonic": "泻黄甘草与防风，石膏栀子藿香充。 炒香蜜酒调和服，胃热口疮脾弄舌。",
    "composition": [
      "泻黄散"
    ]
  },
  {
    "id": "f_71",
    "name": "清心莲子饮",
    "pinyin": "",
    "code": "358",
    "category": "清热剂",
    "subCategory": "清脏腑热",
    "source": "《方剂学》核心名方",
    "efficacy": "心火偏旺，气阴两虚，湿热下注证",
    "indications": [
      "心火偏旺，气阴两虚，湿热下注证"
    ],
    "mnemonicHtml": "清心莲子芩麦冬，地骨车前炙草从；<div>莲肉人参黄芪茯，心火气阴淋浊通，</div><div>湿热血崩肾阴补</div>",
    "mnemonic": "清心莲子芩麦冬，地骨车前炙草从； 莲肉人参黄芪茯，心火气阴淋浊通， 湿热血崩肾阴补",
    "composition": [
      "清心莲子饮"
    ]
  },
  {
    "id": "f_72",
    "name": "泻心汤",
    "pinyin": "",
    "code": "356",
    "category": "和解剂",
    "subCategory": "调和寒热",
    "source": "《方剂学》核心名方",
    "efficacy": "邪火内炽，迫血妄行",
    "indications": [
      "邪火内炽，迫血妄行"
    ],
    "mnemonicHtml": "泻心<u>大</u>二连芩一，泻火解毒燥湿痞，<div>火炽出血黄疸痞，目赤舌疮疮疡清。</div>",
    "mnemonic": "泻心 大 二连芩一，泻火解毒燥湿痞， 火炽出血黄疸痞，目赤舌疮疮疡清。",
    "composition": [
      "大"
    ]
  },
  {
    "id": "f_73",
    "name": "清骨散",
    "pinyin": "",
    "code": "359",
    "category": "清热剂",
    "subCategory": "清虚热",
    "source": "《方剂学》核心名方",
    "efficacy": "肝肾阴虚，虚火内扰证",
    "indications": [
      "肝肾阴虚，虚火内扰证"
    ],
    "mnemonicHtml": "清骨散用<u>银柴胡</u>，胡连秦艽鳖甲辅；<div>地骨青蒿知母草，骨蒸劳热保无虞。</div><div>低热烦渴倦乏力。</div>",
    "mnemonic": "清骨散用 银柴胡 ，胡连秦艽鳖甲辅； 地骨青蒿知母草，骨蒸劳热保无虞。 低热烦渴倦乏力。",
    "composition": [
      "银柴胡"
    ]
  },
  {
    "id": "f_74",
    "name": "秦艽鳖甲散",
    "pinyin": "",
    "code": "359",
    "category": "清热剂",
    "subCategory": "清虚热",
    "source": "《方剂学》核心名方",
    "efficacy": "风劳病",
    "indications": [
      "风劳病"
    ],
    "mnemonicHtml": "秦艽鳖甲治风劳，地骨柴胡及青蒿；<div>当归知母乌梅合，止嗽除蒸盗汗高。</div>",
    "mnemonic": "秦艽鳖甲治风劳，地骨柴胡及青蒿； 当归知母乌梅合，止嗽除蒸盗汗高。",
    "composition": [
      "秦艽鳖甲散"
    ]
  },
  {
    "id": "f_75",
    "name": "当归六黄汤",
    "pinyin": "",
    "code": "359",
    "category": "清热剂",
    "subCategory": "清虚热",
    "source": "《方剂学》核心名方",
    "efficacy": "阴虚火旺盗汗证",
    "indications": [
      "阴虚火旺盗汗证"
    ],
    "mnemonicHtml": "<u>当归</u>六黄<u>二地黄</u>，芩连芪柏共煎尝。<div>滋阴泻火兼固表，阴虚火旺盗汗良。</div>",
    "mnemonic": "当归 六黄 二地黄 ，芩连芪柏共煎尝。 滋阴泻火兼固表，阴虚火旺盗汗良。",
    "composition": [
      "当归",
      "二地黄"
    ]
  },
  {
    "id": "f_76",
    "name": "香薷散",
    "pinyin": "",
    "code": "360",
    "category": "祛暑剂",
    "subCategory": "祛暑清热",
    "source": "《方剂学》核心名方",
    "efficacy": "阴暑证",
    "indications": [
      "阴暑证"
    ],
    "mnemonicHtml": "<div>三物<u>香薷</u>豆朴先，散寒化湿功效兼；</div><div>若益银翘豆易花，新加香薷祛暑煎。</div>",
    "mnemonic": "三物 香薷 豆朴先，散寒化湿功效兼； 若益银翘豆易花，新加香薷祛暑煎。",
    "composition": [
      "香薷"
    ]
  },
  {
    "id": "f_77",
    "name": "清络饮",
    "pinyin": "",
    "code": "360",
    "category": "祛暑剂",
    "subCategory": "祛暑清热",
    "source": "《温病条辨》",
    "efficacy": "暑热伤肺，邪在气分之轻证",
    "indications": [
      "暑热伤肺，邪在气分之轻证"
    ],
    "mnemonicHtml": "清络祛暑六药鲜，<u>银扁</u>翠衣瓜络添；<div>佐以竹叶荷叶边，暑热伤肺轻证安。</div>",
    "mnemonic": "清络祛暑六药鲜， 银扁 翠衣瓜络添； 佐以竹叶荷叶边，暑热伤肺轻证安。",
    "composition": [
      "银扁"
    ]
  },
  {
    "id": "f_78",
    "name": "六一散",
    "pinyin": "",
    "code": "360",
    "category": "祛暑剂",
    "subCategory": "祛暑清热",
    "source": "《方剂学》核心名方",
    "efficacy": "暑湿轻证",
    "indications": [
      "暑湿轻证"
    ],
    "mnemonicHtml": "六一<u>滑石</u>同甘草，清暑利湿清燥好；<div>统治表里及三焦，热渴暑烦泻痢保；</div><div>益元碧玉与鸡苏，砂黛薄荷加之好。</div>",
    "mnemonic": "六一 滑石 同甘草，清暑利湿清燥好； 统治表里及三焦，热渴暑烦泻痢保； 益元碧玉与鸡苏，砂黛薄荷加之好。",
    "composition": [
      "滑石"
    ]
  },
  {
    "id": "f_79",
    "name": "桂苓甘露饮",
    "pinyin": "",
    "code": "360",
    "category": "祛暑剂",
    "subCategory": "祛暑清热",
    "source": "《方剂学》核心名方",
    "efficacy": "中暑并水湿内停证",
    "indications": [
      "中暑并水湿内停证"
    ],
    "mnemonicHtml": "桂苓甘露猪苓膏，术泽寒水<u>滑石</u>草，<div><div>祛暑化气热利湿，暑湿烦渴吐泻消。</div></div><div><br></div><div>肉桂</div>",
    "mnemonic": "桂苓甘露猪苓膏，术泽寒水 滑石 草， 祛暑化气热利湿，暑湿烦渴吐泻消。 肉桂",
    "composition": [
      "滑石"
    ]
  },
  {
    "id": "f_80",
    "name": "理中丸",
    "pinyin": "",
    "code": "360",
    "category": "温里剂",
    "subCategory": "温中祛寒",
    "source": "《伤寒论》",
    "efficacy": "中焦虚寒/阳虚失血/胸痹、小儿慢惊",
    "indications": [
      "中焦虚寒/阳虚失血/胸痹",
      "小儿慢惊"
    ],
    "mnemonicHtml": "理中丸主温中阳，甘草人参术<u>干姜</u>；<div>中焦虚寒痹惊血，霍乱健脾又祛寒。</div>",
    "mnemonic": "理中丸主温中阳，甘草人参术 干姜 ； 中焦虚寒痹惊血，霍乱健脾又祛寒。",
    "composition": [
      "干姜"
    ]
  },
  {
    "id": "f_81",
    "name": "小建中汤",
    "pinyin": "",
    "code": "361",
    "category": "温里剂",
    "subCategory": "温中祛寒",
    "source": "《金匮要略》",
    "efficacy": "中焦虚寒之虚劳里急",
    "indications": [
      "中焦虚寒之虚劳里急"
    ],
    "mnemonicHtml": "小建中汤芍药多，桂枝甘草姜枣和：<div>更加<u>饴糖</u>补中脏，虚劳腹痛服之瘥。</div><div>心悸肢酸手足热</div>",
    "mnemonic": "小建中汤芍药多，桂枝甘草姜枣和： 更加 饴糖 补中脏，虚劳腹痛服之瘥。 心悸肢酸手足热",
    "composition": [
      "饴糖"
    ]
  },
  {
    "id": "f_82",
    "name": "吴茱萸汤",
    "pinyin": "",
    "code": "361",
    "category": "温里剂",
    "subCategory": "温中祛寒",
    "source": "《方剂学》核心名方",
    "efficacy": "胃寒呕吐、肝寒上逆、肾寒上逆",
    "indications": [
      "胃寒呕吐",
      "肝寒上逆",
      "肾寒上逆"
    ],
    "mnemonicHtml": "<u>吴茱萸</u>汤参姜枣，肝胃虚寒此法良；<div>阳明寒呕少阴利，厥阴头痛烦躁寻。</div>",
    "mnemonic": "吴茱萸 汤参姜枣，肝胃虚寒此法良； 阳明寒呕少阴利，厥阴头痛烦躁寻。",
    "composition": [
      "吴茱萸"
    ]
  },
  {
    "id": "f_83",
    "name": "大建中汤",
    "pinyin": "",
    "code": "361",
    "category": "温里剂",
    "subCategory": "温中祛寒",
    "source": "《金匮要略》",
    "efficacy": "中阳虚衰，阴寒内盛证",
    "indications": [
      "中阳虚衰，阴寒内盛证"
    ],
    "mnemonicHtml": "大建中汤建中阳，<u>蜀椒</u>干姜参饴糖；<div>阴盛阳虚腹冷痛，温补中焦止痛强。</div>",
    "mnemonic": "大建中汤建中阳， 蜀椒 干姜参饴糖； 阴盛阳虚腹冷痛，温补中焦止痛强。",
    "composition": [
      "蜀椒"
    ]
  },
  {
    "id": "f_84",
    "name": "四逆汤",
    "pinyin": "",
    "code": "361",
    "category": "温里剂",
    "subCategory": "回阳救逆",
    "source": "《伤寒论》",
    "efficacy": "少阴病阴盛阳衰证",
    "indications": [
      "少阴病阴盛阳衰证"
    ],
    "mnemonicHtml": "四逆汤中<u>附</u>草姜，四肢厥逆急煎尝。<div>吐逆腹痛阴寒盛，回阳救逆赖此方。</div>",
    "mnemonic": "四逆汤中 附 草姜，四肢厥逆急煎尝。 吐逆腹痛阴寒盛，回阳救逆赖此方。",
    "composition": [
      "附"
    ]
  },
  {
    "id": "f_85",
    "name": "回阳救急汤",
    "pinyin": "",
    "code": "361",
    "category": "温里剂",
    "subCategory": "回阳救逆",
    "source": "《方剂学》核心名方",
    "efficacy": "寒邪直中三阴，真阳衰微证",
    "indications": [
      "寒邪直中三阴，真阳衰微证"
    ],
    "mnemonicHtml": "回阳救急用六君，桂附生干五味群；<br><div>加麝三厘或胆汁，三阴寒厥建奇勋；</div><div>涎沫吴萸无脉胆，泄泻不止升麻芪；</div><div>呕吐不止加姜汁，《重订》去茯加麦冬。</div>",
    "mnemonic": "回阳救急用六君，桂附生干五味群； 加麝三厘或胆汁，三阴寒厥建奇勋； 涎沫吴萸无脉胆，泄泻不止升麻芪； 呕吐不止加姜汁，《重订》去茯加麦冬。",
    "composition": [
      "回阳救急汤"
    ]
  },
  {
    "id": "f_86",
    "name": "当归四逆汤",
    "pinyin": "",
    "code": "361",
    "category": "温里剂",
    "subCategory": "回阳救逆",
    "source": "《伤寒论》",
    "efficacy": "血虚寒厥证",
    "indications": [
      "血虚寒厥证"
    ],
    "mnemonicHtml": "<u>当归</u>四逆桂枝芍，细辛草枣通草着；<div>血虚寒厥四末冷，养血温经此方饶。</div><div>不用附子与生姜，助阳过剂阴反灼。</div>",
    "mnemonic": "当归 四逆桂枝芍，细辛草枣通草着； 血虚寒厥四末冷，养血温经此方饶。 不用附子与生姜，助阳过剂阴反灼。",
    "composition": [
      "当归"
    ]
  },
  {
    "id": "f_87",
    "name": "阳和汤",
    "pinyin": "",
    "code": "361",
    "category": "温里剂",
    "subCategory": "温经散寒",
    "source": "《方剂学》核心名方",
    "efficacy": "阴疽",
    "indications": [
      "阴疽"
    ],
    "mnemonicHtml": "阳和汤法解寒凝，贴骨流注鹤痰膝；<div><u>熟地鹿胶</u>姜炭桂，麻黄白芥生草承。</div>",
    "mnemonic": "阳和汤法解寒凝，贴骨流注鹤痰膝； 熟地鹿胶 姜炭桂，麻黄白芥生草承。",
    "composition": [
      "熟地鹿胶"
    ]
  },
  {
    "id": "f_88",
    "name": "黄芪桂枝五物汤",
    "pinyin": "",
    "code": "362",
    "category": "温里剂",
    "subCategory": "温经散寒",
    "source": "《方剂学》核心名方",
    "efficacy": "营卫虚弱之血痹",
    "indications": [
      "营卫虚弱之血痹"
    ],
    "mnemonicHtml": "<u>黄芪</u>桂枝五物汤，芍药大枣与生姜，<div>益气温经和营卫，血痹风痹功效良，</div><div>肢疼汗出身不遂，半身汗产经后痛。</div>",
    "mnemonic": "黄芪 桂枝五物汤，芍药大枣与生姜， 益气温经和营卫，血痹风痹功效良， 肢疼汗出身不遂，半身汗产经后痛。",
    "composition": [
      "黄芪"
    ]
  },
  {
    "id": "f_89",
    "name": "大柴胡汤",
    "pinyin": "",
    "code": "362",
    "category": "表里双解剂",
    "subCategory": "表里双解",
    "source": "《方剂学》核心名方",
    "efficacy": "少阳阳明合病",
    "indications": [
      "少阳阳明合病"
    ],
    "mnemonicHtml": "大<u>柴胡</u>汤用大黄，枳实<u>芩</u>夏白芍将；<div>煎加姜枣表兼里，妙法内攻并外攘。</div>",
    "mnemonic": "大 柴胡 汤用大黄，枳实 芩 夏白芍将； 煎加姜枣表兼里，妙法内攻并外攘。",
    "composition": [
      "柴胡",
      "芩"
    ]
  },
  {
    "id": "f_90",
    "name": "防风通圣散",
    "pinyin": "",
    "code": "362",
    "category": "表里双解剂",
    "subCategory": "表里双解",
    "source": "《方剂学》核心名方",
    "efficacy": "风热壅盛，表里俱实证",
    "indications": [
      "风热壅盛，表里俱实证"
    ],
    "mnemonicHtml": "防风通圣大黄硝，荆芥麻黄栀芍翘；<div>甘桔芎归膏滑石，薄荷芩术姜偏饶；</div><div>疏风解表热便泻，表里俱实风热消。</div><div>头眩目痛口苦咽，痞咳呕喘秘丹斑，</div><div>疡痔肠风隐疹鼻。</div>",
    "mnemonic": "防风通圣大黄硝，荆芥麻黄栀芍翘； 甘桔芎归膏滑石，薄荷芩术姜偏饶； 疏风解表热便泻，表里俱实风热消。 头眩目痛口苦咽，痞咳呕喘秘丹斑， 疡痔肠风隐疹鼻。",
    "composition": [
      "防风通圣散"
    ]
  },
  {
    "id": "f_91",
    "name": "疏凿饮子",
    "pinyin": "",
    "code": "362",
    "category": "表里双解剂",
    "subCategory": "表里双解",
    "source": "《方剂学》核心名方",
    "efficacy": "阳水",
    "indications": [
      "阳水"
    ],
    "mnemonicHtml": "疏凿饮子<u>商陆</u>槟，苓皮大腹姜椒目；<div><div><div>赤豆艽羌泻木通，泻下逐水疏风肿。</div></div></div><div><br></div><div>生姜</div>",
    "mnemonic": "疏凿饮子 商陆 槟，苓皮大腹姜椒目； 赤豆艽羌泻木通，泻下逐水疏风肿。 生姜",
    "composition": [
      "商陆"
    ]
  },
  {
    "id": "f_92",
    "name": "葛根黄芩黄连汤",
    "pinyin": "",
    "code": "362",
    "category": "表里双解剂",
    "subCategory": "表里双解",
    "source": "《方剂学》核心名方",
    "efficacy": "表邪未解，邪热入里证",
    "indications": [
      "表邪未解，邪热入里证"
    ],
    "mnemonicHtml": "<u>葛根</u>黄芩黄连汤，再加甘草共煎尝：<div>邪陷阳明成热痢，清里解表保安康。</div>",
    "mnemonic": "葛根 黄芩黄连汤，再加甘草共煎尝： 邪陷阳明成热痢，清里解表保安康。",
    "composition": [
      "葛根"
    ]
  },
  {
    "id": "f_93",
    "name": "石膏汤",
    "pinyin": "",
    "code": "362",
    "category": "表里双解剂",
    "subCategory": "表里双解",
    "source": "《方剂学》核心名方",
    "efficacy": "伤寒表证未解，里热已炽证",
    "indications": [
      "伤寒表证未解，里热已炽证"
    ],
    "mnemonicHtml": "<u>石膏</u>汤用芩柏连，麻黄豆豉山栀全；<div><div><div>清热解毒兼发汗，表里三焦热盛宣。</div></div></div>",
    "mnemonic": "石膏 汤用芩柏连，麻黄豆豉山栀全； 清热解毒兼发汗，表里三焦热盛宣。",
    "composition": [
      "石膏"
    ]
  },
  {
    "id": "f_94",
    "name": "五积散",
    "pinyin": "",
    "code": "362",
    "category": "表里双解剂",
    "subCategory": "表里双解",
    "source": "《方剂学》核心名方",
    "efficacy": "外感风寒，内伤生冷之五积证",
    "indications": [
      "外感风寒，内伤生冷之五积证"
    ],
    "mnemonicHtml": "五积散治五般积，<u>麻黄芷</u>苍芎归芍；<div><div>壳桔桂苓甘茯朴，陈皮半夏两姜葱；</div><div>表里气痰血积活，寒湿气血痰积从。</div></div><div><br></div><div>肉桂</div>",
    "mnemonic": "五积散治五般积， 麻黄芷 苍芎归芍； 壳桔桂苓甘茯朴，陈皮半夏两姜葱； 表里气痰血积活，寒湿气血痰积从。 肉桂",
    "composition": [
      "麻黄芷"
    ]
  },
  {
    "id": "f_95",
    "name": "四君子汤",
    "pinyin": "",
    "code": "363",
    "category": "补益剂",
    "subCategory": "补气",
    "source": "《太平惠民和剂局方》",
    "efficacy": "脾胃气虚证",
    "indications": [
      "脾胃气虚证"
    ],
    "mnemonicHtml": "四君子汤中和义，<u>参</u>术茯苓甘草比。<div>益以陈夏名六君，祛痰补益气虚饵；</div><div>除却半夏名异功，或加香砂气滞使。</div>",
    "mnemonic": "四君子汤中和义， 参 术茯苓甘草比。 益以陈夏名六君，祛痰补益气虚饵； 除却半夏名异功，或加香砂气滞使。",
    "composition": [
      "参"
    ]
  },
  {
    "id": "f_96",
    "name": "参苓白术散",
    "pinyin": "",
    "code": "363",
    "category": "补益剂",
    "subCategory": "补气",
    "source": "《太平惠民和剂局方》",
    "efficacy": "脾虚夹湿证",
    "indications": [
      "脾虚夹湿证"
    ],
    "mnemonicHtml": "<u>参苓白术</u>扁豆陈，山药甘莲砂薏仁；<div>桔梗上浮兼保肺，枣汤调服益脾神，</div><div>益气健脾祛湿气。</div>",
    "mnemonic": "参苓白术 扁豆陈，山药甘莲砂薏仁； 桔梗上浮兼保肺，枣汤调服益脾神， 益气健脾祛湿气。",
    "composition": [
      "参苓白术"
    ]
  },
  {
    "id": "f_97",
    "name": "完带汤",
    "pinyin": "",
    "code": "363",
    "category": "补益剂",
    "subCategory": "补气",
    "source": "《方剂学》核心名方",
    "efficacy": "脾虚肝郁，湿浊带下证",
    "indications": [
      "脾虚肝郁，湿浊带下证"
    ],
    "mnemonicHtml": "完带汤中用<u>白术</u>，<u>山药</u>人参白芍辅，<div>苍术车前黑芥穗，陈皮甘草与柴胡。&nbsp;</div><div>补脾疏肝止带湿。</div>",
    "mnemonic": "完带汤中用 白术 ， 山药 人参白芍辅， 苍术车前黑芥穗，陈皮甘草与柴胡。&nbsp; 补脾疏肝止带湿。",
    "composition": [
      "白术",
      "山药"
    ]
  },
  {
    "id": "f_98",
    "name": "补中益气汤",
    "pinyin": "",
    "code": "363",
    "category": "补益剂",
    "subCategory": "补气",
    "source": "《脾胃论》/《内外伤辨惑论》",
    "efficacy": "脾虚不升证；气虚发热证；中气下陷证",
    "indications": [
      "脾虚不升证",
      "气虚发热证",
      "中气下陷证"
    ],
    "mnemonicHtml": "补中益气<u>芪</u>术陈，升柴参草当归身，<div>虚劳补陷功独擅，气虚发热亦堪珍。</div>",
    "mnemonic": "补中益气 芪 术陈，升柴参草当归身， 虚劳补陷功独擅，气虚发热亦堪珍。",
    "composition": [
      "芪"
    ]
  },
  {
    "id": "f_99",
    "name": "玉屏风散",
    "pinyin": "",
    "code": "363",
    "category": "补益剂",
    "subCategory": "补气",
    "source": "《方剂学》核心名方",
    "efficacy": "肺卫气虚证",
    "indications": [
      "肺卫气虚证"
    ],
    "mnemonicHtml": "玉屏风散最有灵，<u>芪</u>术防风鼎足形，<div>表虚汗多易感冒，益气固表止汗神。&nbsp;</div>",
    "mnemonic": "玉屏风散最有灵， 芪 术防风鼎足形， 表虚汗多易感冒，益气固表止汗神。&nbsp;",
    "composition": [
      "芪"
    ]
  },
  {
    "id": "f_100",
    "name": "人参蛤蚧散",
    "pinyin": "",
    "code": "364",
    "category": "补益剂",
    "subCategory": "补气",
    "source": "《方剂学》核心名方",
    "efficacy": "肺肾气虚，痰热内蕴之咳喘证",
    "indications": [
      "肺肾气虚，痰热内蕴之咳喘证"
    ],
    "mnemonicHtml": "<u>人参蛤蚧</u>作散服，杏苓桑皮草二母，<div>肺肾气虚蕴痰热，咳喘痰血浮肿除。&nbsp;</div>",
    "mnemonic": "人参蛤蚧 作散服，杏苓桑皮草二母， 肺肾气虚蕴痰热，咳喘痰血浮肿除。&nbsp;",
    "composition": [
      "人参蛤蚧"
    ]
  },
  {
    "id": "f_101",
    "name": "保元汤",
    "pinyin": "",
    "code": "363",
    "category": "补益剂",
    "subCategory": "补气",
    "source": "《方剂学》核心名方",
    "efficacy": "虚损劳怯，元气不足证",
    "indications": [
      "虚损劳怯，元气不足证"
    ],
    "mnemonicHtml": "保元汤中参芪桂，生姜炙草五药存，<div>益气温阳劳虚损，倦怠畏寒痘疮虚</div><div><br></div><div>肉桂</div>",
    "mnemonic": "保元汤中参芪桂，生姜炙草五药存， 益气温阳劳虚损，倦怠畏寒痘疮虚 肉桂",
    "composition": [
      "保元汤"
    ]
  },
  {
    "id": "f_102",
    "name": "举元煎",
    "pinyin": "",
    "code": "363",
    "category": "补益剂",
    "subCategory": "补气",
    "source": "《方剂学》核心名方",
    "efficacy": "—气虚下陷，血崩血脱，亡阳垂危等证",
    "indications": [
      "—气虚下陷，血崩血脱，亡阳垂危等证"
    ],
    "mnemonicHtml": "举元煎内参芪添，白术炙草升麻同，<div>益气举陷气虚陷，血崩血脱亡阳了。</div>",
    "mnemonic": "举元煎内参芪添，白术炙草升麻同， 益气举陷气虚陷，血崩血脱亡阳了。",
    "composition": [
      "举元煎"
    ]
  },
  {
    "id": "f_103",
    "name": "升陷汤",
    "pinyin": "",
    "code": "363",
    "category": "补益剂",
    "subCategory": "补气",
    "source": "《方剂学》核心名方",
    "efficacy": "大气下陷证",
    "indications": [
      "大气下陷证"
    ],
    "mnemonicHtml": "升陷汤重生黄芪，知母桔梗升柴齐，<div>益气升陷大气陷，气短不足危似无。</div>",
    "mnemonic": "升陷汤重生黄芪，知母桔梗升柴齐， 益气升陷大气陷，气短不足危似无。",
    "composition": [
      "升陷汤"
    ]
  },
  {
    "id": "f_104",
    "name": "升阳益胃汤",
    "pinyin": "",
    "code": "363",
    "category": "补益剂",
    "subCategory": "补气",
    "source": "《脾胃论》/《内外伤辨惑论》",
    "efficacy": "脾胃气虚，湿热内停证",
    "indications": [
      "脾胃气虚，湿热内停证"
    ],
    "mnemonicHtml": "升阳益胃参芪甘，羌独陈夏术苓防，<div>柴泽白芍连姜枣，益气升阳湿热彰。</div><div><br></div><div>防风</div>",
    "mnemonic": "升阳益胃参芪甘，羌独陈夏术苓防， 柴泽白芍连姜枣，益气升阳湿热彰。 防风",
    "composition": [
      "升阳益胃汤"
    ]
  },
  {
    "id": "f_105",
    "name": "四物汤",
    "pinyin": "",
    "code": "364",
    "category": "补益剂",
    "subCategory": "补血",
    "source": "《太平惠民和剂局方》",
    "efficacy": "营血虚滞证",
    "indications": [
      "营血虚滞证"
    ],
    "mnemonicHtml": "四物<u>地</u>芍与归芎， 血家百病此方通；<div>加入胶叶胎动安， 八珍合入四君子；</div><div>再加黄芪与肉桂， 十全大补补方雄； &nbsp;</div><div>血虚调经经闭痛， 崩漏血瘕妊胎动。</div><div>产后恶露肠瘀血。</div>",
    "mnemonic": "四物 地 芍与归芎， 血家百病此方通； 加入胶叶胎动安， 八珍合入四君子； 再加黄芪与肉桂， 十全大补补方雄； &nbsp; 血虚调经经闭痛， 崩漏血瘕妊胎动。 产后恶露肠瘀血。",
    "composition": [
      "地"
    ]
  },
  {
    "id": "f_106",
    "name": "归脾汤",
    "pinyin": "",
    "code": "364",
    "category": "补益剂",
    "subCategory": "补血",
    "source": "《方剂学》核心名方",
    "efficacy": "心脾气血两虚证；脾不统血证",
    "indications": [
      "心脾气血两虚证",
      "脾不统血证"
    ],
    "mnemonicHtml": "归脾汤用术参<u>芪</u>，归草茯神远志随；<div>酸枣木香<u>龙眼肉</u>，煎加姜枣益心脾；</div><div>便血紫癜崩月前，淋漓健忘吐下血；</div><div>盗汗赤白烦热痘。</div>",
    "mnemonic": "归脾汤用术参 芪 ，归草茯神远志随； 酸枣木香 龙眼肉 ，煎加姜枣益心脾； 便血紫癜崩月前，淋漓健忘吐下血； 盗汗赤白烦热痘。",
    "composition": [
      "芪",
      "龙眼肉"
    ]
  },
  {
    "id": "f_107",
    "name": "当归补血汤",
    "pinyin": "",
    "code": "364",
    "category": "补益剂",
    "subCategory": "补血",
    "source": "《脾胃论》/《内外伤辨惑论》",
    "efficacy": "血虚发热证",
    "indications": [
      "血虚发热证"
    ],
    "mnemonicHtml": "当归补血东垣笺，<u>黄芪</u>一两归二钱；<div>血虚发热口烦渴，脉大而虚经产痛，</div><div>疮疡溃后不愈合。</div>",
    "mnemonic": "当归补血东垣笺， 黄芪 一两归二钱； 血虚发热口烦渴，脉大而虚经产痛， 疮疡溃后不愈合。",
    "composition": [
      "黄芪"
    ]
  },
  {
    "id": "f_108",
    "name": "补肝汤",
    "pinyin": "",
    "code": "364",
    "category": "补益剂",
    "subCategory": "补血",
    "source": "《方剂学》核心名方",
    "efficacy": "阴血不足",
    "indications": [
      "阴血不足"
    ],
    "mnemonicHtml": "补肝生地芍归芎，酸枣木瓜甘草同；<div>养血柔肝经活血，肝血眩晕经筋松。</div>",
    "mnemonic": "补肝生地芍归芎，酸枣木瓜甘草同； 养血柔肝经活血，肝血眩晕经筋松。",
    "composition": [
      "补肝汤"
    ]
  },
  {
    "id": "f_109",
    "name": "内补黄芪汤",
    "pinyin": "",
    "code": "364",
    "category": "补益剂",
    "subCategory": "补血",
    "source": "《方剂学》核心名方",
    "efficacy": "痈疽溃后，气血两虚证",
    "indications": [
      "痈疽溃后，气血两虚证"
    ],
    "mnemonicHtml": "内补<u>黄芪参</u>芍冬，地苓远志与川芎；<div>当归甘草官桂并，痈疽溃虚气血功。</div>",
    "mnemonic": "内补 黄芪参 芍冬，地苓远志与川芎； 当归甘草官桂并，痈疽溃虚气血功。",
    "composition": [
      "黄芪参"
    ]
  },
  {
    "id": "f_110",
    "name": "炙甘草汤",
    "pinyin": "",
    "code": "364",
    "category": "补益剂",
    "subCategory": "补血",
    "source": "《方剂学》核心名方",
    "efficacy": "阴血阳气虚弱，心脉失养之虚劳心悸；虚劳肺痿",
    "indications": [
      "阴血阳气虚弱，心脉失养之虚劳心悸",
      "虚劳肺痿"
    ],
    "mnemonicHtml": "炙甘草汤参姜桂，麦冬<u>生地</u>麻仁襄；<div><div>大枣阿胶加酒服，虚劳肺痿效如神。</div><div>气血阴阳定心悸，润燥补肺疗肺痿。</div></div><div><br></div><div>生姜 桂枝</div>",
    "mnemonic": "炙甘草汤参姜桂，麦冬 生地 麻仁襄； 大枣阿胶加酒服，虚劳肺痿效如神。 气血阴阳定心悸，润燥补肺疗肺痿。 生姜 桂枝",
    "composition": [
      "生地"
    ]
  },
  {
    "id": "f_111",
    "name": "八珍汤",
    "pinyin": "",
    "code": "365",
    "category": "补益剂",
    "subCategory": "气血双补",
    "source": "《方剂学》核心名方",
    "efficacy": "气血两虚证",
    "indications": [
      "气血两虚证"
    ],
    "mnemonicHtml": "气血双补八珍汤，四君四物合成方；<div>煎加姜枣调营卫，气血亏虚服之康。</div>",
    "mnemonic": "气血双补八珍汤，四君四物合成方； 煎加姜枣调营卫，气血亏虚服之康。",
    "composition": [
      "八珍汤"
    ]
  },
  {
    "id": "f_112",
    "name": "人参养荣汤",
    "pinyin": "",
    "code": "365",
    "category": "补益剂",
    "subCategory": "气血双补",
    "source": "《方剂学》核心名方",
    "efficacy": "心脾气血两虚证",
    "indications": [
      "心脾气血两虚证"
    ],
    "mnemonicHtml": "人参养荣用四君，熟归白芍五味寻；<div>黄芪桂心陈远志，益气补血养心脾；</div><div>自汗咳喘疮不敛。</div>",
    "mnemonic": "人参养荣用四君，熟归白芍五味寻； 黄芪桂心陈远志，益气补血养心脾； 自汗咳喘疮不敛。",
    "composition": [
      "人参养荣汤"
    ]
  },
  {
    "id": "f_113",
    "name": "泰山磐石散",
    "pinyin": "",
    "code": "365",
    "category": "补益剂",
    "subCategory": "气血双补",
    "source": "《方剂学》核心名方",
    "efficacy": "气血虚弱，胎元不固证",
    "indications": [
      "气血虚弱，胎元不固证"
    ],
    "mnemonicHtml": "泰山磐石八珍全，去苓加芪芩断全；<div>再益砂仁及糯米，妇人胎动可安全。<div><div>益气健脾胎养血，堕胎滑胎气血连。</div></div></div>",
    "mnemonic": "泰山磐石八珍全，去苓加芪芩断全； 再益砂仁及糯米，妇人胎动可安全。 益气健脾胎养血，堕胎滑胎气血连。",
    "composition": [
      "泰山磐石散"
    ]
  },
  {
    "id": "f_114",
    "name": "六味地黄丸",
    "pinyin": "",
    "code": "365",
    "category": "补益剂",
    "subCategory": "补阴",
    "source": "《方剂学》核心名方",
    "efficacy": "肾阴虚证",
    "indications": [
      "肾阴虚证"
    ],
    "mnemonicHtml": "六味<u>地黄</u>益肾肝，山药丹泽萸苓专；<div>阴虚火旺加知柏，养肝明目杞菊煎，</div><div>滋阴都气五味研，<div>肺肾两调金水生，麦味加入长寿丸。</div></div>",
    "mnemonic": "六味 地黄 益肾肝，山药丹泽萸苓专； 阴虚火旺加知柏，养肝明目杞菊煎， 滋阴都气五味研， 肺肾两调金水生，麦味加入长寿丸。",
    "composition": [
      "地黄"
    ]
  },
  {
    "id": "f_115",
    "name": "一贯煎",
    "pinyin": "",
    "code": "365",
    "category": "补益剂",
    "subCategory": "补阴",
    "source": "《方剂学》核心名方",
    "efficacy": "阴虚肝郁证",
    "indications": [
      "阴虚肝郁证"
    ],
    "mnemonicHtml": "一贯煎中<u>生地黄</u>，沙参归杞麦冬藏；<div>少佐川楝泄肝气，阴虚胁痛癥疝良。</div>",
    "mnemonic": "一贯煎中 生地黄 ，沙参归杞麦冬藏； 少佐川楝泄肝气，阴虚胁痛癥疝良。",
    "composition": [
      "生地黄"
    ]
  },
  {
    "id": "f_116",
    "name": "补肺阿胶汤",
    "pinyin": "",
    "code": "365",
    "category": "补益剂",
    "subCategory": "补阴",
    "source": "《方剂学》核心名方",
    "efficacy": "肺阴虚有热证",
    "indications": [
      "肺阴虚有热证"
    ],
    "mnemonicHtml": "补肺<u>阿胶</u>马兜铃，牛蒡甘草杏糯停；<div>肺虚火盛人当服，顺气生津嗽哽宁。</div>",
    "mnemonic": "补肺 阿胶 马兜铃，牛蒡甘草杏糯停； 肺虚火盛人当服，顺气生津嗽哽宁。",
    "composition": [
      "阿胶"
    ]
  },
  {
    "id": "f_117",
    "name": "石斛夜光丸",
    "pinyin": "",
    "code": "366",
    "category": "补益剂",
    "subCategory": "补阴",
    "source": "《方剂学》核心名方",
    "efficacy": "肝肾不足，虚火上扰证",
    "indications": [
      "肝肾不足，虚火上扰证"
    ],
    "mnemonicHtml": "石斛夜光枳膝芎，二地二冬杞丝苁；<div>青葙草决犀羚角，参味连苓蒺草风；</div><div>再与杏菊山药配，养阴明目第一功。</div>",
    "mnemonic": "石斛夜光枳膝芎，二地二冬杞丝苁； 青葙草决犀羚角，参味连苓蒺草风； 再与杏菊山药配，养阴明目第一功。",
    "composition": [
      "石斛夜光丸"
    ]
  },
  {
    "id": "f_118",
    "name": "大补阴丸",
    "pinyin": "",
    "code": "366",
    "category": "补益剂",
    "subCategory": "补阴",
    "source": "《方剂学》核心名方",
    "efficacy": "阴虚火旺证",
    "indications": [
      "阴虚火旺证"
    ],
    "mnemonicHtml": "大补阴丸知柏<u>黄</u>，<u>龟板</u>脊髓蜜成方；<div>咳嗽咯血骨蒸热，滋阴降火效力强。</div>",
    "mnemonic": "大补阴丸知柏 黄 ， 龟板 脊髓蜜成方； 咳嗽咯血骨蒸热，滋阴降火效力强。",
    "composition": [
      "黄",
      "龟板"
    ]
  },
  {
    "id": "f_119",
    "name": "虎潜丸",
    "pinyin": "",
    "code": "366",
    "category": "补益剂",
    "subCategory": "补阴",
    "source": "《方剂学》核心名方",
    "efficacy": "肝肾不足，阴虚内热之痿证",
    "indications": [
      "肝肾不足，阴虚内热之痿证"
    ],
    "mnemonicHtml": "虎潜足痿是妙方，虎骨陈皮并锁阳；<div>龟板干姜知母芍，再加柏地作丸尝。</div><div>滋阴降火强壮骨，肝肾不足虚热良。</div>",
    "mnemonic": "虎潜足痿是妙方，虎骨陈皮并锁阳； 龟板干姜知母芍，再加柏地作丸尝。 滋阴降火强壮骨，肝肾不足虚热良。",
    "composition": [
      "虎潜丸"
    ]
  },
  {
    "id": "f_120",
    "name": "左归丸",
    "pinyin": "",
    "code": "366",
    "category": "补益剂",
    "subCategory": "补阴",
    "source": "《景岳全书》",
    "efficacy": "真阴不足证",
    "indications": [
      "真阴不足证"
    ],
    "mnemonicHtml": "左归丸内<u>地</u>山药，萸肉牛膝与枸杞；<br><div>菟丝龟鹿二胶合，壮水之主方第一。</div>",
    "mnemonic": "左归丸内 地 山药，萸肉牛膝与枸杞； 菟丝龟鹿二胶合，壮水之主方第一。",
    "composition": [
      "地"
    ]
  },
  {
    "id": "f_121",
    "name": "左归饮",
    "pinyin": "",
    "code": "366",
    "category": "补益剂",
    "subCategory": "补阴",
    "source": "《景岳全书》",
    "efficacy": "真阴不足证",
    "indications": [
      "真阴不足证"
    ],
    "mnemonicHtml": "左归饮来补肾阴，熟地山药山萸跟；<div>枸杞苓草同煎服，既主腰酸又止遗。</div>",
    "mnemonic": "左归饮来补肾阴，熟地山药山萸跟； 枸杞苓草同煎服，既主腰酸又止遗。",
    "composition": [
      "左归饮"
    ]
  },
  {
    "id": "f_122",
    "name": "肾气丸",
    "pinyin": "",
    "code": "366",
    "category": "补益剂",
    "subCategory": "补阳",
    "source": "《金匮要略》",
    "efficacy": "肾阳不足证",
    "indications": [
      "肾阳不足证"
    ],
    "mnemonicHtml": "金匮肾气治肾虚，<u>熟地</u>怀药及山萸；<div>丹皮苓泽加桂附，引火归原热下趋。</div>",
    "mnemonic": "金匮肾气治肾虚， 熟地 怀药及山萸； 丹皮苓泽加桂附，引火归原热下趋。",
    "composition": [
      "熟地"
    ]
  },
  {
    "id": "f_123",
    "name": "右归丸",
    "pinyin": "",
    "code": "367",
    "category": "补益剂",
    "subCategory": "补阳",
    "source": "《景岳全书》",
    "efficacy": "肾阳不足，命门火衰证",
    "indications": [
      "肾阳不足，命门火衰证"
    ],
    "mnemonicHtml": "右归丸中地<u>附桂</u>，山药茱萸菟丝归；<div>杜仲<u>鹿胶</u>枸杞子，益火之源此方魁；</div><div>无子食少便不实，浮肿阳痿便自遗。</div>",
    "mnemonic": "右归丸中地 附桂 ，山药茱萸菟丝归； 杜仲 鹿胶 枸杞子，益火之源此方魁； 无子食少便不实，浮肿阳痿便自遗。",
    "composition": [
      "附桂",
      "鹿胶"
    ]
  },
  {
    "id": "f_124",
    "name": "右归饮",
    "pinyin": "",
    "code": "367",
    "category": "补益剂",
    "subCategory": "补阳",
    "source": "《景岳全书》",
    "efficacy": "肾阳不足证",
    "indications": [
      "肾阳不足证"
    ],
    "mnemonicHtml": "右归饮中用附桂，地杞萸药杜草需；<div>温补肾阳填精血，肾阳不足效亦追。</div>",
    "mnemonic": "右归饮中用附桂，地杞萸药杜草需； 温补肾阳填精血，肾阳不足效亦追。",
    "composition": [
      "右归饮"
    ]
  },
  {
    "id": "f_125",
    "name": "地黄饮子",
    "pinyin": "",
    "code": "367",
    "category": "补益剂",
    "subCategory": "阴阳并补",
    "source": "《方剂学》核心名方",
    "efficacy": "下元虚衰，痰浊上逆之喑fei",
    "indications": [
      "下元虚衰，痰浊上逆之喑fei"
    ],
    "mnemonicHtml": "<u>地黄</u>饮子<u>山茱</u>斛，麦味菖蒲远志茯；<div><u>苁蓉</u>桂附<u>巴戟天</u>，加薄姜枣喑啡服；</div><div>肾阴肾阳痰开窍。</div>",
    "mnemonic": "地黄 饮子 山茱 斛，麦味菖蒲远志茯； 苁蓉 桂附 巴戟天 ，加薄姜枣喑啡服； 肾阴肾阳痰开窍。",
    "composition": [
      "地黄",
      "山茱",
      "苁蓉",
      "巴戟天"
    ]
  },
  {
    "id": "f_126",
    "name": "七宝美髯丹",
    "pinyin": "",
    "code": "367",
    "category": "补益剂",
    "subCategory": "阴阳并补",
    "source": "《方剂学》核心名方",
    "efficacy": "肝肾不足证",
    "indications": [
      "肝肾不足证"
    ],
    "mnemonicHtml": "七宝美髯乌归杞，苓膝骨脂菟丝子；<div>筋痿骨软齿动摇，重在滋水与涵木。</div>",
    "mnemonic": "七宝美髯乌归杞，苓膝骨脂菟丝子； 筋痿骨软齿动摇，重在滋水与涵木。",
    "composition": [
      "七宝美髯丹"
    ]
  },
  {
    "id": "f_127",
    "name": "龟鹿二仙胶",
    "pinyin": "",
    "code": "367",
    "category": "补益剂",
    "subCategory": "阴阳并补",
    "source": "《方剂学》核心名方",
    "efficacy": "真元虚损，精血不足证",
    "indications": [
      "真元虚损，精血不足证"
    ],
    "mnemonicHtml": "医便<u>龟鹿</u>二仙胶，人参枸杞熬成膏；<div>滋阴填精益气阳，真元虚损精血亏。</div>",
    "mnemonic": "医便 龟鹿 二仙胶，人参枸杞熬成膏； 滋阴填精益气阳，真元虚损精血亏。",
    "composition": [
      "龟鹿"
    ]
  },
  {
    "id": "f_128",
    "name": "补天大造丸",
    "pinyin": "",
    "code": "367",
    "category": "补益剂",
    "subCategory": "阴阳并补",
    "source": "《方剂学》核心名方",
    "efficacy": "虚劳",
    "indications": [
      "虚劳"
    ],
    "mnemonicHtml": "补天大造鹿龟胶，芪参杞术地芍归；<div>枣仁山苓远<u>河车</u>，五脏虚损阴阳补。</div>",
    "mnemonic": "补天大造鹿龟胶，芪参杞术地芍归； 枣仁山苓远 河车 ，五脏虚损阴阳补。",
    "composition": [
      "河车"
    ]
  },
  {
    "id": "f_129",
    "name": "朱砂安神丸",
    "pinyin": "",
    "code": "367",
    "category": "安神剂",
    "subCategory": "重镇安神",
    "source": "《脾胃论》/《内外伤辨惑论》",
    "efficacy": "心火偏亢，阴血不足证",
    "indications": [
      "心火偏亢，阴血不足证"
    ],
    "mnemonicHtml": "<u>朱砂</u>安神东垣方，归连炙草生地黄；<div>怔忡不寐心烦乱，养阴清热可复康。</div>",
    "mnemonic": "朱砂 安神东垣方，归连炙草生地黄； 怔忡不寐心烦乱，养阴清热可复康。",
    "composition": [
      "朱砂"
    ]
  },
  {
    "id": "f_130",
    "name": "珍珠母丸",
    "pinyin": "",
    "code": "367",
    "category": "安神剂",
    "subCategory": "重镇安神",
    "source": "《方剂学》核心名方",
    "efficacy": "心肝阳亢，阴血不足，神志不宁证",
    "indications": [
      "心肝阳亢，阴血不足，神志不宁证"
    ],
    "mnemonicHtml": "<u>珍珠母</u>丸<u>龙齿</u>参，犀沉归地柏枣仁；<div>朱砂为衣茯神入，镇心潜阳又宁神，</div><div>平肝安神养阴血。</div>",
    "mnemonic": "珍珠母 丸 龙齿 参，犀沉归地柏枣仁； 朱砂为衣茯神入，镇心潜阳又宁神， 平肝安神养阴血。",
    "composition": [
      "珍珠母",
      "龙齿"
    ]
  },
  {
    "id": "f_131",
    "name": "磁朱丸",
    "pinyin": "",
    "code": "368",
    "category": "安神剂",
    "subCategory": "重镇安神",
    "source": "《方剂学》核心名方",
    "efficacy": "心肾不交证",
    "indications": [
      "心肾不交证"
    ],
    "mnemonicHtml": "<u>磁</u>朱丸中有神曲，重镇安神交心肾；<div>心悸失眠耳目疾，癫狂痫证服之宜。</div>",
    "mnemonic": "磁 朱丸中有神曲，重镇安神交心肾； 心悸失眠耳目疾，癫狂痫证服之宜。",
    "composition": [
      "磁"
    ]
  },
  {
    "id": "f_132",
    "name": "酸枣仁汤",
    "pinyin": "",
    "code": "368",
    "category": "安神剂",
    "subCategory": "滋养安神",
    "source": "《方剂学》核心名方",
    "efficacy": "肝血不足，虚热内扰之虚烦失眠证",
    "indications": [
      "肝血不足，虚热内扰之虚烦失眠证"
    ],
    "mnemonicHtml": "<u>酸枣仁</u>汤治失眠，川芎知茯生草煎；<div>养血除烦清虚热，安然入睡梦乡甜。</div>",
    "mnemonic": "酸枣仁 汤治失眠，川芎知茯生草煎； 养血除烦清虚热，安然入睡梦乡甜。",
    "composition": [
      "酸枣仁"
    ]
  },
  {
    "id": "f_133",
    "name": "天王补心丹",
    "pinyin": "",
    "code": "368",
    "category": "安神剂",
    "subCategory": "滋养安神",
    "source": "《方剂学》核心名方",
    "efficacy": "阴亏血少，心神不宁证",
    "indications": [
      "阴亏血少，心神不宁证"
    ],
    "mnemonicHtml": "天王补心柏枣仁，二冬<u>生地</u>当归身；<div>三参桔梗朱砂味，远志茯苓共养神。</div>",
    "mnemonic": "天王补心柏枣仁，二冬 生地 当归身； 三参桔梗朱砂味，远志茯苓共养神。",
    "composition": [
      "生地"
    ]
  },
  {
    "id": "f_134",
    "name": "甘麦大枣汤",
    "pinyin": "",
    "code": "368",
    "category": "安神剂",
    "subCategory": "滋养安神",
    "source": "《金匮要略》",
    "efficacy": "心阴受损，肝气失和之脏躁",
    "indications": [
      "心阴受损，肝气失和之脏躁"
    ],
    "mnemonicHtml": "金匮甘麦大枣汤，妇人脏躁喜悲伤；<div>精神恍惚常欲哭，养心安神效力彰。</div>",
    "mnemonic": "金匮甘麦大枣汤，妇人脏躁喜悲伤； 精神恍惚常欲哭，养心安神效力彰。",
    "composition": [
      "甘麦大枣汤"
    ]
  },
  {
    "id": "f_135",
    "name": "养心汤",
    "pinyin": "",
    "code": "368",
    "category": "安神剂",
    "subCategory": "滋养安神",
    "source": "《方剂学》核心名方",
    "efficacy": "气血不足，心神不宁证",
    "indications": [
      "气血不足，心神不宁证"
    ],
    "mnemonicHtml": "养心<u>芪参</u>炙草归，二茯远志柏子味；<div>芎夏曲桂炒酸枣，补益气血安心神。</div>",
    "mnemonic": "养心 芪参 炙草归，二茯远志柏子味； 芎夏曲桂炒酸枣，补益气血安心神。",
    "composition": [
      "芪参"
    ]
  },
  {
    "id": "f_136",
    "name": "黄连阿胶汤",
    "pinyin": "",
    "code": "368",
    "category": "安神剂",
    "subCategory": "滋养安神",
    "source": "《方剂学》核心名方",
    "efficacy": "阴虚火旺，心肾不交证",
    "indications": [
      "阴虚火旺，心肾不交证"
    ],
    "mnemonicHtml": "黄四阿三芩芍二，鸡子二枚心肾安；<div>水亏火炽烦不卧，滋阴降火自然康。</div>",
    "mnemonic": "黄四阿三芩芍二，鸡子二枚心肾安； 水亏火炽烦不卧，滋阴降火自然康。",
    "composition": [
      "黄连阿胶汤"
    ]
  },
  {
    "id": "f_137",
    "name": "交泰丸",
    "pinyin": "",
    "code": "368",
    "category": "安神剂",
    "subCategory": "滋养安神",
    "source": "《方剂学》核心名方",
    "efficacy": "心火偏亢，心肾不交",
    "indications": [
      "心火偏亢，心肾不交"
    ],
    "mnemonicHtml": "心肾不交交泰丸，一份桂心十份<u>连</u>；<div><div>怔忡不寐心阳亢，心肾交时自可安。</div></div>",
    "mnemonic": "心肾不交交泰丸，一份桂心十份 连 ； 怔忡不寐心阳亢，心肾交时自可安。",
    "composition": [
      "连"
    ]
  },
  {
    "id": "f_138",
    "name": "安宫牛黄丸",
    "pinyin": "",
    "code": "368",
    "category": "开窍剂",
    "subCategory": "凉开",
    "source": "《温病条辨》/《局方》",
    "efficacy": "温热病，邪热内陷心包证",
    "indications": [
      "温热病，邪热内陷心包证"
    ],
    "mnemonicHtml": "安宫<u>牛黄</u>开窍方，芩连栀郁朱雄黄；<div><u>犀角</u>珍珠冰<u>麝</u>箔，热闭心包功效良。</div>",
    "mnemonic": "安宫 牛黄 开窍方，芩连栀郁朱雄黄； 犀角 珍珠冰 麝 箔，热闭心包功效良。",
    "composition": [
      "牛黄",
      "犀角",
      "麝"
    ]
  },
  {
    "id": "f_139",
    "name": "紫雪",
    "pinyin": "",
    "code": "368",
    "category": "开窍剂",
    "subCategory": "凉开",
    "source": "《温病条辨》/《局方》",
    "efficacy": "温热病，邪热内陷心包、热盛动风证",
    "indications": [
      "温热病，邪热内陷心包",
      "热盛动风证"
    ],
    "mnemonicHtml": "紫雪<u>犀羚</u><u>麝</u>朴硝，硝磁寒水滑石膏；<div>丁沉木朱升玄草，更用赤金法亦超。</div>",
    "mnemonic": "紫雪 犀羚 麝 朴硝，硝磁寒水滑石膏； 丁沉木朱升玄草，更用赤金法亦超。",
    "composition": [
      "犀羚",
      "麝"
    ]
  },
  {
    "id": "f_140",
    "name": "至宝丹",
    "pinyin": "",
    "code": "369",
    "category": "开窍剂",
    "subCategory": "凉开",
    "source": "《温病条辨》/《局方》",
    "efficacy": "痰热内闭心包证",
    "indications": [
      "痰热内闭心包证"
    ],
    "mnemonicHtml": "至宝朱砂<u>麝</u>息香，雄黄<u>犀角</u>与<u>牛黄</u>；<div>金银两箔兼龙脑，琥珀还同玳瑁良。</div>",
    "mnemonic": "至宝朱砂 麝 息香，雄黄 犀角 与 牛黄 ； 金银两箔兼龙脑，琥珀还同玳瑁良。",
    "composition": [
      "麝",
      "犀角",
      "牛黄"
    ]
  },
  {
    "id": "f_141",
    "name": "紫金锭（玉枢丹）",
    "pinyin": "",
    "code": "369",
    "category": "开窍剂",
    "subCategory": "凉开",
    "source": "《方剂学》核心名方",
    "efficacy": "秽恶痰浊之时疫",
    "indications": [
      "秽恶痰浊之时疫"
    ],
    "mnemonicHtml": "紫金锭用<u>麝</u>朱雄，<u>慈</u>戟千金五倍同；<div>太乙玉枢名又别，祛痰逐秽及惊风；</div><div>解毒消肿与止痛。</div><div>时疫腹痛呕泄痢，痰厥疮疖虫蛇咬，</div><div>无名肿毒痄丹喉。</div>",
    "mnemonic": "紫金锭用 麝 朱雄， 慈 戟千金五倍同； 太乙玉枢名又别，祛痰逐秽及惊风； 解毒消肿与止痛。 时疫腹痛呕泄痢，痰厥疮疖虫蛇咬， 无名肿毒痄丹喉。",
    "composition": [
      "麝",
      "慈"
    ]
  },
  {
    "id": "f_142",
    "name": "苏合香丸",
    "pinyin": "",
    "code": "369",
    "category": "开窍剂",
    "subCategory": "温开",
    "source": "《太平惠民和剂局方》",
    "efficacy": "寒闭证",
    "indications": [
      "寒闭证"
    ],
    "mnemonicHtml": "<u>苏合香</u>丸<u>麝息香</u>，木丁熏陆荜檀香；<div>犀<u>冰</u>术沉诃香附，衣用朱砂中恶尝。</div>",
    "mnemonic": "苏合香 丸 麝息香 ，木丁熏陆荜檀香； 犀 冰 术沉诃香附，衣用朱砂中恶尝。",
    "composition": [
      "苏合香",
      "麝息香",
      "冰"
    ]
  },
  {
    "id": "f_143",
    "name": "牡蛎散",
    "pinyin": "",
    "code": "369",
    "category": "固涩剂",
    "subCategory": "固表止汗",
    "source": "《方剂学》核心名方",
    "efficacy": "自汗、盗汗证",
    "indications": [
      "自汗",
      "盗汗证"
    ],
    "mnemonicHtml": "<u>牡蛎</u>散内用黄芪，小麦麻黄根最宜；<div>自汗盗汗心液损，固表敛汗见效奇。</div>",
    "mnemonic": "牡蛎 散内用黄芪，小麦麻黄根最宜； 自汗盗汗心液损，固表敛汗见效奇。",
    "composition": [
      "牡蛎"
    ]
  },
  {
    "id": "f_144",
    "name": "大秦艽汤",
    "pinyin": "",
    "code": "375",
    "category": "治风剂",
    "subCategory": "疏散外风",
    "source": "《方剂学》核心名方",
    "efficacy": "风邪初中经络证",
    "indications": [
      "风邪初中经络证"
    ],
    "mnemonicHtml": "大<u>秦艽</u>汤羌独防，芎芷辛芩二地黄。<div>石膏归芍苓甘术，风中经络可煎尝。</div>",
    "mnemonic": "大 秦艽 汤羌独防，芎芷辛芩二地黄。 石膏归芍苓甘术，风中经络可煎尝。",
    "composition": [
      "秦艽"
    ]
  },
  {
    "id": "f_145",
    "name": "羌活胜湿汤",
    "pinyin": "",
    "code": "381",
    "category": "治风剂",
    "subCategory": "疏散外风",
    "source": "《方剂学》核心名方",
    "efficacy": "风湿犯表之痹证",
    "indications": [
      "风湿犯表之痹证"
    ],
    "mnemonicHtml": "羌活胜湿<u>羌独</u>芎，甘蔓藁本与防风。<div>湿气在表头腰重，祛风胜湿来止痛。</div>",
    "mnemonic": "羌活胜湿 羌独 芎，甘蔓藁本与防风。 湿气在表头腰重，祛风胜湿来止痛。",
    "composition": [
      "羌独"
    ]
  },
  {
    "id": "f_146",
    "name": "川芎茶调散",
    "pinyin": "",
    "code": "375",
    "category": "治风剂",
    "subCategory": "疏散外风",
    "source": "《方剂学》核心名方",
    "efficacy": "外感风邪头痛",
    "indications": [
      "外感风邪头痛"
    ],
    "mnemonicHtml": "<u>川芎</u>茶调散荆防，辛芷薄荷甘草羌；<div>目昏鼻塞风攻上，偏正头痛悉能康。</div>",
    "mnemonic": "川芎 茶调散荆防，辛芷薄荷甘草羌； 目昏鼻塞风攻上，偏正头痛悉能康。",
    "composition": [
      "川芎"
    ]
  },
  {
    "id": "f_147",
    "name": "九仙散",
    "pinyin": "",
    "code": "",
    "category": "固涩剂",
    "subCategory": "敛肺止咳",
    "source": "《方剂学》核心名方",
    "efficacy": "解表清里，调和营卫",
    "indications": [
      "详见方歌"
    ],
    "mnemonicHtml": "九仙<u>罂粟</u>乌梅味，参胶桑皮桔贝款；<div>敛肺止咳益气阴，久咳肺虚效堪珍。</div>",
    "mnemonic": "九仙 罂粟 乌梅味，参胶桑皮桔贝款； 敛肺止咳益气阴，久咳肺虚效堪珍。",
    "composition": [
      "罂粟"
    ]
  },
  {
    "id": "f_148",
    "name": "真人养脏汤",
    "pinyin": "",
    "code": "369",
    "category": "固涩剂",
    "subCategory": "涩肠固脱",
    "source": "《太平惠民和剂局方》",
    "efficacy": "久泻久痢，脾肾虚寒证",
    "indications": [
      "久泻久痢，脾肾虚寒证"
    ],
    "mnemonicHtml": "真人养脏诃<u>粟壳</u>，肉蔻当归桂木香；<div>术芍参甘为涩剂，脱肛久痢早煎尝。</div><div><br></div><div>肉桂</div>",
    "mnemonic": "真人养脏诃 粟壳 ，肉蔻当归桂木香； 术芍参甘为涩剂，脱肛久痢早煎尝。 肉桂",
    "composition": [
      "粟壳"
    ]
  },
  {
    "id": "f_149",
    "name": "四神丸",
    "pinyin": "",
    "code": "370",
    "category": "固涩剂",
    "subCategory": "涩肠固脱",
    "source": "《方剂学》核心名方",
    "efficacy": "脾肾阳虚之肾泄证",
    "indications": [
      "脾肾阳虚之肾泄证"
    ],
    "mnemonicHtml": "四神<u>骨脂</u>吴茱萸，肉蔻五味四般须；<div>大枣百枚姜八两，五更肾泄火衰扶。</div>",
    "mnemonic": "四神 骨脂 吴茱萸，肉蔻五味四般须； 大枣百枚姜八两，五更肾泄火衰扶。",
    "composition": [
      "骨脂"
    ]
  },
  {
    "id": "f_150",
    "name": "桑螵蛸散",
    "pinyin": "",
    "code": "370",
    "category": "固涩剂",
    "subCategory": "涩精止遗",
    "source": "《方剂学》核心名方",
    "efficacy": "心肾两虚证",
    "indications": [
      "心肾两虚证"
    ],
    "mnemonicHtml": "<u>桑螵蛸</u>散用龙龟，参茯菖远及当归；<div>尿频遗尿精不固，滋肾宁心法勿违。</div>",
    "mnemonic": "桑螵蛸 散用龙龟，参茯菖远及当归； 尿频遗尿精不固，滋肾宁心法勿违。",
    "composition": [
      "桑螵蛸"
    ]
  },
  {
    "id": "f_151",
    "name": "金锁固精丸",
    "pinyin": "",
    "code": "370",
    "category": "固涩剂",
    "subCategory": "涩精止遗",
    "source": "《金匮要略》",
    "efficacy": "肾虚不固之遗精",
    "indications": [
      "肾虚不固之遗精"
    ],
    "mnemonicHtml": "金锁固精芡实研，莲须龙牡<u>沙苑</u>填；<div>莲粉糊丸盐汤下，肾虚精滑此方先。</div>",
    "mnemonic": "金锁固精芡实研，莲须龙牡 沙苑 填； 莲粉糊丸盐汤下，肾虚精滑此方先。",
    "composition": [
      "沙苑"
    ]
  },
  {
    "id": "f_152",
    "name": "缩泉丸",
    "pinyin": "",
    "code": "370",
    "category": "固涩剂",
    "subCategory": "涩精止遗",
    "source": "《方剂学》核心名方",
    "efficacy": "下元虚寒之小便频数证",
    "indications": [
      "下元虚寒之小便频数证"
    ],
    "mnemonicHtml": "缩泉丸治小便频，膀胱虚寒遗尿斟；<div>乌药<u>益智</u>各等分，山药糊丸效更珍。</div>",
    "mnemonic": "缩泉丸治小便频，膀胱虚寒遗尿斟； 乌药 益智 各等分，山药糊丸效更珍。",
    "composition": [
      "益智"
    ]
  },
  {
    "id": "f_153",
    "name": "固冲汤",
    "pinyin": "",
    "code": "370",
    "category": "固涩剂",
    "subCategory": "固崩止带",
    "source": "《方剂学》核心名方",
    "efficacy": "脾肾两虚，冲脉不固证",
    "indications": [
      "脾肾两虚，冲脉不固证"
    ],
    "mnemonicHtml": "固冲汤用<u>白术芪</u>，龙牡芍萸茜草施；<div>倍子海蛸棕榈炭，崩中漏下总能医。</div>",
    "mnemonic": "固冲汤用 白术芪 ，龙牡芍萸茜草施； 倍子海蛸棕榈炭，崩中漏下总能医。",
    "composition": [
      "白术芪"
    ]
  },
  {
    "id": "f_154",
    "name": "固经丸",
    "pinyin": "",
    "code": "370",
    "category": "固涩剂",
    "subCategory": "固崩止带",
    "source": "《方剂学》核心名方",
    "efficacy": "阴虚血热之崩漏",
    "indications": [
      "阴虚血热之崩漏"
    ],
    "mnemonicHtml": "固经丸用<u>龟板</u>君，黄柏椿皮香附群；<div>黄芩<u>芍药</u>酒丸服，漏下崩中色黑殷。</div>",
    "mnemonic": "固经丸用 龟板 君，黄柏椿皮香附群； 黄芩 芍药 酒丸服，漏下崩中色黑殷。",
    "composition": [
      "龟板",
      "芍药"
    ]
  },
  {
    "id": "f_155",
    "name": "易黄汤",
    "pinyin": "",
    "code": "370",
    "category": "固涩剂",
    "subCategory": "固崩止带",
    "source": "《方剂学》核心名方",
    "efficacy": "脾肾两虚，湿热带下证",
    "indications": [
      "脾肾两虚，湿热带下证"
    ],
    "mnemonicHtml": "易黄<u>山药</u>与<u>芡实</u>，白果黄柏车前子；<div>脾肾两虚收涩带，补脾固肾清热湿。</div>",
    "mnemonic": "易黄 山药 与 芡实 ，白果黄柏车前子； 脾肾两虚收涩带，补脾固肾清热湿。",
    "composition": [
      "山药",
      "芡实"
    ]
  },
  {
    "id": "f_156",
    "name": "清带汤",
    "pinyin": "",
    "code": "370",
    "category": "固涩剂",
    "subCategory": "固崩止带",
    "source": "《方剂学》核心名方",
    "efficacy": "赤白带下",
    "indications": [
      "赤白带下"
    ],
    "mnemonicHtml": "清带汤中海螵蛸，龙牡山药加茜草；<div>带下清稀色赤白，益脾固肾自然好。</div>",
    "mnemonic": "清带汤中海螵蛸，龙牡山药加茜草； 带下清稀色赤白，益脾固肾自然好。",
    "composition": [
      "清带汤"
    ]
  },
  {
    "id": "f_157",
    "name": "柴胡疏肝散",
    "pinyin": "",
    "code": "371",
    "category": "理气剂",
    "subCategory": "行气",
    "source": "《方剂学》核心名方",
    "efficacy": "肝气郁滞证",
    "indications": [
      "肝气郁滞证"
    ],
    "mnemonicHtml": "<u>柴胡</u>疏肝芍川芎，枳壳陈皮草香附；<div>疏肝行气兼活血，胁肋疼痛立能除。</div>",
    "mnemonic": "柴胡 疏肝芍川芎，枳壳陈皮草香附； 疏肝行气兼活血，胁肋疼痛立能除。",
    "composition": [
      "柴胡"
    ]
  },
  {
    "id": "f_158",
    "name": "半夏厚朴汤",
    "pinyin": "",
    "code": "371",
    "category": "理气剂",
    "subCategory": "行气",
    "source": "《方剂学》核心名方",
    "efficacy": "痰气郁结之梅核气",
    "indications": [
      "痰气郁结之梅核气"
    ],
    "mnemonicHtml": "<u>半夏厚朴</u>与紫苏，茯苓生姜共煎服；<div>痰凝气聚成梅核，降逆开郁气自舒。</div>",
    "mnemonic": "半夏厚朴 与紫苏，茯苓生姜共煎服； 痰凝气聚成梅核，降逆开郁气自舒。",
    "composition": [
      "半夏厚朴"
    ]
  },
  {
    "id": "f_159",
    "name": "瓜蒌薤白白酒汤",
    "pinyin": "",
    "code": "371",
    "category": "理气剂",
    "subCategory": "行气",
    "source": "《方剂学》核心名方",
    "efficacy": "痰阻气结之胸痹",
    "indications": [
      "痰阻气结之胸痹"
    ],
    "mnemonicHtml": "<u>瓜蒌</u>薤白白酒汤，胸痹胸闷痛难当；<div>喘息短气时咳唾，难卧再加半夏良。</div>",
    "mnemonic": "瓜蒌 薤白白酒汤，胸痹胸闷痛难当； 喘息短气时咳唾，难卧再加半夏良。",
    "composition": [
      "瓜蒌"
    ]
  },
  {
    "id": "f_160",
    "name": "枳实薤白桂枝汤",
    "pinyin": "",
    "code": "371",
    "category": "理气剂",
    "subCategory": "行气",
    "source": "《伤寒论》",
    "efficacy": "痰结气逆之胸痹",
    "indications": [
      "痰结气逆之胸痹"
    ],
    "mnemonicHtml": "枳实<u>薤白</u>桂枝汤，厚<u>蒌</u>合治胸痹方；<div>胸阳不振痰气结，通阳散结下气强。</div>",
    "mnemonic": "枳实 薤白 桂枝汤，厚 蒌 合治胸痹方； 胸阳不振痰气结，通阳散结下气强。",
    "composition": [
      "薤白",
      "蒌"
    ]
  },
  {
    "id": "f_161",
    "name": "天台乌药散",
    "pinyin": "",
    "code": "371",
    "category": "理气剂",
    "subCategory": "行气",
    "source": "《方剂学》核心名方",
    "efficacy": "寒凝气滞证",
    "indications": [
      "寒凝气滞证"
    ],
    "mnemonicHtml": "<u>天台乌药</u>木茴香，巴豆制楝青槟姜；<div>行气疏肝散寒痛，寒疝痛经癥瘕方。</div>",
    "mnemonic": "天台乌药 木茴香，巴豆制楝青槟姜； 行气疏肝散寒痛，寒疝痛经癥瘕方。",
    "composition": [
      "天台乌药"
    ]
  },
  {
    "id": "f_162",
    "name": "暖肝煎",
    "pinyin": "",
    "code": "371",
    "category": "理气剂",
    "subCategory": "行气",
    "source": "《方剂学》核心名方",
    "efficacy": "肝肾不足，寒滞肝脉证",
    "indications": [
      "肝肾不足，寒滞肝脉证"
    ],
    "mnemonicHtml": "暖肝煎中杞茯归，<u>茴</u>沉乌药姜<u>肉桂</u>；<div>下焦虚寒疝气痛，温补肝肾此方推。</div>",
    "mnemonic": "暖肝煎中杞茯归， 茴 沉乌药姜 肉桂 ； 下焦虚寒疝气痛，温补肝肾此方推。",
    "composition": [
      "茴",
      "肉桂"
    ]
  },
  {
    "id": "f_163",
    "name": "枳实消痞丸",
    "pinyin": "",
    "code": "371",
    "category": "理气剂",
    "subCategory": "行气",
    "source": "《方剂学》核心名方",
    "efficacy": "脾虚气滞，寒热互结证",
    "indications": [
      "脾虚气滞，寒热互结证"
    ],
    "mnemonicHtml": "<u>枳实</u>消痞四君全，麦芽夏曲朴姜连；<div>蒸饼糊丸消积满，行气破结补虚痊。</div><div>干生姜</div>",
    "mnemonic": "枳实 消痞四君全，麦芽夏曲朴姜连； 蒸饼糊丸消积满，行气破结补虚痊。 干生姜",
    "composition": [
      "枳实"
    ]
  },
  {
    "id": "f_164",
    "name": "越鞠丸",
    "pinyin": "",
    "code": "371",
    "category": "理气剂",
    "subCategory": "行气",
    "source": "《方剂学》核心名方",
    "efficacy": "气血痰火湿食六郁",
    "indications": [
      "气血痰火湿食六郁"
    ],
    "mnemonicHtml": "越鞠丸治六般郁，气血痰火湿食因；<div><u>香附</u>芎苍兼栀曲，气畅郁舒痛闷伸。</div>",
    "mnemonic": "越鞠丸治六般郁，气血痰火湿食因； 香附 芎苍兼栀曲，气畅郁舒痛闷伸。",
    "composition": [
      "香附"
    ]
  },
  {
    "id": "f_165",
    "name": "金铃子散",
    "pinyin": "",
    "code": "371",
    "category": "理气剂",
    "subCategory": "行气",
    "source": "《方剂学》核心名方",
    "efficacy": "肝郁化火证",
    "indications": [
      "肝郁化火证"
    ],
    "mnemonicHtml": "<u>金铃子</u>散止痛方，延胡酒调效更强；<div>疏肝清热行气血，心腹胸肋痛经良。</div>",
    "mnemonic": "金铃子 散止痛方，延胡酒调效更强； 疏肝清热行气血，心腹胸肋痛经良。",
    "composition": [
      "金铃子"
    ]
  },
  {
    "id": "f_166",
    "name": "厚朴温中汤",
    "pinyin": "",
    "code": "372",
    "category": "理气剂",
    "subCategory": "行气",
    "source": "《方剂学》核心名方",
    "efficacy": "中焦寒湿气滞证",
    "indications": [
      "中焦寒湿气滞证"
    ],
    "mnemonicHtml": "<u>厚朴</u>温中陈草苓，干姜草蔻木香停；<div>煎服加姜治腹痛，虚寒胀满用皆灵。</div>",
    "mnemonic": "厚朴 温中陈草苓，干姜草蔻木香停； 煎服加姜治腹痛，虚寒胀满用皆灵。",
    "composition": [
      "厚朴"
    ]
  },
  {
    "id": "f_167",
    "name": "加味乌药汤",
    "pinyin": "",
    "code": "372",
    "category": "理气剂",
    "subCategory": "行气",
    "source": "《方剂学》核心名方",
    "efficacy": "肝郁气滞之痛经",
    "indications": [
      "肝郁气滞之痛经"
    ],
    "mnemonicHtml": "加味乌药汤砂仁，<u>香附</u>木香乌药伦；<div>延胡甘草生姜入，经前胀痛效堪珍。</div>",
    "mnemonic": "加味乌药汤砂仁， 香附 木香乌药伦； 延胡甘草生姜入，经前胀痛效堪珍。",
    "composition": [
      "香附"
    ]
  },
  {
    "id": "f_168",
    "name": "橘核丸",
    "pinyin": "",
    "code": "372",
    "category": "理气剂",
    "subCategory": "行气",
    "source": "《方剂学》核心名方",
    "efficacy": "寒湿疝气",
    "indications": [
      "寒湿疝气"
    ],
    "mnemonicHtml": "橘核丸中川楝桂，朴实延胡藻带昆；<div>桃仁木通木香合，㿗疝痛顽盐酒吞，</div><div>偏坠如石痛引脐，阴肿黄水重溃烂。</div>",
    "mnemonic": "橘核丸中川楝桂，朴实延胡藻带昆； 桃仁木通木香合，㿗疝痛顽盐酒吞， 偏坠如石痛引脐，阴肿黄水重溃烂。",
    "composition": [
      "橘核丸"
    ]
  },
  {
    "id": "f_169",
    "name": "苏子降气汤",
    "pinyin": "",
    "code": "372",
    "category": "理气剂",
    "subCategory": "降气",
    "source": "《方剂学》核心名方",
    "efficacy": "上实下虚之喘咳",
    "indications": [
      "上实下虚之喘咳"
    ],
    "mnemonicHtml": "苏子降气半夏归，前胡桂朴草姜随；<div>上实下虚痰嗽喘，集解加沉去肉桂。</div><div><br></div><div>肉桂 生姜</div>",
    "mnemonic": "苏子降气半夏归，前胡桂朴草姜随； 上实下虚痰嗽喘，集解加沉去肉桂。 肉桂 生姜",
    "composition": [
      "苏子降气汤"
    ]
  },
  {
    "id": "f_170",
    "name": "定喘汤",
    "pinyin": "",
    "code": "372",
    "category": "理气剂",
    "subCategory": "降气",
    "source": "《方剂学》核心名方",
    "efficacy": "风寒外束，痰热内蕴之哮喘",
    "indications": [
      "风寒外束，痰热内蕴之哮喘"
    ],
    "mnemonicHtml": "定喘<u>白果</u>与<u>麻黄</u>，款冬半夏白皮桑；<div>苏杏黄芩生甘草，风寒痰热喘哮尝。</div>",
    "mnemonic": "定喘 白果 与 麻黄 ，款冬半夏白皮桑； 苏杏黄芩生甘草，风寒痰热喘哮尝。",
    "composition": [
      "白果",
      "麻黄"
    ]
  },
  {
    "id": "f_171",
    "name": "旋覆代赭汤",
    "pinyin": "",
    "code": "372",
    "category": "理气剂",
    "subCategory": "降气",
    "source": "《方剂学》核心名方",
    "efficacy": "中虚痰阻气逆证",
    "indications": [
      "中虚痰阻气逆证"
    ],
    "mnemonicHtml": "<u>旋</u>三赭一五两姜，人参炙草大枣夏；<div>化痰降逆兼益气，和胃痞硬噫能禁，</div><div>反胃呕吐涎沫嗳。</div>",
    "mnemonic": "旋 三赭一五两姜，人参炙草大枣夏； 化痰降逆兼益气，和胃痞硬噫能禁， 反胃呕吐涎沫嗳。",
    "composition": [
      "旋"
    ]
  },
  {
    "id": "f_172",
    "name": "橘皮竹茹汤",
    "pinyin": "",
    "code": "372",
    "category": "理气剂",
    "subCategory": "降气",
    "source": "《方剂学》核心名方",
    "efficacy": "胃虚有热之呕逆",
    "indications": [
      "胃虚有热之呕逆"
    ],
    "mnemonicHtml": "<u>橘皮竹茹</u>治呕逆，人参甘草枣姜益；<div>胃虚有热失和降，久病之后更相宜。</div>",
    "mnemonic": "橘皮竹茹 治呕逆，人参甘草枣姜益； 胃虚有热失和降，久病之后更相宜。",
    "composition": [
      "橘皮竹茹"
    ]
  },
  {
    "id": "f_173",
    "name": "四磨汤",
    "pinyin": "",
    "code": "372",
    "category": "理气剂",
    "subCategory": "降气",
    "source": "《方剂学》核心名方",
    "efficacy": "肝郁气逆证",
    "indications": [
      "肝郁气逆证"
    ],
    "mnemonicHtml": "四磨汤治七情侵，人参<u>乌药</u>及槟沉；<div>浓磨煎服调逆气，实者枳壳易人参。</div>",
    "mnemonic": "四磨汤治七情侵，人参 乌药 及槟沉； 浓磨煎服调逆气，实者枳壳易人参。",
    "composition": [
      "乌药"
    ]
  },
  {
    "id": "f_174",
    "name": "桃核承气汤",
    "pinyin": "",
    "code": "373",
    "category": "泻下剂",
    "subCategory": "寒下",
    "source": "《方剂学》核心名方",
    "efficacy": "下焦蓄血证",
    "indications": [
      "下焦蓄血证"
    ],
    "mnemonicHtml": "<u>桃</u>核承气五般奇，炙草硝<u>黄</u>并桂枝；<div>瘀热互结小腹胀，蓄血如狂急服之。</div><div>桃核承气狂谵语，至夜发热闭痛经，</div><div>跌打二便头齿痛，鼻衄吐血有恶露，</div><div>少腹坚痛喘胀死。</div>",
    "mnemonic": "桃 核承气五般奇，炙草硝 黄 并桂枝； 瘀热互结小腹胀，蓄血如狂急服之。 桃核承气狂谵语，至夜发热闭痛经， 跌打二便头齿痛，鼻衄吐血有恶露， 少腹坚痛喘胀死。",
    "composition": [
      "桃",
      "黄"
    ]
  },
  {
    "id": "f_175",
    "name": "血府逐瘀汤",
    "pinyin": "",
    "code": "373",
    "category": "理血剂",
    "subCategory": "活血祛瘀",
    "source": "《医林改错》",
    "efficacy": "胸中血瘀证",
    "indications": [
      "胸中血瘀证"
    ],
    "mnemonicHtml": "血府逐瘀归地<u>桃</u>，<u>红花</u>甘草壳赤芍；<div>柴胡芎桔牛膝等，血化下行不作劳。</div><div>胸痛头痛饮水呛，呃逆内热悸失眠，</div><div>急躁易怒暮潮热。</div>",
    "mnemonic": "血府逐瘀归地 桃 ， 红花 甘草壳赤芍； 柴胡芎桔牛膝等，血化下行不作劳。 胸痛头痛饮水呛，呃逆内热悸失眠， 急躁易怒暮潮热。",
    "composition": [
      "桃",
      "红花"
    ]
  },
  {
    "id": "f_176",
    "name": "通窍活血汤",
    "pinyin": "",
    "code": "374",
    "category": "理血剂",
    "subCategory": "活血祛瘀",
    "source": "《医林改错》",
    "efficacy": "瘀阻头面",
    "indications": [
      "瘀阻头面"
    ],
    "mnemonicHtml": "通窍全凭好麝香，桃红大枣老葱姜；<div>川芎黄酒赤芍药，表里通经第一方。</div>",
    "mnemonic": "通窍全凭好麝香，桃红大枣老葱姜； 川芎黄酒赤芍药，表里通经第一方。",
    "composition": [
      "通窍活血汤"
    ]
  },
  {
    "id": "f_177",
    "name": "膈下逐瘀汤",
    "pinyin": "",
    "code": "374",
    "category": "理血剂",
    "subCategory": "活血祛瘀",
    "source": "《医林改错》",
    "efficacy": "膈下瘀血证",
    "indications": [
      "膈下瘀血证"
    ],
    "mnemonicHtml": "膈下逐瘀桃牡丹，赤芍乌药元胡甘，<div>归芎灵脂红花壳，香附开郁血亦安。</div>",
    "mnemonic": "膈下逐瘀桃牡丹，赤芍乌药元胡甘， 归芎灵脂红花壳，香附开郁血亦安。",
    "composition": [
      "膈下逐瘀汤"
    ]
  },
  {
    "id": "f_178",
    "name": "少腹逐瘀汤",
    "pinyin": "",
    "code": "374",
    "category": "理血剂",
    "subCategory": "活血祛瘀",
    "source": "《医林改错》",
    "efficacy": "少腹寒凝血瘀证",
    "indications": [
      "少腹寒凝血瘀证"
    ],
    "mnemonicHtml": "少腹逐瘀芎炮姜，元胡灵脂芍茴香，<div>蒲黄肉桂当没药，调经止痛是良方。</div>",
    "mnemonic": "少腹逐瘀芎炮姜，元胡灵脂芍茴香， 蒲黄肉桂当没药，调经止痛是良方。",
    "composition": [
      "少腹逐瘀汤"
    ]
  },
  {
    "id": "f_179",
    "name": "身痛逐瘀汤",
    "pinyin": "",
    "code": "374",
    "category": "理血剂",
    "subCategory": "活血祛瘀",
    "source": "《医林改错》",
    "efficacy": "血痹阻经络证",
    "indications": [
      "血痹阻经络证"
    ],
    "mnemonicHtml": "身痛逐瘀膝地龙，香附羌秦草归芎；<div>黄芪苍柏量加减，要紧五灵桃没红。</div>",
    "mnemonic": "身痛逐瘀膝地龙，香附羌秦草归芎； 黄芪苍柏量加减，要紧五灵桃没红。",
    "composition": [
      "身痛逐瘀汤"
    ]
  },
  {
    "id": "f_180",
    "name": "复元活血汤",
    "pinyin": "",
    "code": "373",
    "category": "理血剂",
    "subCategory": "活血祛瘀",
    "source": "《方剂学》核心名方",
    "efficacy": "跌打损伤，胁下血瘀证",
    "indications": [
      "跌打损伤，胁下血瘀证"
    ],
    "mnemonicHtml": "复元活血用<u>柴胡</u>，\n花粉当归山甲入；<div>桃仁红花<u>大黄</u>草，跌打损伤酒煎祛</div>",
    "mnemonic": "复元活血用 柴胡 ， 花粉当归山甲入； 桃仁红花 大黄 草，跌打损伤酒煎祛",
    "composition": [
      "柴胡",
      "大黄"
    ]
  },
  {
    "id": "f_181",
    "name": "温经汤",
    "pinyin": "",
    "code": "373",
    "category": "理血剂",
    "subCategory": "活血祛瘀",
    "source": "《方剂学》核心名方",
    "efficacy": "冲任虚寒，瘀血阻滞证",
    "indications": [
      "冲任虚寒，瘀血阻滞证"
    ],
    "mnemonicHtml": "温经汤用<u>桂萸</u>芎，归芍丹皮姜夏冬；<div>参草阿胶调气血，暖宫祛瘀在温通。</div><div>漏下淋漓经前后，数行逾期停痛经，</div><div>傍晚发热宫冷孕。</div>",
    "mnemonic": "温经汤用 桂萸 芎，归芍丹皮姜夏冬； 参草阿胶调气血，暖宫祛瘀在温通。 漏下淋漓经前后，数行逾期停痛经， 傍晚发热宫冷孕。",
    "composition": [
      "桂萸"
    ]
  },
  {
    "id": "f_182",
    "name": "艾附暖宫丸",
    "pinyin": "",
    "code": "373",
    "category": "理血剂",
    "subCategory": "活血祛瘀",
    "source": "《方剂学》核心名方",
    "efficacy": "妇人子宫虚冷",
    "indications": [
      "妇人子宫虚冷"
    ],
    "mnemonicHtml": "艾附暖宫艾香附，生地白芍芎吴萸，<div>川椒官桂芪续断，温经养血活血虚。</div>",
    "mnemonic": "艾附暖宫艾香附，生地白芍芎吴萸， 川椒官桂芪续断，温经养血活血虚。",
    "composition": [
      "艾附暖宫丸"
    ]
  },
  {
    "id": "f_183",
    "name": "生化汤",
    "pinyin": "",
    "code": "373",
    "category": "理血剂",
    "subCategory": "活血祛瘀",
    "source": "《方剂学》核心名方",
    "efficacy": "产后瘀血腹痛",
    "indications": [
      "产后瘀血腹痛"
    ],
    "mnemonicHtml": "生化汤宜产后尝，<u>归</u>芎桃草酒炮姜；<div>恶露不行少腹痛，温养活血最见长。</div>",
    "mnemonic": "生化汤宜产后尝， 归 芎桃草酒炮姜； 恶露不行少腹痛，温养活血最见长。",
    "composition": [
      "归"
    ]
  },
  {
    "id": "f_184",
    "name": "补阳还五汤",
    "pinyin": "",
    "code": "373",
    "category": "理血剂",
    "subCategory": "活血祛瘀",
    "source": "《医林改错》",
    "efficacy": "气虚血瘀之中风",
    "indications": [
      "气虚血瘀之中风"
    ],
    "mnemonicHtml": "补阳还五赤芍芎，归尾通经佐地龙；<div>四两<u>黄芪</u>为主药，血中瘀滞用桃红。</div>",
    "mnemonic": "补阳还五赤芍芎，归尾通经佐地龙； 四两 黄芪 为主药，血中瘀滞用桃红。",
    "composition": [
      "黄芪"
    ]
  },
  {
    "id": "f_185",
    "name": "七厘散",
    "pinyin": "",
    "code": "373",
    "category": "理血剂",
    "subCategory": "活血祛瘀",
    "source": "《方剂学》核心名方",
    "efficacy": "跌打损伤，筋断骨折之瘀血肿痛，或刀伤出血",
    "indications": [
      "跌打损伤，筋断骨折之瘀血肿痛，或刀伤出血"
    ],
    "mnemonicHtml": "七厘散治跌打伤，<u>血竭</u>红花冰麝香；<div>乳没儿茶朱砂末，活血散瘀止痛良。</div>",
    "mnemonic": "七厘散治跌打伤， 血竭 红花冰麝香； 乳没儿茶朱砂末，活血散瘀止痛良。",
    "composition": [
      "血竭"
    ]
  },
  {
    "id": "f_186",
    "name": "失笑散",
    "pinyin": "",
    "code": "374",
    "category": "理血剂",
    "subCategory": "活血祛瘀",
    "source": "《方剂学》核心名方",
    "efficacy": "瘀血停滞证",
    "indications": [
      "瘀血停滞证"
    ],
    "mnemonicHtml": "失笑<u>灵脂</u>蒲黄同，等量为散酽醋冲；<div>瘀血停滞心腹痛，恶露痛经散结功。</div>",
    "mnemonic": "失笑 灵脂 蒲黄同，等量为散酽醋冲； 瘀血停滞心腹痛，恶露痛经散结功。",
    "composition": [
      "灵脂"
    ]
  },
  {
    "id": "f_187",
    "name": "桂枝茯苓丸",
    "pinyin": "",
    "code": "374",
    "category": "理血剂",
    "subCategory": "活血祛瘀",
    "source": "《方剂学》核心名方",
    "efficacy": "瘀血留阻胞宫证",
    "indications": [
      "瘀血留阻胞宫证"
    ],
    "mnemonicHtml": "金匮<u>桂枝</u>茯苓丸，芍药桃仁与牡丹；<div>等份为末蜜丸服，通因通用癥块散。</div>",
    "mnemonic": "金匮 桂枝 茯苓丸，芍药桃仁与牡丹； 等份为末蜜丸服，通因通用癥块散。",
    "composition": [
      "桂枝"
    ]
  },
  {
    "id": "f_188",
    "name": "活络效灵丹",
    "pinyin": "",
    "code": "374",
    "category": "理血剂",
    "subCategory": "活血祛瘀",
    "source": "《方剂学》核心名方",
    "efficacy": "气血凝滞证",
    "indications": [
      "气血凝滞证"
    ],
    "mnemonicHtml": "活络效灵用丹参，当归乳香没药存；<div>癥瘕积聚腹中痛，活血祛瘀通络真，</div><div>跌疮积聚心腿痛。</div>",
    "mnemonic": "活络效灵用丹参，当归乳香没药存； 癥瘕积聚腹中痛，活血祛瘀通络真， 跌疮积聚心腿痛。",
    "composition": [
      "活络效灵丹"
    ]
  },
  {
    "id": "f_189",
    "name": "丹参饮",
    "pinyin": "",
    "code": "374",
    "category": "理血剂",
    "subCategory": "活血祛瘀",
    "source": "《方剂学》核心名方",
    "efficacy": "血瘀气滞之心胃诸痛",
    "indications": [
      "血瘀气滞之心胃诸痛"
    ],
    "mnemonicHtml": "心腹诸痛有妙方，丹参十分做提纲；<div>檀砂一分聊为佐，活血祛瘀行气彰。</div>",
    "mnemonic": "心腹诸痛有妙方，丹参十分做提纲； 檀砂一分聊为佐，活血祛瘀行气彰。",
    "composition": [
      "丹参饮"
    ]
  },
  {
    "id": "f_190",
    "name": "大黄蛰虫丸",
    "pinyin": "",
    "code": "374",
    "category": "理血剂",
    "subCategory": "活血祛瘀",
    "source": "《方剂学》核心名方",
    "efficacy": "正气虚损，瘀血内停证",
    "indications": [
      "正气虚损，瘀血内停证"
    ],
    "mnemonicHtml": "<u>大黄䗪虫</u>芩芍桃，地黄杏草漆蛴螬；<div>水蛭虻虫和丸服，祛瘀生新干血疗。</div>",
    "mnemonic": "大黄䗪虫 芩芍桃，地黄杏草漆蛴螬； 水蛭虻虫和丸服，祛瘀生新干血疗。",
    "composition": [
      "大黄䗪虫"
    ]
  },
  {
    "id": "f_191",
    "name": "小蓟饮子",
    "pinyin": "",
    "code": "374",
    "category": "理血剂",
    "subCategory": "止血",
    "source": "《方剂学》核心名方",
    "efficacy": "热结下焦之血淋、尿血",
    "indications": [
      "热结下焦之血淋",
      "尿血"
    ],
    "mnemonicHtml": "<u>小蓟</u>饮子藕蒲黄，木通滑石生地襄；<div>归草栀子淡竹叶，热结血淋服之良。</div>",
    "mnemonic": "小蓟 饮子藕蒲黄，木通滑石生地襄； 归草栀子淡竹叶，热结血淋服之良。",
    "composition": [
      "小蓟"
    ]
  },
  {
    "id": "f_192",
    "name": "槐花散",
    "pinyin": "",
    "code": "374",
    "category": "理血剂",
    "subCategory": "止血",
    "source": "《方剂学》核心名方",
    "efficacy": "风热湿毒壅遏大肠之便血",
    "indications": [
      "风热湿毒壅遏大肠之便血"
    ],
    "mnemonicHtml": "<u>槐花</u>散为便血方，侧柏芥穗枳壳襄；<div>为末等分米饮下，宽肠凉血逐肠风。</div>",
    "mnemonic": "槐花 散为便血方，侧柏芥穗枳壳襄； 为末等分米饮下，宽肠凉血逐肠风。",
    "composition": [
      "槐花"
    ]
  },
  {
    "id": "f_193",
    "name": "咳血方",
    "pinyin": "",
    "code": "374",
    "category": "理血剂",
    "subCategory": "止血",
    "source": "《方剂学》核心名方",
    "efficacy": "肝火犯肺之咳血",
    "indications": [
      "肝火犯肺之咳血"
    ],
    "mnemonicHtml": "咳血方中诃子收，瓜蒌海粉<u>山栀</u>投；<div><u>青黛</u>蜜丸口噙化，肝火犯肺咳血疗。</div>",
    "mnemonic": "咳血方中诃子收，瓜蒌海粉 山栀 投； 青黛 蜜丸口噙化，肝火犯肺咳血疗。",
    "composition": [
      "山栀",
      "青黛"
    ]
  },
  {
    "id": "f_194",
    "name": "黄土汤",
    "pinyin": "",
    "code": "375",
    "category": "理血剂",
    "subCategory": "止血",
    "source": "《方剂学》核心名方",
    "efficacy": "脾阳不足，脾不统血证",
    "indications": [
      "脾阳不足，脾不统血证"
    ],
    "mnemonicHtml": "<u>黄土</u>汤中芩地黄，术附阿胶甘草尝；<div>温阳健脾能摄血，吐衄便崩服之康。</div>",
    "mnemonic": "黄土 汤中芩地黄，术附阿胶甘草尝； 温阳健脾能摄血，吐衄便崩服之康。",
    "composition": [
      "黄土"
    ]
  },
  {
    "id": "f_195",
    "name": "十灰散",
    "pinyin": "",
    "code": "375",
    "category": "理血剂",
    "subCategory": "止血",
    "source": "《方剂学》核心名方",
    "efficacy": "血热妄行之上部出血",
    "indications": [
      "血热妄行之上部出血"
    ],
    "mnemonicHtml": "十灰散用十般灰，柏茅茜荷丹榈煨；<div><u>二蓟</u>栀黄各炒黑，上部出血势能摧。</div>",
    "mnemonic": "十灰散用十般灰，柏茅茜荷丹榈煨； 二蓟 栀黄各炒黑，上部出血势能摧。",
    "composition": [
      "二蓟"
    ]
  },
  {
    "id": "f_196",
    "name": "胶艾汤",
    "pinyin": "",
    "code": "375",
    "category": "理血剂",
    "subCategory": "止血",
    "source": "《方剂学》核心名方",
    "efficacy": "冲任虚损之出血",
    "indications": [
      "冲任虚损之出血"
    ],
    "mnemonicHtml": "<u>胶艾</u>汤中四物先，更加炙草一同煎；<div>调经安胎补止血，冲任虚损崩漏痊。</div>",
    "mnemonic": "胶艾 汤中四物先，更加炙草一同煎； 调经安胎补止血，冲任虚损崩漏痊。",
    "composition": [
      "胶艾"
    ]
  },
  {
    "id": "f_197",
    "name": "消风散",
    "pinyin": "",
    "code": "375",
    "category": "治风剂",
    "subCategory": "疏散外风",
    "source": "《方剂学》核心名方",
    "efficacy": "风疹，湿疹",
    "indications": [
      "风疹，湿疹"
    ],
    "mnemonicHtml": "消风止痒祛风湿，木通苍术苦参知；<div><u>荆防蒡蝉</u>归膏草，生地胡麻水煎之。</div>",
    "mnemonic": "消风止痒祛风湿，木通苍术苦参知； 荆防蒡蝉 归膏草，生地胡麻水煎之。",
    "composition": [
      "荆防蒡蝉"
    ]
  },
  {
    "id": "f_198",
    "name": "牵正散",
    "pinyin": "",
    "code": "375",
    "category": "治风剂",
    "subCategory": "疏散外风",
    "source": "《方剂学》核心名方",
    "efficacy": "风痰阻络之口眼歪斜",
    "indications": [
      "风痰阻络之口眼歪斜"
    ],
    "mnemonicHtml": "牵正散是杨家方，<u>白附</u>全蝎僵蚕襄；<div>服用少量热酒下，口眼㖞斜疗效彰。</div>",
    "mnemonic": "牵正散是杨家方， 白附 全蝎僵蚕襄； 服用少量热酒下，口眼㖞斜疗效彰。",
    "composition": [
      "白附"
    ]
  },
  {
    "id": "f_199",
    "name": "小活络丹",
    "pinyin": "",
    "code": "376",
    "category": "治风剂",
    "subCategory": "疏散外风",
    "source": "《方剂学》核心名方",
    "efficacy": "风寒湿痹",
    "indications": [
      "风寒湿痹"
    ],
    "mnemonicHtml": "小活络丹天南星，<u>二乌</u>乳没加地龙；<div>寒湿痰瘀成痹痛，搜风活血络脉通。</div>",
    "mnemonic": "小活络丹天南星， 二乌 乳没加地龙； 寒湿痰瘀成痹痛，搜风活血络脉通。",
    "composition": [
      "二乌"
    ]
  },
  {
    "id": "f_200",
    "name": "玉真散",
    "pinyin": "",
    "code": "376",
    "category": "治风剂",
    "subCategory": "疏散外风",
    "source": "《方剂学》核心名方",
    "efficacy": "风毒痰阻之破伤风",
    "indications": [
      "风毒痰阻之破伤风"
    ],
    "mnemonicHtml": "玉真散治破伤风，牙关紧急角反弓；<br><div><u>白附星</u>麻羌防芷，外敷内服一方通。</div>",
    "mnemonic": "玉真散治破伤风，牙关紧急角反弓； 白附星 麻羌防芷，外敷内服一方通。",
    "composition": [
      "白附星"
    ]
  },
  {
    "id": "f_201",
    "name": "羚角钩藤汤",
    "pinyin": "",
    "code": "376",
    "category": "治风剂",
    "subCategory": "平熄内风",
    "source": "《方剂学》核心名方",
    "efficacy": "肝热生风证",
    "indications": [
      "肝热生风证"
    ],
    "mnemonicHtml": "俞氏<u>羚角钩藤</u>汤，桑叶菊花鲜地黄；<div>芍草茯神川贝茹，肝热生风急煎尝。</div>",
    "mnemonic": "俞氏 羚角钩藤 汤，桑叶菊花鲜地黄； 芍草茯神川贝茹，肝热生风急煎尝。",
    "composition": [
      "羚角钩藤"
    ]
  },
  {
    "id": "f_202",
    "name": "镇肝熄风汤",
    "pinyin": "",
    "code": "376",
    "category": "治风剂",
    "subCategory": "平熄内风",
    "source": "《方剂学》核心名方",
    "efficacy": "肝阳上亢，气血上逆之类中风",
    "indications": [
      "肝阳上亢，气血上逆之类中风"
    ],
    "mnemonicHtml": "镇肝熄风芍天冬，玄牡茵陈赭<u>膝</u>龙；<div>龟板麦芽甘草楝，肝风气血逆中风，</div><div>眩鸣脑痛烦噫气，歪斜颠仆移苏醒。</div>",
    "mnemonic": "镇肝熄风芍天冬，玄牡茵陈赭 膝 龙； 龟板麦芽甘草楝，肝风气血逆中风， 眩鸣脑痛烦噫气，歪斜颠仆移苏醒。",
    "composition": [
      "膝"
    ]
  },
  {
    "id": "f_203",
    "name": "天麻钩藤饮",
    "pinyin": "",
    "code": "376",
    "category": "治风剂",
    "subCategory": "平熄内风",
    "source": "《方剂学》核心名方",
    "efficacy": "肝阳偏亢，风火上扰证",
    "indications": [
      "肝阳偏亢，风火上扰证"
    ],
    "mnemonicHtml": "<u>天麻</u>息风<u>钩</u>益桑，栀芩清热决潜阳；<div>杜膝活血益肝肾，茯神夜交不滋阴。</div><div><br></div><div>桑寄生</div>",
    "mnemonic": "天麻 息风 钩 益桑，栀芩清热决潜阳； 杜膝活血益肝肾，茯神夜交不滋阴。 桑寄生",
    "composition": [
      "天麻",
      "钩"
    ]
  },
  {
    "id": "f_204",
    "name": "大定风珠",
    "pinyin": "",
    "code": "376",
    "category": "治风剂",
    "subCategory": "平熄内风",
    "source": "《方剂学》核心名方",
    "efficacy": "阴虚风动证",
    "indications": [
      "阴虚风动证"
    ],
    "mnemonicHtml": "大定风珠<u>鸡子黄</u>，<u>胶</u>芍三甲五味襄；<div>麦冬生地麻仁草，滋阴息风是妙方。</div>",
    "mnemonic": "大定风珠 鸡子黄 ， 胶 芍三甲五味襄； 麦冬生地麻仁草，滋阴息风是妙方。",
    "composition": [
      "鸡子黄",
      "胶"
    ]
  },
  {
    "id": "f_205",
    "name": "阿胶鸡子黄汤",
    "pinyin": "",
    "code": "377",
    "category": "治风剂",
    "subCategory": "平熄内风",
    "source": "《方剂学》核心名方",
    "efficacy": "热伤阴血，虚风内动证",
    "indications": [
      "热伤阴血，虚风内动证"
    ],
    "mnemonicHtml": "<u>阿胶鸡子黄</u>汤好，地芍钩藤牡蛎草；<div><div>决明茯神络石藤，阴虚风动此方保。</div></div>",
    "mnemonic": "阿胶鸡子黄 汤好，地芍钩藤牡蛎草； 决明茯神络石藤，阴虚风动此方保。",
    "composition": [
      "阿胶鸡子黄"
    ]
  },
  {
    "id": "f_206",
    "name": "杏苏散",
    "pinyin": "",
    "code": "377",
    "category": "治燥剂",
    "subCategory": "轻宣润燥",
    "source": "《方剂学》核心名方",
    "efficacy": "外感凉燥证",
    "indications": [
      "外感凉燥证"
    ],
    "mnemonicHtml": "杏<u>苏</u>散内夏陈前，枳桔苓草姜枣研；<div>轻宣温润治凉燥，理肺化痰咳自痊。</div>",
    "mnemonic": "杏 苏 散内夏陈前，枳桔苓草姜枣研； 轻宣温润治凉燥，理肺化痰咳自痊。",
    "composition": [
      "苏"
    ]
  },
  {
    "id": "f_207",
    "name": "清燥救肺汤",
    "pinyin": "",
    "code": "377",
    "category": "治燥剂",
    "subCategory": "轻宣润燥",
    "source": "《方剂学》核心名方",
    "efficacy": "温燥伤肺、气阴两伤证",
    "indications": [
      "温燥伤肺",
      "气阴两伤证"
    ],
    "mnemonicHtml": "清燥救肺参草杷，石膏胶杏麦胡麻；<div>经霜收下冬<u>桑叶</u>，清燥润肺效堪夸。</div>",
    "mnemonic": "清燥救肺参草杷，石膏胶杏麦胡麻； 经霜收下冬 桑叶 ，清燥润肺效堪夸。",
    "composition": [
      "桑叶"
    ]
  },
  {
    "id": "f_208",
    "name": "桑杏汤",
    "pinyin": "",
    "code": "377",
    "category": "治燥剂",
    "subCategory": "轻宣润燥",
    "source": "《方剂学》核心名方",
    "efficacy": "外感温燥轻证",
    "indications": [
      "外感温燥轻证"
    ],
    "mnemonicHtml": "<u>桑杏</u>汤中象贝宜，沙参栀豉与梨皮；<div>身热咽干咳痰少，辛凉甘润燥能医。</div>",
    "mnemonic": "桑杏 汤中象贝宜，沙参栀豉与梨皮； 身热咽干咳痰少，辛凉甘润燥能医。",
    "composition": [
      "桑杏"
    ]
  },
  {
    "id": "f_209",
    "name": "沙参麦冬汤",
    "pinyin": "",
    "code": "377",
    "category": "治燥剂",
    "subCategory": "轻宣润燥",
    "source": "《方剂学》核心名方",
    "efficacy": "燥伤肺胃阴分证",
    "indications": [
      "燥伤肺胃阴分证"
    ],
    "mnemonicHtml": "沙参麦冬玉竹汤，扁豆花粉甘草桑；<div>清养肺胃生津燥，干咳身热口咽干。</div>",
    "mnemonic": "沙参麦冬玉竹汤，扁豆花粉甘草桑； 清养肺胃生津燥，干咳身热口咽干。",
    "composition": [
      "沙参麦冬汤"
    ]
  },
  {
    "id": "f_210",
    "name": "养阴清肺汤",
    "pinyin": "",
    "code": "377",
    "category": "治燥剂",
    "subCategory": "滋阴润燥",
    "source": "《方剂学》核心名方",
    "efficacy": "虚热白喉证",
    "indications": [
      "虚热白喉证"
    ],
    "mnemonicHtml": "养阴清肺是妙方，玄参草芍冬<u>地黄</u>；<div>薄荷贝母丹皮入，阴虚白喉急煎尝。</div>",
    "mnemonic": "养阴清肺是妙方，玄参草芍冬 地黄 ； 薄荷贝母丹皮入，阴虚白喉急煎尝。",
    "composition": [
      "地黄"
    ]
  },
  {
    "id": "f_211",
    "name": "麦门冬汤",
    "pinyin": "",
    "code": "377",
    "category": "治燥剂",
    "subCategory": "滋阴润燥",
    "source": "《方剂学》核心名方",
    "efficacy": "虚热肺痿，胃阴不足",
    "indications": [
      "虚热肺痿，胃阴不足"
    ],
    "mnemonicHtml": "<u>麦门冬</u>汤用人参，枣草粳米半夏存；<div>肺痿咳逆因虚火，滋养肺胃降逆珍。</div>",
    "mnemonic": "麦门冬 汤用人参，枣草粳米半夏存； 肺痿咳逆因虚火，滋养肺胃降逆珍。",
    "composition": [
      "麦门冬"
    ]
  },
  {
    "id": "f_212",
    "name": "百合固金汤",
    "pinyin": "",
    "code": "377",
    "category": "治燥剂",
    "subCategory": "滋阴润燥",
    "source": "《方剂学》核心名方",
    "efficacy": "肺肾阴虚，虚火上炎证",
    "indications": [
      "肺肾阴虚，虚火上炎证"
    ],
    "mnemonicHtml": "百合固金<u>二地黄</u>，玄参贝母桔甘藏；<div>麦冬芍药当归配，喘咳痰血肺家伤。</div>",
    "mnemonic": "百合固金 二地黄 ，玄参贝母桔甘藏； 麦冬芍药当归配，喘咳痰血肺家伤。",
    "composition": [
      "二地黄"
    ]
  },
  {
    "id": "f_213",
    "name": "增液汤",
    "pinyin": "",
    "code": "378",
    "category": "治燥剂",
    "subCategory": "滋阴润燥",
    "source": "《温病条辨》",
    "efficacy": "阳明温病，津亏肠燥证",
    "indications": [
      "阳明温病，津亏肠燥证"
    ],
    "mnemonicHtml": "增液汤用<u>玄</u>地冬，无水舟停便不通；<div>或合硝黄作泻剂，补泄兼施妙不同。</div>",
    "mnemonic": "增液汤用 玄 地冬，无水舟停便不通； 或合硝黄作泻剂，补泄兼施妙不同。",
    "composition": [
      "玄"
    ]
  },
  {
    "id": "f_214",
    "name": "益胃汤",
    "pinyin": "",
    "code": "378",
    "category": "治燥剂",
    "subCategory": "滋阴润燥",
    "source": "《方剂学》核心名方",
    "efficacy": "胃阴损伤证",
    "indications": [
      "胃阴损伤证"
    ],
    "mnemonicHtml": "益胃汤能养胃阴，冰糖玉竹与沙参；<div><u>麦冬生地</u>同煎服，养阴益胃此方珍。</div>",
    "mnemonic": "益胃汤能养胃阴，冰糖玉竹与沙参； 麦冬生地 同煎服，养阴益胃此方珍。",
    "composition": [
      "麦冬生地"
    ]
  },
  {
    "id": "f_215",
    "name": "玉液汤",
    "pinyin": "",
    "code": "378",
    "category": "治燥剂",
    "subCategory": "滋阴润燥",
    "source": "《方剂学》核心名方",
    "efficacy": "气阴亏虚之消渴",
    "indications": [
      "气阴亏虚之消渴"
    ],
    "mnemonicHtml": "玉液<u>山药芪</u>葛根，花粉知味鸡内金；<div>消渴口干溲多数，补脾固肾益气阴，</div><div>生津润燥止口渴。</div>",
    "mnemonic": "玉液 山药芪 葛根，花粉知味鸡内金； 消渴口干溲多数，补脾固肾益气阴， 生津润燥止口渴。",
    "composition": [
      "山药芪"
    ]
  },
  {
    "id": "f_216",
    "name": "琼玉膏",
    "pinyin": "",
    "code": "378",
    "category": "治燥剂",
    "subCategory": "滋阴润燥",
    "source": "《方剂学》核心名方",
    "efficacy": "肺肾阴亏之肺痨",
    "indications": [
      "肺肾阴亏之肺痨"
    ],
    "mnemonicHtml": "琼玉膏用<u>生地黄</u>，参苓白蜜炼膏尝；<div>干咳咯血肺痨证，滋阴润肺脾气长；</div><div>金水相滋效倍彰。</div>",
    "mnemonic": "琼玉膏用 生地黄 ，参苓白蜜炼膏尝； 干咳咯血肺痨证，滋阴润肺脾气长； 金水相滋效倍彰。",
    "composition": [
      "生地黄"
    ]
  },
  {
    "id": "f_217",
    "name": "平胃散",
    "pinyin": "",
    "code": "378",
    "category": "祛湿剂",
    "subCategory": "燥湿和胃",
    "source": "《太平惠民和剂局方》",
    "efficacy": "湿滞脾胃证",
    "indications": [
      "湿滞脾胃证"
    ],
    "mnemonicHtml": "平胃散用<u>苍术</u>朴，陈皮甘草四般煮；<div>燥湿运脾除胀满，调胃诸方从此扩；</div><div>若和小柴名柴平，煎加姜枣能除疟；</div><div>又不换金正气散，即是此方加夏藿。</div>",
    "mnemonic": "平胃散用 苍术 朴，陈皮甘草四般煮； 燥湿运脾除胀满，调胃诸方从此扩； 若和小柴名柴平，煎加姜枣能除疟； 又不换金正气散，即是此方加夏藿。",
    "composition": [
      "苍术"
    ]
  },
  {
    "id": "f_218",
    "name": "藿香正气散",
    "pinyin": "",
    "code": "378",
    "category": "祛湿剂",
    "subCategory": "燥湿和胃",
    "source": "《太平惠民和剂局方》",
    "efficacy": "外感风寒，内伤湿滞证",
    "indications": [
      "外感风寒，内伤湿滞证"
    ],
    "mnemonicHtml": "<u>藿香</u>正气大腹苏，甘桔陈苓术朴俱；<div>夏曲白芷加姜枣，风寒暑湿岚瘴除。</div>",
    "mnemonic": "藿香 正气大腹苏，甘桔陈苓术朴俱； 夏曲白芷加姜枣，风寒暑湿岚瘴除。",
    "composition": [
      "藿香"
    ]
  },
  {
    "id": "f_219",
    "name": "藿香加减正气散五方",
    "pinyin": "",
    "code": "378",
    "category": "祛湿剂",
    "subCategory": "燥湿和胃",
    "source": "《方剂学》核心名方",
    "efficacy": "解表清里，调和营卫",
    "indications": [
      "详见方歌"
    ],
    "mnemonicHtml": "藿香正气散，加减五方通，<div>共取陈苓朴，因湿各有从，<div>曲麦杏腹茵，其一在走中，</div><div>豆卷通防薏，其二本行经，</div><div>舌黄滑杏仁，其三久热平，</div><div>楂曲合草果，其四气分行，</div><div>大腹苍术谷，其五秽湿甚，</div><div>湿秽遏气机，邪去气正功。</div></div>",
    "mnemonic": "藿香正气散，加减五方通， 共取陈苓朴，因湿各有从， 曲麦杏腹茵，其一在走中， 豆卷通防薏，其二本行经， 舌黄滑杏仁，其三久热平， 楂曲合草果，其四气分行， 大腹苍术谷，其五秽湿甚， 湿秽遏气机，邪去气正功。",
    "composition": [
      "藿香加减正气散五方"
    ]
  },
  {
    "id": "f_220",
    "name": "三仁汤",
    "pinyin": "",
    "code": "378",
    "category": "祛湿剂",
    "subCategory": "清热祛湿",
    "source": "《温病条辨》",
    "efficacy": "湿重于热之湿温病",
    "indications": [
      "湿重于热之湿温病"
    ],
    "mnemonicHtml": "三仁杏蔻薏苡仁，朴夏白通<u>滑</u>竹伦；<div>水用甘澜扬百遍，湿温初起法堪遵。</div>",
    "mnemonic": "三仁杏蔻薏苡仁，朴夏白通 滑 竹伦； 水用甘澜扬百遍，湿温初起法堪遵。",
    "composition": [
      "滑"
    ]
  },
  {
    "id": "f_221",
    "name": "藿朴夏苓汤",
    "pinyin": "",
    "code": "379",
    "category": "祛湿剂",
    "subCategory": "清热祛湿",
    "source": "《方剂学》核心名方",
    "efficacy": "湿温初起",
    "indications": [
      "湿温初起"
    ],
    "mnemonicHtml": "藿朴夏苓杏蔻仁，通草薏仁泽藿梗，<div>猪苓茯苓夏厚朴，化湿解表湿温分。</div>",
    "mnemonic": "藿朴夏苓杏蔻仁，通草薏仁泽藿梗， 猪苓茯苓夏厚朴，化湿解表湿温分。",
    "composition": [
      "藿朴夏苓汤"
    ]
  },
  {
    "id": "f_222",
    "name": "茵陈蒿汤",
    "pinyin": "",
    "code": "379",
    "category": "祛湿剂",
    "subCategory": "清热祛湿",
    "source": "《方剂学》核心名方",
    "efficacy": "湿热黄疸",
    "indications": [
      "湿热黄疸"
    ],
    "mnemonicHtml": "<u>茵陈蒿</u>六治疸黄，阴阳寒热细推详，<div>阳黄黄二栀子入，阴黄附草与干姜，</div><div>亦有不用茵陈者，加草柏皮栀子汤。</div>",
    "mnemonic": "茵陈蒿 六治疸黄，阴阳寒热细推详， 阳黄黄二栀子入，阴黄附草与干姜， 亦有不用茵陈者，加草柏皮栀子汤。",
    "composition": [
      "茵陈蒿"
    ]
  },
  {
    "id": "f_223",
    "name": "二妙散",
    "pinyin": "",
    "code": "379",
    "category": "祛湿剂",
    "subCategory": "清热祛湿",
    "source": "《方剂学》核心名方",
    "efficacy": "湿热下注证",
    "indications": [
      "湿热下注证"
    ],
    "mnemonicHtml": "二妙散中<u>柏</u>苍煎，若云三妙牛膝添；<div>四妙薏仁再加入，湿热痿痹疹脚带。</div>",
    "mnemonic": "二妙散中 柏 苍煎，若云三妙牛膝添； 四妙薏仁再加入，湿热痿痹疹脚带。",
    "composition": [
      "柏"
    ]
  },
  {
    "id": "f_224",
    "name": "连朴饮",
    "pinyin": "",
    "code": "379",
    "category": "祛湿剂",
    "subCategory": "清热祛湿",
    "source": "《方剂学》核心名方",
    "efficacy": "湿热霍乱",
    "indications": [
      "湿热霍乱"
    ],
    "mnemonicHtml": "连朴饮用香豆豉，菖蒲半夏<u>芦</u>山栀；<div>湿热霍乱有烦躁，清热化湿理气宜。</div>",
    "mnemonic": "连朴饮用香豆豉，菖蒲半夏 芦 山栀； 湿热霍乱有烦躁，清热化湿理气宜。",
    "composition": [
      "芦"
    ]
  },
  {
    "id": "f_225",
    "name": "八正散",
    "pinyin": "",
    "code": "379",
    "category": "祛湿剂",
    "subCategory": "清热祛湿",
    "source": "《方剂学》核心名方",
    "efficacy": "湿热淋证",
    "indications": [
      "湿热淋证"
    ],
    "mnemonicHtml": "八正木通与车前，篇蓄大黄<u>滑石</u>研；<div>草梢瞿麦兼栀子，煎加灯草痛淋蠲。</div>",
    "mnemonic": "八正木通与车前，篇蓄大黄 滑石 研； 草梢瞿麦兼栀子，煎加灯草痛淋蠲。",
    "composition": [
      "滑石"
    ]
  },
  {
    "id": "f_226",
    "name": "甘露消毒丹",
    "pinyin": "",
    "code": "379",
    "category": "祛湿剂",
    "subCategory": "清热祛湿",
    "source": "《方剂学》核心名方",
    "efficacy": "湿温时疫之湿热并重证",
    "indications": [
      "湿温时疫之湿热并重证"
    ],
    "mnemonicHtml": "甘露消毒蔻藿香，<u>茵陈滑石</u>木通菖；<div><u>芩</u>翘贝母射干薄，湿温时疫并重方，</div><div>咽痛颐肿泄淋疸。</div>",
    "mnemonic": "甘露消毒蔻藿香， 茵陈滑石 木通菖； 芩 翘贝母射干薄，湿温时疫并重方， 咽痛颐肿泄淋疸。",
    "composition": [
      "茵陈滑石",
      "芩"
    ]
  },
  {
    "id": "f_227",
    "name": "当归拈痛汤",
    "pinyin": "",
    "code": "379",
    "category": "祛湿剂",
    "subCategory": "清热祛湿",
    "source": "《方剂学》核心名方",
    "efficacy": "风湿热痹证",
    "indications": [
      "风湿热痹证"
    ],
    "mnemonicHtml": "当归拈痛<u>羌</u>防升，猪泽黄芩葛<u>茵陈</u>&nbsp;；<div>二术知苦人参草，疮疡湿热身脚痛。</div>",
    "mnemonic": "当归拈痛 羌 防升，猪泽黄芩葛 茵陈 &nbsp;； 二术知苦人参草，疮疡湿热身脚痛。",
    "composition": [
      "羌",
      "茵陈"
    ]
  },
  {
    "id": "f_228",
    "name": "五苓散",
    "pinyin": "",
    "code": "379",
    "category": "祛湿剂",
    "subCategory": "利水渗湿",
    "source": "《伤寒论》",
    "efficacy": "伤寒少阳膀胱蓄水证、水湿内停之水肿、痰饮内停",
    "indications": [
      "伤寒少阳膀胱蓄水证",
      "水湿内停之水肿",
      "痰饮内停"
    ],
    "mnemonicHtml": "五苓散治太阳腑，白术<u>泽泻</u>猪苓茯，<div>膀胱化气添桂枝，利便消暑烦渴清。</div><div>蓄水头痛便不利，渴饮水逆水肿泄，</div><div>霍乱吐泻痰饮停，动悸头眩短气咳。</div>",
    "mnemonic": "五苓散治太阳腑，白术 泽泻 猪苓茯， 膀胱化气添桂枝，利便消暑烦渴清。 蓄水头痛便不利，渴饮水逆水肿泄， 霍乱吐泻痰饮停，动悸头眩短气咳。",
    "composition": [
      "泽泻"
    ]
  },
  {
    "id": "f_229",
    "name": "猪苓汤",
    "pinyin": "",
    "code": "380",
    "category": "祛湿剂",
    "subCategory": "利水渗湿",
    "source": "《方剂学》核心名方",
    "efficacy": "水热互结伤阴证",
    "indications": [
      "水热互结伤阴证"
    ],
    "mnemonicHtml": "<u>猪苓</u>汤用猪茯苓，泽泻阿胶滑石并；<div>利水养阴兼泄热，水热互结阴伤平，</div><div>心烦不寐咳呕利。</div>",
    "mnemonic": "猪苓 汤用猪茯苓，泽泻阿胶滑石并； 利水养阴兼泄热，水热互结阴伤平， 心烦不寐咳呕利。",
    "composition": [
      "猪苓"
    ]
  },
  {
    "id": "f_230",
    "name": "防己黄芪汤",
    "pinyin": "",
    "code": "380",
    "category": "祛湿剂",
    "subCategory": "利水渗湿",
    "source": "《方剂学》核心名方",
    "efficacy": "表虚 &nbsp;气虚之风水或风湿",
    "indications": [
      "表虚 &nbsp",
      "气虚之风水或风湿"
    ],
    "mnemonicHtml": "<u>防己黄芪</u>金匮方，术甘姜枣共煎尝，<div>此治气虚风水湿，身重汗出服之良。</div>",
    "mnemonic": "防己黄芪 金匮方，术甘姜枣共煎尝， 此治气虚风水湿，身重汗出服之良。",
    "composition": [
      "防己黄芪"
    ]
  },
  {
    "id": "f_231",
    "name": "五皮散",
    "pinyin": "",
    "code": "380",
    "category": "祛湿剂",
    "subCategory": "利水渗湿",
    "source": "《方剂学》核心名方",
    "efficacy": "水停气滞之皮水证",
    "indications": [
      "水停气滞之皮水证"
    ],
    "mnemonicHtml": "五皮散用五般皮，陈<u>茯</u>姜桑大腹奇，<div>或用五加易桑白，脾虚皮水气滞奇，</div><div>悉肿腹胀上气喘，小便不利妊娠肿。</div>",
    "mnemonic": "五皮散用五般皮，陈 茯 姜桑大腹奇， 或用五加易桑白，脾虚皮水气滞奇， 悉肿腹胀上气喘，小便不利妊娠肿。",
    "composition": [
      "茯"
    ]
  },
  {
    "id": "f_232",
    "name": "防己茯苓汤",
    "pinyin": "",
    "code": "380",
    "category": "祛湿剂",
    "subCategory": "利水渗湿",
    "source": "《方剂学》核心名方",
    "efficacy": "卫阳不足之皮水",
    "indications": [
      "卫阳不足之皮水"
    ],
    "mnemonicHtml": "防已茯苓芪桂甘，利水消肿气通阳；<div>卫阳不足皮水证，肢肿聂聂莫彷徨。</div>",
    "mnemonic": "防已茯苓芪桂甘，利水消肿气通阳； 卫阳不足皮水证，肢肿聂聂莫彷徨。",
    "composition": [
      "防己茯苓汤"
    ]
  },
  {
    "id": "f_233",
    "name": "真武汤",
    "pinyin": "",
    "code": "380",
    "category": "祛湿剂",
    "subCategory": "温化水湿",
    "source": "《伤寒论》",
    "efficacy": "脾肾阳虚，水饮内停证",
    "indications": [
      "脾肾阳虚，水饮内停证"
    ],
    "mnemonicHtml": "真武汤壮肾中阳，茯苓术芍<u>附</u>生姜；<div>阳虚水饮停腹痛，悸眩瞤惕保安康。</div>",
    "mnemonic": "真武汤壮肾中阳，茯苓术芍 附 生姜； 阳虚水饮停腹痛，悸眩瞤惕保安康。",
    "composition": [
      "附"
    ]
  },
  {
    "id": "f_234",
    "name": "苓桂术甘汤",
    "pinyin": "",
    "code": "380",
    "category": "祛湿剂",
    "subCategory": "温化水湿",
    "source": "《方剂学》核心名方",
    "efficacy": "中阳不足之痰饮病",
    "indications": [
      "中阳不足之痰饮病"
    ],
    "mnemonicHtml": "<u>苓</u>桂术甘是经方，中阳不足痰饮猖；<div>悸眩咳逆胸胁满，温阳化饮功效彰。</div>",
    "mnemonic": "苓 桂术甘是经方，中阳不足痰饮猖； 悸眩咳逆胸胁满，温阳化饮功效彰。",
    "composition": [
      "苓"
    ]
  },
  {
    "id": "f_235",
    "name": "实脾散",
    "pinyin": "",
    "code": "380",
    "category": "祛湿剂",
    "subCategory": "温化水湿",
    "source": "《方剂学》核心名方",
    "efficacy": "脾肾阳虚，水停气滞之阴水",
    "indications": [
      "脾肾阳虚，水停气滞之阴水"
    ],
    "mnemonicHtml": "实脾苓术与木瓜，甘草木香大腹加，<div>草果<u>附姜</u>兼厚朴，虚寒阴水效堪夸。</div><div><br></div><div>炮附子、炮干姜</div>",
    "mnemonic": "实脾苓术与木瓜，甘草木香大腹加， 草果 附姜 兼厚朴，虚寒阴水效堪夸。 炮附子、炮干姜",
    "composition": [
      "附姜"
    ]
  },
  {
    "id": "f_236",
    "name": "附子汤",
    "pinyin": "",
    "code": "380",
    "category": "祛湿剂",
    "subCategory": "祛风胜湿",
    "source": "《方剂学》核心名方",
    "efficacy": "寒湿内侵",
    "indications": [
      "寒湿内侵"
    ],
    "mnemonicHtml": "附子参术芍药苓，温经助阳寒湿停；<div>寒湿内侵身骨痛，恶寒肢冷滑沉微。</div>",
    "mnemonic": "附子参术芍药苓，温经助阳寒湿停； 寒湿内侵身骨痛，恶寒肢冷滑沉微。",
    "composition": [
      "附子汤"
    ]
  },
  {
    "id": "f_237",
    "name": "萆薢分清饮",
    "pinyin": "",
    "code": "380",
    "category": "祛湿剂",
    "subCategory": "祛风胜湿",
    "source": "《方剂学》核心名方",
    "efficacy": "下焦虚寒之膏淋、白浊",
    "indications": [
      "下焦虚寒之膏淋",
      "白浊"
    ],
    "mnemonicHtml": "<u>萆薢</u>分清石菖蒲，萆薢乌药益智俱，<div>或益茯苓盐水服，通心固肾浊精清。</div>",
    "mnemonic": "萆薢 分清石菖蒲，萆薢乌药益智俱， 或益茯苓盐水服，通心固肾浊精清。",
    "composition": [
      "萆薢"
    ]
  },
  {
    "id": "f_238",
    "name": "独活寄生汤",
    "pinyin": "",
    "code": "381",
    "category": "祛湿剂",
    "subCategory": "祛风胜湿",
    "source": "《方剂学》核心名方",
    "efficacy": "肝肾两亏，气血不足之痹证",
    "indications": [
      "肝肾两亏，气血不足之痹证"
    ],
    "mnemonicHtml": "<u>独活</u>寄生艽防辛，芎归地芍桂苓均，<div>杜仲牛膝人参草，风湿肝肾痹气血。</div>",
    "mnemonic": "独活 寄生艽防辛，芎归地芍桂苓均， 杜仲牛膝人参草，风湿肝肾痹气血。",
    "composition": [
      "独活"
    ]
  },
  {
    "id": "f_239",
    "name": "二陈汤",
    "pinyin": "",
    "code": "381",
    "category": "祛痰剂",
    "subCategory": "燥湿化痰",
    "source": "《太平惠民和剂局方》",
    "efficacy": "湿痰证",
    "indications": [
      "湿痰证"
    ],
    "mnemonicHtml": "二陈汤用<u>半夏</u>橘，苓草姜梅一并存，<div>燥湿化痰兼利气，湿痰为患此方珍。</div><div>风痰竹沥角南白，寒痰干姜火膏黛，</div><div>燥痰杏蒌湿苍白，气痰枳壳香附外，</div><div>山楂麦芽神曲食，老痰枳实硝海石；</div><div>胁痰白芥竹沥四。</div>",
    "mnemonic": "二陈汤用 半夏 橘，苓草姜梅一并存， 燥湿化痰兼利气，湿痰为患此方珍。 风痰竹沥角南白，寒痰干姜火膏黛， 燥痰杏蒌湿苍白，气痰枳壳香附外， 山楂麦芽神曲食，老痰枳实硝海石； 胁痰白芥竹沥四。",
    "composition": [
      "半夏"
    ]
  },
  {
    "id": "f_240",
    "name": "温胆汤",
    "pinyin": "",
    "code": "381",
    "category": "祛痰剂",
    "subCategory": "燥湿化痰",
    "source": "《方剂学》核心名方",
    "efficacy": "胆胃不和，痰热内扰证",
    "indications": [
      "胆胃不和，痰热内扰证"
    ],
    "mnemonicHtml": "温胆夏茹枳实陈，佐以茯草姜枣煮，<div>理气化痰利胆胃，胆郁痰扰悸呕痫。</div>",
    "mnemonic": "温胆夏茹枳实陈，佐以茯草姜枣煮， 理气化痰利胆胃，胆郁痰扰悸呕痫。",
    "composition": [
      "温胆汤"
    ]
  },
  {
    "id": "f_241",
    "name": "小半夏汤",
    "pinyin": "",
    "code": "381",
    "category": "祛痰剂",
    "subCategory": "燥湿化痰",
    "source": "《方剂学》核心名方",
    "efficacy": "痰饮呕吐",
    "indications": [
      "痰饮呕吐"
    ],
    "mnemonicHtml": "小<u>半夏</u>汤有生姜，化痰降逆基础方，<div>主治痰饮呕吐证，若加茯苓效力彰。</div>",
    "mnemonic": "小 半夏 汤有生姜，化痰降逆基础方， 主治痰饮呕吐证，若加茯苓效力彰。",
    "composition": [
      "半夏"
    ]
  },
  {
    "id": "f_242",
    "name": "茯苓丸",
    "pinyin": "",
    "code": "381",
    "category": "祛痰剂",
    "subCategory": "燥湿化痰",
    "source": "《方剂学》核心名方",
    "efficacy": "痰伏中脘，流注经络证",
    "indications": [
      "痰伏中脘，流注经络证"
    ],
    "mnemonicHtml": "指迷茯苓君<u>半夏</u>，风硝枳壳姜汤下，<div>中脘停痰肩臂痛，气行痰消痛自罢。</div>",
    "mnemonic": "指迷茯苓君 半夏 ，风硝枳壳姜汤下， 中脘停痰肩臂痛，气行痰消痛自罢。",
    "composition": [
      "半夏"
    ]
  },
  {
    "id": "f_243",
    "name": "涤痰汤",
    "pinyin": "",
    "code": "381",
    "category": "祛痰剂",
    "subCategory": "燥湿化痰",
    "source": "《方剂学》核心名方",
    "efficacy": "中风痰迷心窍证",
    "indications": [
      "中风痰迷心窍证"
    ],
    "mnemonicHtml": "涤痰南星夏橘红，枳实苓茹菖蒲同，<div>人参甘草生姜服，涤痰开窍痰中风</div>",
    "mnemonic": "涤痰南星夏橘红，枳实苓茹菖蒲同， 人参甘草生姜服，涤痰开窍痰中风",
    "composition": [
      "涤痰汤"
    ]
  },
  {
    "id": "f_244",
    "name": "导痰汤",
    "pinyin": "",
    "code": "381",
    "category": "祛痰剂",
    "subCategory": "燥湿化痰",
    "source": "《方剂学》核心名方",
    "efficacy": "痰厥证",
    "indications": [
      "痰厥证"
    ],
    "mnemonicHtml": "导痰南星夏橘红，枳实赤茯生姜用，<div>燥湿祛痰行气郁，痰厥晕痞胀头痛。</div>",
    "mnemonic": "导痰南星夏橘红，枳实赤茯生姜用， 燥湿祛痰行气郁，痰厥晕痞胀头痛。",
    "composition": [
      "导痰汤"
    ]
  },
  {
    "id": "f_245",
    "name": "清气化痰丸",
    "pinyin": "",
    "code": "381",
    "category": "祛痰剂",
    "subCategory": "清热化痰",
    "source": "《方剂学》核心名方",
    "efficacy": "热痰咳嗽证",
    "indications": [
      "热痰咳嗽证"
    ],
    "mnemonicHtml": "清气化痰<u>蒌</u>胆星，夏芩杏陈枳实投，<div>茯苓姜汁糊丸服，专治肺热咳痰稠。</div>",
    "mnemonic": "清气化痰 蒌 胆星，夏芩杏陈枳实投， 茯苓姜汁糊丸服，专治肺热咳痰稠。",
    "composition": [
      "蒌"
    ]
  },
  {
    "id": "f_246",
    "name": "小陷胸汤",
    "pinyin": "",
    "code": "381",
    "category": "泻下剂",
    "subCategory": "寒下",
    "source": "《方剂学》核心名方",
    "efficacy": "痰热互结证",
    "indications": [
      "痰热互结证"
    ],
    "mnemonicHtml": "小陷胸汤连夏<u>蒌</u>，宽胸散结涤痰优，<div>痰热内结痞满痛，苔黄脉滑此方求。</div>",
    "mnemonic": "小陷胸汤连夏 蒌 ，宽胸散结涤痰优， 痰热内结痞满痛，苔黄脉滑此方求。",
    "composition": [
      "蒌"
    ]
  },
  {
    "id": "f_247",
    "name": "滚痰丸",
    "pinyin": "",
    "code": "382",
    "category": "祛痰剂",
    "subCategory": "清热化痰",
    "source": "《方剂学》核心名方",
    "efficacy": "实热老痰证",
    "indications": [
      "实热老痰证"
    ],
    "mnemonicHtml": "滚痰丸是逐痰方，<u>礞石</u>黄芩及大黄，<div>少佐沉香为引导，实热顽痰一扫光。</div>",
    "mnemonic": "滚痰丸是逐痰方， 礞石 黄芩及大黄， 少佐沉香为引导，实热顽痰一扫光。",
    "composition": [
      "礞石"
    ]
  },
  {
    "id": "f_248",
    "name": "贝母瓜蒌散",
    "pinyin": "",
    "code": "382",
    "category": "祛痰剂",
    "subCategory": "润燥化痰",
    "source": "《方剂学》核心名方",
    "efficacy": "燥痰证",
    "indications": [
      "燥痰证"
    ],
    "mnemonicHtml": "<u>贝母</u>瓜蒌天花粉，橘红茯苓加桔梗；<div>肺燥有痰咳难出，润肺化痰此方珍；</div><div>心悟少苓桔梗粉，主治痰火类中风。</div>",
    "mnemonic": "贝母 瓜蒌天花粉，橘红茯苓加桔梗； 肺燥有痰咳难出，润肺化痰此方珍； 心悟少苓桔梗粉，主治痰火类中风。",
    "composition": [
      "贝母"
    ]
  },
  {
    "id": "f_249",
    "name": "三子养亲汤",
    "pinyin": "",
    "code": "382",
    "category": "祛痰剂",
    "subCategory": "温化寒痰",
    "source": "《方剂学》核心名方",
    "efficacy": "寒痰夹食证",
    "indications": [
      "寒痰夹食证"
    ],
    "mnemonicHtml": "三子养亲祛痰方，芥苏莱菔共煎汤，<div>大便实硬加蜂蜜，冬寒更可加生姜。</div>",
    "mnemonic": "三子养亲祛痰方，芥苏莱菔共煎汤， 大便实硬加蜂蜜，冬寒更可加生姜。",
    "composition": [
      "三子养亲汤"
    ]
  },
  {
    "id": "f_250",
    "name": "苓甘五味姜辛汤",
    "pinyin": "",
    "code": "382",
    "category": "祛痰剂",
    "subCategory": "温化寒痰",
    "source": "《方剂学》核心名方",
    "efficacy": "寒饮咳嗽",
    "indications": [
      "寒饮咳嗽"
    ],
    "mnemonicHtml": "苓甘五味<u>姜</u>辛汤，温肺化饮常用方，<div>半夏杏仁均可加，寒痰水饮咳嗽康。</div>",
    "mnemonic": "苓甘五味 姜 辛汤，温肺化饮常用方， 半夏杏仁均可加，寒痰水饮咳嗽康。",
    "composition": [
      "姜"
    ]
  },
  {
    "id": "f_251",
    "name": "半夏白术天麻汤",
    "pinyin": "",
    "code": "382",
    "category": "祛痰剂",
    "subCategory": "化痰熄风",
    "source": "《方剂学》核心名方",
    "efficacy": "风痰上扰证",
    "indications": [
      "风痰上扰证"
    ],
    "mnemonicHtml": "<u>半夏</u>白术<u>天麻</u>汤，苓草橘红枣生姜，<div>眩晕头痛风痰盛，化痰息风复正常。</div>",
    "mnemonic": "半夏 白术 天麻 汤，苓草橘红枣生姜， 眩晕头痛风痰盛，化痰息风复正常。",
    "composition": [
      "半夏",
      "天麻"
    ]
  },
  {
    "id": "f_252",
    "name": "定痫丸",
    "pinyin": "",
    "code": "382",
    "category": "祛痰剂",
    "subCategory": "化痰熄风",
    "source": "《方剂学》核心名方",
    "efficacy": "风痰蕴热之痫证",
    "indications": [
      "风痰蕴热之痫证"
    ],
    "mnemonicHtml": "定痫二茯贝天麻，丹麦陈远菖蒲夏，<div>胆星蚕蝎草<u>竹沥</u>，姜汁琥珀与朱砂，</div>\n<div>涤痰息风热定痫，风热痰蕴痫癫狂。</div>",
    "mnemonic": "定痫二茯贝天麻，丹麦陈远菖蒲夏， 胆星蚕蝎草 竹沥 ，姜汁琥珀与朱砂， 涤痰息风热定痫，风热痰蕴痫癫狂。",
    "composition": [
      "竹沥"
    ]
  },
  {
    "id": "f_253",
    "name": "止嗽散",
    "pinyin": "",
    "code": "382",
    "category": "祛痰剂",
    "subCategory": "化痰熄风",
    "source": "《方剂学》核心名方",
    "efficacy": "风痰咳嗽或风邪犯肺之咳嗽",
    "indications": [
      "风痰咳嗽或风邪犯肺之咳嗽"
    ],
    "mnemonicHtml": "止嗽散桔草白前，<u>紫菀</u>荆陈<u>百部</u>研，<div>止咳化痰兼透表，姜汤调服不用煎。</div>",
    "mnemonic": "止嗽散桔草白前， 紫菀 荆陈 百部 研， 止咳化痰兼透表，姜汤调服不用煎。",
    "composition": [
      "紫菀",
      "百部"
    ]
  },
  {
    "id": "f_254",
    "name": "保和丸",
    "pinyin": "",
    "code": "383",
    "category": "消食剂",
    "subCategory": "消食导滞",
    "source": "《方剂学》核心名方",
    "efficacy": "食积证",
    "indications": [
      "食积证"
    ],
    "mnemonicHtml": "保和<u>山楂</u>莱菔曲，夏陈茯苓连翘取，<div>炊饼为丸白汤下，消食和胃效堪夸。</div>",
    "mnemonic": "保和 山楂 莱菔曲，夏陈茯苓连翘取， 炊饼为丸白汤下，消食和胃效堪夸。",
    "composition": [
      "山楂"
    ]
  },
  {
    "id": "f_255",
    "name": "木香槟榔丸",
    "pinyin": "",
    "code": "383",
    "category": "消食剂",
    "subCategory": "消食导滞",
    "source": "《方剂学》核心名方",
    "efficacy": "湿热积滞证",
    "indications": [
      "湿热积滞证"
    ],
    "mnemonicHtml": "<u>木香槟榔</u>青陈皮，黄柏黄连莪术齐，<div>大黄牵牛加香附，泻痢后重热滞宜。</div>",
    "mnemonic": "木香槟榔 青陈皮，黄柏黄连莪术齐， 大黄牵牛加香附，泻痢后重热滞宜。",
    "composition": [
      "木香槟榔"
    ]
  },
  {
    "id": "f_256",
    "name": "枳实导滞丸",
    "pinyin": "",
    "code": "383",
    "category": "消食剂",
    "subCategory": "消食导滞",
    "source": "《方剂学》核心名方",
    "efficacy": "湿热食积证",
    "indications": [
      "湿热食积证"
    ],
    "mnemonicHtml": "枳实导滞用<u>大黄</u>，芩连曲术茯苓襄；<div>泽泻蒸饼糊丸服，通因通用湿滞良。</div>",
    "mnemonic": "枳实导滞用 大黄 ，芩连曲术茯苓襄； 泽泻蒸饼糊丸服，通因通用湿滞良。",
    "composition": [
      "大黄"
    ]
  },
  {
    "id": "f_257",
    "name": "枳术丸、枳术汤",
    "pinyin": "",
    "code": "383",
    "category": "消食剂",
    "subCategory": "消食导滞",
    "source": "《方剂学》核心名方",
    "efficacy": "气滞水停",
    "indications": [
      "气滞水停"
    ],
    "mnemonicHtml": "枳术汤煮不需荷，枳实二倍<u>白术</u>耳；<div>术丸术二枳实一，荷裹烧饭能健脾。</div>",
    "mnemonic": "枳术汤煮不需荷，枳实二倍 白术 耳； 术丸术二枳实一，荷裹烧饭能健脾。",
    "composition": [
      "白术"
    ]
  },
  {
    "id": "f_258",
    "name": "健脾丸",
    "pinyin": "",
    "code": "383",
    "category": "消食剂",
    "subCategory": "消食导滞",
    "source": "《方剂学》核心名方",
    "efficacy": "脾胃虚弱，食积内停证",
    "indications": [
      "脾胃虚弱，食积内停证"
    ],
    "mnemonicHtml": "健脾参<u>术苓</u>草陈，肉蔻香连合砂仁；<div>楂肉山药曲麦炒，消补兼施泻积停。</div>",
    "mnemonic": "健脾参 术苓 草陈，肉蔻香连合砂仁； 楂肉山药曲麦炒，消补兼施泻积停。",
    "composition": [
      "术苓"
    ]
  },
  {
    "id": "f_259",
    "name": "葛花解酲汤",
    "pinyin": "",
    "code": "383",
    "category": "消食剂",
    "subCategory": "消食导滞",
    "source": "《方剂学》核心名方",
    "efficacy": "酒积伤脾证",
    "indications": [
      "酒积伤脾证"
    ],
    "mnemonicHtml": "<u>葛花</u>解酲泽二苓，砂蔻青陈木香并；<div>神曲干姜兼参术，温脾利湿酒伤珍。</div><div><br></div><div>猪苓、茯苓</div>",
    "mnemonic": "葛花 解酲泽二苓，砂蔻青陈木香并； 神曲干姜兼参术，温脾利湿酒伤珍。 猪苓、茯苓",
    "composition": [
      "葛花"
    ]
  },
  {
    "id": "f_260",
    "name": "鳖甲煎丸",
    "pinyin": "",
    "code": "383",
    "category": "治痈疡剂",
    "subCategory": "散结消痈",
    "source": "《方剂学》核心名方",
    "efficacy": "疟母以及各种癥积",
    "indications": [
      "疟母以及各种癥积"
    ],
    "mnemonicHtml": "鳖甲煎丸疟母方，䗪虫鼠妇及蜣螂，<div>蜂房石韦人参射，桂朴紫葳丹芍姜，<div>瞿麦柴芩胶半夏，桃仁葶苈和硝黄，</div><div>疟缠日久胁下硬，癥消气血湿痰康。</div></div>",
    "mnemonic": "鳖甲煎丸疟母方，䗪虫鼠妇及蜣螂， 蜂房石韦人参射，桂朴紫葳丹芍姜， 瞿麦柴芩胶半夏，桃仁葶苈和硝黄， 疟缠日久胁下硬，癥消气血湿痰康。",
    "composition": [
      "鳖甲煎丸"
    ]
  },
  {
    "id": "f_261",
    "name": "海藻玉壶汤",
    "pinyin": "",
    "code": "383",
    "category": "治痈疡剂",
    "subCategory": "散结消痈",
    "source": "《方剂学》核心名方",
    "efficacy": "气滞痰凝之瘿瘤初起",
    "indications": [
      "气滞痰凝之瘿瘤初起"
    ],
    "mnemonicHtml": "<u>海藻</u>玉壶<u>带昆布</u>，青陈归芎夏贝母，<div>连翘独活甘草入，化痰散结瘿瘤除。</div>",
    "mnemonic": "海藻 玉壶 带昆布 ，青陈归芎夏贝母， 连翘独活甘草入，化痰散结瘿瘤除。",
    "composition": [
      "海藻",
      "带昆布"
    ]
  },
  {
    "id": "f_262",
    "name": "消瘰丸",
    "pinyin": "",
    "code": "384",
    "category": "治痈疡剂",
    "subCategory": "散结消痈",
    "source": "《方剂学》核心名方",
    "efficacy": "瘰疬、痰核、瘿瘤",
    "indications": [
      "瘰疬",
      "痰核",
      "瘿瘤"
    ],
    "mnemonicHtml": "消瘰牡蛎<u>贝</u>玄参，清热化痰并滋阴，<div>肝肾素亏痰火结，瘰疬痰核瘿瘤除。</div>",
    "mnemonic": "消瘰牡蛎 贝 玄参，清热化痰并滋阴， 肝肾素亏痰火结，瘰疬痰核瘿瘤除。",
    "composition": [
      "贝"
    ]
  },
  {
    "id": "f_263",
    "name": "乌梅丸",
    "pinyin": "",
    "code": "384",
    "category": "驱虫剂",
    "subCategory": "驱虫",
    "source": "《方剂学》核心名方",
    "efficacy": "寒热错杂，蛔虫上扰之蛔厥证",
    "indications": [
      "寒热错杂，蛔虫上扰之蛔厥证"
    ],
    "mnemonicHtml": "<u>乌梅</u>丸用细辛桂，黄连黄柏及当归，<div>人参附子椒姜继，温脏寓清在安蛔。</div><div><br></div><div>桂枝 干姜</div>",
    "mnemonic": "乌梅 丸用细辛桂，黄连黄柏及当归， 人参附子椒姜继，温脏寓清在安蛔。 桂枝 干姜",
    "composition": [
      "乌梅"
    ]
  },
  {
    "id": "f_264",
    "name": "肥儿丸",
    "pinyin": "",
    "code": "384",
    "category": "驱虫剂",
    "subCategory": "驱虫",
    "source": "《方剂学》核心名方",
    "efficacy": "小儿虫积，虫积脾虚内热证",
    "indications": [
      "小儿虫积，虫积脾虚内热证"
    ],
    "mnemonicHtml": "肥儿丸内用<u>使君</u>，豆蔻香连曲麦槟，<div>猪胆为丸热水下，虫疳食积一扫清。</div><div><br></div><div>木香</div>",
    "mnemonic": "肥儿丸内用 使君 ，豆蔻香连曲麦槟， 猪胆为丸热水下，虫疳食积一扫清。 木香",
    "composition": [
      "使君"
    ]
  },
  {
    "id": "f_265",
    "name": "化虫丸",
    "pinyin": "",
    "code": "384",
    "category": "驱虫剂",
    "subCategory": "驱虫",
    "source": "《方剂学》核心名方",
    "efficacy": "肠道虫积证",
    "indications": [
      "肠道虫积证"
    ],
    "mnemonicHtml": "化虫丸中用胡粉，<u>鹤虱</u>槟椰苦楝根，<div>少加枯矾面糊丸，专治虫病未虚人。</div>",
    "mnemonic": "化虫丸中用胡粉， 鹤虱 槟椰苦楝根， 少加枯矾面糊丸，专治虫病未虚人。",
    "composition": [
      "鹤虱"
    ]
  },
  {
    "id": "f_266",
    "name": "布袋丸",
    "pinyin": "",
    "code": "384",
    "category": "驱虫剂",
    "subCategory": "驱虫",
    "source": "《方剂学》核心名方",
    "efficacy": "脾虚虫疳",
    "indications": [
      "脾虚虫疳"
    ],
    "mnemonicHtml": "布袋丸内有四君，芜荑芦荟共调匀，<div>夜明砂与使君子，消疳去虫法可循。</div>",
    "mnemonic": "布袋丸内有四君，芜荑芦荟共调匀， 夜明砂与使君子，消疳去虫法可循。",
    "composition": [
      "布袋丸"
    ]
  },
  {
    "id": "f_267",
    "name": "伐木丸",
    "pinyin": "",
    "code": "384",
    "category": "驱虫剂",
    "subCategory": "驱虫",
    "source": "《方剂学》核心名方",
    "efficacy": "黄肿病",
    "indications": [
      "黄肿病"
    ],
    "mnemonicHtml": "伐木丸中有绿矾，<u>苍术</u>酒曲醋糊丸，<div>泻肝益脾消黄肿，钩虫为患效可观。</div>",
    "mnemonic": "伐木丸中有绿矾， 苍术 酒曲醋糊丸， 泻肝益脾消黄肿，钩虫为患效可观。",
    "composition": [
      "苍术"
    ]
  },
  {
    "id": "f_268",
    "name": "犀黄丸",
    "pinyin": "",
    "code": "384",
    "category": "治痈疡剂",
    "subCategory": "散结消痈",
    "source": "《方剂学》核心名方",
    "efficacy": "火郁痰凝，血瘀气滞",
    "indications": [
      "火郁痰凝，血瘀气滞"
    ],
    "mnemonicHtml": "犀黄丸内用麝香，乳香没药共牛黄，<div>岩疬痃痰流肿痈，解毒消痈瘀结散。</div>",
    "mnemonic": "犀黄丸内用麝香，乳香没药共牛黄， 岩疬痃痰流肿痈，解毒消痈瘀结散。",
    "composition": [
      "犀黄丸"
    ]
  },
  {
    "id": "f_269",
    "name": "透脓散",
    "pinyin": "",
    "code": "384",
    "category": "治痈疡剂",
    "subCategory": "散结消痈",
    "source": "《方剂学》核心名方",
    "efficacy": "气血不足，痈疮脓成难溃证",
    "indications": [
      "气血不足，痈疮脓成难溃证"
    ],
    "mnemonicHtml": "透脓散治毒成脓，<u>芪</u>归山甲皂刺芎，<div>程氏又加银蒡芷，更能速奏溃破功。</div>",
    "mnemonic": "透脓散治毒成脓， 芪 归山甲皂刺芎， 程氏又加银蒡芷，更能速奏溃破功。",
    "composition": [
      "芪"
    ]
  },
  {
    "id": "f_270",
    "name": "小金丹",
    "pinyin": "",
    "code": "384",
    "category": "治痈疡剂",
    "subCategory": "散结消痈",
    "source": "《方剂学》核心名方",
    "efficacy": "寒湿痰瘀，阻滞凝结证",
    "indications": [
      "寒湿痰瘀，阻滞凝结证"
    ],
    "mnemonicHtml": "寒湿痰瘀小金丹，<u>鳖</u>麝乌龙灵乳储，<div>墨炭胶香归没药，岩疬痃痰流贴鱔。</div>",
    "mnemonic": "寒湿痰瘀小金丹， 鳖 麝乌龙灵乳储， 墨炭胶香归没药，岩疬痃痰流贴鱔。",
    "composition": [
      "鳖"
    ]
  },
  {
    "id": "f_271",
    "name": "薏苡附子败酱散",
    "pinyin": "",
    "code": "384",
    "category": "治痈疡剂",
    "subCategory": "散结消痈",
    "source": "《金匮要略》",
    "efficacy": "肠痈已成脓",
    "indications": [
      "肠痈已成脓"
    ],
    "mnemonicHtml": "薏十附二败五散，排脓消痈温阳散；<div>肠痈成脓身无热，甲错腹急按濡软。</div>",
    "mnemonic": "薏十附二败五散，排脓消痈温阳散； 肠痈成脓身无热，甲错腹急按濡软。",
    "composition": [
      "薏苡附子败酱散"
    ]
  }
];
