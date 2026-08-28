import { AcupointItem } from '../types';

export const ACUPOINT_CATEGORIES_LIST: string[] = [
  '手太阴肺经',
  '手阳明大肠经',
  '足阳明胃经',
  '足太阴脾经',
  '手少阴心经',
  '手太阳小肠经',
  '足太阳膀胱经',
  '足少阴肾经',
  '手厥阴心包经',
  '手少阳三焦经',
  '足少阳胆经',
  '足厥阴肝经',
  '督脉',
  '任脉',
  '经外奇穴',
];

export const ACUPOINTS_DATA: AcupointItem[] = [
  {
    "id": "acu-zhongfu",
    "name": "中府",
    "pinyin": "zhōng fǔ",
    "code": "LU1",
    "category": "手太阴肺经",
    "subCategory": "胸前区",
    "locationHtml": "在胸部，横平<b>第 1 肋间隙</b>，锁骨下窝外侧，前正中线旁开 <b>6 寸</b>。",
    "locationText": "在胸部，横平第 1 肋间隙，锁骨下窝外侧，前正中线旁开 6 寸。",
    "mnemonic": "肺募中府云门下，平第一肋旁开六",
    "specialProperties": "肺之募穴；手足太阴经交会穴",
    "indications": [
      "咳嗽、气喘、胸痛、胸闷",
      "肩背痛、胸肌酸痛"
    ]
  },
  {
    "id": "acu-yunmen",
    "name": "云门",
    "pinyin": "yún mén",
    "code": "LU2",
    "category": "手太阴肺经",
    "subCategory": "胸前区",
    "locationHtml": "在胸部，<b>锁骨下窝凹陷中</b>，肩胛骨喙突内侧，前正中线旁开 <b>6 寸</b>。",
    "locationText": "在胸部，锁骨下窝凹陷中，肩胛骨喙突内侧，前正中线旁开 6 寸。",
    "mnemonic": "云门锁骨下窝陷，巨骨下方旁开六",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、胸痛",
      "肩臂痛、肩不举"
    ]
  },
  {
    "id": "acu-tianfu",
    "name": "天府",
    "pinyin": "tiān fǔ",
    "code": "LU3",
    "category": "手太阴肺经",
    "subCategory": "臂前区",
    "locationHtml": "在臂前区，<b>腋前纹头下 3 寸</b>，肱二头肌桡侧缘处。",
    "locationText": "在臂前区，腋前纹头下 3 寸，肱二头肌桡侧缘处。",
    "mnemonic": "天府腋下三寸求，肱二头肌桡侧收",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、鼻衄",
      "瘿气、上臂内侧痛"
    ]
  },
  {
    "id": "acu-xiabai",
    "name": "侠白",
    "pinyin": "xiá bái",
    "code": "LU4",
    "category": "手太阴肺经",
    "subCategory": "臂前区",
    "locationHtml": "在臂前区，<b>腋前纹头下 4 寸</b>，或肘横纹上 5 寸，肱二头肌桡侧缘处。",
    "locationText": "在臂前区，腋前纹头下 4 寸，或肘横纹上 5 寸，肱二头肌桡侧缘处。",
    "mnemonic": "天府下一寸侠白，肱二肌旁止咳逆",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、干呕",
      "胸胁满痛、上臂内侧痛"
    ]
  },
  {
    "id": "acu-chize",
    "name": "尺泽",
    "pinyin": "chǐ zé",
    "code": "LU5",
    "category": "手太阴肺经",
    "subCategory": "肘区",
    "locationHtml": "在肘区，<b>肘横纹上</b>，肱二头肌腱<b>桡侧缘凹陷中</b>。",
    "locationText": "在肘区，肘横纹上，肱二头肌腱桡侧缘凹陷中。",
    "mnemonic": "尺泽肘横纹肌腱桡，合水清肺泻热火",
    "specialProperties": "合穴（属水）",
    "indications": [
      "咳嗽、气喘、咯血、潮热、咽喉肿痛",
      "小儿惊风、吐泻",
      "肘臂挛痛"
    ]
  },
  {
    "id": "acu-kongzui",
    "name": "孔最",
    "pinyin": "kǒng zuì",
    "code": "LU6",
    "category": "手太阴肺经",
    "subCategory": "前臂前区",
    "locationHtml": "在前臂前区，<b>腕掌侧远端横纹上 7 寸</b>，尺泽与太渊连线上。",
    "locationText": "在前臂前区，腕掌侧远端横纹上 7 寸，尺泽与太渊连线上。",
    "mnemonic": "孔最腕上七寸寻，郄穴止血急痛安",
    "specialProperties": "郄穴",
    "indications": [
      "咯血、咳嗽、气喘、咽喉肿痛",
      "热病无汗、头痛",
      "肘臂挛痛"
    ]
  },
  {
    "id": "acu-lieque",
    "name": "列缺",
    "pinyin": "liè quē",
    "code": "LU7",
    "category": "手太阴肺经",
    "subCategory": "前臂前区",
    "locationHtml": "在前臂，<b>腕掌侧远端横纹上 1.5 寸</b>，拇短伸肌腱和拇长展肌腱之间。<br>简便取穴法：<b>两手虎口自然交叉</b>，一手食指按在另一手桡骨茎突上，指尖下凹陷中是穴。",
    "locationText": "在前臂，腕掌侧远端横纹上 1.5 寸，拇短伸肌腱和拇长展肌腱之间。简便取穴法：两手虎口自然交叉，一手食指按在另一手桡骨茎突上，指尖下凹陷中是穴。",
    "mnemonic": "头项寻列缺，虎口交叉食指尖",
    "specialProperties": "络穴；八脉交会穴（通任脉）；四总穴",
    "indications": [
      "偏正头痛、项强拘急、齿痛、咽喉肿痛、口眼㖞斜",
      "咳嗽、气喘",
      "小便热痛、尿血"
    ]
  },
  {
    "id": "acu-jingqu",
    "name": "经渠",
    "pinyin": "jīng qú",
    "code": "LU8",
    "category": "手太阴肺经",
    "subCategory": "前臂前区",
    "locationHtml": "在前臂前区，<b>腕掌侧远端横纹上 1 寸</b>，桡骨茎突与桡动脉之间。",
    "locationText": "在前臂前区，腕掌侧远端横纹上 1 寸，桡骨茎突与桡动脉之间。",
    "mnemonic": "经渠寸口脉动旁，经金宣肺宁咳喘",
    "specialProperties": "经穴（属金）",
    "indications": [
      "咳嗽、气喘、胸痛、咽喉肿痛",
      "手腕痛、掌中热"
    ]
  },
  {
    "id": "acu-taiyuan",
    "name": "太渊",
    "pinyin": "tài yuān",
    "code": "LU9",
    "category": "手太阴肺经",
    "subCategory": "腕前区",
    "locationHtml": "在腕前区，<b>桡骨茎突与舟状骨之间</b>，拇长展肌腱尺侧凹陷中，桡动脉搏动处。",
    "locationText": "在腕前区，桡骨茎突与舟状骨之间，拇长展肌腱尺侧凹陷中，桡动脉搏动处。",
    "mnemonic": "太渊掌后横纹头，脉会太渊输原土",
    "specialProperties": "输穴（属土）；原穴；八会穴之脉会",
    "indications": [
      "咳嗽、气喘、咯血、咽痛",
      "无脉症、胸痛、心悸",
      "腕臂痛"
    ]
  },
  {
    "id": "acu-yuji",
    "name": "鱼际",
    "pinyin": "yú jì",
    "code": "LU10",
    "category": "手太阴肺经",
    "subCategory": "手掌区",
    "locationHtml": "在手外侧，<b>第 1 掌骨桡侧中点</b>赤白肉际处。",
    "locationText": "在手外侧，第 1 掌骨桡侧中点赤白肉际处。",
    "mnemonic": "鱼际大指掌骨中，荥火清利肺经咽",
    "specialProperties": "荥穴（属火）",
    "indications": [
      "咽干、咽喉肿痛、失音、咯血、咳嗽",
      "小儿疳积、发热",
      "掌中热"
    ]
  },
  {
    "id": "acu-shaoshang",
    "name": "少商",
    "pinyin": "shào shāng",
    "code": "LU11",
    "category": "手太阴肺经",
    "subCategory": "手指部",
    "locationHtml": "在手指，<b>拇指末节桡侧</b>，指甲根角侧上方 <b>0.1 寸</b>。",
    "locationText": "在手指，拇指末节桡侧，指甲根角侧上方 0.1 寸。",
    "mnemonic": "少商大指桡甲角，井木清肺开窍急",
    "specialProperties": "井穴（属木）",
    "indications": [
      "咽喉肿痛、鼻衄、高热、中风昏迷、癫狂",
      "咳嗽、气喘、指挛痛"
    ]
  },
  {
    "id": "acu-shangyang",
    "name": "商阳",
    "pinyin": "shāng yáng",
    "code": "LI1",
    "category": "手阳明大肠经",
    "subCategory": "手指部",
    "locationHtml": "在手指，<b>食指末节桡侧</b>，指甲根角侧上方 <b>0.1 寸</b>。",
    "locationText": "在手指，食指末节桡侧，指甲根角侧上方 0.1 寸。",
    "mnemonic": "商阳食指桡角端，大肠井金清热急",
    "specialProperties": "井穴（属金）",
    "indications": [
      "咽喉肿痛、齿痛、目赤、热病昏迷、中风",
      "耳鸣、手指麻木"
    ]
  },
  {
    "id": "acu-erjian",
    "name": "二间",
    "pinyin": "èr jiān",
    "code": "LI2",
    "category": "手阳明大肠经",
    "subCategory": "手指部",
    "locationHtml": "在手指，<b>第 2 掌指关节桡侧远端</b>赤白肉际凹陷中。",
    "locationText": "在手指，第 2 掌指关节桡侧远端赤白肉际凹陷中。",
    "mnemonic": "二间食指掌骨前，荥水清泻阳明热",
    "specialProperties": "荥穴（属水）",
    "indications": [
      "齿痛、咽喉肿痛、目赤痛",
      "热病、鼻衄"
    ]
  },
  {
    "id": "acu-sanjian",
    "name": "三间",
    "pinyin": "sān jiān",
    "code": "LI3",
    "category": "手阳明大肠经",
    "subCategory": "手背部",
    "locationHtml": "在手背，<b>第 2 掌指关节桡侧近端</b>赤白肉际凹陷中。",
    "locationText": "在手背，第 2 掌指关节桡侧近端赤白肉际凹陷中。",
    "mnemonic": "三间食指掌骨后，输木通调大肠腑",
    "specialProperties": "输穴（属木）",
    "indications": [
      "咽喉肿痛、齿痛、目痛",
      "腹胀、肠鸣、下利",
      "手背红肿"
    ]
  },
  {
    "id": "acu-hegu",
    "name": "合谷",
    "pinyin": "hé gǔ",
    "code": "LI4",
    "category": "手阳明大肠经",
    "subCategory": "手背部",
    "locationHtml": "在手背，<b>第 1、2 掌骨间</b>，第 2 掌骨桡侧的中点处。<br>简便取穴法：以一手的拇指指间关节横纹，放在另一手拇、食指之间的指蹼缘上，屈指，拇指尖下是穴。",
    "locationText": "在手背，第 1、2 掌骨间，第 2 掌骨桡侧的中点处。简便取穴法：以一手的拇指指间关节横纹，放在另一手拇、食指之间的指蹼缘上，屈指，拇指尖下是穴。",
    "mnemonic": "面口合谷收，一二掌骨中点求",
    "specialProperties": "原穴；四总穴之一",
    "indications": [
      "头痛、目赤肿痛、鼻衄、齿痛、面肿、口眼㖞斜",
      "热病恶风、无汗或多汗",
      "腹痛、便秘、经闭、滞产（孕妇慎针）"
    ]
  },
  {
    "id": "acu-yangxi",
    "name": "阳溪",
    "pinyin": "yáng xī",
    "code": "LI5",
    "category": "手阳明大肠经",
    "subCategory": "腕后区",
    "locationHtml": "在腕后区，<b>腕背侧远端横纹桡侧</b>，拇短伸肌腱与拇长伸肌腱之间的凹陷（鼻烟窝）中。",
    "locationText": "在腕后区，腕背侧远端横纹桡侧，拇短伸肌腱与拇长伸肌腱之间的凹陷（鼻烟窝）中。",
    "mnemonic": "阳溪鼻烟窝中寻，经火祛风清头目",
    "specialProperties": "经穴（属火）",
    "indications": [
      "头痛、目赤、耳鸣、耳聋、齿痛",
      "手腕痛、手臂无力"
    ]
  },
  {
    "id": "acu-pianli",
    "name": "偏历",
    "pinyin": "piān lì",
    "code": "LI6",
    "category": "手阳明大肠经",
    "subCategory": "前臂后区",
    "locationHtml": "在前臂后区，<b>腕背侧远端横纹上 3 寸</b>，阳溪与曲池连线上。",
    "locationText": "在前臂后区，腕背侧远端横纹上 3 寸，阳溪与曲池连线上。",
    "mnemonic": "偏历阳溪上三寸，大肠络穴利水道",
    "specialProperties": "络穴",
    "indications": [
      "水肿、小便不利",
      "耳鸣、耳聋、鼻衄、齿痛",
      "手臂酸痛"
    ]
  },
  {
    "id": "acu-wenliu",
    "name": "温溜",
    "pinyin": "wēn liū",
    "code": "LI7",
    "category": "手阳明大肠经",
    "subCategory": "前臂后区",
    "locationHtml": "在前臂后区，<b>腕背侧远端横纹上 5 寸</b>，阳溪与曲池连线上。",
    "locationText": "在前臂后区，腕背侧远端横纹上 5 寸，阳溪与曲池连线上。",
    "mnemonic": "温溜阳溪上五寸，郄穴温经止剧痛",
    "specialProperties": "郄穴",
    "indications": [
      "急性腹痛、肠鸣",
      "咽喉肿痛、头痛、面肿",
      "疔疮、肩臂酸痛"
    ]
  },
  {
    "id": "acu-xialian",
    "name": "下廉",
    "pinyin": "xià lián",
    "code": "LI8",
    "category": "手阳明大肠经",
    "subCategory": "前臂后区",
    "locationHtml": "在前臂后区，<b>肘横纹下 4 寸</b>，阳溪与曲池连线上。",
    "locationText": "在前臂后区，肘横纹下 4 寸，阳溪与曲池连线上。",
    "mnemonic": "下廉曲池下四寸，清肠利腑调气机",
    "specialProperties": "",
    "indications": [
      "头痛、眩晕、目痛",
      "腹痛、腹胀",
      "肘臂痛、上肢不遂"
    ]
  },
  {
    "id": "acu-shanglian",
    "name": "上廉",
    "pinyin": "shàng lián",
    "code": "LI9",
    "category": "手阳明大肠经",
    "subCategory": "前臂后区",
    "locationHtml": "在前臂后区，<b>肘横纹下 3 寸</b>，阳溪与曲池连线上。",
    "locationText": "在前臂后区，肘横纹下 3 寸，阳溪与曲池连线上。",
    "mnemonic": "上廉曲池下三寸，通经活络止臂痛",
    "specialProperties": "",
    "indications": [
      "头痛、肩臂痛、半身不遂",
      "肠鸣腹痛、泄泻"
    ]
  },
  {
    "id": "acu-shousanli",
    "name": "手三里",
    "pinyin": "shǒu sān lǐ",
    "code": "LI10",
    "category": "手阳明大肠经",
    "subCategory": "前臂后区",
    "locationHtml": "在前臂后区，<b>肘横纹下 2 寸</b>，阳溪与曲池连线上。",
    "locationText": "在前臂后区，肘横纹下 2 寸，阳溪与曲池连线上。",
    "mnemonic": "手三里在曲池下，两寸调肠通经脉",
    "specialProperties": "",
    "indications": [
      "牙痛、面肿、喉痹",
      "手臂麻痛、肘挛不屈",
      "腹痛、腹泻"
    ]
  },
  {
    "id": "acu-quchi",
    "name": "曲池",
    "pinyin": "qū chí",
    "code": "LI11",
    "category": "手阳明大肠经",
    "subCategory": "肘区",
    "locationHtml": "在肘区，<b>尺泽与肱骨外上髁连线中点凹陷中</b>。<br>简便取穴法：屈肘成直角，肘横纹外侧端凹陷处。",
    "locationText": "在肘区，尺泽与肱骨外上髁连线中点凹陷中。简便取穴法：屈肘成直角，肘横纹外侧端凹陷处。",
    "mnemonic": "曲池屈肘横纹头，清热解表降血压",
    "specialProperties": "合穴（属土）",
    "indications": [
      "发热、热病、咽喉肿痛、齿痛、目赤",
      "风疹、湿疹、瘾疹、痤疮",
      "高血压、癫狂",
      "上肢不遂、肘臂痛"
    ]
  },
  {
    "id": "acu-zhouliao",
    "name": "肘髎",
    "pinyin": "zhǒu liáo",
    "code": "LI12",
    "category": "手阳明大肠经",
    "subCategory": "肘区",
    "locationHtml": "在肘区，<b>肱骨外上髁上嵴的前方</b>，屈肘时曲池外上方 1 寸。",
    "locationText": "在肘区，肱骨外上髁上嵴的前方，屈肘时曲池外上方 1 寸。",
    "mnemonic": "肘髎曲池外上一，通经利节舒肘臂",
    "specialProperties": "",
    "indications": [
      "肘臂挛痛、麻木、上肢瘫痪"
    ]
  },
  {
    "id": "acu-shouwuli",
    "name": "手五里",
    "pinyin": "shǒu wǔ lǐ",
    "code": "LI13",
    "category": "手阳明大肠经",
    "subCategory": "臂外侧区",
    "locationHtml": "在臂外侧区，<b>曲池与肩髃连线上，曲池上 3 寸</b>。",
    "locationText": "在臂外侧区，曲池与肩髃连线上，曲池上 3 寸。",
    "mnemonic": "手五里在曲池上，三寸舒筋通络痹",
    "specialProperties": "",
    "indications": [
      "肘臂疼痛、瘰疬、嗜卧"
    ]
  },
  {
    "id": "acu-binao",
    "name": "臂臑",
    "pinyin": "bì nào",
    "code": "LI14",
    "category": "手阳明大肠经",
    "subCategory": "臂外侧区",
    "locationHtml": "在臂外侧区，<b>三角肌止点处</b>，曲池与肩髃连线上，曲池上 <b>7 寸</b>。",
    "locationText": "在臂外侧区，三角肌止点处，曲池与肩髃连线上，曲池上 7 寸。",
    "mnemonic": "臂臑三角肌下端，清热明目通肩臂",
    "specialProperties": "",
    "indications": [
      "肩臂疼痛、颈项强急",
      "瘰疬、目疾、视神经萎缩"
    ]
  },
  {
    "id": "acu-jianyu",
    "name": "肩髃",
    "pinyin": "jiān yú",
    "code": "LI15",
    "category": "手阳明大肠经",
    "subCategory": "肩部",
    "locationHtml": "在肩峰外侧缘前端与肱骨大结节两骨间凹陷中。<br>简便取穴法：<b>上臂外展平举时，肩峰前下方呈现凹陷处</b>。",
    "locationText": "在肩峰外侧缘前端与肱骨大结节两骨间凹陷中。简便取穴法：上臂外展平举时，肩峰前下方呈现凹陷处。",
    "mnemonic": "肩髃肩峰两凹前，通络散风止肩痛",
    "specialProperties": "手阳明与阳跷脉交会穴",
    "indications": [
      "肩臂挛痛、上肢不遂、肩周炎",
      "风疹、瘰疬"
    ]
  },
  {
    "id": "acu-jugu",
    "name": "巨骨",
    "pinyin": "jù gǔ",
    "code": "LI16",
    "category": "手阳明大肠经",
    "subCategory": "肩部",
    "locationHtml": "在肩胛区，<b>锁骨肩峰端与肩胛冈之间的凹陷中</b>。",
    "locationText": "在肩胛区，锁骨肩峰端与肩胛冈之间的凹陷中。",
    "mnemonic": "巨骨锁骨肩胛夹，降气化痰利肩臂",
    "specialProperties": "",
    "indications": [
      "肩臂疼痛、不能抬举",
      "瘰疬、瘿气、咯血"
    ]
  },
  {
    "id": "acu-tianding",
    "name": "天鼎",
    "pinyin": "tiān dǐng",
    "code": "LI17",
    "category": "手阳明大肠经",
    "subCategory": "颈部",
    "locationHtml": "在颈部，<b>横平环状软骨</b>，胸锁乳突肌后缘。",
    "locationText": "在颈部，横平环状软骨，胸锁乳突肌后缘。",
    "mnemonic": "天鼎结喉平环状，胸锁乳突肌后缘",
    "specialProperties": "",
    "indications": [
      "咽喉肿痛、失音、暴喑",
      "瘿气、瘰疬"
    ]
  },
  {
    "id": "acu-futu-li",
    "name": "扶突",
    "pinyin": "fú tū",
    "code": "LI18",
    "category": "手阳明大肠经",
    "subCategory": "颈部",
    "locationHtml": "在颈部，<b>横平喉结</b>，胸锁乳突肌前、后缘之间。",
    "locationText": "在颈部，横平喉结，胸锁乳突肌前、后缘之间。",
    "mnemonic": "扶突平喉胸锁间，利咽开音化痰核",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、咽喉肿痛、暴喑",
      "瘰疬、瘿气、吞咽困难"
    ]
  },
  {
    "id": "acu-kouheliao",
    "name": "口禾髎",
    "pinyin": "kǒu hé liáo",
    "code": "LI19",
    "category": "手阳明大肠经",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>横平人中沟上 1/3 与中 1/3 交点</b>，鼻孔外缘直下。",
    "locationText": "在面部，横平人中沟上 1/3 与中 1/3 交点，鼻孔外缘直下。",
    "mnemonic": "口禾髎在水沟旁，鼻孔外缘通鼻窍",
    "specialProperties": "",
    "indications": [
      "鼻衄、鼻渊、鼻塞",
      "口㖞、口噤不开"
    ]
  },
  {
    "id": "acu-yingxiang",
    "name": "迎香",
    "pinyin": "yíng xiāng",
    "code": "LI20",
    "category": "手阳明大肠经",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>鼻翼外缘中点旁开</b>，鼻唇沟中。",
    "locationText": "在面部，鼻翼外缘中点旁开，鼻唇沟中。",
    "mnemonic": "迎香鼻旁五分寻，通鼻利窍治面瘫",
    "specialProperties": "手足阳明经交会穴",
    "indications": [
      "鼻塞、鼻衄、鼻渊、过敏性鼻炎",
      "口㖞、面痒、胆道蛔虫症"
    ]
  },
  {
    "id": "acu-chengqi",
    "name": "承泣",
    "pinyin": "chéng qì",
    "code": "ST1",
    "category": "足阳明胃经",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>眼球与眶下缘之间</b>，瞳孔直下。",
    "locationText": "在面部，眼球与眶下缘之间，瞳孔直下。",
    "mnemonic": "承泣瞳下眶缘中，明目散风治迎风",
    "specialProperties": "",
    "indications": [
      "目赤肿痛、迎风流泪、夜盲、近视、视神经萎缩",
      "口眼㖞斜、面肌痉挛"
    ]
  },
  {
    "id": "acu-sibai",
    "name": "四白",
    "pinyin": "sì bái",
    "code": "ST2",
    "category": "足阳明胃经",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>眶下孔处</b>，瞳孔直下。",
    "locationText": "在面部，眶下孔处，瞳孔直下。",
    "mnemonic": "四白眶下孔凹中，目疾头痛面瘫功",
    "specialProperties": "",
    "indications": [
      "目赤痛、目翳、近视",
      "口眼㖞斜、面痛、三叉神经痛",
      "头痛、眩晕"
    ]
  },
  {
    "id": "acu-juliao-st",
    "name": "巨髎",
    "pinyin": "jù liáo",
    "code": "ST3",
    "category": "足阳明胃经",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>瞳孔直下</b>，横平鼻翼下缘。",
    "locationText": "在面部，瞳孔直下，横平鼻翼下缘。",
    "mnemonic": "巨髎瞳下平鼻翼，通鼻明目止面痛",
    "specialProperties": "",
    "indications": [
      "口眼㖞斜、眼睑瞤动、鼻衄、齿痛",
      "面肿、三叉神经痛"
    ]
  },
  {
    "id": "acu-dicang",
    "name": "地仓",
    "pinyin": "dì cāng",
    "code": "ST4",
    "category": "足阳明胃经",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>口角旁开 0.4 寸</b>。",
    "locationText": "在面部，口角旁开 0.4 寸。",
    "mnemonic": "地仓口角四分边，口㖞流涎止面瘫",
    "specialProperties": "",
    "indications": [
      "口角㖞斜、流涎、齿痛",
      "三叉神经痛、面肌痉挛"
    ]
  },
  {
    "id": "acu-daying",
    "name": "大迎",
    "pinyin": "dà yíng",
    "code": "ST5",
    "category": "足阳明胃经",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>下颌角前方</b>，咬肌附着部前缘凹陷中，面动脉搏动处。",
    "locationText": "在面部，下颌角前方，咬肌附着部前缘凹陷中，面动脉搏动处。",
    "mnemonic": "大迎下颌角前缘，面动搏动安齿痛",
    "specialProperties": "",
    "indications": [
      "口眼㖞斜、口噤不开、齿痛",
      "面肿、颊肿"
    ]
  },
  {
    "id": "acu-jiache",
    "name": "颊车",
    "pinyin": "jiá chē",
    "code": "ST6",
    "category": "足阳明胃经",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>下颌角前上方一横指</b>，咬牙时咬肌隆起最高点处。",
    "locationText": "在面部，下颌角前上方一横指，咬牙时咬肌隆起最高点处。",
    "mnemonic": "颊车下颌角前上，咬肌隆起止牙疼",
    "specialProperties": "",
    "indications": [
      "齿痛、牙关紧闭、口眼㖞斜",
      "面颊肿痛、腮腺炎"
    ]
  },
  {
    "id": "acu-xiaguan",
    "name": "下关",
    "pinyin": "xià guān",
    "code": "ST7",
    "category": "足阳明胃经",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>颧弓下缘与下颌切迹之间的凹陷中</b>。合口有孔，张口即闭。",
    "locationText": "在面部，颧弓下缘与下颌切迹之间的凹陷中。合口有孔，张口即闭。",
    "mnemonic": "下关颧弓下颌凹，耳鸣齿痛面瘫消",
    "specialProperties": "",
    "indications": [
      "牙关紧闭、耳鸣、耳聋、聤耳",
      "齿痛、口眼㖞斜、三叉神经痛"
    ]
  },
  {
    "id": "acu-touwei",
    "name": "头维",
    "pinyin": "tóu wéi",
    "code": "ST8",
    "category": "足阳明胃经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>额角发际直上 0.5 寸</b>，头正中线旁开 4.5 寸。",
    "locationText": "在头部，额角发际直上 0.5 寸，头正中线旁开 4.5 寸。",
    "mnemonic": "头维额角入发半，清头明目止偏头",
    "specialProperties": "",
    "indications": [
      "头痛、偏头痛、眩晕",
      "目痛、迎风流泪、眼睑瞤动"
    ]
  },
  {
    "id": "acu-renying",
    "name": "人迎",
    "pinyin": "rén yíng",
    "code": "ST9",
    "category": "足阳明胃经",
    "subCategory": "颈部",
    "locationHtml": "在颈部，<b>横平喉结</b>，胸锁乳突肌前缘，颈总动脉搏动处。",
    "locationText": "在颈部，横平喉结，胸锁乳突肌前缘，颈总动脉搏动处。",
    "mnemonic": "人迎平结喉动脉，降压利咽消瘰疬",
    "specialProperties": "",
    "indications": [
      "咽喉肿痛、吞咽困难、暴喑",
      "高血压、眩晕",
      "瘿气、瘰疬"
    ]
  },
  {
    "id": "acu-shuitu",
    "name": "水突",
    "pinyin": "shuǐ tū",
    "code": "ST10",
    "category": "足阳明胃经",
    "subCategory": "颈部",
    "locationHtml": "在颈部，<b>横平环状软骨</b>，胸锁乳突肌前缘，人迎与气舍连线中点。",
    "locationText": "在颈部，横平环状软骨，胸锁乳突肌前缘，人迎与气舍连线中点。",
    "mnemonic": "水突人迎气舍间，利咽降逆化痰喘",
    "specialProperties": "",
    "indications": [
      "咽喉肿痛、气喘、咳嗽",
      "瘿气、瘰疬"
    ]
  },
  {
    "id": "acu-qishe",
    "name": "气舍",
    "pinyin": "qì shě",
    "code": "ST11",
    "category": "足阳明胃经",
    "subCategory": "颈部",
    "locationHtml": "在颈部，<b>锁骨上小窝</b>，胸锁乳突肌胸骨头与锁骨头之间。",
    "locationText": "在颈部，锁骨上小窝，胸锁乳突肌胸骨头与锁骨头之间。",
    "mnemonic": "气舍锁骨上小窝，降逆止呃平咳嗽",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、呃逆",
      "咽喉肿痛、瘿气、颈项强痛"
    ]
  },
  {
    "id": "acu-quepen",
    "name": "缺盆",
    "pinyin": "quē pén",
    "code": "ST12",
    "category": "足阳明胃经",
    "subCategory": "颈侧区",
    "locationHtml": "在颈侧区，<b>锁骨上窝中央</b>，前正中线旁开 <b>4 寸</b>。",
    "locationText": "在颈侧区，锁骨上窝中央，前正中线旁开 4 寸。",
    "mnemonic": "缺盆锁骨上窝中，宣肺利咽散结滞",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、咽喉肿痛",
      "缺盆中痛、瘰疬、瘿气"
    ]
  },
  {
    "id": "acu-qihu",
    "name": "气户",
    "pinyin": "qì hù",
    "code": "ST13",
    "category": "足阳明胃经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>锁骨下缘</b>，前正中线旁开 <b>4 寸</b>。",
    "locationText": "在胸部，锁骨下缘，前正中线旁开 4 寸。",
    "mnemonic": "气户锁骨下缘旁，开胸理气利胸痛",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、呃逆",
      "胸胁胀满、胸痛"
    ]
  },
  {
    "id": "acu-kufang",
    "name": "库房",
    "pinyin": "kù fáng",
    "code": "ST14",
    "category": "足阳明胃经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>第 1 肋间隙</b>，前正中线旁开 <b>4 寸</b>。",
    "locationText": "在胸部，第 1 肋间隙，前正中线旁开 4 寸。",
    "mnemonic": "库房第一肋间平，理气宽胸咳逆平",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、咳吐脓血",
      "胸胁胀痛"
    ]
  },
  {
    "id": "acu-wuyi",
    "name": "屋翳",
    "pinyin": "wū yì",
    "code": "ST15",
    "category": "足阳明胃经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>第 2 肋间隙</b>，前正中线旁开 <b>4 寸</b>。",
    "locationText": "在胸部，第 2 肋间隙，前正中线旁开 4 寸。",
    "mnemonic": "屋翳二肋间隙中，消痈利气通乳痈",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、咳血",
      "胸胁胀痛、乳痈"
    ]
  },
  {
    "id": "acu-yingchuang",
    "name": "膺窗",
    "pinyin": "yīng chuāng",
    "code": "ST16",
    "category": "足阳明胃经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>第 3 肋间隙</b>，前正中线旁开 <b>4 寸</b>。",
    "locationText": "在胸部，第 3 肋间隙，前正中线旁开 4 寸。",
    "mnemonic": "膺窗三肋间隙行，理气消痈利乳房",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、胸闷",
      "乳痈、乳癖、胸胁胀痛"
    ]
  },
  {
    "id": "acu-ruzhong",
    "name": "乳中",
    "pinyin": "rǔ zhōng",
    "code": "ST17",
    "category": "足阳明胃经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>第 4 肋间隙，乳头中央</b>，前正中线旁开 4 寸。禁针灸，只作骨度标志。",
    "locationText": "在胸部，第 4 肋间隙，乳头中央，前正中线旁开 4 寸。禁针灸，只作骨度标志。",
    "mnemonic": "乳中四肋乳头中，骨度标志禁刺灸",
    "specialProperties": "禁针禁灸标志穴",
    "indications": [
      "仅作胸腹部定位标志"
    ]
  },
  {
    "id": "acu-rugeng",
    "name": "乳根",
    "pinyin": "rǔ gēn",
    "code": "ST18",
    "category": "足阳明胃经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>第 5 肋间隙，乳头直下</b>，前正中线旁开 <b>4 寸</b>。",
    "locationText": "在胸部，第 5 肋间隙，乳头直下，前正中线旁开 4 寸。",
    "mnemonic": "乳根乳头直下五，通乳理气化胸胀",
    "specialProperties": "",
    "indications": [
      "乳痈、乳癖、产后少乳",
      "咳嗽、气喘、胸痛"
    ]
  },
  {
    "id": "acu-burong",
    "name": "不容",
    "pinyin": "bù róng",
    "code": "ST19",
    "category": "足阳明胃经",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>脐中上 6 寸</b>，前正中线旁开 <b>2 寸</b>。",
    "locationText": "在上腹部，脐中上 6 寸，前正中线旁开 2 寸。",
    "mnemonic": "不容脐上六寸旁，开二寸调和胃气",
    "specialProperties": "",
    "indications": [
      "胃痛、呕吐、腹胀、食欲不振",
      "胸胁胀满"
    ]
  },
  {
    "id": "acu-chengman",
    "name": "承满",
    "pinyin": "chéng mǎn",
    "code": "ST20",
    "category": "足阳明胃经",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>脐中上 5 寸</b>，前正中线旁开 <b>2 寸</b>。",
    "locationText": "在上腹部，脐中上 5 寸，前正中线旁开 2 寸。",
    "mnemonic": "承满脐上五寸旁，和胃消满理中焦",
    "specialProperties": "",
    "indications": [
      "胃痛、腹胀、呕吐、纳呆",
      "肠鸣、泄泻"
    ]
  },
  {
    "id": "acu-liangmen",
    "name": "梁门",
    "pinyin": "liáng mén",
    "code": "ST21",
    "category": "足阳明胃经",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>脐中上 4 寸</b>，前正中线旁开 <b>2 寸</b>。",
    "locationText": "在上腹部，脐中上 4 寸，前正中线旁开 2 寸。",
    "mnemonic": "梁门脐上四寸旁，健脾和胃止呕酸",
    "specialProperties": "",
    "indications": [
      "胃痛、呕吐、纳呆、腹胀",
      "便溏、消化性溃疡"
    ]
  },
  {
    "id": "acu-guanmen",
    "name": "关门",
    "pinyin": "guān mén",
    "code": "ST22",
    "category": "足阳明胃经",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>脐中上 3 寸</b>，前正中线旁开 <b>2 寸</b>。",
    "locationText": "在上腹部，脐中上 3 寸，前正中线旁开 2 寸。",
    "mnemonic": "关门脐上三寸旁，调肠止泻化水肿",
    "specialProperties": "",
    "indications": [
      "腹胀、腹痛、肠鸣泄泻",
      "水肿、食欲不振"
    ]
  },
  {
    "id": "acu-taiyi",
    "name": "太乙",
    "pinyin": "tài yǐ",
    "code": "ST23",
    "category": "足阳明胃经",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>脐中上 2 寸</b>，前正中线旁开 <b>2 寸</b>。",
    "locationText": "在上腹部，脐中上 2 寸，前正中线旁开 2 寸。",
    "mnemonic": "太乙脐上二寸旁，清心宁神调胃肠",
    "specialProperties": "",
    "indications": [
      "胃痛、腹胀、泄泻",
      "癫狂、惊悸、心烦"
    ]
  },
  {
    "id": "acu-huaroumen",
    "name": "滑肉门",
    "pinyin": "huá ròu mén",
    "code": "ST24",
    "category": "足阳明胃经",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>脐中上 1 寸</b>，前正中线旁开 <b>2 寸</b>。",
    "locationText": "在上腹部，脐中上 1 寸，前正中线旁开 2 寸。",
    "mnemonic": "滑肉门脐上一寸，和胃安神止呕吐",
    "specialProperties": "",
    "indications": [
      "胃痛、呕吐、呃逆",
      "癫狂、腹胀、腹痛"
    ]
  },
  {
    "id": "acu-tianshu",
    "name": "天枢",
    "pinyin": "tiān shū",
    "code": "ST25",
    "category": "足阳明胃经",
    "subCategory": "中腹部",
    "locationHtml": "在腹部，<b>横平脐中，前正中线旁开 2 寸</b>。",
    "locationText": "在腹部，横平脐中，前正中线旁开 2 寸。",
    "mnemonic": "大肠募穴天枢求，平脐二寸调肠胃",
    "specialProperties": "大肠之募穴",
    "indications": [
      "腹痛、腹胀、便秘、泄泻、痢疾、肠痈",
      "月经不调、痛经、水肿"
    ]
  },
  {
    "id": "acu-wailing",
    "name": "外陵",
    "pinyin": "wài líng",
    "code": "ST26",
    "category": "足阳明胃经",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>脐中下 1 寸</b>，前正中线旁开 <b>2 寸</b>。",
    "locationText": "在下腹部，脐中下 1 寸，前正中线旁开 2 寸。",
    "mnemonic": "外陵脐下一寸旁，理气止痛利疝气",
    "specialProperties": "",
    "indications": [
      "腹痛、疝气",
      "痛经、产后腹痛"
    ]
  },
  {
    "id": "acu-daju",
    "name": "大巨",
    "pinyin": "dà jù",
    "code": "ST27",
    "category": "足阳明胃经",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>脐中下 2 寸</b>，前正中线旁开 <b>2 寸</b>。",
    "locationText": "在下腹部，脐中下 2 寸，前正中线旁开 2 寸。",
    "mnemonic": "大巨脐下二寸旁，通利下焦利膀胱",
    "specialProperties": "",
    "indications": [
      "小腹胀满、小便不利",
      "疝气、遗精、早泄"
    ]
  },
  {
    "id": "acu-shuidao",
    "name": "水道",
    "pinyin": "shuǐ dào",
    "code": "ST28",
    "category": "足阳明胃经",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>脐中下 3 寸</b>，前正中线旁开 <b>2 寸</b>。",
    "locationText": "在下腹部，脐中下 3 寸，前正中线旁开 2 寸。",
    "mnemonic": "水道脐下三寸旁，利水消肿通经络",
    "specialProperties": "",
    "indications": [
      "小腹胀满、小便不利、水肿",
      "痛经、经闭、不孕、疝气"
    ]
  },
  {
    "id": "acu-guilai",
    "name": "归来",
    "pinyin": "guī lái",
    "code": "ST29",
    "category": "足阳明胃经",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>脐中下 4 寸</b>，前正中线旁开 <b>2 寸</b>。",
    "locationText": "在下腹部，脐中下 4 寸，前正中线旁开 2 寸。",
    "mnemonic": "归来脐下四寸旁，调经固脱止疝痛",
    "specialProperties": "",
    "indications": [
      "小腹痛、疝气",
      "月经不调、带下、阴挺、经闭"
    ]
  },
  {
    "id": "acu-qichong",
    "name": "气冲",
    "pinyin": "qì chōng",
    "code": "ST30",
    "category": "足阳明胃经",
    "subCategory": "腹股沟区",
    "locationHtml": "在腹股沟区，<b>耻骨联合上缘，前正中线旁开 2 寸</b>，股动脉搏动内侧。",
    "locationText": "在腹股沟区，耻骨联合上缘，前正中线旁开 2 寸，股动脉搏动内侧。",
    "mnemonic": "气冲耻骨上缘旁，调经利冲消疝痛",
    "specialProperties": "",
    "indications": [
      "腹痛、疝气、阴部肿痛",
      "月经不调、带下、难产、不孕"
    ]
  },
  {
    "id": "acu-biguan",
    "name": "髀关",
    "pinyin": "bì guān",
    "code": "ST31",
    "category": "足阳明胃经",
    "subCategory": "股前区",
    "locationHtml": "在股前区，<b>股直肌近端、缝匠肌与阔筋膜张肌之间凹陷中</b>。",
    "locationText": "在股前区，股直肌近端、缝匠肌与阔筋膜张肌之间凹陷中。",
    "mnemonic": "髀关髂前下凹中，通络舒筋利下肢",
    "specialProperties": "",
    "indications": [
      "下肢痿痹、腰痛膝冷",
      "腹股沟淋巴结肿大"
    ]
  },
  {
    "id": "acu-futu-st",
    "name": "伏兔",
    "pinyin": "fú tù",
    "code": "ST32",
    "category": "足阳明胃经",
    "subCategory": "股前区",
    "locationHtml": "在股前区，<b>髌底上 6 寸</b>，髂前上棘与髌底外侧端的连线上。",
    "locationText": "在股前区，髌底上 6 寸，髂前上棘与髌底外侧端的连线上。",
    "mnemonic": "伏兔髌上六寸求，通经活络止腰疼",
    "specialProperties": "",
    "indications": [
      "下肢痿痹、腰痛、膝痛",
      "疝气、脚气"
    ]
  },
  {
    "id": "acu-yinshi",
    "name": "阴市",
    "pinyin": "yīn shì",
    "code": "ST33",
    "category": "足阳明胃经",
    "subCategory": "股前区",
    "locationHtml": "在股前区，<b>髌底上 3 寸</b>，股直肌肌腱外侧。",
    "locationText": "在股前区，髌底上 3 寸，股直肌肌腱外侧。",
    "mnemonic": "阴市髌上三寸旁，温阳散寒利膝关",
    "specialProperties": "",
    "indications": [
      "膝腿冷痛、下肢不遂",
      "疝气、腹胀腹痛"
    ]
  },
  {
    "id": "acu-liangqiu",
    "name": "梁丘",
    "pinyin": "liáng qiū",
    "code": "ST34",
    "category": "足阳明胃经",
    "subCategory": "股前区",
    "locationHtml": "在股前区，<b>髌底上 2 寸</b>，股外侧肌与股直肌肌腱之间。",
    "locationText": "在股前区，髌底上 2 寸，股外侧肌与股直肌肌腱之间。",
    "mnemonic": "梁丘髌上二寸寻，郄穴急止胃痛灵",
    "specialProperties": "郄穴",
    "indications": [
      "急性胃痛、胃痉挛、腹泻",
      "膝关节肿痛、下肢瘫痪",
      "乳痈、乳痛"
    ]
  },
  {
    "id": "acu-dubi",
    "name": "犊鼻",
    "pinyin": "dú bí",
    "code": "ST35",
    "category": "足阳明胃经",
    "subCategory": "膝前区",
    "locationHtml": "在膝前区，<b>髌韧带外侧凹陷中</b>。<br>简便取穴法：屈膝，在髌骨下方、髌韧带外侧凹陷处。",
    "locationText": "在膝前区，髌韧带外侧凹陷中。简便取穴法：屈膝，在髌骨下方、髌韧带外侧凹陷处。",
    "mnemonic": "犊鼻屈膝髌外陷，消肿止痛利膝痹",
    "specialProperties": "",
    "indications": [
      "膝痛、下肢痿痹、屈伸不利",
      "脚气"
    ]
  },
  {
    "id": "acu-zusanli",
    "name": "足三里",
    "pinyin": "zú sān lǐ",
    "code": "ST36",
    "category": "足阳明胃经",
    "subCategory": "小腿前外侧",
    "locationHtml": "在小腿前外侧，<b>犊鼻下 3 寸</b>，胫骨前嵴外一横指。<br>简便取穴法：右手掌心按在右膝盖骨上，中指直下，无名指尖处是穴。",
    "locationText": "在小腿前外侧，犊鼻下 3 寸，胫骨前嵴外一横指。简便取穴法：右手掌心按在右膝盖骨上，中指直下，无名指尖处是穴。",
    "mnemonic": "肚腹三里留，犊鼻下三寸前嵴旁",
    "specialProperties": "合穴（属土）；胃下合穴；四总穴；强壮保健要穴",
    "indications": [
      "胃痛、呕吐、腹胀、腹泻、痢疾、便秘、消化不良",
      "虚劳羸瘦、水肿、咳嗽气喘",
      "下肢痿痹、中风瘫痪",
      "养生保健，灸之延年"
    ]
  },
  {
    "id": "acu-shangjuxu",
    "name": "上巨虚",
    "pinyin": "shàng jù xū",
    "code": "ST37",
    "category": "足阳明胃经",
    "subCategory": "小腿前外侧",
    "locationHtml": "在小腿前外侧，<b>犊鼻下 6 寸</b>，胫骨前嵴外一横指。",
    "locationText": "在小腿前外侧，犊鼻下 6 寸，胫骨前嵴外一横指。",
    "mnemonic": "上巨虚在三里下，三寸大肠下合穴",
    "specialProperties": "大肠下合穴",
    "indications": [
      "肠鸣、腹痛、腹泻、便秘、肠痈",
      "下肢痿痹、脚气"
    ]
  },
  {
    "id": "acu-tiaokou",
    "name": "条口",
    "pinyin": "tiáo kǒu",
    "code": "ST38",
    "category": "足阳明胃经",
    "subCategory": "小腿前外侧",
    "locationHtml": "在小腿前外侧，<b>犊鼻下 8 寸</b>，胫骨前嵴外一横指。",
    "locationText": "在小腿前外侧，犊鼻下 8 寸，胫骨前嵴外一横指。",
    "mnemonic": "条口三里下五寸，通经活络利肩凝",
    "specialProperties": "",
    "indications": [
      "肩周炎、肩臂疼痛（条口透承山）",
      "下肢痿痹、转筋、脘腹痛"
    ]
  },
  {
    "id": "acu-xiajuxu",
    "name": "下巨虚",
    "pinyin": "xià jù xū",
    "code": "ST39",
    "category": "足阳明胃经",
    "subCategory": "小腿前外侧",
    "locationHtml": "在小腿前外侧，<b>犊鼻下 9 寸</b>，胫骨前嵴外一横指。",
    "locationText": "在小腿前外侧，犊鼻下 9 寸，胫骨前嵴外一横指。",
    "mnemonic": "下巨虚在条口下一，小肠下合调肠腑",
    "specialProperties": "小肠下合穴",
    "indications": [
      "小腹痛、腹泻、便秘、痢疾",
      "乳痈、下肢痿痹"
    ]
  },
  {
    "id": "acu-fenglong",
    "name": "丰隆",
    "pinyin": "fēng lóng",
    "code": "ST40",
    "category": "足阳明胃经",
    "subCategory": "小腿前外侧",
    "locationHtml": "在小腿前外侧，<b>外踝尖上 8 寸</b>，条口穴外侧 1 寸（胫骨前嵴外 2 横指）。",
    "locationText": "在小腿前外侧，外踝尖上 8 寸，条口穴外侧 1 寸（胫骨前嵴外 2 横指）。",
    "mnemonic": "丰隆外踝上八寸，祛痰要穴和胃气",
    "specialProperties": "络穴",
    "indications": [
      "痰饮咳嗽、气喘、胸闷、痰核",
      "头痛、眩晕、癫狂",
      "便秘、下肢痿痹、水肿"
    ]
  },
  {
    "id": "acu-jiexi",
    "name": "解溪",
    "pinyin": "jiě xī",
    "code": "ST41",
    "category": "足阳明胃经",
    "subCategory": "踝区",
    "locationHtml": "在踝区，<b>踝关节前面中央凹陷中</b>，拇长伸肌腱与趾长伸肌腱之间。",
    "locationText": "在踝区，踝关节前面中央凹陷中，拇长伸肌腱与趾长伸肌腱之间。",
    "mnemonic": "解溪足背横纹中，经火清胃利头面",
    "specialProperties": "经穴（属火）",
    "indications": [
      "头痛、眩晕、目赤、齿痛",
      "腹胀、便秘、癫狂",
      "下肢痿痹、踝关节扭伤"
    ]
  },
  {
    "id": "acu-chongyang",
    "name": "冲阳",
    "pinyin": "chōng yáng",
    "code": "ST42",
    "category": "足阳明胃经",
    "subCategory": "足背",
    "locationHtml": "在足背，<b>第 2 跖骨基底部与中间楔状骨关节处</b>，足背动脉搏动处。",
    "locationText": "在足背，第 2 跖骨基底部与中间楔状骨关节处，足背动脉搏动处。",
    "mnemonic": "冲阳足背动脉搏，原穴和中利足痿",
    "specialProperties": "原穴",
    "indications": [
      "胃痛、腹胀、面肿",
      "齿痛、口眼㖞斜、狂证",
      "足背红肿、足痿无力"
    ]
  },
  {
    "id": "acu-xiangu",
    "name": "陷谷",
    "pinyin": "xiàn gǔ",
    "code": "ST43",
    "category": "足阳明胃经",
    "subCategory": "足背",
    "locationHtml": "在足背，<b>第 2、3 跖骨间</b>，第 2 跖趾关节近端凹陷中。",
    "locationText": "在足背，第 2、3 跖骨间，第 2 跖趾关节近端凹陷中。",
    "mnemonic": "陷谷二三跖骨间，输木消肿利头面",
    "specialProperties": "输穴（属木）",
    "indications": [
      "面肿、水肿、目赤痛",
      "腹痛、肠鸣、泄泻",
      "足背肿痛、足热"
    ]
  },
  {
    "id": "acu-neiting",
    "name": "内庭",
    "pinyin": "nèi tíng",
    "code": "ST44",
    "category": "足阳明胃经",
    "subCategory": "足背",
    "locationHtml": "在足背，<b>第 2、3 趾间</b>，趾蹼缘后方赤白肉际处。",
    "locationText": "在足背，第 2、3 趾间，趾蹼缘后方赤白肉际处。",
    "mnemonic": "内庭二三趾蹼缘，荥水泻火胃热除",
    "specialProperties": "荥穴（属水）",
    "indications": [
      "齿痛、咽喉肿痛、口㖞、鼻衄",
      "胃火牙痛、吐酸、腹胀、泄泻",
      "热病、足背肿痛"
    ]
  },
  {
    "id": "acu-lidui",
    "name": "厉兑",
    "pinyin": "lì duì",
    "code": "ST45",
    "category": "足阳明胃经",
    "subCategory": "足趾",
    "locationHtml": "在足趾，<b>第 2 趾末节外侧</b>，趾甲根角侧后方 <b>0.1 寸</b>。",
    "locationText": "在足趾，第 2 趾末节外侧，趾甲根角侧后方 0.1 寸。",
    "mnemonic": "厉兑次趾外甲角，井金清热开神窍",
    "specialProperties": "井穴（属金）",
    "indications": [
      "面肿、齿痛、咽喉肿痛、鼻衄",
      "癫狂、多梦、热病、昏迷",
      "足背寒冷、消谷善饥"
    ]
  },
  {
    "id": "acu-yinbai",
    "name": "隐白",
    "pinyin": "yǐn bái",
    "code": "SP1",
    "category": "足太阴脾经",
    "subCategory": "足趾",
    "locationHtml": "在足趾，<b>足大趾末节内侧</b>，趾甲根角侧上方 <b>0.1 寸</b>。",
    "locationText": "在足趾，足大趾末节内侧，趾甲根角侧上方 0.1 寸。",
    "mnemonic": "隐白大趾内甲角，井木统血止崩漏",
    "specialProperties": "井穴（属木）",
    "indications": [
      "月经过多、崩漏、便血、尿血等慢性出血证",
      "癫狂、多梦、惊风",
      "腹胀、腹痛、暴泄"
    ]
  },
  {
    "id": "acu-dadu",
    "name": "大都",
    "pinyin": "dà dōu",
    "code": "SP2",
    "category": "足太阴脾经",
    "subCategory": "足内侧",
    "locationHtml": "在足内侧，<b>第 1 跖趾关节远端赤白肉际凹陷中</b>。",
    "locationText": "在足内侧，第 1 跖趾关节远端赤白肉际凹陷中。",
    "mnemonic": "大都一跖关节前，荥火健脾消胀满",
    "specialProperties": "荥穴（属火）",
    "indications": [
      "腹胀、腹痛、呕吐、泄泻",
      "热病无汗、小儿惊风",
      "足趾肿痛"
    ]
  },
  {
    "id": "acu-taibai",
    "name": "太白",
    "pinyin": "tài bái",
    "code": "SP3",
    "category": "足太阴脾经",
    "subCategory": "足内侧",
    "locationHtml": "在足内侧，<b>第 1 跖趾关节近端赤白肉际凹陷中</b>。",
    "locationText": "在足内侧，第 1 跖趾关节近端赤白肉际凹陷中。",
    "mnemonic": "太白一跖关节后，输原健脾除湿热",
    "specialProperties": "输穴（属土）；原穴",
    "indications": [
      "胃痛、腹胀、腹痛、肠鸣、泄泻、痢疾、便秘",
      "脚气、水肿、身重肢痛",
      "消渴"
    ]
  },
  {
    "id": "acu-gongsun",
    "name": "公孙",
    "pinyin": "gōng sūn",
    "code": "SP4",
    "category": "足太阴脾经",
    "subCategory": "足内侧",
    "locationHtml": "在足内侧，<b>第 1 跖骨基底的前下方赤白肉际处</b>。",
    "locationText": "在足内侧，第 1 跖骨基底的前下方赤白肉际处。",
    "mnemonic": "公孙一跖基底下，八脉冲脉胃心通",
    "specialProperties": "络穴；八脉交会穴（通冲脉）",
    "indications": [
      "胃痛、呕吐、腹痛、腹泻、痢疾、饮食不化",
      "心痛、胸闷、心悸",
      "月经不调、胎衣不下"
    ]
  },
  {
    "id": "acu-shangqiu",
    "name": "商丘",
    "pinyin": "shāng qiū",
    "code": "SP5",
    "category": "足太阴脾经",
    "subCategory": "踝区",
    "locationHtml": "在踝区，<b>内踝前下方</b>，舟骨粗隆与内踝尖连线中点凹陷中。",
    "locationText": "在踝区，内踝前下方，舟骨粗隆与内踝尖连线中点凹陷中。",
    "mnemonic": "商丘内踝前下方，经金健脾利水湿",
    "specialProperties": "经穴（属金）",
    "indications": [
      "腹胀、腹泻、便秘、食不化",
      "足踝肿痛、下肢痿痹",
      "黄疸、小儿消化不良"
    ]
  },
  {
    "id": "acu-sanyinjiao",
    "name": "三阴交",
    "pinyin": "sān yīn jiāo",
    "code": "SP6",
    "category": "足太阴脾经",
    "subCategory": "小腿内侧",
    "locationHtml": "在小腿内侧，<b>内踝尖上 3 寸</b>，胫骨内侧缘后际。<br>简便取穴法：除拇指外，并拢四指，小指放在内踝尖上，食指上缘胫骨后缘处。",
    "locationText": "在小腿内侧，内踝尖上 3 寸，胫骨内侧缘后际。简便取穴法：除拇指外，并拢四指，小指放在内踝尖上，食指上缘胫骨后缘处。",
    "mnemonic": "三阴交在内踝上，三寸调经健脾肾",
    "specialProperties": "足三阴经交会穴",
    "indications": [
      "月经不调、痛经、经闭、崩漏、带下、滞产（孕妇禁针）",
      "遗精、阳痿、早泄、不孕",
      "腹胀、肠鸣、腹泻",
      "失眠、头晕、高血压",
      "下肢痿痹、水肿、小便不利"
    ]
  },
  {
    "id": "acu-lougu",
    "name": "漏谷",
    "pinyin": "lòu gǔ",
    "code": "SP7",
    "category": "足太阴脾经",
    "subCategory": "小腿内侧",
    "locationHtml": "在小腿内侧，<b>内踝尖上 6 寸</b>，胫骨内侧缘后际。",
    "locationText": "在小腿内侧，内踝尖上 6 寸，胫骨内侧缘后际。",
    "mnemonic": "漏谷内踝上六寸，除湿利水消腹胀",
    "specialProperties": "",
    "indications": [
      "腹胀、肠鸣、泄泻",
      "小便不利、水肿、遗精",
      "下肢痿痹、足踝肿痛"
    ]
  },
  {
    "id": "acu-diji",
    "name": "地机",
    "pinyin": "dì jī",
    "code": "SP8",
    "category": "足太阴脾经",
    "subCategory": "小腿内侧",
    "locationHtml": "在小腿内侧，<b>阴陵泉下 3 寸</b>，胫骨内侧缘后际。",
    "locationText": "在小腿内侧，阴陵泉下 3 寸，胫骨内侧缘后际。",
    "mnemonic": "地机陵泉下三寸，郄穴健脾调经血",
    "specialProperties": "郄穴",
    "indications": [
      "痛经、崩漏、月经不调",
      "腹痛、腹胀、腹泻、痢疾",
      "水肿、小便不利"
    ]
  },
  {
    "id": "acu-yinlingquan",
    "name": "阴陵泉",
    "pinyin": "yīn líng quán",
    "code": "SP9",
    "category": "足太阴脾经",
    "subCategory": "小腿内侧",
    "locationHtml": "在小腿内侧，<b>胫骨内侧髁下缘与胫骨内侧缘之间的凹陷中</b>。",
    "locationText": "在小腿内侧，胫骨内侧髁下缘与胫骨内侧缘之间的凹陷中。",
    "mnemonic": "阴陵胫骨髁下凹，合水利水化湿热",
    "specialProperties": "合穴（属水）",
    "indications": [
      "腹胀、泄泻、水肿、黄疸、小便不利或失禁",
      "膝痛、下肢痿痹",
      "阴部痛、痛经、带下、遗精"
    ]
  },
  {
    "id": "acu-xuehai",
    "name": "血海",
    "pinyin": "xuè hǎi",
    "code": "SP10",
    "category": "足太阴脾经",
    "subCategory": "股前内侧",
    "locationHtml": "在股前内侧区，<b>髌底内侧端上 2 寸</b>，股内侧肌隆起处。<br>简便取穴法：屈膝，医者右手掌心按患者左膝盖骨上，拇指指向大腿内侧，拇指尖所指处。",
    "locationText": "在股前内侧区，髌底内侧端上 2 寸，股内侧肌隆起处。简便取穴法：屈膝，医者右手掌心按患者左膝盖骨上，拇指指向大腿内侧，拇指尖所指处。",
    "mnemonic": "血海髌内上二寸，活血养血祛风疹",
    "specialProperties": "",
    "indications": [
      "月经不调、痛经、经闭、崩漏",
      "瘾疹、湿疹、丹毒、皮肤瘙痒",
      "股内侧痛、膝痛"
    ]
  },
  {
    "id": "acu-jimen",
    "name": "箕门",
    "pinyin": "jī mén",
    "code": "SP11",
    "category": "足太阴脾经",
    "subCategory": "股前内侧",
    "locationHtml": "在股前内侧区，<b>血海与冲门连线上，血海上 6 寸</b>。",
    "locationText": "在股前内侧区，血海与冲门连线上，血海上 6 寸。",
    "mnemonic": "箕门血海上六寸，利水通淋调下焦",
    "specialProperties": "",
    "indications": [
      "小便不利、遗尿、癃闭",
      "腹股沟肿痛、下肢瘫痪"
    ]
  },
  {
    "id": "acu-chongmen",
    "name": "冲门",
    "pinyin": "chōng mén",
    "code": "SP12",
    "category": "足太阴脾经",
    "subCategory": "腹股沟区",
    "locationHtml": "在腹股沟区，<b>腹股沟斜纹中</b>，股动脉搏动外侧，前正中线旁开 <b>3.5 寸</b>。",
    "locationText": "在腹股沟区，腹股沟斜纹中，股动脉搏动外侧，前正中线旁开 3.5 寸。",
    "mnemonic": "冲门曲骨旁三半，理气通淋调疝带",
    "specialProperties": "",
    "indications": [
      "腹痛、疝气",
      "带下、崩漏、小便不利"
    ]
  },
  {
    "id": "acu-fushe",
    "name": "府舍",
    "pinyin": "fǔ shè",
    "code": "SP13",
    "category": "足太阴脾经",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>脐中下 4.3 寸</b>，前正中线旁开 <b>4 寸</b>。",
    "locationText": "在下腹部，脐中下 4.3 寸，前正中线旁开 4 寸。",
    "mnemonic": "府舍冲门上七分，理气消结止腹痛",
    "specialProperties": "",
    "indications": [
      "腹痛、疝气、痞块",
      "阑尾炎、腹胀"
    ]
  },
  {
    "id": "acu-fujie",
    "name": "腹结",
    "pinyin": "fù jié",
    "code": "SP14",
    "category": "足太阴脾经",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>脐中下 1.3 寸</b>，前正中线旁开 <b>4 寸</b>。",
    "locationText": "在下腹部，脐中下 1.3 寸，前正中线旁开 4 寸。",
    "mnemonic": "腹结大横下一三，理气止痛调便秘",
    "specialProperties": "",
    "indications": [
      "腹痛、腹胀、腹泻、便秘",
      "疝气"
    ]
  },
  {
    "id": "acu-daheng",
    "name": "大横",
    "pinyin": "dà héng",
    "code": "SP15",
    "category": "足太阴脾经",
    "subCategory": "中腹部",
    "locationHtml": "在腹部，<b>横平脐中，前正中线旁开 4 寸</b>。",
    "locationText": "在腹部，横平脐中，前正中线旁开 4 寸。",
    "mnemonic": "大横平脐旁四寸，温中散寒调肠腑",
    "specialProperties": "",
    "indications": [
      "腹痛、腹泻、便秘、肠鸣",
      "虚劳便溏、蛔虫症"
    ]
  },
  {
    "id": "acu-fuai",
    "name": "腹哀",
    "pinyin": "fù āi",
    "code": "SP16",
    "category": "足太阴脾经",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>脐中上 3 寸</b>，前正中线旁开 <b>4 寸</b>。",
    "locationText": "在上腹部，脐中上 3 寸，前正中线旁开 4 寸。",
    "mnemonic": "腹哀脐上三寸旁，清热降逆化食滞",
    "specialProperties": "",
    "indications": [
      "消化不良、腹痛、腹胀、便秘、痢疾"
    ]
  },
  {
    "id": "acu-shidou",
    "name": "食窦",
    "pinyin": "shí dòu",
    "code": "SP17",
    "category": "足太阴脾经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>第 5 肋间隙</b>，前正中线旁开 <b>6 寸</b>。",
    "locationText": "在胸部，第 5 肋间隙，前正中线旁开 6 寸。",
    "mnemonic": "食窦五肋旁开六，利膈和胃宽胸膈",
    "specialProperties": "",
    "indications": [
      "胸胁胀痛、咳嗽、气喘",
      "腹胀、反胃、食不下、水肿"
    ]
  },
  {
    "id": "acu-tianxi",
    "name": "天溪",
    "pinyin": "tiān xī",
    "code": "SP18",
    "category": "足太阴脾经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>第 4 肋间隙</b>，前正中线旁开 <b>6 寸</b>。",
    "locationText": "在胸部，第 4 肋间隙，前正中线旁开 6 寸。",
    "mnemonic": "天溪四肋旁开六，宽胸理气通乳汁",
    "specialProperties": "",
    "indications": [
      "胸痛、咳嗽、气喘",
      "乳痈、产后少乳、胸胁胀满"
    ]
  },
  {
    "id": "acu-xiongyang",
    "name": "胸乡",
    "pinyin": "xiōng xiāng",
    "code": "SP19",
    "category": "足太阴脾经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>第 3 肋间隙</b>，前正中线旁开 <b>6 寸</b>。",
    "locationText": "在胸部，第 3 肋间隙，前正中线旁开 6 寸。",
    "mnemonic": "胸乡三肋旁开六，宽胸止痛化胸痹",
    "specialProperties": "",
    "indications": [
      "胸胁胀痛、胸闷、咳嗽气喘"
    ]
  },
  {
    "id": "acu-zhourong",
    "name": "周荣",
    "pinyin": "zhōu róng",
    "code": "SP20",
    "category": "足太阴脾经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>第 2 肋间隙</b>，前正中线旁开 <b>6 寸</b>。",
    "locationText": "在胸部，第 2 肋间隙，前正中线旁开 6 寸。",
    "mnemonic": "周荣二肋旁开六，宣降肺气利胸膈",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、胸胁胀满",
      "食不下、咳唾脓血"
    ]
  },
  {
    "id": "acu-dabao",
    "name": "大包",
    "pinyin": "dà bāo",
    "code": "SP21",
    "category": "足太阴脾经",
    "subCategory": "胸外侧区",
    "locationHtml": "在胸外侧区，<b>第 6 肋间隙，腋中线上</b>。",
    "locationText": "在胸外侧区，第 6 肋间隙，腋中线上。",
    "mnemonic": "脾之大络号大包，六肋腋中通身痛",
    "specialProperties": "脾之大络",
    "indications": [
      "胸胁痛、气喘",
      "全身疼痛、百节尽痛、四肢无力"
    ]
  },
  {
    "id": "acu-jiquan",
    "name": "极泉",
    "pinyin": "jí quán",
    "code": "HT1",
    "category": "手少阴心经",
    "subCategory": "腋区",
    "locationHtml": "在腋区，<b>腋窝中央</b>，腋动脉搏动处。",
    "locationText": "在腋区，腋窝中央，腋动脉搏动处。",
    "mnemonic": "极泉腋窝正中求，宽胸理气调心痛",
    "specialProperties": "",
    "indications": [
      "心痛、心悸、胸闷、气短",
      "胁肋疼痛、臂丛神经痛",
      "瘰疬、腋臭、肩臂挛痛"
    ]
  },
  {
    "id": "acu-qingling",
    "name": "青灵",
    "pinyin": "qīng líng",
    "code": "HT2",
    "category": "手少阴心经",
    "subCategory": "臂前区",
    "locationHtml": "在臂内侧区，<b>极泉与少海连线上，肘横纹上 3 寸</b>，肱二头肌内侧沟中。",
    "locationText": "在臂内侧区，极泉与少海连线上，肘横纹上 3 寸，肱二头肌内侧沟中。",
    "mnemonic": "青灵少海上三寸，活血通络理臂痛",
    "specialProperties": "",
    "indications": [
      "心痛、胁痛、头痛",
      "肩臂疼痛、目黄"
    ]
  },
  {
    "id": "acu-shaohai",
    "name": "少海",
    "pinyin": "shào hǎi",
    "code": "HT3",
    "category": "手少阴心经",
    "subCategory": "肘前区",
    "locationHtml": "在肘前区，<b>横平肘横纹，肱骨内上髁前缘</b>。屈肘取穴。",
    "locationText": "在肘前区，横平肘横纹，肱骨内上髁前缘。屈肘取穴。",
    "mnemonic": "少海屈肘内髁前，合水宁神止癫狂",
    "specialProperties": "合穴（属水）",
    "indications": [
      "心痛、心悸、健忘、失眠",
      "癫狂、惊恐",
      "肘臂挛痛、手颤、腋胁痛"
    ]
  },
  {
    "id": "acu-lingdao",
    "name": "灵道",
    "pinyin": "líng dào",
    "code": "HT4",
    "category": "手少阴心经",
    "subCategory": "前臂前区",
    "locationHtml": "在前臂前区，<b>腕掌侧远端横纹上 1.5 寸</b>，尺侧腕屈肌腱桡侧缘。",
    "locationText": "在前臂前区，腕掌侧远端横纹上 1.5 寸，尺侧腕屈肌腱桡侧缘。",
    "mnemonic": "灵道神门上一五，经金安神利喑哑",
    "specialProperties": "经穴（属金）",
    "indications": [
      "心痛、心悸、胸闷",
      "失音、暴喑、咽干",
      "腕臂挛痛"
    ]
  },
  {
    "id": "acu-tongli",
    "name": "通里",
    "pinyin": "tōng lǐ",
    "code": "HT5",
    "category": "手少阴心经",
    "subCategory": "前臂前区",
    "locationHtml": "在前臂前区，<b>腕掌侧远端横纹上 1 寸</b>，尺侧腕屈肌腱桡侧缘。",
    "locationText": "在前臂前区，腕掌侧远端横纹上 1 寸，尺侧腕屈肌腱桡侧缘。",
    "mnemonic": "通里神门上一寸，心经络穴通言语",
    "specialProperties": "络穴",
    "indications": [
      "心悸、怔忡、心痛",
      "舌强不语、暴喑、喉痹",
      "腕臂痛、头痛目赤"
    ]
  },
  {
    "id": "acu-yinti",
    "name": "阴郄",
    "pinyin": "yīn xì",
    "code": "HT6",
    "category": "手少阴心经",
    "subCategory": "前臂前区",
    "locationHtml": "在前臂前区，<b>腕掌侧远端横纹上 0.5 寸</b>，尺侧腕屈肌腱桡侧缘。",
    "locationText": "在前臂前区，腕掌侧远端横纹上 0.5 寸，尺侧腕屈肌腱桡侧缘。",
    "mnemonic": "阴郄神门上半寸，郄穴急止盗汗逆",
    "specialProperties": "郄穴",
    "indications": [
      "心痛、惊悸",
      "骨蒸盗汗、吐血、衄血",
      "暴喑、喉痹"
    ]
  },
  {
    "id": "acu-shenmen",
    "name": "神门",
    "pinyin": "shén mén",
    "code": "HT7",
    "category": "手少阴心经",
    "subCategory": "腕前区",
    "locationHtml": "在腕前区，<b>腕掌侧远端横纹尺侧端</b>，尺侧腕屈肌腱桡侧凹陷处。",
    "locationText": "在腕前区，腕掌侧远端横纹尺侧端，尺侧腕屈肌腱桡侧凹陷处。",
    "mnemonic": "神门掌后锐骨端，输原养心安神志",
    "specialProperties": "输穴（属土）；原穴",
    "indications": [
      "心痛、心烦、惊悸、怔忡、失眠、健忘、多梦、癫狂",
      "胸胁痛、头痛、眩晕"
    ]
  },
  {
    "id": "acu-shaofu",
    "name": "少府",
    "pinyin": "shào fǔ",
    "code": "HT8",
    "category": "手少阴心经",
    "subCategory": "手掌区",
    "locationHtml": "在手掌区，<b>横平第 4、5 掌指关节近端</b>，第 4、5 掌骨之间。<br>简便取穴法：握拳，小指尖所点处是穴。",
    "locationText": "在手掌区，横平第 4、5 掌指关节近端，第 4、5 掌骨之间。简便取穴法：握拳，小指尖所点处是穴。",
    "mnemonic": "少府四五掌骨间，荥火清心利小便",
    "specialProperties": "荥穴（属火）",
    "indications": [
      "心悸、心痛、胸闷",
      "小儿遗尿、小便不利",
      "阴痒、阴痛、手掌发热"
    ]
  },
  {
    "id": "acu-shaochong",
    "name": "少冲",
    "pinyin": "shào chōng",
    "code": "HT9",
    "category": "手少阴心经",
    "subCategory": "手指部",
    "locationHtml": "在手指，<b>小指末节桡侧</b>，指甲根角侧上方 <b>0.1 寸</b>。",
    "locationText": "在手指，小指末节桡侧，指甲根角侧上方 0.1 寸。",
    "mnemonic": "少冲小指桡甲角，井木清心苏神厥",
    "specialProperties": "井穴（属木）",
    "indications": [
      "心悸、心痛、胸胁痛",
      "热病、昏迷、中风、晕厥",
      "发热、胸中烦热"
    ]
  },
  {
    "id": "acu-shaoze",
    "name": "少泽",
    "pinyin": "shào zé",
    "code": "SI1",
    "category": "手太阳小肠经",
    "subCategory": "手指部",
    "locationHtml": "在手指，<b>小指末节尺侧</b>，指甲根角侧上方 <b>0.1 寸</b>。",
    "locationText": "在手指，小指末节尺侧，指甲根角侧上方 0.1 寸。",
    "mnemonic": "少泽小指尺甲角，井金通乳清热急",
    "specialProperties": "井穴（属金）",
    "indications": [
      "乳痈、乳汁少或不下",
      "头痛、目翳、咽喉肿痛",
      "热病昏迷、中风"
    ]
  },
  {
    "id": "acu-qiangu",
    "name": "前谷",
    "pinyin": "qián gǔ",
    "code": "SI2",
    "category": "手太阳小肠经",
    "subCategory": "手掌区",
    "locationHtml": "在手指，<b>第 5 掌指关节尺侧远端</b>赤白肉际凹陷中。",
    "locationText": "在手指，第 5 掌指关节尺侧远端赤白肉际凹陷中。",
    "mnemonic": "前谷小指掌骨前，荥水清火解表热",
    "specialProperties": "荥穴（属水）",
    "indications": [
      "头痛、目痛、耳鸣、咽痛",
      "乳少、热病无汗",
      "手指麻木"
    ]
  },
  {
    "id": "acu-houxi",
    "name": "后溪",
    "pinyin": "hòu xī",
    "code": "SI3",
    "category": "手太阳小肠经",
    "subCategory": "手掌区",
    "locationHtml": "在手背，<b>第 5 掌指关节尺侧近端</b>赤白肉际凹陷中。<br>简便取穴法：微握拳，在第5掌指关节尺侧后方横纹头赤白肉际处。",
    "locationText": "在手背，第 5 掌指关节尺侧近端赤白肉际凹陷中。简便取穴法：微握拳，在第5掌指关节尺侧后方横纹头赤白肉际处。",
    "mnemonic": "后溪微握掌纹头，八脉督脉通颈腰",
    "specialProperties": "输穴（属木）；八脉交会穴（通督脉）",
    "indications": [
      "头项强痛、腰背痛、脊柱痛",
      "目赤肿痛、耳聋、咽喉肿痛",
      "癫狂痫证、疟疾",
      "手指及肘臂挛痛"
    ]
  },
  {
    "id": "acu-wangu",
    "name": "腕骨",
    "pinyin": "wàn gǔ",
    "code": "SI4",
    "category": "手太阳小肠经",
    "subCategory": "腕后区",
    "locationHtml": "在腕后区，<b>第 5 掌骨基底与三角骨之间的赤白肉际凹陷中</b>。",
    "locationText": "在腕后区，第 5 掌骨基底与三角骨之间的赤白肉际凹陷中。",
    "mnemonic": "腕骨五掌基底后，原穴清利胆黄疸",
    "specialProperties": "原穴",
    "indications": [
      "黄疸、消渴、疟疾",
      "头痛、项强、目翳、耳鸣",
      "指挛腕痛"
    ]
  },
  {
    "id": "acu-yanggu",
    "name": "阳谷",
    "pinyin": "yáng gǔ",
    "code": "SI5",
    "category": "手太阳小肠经",
    "subCategory": "腕后区",
    "locationHtml": "在腕后区，<b>尺骨茎突与三角骨之间的凹陷中</b>。",
    "locationText": "在腕后区，尺骨茎突与三角骨之间的凹陷中。",
    "mnemonic": "阳谷尺骨茎突陷，经火散风利头目",
    "specialProperties": "经穴（属火）",
    "indications": [
      "头痛、目眩、耳鸣、耳聋、齿痛",
      "癫痫、小儿惊风",
      "腕痛、颈项强急"
    ]
  },
  {
    "id": "acu-yanglao",
    "name": "养老",
    "pinyin": "yǎng lǎo",
    "code": "SI6",
    "category": "手太阳小肠经",
    "subCategory": "前臂后区",
    "locationHtml": "在前臂后区，<b>腕背侧远端横纹上 1 寸</b>，尺骨头桡侧凹陷中。<br>简便取穴法：掌心向胸，在尺骨小头桡侧缘骨缝中取穴。",
    "locationText": "在前臂后区，腕背侧远端横纹上 1 寸，尺骨头桡侧凹陷中。简便取穴法：掌心向胸，在尺骨小头桡侧缘骨缝中取穴。",
    "mnemonic": "养老腕上一寸骨，郄穴明目利肩腰",
    "specialProperties": "郄穴",
    "indications": [
      "目视不明、视力减退、白内障",
      "肩、背、肘、臂疼痛",
      "腰痛、落枕"
    ]
  },
  {
    "id": "acu-zhizheng",
    "name": "支正",
    "pinyin": "zhī zhèng",
    "code": "SI7",
    "category": "手太阳小肠经",
    "subCategory": "前臂后区",
    "locationHtml": "在前臂后区，<b>腕背横纹上 5 寸</b>，阳谷与小海连线上。",
    "locationText": "在前臂后区，腕背横纹上 5 寸，阳谷与小海连线上。",
    "mnemonic": "支正阳谷上五寸，小肠络穴解郁结",
    "specialProperties": "络穴",
    "indications": [
      "头痛、目眩、项强、肘挛",
      "癫狂、精神抑郁",
      "消渴、热病、生疣"
    ]
  },
  {
    "id": "acu-xiaohai",
    "name": "小海",
    "pinyin": "xiǎo hǎi",
    "code": "SI8",
    "category": "手太阳小肠经",
    "subCategory": "肘后区",
    "locationHtml": "在肘后区，<b>尺骨鹰嘴与肱骨内上髁之间的凹陷中</b>。屈肘取穴。",
    "locationText": "在肘后区，尺骨鹰嘴与肱骨内上髁之间的凹陷中。屈肘取穴。",
    "mnemonic": "小海尺骨鹰嘴内，合土舒筋利神癫",
    "specialProperties": "合穴（属土）",
    "indications": [
      "癫痫、精神失常",
      "头痛、项强、耳鸣、颊肿",
      "肘臂疼痛、尺神经痛"
    ]
  },
  {
    "id": "acu-jianzhen",
    "name": "肩贞",
    "pinyin": "jiān zhēn",
    "code": "SI9",
    "category": "手太阳小肠经",
    "subCategory": "肩后区",
    "locationHtml": "在肩后区，<b>腋后纹头直上 1 寸</b>。",
    "locationText": "在肩后区，腋后纹头直上 1 寸。",
    "mnemonic": "肩贞腋后纹上一，通络散结利肩周",
    "specialProperties": "",
    "indications": [
      "肩胛疼痛、手臂麻木不能举",
      "瘰疬、耳鸣、耳聋"
    ]
  },
  {
    "id": "acu-naoshu",
    "name": "臑俞",
    "pinyin": "nào shū",
    "code": "SI10",
    "category": "手太阳小肠经",
    "subCategory": "肩胛区",
    "locationHtml": "在肩胛区，<b>腋后纹头直上，肩胛冈下缘凹陷中</b>。",
    "locationText": "在肩胛区，腋后纹头直上，肩胛冈下缘凹陷中。",
    "mnemonic": "臑俞肩胛冈下缘，通经利节散风寒",
    "specialProperties": "",
    "indications": [
      "肩臂酸痛、肩周炎",
      "瘰疬、瘿气"
    ]
  },
  {
    "id": "acu-tianzong",
    "name": "天宗",
    "pinyin": "tiān zōng",
    "code": "SI11",
    "category": "手太阳小肠经",
    "subCategory": "肩胛区",
    "locationHtml": "在肩胛区，<b>肩胛冈中点与肩胛骨下角连线上 1/3 折点凹陷中</b>。",
    "locationText": "在肩胛区，肩胛冈中点与肩胛骨下角连线上 1/3 折点凹陷中。",
    "mnemonic": "天宗肩胛冈中下，舒筋活络通乳房",
    "specialProperties": "",
    "indications": [
      "肩胛疼痛、肩背酸痛、上肢不遂",
      "乳痈、乳少、胸胁胀满"
    ]
  },
  {
    "id": "acu-bingfeng",
    "name": "秉风",
    "pinyin": "bǐng fēng",
    "code": "SI12",
    "category": "手太阳小肠经",
    "subCategory": "肩胛区",
    "locationHtml": "在肩胛区，<b>肩胛冈上窝中央</b>，天宗直上。",
    "locationText": "在肩胛区，肩胛冈上窝中央，天宗直上。",
    "mnemonic": "秉风冈上窝中求，举臂酸痛风邪除",
    "specialProperties": "",
    "indications": [
      "肩胛疼痛、上肢酸麻不能举"
    ]
  },
  {
    "id": "acu-quyuan",
    "name": "曲垣",
    "pinyin": "qū yuán",
    "code": "SI13",
    "category": "手太阳小肠经",
    "subCategory": "肩胛区",
    "locationHtml": "在肩胛区，<b>肩胛冈上窝内侧端</b>，横平第 2 胸椎棘突。",
    "locationText": "在肩胛区，肩胛冈上窝内侧端，横平第 2 胸椎棘突。",
    "mnemonic": "曲垣冈上内端陷，活血止痛利肩背",
    "specialProperties": "",
    "indications": [
      "肩胛冈周疼痛、肩背颈项强痛"
    ]
  },
  {
    "id": "acu-jianwaishu",
    "name": "肩外俞",
    "pinyin": "jiān wài shū",
    "code": "SI14",
    "category": "手太阳小肠经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 1 胸椎棘突下，后正中线旁开 3 寸</b>。",
    "locationText": "在背部，第 1 胸椎棘突下，后正中线旁开 3 寸。",
    "mnemonic": "肩外一椎旁三寸，舒筋通络止背痛",
    "specialProperties": "",
    "indications": [
      "肩背酸痛、颈项强痛、上肢冷痛"
    ]
  },
  {
    "id": "acu-jianzhongshu",
    "name": "肩中俞",
    "pinyin": "jiān zhōng shū",
    "code": "SI15",
    "category": "手太阳小肠经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 7 颈椎棘突下，后正中线旁开 2 寸</b>。",
    "locationText": "在背部，第 7 颈椎棘突下，后正中线旁开 2 寸。",
    "mnemonic": "肩中大椎旁二寸，宣肺解表利颈项",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、唾血",
      "肩背疼痛、颈项强急、视物不清"
    ]
  },
  {
    "id": "acu-tianchuang",
    "name": "天窗",
    "pinyin": "tiān chuāng",
    "code": "SI16",
    "category": "手太阳小肠经",
    "subCategory": "颈部",
    "locationHtml": "在颈部，<b>胸锁乳突肌后缘，横平喉结</b>。",
    "locationText": "在颈部，胸锁乳突肌后缘，横平喉结。",
    "mnemonic": "天窗平喉胸锁后，利咽开音通耳窍",
    "specialProperties": "",
    "indications": [
      "耳鸣、耳聋、咽喉肿痛、暴喑",
      "颈项强痛、瘰疬、瘿气"
    ]
  },
  {
    "id": "acu-tianrong",
    "name": "天容",
    "pinyin": "tiān róng",
    "code": "SI17",
    "category": "手太阳小肠经",
    "subCategory": "颈部",
    "locationHtml": "在颈部，<b>下颌角后方，胸锁乳突肌前缘凹陷中</b>。",
    "locationText": "在颈部，下颌角后方，胸锁乳突肌前缘凹陷中。",
    "mnemonic": "天容下颌角后陷，清热消肿化瘰疬",
    "specialProperties": "",
    "indications": [
      "耳鸣、耳聋、咽喉肿痛",
      "颈项强急、颊肿、瘰疬"
    ]
  },
  {
    "id": "acu-quanliao",
    "name": "颧髎",
    "pinyin": "quán liáo",
    "code": "SI18",
    "category": "手太阳小肠经",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>颧骨下缘，目外眦直下凹陷中</b>。",
    "locationText": "在面部，颧骨下缘，目外眦直下凹陷中。",
    "mnemonic": "颧髎外眦直下凹，祛风通络治面瘫",
    "specialProperties": "手少阳与太阳经交会穴",
    "indications": [
      "口眼㖞斜、眼睑瞤动、齿痛",
      "面痛、三叉神经痛、黄疸"
    ]
  },
  {
    "id": "acu-tinggong",
    "name": "听宫",
    "pinyin": "tīng gōng",
    "code": "SI19",
    "category": "手太阳小肠经",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>耳屏正中与下颌髁突之间的凹陷中</b>。微张口取穴。",
    "locationText": "在面部，耳屏正中与下颌髁突之间的凹陷中。微张口取穴。",
    "mnemonic": "听宫耳屏正中前，开窍聪耳止耳鸣",
    "specialProperties": "手足少阳与太阳经交会穴",
    "indications": [
      "耳鸣、耳聋、聤耳、中耳炎",
      "齿痛、癫狂、眩晕"
    ]
  },
  {
    "id": "acu-jingming",
    "name": "睛明",
    "pinyin": "jīng míng",
    "code": "BL1",
    "category": "足太阳膀胱经",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>目内眦角内上方 0.1 寸</b>。",
    "locationText": "在面部，目内眦角内上方 0.1 寸。",
    "mnemonic": "睛明内眦角上方，通络明目清迎风",
    "specialProperties": "交会穴",
    "indications": [
      "目赤肿痛、迎风流泪、夜盲、色盲、近视、白内障",
      "急性结膜炎、视神经萎缩"
    ]
  },
  {
    "id": "acu-cuanzhu",
    "name": "攒竹",
    "pinyin": "cuán zhú",
    "code": "BL2",
    "category": "足太阳膀胱经",
    "subCategory": "额部",
    "locationHtml": "在额部，<b>眉头凹陷中，额切迹处</b>。",
    "locationText": "在额部，眉头凹陷中，额切迹处。",
    "mnemonic": "攒竹眉头凹陷中，清热明目止头风",
    "specialProperties": "",
    "indications": [
      "头痛、眉棱骨痛、目眩",
      "目赤肿痛、近视、眼睑瞤动、面瘫",
      "呃逆（点按特效）"
    ]
  },
  {
    "id": "acu-meichong",
    "name": "眉冲",
    "pinyin": "méi chōng",
    "code": "BL3",
    "category": "足太阳膀胱经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>前发际上 0.5 寸</b>，神庭与头临泣连线中点。",
    "locationText": "在头部，前发际上 0.5 寸，神庭与头临泣连线中点。",
    "mnemonic": "眉冲发际半寸上，清头明目利鼻渊",
    "specialProperties": "",
    "indications": [
      "头痛、眩晕",
      "鼻塞、鼻衄、目视不明、癫痫"
    ]
  },
  {
    "id": "acu-qucha",
    "name": "曲差",
    "pinyin": "qū chā",
    "code": "BL4",
    "category": "足太阳膀胱经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>前发际上 0.5 寸，前正中线旁开 1.5 寸</b>。",
    "locationText": "在头部，前发际上 0.5 寸，前正中线旁开 1.5 寸。",
    "mnemonic": "曲差神庭旁寸半，通鼻明目止头风",
    "specialProperties": "",
    "indications": [
      "头痛、眩晕",
      "鼻塞、鼻衄、目视不明"
    ]
  },
  {
    "id": "acu-wuchu",
    "name": "五处",
    "pinyin": "wǔ chù",
    "code": "BL5",
    "category": "足太阳膀胱经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>前发际上 1 寸，前正中线旁开 1.5 寸</b>。",
    "locationText": "在头部，前发际上 1 寸，前正中线旁开 1.5 寸。",
    "mnemonic": "五处曲差上半寸，清热安神止惊痫",
    "specialProperties": "",
    "indications": [
      "头痛、头晕、目眩",
      "癫痫、小儿惊风、脊强"
    ]
  },
  {
    "id": "acu-chengguang",
    "name": "承光",
    "pinyin": "chéng guāng",
    "code": "BL6",
    "category": "足太阳膀胱经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>前发际上 2.5 寸，前正中线旁开 1.5 寸</b>。",
    "locationText": "在头部，前发际上 2.5 寸，前正中线旁开 1.5 寸。",
    "mnemonic": "承光五处上一五，祛风明目利头风",
    "specialProperties": "",
    "indications": [
      "头痛、眩晕",
      "目视不明、白内障、鼻塞"
    ]
  },
  {
    "id": "acu-tongtian",
    "name": "通天",
    "pinyin": "tōng tiān",
    "code": "BL7",
    "category": "足太阳膀胱经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>前发际上 4 寸，前正中线旁开 1.5 寸</b>。",
    "locationText": "在头部，前发际上 4 寸，前正中线旁开 1.5 寸。",
    "mnemonic": "通天承光上一五，通鼻开窍止头风",
    "specialProperties": "",
    "indications": [
      "头痛、眩晕、中风口㖞",
      "鼻塞、鼻衄、鼻渊、嗅觉减退"
    ]
  },
  {
    "id": "acu-luoque",
    "name": "络却",
    "pinyin": "luò què",
    "code": "BL8",
    "category": "足太阳膀胱经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>前发际上 5.5 寸，前正中线旁开 1.5 寸</b>。",
    "locationText": "在头部，前发际上 5.5 寸，前正中线旁开 1.5 寸。",
    "mnemonic": "络却通天上一五，清心明目利癫狂",
    "specialProperties": "",
    "indications": [
      "头晕、眩晕、耳鸣",
      "癫狂、精神失常、目翳"
    ]
  },
  {
    "id": "acu-yuzhen",
    "name": "玉枕",
    "pinyin": "yù zhěn",
    "code": "BL9",
    "category": "足太阳膀胱经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>横平枕外隆凸上缘，后正中线旁开 1.3 寸</b>。",
    "locationText": "在头部，横平枕外隆凸上缘，后正中线旁开 1.3 寸。",
    "mnemonic": "玉枕枕骨隆凸旁，清头明目利项强",
    "specialProperties": "",
    "indications": [
      "头痛、项强、目痛",
      "鼻塞、视物不清"
    ]
  },
  {
    "id": "acu-tianzhu",
    "name": "天柱",
    "pinyin": "tiān zhù",
    "code": "BL10",
    "category": "足太阳膀胱经",
    "subCategory": "颈后区",
    "locationHtml": "在颈后区，<b>横平第 2 颈椎棘突上际，斜方肌外缘凹陷中</b>。",
    "locationText": "在颈后区，横平第 2 颈椎棘突上际，斜方肌外缘凹陷中。",
    "mnemonic": "天柱发际斜方外，祛风明目解项强",
    "specialProperties": "",
    "indications": [
      "后头痛、项强、颈椎病",
      "目赤痛、视物不清、鼻塞",
      "癫狂、小儿惊风"
    ]
  },
  {
    "id": "acu-dazhu",
    "name": "大杼",
    "pinyin": "dà zhù",
    "code": "BL11",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 1 胸椎棘突下，后正中线旁开 1.5 寸</b>。",
    "locationText": "在背部，第 1 胸椎棘突下，后正中线旁开 1.5 寸。",
    "mnemonic": "大杼一椎旁寸半，八会骨会强筋骨",
    "specialProperties": "八会穴之骨会；手足太阳交会穴",
    "indications": [
      "咳嗽、气喘、发热",
      "颈项强痛、肩背痛、骨节酸痛",
      "落枕、骨质增生"
    ]
  },
  {
    "id": "acu-fengmen",
    "name": "风门",
    "pinyin": "fēng mén",
    "code": "BL12",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 2 胸椎棘突下，后正中线旁开 1.5 寸</b>。",
    "locationText": "在背部，第 2 胸椎棘突下，后正中线旁开 1.5 寸。",
    "mnemonic": "风门二椎旁寸半，宣肺散风御外邪",
    "specialProperties": "督脉与膀胱经交会穴",
    "indications": [
      "感冒、发热、咳嗽、气喘",
      "头痛、项强、肩背痛",
      "荨麻疹"
    ]
  },
  {
    "id": "acu-feishu",
    "name": "肺俞",
    "pinyin": "fèi shū",
    "code": "BL13",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 3 胸椎棘突下，后正中线旁开 1.5 寸</b>。",
    "locationText": "在背部，第 3 胸椎棘突下，后正中线旁开 1.5 寸。",
    "mnemonic": "肺俞三椎旁寸半，调补肺气清咳喘",
    "specialProperties": "肺之背俞穴",
    "indications": [
      "咳嗽、气喘、咯血、潮热、盗汗",
      "发热、胸闷、骨蒸",
      "皮肤瘙痒、风疹"
    ]
  },
  {
    "id": "acu-jueyinshu",
    "name": "厥阴俞",
    "pinyin": "jué yīn shū",
    "code": "BL14",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 4 胸椎棘突下，后正中线旁开 1.5 寸</b>。",
    "locationText": "在背部，第 4 胸椎棘突下，后正中线旁开 1.5 寸。",
    "mnemonic": "厥阴四椎旁寸半，宽胸和心止心痛",
    "specialProperties": "心包之背俞穴",
    "indications": [
      "心痛、心悸、胸闷",
      "咳嗽、气喘、呕吐",
      "神经衰弱"
    ]
  },
  {
    "id": "acu-xinshu",
    "name": "心俞",
    "pinyin": "xīn shū",
    "code": "BL15",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 5 胸椎棘突下，后正中线旁开 1.5 寸</b>。",
    "locationText": "在背部，第 5 胸椎棘突下，后正中线旁开 1.5 寸。",
    "mnemonic": "心俞五椎旁寸半，养心安神调健忘",
    "specialProperties": "心之背俞穴",
    "indications": [
      "心痛、惊悸、心慌、失眠、健忘、多梦、癫狂痫",
      "咳嗽、吐血、盗汗"
    ]
  },
  {
    "id": "acu-dushu",
    "name": "督俞",
    "pinyin": "dū shū",
    "code": "BL16",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 6 胸椎棘突下，后正中线旁开 1.5 寸</b>。",
    "locationText": "在背部，第 6 胸椎棘突下，后正中线旁开 1.5 寸。",
    "mnemonic": "督俞六椎旁寸半，理气宽胸止心痛",
    "specialProperties": "",
    "indications": [
      "心痛、胸闷、腹痛",
      "胃痛、呃逆、气喘"
    ]
  },
  {
    "id": "acu-geshu",
    "name": "膈俞",
    "pinyin": "gé shū",
    "code": "BL17",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 7 胸椎棘突下，后正中线旁开 1.5 寸</b>。",
    "locationText": "在背部，第 7 胸椎棘突下，后正中线旁开 1.5 寸。",
    "mnemonic": "膈俞七椎旁寸半，八会血会活血瘀",
    "specialProperties": "八会穴之血会",
    "indications": [
      "贫血、咯血、吐血、衄血、便血等各部出血",
      "胸痛、心痛、胃痛、呃逆、呕吐",
      "皮肤瘙痒、潮热、盗汗"
    ]
  },
  {
    "id": "acu-ganshu",
    "name": "肝俞",
    "pinyin": "gān shū",
    "code": "BL18",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 9 胸椎棘突下，后正中线旁开 1.5 寸</b>。",
    "locationText": "在背部，第 9 胸椎棘突下，后正中线旁开 1.5 寸。",
    "mnemonic": "肝俞九椎旁寸半，疏肝理气明眼目",
    "specialProperties": "肝之背俞穴",
    "indications": [
      "黄疸、胁痛、胆囊炎",
      "目赤、目翳、夜盲、视物昏花",
      "癫狂痫、中风、眩晕",
      "背痛、月经不调"
    ]
  },
  {
    "id": "acu-danshu",
    "name": "胆俞",
    "pinyin": "dǎn shū",
    "code": "BL19",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 10 胸椎棘突下，后正中线旁开 1.5 寸</b>。",
    "locationText": "在背部，第 10 胸椎棘突下，后正中线旁开 1.5 寸。",
    "mnemonic": "胆俞十椎旁寸半，利胆清热除黄疸",
    "specialProperties": "胆之背俞穴",
    "indications": [
      "黄疸、口苦、胁痛、胆囊炎",
      "惊悸、失眠",
      "肺痨、潮热"
    ]
  },
  {
    "id": "acu-pishu",
    "name": "脾俞",
    "pinyin": "pí shū",
    "code": "BL20",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 11 胸椎棘突下，后正中线旁开 1.5 寸</b>。",
    "locationText": "在背部，第 11 胸椎棘突下，后正中线旁开 1.5 寸。",
    "mnemonic": "脾俞十一椎旁半，健脾化湿调肠胃",
    "specialProperties": "脾之背俞穴",
    "indications": [
      "腹胀、便溏、泄泻、痢疾、纳呆、胃痛",
      "水肿、黄疸、出血证",
      "虚劳、贫血"
    ]
  },
  {
    "id": "acu-weishu",
    "name": "胃俞",
    "pinyin": "wèi shū",
    "code": "BL21",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 12 胸椎棘突下，后正中线旁开 1.5 寸</b>。",
    "locationText": "在背部，第 12 胸椎棘突下，后正中线旁开 1.5 寸。",
    "mnemonic": "胃俞十二椎旁半，和胃消食止呕逆",
    "specialProperties": "胃之背俞穴",
    "indications": [
      "胃痛、呕吐、反胃、腹胀、肠鸣",
      "小儿疳积、泄泻、痢疾"
    ]
  },
  {
    "id": "acu-sanjiaoshu",
    "name": "三焦俞",
    "pinyin": "sān jiāo shū",
    "code": "BL22",
    "category": "足太阳膀胱经",
    "subCategory": "腰部",
    "locationHtml": "在腰部，<b>第 1 腰椎棘突下，后正中线旁开 1.5 寸</b>。",
    "locationText": "在腰部，第 1 腰椎棘突下，后正中线旁开 1.5 寸。",
    "mnemonic": "三焦一腰椎旁半，通调水道利小便",
    "specialProperties": "三焦之背俞穴",
    "indications": [
      "腹胀、肠鸣、泄泻、痢疾",
      "水肿、小便不利",
      "腰背强痛"
    ]
  },
  {
    "id": "acu-shenshu",
    "name": "肾俞",
    "pinyin": "shèn shū",
    "code": "BL23",
    "category": "足太阳膀胱经",
    "subCategory": "腰部",
    "locationHtml": "在腰部，<b>第 2 腰椎棘突下，后正中线旁开 1.5 寸</b>。",
    "locationText": "在腰部，第 2 腰椎棘突下，后正中线旁开 1.5 寸。",
    "mnemonic": "肾俞二腰椎旁半，补肾壮阳益精髓",
    "specialProperties": "肾之背俞穴",
    "indications": [
      "头晕、耳鸣、耳聋、腰酸膝软、阳痿、早泄、遗精、不孕",
      "月经不调、带下",
      "水肿、遗尿、小便频数、消渴"
    ]
  },
  {
    "id": "acu-qihaishu",
    "name": "气海俞",
    "pinyin": "qì hǎi shū",
    "code": "BL24",
    "category": "足太阳膀胱经",
    "subCategory": "腰部",
    "locationHtml": "在腰部，<b>第 3 腰椎棘突下，后正中线旁开 1.5 寸</b>。",
    "locationText": "在腰部，第 3 腰椎棘突下，后正中线旁开 1.5 寸。",
    "mnemonic": "气海三腰椎旁半，强腰健肾调月经",
    "specialProperties": "",
    "indications": [
      "腰痛、下肢瘫痪",
      "月经不调、痛经",
      "肠鸣腹胀、痔疮"
    ]
  },
  {
    "id": "acu-dachangshu",
    "name": "大肠俞",
    "pinyin": "dà cháng shū",
    "code": "BL25",
    "category": "足太阳膀胱经",
    "subCategory": "腰部",
    "locationHtml": "在腰部，<b>第 4 腰椎棘突下，后正中线旁开 1.5 寸</b>。",
    "locationText": "在腰部，第 4 腰椎棘突下，后正中线旁开 1.5 寸。",
    "mnemonic": "大肠四腰椎旁半，调理肠道利便难",
    "specialProperties": "大肠之背俞穴",
    "indications": [
      "腹胀、腹泻、便秘、痢疾、便血",
      "腰痛、坐骨神经痛、下肢痿痹"
    ]
  },
  {
    "id": "acu-guanyuanshu",
    "name": "关元俞",
    "pinyin": "guān yuán shū",
    "code": "BL26",
    "category": "足太阳膀胱经",
    "subCategory": "腰部",
    "locationHtml": "在腰部，<b>第 5 腰椎棘突下，后正中线旁开 1.5 寸</b>。",
    "locationText": "在腰部，第 5 腰椎棘突下，后正中线旁开 1.5 寸。",
    "mnemonic": "关元五腰椎旁半，调经止带利膀胱",
    "specialProperties": "",
    "indications": [
      "腰痛、坐骨神经痛",
      "腹胀、腹泻、痢疾",
      "小便不利、遗尿"
    ]
  },
  {
    "id": "acu-xiaochangshu",
    "name": "小肠俞",
    "pinyin": "xiǎo cháng shū",
    "code": "BL27",
    "category": "足太阳膀胱经",
    "subCategory": "骶区",
    "locationHtml": "在骶区，<b>横平第 1 骶后孔，后正中线旁开 1.5 寸</b>。",
    "locationText": "在骶区，横平第 1 骶后孔，后正中线旁开 1.5 寸。",
    "mnemonic": "小肠一骶孔旁半，通利下焦调二便",
    "specialProperties": "小肠之背俞穴",
    "indications": [
      "小腹胀痛、泄泻、痢疾、便血",
      "小便不利、遗尿、白浊",
      "骶髂关节痛、带下"
    ]
  },
  {
    "id": "acu-pangguangshu",
    "name": "膀胱俞",
    "pinyin": "páng guāng shū",
    "code": "BL28",
    "category": "足太阳膀胱经",
    "subCategory": "骶区",
    "locationHtml": "在骶区，<b>横平第 2 骶后孔，后正中线旁开 1.5 寸</b>。",
    "locationText": "在骶区，横平第 2 骶后孔，后正中线旁开 1.5 寸。",
    "mnemonic": "膀胱二骶孔旁半，利尿通淋治腰痛",
    "specialProperties": "膀胱之背俞穴",
    "indications": [
      "小便不利、癃闭、遗尿、尿频、尿血",
      "腹痛、泄泻、便秘",
      "腰脊骶痛、坐骨神经痛"
    ]
  },
  {
    "id": "acu-zhonglushu",
    "name": "中膂俞",
    "pinyin": "zhōng lǚ shū",
    "code": "BL29",
    "category": "足太阳膀胱经",
    "subCategory": "骶区",
    "locationHtml": "在骶区，<b>横平第 3 骶后孔，后正中线旁开 1.5 寸</b>。",
    "locationText": "在骶区，横平第 3 骶后孔，后正中线旁开 1.5 寸。",
    "mnemonic": "中膂三骶孔旁半，温阳补肾止消渴",
    "specialProperties": "",
    "indications": [
      "腹泻、痢疾、疝气",
      "腰骶痛、坐骨神经痛",
      "消渴"
    ]
  },
  {
    "id": "acu-baihuanshu",
    "name": "白环俞",
    "pinyin": "bái huán shū",
    "code": "BL30",
    "category": "足太阳膀胱经",
    "subCategory": "骶区",
    "locationHtml": "在骶区，<b>横平第 4 骶后孔，后正中线旁开 1.5 寸</b>。",
    "locationText": "在骶区，横平第 4 骶后孔，后正中线旁开 1.5 寸。",
    "mnemonic": "白环四骶孔旁半，调经止带利下焦",
    "specialProperties": "",
    "indications": [
      "遗精、白浊、带下、经闭",
      "便秘、脱肛、疝气",
      "腰骶疼痛、下肢瘫痪"
    ]
  },
  {
    "id": "acu-shangliao",
    "name": "上髎",
    "pinyin": "shàng liáo",
    "code": "BL31",
    "category": "足太阳膀胱经",
    "subCategory": "骶区",
    "locationHtml": "在骶区，<b>正对第 1 骶后孔中</b>。",
    "locationText": "在骶区，正对第 1 骶后孔中。",
    "mnemonic": "上髎一骶后孔中，调理下焦止腰痛",
    "specialProperties": "",
    "indications": [
      "大小便不利、遗尿、便秘",
      "月经不调、带下、阴挺",
      "腰骶痛、坐骨神经痛"
    ]
  },
  {
    "id": "acu-ciliao",
    "name": "次髎",
    "pinyin": "cì liáo",
    "code": "BL32",
    "category": "足太阳膀胱经",
    "subCategory": "骶区",
    "locationHtml": "在骶区，<b>正对第 2 骶后孔中</b>。<br>简便取穴法：在髂后上棘下内方的骨空凹陷中。",
    "locationText": "在骶区，正对第 2 骶后孔中。简便取穴法：在髂后上棘下内方的骨空凹陷中。",
    "mnemonic": "次髎二骶后孔求，调经止痛治妇科",
    "specialProperties": "",
    "indications": [
      "痛经、月经不调、赤白带下、崩漏、滞产",
      "遗精、阳痿、疝气",
      "小便不利、遗尿",
      "腰骶痛、下肢瘫痪"
    ]
  },
  {
    "id": "acu-zhongliao",
    "name": "中髎",
    "pinyin": "zhōng liáo",
    "code": "BL33",
    "category": "足太阳膀胱经",
    "subCategory": "骶区",
    "locationHtml": "在骶区，<b>正对第 3 骶后孔中</b>。",
    "locationText": "在骶区，正对第 3 骶后孔中。",
    "mnemonic": "中髎三骶后孔中，温补下焦利便难",
    "specialProperties": "",
    "indications": [
      "小便不利、便秘、泄泻",
      "月经不调、带下",
      "腰骶冷痛"
    ]
  },
  {
    "id": "acu-xialiao",
    "name": "下髎",
    "pinyin": "xià liáo",
    "code": "BL34",
    "category": "足太阳膀胱经",
    "subCategory": "骶区",
    "locationHtml": "在骶区，<b>正对第 4 骶后孔中</b>。",
    "locationText": "在骶区，正对第 4 骶后孔中。",
    "mnemonic": "下髎四骶后孔中，通调便闭止痛经",
    "specialProperties": "",
    "indications": [
      "小腹痛、便秘、小便不利",
      "月经不调、痛经、带下",
      "腰骶痛"
    ]
  },
  {
    "id": "acu-huiyang",
    "name": "会阳",
    "pinyin": "huì yáng",
    "code": "BL35",
    "category": "足太阳膀胱经",
    "subCategory": "臀区",
    "locationHtml": "在臀区，<b>尾骨端旁开 0.5 寸</b>。",
    "locationText": "在臀区，尾骨端旁开 0.5 寸。",
    "mnemonic": "会阳尾骨端旁半，清热除湿利痔漏",
    "specialProperties": "",
    "indications": [
      "泄泻、痢疾、便血、痔疮",
      "阳痿、带下",
      "腰骶痛"
    ]
  },
  {
    "id": "acu-chengfu",
    "name": "承扶",
    "pinyin": "chéng fú",
    "code": "BL36",
    "category": "足太阳膀胱经",
    "subCategory": "股后区",
    "locationHtml": "在股后区，<b>臀沟（臀横纹）的中点</b>。",
    "locationText": "在股后区，臀沟（臀横纹）的中点。",
    "mnemonic": "承扶臀横纹正中，舒筋活络通坐骨",
    "specialProperties": "",
    "indications": [
      "腰骶臀部疼痛、坐骨神经痛、下肢瘫痪",
      "便秘、痔疾、小便不利"
    ]
  },
  {
    "id": "acu-yinmen",
    "name": "殷门",
    "pinyin": "yīn mén",
    "code": "BL37",
    "category": "足太阳膀胱经",
    "subCategory": "股后区",
    "locationHtml": "在股后区，<b>承扶与委中连线上，承扶下 6 寸</b>。",
    "locationText": "在股后区，承扶与委中连线上，承扶下 6 寸。",
    "mnemonic": "殷门承扶下六寸，通经活血利下肢",
    "specialProperties": "",
    "indications": [
      "腰痛、坐骨神经痛、下肢痿痹"
    ]
  },
  {
    "id": "acu-fuxi",
    "name": "浮郄",
    "pinyin": "fú xì",
    "code": "BL38",
    "category": "足太阳膀胱经",
    "subCategory": "膝后区",
    "locationHtml": "在膝后区，<b>委中上 1 寸，股二头肌腱内侧缘</b>。",
    "locationText": "在膝后区，委中上 1 寸，股二头肌腱内侧缘。",
    "mnemonic": "浮郄委中上一寸，通络利节止便秘",
    "specialProperties": "",
    "indications": [
      "便秘、急性胃肠炎",
      "膝关节痛、下肢瘫痪"
    ]
  },
  {
    "id": "acu-weiyang",
    "name": "委阳",
    "pinyin": "wěi yáng",
    "code": "BL39",
    "category": "足太阳膀胱经",
    "subCategory": "膝后区",
    "locationHtml": "在膝后区，<b>腘横纹上，股二头肌腱内侧缘</b>。",
    "locationText": "在膝后区，腘横纹上，股二头肌腱内侧缘。",
    "mnemonic": "委阳腘横外肌内，三焦下合利水湿",
    "specialProperties": "三焦下合穴",
    "indications": [
      "小便不利、水肿、遗尿",
      "腹满、腿足挛痛"
    ]
  },
  {
    "id": "acu-weizhong",
    "name": "委中",
    "pinyin": "wěi zhōng",
    "code": "BL40",
    "category": "足太阳膀胱经",
    "subCategory": "膝后区",
    "locationHtml": "在膝后区，<b>腘横纹中点</b>。",
    "locationText": "在膝后区，腘横纹中点。",
    "mnemonic": "腰背委中求，腘窝横纹正中央",
    "specialProperties": "合穴（属土）；膀胱下合穴；四总穴之一",
    "indications": [
      "腰背痛、下肢痿痹、坐骨神经痛",
      "腹痛、吐泻、急性胃肠炎",
      "中暑、发热、疔疮、丹毒",
      "小便不利、遗尿"
    ]
  },
  {
    "id": "acu-fufen",
    "name": "附分",
    "pinyin": "fù fēn",
    "code": "BL41",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 2 胸椎棘突下，后正中线旁开 3 寸</b>。",
    "locationText": "在背部，第 2 胸椎棘突下，后正中线旁开 3 寸。",
    "mnemonic": "附分二椎旁三寸，舒筋通络止肩背",
    "specialProperties": "",
    "indications": [
      "颈项强痛、肩背拘急、肘臂麻痛"
    ]
  },
  {
    "id": "acu-pohu",
    "name": "魄户",
    "pinyin": "pò hù",
    "code": "BL42",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 3 胸椎棘突下，后正中线旁开 3 寸</b>。",
    "locationText": "在背部，第 3 胸椎棘突下，后正中线旁开 3 寸。",
    "mnemonic": "魄户三椎旁三寸，宣肺理气止咳喘",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、肺痨、潮热",
      "肩背疼痛、颈项强急"
    ]
  },
  {
    "id": "acu-gaohuang",
    "name": "膏肓",
    "pinyin": "gāo huāng",
    "code": "BL43",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 4 胸椎棘突下，后正中线旁开 3 寸</b>。",
    "locationText": "在背部，第 4 胸椎棘突下，后正中线旁开 3 寸。",
    "mnemonic": "膏肓四椎旁三寸，补虚扶正疗百疾",
    "specialProperties": "强壮要穴",
    "indications": [
      "肺痨、咳嗽、气喘、咯血",
      "虚劳羸瘦、诸虚百损、自汗盗汗",
      "健忘、遗精、肩背痛"
    ]
  },
  {
    "id": "acu-shentang",
    "name": "神堂",
    "pinyin": "shén táng",
    "code": "BL44",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 5 胸椎棘突下，后正中线旁开 3 寸</b>。",
    "locationText": "在背部，第 5 胸椎棘突下，后正中线旁开 3 寸。",
    "mnemonic": "神堂五椎旁三寸，宽胸宁心止心痛",
    "specialProperties": "",
    "indications": [
      "心痛、惊悸、胸闷",
      "咳嗽、气喘、肩背痛"
    ]
  },
  {
    "id": "acu-yixi",
    "name": "譩譆",
    "pinyin": "yì xī",
    "code": "BL45",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 6 胸椎棘突下，后正中线旁开 3 寸</b>。",
    "locationText": "在背部，第 6 胸椎棘突下，后正中线旁开 3 寸。",
    "mnemonic": "譩譆六椎旁三寸，散风清热止疟疾",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、疟疾",
      "肩背疼痛、肋间神经痛"
    ]
  },
  {
    "id": "acu-geguan",
    "name": "gé guān",
    "pinyin": "gé guān",
    "code": "BL46",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 7 胸椎棘突下，后正中线旁开 3 寸</b>。",
    "locationText": "在背部，第 7 胸椎棘突下，后正中线旁开 3 寸。",
    "mnemonic": "膈关七椎旁三寸，宽胸利膈和胃气",
    "specialProperties": "",
    "indications": [
      "胸闷、呃逆、呕吐、反胃",
      "背痛、脊强"
    ]
  },
  {
    "id": "acu-hunmen",
    "name": "魂门",
    "pinyin": "hún mén",
    "code": "BL47",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 9 胸椎棘突下，后正中线旁开 3 寸</b>。",
    "locationText": "在背部，第 9 胸椎棘突下，后正中线旁开 3 寸。",
    "mnemonic": "魂门九椎旁三寸，疏肝理气调胸胁",
    "specialProperties": "",
    "indications": [
      "胸胁痛、消化不良、腹胀",
      "呕吐、泄泻、背痛"
    ]
  },
  {
    "id": "acu-yanggang",
    "name": "阳纲",
    "pinyin": "yáng gāng",
    "code": "BL48",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 10 胸椎棘突下，后正中线旁开 3 寸</b>。",
    "locationText": "在背部，第 10 胸椎棘突下，后正中线旁开 3 寸。",
    "mnemonic": "阳纲十椎旁三寸，利胆退黄调肠胃",
    "specialProperties": "",
    "indications": [
      "黄疸、消渴、腹痛、肠鸣",
      "泄泻、便秘"
    ]
  },
  {
    "id": "acu-yishe",
    "name": "意舍",
    "pinyin": "yì shè",
    "code": "BL49",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 11 胸椎棘突下，后正中线旁开 3 寸</b>。",
    "locationText": "在背部，第 11 胸椎棘突下，后正中线旁开 3 寸。",
    "mnemonic": "意舍十一椎旁三，健脾和胃消食积",
    "specialProperties": "",
    "indications": [
      "腹胀、肠鸣、呕吐、泄泻",
      "黄疸、消渴"
    ]
  },
  {
    "id": "acu-weicang",
    "name": "胃仓",
    "pinyin": "wèi cāng",
    "code": "BL50",
    "category": "足太阳膀胱经",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 12 胸椎棘突下，后正中线旁开 3 寸</b>。",
    "locationText": "在背部，第 12 胸椎棘突下，后正中线旁开 3 寸。",
    "mnemonic": "胃仓十二椎旁三，消积和胃止胃痛",
    "specialProperties": "",
    "indications": [
      "胃痛、腹胀、小儿食积",
      "便秘、背脊痛"
    ]
  },
  {
    "id": "acu-huangmen",
    "name": "肓门",
    "pinyin": "huāng mén",
    "code": "BL51",
    "category": "足太阳膀胱经",
    "subCategory": "腰部",
    "locationHtml": "在腰部，<b>第 1 腰椎棘突下，后正中线旁开 3 寸</b>。",
    "locationText": "在腰部，第 1 腰椎棘突下，后正中线旁开 3 寸。",
    "mnemonic": "肓门一腰椎旁三，理气化湿调痞块",
    "specialProperties": "",
    "indications": [
      "腹痛、便秘、痞块",
      "乳疾、妇人下腹痛"
    ]
  },
  {
    "id": "acu-zhishi",
    "name": "志室",
    "pinyin": "zhì shì",
    "code": "BL52",
    "category": "足太阳膀胱经",
    "subCategory": "腰部",
    "locationHtml": "在腰部，<b>第 2 腰椎棘突下，后正中线旁开 3 寸</b>。",
    "locationText": "在腰部，第 2 腰椎棘突下，后正中线旁开 3 寸。",
    "mnemonic": "志室二腰椎旁三，补肾涩精强腰膝",
    "specialProperties": "",
    "indications": [
      "遗精、阳痿、早泄",
      "小便不利、水肿",
      "腰脊强痛"
    ]
  },
  {
    "id": "acu-baohuang",
    "name": "胞肓",
    "pinyin": "bāo huāng",
    "code": "BL53",
    "category": "足太阳膀胱经",
    "subCategory": "臀区",
    "locationHtml": "在臀区，<b>平第 2 骶后孔，后正中线旁开 3 寸</b>。",
    "locationText": "在臀区，平第 2 骶后孔，后正中线旁开 3 寸。",
    "mnemonic": "胞肓二骶孔旁三，通利下焦利膀胱",
    "specialProperties": "",
    "indications": [
      "小便不利、遗尿、癃闭",
      "腰脊痛、坐骨神经痛、腹胀"
    ]
  },
  {
    "id": "acu-zhibian",
    "name": "秩边",
    "pinyin": "zhì biān",
    "code": "BL54",
    "category": "足太阳膀胱经",
    "subCategory": "臀区",
    "locationHtml": "在臀区，<b>平第 4 骶后孔，后正中线旁开 3 寸</b>。",
    "locationText": "在臀区，平第 4 骶后孔，后正中线旁开 3 寸。",
    "mnemonic": "秩边四骶孔旁三，通经利节消便闭",
    "specialProperties": "",
    "indications": [
      "腰骶痛、下肢瘫痪、坐骨神经痛",
      "小便不利、便秘、痔疾",
      "阴痛、带下"
    ]
  },
  {
    "id": "acu-heyang",
    "name": "合阳",
    "pinyin": "hé yáng",
    "code": "BL55",
    "category": "足太阳膀胱经",
    "subCategory": "小腿后区",
    "locationHtml": "在小腿后区，<b>委中与昆仑连线上，委中下 2 寸</b>。",
    "locationText": "在小腿后区，委中与昆仑连线上，委中下 2 寸。",
    "mnemonic": "合阳委中下二寸，调经止带通经络",
    "specialProperties": "",
    "indications": [
      "腰脊强痛、下肢痿痹",
      "崩漏、带下、疝气"
    ]
  },
  {
    "id": "acu-chengjin",
    "name": "承筋",
    "pinyin": "chéng jīn",
    "code": "BL56",
    "category": "足太阳膀胱经",
    "subCategory": "小腿后区",
    "locationHtml": "在小腿后区，<b>委中与昆仑连线上，腓肠肌两肌腹之间，委中下 5 寸</b>。",
    "locationText": "在小腿后区，委中与昆仑连线上，腓肠肌两肌腹之间，委中下 5 寸。",
    "mnemonic": "承筋小腿肚正中，舒筋活络通痔疾",
    "specialProperties": "",
    "indications": [
      "小腿痛、转筋、下肢麻痹",
      "痔疾、便秘、腰痛"
    ]
  },
  {
    "id": "acu-chengshan",
    "name": "承山",
    "pinyin": "chéng shān",
    "code": "BL57",
    "category": "足太阳膀胱经",
    "subCategory": "小腿后区",
    "locationHtml": "在小腿后区，<b>腓肠肌两肌腹下端凹陷尖角处</b>。<br>简便取穴法：伸直小腿或足跟上提时，腓肠肌肌腹下出现“人”字形凹陷处。",
    "locationText": "在小腿后区，腓肠肌两肌腹下端凹陷尖角处。简便取穴法：伸直小腿或足跟上提时，腓肠肌肌腹下出现“人”字形凹陷处。",
    "mnemonic": "承山腓肠肌腹尖，舒筋通络疗便痔",
    "specialProperties": "",
    "indications": [
      "腰腿疼痛、小腿转筋、下肢瘫痪",
      "便秘、痔疮、脱肛",
      "脚气、疝气"
    ]
  },
  {
    "id": "acu-feiyang",
    "name": "飞扬",
    "pinyin": "fēi yáng",
    "code": "BL58",
    "category": "足太阳膀胱经",
    "subCategory": "小腿后区",
    "locationHtml": "在小腿后区，<b>昆仑直上 7 寸，承山外下方 1 寸</b>。",
    "locationText": "在小腿后区，昆仑直上 7 寸，承山外下方 1 寸。",
    "mnemonic": "飞扬昆仑上七寸，膀胱络穴解外邪",
    "specialProperties": "络穴",
    "indications": [
      "头痛、目眩、鼻塞、衄血",
      "腰腿疼痛、下肢瘫痪",
      "痔疾、癫痫"
    ]
  },
  {
    "id": "acu-fuyang",
    "name": "跗阳",
    "pinyin": "fū yáng",
    "code": "BL59",
    "category": "足太阳膀胱经",
    "subCategory": "小腿后区",
    "locationHtml": "在小腿后区，<b>昆仑直上 3 寸，腓骨后缘</b>。",
    "locationText": "在小腿后区，昆仑直上 3 寸，腓骨后缘。",
    "mnemonic": "跗阳昆仑上三寸，阳跷郄穴止腰疼",
    "specialProperties": "阳跷脉之郄穴",
    "indications": [
      "头痛、头重、项痛",
      "腰骶疼痛、下肢痿痹、外踝肿痛"
    ]
  },
  {
    "id": "acu-kunlun",
    "name": "昆仑",
    "pinyin": "kūn lún",
    "code": "BL60",
    "category": "足太阳膀胱经",
    "subCategory": "踝区",
    "locationHtml": "在踝区，<b>外踝尖与跟腱之间的凹陷处</b>。",
    "locationText": "在踝区，外踝尖与跟腱之间的凹陷处。",
    "mnemonic": "昆仑外踝后陷中，经火舒筋清头热",
    "specialProperties": "经穴（属火）",
    "indications": [
      "后头痛、项强、眩晕、目痛、衄血",
      "腰骶痛、足跟痛、坐骨神经痛",
      "滞产（孕妇慎用）、癫痫"
    ]
  },
  {
    "id": "acu-pucan",
    "name": "仆参",
    "pinyin": "pú cān",
    "code": "BL61",
    "category": "足太阳膀胱经",
    "subCategory": "足外侧",
    "locationHtml": "在跟骨外侧，<b>昆仑直下，赤白肉际处</b>。",
    "locationText": "在跟骨外侧，昆仑直下，赤白肉际处。",
    "mnemonic": "仆参昆仑直下方，舒筋活络止跟痛",
    "specialProperties": "",
    "indications": [
      "足跟痛、足痿无力",
      "小儿惊风、癫痫"
    ]
  },
  {
    "id": "acu-shenmai",
    "name": "申脉",
    "pinyin": "shēn mài",
    "code": "BL62",
    "category": "足太阳膀胱经",
    "subCategory": "踝区",
    "locationHtml": "在踝区，<b>外踝下缘正下方凹陷中</b>。",
    "locationText": "在踝区，外踝下缘正下方凹陷中。",
    "mnemonic": "申脉外踝正下方，八脉交会阳跷通",
    "specialProperties": "八脉交会穴（通阳跷脉）",
    "indications": [
      "失眠、头痛、眩晕、癫狂痫",
      "项强、腰腿痛、目赤痛",
      "踝关节痛"
    ]
  },
  {
    "id": "acu-jinmen",
    "name": "金门",
    "pinyin": "jīn mén",
    "code": "BL63",
    "category": "足太阳膀胱经",
    "subCategory": "足外侧",
    "locationHtml": "在足外侧，<b>外踝前下方，骰骨下缘凹陷中</b>。",
    "locationText": "在足外侧，外踝前下方，骰骨下缘凹陷中。",
    "mnemonic": "金门外踝前下方，郄穴急安惊痫搐",
    "specialProperties": "郄穴",
    "indications": [
      "头痛、癫痫、小儿惊风",
      "腰痛、下肢痹痛、外踝痛"
    ]
  },
  {
    "id": "acu-jinggu",
    "name": "京骨",
    "pinyin": "jīng gǔ",
    "code": "BL64",
    "category": "足太阳膀胱经",
    "subCategory": "足外侧",
    "locationHtml": "在足外侧，<b>第 5 跖骨粗隆下方赤白肉际处</b>。",
    "locationText": "在足外侧，第 5 跖骨粗隆下方赤白肉际处。",
    "mnemonic": "京骨五跖粗隆下，原穴清脑定惊风",
    "specialProperties": "原穴",
    "indications": [
      "头痛、项强、目翳",
      "癫痫、惊狂",
      "腰腿痛、足背肿痛"
    ]
  },
  {
    "id": "acu-shugu",
    "name": "束骨",
    "pinyin": "shù gǔ",
    "code": "BL65",
    "category": "足太阳膀胱经",
    "subCategory": "足外侧",
    "locationHtml": "在足外侧，<b>第 5 跖趾关节近端赤白肉际凹陷中</b>。",
    "locationText": "在足外侧，第 5 跖趾关节近端赤白肉际凹陷中。",
    "mnemonic": "束骨五跖关节后，输木通经利头项",
    "specialProperties": "输穴（属木）",
    "indications": [
      "头痛、项强、目赤肿痛",
      "癫狂、惊风",
      "腰腿痛、下肢挛急"
    ]
  },
  {
    "id": "acu-zutonggu",
    "name": "足通谷",
    "pinyin": "zú tōng gǔ",
    "code": "BL66",
    "category": "足太阳膀胱经",
    "subCategory": "足外侧",
    "locationHtml": "在足外侧，<b>第 5 跖趾关节远端赤白肉际凹陷中</b>。",
    "locationText": "在足外侧，第 5 跖趾关节远端赤白肉际凹陷中。",
    "mnemonic": "足通谷在五趾前，荥水清热解项强",
    "specialProperties": "荥穴（属水）",
    "indications": [
      "头痛、项强、眩晕",
      "鼻衄、目翳",
      "消化不良"
    ]
  },
  {
    "id": "acu-zhiyin",
    "name": "至阴",
    "pinyin": "zhì yīn",
    "code": "BL67",
    "category": "足太阳膀胱经",
    "subCategory": "足趾",
    "locationHtml": "在足趾，<b>足小趾末节外侧，趾甲根角侧上方 0.1 寸</b>。",
    "locationText": "在足趾，足小趾末节外侧，趾甲根角侧上方 0.1 寸。",
    "mnemonic": "至阴小趾外甲角，井金矫胎利顺产",
    "specialProperties": "井穴（属金）",
    "indications": [
      "胎位不正、滞产（艾灸特效）",
      "头痛、目痛、鼻塞、鼻衄",
      "热病、小便不利"
    ]
  },
  {
    "id": "acu-yongquan",
    "name": "涌泉",
    "pinyin": "yǒng quán",
    "code": "KI1",
    "category": "足少阴肾经",
    "subCategory": "足底",
    "locationHtml": "在足底部，<b>卷足时足前部凹陷处</b>，约当足底第 2、3 趾缝纹头端与足跟连线的前 1/3 折点。",
    "locationText": "在足底部，卷足时足前部凹陷处，约当足底第 2、3 趾缝纹头端与足跟连线的前 1/3 折点。",
    "mnemonic": "涌泉足底前凹中，井木回阳救逆绝",
    "specialProperties": "井穴（属木）",
    "indications": [
      "昏迷、中风、厥证、癫痫、小儿惊风、休克",
      "头顶痛、眩晕、目眩、失眠、神经衰弱",
      "咯血、咽喉肿痛、失音",
      "小便不利、大便难、足心热"
    ]
  },
  {
    "id": "acu-rangu",
    "name": "然谷",
    "pinyin": "rán gǔ",
    "code": "KI2",
    "category": "足少阴肾经",
    "subCategory": "足内侧",
    "locationHtml": "在足内侧，<b>足舟骨粗隆下方赤白肉际凹陷中</b>。",
    "locationText": "在足内侧，足舟骨粗隆下方赤白肉际凹陷中。",
    "mnemonic": "然谷舟骨粗隆下，荥火滋阴清肾热",
    "specialProperties": "荥穴（属火）",
    "indications": [
      "月经不调、带下、阴挺、遗精、阳痿",
      "咽喉肿痛、咳血、消渴",
      "小儿脐风、足跗痛"
    ]
  },
  {
    "id": "acu-taixi",
    "name": "太溪",
    "pinyin": "tài xī",
    "code": "KI3",
    "category": "足少阴肾经",
    "subCategory": "踝区",
    "locationHtml": "在踝区，<b>内踝尖与跟腱之间的凹陷中</b>。",
    "locationText": "在踝区，内踝尖与跟腱之间的凹陷中。",
    "mnemonic": "太溪内踝跟腱间，输原滋肾培元气",
    "specialProperties": "输穴（属土）；原穴",
    "indications": [
      "头痛、眩晕、耳鸣、耳聋、咽喉肿痛、齿痛",
      "失眠、健忘、遗精、阳痿、月经不调",
      "消渴、小便频数、便秘",
      "腰痛、足跟痛、足冷"
    ]
  },
  {
    "id": "acu-dazhong",
    "name": "大钟",
    "pinyin": "dà zhōng",
    "code": "KI4",
    "category": "足少阴肾经",
    "subCategory": "足内侧",
    "locationHtml": "在足内侧，<b>内踝后下方，跟骨上缘，跟腱附着部前缘凹陷中</b>。",
    "locationText": "在足内侧，内踝后下方，跟骨上缘，跟腱附着部前缘凹陷中。",
    "mnemonic": "大钟太溪下一寸，肾经络穴通痴呆",
    "specialProperties": "络穴",
    "indications": [
      "痴呆、健忘、嗜卧",
      "咳血、气喘",
      "遗尿、小便淋沥",
      "腰脊强痛、足跟痛"
    ]
  },
  {
    "id": "acu-shuiquan",
    "name": "水泉",
    "pinyin": "shuǐ quán",
    "code": "KI5",
    "category": "足少阴肾经",
    "subCategory": "足内侧",
    "locationHtml": "在足内侧，<b>太溪直下 1 寸，跟骨结节内侧凹陷中</b>。",
    "locationText": "在足内侧，太溪直下 1 寸，跟骨结节内侧凹陷中。",
    "mnemonic": "水泉太溪直下一，郄穴调经止痛经",
    "specialProperties": "郄穴",
    "indications": [
      "月经不调、痛经、经闭",
      "小便不利、小便痛",
      "足跟痛"
    ]
  },
  {
    "id": "acu-zhaohai",
    "name": "照海",
    "pinyin": "zhào hǎi",
    "code": "KI6",
    "category": "足少阴肾经",
    "subCategory": "踝区",
    "locationHtml": "在踝区，<b>内踝下缘正下方凹陷中</b>。",
    "locationText": "在踝区，内踝下缘正下方凹陷中。",
    "mnemonic": "照海内踝正下方，八脉阴跷清咽喉",
    "specialProperties": "八脉交会穴（通阴跷脉）",
    "indications": [
      "咽喉干燥、咽痛、失音、梅核气",
      "失眠、惊恐、癫痫",
      "月经不调、痛经、赤白带下",
      "小便频数、癃闭、便秘"
    ]
  },
  {
    "id": "acu-fuliu",
    "name": "复溜",
    "pinyin": "fù liū",
    "code": "KI7",
    "category": "足少阴肾经",
    "subCategory": "小腿内侧",
    "locationHtml": "在小腿内侧，<b>太溪直上 2 寸，跟腱的前方</b>。",
    "locationText": "在小腿内侧，太溪直上 2 寸，跟腱的前方。",
    "mnemonic": "复溜太溪上二寸，经金利水调汗液",
    "specialProperties": "经穴（属金）",
    "indications": [
      "水肿、小便不利、腹胀、泄泻",
      "盗汗、无汗或多汗",
      "腰脊强痛、下肢痿痹"
    ]
  },
  {
    "id": "acu-jiaoxin",
    "name": "交信",
    "pinyin": "jiāo xìn",
    "code": "KI8",
    "category": "足少阴肾经",
    "subCategory": "小腿内侧",
    "locationHtml": "在小腿内侧，<b>太溪直上 2 寸，胫骨内侧缘后方</b>。",
    "locationText": "在小腿内侧，太溪直上 2 寸，胫骨内侧缘后方。",
    "mnemonic": "交信复溜前五分，阴跷郄穴调经血",
    "specialProperties": "阴跷脉之郄穴",
    "indications": [
      "月经不调、崩漏、赤白带下",
      "阴挺、疝气",
      "腹痛、腹泻、便秘"
    ]
  },
  {
    "id": "acu-zhubin",
    "name": "筑宾",
    "pinyin": "zhù bīn",
    "code": "KI9",
    "category": "足少阴肾经",
    "subCategory": "小腿内侧",
    "locationHtml": "在小腿内侧，<b>太溪直上 5 寸，腓肠肌肌腹下端内侧</b>。",
    "locationText": "在小腿内侧，太溪直上 5 寸，腓肠肌肌腹下端内侧。",
    "mnemonic": "筑宾太溪上五寸，阴维郄穴解毒功",
    "specialProperties": "阴维脉之郄穴",
    "indications": [
      "癫狂痫证、抑郁、失眠",
      "疝气、小腹痛",
      "解毒（药毒、酒毒、梅毒）"
    ]
  },
  {
    "id": "acu-yingu",
    "name": "阴谷",
    "pinyin": "yīn gǔ",
    "code": "KI10",
    "category": "足少阴肾经",
    "subCategory": "膝后区",
    "locationHtml": "在膝后区，<b>腘横纹上，半腱肌肌腱与半膜肌肌腱之间</b>。",
    "locationText": "在膝后区，腘横纹上，半腱肌肌腱与半膜肌肌腱之间。",
    "mnemonic": "阴谷腘横内侧陷，合水滋阴通下焦",
    "specialProperties": "合穴（属水）",
    "indications": [
      "阳痿、遗精、崩漏、带下",
      "小便不利、尿道炎、阴囊湿疹",
      "膝关节痛、下肢瘫痪"
    ]
  },
  {
    "id": "acu-henggu",
    "name": "横骨",
    "pinyin": "héng gǔ",
    "code": "KI11",
    "category": "足少阴肾经",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>脐中下 5 寸，前正中线旁开 0.5 寸</b>。",
    "locationText": "在下腹部，脐中下 5 寸，前正中线旁开 0.5 寸。",
    "mnemonic": "横骨曲骨旁五分，利尿固精调生殖",
    "specialProperties": "",
    "indications": [
      "遗精、阳痿、早泄、遗尿",
      "小便不利、疝气",
      "少腹痛"
    ]
  },
  {
    "id": "acu-dahe",
    "name": "大赫",
    "pinyin": "dà hè",
    "code": "KI12",
    "category": "足少阴肾经",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>脐中下 4 寸，前正中线旁开 0.5 寸</b>。",
    "locationText": "在下腹部，脐中下 4 寸，前正中线旁开 0.5 寸。",
    "mnemonic": "大赫中极旁五分，补肾助阳调带下",
    "specialProperties": "",
    "indications": [
      "遗精、早泄、阳痿",
      "带下、月经不调、阴挺、不孕"
    ]
  },
  {
    "id": "acu-qixue",
    "name": "气穴",
    "pinyin": "qì xué",
    "code": "KI13",
    "category": "足少阴肾经",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>脐中下 3 寸，前正中线旁开 0.5 寸</b>。",
    "locationText": "在下腹部，脐中下 3 寸，前正中线旁开 0.5 寸。",
    "mnemonic": "气穴关元旁五分，调经利水止泄泻",
    "specialProperties": "",
    "indications": [
      "月经不调、痛经、带下、经闭",
      "小便不利、泄泻、痢疾"
    ]
  },
  {
    "id": "acu-siman",
    "name": "四满",
    "pinyin": "sì mǎn",
    "code": "KI14",
    "category": "足少阴肾经",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>脐中下 2 寸，前正中线旁开 0.5 寸</b>。",
    "locationText": "在下腹部，脐中下 2 寸，前正中线旁开 0.5 寸。",
    "mnemonic": "四满石门旁五分，理气通滞消腹胀",
    "specialProperties": "",
    "indications": [
      "月经不调、崩漏、带下",
      "腹痛、腹胀、便秘、水肿"
    ]
  },
  {
    "id": "acu-zhongzhu-ki",
    "name": "中注",
    "pinyin": "zhōng zhù",
    "code": "KI15",
    "category": "足少阴肾经",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>脐中下 1 寸，前正中线旁开 0.5 寸</b>。",
    "locationText": "在下腹部，脐中下 1 寸，前正中线旁开 0.5 寸。",
    "mnemonic": "中注阴交旁五分，调经止痛利大便",
    "specialProperties": "",
    "indications": [
      "月经不调、腹痛、便秘",
      "腰腹痛、下利"
    ]
  },
  {
    "id": "acu-huangshu",
    "name": "肓俞",
    "pinyin": "huāng shū",
    "code": "KI16",
    "category": "足少阴肾经",
    "subCategory": "中腹部",
    "locationHtml": "在腹部，<b>横平脐中，前正中线旁开 0.5 寸</b>。",
    "locationText": "在腹部，横平脐中，前正中线旁开 0.5 寸。",
    "mnemonic": "肓俞平脐旁半寸，调理肠胃利气机",
    "specialProperties": "",
    "indications": [
      "腹痛、腹胀、呕吐、泄泻、便秘",
      "疝气、月经不调"
    ]
  },
  {
    "id": "acu-shangqu",
    "name": "商曲",
    "pinyin": "shāng qū",
    "code": "KI17",
    "category": "足少阴肾经",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>脐中上 2 寸，前正中线旁开 0.5 寸</b>。",
    "locationText": "在上腹部，脐中上 2 寸，前正中线旁开 0.5 寸。",
    "mnemonic": "商曲下脘旁五分，健脾和中消食积",
    "specialProperties": "",
    "indications": [
      "胃痛、腹胀、腹痛、食不化",
      "便秘、泄泻"
    ]
  },
  {
    "id": "acu-shiguan",
    "name": "石关",
    "pinyin": "shí guān",
    "code": "KI18",
    "category": "足少阴肾经",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>脐中上 3 寸，前正中线旁开 0.5 寸</b>。",
    "locationText": "在上腹部，脐中上 3 寸，前正中线旁开 0.5 寸。",
    "mnemonic": "石关建里旁五分，通关降逆消食滞",
    "specialProperties": "",
    "indications": [
      "胃痛、呕吐、呃逆、腹痛",
      "便秘、不孕"
    ]
  },
  {
    "id": "acu-yindu",
    "name": "阴都",
    "pinyin": "yīn dū",
    "code": "KI19",
    "category": "足少阴肾经",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>脐中上 4 寸，前正中线旁开 0.5 寸</b>。",
    "locationText": "在上腹部，脐中上 4 寸，前正中线旁开 0.5 寸。",
    "mnemonic": "阴都中脘旁五分，降逆止呃和胃气",
    "specialProperties": "",
    "indications": [
      "胃痛、腹胀、腹痛、呕吐",
      "呃逆、疟疾"
    ]
  },
  {
    "id": "acu-futonggu",
    "name": "腹通谷",
    "pinyin": "fù tōng gǔ",
    "code": "KI20",
    "category": "足少阴肾经",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>脐中上 5 寸，前正中线旁开 0.5 寸</b>。",
    "locationText": "在上腹部，脐中上 5 寸，前正中线旁开 0.5 寸。",
    "mnemonic": "腹通上脘旁五分，消胀止呃利膈宽",
    "specialProperties": "",
    "indications": [
      "胃痛、呕吐、腹胀",
      "消化不良、心悸"
    ]
  },
  {
    "id": "acu-youmen",
    "name": "幽门",
    "pinyin": "yōu mén",
    "code": "KI21",
    "category": "足少阴肾经",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>脐中上 6 寸，前正中线旁开 0.5 寸</b>。",
    "locationText": "在上腹部，脐中上 6 寸，前正中线旁开 0.5 寸。",
    "mnemonic": "幽门巨阙旁五分，开胃降逆止呕吐",
    "specialProperties": "",
    "indications": [
      "胃痛、呕吐、反胃、吐酸",
      "腹胀、泄泻"
    ]
  },
  {
    "id": "acu-bulang",
    "name": "步廊",
    "pinyin": "bù láng",
    "code": "KI22",
    "category": "足少阴肾经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>第 5 肋间隙，前正中线旁开 2 寸</b>。",
    "locationText": "在胸部，第 5 肋间隙，前正中线旁开 2 寸。",
    "mnemonic": "步廊五肋旁开二，宽胸降气止咳喘",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、胸胁胀满",
      "呕吐、食欲不振"
    ]
  },
  {
    "id": "acu-shenfeng",
    "name": "神封",
    "pinyin": "shén fēng",
    "code": "KI23",
    "category": "足少阴肾经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>第 4 肋间隙，前正中线旁开 2 寸</b>。",
    "locationText": "在胸部，第 4 肋间隙，前正中线旁开 2 寸。",
    "mnemonic": "神封四肋旁开二，宁心止咳利乳痈",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、胸胁胀痛",
      "乳痈、心悸"
    ]
  },
  {
    "id": "acu-lingxu",
    "name": "灵墟",
    "pinyin": "líng xū",
    "code": "KI24",
    "category": "足少阴肾经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>第 3 肋间隙，前正中线旁开 2 寸</b>。",
    "locationText": "在胸部，第 3 肋间隙，前正中线旁开 2 寸。",
    "mnemonic": "灵墟三肋旁开二，宣肺定喘利胸膈",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、胸胁胀痛",
      "乳痈、呕吐"
    ]
  },
  {
    "id": "acu-shencang",
    "name": "神藏",
    "pinyin": "shén cáng",
    "code": "KI25",
    "category": "足少阴肾经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>第 2 肋间隙，前正中线旁开 2 寸</b>。",
    "locationText": "在胸部，第 2 肋间隙，前正中线旁开 2 寸。",
    "mnemonic": "神藏二肋旁开二，理气宽胸止心烦",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、胸痛",
      "烦满、呕吐"
    ]
  },
  {
    "id": "acu-yuzhong",
    "name": "彧中",
    "pinyin": "yù zhōng",
    "code": "KI26",
    "category": "足少阴肾经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>第 1 肋间隙，前正中线旁开 2 寸</b>。",
    "locationText": "在胸部，第 1 肋间隙，前正中线旁开 2 寸。",
    "mnemonic": "彧中一肋旁开二，宣畅肺气降咳逆",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、咳唾脓血",
      "胸胁胀痛"
    ]
  },
  {
    "id": "acu-shufu",
    "name": "俞府",
    "pinyin": "shū fǔ",
    "code": "KI27",
    "category": "足少阴肾经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>锁骨下缘，前正中线旁开 2 寸</b>。",
    "locationText": "在胸部，锁骨下缘，前正中线旁开 2 寸。",
    "mnemonic": "俞府锁骨下缘旁，开二寸调肾肺气",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、胸痛",
      "呕吐、食不下"
    ]
  },
  {
    "id": "acu-tianchi",
    "name": "天池",
    "pinyin": "tiān chí",
    "code": "PC1",
    "category": "手厥阴心包经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>第 4 肋间隙，乳头外侧 1 寸</b>，前正中线旁开 5 寸。",
    "locationText": "在胸部，第 4 肋间隙，乳头外侧 1 寸，前正中线旁开 5 寸。",
    "mnemonic": "天池乳外一寸寻，宽胸理气化痰核",
    "specialProperties": "",
    "indications": [
      "胸闷、胸痛、气喘、咳嗽",
      "乳痈、产后少乳、瘰疬",
      "胁肋疼痛、腋下肿痛"
    ]
  },
  {
    "id": "acu-tianquan",
    "name": "天泉",
    "pinyin": "tiān quán",
    "code": "PC2",
    "category": "手厥阴心包经",
    "subCategory": "臂前区",
    "locationHtml": "在臂前区，<b>腋前纹头下 2 寸</b>，肱二头肌的长、短头之间。",
    "locationText": "在臂前区，腋前纹头下 2 寸，肱二头肌的长、短头之间。",
    "mnemonic": "天泉腋下二寸求，活血通经止心痛",
    "specialProperties": "",
    "indications": [
      "心痛、胸闷、气短",
      "咳嗽、胸胁胀痛",
      "臂痛、上肢不遂"
    ]
  },
  {
    "id": "acu-quze",
    "name": "曲泽",
    "pinyin": "qū zé",
    "code": "PC3",
    "category": "手厥阴心包经",
    "subCategory": "肘前区",
    "locationHtml": "在肘前区，<b>肘横纹上，肱二头肌腱尺侧缘凹陷中</b>。",
    "locationText": "在肘前区，肘横纹上，肱二头肌腱尺侧缘凹陷中。",
    "mnemonic": "曲泽肘内尺侧陷，合水清心止呕热",
    "specialProperties": "合穴（属水）",
    "indications": [
      "心痛、心悸、善惊",
      "呕吐、泄泻、热病、中暑",
      "肘臂挛痛、手臂颤抖"
    ]
  },
  {
    "id": "acu-ximen",
    "name": "郄门",
    "pinyin": "xì mén",
    "code": "PC4",
    "category": "手厥阴心包经",
    "subCategory": "前臂前区",
    "locationHtml": "在前臂前区，<b>腕掌侧远端横纹上 5 寸</b>，掌长肌腱与桡侧腕屈肌腱之间。",
    "locationText": "在前臂前区，腕掌侧远端横纹上 5 寸，掌长肌腱与桡侧腕屈肌腱之间。",
    "mnemonic": "郄门掌后五寸寻，郄穴急安急性痛",
    "specialProperties": "郄穴",
    "indications": [
      "心痛、心律失常、心绞痛、心悸",
      "咯血、吐血、衄血",
      "癫痫、癔病、胸痛"
    ]
  },
  {
    "id": "acu-jianshi",
    "name": "间使",
    "pinyin": "jiān shǐ",
    "code": "PC5",
    "category": "手厥阴心包经",
    "subCategory": "前臂前区",
    "locationHtml": "在前臂前区，<b>腕掌侧远端横纹上 3 寸</b>，掌长肌腱与桡侧腕屈肌腱之间。",
    "locationText": "在前臂前区，腕掌侧远端横纹上 3 寸，掌长肌腱与桡侧腕屈肌腱之间。",
    "mnemonic": "间使大陵上三寸，经金除痰治疟狂",
    "specialProperties": "经穴（属金）",
    "indications": [
      "心痛、心悸",
      "胃痛、呕吐、呃逆",
      "疟疾、癫狂痫",
      "热病、肘臂痛"
    ]
  },
  {
    "id": "acu-neiguan",
    "name": "内关",
    "pinyin": "nèi guān",
    "code": "PC6",
    "category": "手厥阴心包经",
    "subCategory": "前臂前区",
    "locationHtml": "在前臂前区，<b>腕掌侧远端横纹上 2 寸</b>，掌长肌腱与桡侧腕屈肌腱之间。",
    "locationText": "在前臂前区，腕掌侧远端横纹上 2 寸，掌长肌腱与桡侧腕屈肌腱之间。",
    "mnemonic": "心胸寻内关，掌后二寸两筋间",
    "specialProperties": "络穴；八脉交会穴（通阴维脉）；四总穴之一",
    "indications": [
      "心痛、胸闷、心悸、心律失常、失眠、健忘",
      "胃痛、呕吐、呃逆、恶心、晕车、晕船",
      "癫痫、精神分裂症、中风",
      "偏头痛、热病、肘臂挛痛"
    ]
  },
  {
    "id": "acu-daling",
    "name": "大陵",
    "pinyin": "dà líng",
    "code": "PC7",
    "category": "手厥阴心包经",
    "subCategory": "腕前区",
    "locationHtml": "在腕前区，<b>腕掌侧远端横纹中点</b>，掌长肌腱与桡侧腕屈肌腱之间。",
    "locationText": "在腕前区，腕掌侧远端横纹中点，掌长肌腱与桡侧腕屈肌腱之间。",
    "mnemonic": "大陵掌后横纹中，输原泻心定神癫",
    "specialProperties": "输穴（属土）；原穴",
    "indications": [
      "心痛、心悸、心烦、失眠",
      "癫狂、惊悸、精神失常",
      "胃痛、呕吐、口臭",
      "腕管综合征、手腕疼痛"
    ]
  },
  {
    "id": "acu-laogong",
    "name": "劳宫",
    "pinyin": "láo gōng",
    "code": "PC8",
    "category": "手厥阴心包经",
    "subCategory": "手掌区",
    "locationHtml": "在手掌区，<b>横平第 3 掌指关节近端</b>，第 2、3 掌骨之间。<br>简便取穴法：微屈指握拳，中指尖所点处是穴。",
    "locationText": "在手掌区，横平第 3 掌指关节近端，第 2、3 掌骨之间。简便取穴法：微屈指握拳，中指尖所点处是穴。",
    "mnemonic": "劳宫握拳中指尖，荥火清心开窍闭",
    "specialProperties": "荥穴（属火）",
    "indications": [
      "中风昏迷、中暑、热病烦渴、癫狂痫",
      "心痛、烦闷",
      "口疮、口臭、齿龈肿痛",
      "掌心发热、手颤"
    ]
  },
  {
    "id": "acu-zhongchong",
    "name": "中冲",
    "pinyin": "zhōng chōng",
    "code": "PC9",
    "category": "手厥阴心包经",
    "subCategory": "手指部",
    "locationHtml": "在手指，<b>中指末端最高点</b>（或中指末节桡侧，指甲根角侧上方 0.1 寸）。",
    "locationText": "在手指，中指末端最高点（或中指末节桡侧，指甲根角侧上方 0.1 寸）。",
    "mnemonic": "中冲中指尖端求，井木回阳苏厥逆",
    "specialProperties": "井穴（属木）",
    "indications": [
      "中风昏迷、舌强不语、中暑、晕厥、休克",
      "热病、小儿惊风",
      "心痛、心烦"
    ]
  },
  {
    "id": "acu-guanchong",
    "name": "关冲",
    "pinyin": "guān chōng",
    "code": "TE1",
    "category": "手少阳三焦经",
    "subCategory": "手指部",
    "locationHtml": "在手指，<b>第 4 指末节尺侧</b>，指甲根角侧上方 <b>0.1 寸</b>。",
    "locationText": "在手指，第 4 指末节尺侧，指甲根角侧上方 0.1 寸。",
    "mnemonic": "关冲无名尺甲角，井金散火利咽喉",
    "specialProperties": "井穴（属金）",
    "indications": [
      "头痛、目赤、耳鸣、耳聋、咽喉肿痛",
      "热病、中暑、昏厥"
    ]
  },
  {
    "id": "acu-yemen",
    "name": "液门",
    "pinyin": "yè mén",
    "code": "TE2",
    "category": "手少阳三焦经",
    "subCategory": "手背部",
    "locationHtml": "在手背，<b>第 4、5 指间，指蹼缘后方赤白肉际处</b>。微握拳取穴。",
    "locationText": "在手背，第 4、5 指间，指蹼缘后方赤白肉际处。微握拳取穴。",
    "mnemonic": "液门四五指蹼缘，荥水清泻三焦火",
    "specialProperties": "荥穴（属水）",
    "indications": [
      "头痛、目赤、耳痛、耳鸣、耳聋、咽喉肿痛",
      "热病、疟疾",
      "手指手臂挛痛"
    ]
  },
  {
    "id": "acu-zhongzhu-te",
    "name": "中渚",
    "pinyin": "zhōng zhǔ",
    "code": "TE3",
    "category": "手少阳三焦经",
    "subCategory": "手背部",
    "locationHtml": "在手背，<b>第 4、5 掌骨间</b>，第 4 掌指关节近端凹陷中。",
    "locationText": "在手背，第 4、5 掌骨间，第 4 掌指关节近端凹陷中。",
    "mnemonic": "中渚四五掌骨凹，输木开窍治耳聋",
    "specialProperties": "输穴（属木）",
    "indications": [
      "耳鸣、耳聋、耳痛、头痛、目赤",
      "咽喉肿痛、热病",
      "手指不能屈伸、肩背肘臂酸痛"
    ]
  },
  {
    "id": "acu-yangchi",
    "name": "阳池",
    "pinyin": "yáng chí",
    "code": "TE4",
    "category": "手少阳三焦经",
    "subCategory": "腕后区",
    "locationHtml": "在腕后区，<b>腕背侧远端横纹上，指伸肌腱尺侧缘凹陷中</b>。",
    "locationText": "在腕后区，腕背侧远端横纹上，指伸肌腱尺侧缘凹陷中。",
    "mnemonic": "阳池腕背横纹中，原穴通阳散水湿",
    "specialProperties": "原穴",
    "indications": [
      "消渴、疟疾、目赤痛、耳聋",
      "手腕疼痛、臂痛",
      "低血压、慢性疲劳"
    ]
  },
  {
    "id": "acu-waiguan",
    "name": "外关",
    "pinyin": "wài guān",
    "code": "TE5",
    "category": "手少阳三焦经",
    "subCategory": "前臂后区",
    "locationHtml": "在前臂后区，<b>腕背侧远端横纹上 2 寸</b>，尺骨与桡骨间隙中点。",
    "locationText": "在前臂后区，腕背侧远端横纹上 2 寸，尺骨与桡骨间隙中点。",
    "mnemonic": "外关阳池上二寸，八脉阳维解表热",
    "specialProperties": "络穴；八脉交会穴（通阳维脉）",
    "indications": [
      "感冒、发热、头痛、恶风、目赤肿痛、耳鸣、耳聋",
      "偏头痛、落枕、颈项强痛",
      "胸胁疼痛、肋间神经痛",
      "上肢瘫痪、手指麻木"
    ]
  },
  {
    "id": "acu-zhigou",
    "name": "支沟",
    "pinyin": "zhī gōu",
    "code": "TE6",
    "category": "手少阳三焦经",
    "subCategory": "前臂后区",
    "locationHtml": "在前臂后区，<b>腕背侧远端横纹上 3 寸</b>，尺骨与桡骨间隙中点。",
    "locationText": "在前臂后区，腕背侧远端横纹上 3 寸，尺骨与桡骨间隙中点。",
    "mnemonic": "支沟腕上三寸求，经火宣通利便秘",
    "specialProperties": "经穴（属火）",
    "indications": [
      "便秘（通便要穴）",
      "胁肋痛、胸闷、带状疱疹",
      "耳鸣、耳聋、暴喑",
      "落枕、肩背痛"
    ]
  },
  {
    "id": "acu-huizong",
    "name": "会宗",
    "pinyin": "huì zōng",
    "code": "TE7",
    "category": "手少阳三焦经",
    "subCategory": "前臂后区",
    "locationHtml": "在前臂后区，<b>腕背侧远端横纹上 3 寸，尺骨桡侧缘</b>。",
    "locationText": "在前臂后区，腕背侧远端横纹上 3 寸，尺骨桡侧缘。",
    "mnemonic": "会宗支沟尺侧边，郄穴安神止耳痛",
    "specialProperties": "郄穴",
    "indications": [
      "耳聋、耳鸣",
      "癫痫、精神失常",
      "手臂疼痛"
    ]
  },
  {
    "id": "acu-sanyangluo",
    "name": "三阳络",
    "pinyin": "sān yáng luò",
    "code": "TE8",
    "category": "手少阳三焦经",
    "subCategory": "前臂后区",
    "locationHtml": "在前臂后区，<b>腕背侧远端横纹上 4 寸</b>，尺骨与桡骨间隙中点。",
    "locationText": "在前臂后区，腕背侧远端横纹上 4 寸，尺骨与桡骨间隙中点。",
    "mnemonic": "三阳络在支沟上一，通络开窍通经脉",
    "specialProperties": "",
    "indications": [
      "暴喑、耳聋、齿痛",
      "手臂疼痛、不能抬举"
    ]
  },
  {
    "id": "acu-sidu",
    "name": "四渎",
    "pinyin": "sì dú",
    "code": "TE9",
    "category": "手少阳三焦经",
    "subCategory": "前臂后区",
    "locationHtml": "在前臂后区，<b>肘尖下 5 寸</b>，尺骨与桡骨间隙中点。",
    "locationText": "在前臂后区，肘尖下 5 寸，尺骨与桡骨间隙中点。",
    "mnemonic": "四渎肘尖下五寸，通经开窍止咽喉",
    "specialProperties": "",
    "indications": [
      "暴喑、咽喉肿痛、耳鸣、耳聋",
      "齿痛、前臂痛"
    ]
  },
  {
    "id": "acu-tianjing",
    "name": "天井",
    "pinyin": "tiān jǐng",
    "code": "TE10",
    "category": "手少阳三焦经",
    "subCategory": "肘后区",
    "locationHtml": "在肘后区，<b>肘尖直上 1 寸，鹰嘴窝凹陷处</b>。屈肘取穴。",
    "locationText": "在肘后区，肘尖直上 1 寸，鹰嘴窝凹陷处。屈肘取穴。",
    "mnemonic": "天井屈肘鹰嘴上，合土化痰散瘰疬",
    "specialProperties": "合穴（属土）",
    "indications": [
      "瘰疬、瘿气、痰核",
      "偏头痛、耳鸣、耳聋、咽喉肿痛",
      "癫痫、惊悸",
      "肘关节疼痛、上肢挛急"
    ]
  },
  {
    "id": "acu-qinglengyuan",
    "name": "清冷渊",
    "pinyin": "qīng lěng yuān",
    "code": "TE11",
    "category": "手少阳三焦经",
    "subCategory": "臂后区",
    "locationHtml": "在臂后区，<b>肘尖直上 2 寸</b>。",
    "locationText": "在臂后区，肘尖直上 2 寸。",
    "mnemonic": "清冷渊在天井上一，清热散风利肩臂",
    "specialProperties": "",
    "indications": [
      "头痛、目黄、目赤",
      "肩臂疼痛、不能屈伸"
    ]
  },
  {
    "id": "acu-xiaoluo",
    "name": "消泺",
    "pinyin": "xiāo luò",
    "code": "TE12",
    "category": "手少阳三焦经",
    "subCategory": "臂后区",
    "locationHtml": "在臂后区，<b>清冷渊与臑会连线中点</b>。",
    "locationText": "在臂后区，清冷渊与臑会连线中点。",
    "mnemonic": "消泺清冷臑会间，清热祛湿解风热",
    "specialProperties": "",
    "indications": [
      "头痛、齿痛、项强",
      "肩臂疼痛、瘰疬、癫痫"
    ]
  },
  {
    "id": "acu-naohui",
    "name": "臑会",
    "pinyin": "nào huì",
    "code": "TE13",
    "category": "手少阳三焦经",
    "subCategory": "臂后区",
    "locationHtml": "在臂后区，<b>三角肌后下缘，肩峰后下部与肘尖连线上，肩髎下 3 寸</b>。",
    "locationText": "在臂后区，三角肌后下缘，肩峰后下部与肘尖连线上，肩髎下 3 寸。",
    "mnemonic": "臑会肩髎下三寸，化痰散结利瘿瘤",
    "specialProperties": "",
    "indications": [
      "肩臂痛、肩周炎",
      "瘰疬、瘿气"
    ]
  },
  {
    "id": "acu-jianliao-te",
    "name": "肩髎",
    "pinyin": "jiān liáo",
    "code": "TE14",
    "category": "手少阳三焦经",
    "subCategory": "肩部",
    "locationHtml": "在肩胛区，<b>肩峰后下方，上臂外展时呈凹陷处</b>。",
    "locationText": "在肩胛区，肩峰后下方，上臂外展时呈凹陷处。",
    "mnemonic": "肩髎肩峰后凹陷，通络利节止肩痛",
    "specialProperties": "",
    "indications": [
      "肩周炎、肩臂疼痛、上肢不遂"
    ]
  },
  {
    "id": "acu-tianliao-te",
    "name": "天髎",
    "pinyin": "tiān liáo",
    "code": "TE15",
    "category": "手少阳三焦经",
    "subCategory": "肩胛区",
    "locationHtml": "在肩胛区，<b>肩胛骨上角处</b>，肩井与曲垣连线中点。",
    "locationText": "在肩胛区，肩胛骨上角处，肩井与曲垣连线中点。",
    "mnemonic": "天髎肩胛上角处，舒筋活络散风邪",
    "specialProperties": "",
    "indications": [
      "肩胛疼痛、颈项强痛、肩背冷痛"
    ]
  },
  {
    "id": "acu-tianyou",
    "name": "天牖",
    "pinyin": "tiān yǒu",
    "code": "TE16",
    "category": "手少阳三焦经",
    "subCategory": "颈侧区",
    "locationHtml": "在颈侧区，<b>乳突后下方，胸锁乳突肌后缘</b>，天容与天柱连线中点。",
    "locationText": "在颈侧区，乳突后下方，胸锁乳突肌后缘，天容与天柱连线中点。",
    "mnemonic": "天牖乳突后下缘，清利头目通耳窍",
    "specialProperties": "",
    "indications": [
      "头痛、目眩、目赤、耳鸣、耳聋",
      "暴喑、咽喉肿痛",
      "颈项强痛、面肿"
    ]
  },
  {
    "id": "acu-yifeng",
    "name": "翳风",
    "pinyin": "yì fēng",
    "code": "TE17",
    "category": "手少阳三焦经",
    "subCategory": "颈部",
    "locationHtml": "在颈部，<b>耳垂后方，乳突下端前方凹陷中</b>。",
    "locationText": "在颈部，耳垂后方，乳突下端前方凹陷中。",
    "mnemonic": "翳风耳垂后凹中，通窍聪耳治面瘫",
    "specialProperties": "手足少阳经交会穴",
    "indications": [
      "耳鸣、耳聋、聤耳、中耳炎",
      "口眼㖞斜、面瘫、颊肿、齿痛",
      "瘰疬、痄腮（腮腺炎）"
    ]
  },
  {
    "id": "acu-chimai",
    "name": "瘈脉",
    "pinyin": "chì mài",
    "code": "TE18",
    "category": "手少阳三焦经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>耳后乳突中央，角孙与翳风连线的下 1/3 折点</b>。",
    "locationText": "在头部，耳后乳突中央，角孙与翳风连线的下 1/3 折点。",
    "mnemonic": "瘈脉耳后乳突中，息风定惊安小儿",
    "specialProperties": "",
    "indications": [
      "小儿惊风、惊恐",
      "头痛、耳鸣、耳聋",
      "目视不明"
    ]
  },
  {
    "id": "acu-luxi",
    "name": "颅息",
    "pinyin": "lú xī",
    "code": "TE19",
    "category": "手少阳三焦经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>耳后角孙与翳风连线的中 1/3 折点</b>。",
    "locationText": "在头部，耳后角孙与翳风连线的中 1/3 折点。",
    "mnemonic": "颅息耳后弧线中，清脑息风止耳鸣",
    "specialProperties": "",
    "indications": [
      "头痛、耳鸣、耳聋、耳痛",
      "小儿惊风、抽搐"
    ]
  },
  {
    "id": "acu-jiaosun",
    "name": "角孙",
    "pinyin": "jiǎo sūn",
    "code": "TE20",
    "category": "手少阳三焦经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>耳尖正上方发际处</b>。将耳郭折向前方，耳尖所指处。",
    "locationText": "在头部，耳尖正上方发际处。将耳郭折向前方，耳尖所指处。",
    "mnemonic": "角孙折耳耳尖上，清热消肿治目翳",
    "specialProperties": "手足少阳经交会穴",
    "indications": [
      "目赤肿痛、目翳、齿痛",
      "头痛、项强",
      "痄腮、耳肿"
    ]
  },
  {
    "id": "acu-ermen",
    "name": "耳门",
    "pinyin": "ěr mén",
    "code": "TE21",
    "category": "手少阳三焦经",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>耳屏上切迹与下颌骨髁突之间的凹陷中</b>。微张口取穴。",
    "locationText": "在面部，耳屏上切迹与下颌骨髁突之间的凹陷中。微张口取穴。",
    "mnemonic": "耳门耳屏上切前，开窍聪耳止聤耳",
    "specialProperties": "",
    "indications": [
      "耳鸣、耳聋、聤耳、中耳炎",
      "齿痛、下颌关节炎"
    ]
  },
  {
    "id": "acu-erheliao",
    "name": "耳和髎",
    "pinyin": "ěr hé liáo",
    "code": "TE22",
    "category": "手少阳三焦经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>耳郭根前上方，鬓发后缘，颞浅动脉后缘</b>。",
    "locationText": "在头部，耳郭根前上方，鬓发后缘，颞浅动脉后缘。",
    "mnemonic": "耳和鬓发后缘凹，祛风解表止头痛",
    "specialProperties": "",
    "indications": [
      "头痛、耳鸣、牙关紧闭",
      "口眼㖞斜、面瘫"
    ]
  },
  {
    "id": "acu-sizhukong",
    "name": "丝竹空",
    "pinyin": "sī zhú kōng",
    "code": "TE23",
    "category": "手少阳三焦经",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>眉梢凹陷处</b>。",
    "locationText": "在面部，眉梢凹陷处。",
    "mnemonic": "丝竹眉梢凹陷中，清热明目止偏头",
    "specialProperties": "",
    "indications": [
      "头痛、偏头痛、眩晕",
      "目赤肿痛、眼睑瞤动、目眩",
      "癫痫、齿痛"
    ]
  },
  {
    "id": "acu-tongziliao",
    "name": "瞳子髎",
    "pinyin": "tóng zǐ liáo",
    "code": "GB1",
    "category": "足少阳胆经",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>目外眦外侧 0.5 寸凹陷中</b>。",
    "locationText": "在面部，目外眦外侧 0.5 寸凹陷中。",
    "mnemonic": "瞳子髎在目外眦，五分凹中治眼疾",
    "specialProperties": "手太阳、手少阳、足少阳交会穴",
    "indications": [
      "目赤肿痛、目翳、青盲、迎风流泪、近视",
      "头痛、偏头痛",
      "面瘫、三叉神经痛"
    ]
  },
  {
    "id": "acu-tinghui",
    "name": "听会",
    "pinyin": "tīng huì",
    "code": "GB2",
    "category": "足少阳胆经",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>耳屏间切迹与下颌骨髁突之间的凹陷中</b>。张口取穴。",
    "locationText": "在面部，耳屏间切迹与下颌骨髁突之间的凹陷中。张口取穴。",
    "mnemonic": "听会耳屏间切前，聪耳开窍止耳鸣",
    "specialProperties": "",
    "indications": [
      "耳鸣、耳聋、聤耳",
      "口眼㖞斜、面瘫、齿痛",
      "下颌关节功能紊乱"
    ]
  },
  {
    "id": "acu-shangguan",
    "name": "上关",
    "pinyin": "shàng guān",
    "code": "GB3",
    "category": "足少阳胆经",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>颧弓上缘，下关穴直上方</b>。",
    "locationText": "在面部，颧弓上缘，下关穴直上方。",
    "mnemonic": "上关颧弓上缘中，清耳明目利齿关",
    "specialProperties": "",
    "indications": [
      "耳鸣、耳聋、聤耳",
      "齿痛、口眼㖞斜、面痛",
      "偏头痛"
    ]
  },
  {
    "id": "acu-hanyan",
    "name": "颔厌",
    "pinyin": "hàn yàn",
    "code": "GB4",
    "category": "足少阳胆经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>头维与曲鬓连线上 1/4 折点</b>。",
    "locationText": "在头部，头维与曲鬓连线上 1/4 折点。",
    "mnemonic": "颔厌头维曲鬓间，疏风止痛治偏头",
    "specialProperties": "",
    "indications": [
      "偏头痛、眩晕",
      "目赤肿痛、耳鸣、齿痛",
      "癫痫"
    ]
  },
  {
    "id": "acu-xuanlu",
    "name": "悬颅",
    "pinyin": "xuán lú",
    "code": "GB5",
    "category": "足少阳胆经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>头维与曲鬓连线中点</b>。",
    "locationText": "在头部，头维与曲鬓连线中点。",
    "mnemonic": "悬颅头维曲鬓中，清热消肿止头痛",
    "specialProperties": "",
    "indications": [
      "偏头痛、目赤肿痛",
      "鼻衄、齿痛、面肿"
    ]
  },
  {
    "id": "acu-xuanli",
    "name": "悬厘",
    "pinyin": "xuán lí",
    "code": "GB6",
    "category": "足少阳胆经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>头维与曲鬓连线下 1/4 折点</b>。",
    "locationText": "在头部，头维与曲鬓连线下 1/4 折点。",
    "mnemonic": "悬厘曲鬓上一分，祛风止痛利耳鸣",
    "specialProperties": "",
    "indications": [
      "偏头痛、目外眦痛",
      "耳鸣、耳聋、齿痛"
    ]
  },
  {
    "id": "acu-qubin",
    "name": "曲鬓",
    "pinyin": "qū bìn",
    "code": "GB7",
    "category": "足少阳胆经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>耳前鬓角发际后缘与耳尖水平线的交点处</b>。",
    "locationText": "在头部，耳前鬓角发际后缘与耳尖水平线的交点处。",
    "mnemonic": "曲鬓耳前鬓发后，清利头目止偏头",
    "specialProperties": "",
    "indications": [
      "偏头痛、颊肿、齿痛",
      "口噤不开、目赤"
    ]
  },
  {
    "id": "acu-shuaigu",
    "name": "率谷",
    "pinyin": "shuài gǔ",
    "code": "GB8",
    "category": "足少阳胆经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>耳尖直上入发际 1.5 寸</b>。",
    "locationText": "在头部，耳尖直上入发际 1.5 寸。",
    "mnemonic": "率谷耳尖上一五，平肝息风止头痛",
    "specialProperties": "足少阳、太阳交会穴",
    "indications": [
      "偏头痛、眩晕、中暑",
      "呕吐、小儿急慢惊风",
      "烦躁、醉酒"
    ]
  },
  {
    "id": "acu-tianchong",
    "name": "天冲",
    "pinyin": "tiān chōng",
    "code": "GB9",
    "category": "足少阳胆经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>耳根后缘直上，入发际 2 寸，率谷后 0.5 寸</b>。",
    "locationText": "在头部，耳根后缘直上，入发际 2 寸，率谷后 0.5 寸。",
    "mnemonic": "天冲耳后入发二，宁神定志利癫痫",
    "specialProperties": "",
    "indications": [
      "头痛、眩晕",
      "癫痫、惊恐、失眠",
      "耳鸣、耳聋"
    ]
  },
  {
    "id": "acu-fubai",
    "name": "浮白",
    "pinyin": "fú bái",
    "code": "GB10",
    "category": "足少阳胆经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>耳根后缘直上，天冲与头窍阴连线中点</b>。",
    "locationText": "在头部，耳根后缘直上，天冲与头窍阴连线中点。",
    "mnemonic": "浮白天冲窍阴间，清热化痰治瘰疬",
    "specialProperties": "",
    "indications": [
      "头痛、眩晕、耳鸣",
      "瘰疬、瘿气",
      "胸胁胀痛"
    ]
  },
  {
    "id": "acu-touqiaoyin",
    "name": "头窍阴",
    "pinyin": "tóu qiào yīn",
    "code": "GB11",
    "category": "足少阳胆经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>乳突后上方，浮白与完骨连线中点</b>。",
    "locationText": "在头部，乳突后上方，浮白与完骨连线中点。",
    "mnemonic": "头窍阴在乳突后，聪耳开窍止头风",
    "specialProperties": "",
    "indications": [
      "头痛、项强、目痛",
      "耳鸣、耳聋、喉痹"
    ]
  },
  {
    "id": "acu-wangu-gb",
    "name": "完骨",
    "pinyin": "wán gǔ",
    "code": "GB12",
    "category": "足少阳胆经",
    "subCategory": "颈后区",
    "locationHtml": "在颈后区，<b>乳突后下方凹陷中</b>。",
    "locationText": "在颈后区，乳突后下方凹陷中。",
    "mnemonic": "完骨乳突后下凹，祛风安神利睡眠",
    "specialProperties": "",
    "indications": [
      "失眠、头痛、眩晕",
      "颈项强痛、耳鸣、齿痛",
      "口眼㖞斜、疟疾"
    ]
  },
  {
    "id": "acu-benshen",
    "name": "本神",
    "pinyin": "běn shén",
    "code": "GB13",
    "category": "足少阳胆经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>前发际上 0.5 寸，头正中线旁开 3 寸</b>。",
    "locationText": "在头部，前发际上 0.5 寸，头正中线旁开 3 寸。",
    "mnemonic": "本神发际上半寸，安神定志利癫痫",
    "specialProperties": "",
    "indications": [
      "头痛、眩晕",
      "癫痫、惊痫、中风",
      "小儿惊风、精神失常"
    ]
  },
  {
    "id": "acu-yangbai",
    "name": "阳白",
    "pinyin": "yáng bái",
    "code": "GB14",
    "category": "足少阳胆经",
    "subCategory": "额部",
    "locationHtml": "在额部，<b>瞳孔直上，眉上 1 寸</b>。",
    "locationText": "在额部，瞳孔直上，眉上 1 寸。",
    "mnemonic": "阳白瞳上眉上一，祛风明目治睑垂",
    "specialProperties": "",
    "indications": [
      "前额头痛、眩晕",
      "目痛、迎风流泪、夜盲、视物模糊",
      "眼睑下垂、眼睑瞤动、面瘫"
    ]
  },
  {
    "id": "acu-toulinqi",
    "name": "头临泣",
    "pinyin": "tóu lín qì",
    "code": "GB15",
    "category": "足少阳胆经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>前发际上 0.5 寸，瞳孔直上</b>。",
    "locationText": "在头部，前发际上 0.5 寸，瞳孔直上。",
    "mnemonic": "头临泣在发际半，清头明目通鼻窍",
    "specialProperties": "足少阳、太阳与阳维交会穴",
    "indications": [
      "头痛、眩晕",
      "目赤痛、迎风流泪、近视",
      "鼻塞、鼻渊、小儿惊风"
    ]
  },
  {
    "id": "acu-muchuang",
    "name": "目窗",
    "pinyin": "mù chuāng",
    "code": "GB16",
    "category": "足少阳胆经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>前发际上 1.5 寸，头临泣后 1 寸</b>。",
    "locationText": "在头部，前发际上 1.5 寸，头临泣后 1 寸。",
    "mnemonic": "目窗临泣后一寸，明目开窍止头风",
    "specialProperties": "",
    "indications": [
      "头痛、目眩",
      "目赤肿痛、远视、近视、青光眼",
      "面浮肿"
    ]
  },
  {
    "id": "acu-zhengying",
    "name": "正营",
    "pinyin": "zhèng yíng",
    "code": "GB17",
    "category": "足少阳胆经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>前发际上 2.5 寸，目窗后 1 寸</b>。",
    "locationText": "在头部，前发际上 2.5 寸，目窗后 1 寸。",
    "mnemonic": "正营目窗后一寸，平肝熄风止眩晕",
    "specialProperties": "",
    "indications": [
      "偏正头痛、眩晕",
      "齿痛、唇吻强急",
      "呕吐、精神抑郁"
    ]
  },
  {
    "id": "acu-chengling",
    "name": "承灵",
    "pinyin": "chéng líng",
    "code": "GB18",
    "category": "足少阳胆经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>前发际上 4 寸，正营后 1.5 寸</b>。",
    "locationText": "在头部，前发际上 4 寸，正营后 1.5 寸。",
    "mnemonic": "承灵正营后寸半，宣通鼻窍利脑痛",
    "specialProperties": "",
    "indications": [
      "头痛、眩晕",
      "鼻衄、鼻渊、鼻塞",
      "恶风寒"
    ]
  },
  {
    "id": "acu-naokong",
    "name": "脑空",
    "pinyin": "nǎo kōng",
    "code": "GB19",
    "category": "足少阳胆经",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>横平枕外隆凸上缘，风池直上，脑户旁开 2.25 寸</b>。",
    "locationText": "在头部，横平枕外隆凸上缘，风池直上，脑户旁开 2.25 寸。",
    "mnemonic": "脑空风池直上方，清脑止痛利头风",
    "specialProperties": "",
    "indications": [
      "头痛、颈项强痛、眩晕",
      "目赤痛、鼻衄",
      "癫痫、惊悸"
    ]
  },
  {
    "id": "acu-fengchi",
    "name": "风池",
    "pinyin": "fēng chí",
    "code": "GB20",
    "category": "足少阳胆经",
    "subCategory": "颈后区",
    "locationHtml": "在颈后区，<b>枕骨之下，胸锁乳突肌与斜方肌上端之间的凹陷中</b>。<br>简便取穴法：大拇指按在耳垂后乳突与枕骨后大筋凹陷处。",
    "locationText": "在颈后区，枕骨之下，胸锁乳突肌与斜方肌上端之间的凹陷中。简便取穴法：大拇指按在耳垂后乳突与枕骨后大筋凹陷处。",
    "mnemonic": "风池斜方胸锁间，祛风解表清头目",
    "specialProperties": "足少阳与阳维脉交会穴",
    "indications": [
      "感冒、头痛、眩晕、颈项强痛",
      "目赤肿痛、迎风流泪、近视、视力减退",
      "鼻塞、鼻衄、耳鸣、耳聋",
      "中风、面瘫、癫痫、高血压"
    ]
  },
  {
    "id": "acu-jianjing",
    "name": "肩井",
    "pinyin": "jiān jǐng",
    "code": "GB21",
    "category": "足少阳胆经",
    "subCategory": "肩胛区",
    "locationHtml": "在肩胛区，<b>第 7 颈椎棘突与肩峰最外侧端连线的中点</b>。",
    "locationText": "在肩胛区，第 7 颈椎棘突与肩峰最外侧端连线的中点。",
    "mnemonic": "肩井大椎肩峰中，通经催生利乳痈",
    "specialProperties": "交会穴",
    "indications": [
      "肩背痹痛、颈项强痛、上肢不遂",
      "乳痈、乳癖、乳汁不下",
      "滞产、难产（孕妇禁针）",
      "瘰疬、中风"
    ]
  },
  {
    "id": "acu-yuanye",
    "name": "渊腋",
    "pinyin": "yuān yè",
    "code": "GB22",
    "category": "足少阳胆经",
    "subCategory": "胸外侧区",
    "locationHtml": "在胸外侧区，<b>第 4 肋间隙，腋中线上</b>。",
    "locationText": "在胸外侧区，第 4 肋间隙，腋中线上。",
    "mnemonic": "渊腋四肋腋中线，宽胸理气通胸胁",
    "specialProperties": "",
    "indications": [
      "胸胁胀痛、气喘",
      "腋下肿痛、臂痛不举"
    ]
  },
  {
    "id": "acu-zhejin",
    "name": "辄筋",
    "pinyin": "zhé jīn",
    "code": "GB23",
    "category": "足少阳胆经",
    "subCategory": "胸外侧区",
    "locationHtml": "在胸外侧区，<b>第 4 肋间隙，腋中线前 1 寸</b>。",
    "locationText": "在胸外侧区，第 4 肋间隙，腋中线前 1 寸。",
    "mnemonic": "辄筋渊腋前一寸，宽胸降逆止吞酸",
    "specialProperties": "",
    "indications": [
      "胸肋疼痛、气喘",
      "呕吐、吞酸、消化不良"
    ]
  },
  {
    "id": "acu-riyue",
    "name": "日月",
    "pinyin": "rì yuè",
    "code": "GB24",
    "category": "足少阳胆经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>第 7 肋间隙，前正中线旁开 4 寸</b>（乳头直下）。",
    "locationText": "在胸部，第 7 肋间隙，前正中线旁开 4 寸（乳头直下）。",
    "mnemonic": "日月乳下七肋间，胆之募穴清胆热",
    "specialProperties": "胆之募穴",
    "indications": [
      "黄疸、胁肋疼痛、胆囊炎、胆结石",
      "呕吐、吞酸、呃逆",
      "胃痛、腹胀"
    ]
  },
  {
    "id": "acu-jingmen",
    "name": "京门",
    "pinyin": "jīng mén",
    "code": "GB25",
    "category": "足少阳胆经",
    "subCategory": "侧腰部",
    "locationHtml": "在侧腰部，<b>第 12 肋骨游离端下际</b>。",
    "locationText": "在侧腰部，第 12 肋骨游离端下际。",
    "mnemonic": "京门十二肋下端，肾之募穴调腰肾",
    "specialProperties": "肾之募穴",
    "indications": [
      "小便不利、水肿、淋证",
      "腰痛、胁痛",
      "腹胀、肠鸣、泄泻"
    ]
  },
  {
    "id": "acu-daimai",
    "name": "带脉",
    "pinyin": "dài mài",
    "code": "GB26",
    "category": "足少阳胆经",
    "subCategory": "侧腹部",
    "locationHtml": "在侧腹部，<b>第 11 肋骨游离端垂线与脐水平线的交点处</b>。",
    "locationText": "在侧腹部，第 11 肋骨游离端垂线与脐水平线的交点处。",
    "mnemonic": "带脉平脐十一端，调经止带固下元",
    "specialProperties": "带脉交会穴",
    "indications": [
      "月经不调、赤白带下、经闭、痛经",
      "疝气、小腹痛",
      "腰胁痛"
    ]
  },
  {
    "id": "acu-wushu",
    "name": "五枢",
    "pinyin": "wǔ shū",
    "code": "GB27",
    "category": "足少阳胆经",
    "subCategory": "侧腹部",
    "locationHtml": "在侧腹部，<b>横平脐下 3 寸，髂前上棘内侧凹陷中</b>。",
    "locationText": "在侧腹部，横平脐下 3 寸，髂前上棘内侧凹陷中。",
    "mnemonic": "五枢髂前上棘前，调经止带利少腹",
    "specialProperties": "",
    "indications": [
      "少腹痛、疝气",
      "带下、月经不调",
      "便秘、腰胯痛"
    ]
  },
  {
    "id": "acu-weidao",
    "name": "维道",
    "pinyin": "wéi dào",
    "code": "GB28",
    "category": "足少阳胆经",
    "subCategory": "侧腹部",
    "locationHtml": "在侧腹部，<b>髂前上棘前下方 0.5 寸</b>。",
    "locationText": "在侧腹部，髂前上棘前下方 0.5 寸。",
    "mnemonic": "维道五枢前下五，理气升提固子宫",
    "specialProperties": "",
    "indications": [
      "少腹痛、疝气",
      "带下、阴挺、子宫脱垂",
      "腰胯痛"
    ]
  },
  {
    "id": "acu-juliao-gb",
    "name": "居髎",
    "pinyin": "jū liáo",
    "code": "GB29",
    "category": "足少阳胆经",
    "subCategory": "臀区",
    "locationHtml": "在臀区，<b>髂前上棘与股骨大转子最凸点连线的中点</b>。",
    "locationText": "在臀区，髂前上棘与股骨大转子最凸点连线的中点。",
    "mnemonic": "居髎髂前大转间，舒筋活络利髋腿",
    "specialProperties": "",
    "indications": [
      "腰腿痹痛、下肢瘫痪、髋关节痛",
      "疝气、少腹痛"
    ]
  },
  {
    "id": "acu-huantiao",
    "name": "环跳",
    "pinyin": "huán tiào",
    "code": "GB30",
    "category": "足少阳胆经",
    "subCategory": "臀区",
    "locationHtml": "在臀区，<b>股骨大转子最凸点与骶管裂孔连线的外 1/3 与内 2/3 交点处</b>。<br>简便取穴法：侧卧屈膝，足跟点触大腿处。",
    "locationText": "在臀区，股骨大转子最凸点与骶管裂孔连线的外 1/3 与内 2/3 交点处。简便取穴法：侧卧屈膝，足跟点触大腿处。",
    "mnemonic": "环跳股骨大转连，通经活血止坐骨",
    "specialProperties": "足少阳、太阳交会穴",
    "indications": [
      "腰胯疼痛、坐骨神经痛、半身不遂",
      "下肢痿痹、小儿麻痹后遗症",
      "风疹、湿疹"
    ]
  },
  {
    "id": "acu-fengshi",
    "name": "风市",
    "pinyin": "fēng shì",
    "code": "GB31",
    "category": "足少阳胆经",
    "subCategory": "股外侧区",
    "locationHtml": "在股外侧区，<b>直立垂手时，中指尖所指处，髂胫束后缘</b>。",
    "locationText": "在股外侧区，直立垂手时，中指尖所指处，髂胫束后缘。",
    "mnemonic": "风市垂手中指尖，祛风止痒利下肢",
    "specialProperties": "",
    "indications": [
      "中风偏瘫、下肢痿痹、麻木",
      "遍身瘙痒、荨麻疹、神经性皮炎",
      "膝关节痛、脚气"
    ]
  },
  {
    "id": "acu-zhongdu-gb",
    "name": "中渎",
    "pinyin": "zhōng dú",
    "code": "GB32",
    "category": "足少阳胆经",
    "subCategory": "股外侧区",
    "locationHtml": "在股外侧区，<b>风市下 2 寸，髂胫束后缘</b>。",
    "locationText": "在股外侧区，风市下 2 寸，髂胫束后缘。",
    "mnemonic": "中渎风市下二寸，舒筋通络利腿瘫",
    "specialProperties": "",
    "indications": [
      "下肢痿痹、麻木、膝痛",
      "偏瘫、坐骨神经痛"
    ]
  },
  {
    "id": "acu-xiyangguan",
    "name": "膝阳关",
    "pinyin": "xī yáng guān",
    "code": "GB33",
    "category": "足少阳胆经",
    "subCategory": "膝外侧区",
    "locationHtml": "在膝外侧区，<b>股二头肌腱与髂胫束之间的凹陷中，横平屈膝时股骨外上髁上缘</b>。",
    "locationText": "在膝外侧区，股二头肌腱与髂胫束之间的凹陷中，横平屈膝时股骨外上髁上缘。",
    "mnemonic": "膝阳关在股外髁，舒筋利节消膝痛",
    "specialProperties": "",
    "indications": [
      "膝痛、屈伸不利",
      "小腿麻木、鹤膝风"
    ]
  },
  {
    "id": "acu-yanglingquan",
    "name": "阳陵泉",
    "pinyin": "yáng líng quán",
    "code": "GB34",
    "category": "足少阳胆经",
    "subCategory": "小腿外侧",
    "locationHtml": "在小腿外侧，<b>腓骨小头前下方凹陷中</b>。",
    "locationText": "在小腿外侧，腓骨小头前下方凹陷中。",
    "mnemonic": "筋会阳陵腓骨凹，合土利胆通下肢",
    "specialProperties": "合穴（属土）；胆下合穴；八会穴之筋会",
    "indications": [
      "黄疸、胁痛、口苦、呕吐、胆囊炎、胆道蛔虫",
      "膝腿疼痛、下肢痿痹、脚气、半身不遂",
      "肩周炎、落枕、肋间神经痛",
      "抽搐、小儿惊风"
    ]
  },
  {
    "id": "acu-yangjiao",
    "name": "阳交",
    "pinyin": "yáng jiāo",
    "code": "GB35",
    "category": "足少阳胆经",
    "subCategory": "小腿外侧",
    "locationHtml": "在小腿外侧，<b>外踝尖上 7 寸，腓骨后缘</b>。",
    "locationText": "在小腿外侧，外踝尖上 7 寸，腓骨后缘。",
    "mnemonic": "阳交外踝上七后，阳维郄穴安狂痫",
    "specialProperties": "阳维脉之郄穴",
    "indications": [
      "胸胁胀满、膝股痛、下肢痿痹",
      "癫狂、惊悸、精神抑郁",
      "面肿、瘰疬"
    ]
  },
  {
    "id": "acu-waiqiu",
    "name": "外丘",
    "pinyin": "wài qiū",
    "code": "GB36",
    "category": "足少阳胆经",
    "subCategory": "小腿外侧",
    "locationHtml": "在小腿外侧，<b>外踝尖上 7 寸，腓骨前缘</b>。",
    "locationText": "在小腿外侧，外踝尖上 7 寸，腓骨前缘。",
    "mnemonic": "外丘外踝上七前，郄穴止痛清胆郁",
    "specialProperties": "郄穴",
    "indications": [
      "急性胸胁痛、下肢痉痛",
      "癫狂、瘰疬",
      "急慢性胆囊炎"
    ]
  },
  {
    "id": "acu-guangming",
    "name": "光明",
    "pinyin": "guāng míng",
    "code": "GB37",
    "category": "足少阳胆经",
    "subCategory": "小腿外侧",
    "locationHtml": "在小腿外侧，<b>外踝尖上 5 寸，腓骨前缘</b>。",
    "locationText": "在小腿外侧，外踝尖上 5 寸，腓骨前缘。",
    "mnemonic": "光明外踝上五寸，胆经络穴明眼目",
    "specialProperties": "络穴",
    "indications": [
      "目痛、夜盲、视神经萎缩、近视、白内障",
      "下肢痿痹、足胫酸痛",
      "乳房胀痛、产后少乳"
    ]
  },
  {
    "id": "acu-yangfu",
    "name": "阳辅",
    "pinyin": "yáng fǔ",
    "code": "GB38",
    "category": "足少阳胆经",
    "subCategory": "小腿外侧",
    "locationHtml": "在小腿外侧，<b>外踝尖上 4 寸，腓骨前缘</b>。",
    "locationText": "在小腿外侧，外踝尖上 4 寸，腓骨前缘。",
    "mnemonic": "阳辅外踝上四寸，经火泻热清胆经",
    "specialProperties": "经穴（属火）",
    "indications": [
      "偏头痛、目外眦痛、缺盆肿痛",
      "胸胁胀痛、瘰疬、腋下肿",
      "下肢痿痹、外踝痛"
    ]
  },
  {
    "id": "acu-xuanzhong",
    "name": "悬钟",
    "pinyin": "xuán zhōng",
    "code": "GB39",
    "category": "足少阳胆经",
    "subCategory": "小腿外侧",
    "locationHtml": "在小腿外侧，<b>外踝尖上 3 寸，腓骨前缘与后缘之间</b>（绝骨处）。",
    "locationText": "在小腿外侧，外踝尖上 3 寸，腓骨前缘与后缘之间（绝骨处）。",
    "mnemonic": "髓会悬钟踝上三，强筋益髓治中风",
    "specialProperties": "八会穴之髓会",
    "indications": [
      "痴呆、健忘、中风半身不遂",
      "颈项强痛、落枕、偏头痛",
      "胸胁胀痛、下肢痿痹、脚气"
    ]
  },
  {
    "id": "acu-qiuxu",
    "name": "丘墟",
    "pinyin": "qiū xū",
    "code": "GB40",
    "category": "足少阳胆经",
    "subCategory": "踝区",
    "locationHtml": "在踝区，<b>外踝前下方，趾长伸肌腱外侧凹陷中</b>。",
    "locationText": "在踝区，外踝前下方，趾长伸肌腱外侧凹陷中。",
    "mnemonic": "丘墟外踝前下凹，原穴清利肝胆气",
    "specialProperties": "原穴",
    "indications": [
      "目赤肿痛、目生翳膜",
      "胸胁胀痛、胆囊炎、胆绞痛",
      "下肢痿痹、外踝肿痛、脚气",
      "颈项强痛、疝气"
    ]
  },
  {
    "id": "acu-zulinqi",
    "name": "足临泣",
    "pinyin": "zú lín qì",
    "code": "GB41",
    "category": "足少阳胆经",
    "subCategory": "足背",
    "locationHtml": "在足背，<b>第 4、5 跖骨底结合部的前方，第 5 趾长伸肌腱外侧凹陷中</b>。",
    "locationText": "在足背，第 4、5 跖骨底结合部的前方，第 5 趾长伸肌腱外侧凹陷中。",
    "mnemonic": "足临泣四五跖底，八脉带脉通乳头",
    "specialProperties": "输穴（属木）；八脉交会穴（通带脉）",
    "indications": [
      "偏头痛、目赤肿痛、耳鸣、耳聋",
      "胸胁胀痛、乳痈、乳癖、月经不调",
      "瘰疬、足跗肿痛"
    ]
  },
  {
    "id": "acu-diwuhui",
    "name": "地五会",
    "pinyin": "dì wǔ huì",
    "code": "GB42",
    "category": "足少阳胆经",
    "subCategory": "足背",
    "locationHtml": "在足背，<b>第 4、5 跖骨间，第 4 跖趾关节近端凹陷中</b>。",
    "locationText": "在足背，第 4、5 跖骨间，第 4 跖趾关节近端凹陷中。",
    "mnemonic": "地五会四五跖间，清肝明目散乳痈",
    "specialProperties": "",
    "indications": [
      "目赤痛、耳鸣、耳聋",
      "乳痈、乳房胀痛",
      "足背红肿、足趾麻痛"
    ]
  },
  {
    "id": "acu-xiaxi",
    "name": "侠溪",
    "pinyin": "xiá xī",
    "code": "GB43",
    "category": "足少阳胆经",
    "subCategory": "足背",
    "locationHtml": "在足背，<b>第 4、5 趾间，趾蹼缘后方赤白肉际处</b>。",
    "locationText": "在足背，第 4、5 趾间，趾蹼缘后方赤白肉际处。",
    "mnemonic": "侠溪四五趾蹼缘，荥水泻火清胆热",
    "specialProperties": "荥穴（属水）",
    "indications": [
      "头痛、眩晕、目赤肿痛、耳鸣、耳聋",
      "胸胁胀痛、乳痈",
      "热病、足背红肿"
    ]
  },
  {
    "id": "acu-zuqiaoyin",
    "name": "足窍阴",
    "pinyin": "zú qiào yīn",
    "code": "GB44",
    "category": "足少阳胆经",
    "subCategory": "足趾",
    "locationHtml": "在足趾，<b>第 4 趾末节外侧，趾甲根角侧上方 0.1 寸</b>。",
    "locationText": "在足趾，第 4 趾末节外侧，趾甲根角侧上方 0.1 寸。",
    "mnemonic": "足窍阴四趾外角，井金清脑苏厥急",
    "specialProperties": "井穴（属金）",
    "indications": [
      "偏头痛、目赤肿痛、耳鸣、耳聋、喉痹",
      "失眠、多梦、热病、昏厥",
      "胸胁痛、咳逆"
    ]
  },
  {
    "id": "acu-dadun",
    "name": "大敦",
    "pinyin": "dà dūn",
    "code": "LR1",
    "category": "足厥阴肝经",
    "subCategory": "足趾",
    "locationHtml": "在足趾，<b>足大趾末节外侧，趾甲根角侧上方 0.1 寸</b>。",
    "locationText": "在足趾，足大趾末节外侧，趾甲根角侧上方 0.1 寸。",
    "mnemonic": "大敦大趾外甲角，井木疏肝止崩漏",
    "specialProperties": "井穴（属木）",
    "indications": [
      "疝气、少腹痛、阴茎痛",
      "崩漏、月经过多、经闭",
      "遗尿、癃闭、尿血",
      "癫痫、中风昏迷"
    ]
  },
  {
    "id": "acu-xingjian",
    "name": "行间",
    "pinyin": "xíng jiān",
    "code": "LR2",
    "category": "足厥阴肝经",
    "subCategory": "足背",
    "locationHtml": "在足背，<b>第 1、2 趾间，趾蹼缘后方赤白肉际处</b>。",
    "locationText": "在足背，第 1、2 趾间，趾蹼缘后方赤白肉际处。",
    "mnemonic": "行间一二趾蹼缘，荥火泻肝降亢阳",
    "specialProperties": "荥穴（属火）",
    "indications": [
      "头痛、眩晕、目赤肿痛、青盲",
      "面瘫、口眼㖞斜、胁肋痛",
      "月经不调、痛经、崩漏、带下",
      "小便不利、尿痛、疝气",
      "小儿惊风、失眠、癫狂"
    ]
  },
  {
    "id": "acu-taichong",
    "name": "太冲",
    "pinyin": "tài chōng",
    "code": "LR3",
    "category": "足厥阴肝经",
    "subCategory": "足背",
    "locationHtml": "在足背，<b>第 1、2 跖骨间，跖骨结合部前方凹陷中</b>。<br>简便取穴法：从大趾、次趾间趾缝向上推移，至两跖骨结合部之凹陷处。",
    "locationText": "在足背，第 1、2 跖骨间，跖骨结合部前方凹陷中。简便取穴法：从大趾、次趾间趾缝向上推移，至两跖骨结合部之凹陷处。",
    "mnemonic": "太冲一二跖骨底，输原平肝降血压",
    "specialProperties": "输穴（属土）；原穴",
    "indications": [
      "头痛、眩晕、目赤肿痛、青光眼",
      "高血压、失眠、抑郁、癫狂痫",
      "中风偏瘫、口眼㖞斜、面瘫",
      "胁痛、腹胀、呃逆",
      "月经不调、痛经、经闭、崩漏",
      "下肢痿痹、足跗肿痛"
    ]
  },
  {
    "id": "acu-zhongfeng",
    "name": "中封",
    "pinyin": "zhōng fēng",
    "code": "LR4",
    "category": "足厥阴肝经",
    "subCategory": "踝区",
    "locationHtml": "在踝区，<b>内踝前，胫骨前肌腱内侧缘凹陷中</b>。",
    "locationText": "在踝区，内踝前，胫骨前肌腱内侧缘凹陷中。",
    "mnemonic": "中封内踝前一寸，经金理气利前阴",
    "specialProperties": "经穴（属金）",
    "indications": [
      "疝气、少腹痛、遗精、阳痿",
      "小便不利、淋沥涩痛",
      "腹胀、黄疸",
      "内踝肿痛、足冷"
    ]
  },
  {
    "id": "acu-ligou",
    "name": "蠡沟",
    "pinyin": "lǐ gōu",
    "code": "LR5",
    "category": "足厥阴肝经",
    "subCategory": "小腿内侧",
    "locationHtml": "在小腿内侧，<b>内踝尖上 5 寸，胫骨内侧面中央</b>。",
    "locationText": "在小腿内侧，内踝尖上 5 寸，胫骨内侧面中央。",
    "mnemonic": "蠡沟内踝上五寸，肝经络穴止阴痒",
    "specialProperties": "络穴",
    "indications": [
      "月经不调、赤白带下、阴挺、阴痒",
      "疝气、小便不利、睾丸肿痛",
      "小腹痛、下肢痿痹"
    ]
  },
  {
    "id": "acu-zhongdu-lr",
    "name": "中都",
    "pinyin": "zhōng dū",
    "code": "LR6",
    "category": "足厥阴肝经",
    "subCategory": "小腿内侧",
    "locationHtml": "在小腿内侧，<b>内踝尖上 7 寸，胫骨内侧面中央</b>。",
    "locationText": "在小腿内侧，内踝尖上 7 寸，胫骨内侧面中央。",
    "mnemonic": "中都内踝上七寸，郄穴急止崩漏血",
    "specialProperties": "郄穴",
    "indications": [
      "急性崩漏、恶露不尽、带下",
      "腹痛、腹泻、疝气",
      "下肢痿痹、胫骨冷痛"
    ]
  },
  {
    "id": "acu-xiguan",
    "name": "膝关",
    "pinyin": "xī guān",
    "code": "LR7",
    "category": "足厥阴肝经",
    "subCategory": "小腿内侧",
    "locationHtml": "在小腿内侧，<b>阴陵泉后 1 寸，胫骨内侧髁下方</b>。",
    "locationText": "在小腿内侧，阴陵泉后 1 寸，胫骨内侧髁下方。",
    "mnemonic": "膝关阴陵后一寸，舒筋通络止膝痹",
    "specialProperties": "",
    "indications": [
      "膝关节肿痛、屈伸不利",
      "下肢痿痹、脚气"
    ]
  },
  {
    "id": "acu-ququan",
    "name": "曲泉",
    "pinyin": "qū quán",
    "code": "LR8",
    "category": "足厥阴肝经",
    "subCategory": "膝部",
    "locationHtml": "在膝后内侧区，<b>腘横纹内侧端，半膜肌肌腱前缘凹陷中</b>。屈膝取穴。",
    "locationText": "在膝后内侧区，腘横纹内侧端，半膜肌肌腱前缘凹陷中。屈膝取穴。",
    "mnemonic": "曲泉屈膝腘横内，合水滋阴调妇科",
    "specialProperties": "合穴（属水）",
    "indications": [
      "月经不调、痛经、带下、阴挺、阴痒",
      "阳痿、遗精、疝气、小便不利",
      "膝髌肿痛、下肢痿痹",
      "腹痛、泄泻"
    ]
  },
  {
    "id": "acu-yinbao",
    "name": "阴包",
    "pinyin": "yīn bāo",
    "code": "LR9",
    "category": "足厥阴肝经",
    "subCategory": "股内侧区",
    "locationHtml": "在股内侧区，<b>股骨内上髁上 4 寸，缝匠肌后缘</b>。",
    "locationText": "在股内侧区，股骨内上髁上 4 寸，缝匠肌后缘。",
    "mnemonic": "阴包曲泉上四寸，调经利尿止腹痛",
    "specialProperties": "",
    "indications": [
      "月经不调、遗尿、小便不利",
      "少腹痛、腰骶引痛"
    ]
  },
  {
    "id": "acu-zuwuli",
    "name": "足五里",
    "pinyin": "zú wǔ lǐ",
    "code": "LR10",
    "category": "足厥阴肝经",
    "subCategory": "股前内侧",
    "locationHtml": "在股前内侧区，<b>气冲直下 3 寸，股动脉搏动内侧</b>。",
    "locationText": "在股前内侧区，气冲直下 3 寸，股动脉搏动内侧。",
    "mnemonic": "足五里气冲下三，通调下焦止阴肿",
    "specialProperties": "",
    "indications": [
      "小腹胀痛、少腹胀满",
      "小便不通、遗尿",
      "睾丸肿痛、嗜卧"
    ]
  },
  {
    "id": "acu-yinlian",
    "name": "阴廉",
    "pinyin": "yīn lián",
    "code": "LR11",
    "category": "足厥阴肝经",
    "subCategory": "股前内侧",
    "locationHtml": "在股前内侧区，<b>气冲直下 2 寸，大腿内侧耻骨肌处</b>。",
    "locationText": "在股前内侧区，气冲直下 2 寸，大腿内侧耻骨肌处。",
    "mnemonic": "阴廉气冲下二寸，调经理气利不孕",
    "specialProperties": "",
    "indications": [
      "月经不调、赤白带下、经闭",
      "少腹痛、不孕症",
      "股内侧痛、下肢挛急"
    ]
  },
  {
    "id": "acu-jimai",
    "name": "急脉",
    "pinyin": "jí mài",
    "code": "LR12",
    "category": "足厥阴肝经",
    "subCategory": "腹股沟区",
    "locationHtml": "在腹股沟区，<b>横平耻骨联合下缘，曲骨旁开 2.5 寸</b>。",
    "locationText": "在腹股沟区，横平耻骨联合下缘，曲骨旁开 2.5 寸。",
    "mnemonic": "急脉曲骨旁二五，散寒止痛利疝气",
    "specialProperties": "",
    "indications": [
      "疝气、阴部痛、睾丸肿痛",
      "少腹痛、股内侧痛"
    ]
  },
  {
    "id": "acu-zhangmen",
    "name": "章门",
    "pinyin": "zhāng mén",
    "code": "LR13",
    "category": "足厥阴肝经",
    "subCategory": "侧腹部",
    "locationHtml": "在侧腹部，<b>第 11 肋骨游离端下方</b>。<br>简便取穴法：屈肘合腋，肘尖所指处是穴。",
    "locationText": "在侧腹部，第 11 肋骨游离端下方。简便取穴法：屈肘合腋，肘尖所指处是穴。",
    "mnemonic": "脏会章门十一端，脾募健脾消痞块",
    "specialProperties": "脾之募穴；八会穴之脏会；足厥阴、少阳交会穴",
    "indications": [
      "腹痛、腹胀、肠鸣、泄泻、痢疾、便溏",
      "胃痛、呕吐、痞块、肝脾肿大",
      "胁肋疼痛、黄疸"
    ]
  },
  {
    "id": "acu-qimen",
    "name": "期门",
    "pinyin": "qī mén",
    "code": "LR14",
    "category": "足厥阴肝经",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>第 6 肋间隙，前正中线旁开 4 寸</b>（乳头直下）。",
    "locationText": "在胸部，第 6 肋间隙，前正中线旁开 4 寸（乳头直下）。",
    "mnemonic": "期门乳下六肋间，肝之募穴调气滞",
    "specialProperties": "肝之募穴；足厥阴、少阳与阴维脉交会穴",
    "indications": [
      "胸胁胀痛、乳痈、乳癖",
      "呕吐、吞酸、呃逆、腹胀",
      "郁证、失眠、疟疾、热入血室"
    ]
  },
  {
    "id": "acu-changqiang",
    "name": "长强",
    "pinyin": "cháng qiáng",
    "code": "GV1",
    "category": "督脉",
    "subCategory": "会阴区",
    "locationHtml": "在会阴区，<b>尾骨端下 0.5 寸</b>，尾骨端与肛门连线的中点处。",
    "locationText": "在会阴区，尾骨端下 0.5 寸，尾骨端与肛门连线的中点处。",
    "mnemonic": "长强尾端半寸寻，督脉络穴治痔漏",
    "specialProperties": "督脉之络穴；督脉与足少阳交会穴",
    "indications": [
      "痔疮、脱肛、便血、便秘、泄泻、痢疾",
      "便闭、遗精、阳痿",
      "腰脊强痛、癫狂、小儿惊风"
    ]
  },
  {
    "id": "acu-yaoshu",
    "name": "腰俞",
    "pinyin": "yāo shū",
    "code": "GV2",
    "category": "督脉",
    "subCategory": "骶区",
    "locationHtml": "在骶区，<b>正对骶管裂孔中</b>。",
    "locationText": "在骶区，正对骶管裂孔中。",
    "mnemonic": "腰俞骶管裂孔中，温补下焦通经络",
    "specialProperties": "",
    "indications": [
      "腰脊强痛、下肢痿痹",
      "月经不调、经闭、带下",
      "痔疾、便血、脱肛"
    ]
  },
  {
    "id": "acu-yaoyangguan",
    "name": "腰阳关",
    "pinyin": "yāo yáng guān",
    "code": "GV3",
    "category": "督脉",
    "subCategory": "腰部",
    "locationHtml": "在腰部，<b>第 4 腰椎棘突下凹陷中</b>。<br>简便取穴法：两髂嵴最高点连线横平第4腰椎棘突。",
    "locationText": "在腰部，第 4 腰椎棘突下凹陷中。简便取穴法：两髂嵴最高点连线横平第4腰椎棘突。",
    "mnemonic": "腰阳关四腰椎下，温阳强腰利坐骨",
    "specialProperties": "",
    "indications": [
      "腰骶疼痛、下肢瘫痪、坐骨神经痛",
      "月经不调、痛经、带下",
      "遗精、阳痿"
    ]
  },
  {
    "id": "acu-mingmen",
    "name": "命门",
    "pinyin": "mìng mén",
    "code": "GV4",
    "category": "督脉",
    "subCategory": "腰部",
    "locationHtml": "在腰部，<b>第 2 腰椎棘突下凹陷中</b>。<br>简便取穴法：与肚脐（神阙）正对相平。",
    "locationText": "在腰部，第 2 腰椎棘突下凹陷中。简便取穴法：与肚脐（神阙）正对相平。",
    "mnemonic": "命门二腰椎突下，补肾培元壮真火",
    "specialProperties": "培元固本要穴",
    "indications": [
      "虚损腰痛、腰脊强痛、下肢痿痹",
      "阳痿、早泄、遗精、精冷不育",
      "月经不调、痛经、赤白带下、宫冷不孕",
      "五更泄泻、遗尿、小便频数"
    ]
  },
  {
    "id": "acu-xuanshu",
    "name": "悬枢",
    "pinyin": "xuán shū",
    "code": "GV5",
    "category": "督脉",
    "subCategory": "腰部",
    "locationHtml": "在腰部，<b>第 1 腰椎棘突下凹陷中</b>。",
    "locationText": "在腰部，第 1 腰椎棘突下凹陷中。",
    "mnemonic": "悬枢一腰椎突下，健脾温中调肠胃",
    "specialProperties": "",
    "indications": [
      "腰脊强痛",
      "腹胀、腹痛、完谷不化、泄泻"
    ]
  },
  {
    "id": "acu-jizhong",
    "name": "脊中",
    "pinyin": "jǐ zhōng",
    "code": "GV6",
    "category": "督脉",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 11 胸椎棘突下凹陷中</b>。",
    "locationText": "在背部，第 11 胸椎棘突下凹陷中。",
    "mnemonic": "脊中十一胸椎下，健脾利湿调泄泻",
    "specialProperties": "",
    "indications": [
      "腰脊强痛",
      "腹胀、泄泻、痢疾、便血、黄疸",
      "脱肛、小儿疳积"
    ]
  },
  {
    "id": "acu-zhongshu",
    "name": "中枢",
    "pinyin": "zhōng shū",
    "code": "GV7",
    "category": "督脉",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 10 胸椎棘突下凹陷中</b>。",
    "locationText": "在背部，第 10 胸椎棘突下凹陷中。",
    "mnemonic": "中枢十胸椎突下，利胆和胃通背痛",
    "specialProperties": "",
    "indications": [
      "腰脊强痛、背痛",
      "腹痛、腹胀、黄疸、呕吐"
    ]
  },
  {
    "id": "acu-jinsuo",
    "name": "筋缩",
    "pinyin": "jīn suō",
    "code": "GV8",
    "category": "督脉",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 9 胸椎棘突下凹陷中</b>。",
    "locationText": "在背部，第 9 胸椎棘突下凹陷中。",
    "mnemonic": "筋缩九胸椎突下，平肝息风舒筋挛",
    "specialProperties": "",
    "indications": [
      "癫痫、惊狂、抽搐",
      "脊柱强痛、腰痛",
      "胃痛、胃痉挛"
    ]
  },
  {
    "id": "acu-zhiyang",
    "name": "至阳",
    "pinyin": "zhì yáng",
    "code": "GV9",
    "category": "督脉",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 7 胸椎棘突下凹陷中</b>。<br>简便取穴法：两肩胛骨下角连线横平第7胸椎棘突。",
    "locationText": "在背部，第 7 胸椎棘突下凹陷中。简便取穴法：两肩胛骨下角连线横平第7胸椎棘突。",
    "mnemonic": "至阳七胸椎突下，宽胸退黄利心绞",
    "specialProperties": "",
    "indications": [
      "心痛、胸闷、心绞痛、气喘",
      "黄疸、胁肋胀痛、胆囊炎",
      "胃痛、背脊强痛"
    ]
  },
  {
    "id": "acu-lingtai",
    "name": "灵台",
    "pinyin": "líng tái",
    "code": "GV10",
    "category": "督脉",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 6 胸椎棘突下凹陷中</b>。",
    "locationText": "在背部，第 6 胸椎棘突下凹陷中。",
    "mnemonic": "灵台六胸椎突下，宣肺清热消痈疽",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、胸痛",
      "疔疮、痈疽、背痛",
      "项强"
    ]
  },
  {
    "id": "acu-shendao",
    "name": "神道",
    "pinyin": "shén dào",
    "code": "GV11",
    "category": "督脉",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 5 胸椎棘突下凹陷中</b>。",
    "locationText": "在背部，第 5 胸椎棘突下凹陷中。",
    "mnemonic": "神道五胸椎突下，宁心安神定惊痫",
    "specialProperties": "",
    "indications": [
      "心痛、惊悸、失眠、健忘",
      "癫痫、小儿惊风",
      "咳嗽、气喘、脊背痛"
    ]
  },
  {
    "id": "acu-shenzhu",
    "name": "身柱",
    "pinyin": "shēn zhù",
    "code": "GV12",
    "category": "督脉",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 3 胸椎棘突下凹陷中</b>。",
    "locationText": "在背部，第 3 胸椎棘突下凹陷中。",
    "mnemonic": "身柱三胸椎突下，宣肺止咳强身体",
    "specialProperties": "小儿保健要穴",
    "indications": [
      "咳嗽、气喘、肺痨",
      "小儿惊风、抽搐、癫痫",
      "身热、脊背强痛、疔疮"
    ]
  },
  {
    "id": "acu-taodao",
    "name": "陶道",
    "pinyin": "táo dào",
    "code": "GV13",
    "category": "督脉",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 1 胸椎棘突下凹陷中</b>。",
    "locationText": "在背部，第 1 胸椎棘突下凹陷中。",
    "mnemonic": "陶道一胸椎突下，解表清热治疟疾",
    "specialProperties": "督脉与足太阳交会穴",
    "indications": [
      "热病、恶寒、疟疾、感冒",
      "头痛、项强、脊柱痛",
      "癫狂"
    ]
  },
  {
    "id": "acu-dazhui",
    "name": "大椎",
    "pinyin": "dà zhuī",
    "code": "GV14",
    "category": "督脉",
    "subCategory": "颈背部",
    "locationHtml": "在颈背部，<b>第 7 颈椎棘突下凹陷中</b>。<br>简便取穴法：低头时颈后正中最高突起骨下方凹陷。",
    "locationText": "在颈背部，第 7 颈椎棘突下凹陷中。简便取穴法：低头时颈后正中最高突起骨下方凹陷。",
    "mnemonic": "大椎七颈棘突下，诸阳之会退高热",
    "specialProperties": "诸阳之会；督脉与手足三阳经交会穴",
    "indications": [
      "外感发热、热病、疟疾、骨蒸潮热",
      "咳嗽、气喘、肺结核",
      "头痛、项强、落枕、颈椎病",
      "癫狂痫、小儿惊风",
      "风疹、湿疹、痤疮"
    ]
  },
  {
    "id": "acu-yamen",
    "name": "哑门",
    "pinyin": "yǎ mén",
    "code": "GV15",
    "category": "督脉",
    "subCategory": "颈后区",
    "locationHtml": "在颈后区，<b>第 2 颈椎棘突上际凹陷中，后发际正中直上 0.5 寸</b>。",
    "locationText": "在颈后区，第 2 颈椎棘突上际凹陷中，后发际正中直上 0.5 寸。",
    "mnemonic": "哑门发际上半寸，通窍开音利舌强",
    "specialProperties": "督脉与阳维脉交会穴",
    "indications": [
      "舌强不语、暴喑、重舌、聋哑",
      "癫狂痫、中风、头痛、眩晕",
      "颈项强急"
    ]
  },
  {
    "id": "acu-fengfu",
    "name": "风府",
    "pinyin": "fēng fǔ",
    "code": "GV16",
    "category": "督脉",
    "subCategory": "颈后区",
    "locationHtml": "在颈后区，<b>枕外隆凸直下，后发际正中直上 1 寸</b>，两侧斜方肌之间凹陷中。",
    "locationText": "在颈后区，枕外隆凸直下，后发际正中直上 1 寸，两侧斜方肌之间凹陷中。",
    "mnemonic": "风府发际上一寸，散风清头治中风",
    "specialProperties": "督脉与阳维脉交会穴",
    "indications": [
      "中风、失语、半身不遂、癫狂痫",
      "头痛、眩晕、颈项强痛",
      "目眩、耳鸣、鼻衄、感冒"
    ]
  },
  {
    "id": "acu-naohu",
    "name": "脑户",
    "pinyin": "nǎo hù",
    "code": "GV17",
    "category": "督脉",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>枕外隆凸的上缘凹陷中，后发际正中直上 2.5 寸</b>。",
    "locationText": "在头部，枕外隆凸的上缘凹陷中，后发际正中直上 2.5 寸。",
    "mnemonic": "脑户枕隆突上凹，清脑安神止头风",
    "specialProperties": "督脉与足太阳交会穴",
    "indications": [
      "头痛、眩晕、项强",
      "癫狂、惊悸",
      "目赤肿痛"
    ]
  },
  {
    "id": "acu-qiangjian",
    "name": "强间",
    "pinyin": "qiáng jiān",
    "code": "GV18",
    "category": "督脉",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>后发际正中直上 4 寸（脑户上 1.5 寸）</b>。",
    "locationText": "在头部，后发际正中直上 4 寸（脑户上 1.5 寸）。",
    "mnemonic": "强间脑户上一五，熄风安神止头痛",
    "specialProperties": "",
    "indications": [
      "头痛、目眩、项强",
      "癫狂、小儿惊风",
      "失眠、呕吐"
    ]
  },
  {
    "id": "acu-houding",
    "name": "后顶",
    "pinyin": "hòu dǐng",
    "code": "GV19",
    "category": "督脉",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>后发际正中直上 5.5 寸（百会后 1.5 寸）</b>。",
    "locationText": "在头部，后发际正中直上 5.5 寸（百会后 1.5 寸）。",
    "mnemonic": "后顶百会后寸半，清脑明目除眩晕",
    "specialProperties": "",
    "indications": [
      "头痛、眩晕、项强",
      "癫狂、痫证、小儿惊风"
    ]
  },
  {
    "id": "acu-baihui",
    "name": "百会",
    "pinyin": "bǎi huì",
    "code": "GV20",
    "category": "督脉",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>前发际正中直上 5 寸</b>，头顶正中线上。<br>简便取穴法：折耳向前，两耳尖直上连线与头正中线的交点。",
    "locationText": "在头部，前发际正中直上 5 寸，头顶正中线上。简便取穴法：折耳向前，两耳尖直上连线与头正中线的交点。",
    "mnemonic": "百会头顶两耳连，升阳举陷安神志",
    "specialProperties": "三阳五会；诸阳之会",
    "indications": [
      "头痛、头晕、眩晕、中风、失语、半身不遂",
      "脱肛、子宫脱垂、胃下垂、久泻等气虚下陷证",
      "失眠、健忘、神经衰弱、抑郁、癫狂痫",
      "高血压、低血压"
    ]
  },
  {
    "id": "acu-qianding",
    "name": "前顶",
    "pinyin": "qián dǐng",
    "code": "GV21",
    "category": "督脉",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>前发际正中直上 3.5 寸（百会前 1.5 寸）</b>。",
    "locationText": "在头部，前发际正中直上 3.5 寸（百会前 1.5 寸）。",
    "mnemonic": "前顶百会前寸半，祛风止痛利头风",
    "specialProperties": "",
    "indications": [
      "头痛、眩晕、目眩",
      "小儿惊风、癫痫",
      "水肿、鼻塞"
    ]
  },
  {
    "id": "acu-xinhui",
    "name": "囟会",
    "pinyin": "xìn huì",
    "code": "GV22",
    "category": "督脉",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>前发际正中直上 2 寸（百会前 3 寸）</b>。",
    "locationText": "在头部，前发际正中直上 2 寸（百会前 3 寸）。",
    "mnemonic": "囟会发际上二寸，清头开窍治惊痫",
    "specialProperties": "",
    "indications": [
      "头痛、眩晕",
      "小儿惊风、癫痫",
      "鼻塞、鼻衄、鼻渊"
    ]
  },
  {
    "id": "acu-shangxing",
    "name": "上星",
    "pinyin": "shàng xīng",
    "code": "GV23",
    "category": "督脉",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>前发际正中直上 1 寸</b>。",
    "locationText": "在头部，前发际正中直上 1 寸。",
    "mnemonic": "上星发际上一寸，宣肺通窍治鼻渊",
    "specialProperties": "",
    "indications": [
      "鼻渊、鼻塞、鼻衄、慢性鼻炎",
      "头痛、目赤肿痛、近视",
      "癫狂、热病"
    ]
  },
  {
    "id": "acu-shenting",
    "name": "神庭",
    "pinyin": "shén tíng",
    "code": "GV24",
    "category": "督脉",
    "subCategory": "头部",
    "locationHtml": "在头部，<b>前发际正中直上 0.5 寸</b>。",
    "locationText": "在头部，前发际正中直上 0.5 寸。",
    "mnemonic": "神庭发际上半寸，安神宁脑止惊痫",
    "specialProperties": "督脉与足太阳、阳明交会穴",
    "indications": [
      "失眠、头痛、眩晕、惊悸",
      "癫狂、痫证",
      "目赤肿痛、目翳、迎风流泪",
      "鼻渊、鼻衄"
    ]
  },
  {
    "id": "acu-suliao",
    "name": "素髎",
    "pinyin": "sù liáo",
    "code": "GV25",
    "category": "督脉",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>鼻尖的正中央</b>。",
    "locationText": "在面部，鼻尖的正中央。",
    "mnemonic": "素髎鼻尖正中央，开窍苏厥升血压",
    "specialProperties": "",
    "indications": [
      "昏迷、厥脱、休克、新生儿窒息",
      "鼻衄、鼻塞、鼻渊、酒糟鼻",
      "低血压"
    ]
  },
  {
    "id": "acu-shuigou",
    "name": "水沟",
    "pinyin": "shuǐ gōu",
    "code": "GV26",
    "category": "督脉",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>人中沟的上 1/3 与中 1/3 交点处</b>。",
    "locationText": "在面部，人中沟的上 1/3 与中 1/3 交点处。",
    "mnemonic": "水沟人中上三分，醒脑开窍救休克",
    "specialProperties": "督脉与手足阳明交会穴；急救要穴",
    "indications": [
      "中风昏迷、晕厥、休克、中暑、癫狂痫、小儿惊风",
      "口眼㖞斜、面瘫、齿痛、口噤",
      "急性腰扭伤（远端特效取穴）"
    ]
  },
  {
    "id": "acu-duiduan",
    "name": "兑端",
    "pinyin": "duì duān",
    "code": "GV27",
    "category": "督脉",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>上唇结节的顶端，赤白肉际处</b>。",
    "locationText": "在面部，上唇结节的顶端，赤白肉际处。",
    "mnemonic": "兑端上唇尖端求，清热止痛利齿龈",
    "specialProperties": "",
    "indications": [
      "癫狂、惊痫",
      "齿痛、齿龈肿痛、口疮、口噤",
      "消渴、鼻衄"
    ]
  },
  {
    "id": "acu-yinjiao-gv",
    "name": "龈交",
    "pinyin": "yín jiāo",
    "code": "GV28",
    "category": "督脉",
    "subCategory": "口腔",
    "locationHtml": "在口腔部，<b>上唇系带与上齿龈连接处</b>。",
    "locationText": "在口腔部，上唇系带与上齿龈连接处。",
    "mnemonic": "龈交上唇系带间，清热明目治痔疮",
    "specialProperties": "督脉与任脉、足阳明交会穴",
    "indications": [
      "齿龈肿痛、口疮、口臭",
      "目赤肿痛、目生翳障",
      "痔疮、急性腰扭伤"
    ]
  },
  {
    "id": "acu-huiyin",
    "name": "会阴",
    "pinyin": "huì yīn",
    "code": "CV1",
    "category": "任脉",
    "subCategory": "会阴部",
    "locationHtml": "在会阴区，<b>男性在阴囊根部与肛门连线中点；女性在大阴唇后联合与肛门连线中点</b>。",
    "locationText": "在会阴区，男性在阴囊根部与肛门连线中点；女性在大阴唇后联合与肛门连线中点。",
    "mnemonic": "会阴两阴连线中，调补下焦苏溺水",
    "specialProperties": "任脉别络；任、督、冲脉之会",
    "indications": [
      "溺水窒息、昏迷、癫狂",
      "小便不利、遗尿、癃闭",
      "遗精、阳痿、月经不调、带下",
      "痔疮、脱肛、阴痒"
    ]
  },
  {
    "id": "acu-qugu",
    "name": "曲骨",
    "pinyin": "qū gǔ",
    "code": "CV2",
    "category": "任脉",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>耻骨联合上缘中点处</b>，前正中线上（脐下 5 寸）。",
    "locationText": "在下腹部，耻骨联合上缘中点处，前正中线上（脐下 5 寸）。",
    "mnemonic": "曲骨耻骨联合上，通淋调经利小便",
    "specialProperties": "任脉与足厥阴肝经交会穴",
    "indications": [
      "少腹胀满、小便淋沥、尿潴留、遗尿",
      "遗精、阳痿、早泄、睾丸炎",
      "月经不调、痛经、经闭、赤白带下"
    ]
  },
  {
    "id": "acu-zhongji",
    "name": "中极",
    "pinyin": "zhōng jí",
    "code": "CV3",
    "category": "任脉",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>前正中线上，脐中下 4 寸</b>。",
    "locationText": "在下腹部，前正中线上，脐中下 4 寸。",
    "mnemonic": "膀胱募穴在中极，脐下四寸通水道",
    "specialProperties": "膀胱之募穴；足三阴与任脉交会穴",
    "indications": [
      "小便不利、遗尿、尿频、尿急、尿痛",
      "遗精、阳痿、早泄",
      "月经不调、痛经、带下、崩漏、产后恶露不下"
    ]
  },
  {
    "id": "acu-guanyuan",
    "name": "关元",
    "pinyin": "guān yuán",
    "code": "CV4",
    "category": "任脉",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>前正中线上，脐中下 3 寸</b>。",
    "locationText": "在下腹部，前正中线上，脐中下 3 寸。",
    "mnemonic": "小肠募穴是关元，脐下三寸培元本",
    "specialProperties": "小肠之募穴；足三阴与任脉交会穴；强壮保健要穴",
    "indications": [
      "虚劳羸瘦、诸虚百损、少气乏力、畏寒肢冷",
      "阳痿、早泄、遗精、精少不育",
      "月经不调、痛经、经闭、崩漏、带下、不孕、产后虚羸",
      "遗尿、尿频、小便不利",
      "腹痛、腹泻、痢疾、脱肛"
    ]
  },
  {
    "id": "acu-shimen",
    "name": "石门",
    "pinyin": "shí mén",
    "code": "CV5",
    "category": "任脉",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>前正中线上，脐中下 2 寸</b>。",
    "locationText": "在下腹部，前正中线上，脐中下 2 寸。",
    "mnemonic": "三焦募穴号石门，脐下二寸调水道",
    "specialProperties": "三焦之募穴",
    "indications": [
      "腹痛、腹胀、水肿、小便不利",
      "遗尿、便秘、泄泻",
      "崩漏、带下、经闭、产后恶露不尽"
    ]
  },
  {
    "id": "acu-qihai",
    "name": "气海",
    "pinyin": "qì hǎi",
    "code": "CV6",
    "category": "任脉",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>前正中线上，脐中下 1.5 寸</b>。",
    "locationText": "在下腹部，前正中线上，脐中下 1.5 寸。",
    "mnemonic": "气海脐下一寸半，补气培元疗虚损",
    "specialProperties": "生气之海；强壮保健要穴",
    "indications": [
      "气虚喘息、虚劳衰惫、少气无力",
      "腹痛、腹胀、腹泻、痢疾、便秘、脱肛",
      "阳痿、遗精、遗尿、小便不利",
      "月经不调、痛经、经闭、崩漏、带下、产后恶露不止"
    ]
  },
  {
    "id": "acu-yinjiao-cv",
    "name": "阴交",
    "pinyin": "yīn jiāo",
    "code": "CV7",
    "category": "任脉",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>前正中线上，脐中下 1 寸</b>。",
    "locationText": "在下腹部，前正中线上，脐中下 1 寸。",
    "mnemonic": "阴交脐下一寸求，调经理气利水道",
    "specialProperties": "任脉、冲脉与足少阴交会穴",
    "indications": [
      "腹痛、腹胀、水肿、泄泻",
      "月经不调、痛经、崩漏、带下",
      "疝气、遗精"
    ]
  },
  {
    "id": "acu-shenque",
    "name": "神阙",
    "pinyin": "shén què",
    "code": "CV8",
    "category": "任脉",
    "subCategory": "中腹部",
    "locationHtml": "在腹中部，<b>脐中央</b>。禁针，多用艾灸或隔盐灸。",
    "locationText": "在腹中部，脐中央。禁针，多用艾灸或隔盐灸。",
    "mnemonic": "神阙正在肚脐中，温阳回阳灸特效",
    "specialProperties": "禁针穴（多用艾灸）",
    "indications": [
      "中风脱证、虚脱、四肢厥冷、神昏",
      "腹痛、腹胀、肠鸣、泄泻、痢疾、便秘、脱肛",
      "水肿、小便不利、小儿疳积"
    ]
  },
  {
    "id": "acu-shuifen",
    "name": "水分",
    "pinyin": "shuǐ fēn",
    "code": "CV9",
    "category": "任脉",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>前正中线上，脐中上 1 寸</b>。",
    "locationText": "在上腹部，前正中线上，脐中上 1 寸。",
    "mnemonic": "水分脐上一寸寻，利水消肿调水气",
    "specialProperties": "",
    "indications": [
      "水肿、小便不利、腹水",
      "腹痛、腹胀、肠鸣、泄泻",
      "胃痛、翻胃"
    ]
  },
  {
    "id": "acu-xiawan",
    "name": "下脘",
    "pinyin": "xià wǎn",
    "code": "CV10",
    "category": "任脉",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>前正中线上，脐中上 2 寸</b>。",
    "locationText": "在上腹部，前正中线上，脐中上 2 寸。",
    "mnemonic": "下脘脐上二寸求，消积健脾和胃气",
    "specialProperties": "任脉与足太阴交会穴",
    "indications": [
      "胃痛、腹胀、呕吐、反胃",
      "食谷不化、泄泻、痢疾",
      "痞块、小儿疳积"
    ]
  },
  {
    "id": "acu-jianli",
    "name": "建里",
    "pinyin": "jiàn lǐ",
    "code": "CV11",
    "category": "任脉",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>前正中线上，脐中上 3 寸</b>。",
    "locationText": "在上腹部，前正中线上，脐中上 3 寸。",
    "mnemonic": "建里脐上三寸中，健脾和中消食积",
    "specialProperties": "",
    "indications": [
      "胃痛、腹胀、呕吐、食欲不振",
      "水肿、腹痛"
    ]
  },
  {
    "id": "acu-zhongwan",
    "name": "中脘",
    "pinyin": "zhōng wǎn",
    "code": "CV12",
    "category": "任脉",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>前正中线上，脐中上 4 寸</b>。<br>简便取穴法：胸骨下端剑突与肚脐连线中点。",
    "locationText": "在上腹部，前正中线上，脐中上 4 寸。简便取穴法：胸骨下端剑突与肚脐连线中点。",
    "mnemonic": "胃募腑会是中脘，脐上四寸调脾胃",
    "specialProperties": "胃之募穴；八会穴之腑会；手太阳、少阳、足阳明与任脉交会穴",
    "indications": [
      "胃痛、腹痛、腹胀、呕吐、反胃、泛酸、呃逆",
      "消化不良、食欲不振、泄泻、便秘、痢疾",
      "癫狂、失眠、中风",
      "黄疸、水肿"
    ]
  },
  {
    "id": "acu-shangwan",
    "name": "上脘",
    "pinyin": "shàng wǎn",
    "code": "CV13",
    "category": "任脉",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>前正中线上，脐中上 5 寸</b>。",
    "locationText": "在上腹部，前正中线上，脐中上 5 寸。",
    "mnemonic": "上脘脐上五寸求，和胃降逆止呕吐",
    "specialProperties": "任脉与手太阳、足阳明交会穴",
    "indications": [
      "胃痛、腹胀、呕吐、反胃、泛酸",
      "呃逆、癫痫、惊悸"
    ]
  },
  {
    "id": "acu-juque",
    "name": "巨阙",
    "pinyin": "jù què",
    "code": "CV14",
    "category": "任脉",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>前正中线上，脐中上 6 寸</b>。",
    "locationText": "在上腹部，前正中线上，脐中上 6 寸。",
    "mnemonic": "心募巨阙脐上六，宽胸宁心止心痛",
    "specialProperties": "心之募穴",
    "indications": [
      "胸痛、心痛、心悸、胸闷、怔忡",
      "胃痛、呕吐、泛酸",
      "癫狂痫、善惊、失眠"
    ]
  },
  {
    "id": "acu-jiuwei",
    "name": "鸠尾",
    "pinyin": "jiū wěi",
    "code": "CV15",
    "category": "任脉",
    "subCategory": "上腹部",
    "locationHtml": "在上腹部，<b>前正中线上，胸剑结合部下 1 寸</b>。",
    "locationText": "在上腹部，前正中线上，胸剑结合部下 1 寸。",
    "mnemonic": "鸠尾胸剑下一寸，任脉别络定癫痫",
    "specialProperties": "任脉之络穴",
    "indications": [
      "心痛、心悸、胸闷",
      "癫狂痫、惊狂",
      "胃痛、呕吐、腹胀"
    ]
  },
  {
    "id": "acu-zhongting",
    "name": "中庭",
    "pinyin": "zhōng tíng",
    "code": "CV16",
    "category": "任脉",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>前正中线上，胸剑结合部中点</b>。",
    "locationText": "在胸部，前正中线上，胸剑结合部中点。",
    "mnemonic": "中庭胸剑结合中，宽胸利膈降食道",
    "specialProperties": "",
    "indications": [
      "胸胁胀痛、心痛、胸闷",
      "噎膈、反胃、食不下",
      "呕吐、小儿吐乳"
    ]
  },
  {
    "id": "acu-tanzhong",
    "name": "膻中",
    "pinyin": "dàn zhōng",
    "code": "CV17",
    "category": "任脉",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>横平第 4 肋间隙，前正中线上</b>。<br>简便取穴法：两乳头连线中点处。",
    "locationText": "在胸部，横平第 4 肋间隙，前正中线上。简便取穴法：两乳头连线中点处。",
    "mnemonic": "气会膻中心包募，两乳之间调气机",
    "specialProperties": "心包之募穴；八会穴之气会；四气街之胸气街",
    "indications": [
      "咳嗽、气喘、胸闷、心痛、胸膜炎",
      "产后少乳、乳痈、乳癖",
      "噎膈、呃逆、呕吐",
      "肺痈、心悸"
    ]
  },
  {
    "id": "acu-yutang",
    "name": "玉堂",
    "pinyin": "yù táng",
    "code": "CV18",
    "category": "任脉",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>横平第 3 肋间隙，前正中线上</b>。",
    "locationText": "在胸部，横平第 3 肋间隙，前正中线上。",
    "mnemonic": "玉堂平三肋间中，宽胸宣肺止咳嗽",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、胸痛、胸闷",
      "呕吐、喉痹"
    ]
  },
  {
    "id": "acu-zigong-cv",
    "name": "紫宫",
    "pinyin": "zǐ gōng",
    "code": "CV19",
    "category": "任脉",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>横平第 2 肋间隙，前正中线上</b>。",
    "locationText": "在胸部，横平第 2 肋间隙，前正中线上。",
    "mnemonic": "紫宫平二肋间中，宽胸止痛化痰饮",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、胸胁胀痛",
      "噎膈、喉痹"
    ]
  },
  {
    "id": "acu-huagai",
    "name": "华盖",
    "pinyin": "huá gài",
    "code": "CV20",
    "category": "任脉",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>横平第 1 肋间隙，前正中线上</b>。",
    "locationText": "在胸部，横平第 1 肋间隙，前正中线上。",
    "mnemonic": "华盖平一肋间中，降逆宣肺利咽喉",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、胸痛",
      "咽喉肿痛、喉痹"
    ]
  },
  {
    "id": "acu-xuanji",
    "name": "璇玑",
    "pinyin": "xuán jī",
    "code": "CV21",
    "category": "任脉",
    "subCategory": "胸部",
    "locationHtml": "在胸部，<b>前正中线上，天突下 1 寸，胸骨柄中央</b>。",
    "locationText": "在胸部，前正中线上，天突下 1 寸，胸骨柄中央。",
    "mnemonic": "璇玑天突下一寸，宽胸利膈通食道",
    "specialProperties": "",
    "indications": [
      "咳嗽、气喘、胸胁满痛",
      "噎膈、咽喉肿痛"
    ]
  },
  {
    "id": "acu-tiantu",
    "name": "天突",
    "pinyin": "tiān tū",
    "code": "CV22",
    "category": "任脉",
    "subCategory": "颈部",
    "locationHtml": "在颈前区，<b>胸骨上窝中央，前正中线上</b>。",
    "locationText": "在颈前区，胸骨上窝中央，前正中线上。",
    "mnemonic": "天突胸骨上窝中，宣肺利咽化痰喘",
    "specialProperties": "任脉与阴维脉交会穴",
    "indications": [
      "咳嗽、气喘、咯血、胸闷、暴喑",
      "咽喉肿痛、梅核气、瘿气",
      "噎膈、吞咽困难"
    ]
  },
  {
    "id": "acu-lianquan",
    "name": "廉泉",
    "pinyin": "lián quán",
    "code": "CV23",
    "category": "任脉",
    "subCategory": "颈前区",
    "locationHtml": "在颈前区，<b>喉结上方，舌骨上缘凹陷中</b>，前正中线上。",
    "locationText": "在颈前区，喉结上方，舌骨上缘凹陷中，前正中线上。",
    "mnemonic": "廉泉喉结舌骨上，开音利窍治失语",
    "specialProperties": "任脉与阴维脉交会穴",
    "indications": [
      "中风舌强不语、失语、吞咽困难",
      "暴喑、舌下肿痛、口疮、流涎",
      "喉痹、梅核气"
    ]
  },
  {
    "id": "acu-chengjiang",
    "name": "承浆",
    "pinyin": "chéng jiāng",
    "code": "CV24",
    "category": "任脉",
    "subCategory": "面部",
    "locationHtml": "在面部，<b>颏唇沟的正中凹陷处</b>。",
    "locationText": "在面部，颏唇沟的正中凹陷处。",
    "mnemonic": "承浆颏唇正中凹，通络消肿治面瘫",
    "specialProperties": "任脉与足阳明交会穴",
    "indications": [
      "口眼㖞斜、面瘫、面肿、齿痛、龈肿",
      "流涎、癫狂、昏迷",
      "暴喑、消渴"
    ]
  },
  {
    "id": "acu-sishencong",
    "name": "四神聪",
    "pinyin": "sì shén cōng",
    "code": "EX-HN1",
    "category": "经外奇穴",
    "subCategory": "头颈部",
    "locationHtml": "在头部，<b>百会穴前、后、左、右各旁开 1 寸</b>，共 4 个穴位。",
    "locationText": "在头部，百会穴前、后、左、右各旁开 1 寸，共 4 个穴位。",
    "mnemonic": "四神聪在百会旁，前后左右各一寸",
    "specialProperties": "",
    "indications": [
      "头痛、眩晕、失眠、健忘",
      "癫痫、精神失常、脑积水",
      "小儿多动症、智力发育迟缓"
    ]
  },
  {
    "id": "acu-yintang",
    "name": "印堂",
    "pinyin": "yìn táng",
    "code": "EX-HN3",
    "category": "经外奇穴",
    "subCategory": "头颈部",
    "locationHtml": "在头部，<b>两眉头连线的中点</b>。",
    "locationText": "在头部，两眉头连线的中点。",
    "mnemonic": "印堂两眉头连中，安神明目通鼻窍",
    "specialProperties": "",
    "indications": [
      "头痛、眩晕、感冒、发热",
      "失眠、多梦、小儿急慢惊风",
      "鼻渊、鼻衄、过敏性鼻炎",
      "目赤肿痛、三叉神经痛"
    ]
  },
  {
    "id": "acu-yuyao",
    "name": "鱼腰",
    "pinyin": "yú yāo",
    "code": "EX-HN4",
    "category": "经外奇穴",
    "subCategory": "头颈部",
    "locationHtml": "在额部，<b>瞳孔直上，眉毛正中</b>。",
    "locationText": "在额部，瞳孔直上，眉毛正中。",
    "mnemonic": "鱼腰眉毛正中央，明目祛风利眼疾",
    "specialProperties": "",
    "indications": [
      "目赤肿痛、目翳、青盲、近视",
      "眼睑瞤动、眼睑下垂",
      "面瘫、眶上神经痛"
    ]
  },
  {
    "id": "acu-taiyang",
    "name": "太阳",
    "pinyin": "tài yáng",
    "code": "EX-HN5",
    "category": "经外奇穴",
    "subCategory": "头颈部",
    "locationHtml": "在头部，<b>眉梢与目外眦连线中点，向后旁开 1 横指凹陷处</b>。",
    "locationText": "在头部，眉梢与目外眦连线中点，向后旁开 1 横指凹陷处。",
    "mnemonic": "太阳外眦眉梢间，后开一指清头目",
    "specialProperties": "",
    "indications": [
      "偏正头痛、偏头痛、眩晕",
      "目赤肿痛、目翳、近视、视神经萎缩",
      "面瘫、牙痛、三叉神经痛"
    ]
  },
  {
    "id": "acu-erjian-ex",
    "name": "耳尖",
    "pinyin": "ěr jiān",
    "code": "EX-HN6",
    "category": "经外奇穴",
    "subCategory": "头颈部",
    "locationHtml": "在耳郭顶部，<b>将耳郭折向前方，耳郭上方的尖端处</b>。",
    "locationText": "在耳郭顶部，将耳郭折向前方，耳郭上方的尖端处。",
    "mnemonic": "耳尖折耳最高点，刺血清热降血压",
    "specialProperties": "",
    "indications": [
      "目赤肿痛、麦粒肿、目翳",
      "偏正头痛、眩晕、高血压",
      "发热、喉痹、腮腺炎"
    ]
  },
  {
    "id": "acu-qiuhou",
    "name": "球后",
    "pinyin": "qiú hòu",
    "code": "EX-HN7",
    "category": "经外奇穴",
    "subCategory": "头颈部",
    "locationHtml": "在面部，<b>眶下缘外 1/4 与内 3/4 交界处</b>。",
    "locationText": "在面部，眶下缘外 1/4 与内 3/4 交界处。",
    "mnemonic": "球后眶下缘外四，活血明目治眼底",
    "specialProperties": "",
    "indications": [
      "近视、视神经萎缩、视网膜色素变性",
      "白内障、青光眼、中心性视网膜炎"
    ]
  },
  {
    "id": "acu-jinjin",
    "name": "金津",
    "pinyin": "jīn jīn",
    "code": "EX-HN12",
    "category": "经外奇穴",
    "subCategory": "头颈部",
    "locationHtml": "在口腔，<b>舌下系带左侧静脉上</b>。",
    "locationText": "在口腔，舌下系带左侧静脉上。",
    "mnemonic": "金津舌下左静脉，刺血清热利舌咽",
    "specialProperties": "",
    "indications": [
      "口疮、舌肿、舌强不语",
      "喉痹、急性扁桃体炎",
      "失音、呕吐、消渴"
    ]
  },
  {
    "id": "acu-yuye",
    "name": "yù yè",
    "pinyin": "yù yè",
    "code": "EX-HN13",
    "category": "经外奇穴",
    "subCategory": "头颈部",
    "locationHtml": "在口腔，<b>舌下系带右侧静脉上</b>。",
    "locationText": "在口腔，舌下系带右侧静脉上。",
    "mnemonic": "玉液舌下右静脉，生津止渴利咽喉",
    "specialProperties": "",
    "indications": [
      "口疮、舌肿、舌强不语",
      "失音、喉痹、咽干",
      "消渴、呃逆"
    ]
  },
  {
    "id": "acu-qianzheng",
    "name": "牵正",
    "pinyin": "qiān zhèng",
    "code": "EX-HN16",
    "category": "经外奇穴",
    "subCategory": "头颈部",
    "locationHtml": "在面颊部，<b>耳垂前 0.5~1 寸处</b>。",
    "locationText": "在面颊部，耳垂前 0.5~1 寸处。",
    "mnemonic": "牵正耳垂前一横，舒筋活络治面瘫",
    "specialProperties": "",
    "indications": [
      "口眼㖞斜、面肌痉挛、面瘫",
      "口疮、腮腺炎"
    ]
  },
  {
    "id": "acu-yiming",
    "name": "翳明",
    "pinyin": "yì míng",
    "code": "EX-HN14",
    "category": "经外奇穴",
    "subCategory": "头颈部",
    "locationHtml": "在颈后区，<b>翳风穴后 1 寸</b>。",
    "locationText": "在颈后区，翳风穴后 1 寸。",
    "mnemonic": "翳明翳风后一寸，聪耳明目利睡眠",
    "specialProperties": "",
    "indications": [
      "近视、远视、白内障、夜盲",
      "耳鸣、耳聋",
      "头痛、眩晕、失眠"
    ]
  },
  {
    "id": "acu-jingb披露",
    "name": "颈百劳",
    "pinyin": "jǐng bǎi láo",
    "code": "EX-HN15",
    "category": "经外奇穴",
    "subCategory": "头颈部",
    "locationHtml": "在颈后区，<b>大椎穴直上 2 寸，后正中线旁开 1 寸</b>。",
    "locationText": "在颈后区，大椎穴直上 2 寸，后正中线旁开 1 寸。",
    "mnemonic": "颈百劳在大椎上，二寸旁开治颈椎",
    "specialProperties": "",
    "indications": [
      "颈项强痛、颈椎病、落枕",
      "咳嗽、气喘、肺痨、潮热盗汗",
      "瘰疬"
    ]
  },
  {
    "id": "acu-dingchuan",
    "name": "定喘",
    "pinyin": "dìng chuǎn",
    "code": "EX-B1",
    "category": "经外奇穴",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 7 颈椎棘突下（大椎穴），后正中线旁开 0.5 寸</b>。",
    "locationText": "在背部，第 7 颈椎棘突下（大椎穴），后正中线旁开 0.5 寸。",
    "mnemonic": "定喘大椎旁半寸，宣肺止咳平哮喘",
    "specialProperties": "",
    "indications": [
      "哮喘、支气管炎、咳嗽、气喘",
      "百日咳",
      "落枕、肩背痛"
    ]
  },
  {
    "id": "acu-jiaji",
    "name": "夹脊",
    "pinyin": "jiá jǐ",
    "code": "EX-B2",
    "category": "经外奇穴",
    "subCategory": "背部",
    "locationHtml": "在脊柱区，<b>第 1 胸椎至第 5 腰椎棘突下，后正中线旁开 0.5 寸</b>，一侧 17 穴，左右共 34 穴。",
    "locationText": "在脊柱区，第 1 胸椎至第 5 腰椎棘突下，后正中线旁开 0.5 寸，一侧 17 穴，左右共 34 穴。",
    "mnemonic": "华佗夹脊棘突旁，半寸十七调脏腑",
    "specialProperties": "",
    "indications": [
      "胸上部穴：心肺及上肢疾病",
      "胸下部穴：脾胃肝胆疾病",
      "腰部穴：肾、膀胱及下肢疾病",
      "脊柱强痛、强直性脊柱炎"
    ]
  },
  {
    "id": "acu-weiwanxiashu",
    "name": "胃脘下俞",
    "pinyin": "wèi wǎn xià shū",
    "code": "EX-B3",
    "category": "经外奇穴",
    "subCategory": "背部",
    "locationHtml": "在背部，<b>第 8 胸椎棘突下，后正中线旁开 1.5 寸</b>（胰俞）。",
    "locationText": "在背部，第 8 胸椎棘突下，后正中线旁开 1.5 寸（胰俞）。",
    "mnemonic": "胃脘下俞八椎旁，寸半降糖止消渴",
    "specialProperties": "",
    "indications": [
      "糖尿病、消渴、多饮多食",
      "胃痛、腹痛、胁肋痛",
      "呕吐、胸闷"
    ]
  },
  {
    "id": "acu-pigen",
    "name": "痞根",
    "pinyin": "pǐ gēn",
    "code": "EX-B4",
    "category": "经外奇穴",
    "subCategory": "腰部",
    "locationHtml": "在腰部，<b>第 1 腰椎棘突下，后正中线旁开 3.5 寸</b>。",
    "locationText": "在腰部，第 1 腰椎棘突下，后正中线旁开 3.5 寸。",
    "mnemonic": "痞根一腰椎旁三，理气消积化痞块",
    "specialProperties": "",
    "indications": [
      "痞块、肝脾肿大、腹内包块",
      "胃痛、腹痛、腰痛",
      "疝气"
    ]
  },
  {
    "id": "acu-xiajishu",
    "name": "下极俞",
    "pinyin": "xià jí shū",
    "code": "EX-B5",
    "category": "经外奇穴",
    "subCategory": "腰部",
    "locationHtml": "在腰部，<b>第 3 腰椎棘突下凹陷中</b>，后正中线上。",
    "locationText": "在腰部，第 3 腰椎棘突下凹陷中，后正中线上。",
    "mnemonic": "下极俞在三腰下，温肾壮阳通腰痛",
    "specialProperties": "",
    "indications": [
      "腰痛、下肢酸痛",
      "腹痛、腹泻",
      "月经不调"
    ]
  },
  {
    "id": "acu-yaoyi",
    "name": "腰宜",
    "pinyin": "yāo yí",
    "code": "EX-B6",
    "category": "经外奇穴",
    "subCategory": "腰部",
    "locationHtml": "在腰部，<b>第 4 腰椎棘突下，后正中线旁开 3 寸</b>。",
    "locationText": "在腰部，第 4 腰椎棘突下，后正中线旁开 3 寸。",
    "mnemonic": "腰宜四腰椎旁三，舒筋活血利腰伤",
    "specialProperties": "",
    "indications": [
      "急慢性腰痛、腰肌劳损",
      "妇人血崩、小腹痛"
    ]
  },
  {
    "id": "acu-yaoyan",
    "name": "腰眼",
    "pinyin": "yāo yǎn",
    "code": "EX-B7",
    "category": "经外奇穴",
    "subCategory": "腰部",
    "locationHtml": "在腰部，<b>第 4 腰椎棘突下，后正中线旁开约 3.5 寸凹陷中</b>。",
    "locationText": "在腰部，第 4 腰椎棘突下，后正中线旁开约 3.5 寸凹陷中。",
    "mnemonic": "腰眼四腰椎旁三半，强腰健肾治虚劳",
    "specialProperties": "",
    "indications": [
      "慢性腰痛、腰肌劳损、腰椎间盘突出",
      "月经不调、带下",
      "虚劳、遗尿"
    ]
  },
  {
    "id": "acu-shiqizhui",
    "name": "十七椎",
    "pinyin": "shí qī zhuī",
    "code": "EX-B8",
    "category": "经外奇穴",
    "subCategory": "腰骶部",
    "locationHtml": "在腰骶部，<b>第 5 腰椎棘突下凹陷中</b>，后正中线上。",
    "locationText": "在腰骶部，第 5 腰椎棘突下凹陷中，后正中线上。",
    "mnemonic": "十七椎五腰棘下，急止痛经利腰痛",
    "specialProperties": "",
    "indications": [
      "腰腿痛、坐骨神经痛",
      "痛经、月经不调、崩漏",
      "遗尿、下肢转筋"
    ]
  },
  {
    "id": "acu-zigong-ex",
    "name": "子宫",
    "pinyin": "zǐ gōng",
    "code": "EX-CA1",
    "category": "经外奇穴",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>脐中下 4 寸，前正中线旁开 3 寸</b>（中极旁 3 寸）。",
    "locationText": "在下腹部，脐中下 4 寸，前正中线旁开 3 寸（中极旁 3 寸）。",
    "mnemonic": "子宫中极旁三寸，调经促孕利妇科",
    "specialProperties": "",
    "indications": [
      "子宫脱垂、子宫下垂",
      "月经不调、痛经、崩漏、闭经",
      "不孕症、盆腔炎、阴挺"
    ]
  },
  {
    "id": "acu-sanjiaojiu",
    "name": "三角灸",
    "pinyin": "sān jiǎo jiǔ",
    "code": "EX-CA2",
    "category": "经外奇穴",
    "subCategory": "中腹部",
    "locationHtml": "在腹中部，以患者<b>两口角间长度为底边</b>，做等边三角形，顶角置于脐中，底边两端点处。",
    "locationText": "在腹中部，以患者两口角间长度为底边，做等边三角形，顶角置于脐中，底边两端点处。",
    "mnemonic": "三角灸以口角规，两角灸之止疝气",
    "specialProperties": "",
    "indications": [
      "疝气、少腹冷痛",
      "急慢性肠炎、腹痛、腹泻"
    ]
  },
  {
    "id": "acu-tuotuo",
    "name": "提托",
    "pinyin": "tí tuō",
    "code": "EX-CA3",
    "category": "经外奇穴",
    "subCategory": "下腹部",
    "locationHtml": "在下腹部，<b>脐中下 3 寸，前正中线旁开 4 寸</b>（关元旁 4 寸）。",
    "locationText": "在下腹部，脐中下 3 寸，前正中线旁开 4 寸（关元旁 4 寸）。",
    "mnemonic": "提托关元旁四寸，升阳固脱提子宫",
    "specialProperties": "",
    "indications": [
      "子宫脱垂、下腹痛",
      "疝气、肾下垂"
    ]
  },
  {
    "id": "acu-shixuan",
    "name": "十宣",
    "pinyin": "shí xuān",
    "code": "EX-UE11",
    "category": "经外奇穴",
    "subCategory": "手指部",
    "locationHtml": "在手十指尖端，<b>距指甲游离缘 0.1 寸</b>，左右共 10 穴。",
    "locationText": "在手十指尖端，距指甲游离缘 0.1 寸，左右共 10 穴。",
    "mnemonic": "十宣手十指尖端，点刺放血苏神昏",
    "specialProperties": "",
    "indications": [
      "昏迷、休克、中暑、中风",
      "高热、小儿惊风、癫狂",
      "手指麻木、咽喉肿痛"
    ]
  },
  {
    "id": "acu-sifeng",
    "name": "四缝",
    "pinyin": "sì fèng",
    "code": "EX-UE10",
    "category": "经外奇穴",
    "subCategory": "手指部",
    "locationHtml": "在第 2~5 指掌侧，<b>近端指间关节横纹中点</b>，左右共 8 穴。",
    "locationText": "在第 2~5 指掌侧，近端指间关节横纹中点，左右共 8 穴。",
    "mnemonic": "四缝二至五指横，点刺消积治疳积",
    "specialProperties": "",
    "indications": [
      "小儿疳积、消化不良、厌食",
      "腹泻、腹痛、百日咳",
      "小儿蛔虫症"
    ]
  },
  {
    "id": "acu-zhongkui",
    "name": "中魁",
    "pinyin": "zhōng kuí",
    "code": "EX-UE4",
    "category": "经外奇穴",
    "subCategory": "手指部",
    "locationHtml": "在手中指背侧，<b>近端指间关节中点处</b>。",
    "locationText": "在手中指背侧，近端指间关节中点处。",
    "mnemonic": "中魁中指背中节，灸治反胃降呃逆",
    "specialProperties": "",
    "indications": [
      "反胃、呃逆、恶心、吞酸",
      "噎膈、食管痉挛",
      "齿痛、白癜风"
    ]
  },
  {
    "id": "acu-baxie",
    "name": "八邪",
    "pinyin": "bā xié",
    "code": "EX-UE9",
    "category": "经外奇穴",
    "subCategory": "手背部",
    "locationHtml": "在手背，<b>五个手指间指蹼缘后方赤白肉际处</b>，左右共 8 穴。",
    "locationText": "在手背，五个手指间指蹼缘后方赤白肉际处，左右共 8 穴。",
    "mnemonic": "八邪手背指蹼缘，祛风清热利手指",
    "specialProperties": "",
    "indications": [
      "手背肿痛、手指麻木、手颤",
      "头痛、目痛、齿痛",
      "热病、咽痛"
    ]
  },
  {
    "id": "acu-luozhen",
    "name": "落枕",
    "pinyin": "luò zhěn",
    "code": "EX-UE8",
    "category": "经外奇穴",
    "subCategory": "手背部",
    "locationHtml": "在手背，<b>第 2、3 掌骨间，掌指关节后 0.5 寸凹陷中</b>（外劳宫）。",
    "locationText": "在手背，第 2、3 掌骨间，掌指关节后 0.5 寸凹陷中（外劳宫）。",
    "mnemonic": "落枕二三掌骨间，点按活动治落枕",
    "specialProperties": "",
    "indications": [
      "落枕、颈项强痛、肩背疼痛",
      "手指麻痛、消化不良"
    ]
  },
  {
    "id": "acu-yaotongdian",
    "name": "腰痛点",
    "pinyin": "yāo tòng diǎn",
    "code": "EX-UE7",
    "category": "经外奇穴",
    "subCategory": "手背部",
    "locationHtml": "在手背，<b>第 2、3 掌骨间及第 4、5 掌骨间，腕背横纹与掌指关节的中点处</b>，一侧 2 穴，左右共 4 穴。",
    "locationText": "在手背，第 2、3 掌骨间及第 4、5 掌骨间，腕背横纹与掌指关节的中点处，一侧 2 穴，左右共 4 穴。",
    "mnemonic": "腰痛二三四五间，急性腰扭特效灵",
    "specialProperties": "",
    "indications": [
      "急性腰扭伤、腰肌劳损",
      "头痛、手臂麻痛"
    ]
  },
  {
    "id": "acu-erbai",
    "name": "二白",
    "pinyin": "èr bái",
    "code": "EX-UE2",
    "category": "经外奇穴",
    "subCategory": "前臂前区",
    "locationHtml": "在前臂前区，<b>腕掌侧远端横纹上 4 寸，桡侧腕屈肌腱的两侧</b>，一侧 2 穴，左右共 4 穴。",
    "locationText": "在前臂前区，腕掌侧远端横纹上 4 寸，桡侧腕屈肌腱的两侧，一侧 2 穴，左右共 4 穴。",
    "mnemonic": "二白腕上四寸寻，通便升提治痔疾",
    "specialProperties": "",
    "indications": [
      "痔疮、便血、脱肛",
      "前臂痛、胸肋痛"
    ]
  },
  {
    "id": "acu-zhoujian",
    "name": "肘尖",
    "pinyin": "zhǒu jiān",
    "code": "EX-UE1",
    "category": "经外奇穴",
    "subCategory": "肘后区",
    "locationHtml": "在肘后区，<b>屈肘时尺骨鹰嘴的尖端</b>。",
    "locationText": "在肘后区，屈肘时尺骨鹰嘴的尖端。",
    "mnemonic": "肘尖屈肘鹰嘴尖，艾灸消痈化瘰疬",
    "specialProperties": "",
    "indications": [
      "瘰疬、疔疮、痈疽",
      "肠痈、乳痈"
    ]
  },
  {
    "id": "acu-baichongwo",
    "name": "百虫窝",
    "pinyin": "bǎi chóng wō",
    "code": "EX-LE3",
    "category": "经外奇穴",
    "subCategory": "股前内侧",
    "locationHtml": "在股前内侧区，<b>血海穴直上 1 寸</b>。",
    "locationText": "在股前内侧区，血海穴直上 1 寸。",
    "mnemonic": "百虫窝在血海上，一寸清热止皮肤",
    "specialProperties": "",
    "indications": [
      "皮肤瘙痒、荨麻疹、湿疹",
      "风疹、蛔虫病、下肢痿痹"
    ]
  },
  {
    "id": "acu-heding",
    "name": "鹤顶",
    "pinyin": "hè dǐng",
    "code": "EX-LE2",
    "category": "经外奇穴",
    "subCategory": "膝前区",
    "locationHtml": "在膝前区，<b>髌底中点上方凹陷中</b>。",
    "locationText": "在膝前区，髌底中点上方凹陷中。",
    "mnemonic": "鹤顶髌骨上缘中，舒筋利节治膝痛",
    "specialProperties": "",
    "indications": [
      "膝关节肿痛、下肢痿痹、屈伸不利",
      "鹤膝风、脚气"
    ]
  },
  {
    "id": "acu-neixiyan",
    "name": "内膝眼",
    "pinyin": "nèi xī yǎn",
    "code": "EX-LE5",
    "category": "经外奇穴",
    "subCategory": "膝前区",
    "locationHtml": "在膝前区，<b>髌韧带内侧凹陷中</b>（与犊鼻外膝眼相对）。",
    "locationText": "在膝前区，髌韧带内侧凹陷中（与犊鼻外膝眼相对）。",
    "mnemonic": "内膝眼在髌韧内，舒筋通络利膝关",
    "specialProperties": "",
    "indications": [
      "膝关节痛、下肢无力、鹤膝风",
      "脚气"
    ]
  },
  {
    "id": "acu-dannang",
    "name": "胆囊",
    "pinyin": "dǎn náng",
    "code": "EX-LE6",
    "category": "经外奇穴",
    "subCategory": "小腿外侧",
    "locationHtml": "在小腿外侧，<b>阳陵泉直下 2 寸凹陷中</b>。",
    "locationText": "在小腿外侧，阳陵泉直下 2 寸凹陷中。",
    "mnemonic": "胆囊穴在阳陵下，两寸疏肝利胆囊",
    "specialProperties": "",
    "indications": [
      "急慢性胆囊炎、胆石症、胆道蛔虫",
      "胁肋痛、下肢痿痹"
    ]
  },
  {
    "id": "acu-lanwei",
    "name": "阑尾",
    "pinyin": "lán wěi",
    "code": "EX-LE7",
    "category": "经外奇穴",
    "subCategory": "小腿前外侧",
    "locationHtml": "在小腿前外侧，<b>足三里直下 2 寸凹陷中</b>。",
    "locationText": "在小腿前外侧，足三里直下 2 寸凹陷中。",
    "mnemonic": "阑尾穴在三里下，二寸压痛诊阑尾",
    "specialProperties": "",
    "indications": [
      "急慢性阑尾炎（肠痈）、消化不良",
      "腹痛、下肢瘫痪"
    ]
  },
  {
    "id": "acu-bafeng",
    "name": "八风",
    "pinyin": "bā fēng",
    "code": "EX-LE10",
    "category": "经外奇穴",
    "subCategory": "足背",
    "locationHtml": "在足背，<b>五个足趾间趾蹼缘后方赤白肉际处</b>，左右共 8 穴。",
    "locationText": "在足背，五个足趾间趾蹼缘后方赤白肉际处，左右共 8 穴。",
    "mnemonic": "八风足背趾蹼缘，清热消肿止足痛",
    "specialProperties": "",
    "indications": [
      "足跗肿痛、趾端麻木、下肢痿痹",
      "头痛、齿痛、月经不调",
      "疟疾、脚气"
    ]
  },
  {
    "id": "acu-duyin",
    "name": "独阴",
    "pinyin": "dú yīn",
    "code": "EX-LE11",
    "category": "经外奇穴",
    "subCategory": "足底",
    "locationHtml": "在足底，<b>第 2 趾跖侧远端指间关节横纹中点</b>。",
    "locationText": "在足底，第 2 趾跖侧远端指间关节横纹中点。",
    "mnemonic": "独阴二趾跖横中，理气通经调难产",
    "specialProperties": "",
    "indications": [
      "难产、死胎、胎衣不下",
      "月经不调、疝气、吐血",
      "急慢性胃肠炎"
    ]
  },
  {
    "id": "acu-qiduan",
    "name": "气端",
    "pinyin": "qì duān",
    "code": "EX-LE12",
    "category": "经外奇穴",
    "subCategory": "足趾",
    "locationHtml": "在足十趾尖端，<b>距趾甲游离缘 0.1 寸</b>，左右共 10 穴。",
    "locationText": "在足十趾尖端，距趾甲游离缘 0.1 寸，左右共 10 穴。",
    "mnemonic": "气端足十趾尖端，开窍苏厥利中风",
    "specialProperties": "",
    "indications": [
      "中风昏迷、足趾麻木、脚气",
      "高热、急慢惊风"
    ]
  }
];

export const ACUPOINT_DATABASE = ACUPOINTS_DATA;
