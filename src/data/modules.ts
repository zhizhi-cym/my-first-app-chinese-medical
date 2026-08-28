import { HerbItem, TCMModuleInfo } from '../types';

export const TCM_MODULES: TCMModuleInfo[] = [
  {
    id: 'herbs',
    title: '中药学',
    subtitle: '本草精研 · 药性歌诀',
    iconName: 'Leaf',
    badge: '背诵中',
    status: 'active',
    description: '收录全国规划教材精选 350+ 味核心中药标本图谱，融合功效归经、速记口诀与艾宾浩斯智能复习。',
    itemsCountStr: '350+ 味药材',
  },
  {
    id: 'formulas',
    title: '方剂学',
    subtitle: '经典名方 · 组方配伍',
    iconName: 'FlaskConical',
    badge: '已开放',
    status: 'active',
    description: '收录解表、泻下、和解、清热、温里、补益等 20 大类 270+ 首经典名方、方歌歌诀与主治证候。',
    itemsCountStr: '271 首经典名方',
  },
  {
    id: 'acupoints',
    title: '针灸穴位',
    subtitle: '经络循行 · 穴位定位',
    iconName: 'Activity',
    badge: '已开放',
    status: 'active',
    description: '人体标准十四经穴 361 穴全覆盖、经外奇穴、特定穴属性与主治速记及简便取穴法。',
    itemsCountStr: '361 标准经穴',
  },
  {
    id: 'classics',
    title: '经典条文',
    subtitle: '四大经典 · 辨证论治',
    iconName: 'BookOpen',
    badge: '已预备',
    status: 'preview',
    description: '《伤寒论》、《金匮要略》、《黄帝内经》、《温病条辨》核心必背条文与注解。',
    itemsCountStr: '预备 300+ 核心条文',
  },
];

export const CATEGORIES_LIST = [
  '解表药',
  '清热药',
  '泻下药',
  '祛风湿药',
  '化湿药',
  '利水渗湿药',
  '温里药',
  '理气药',
  '消食药',
  '驱虫药',
  '止血药',
  '活血化瘀药',
  '化痰止咳平喘药',
  '安神药',
  '平肝息风药',
  '开窍药',
  '补虚药',
  '收涩药',
  '涌吐药',
  '攻毒杀虫拔毒生肌药',
];

export const TCM_CLASSIC_QUOTES = [
  {
    quote: '夫大医之体，欲得澄神内视，望之俨然，宽裕汪汪，不殆不剧。',
    source: '《备急千金要方·大医精诚》',
  },
  {
    quote: '上工治未病，中工治已病，下工治末病。',
    source: '《黄帝内经·素问》',
  },
  {
    quote: '观其脉证，知犯何逆，随证治之。',
    source: '《伤寒论·辨太阳病脉证并治》',
  },
  {
    quote: '用药如用兵，知己知彼，百战不殆；审因论治，因人因时因地。',
    source: '《医宗金鉴》',
  },
  {
    quote: '勤求古训，博采众方，撰用《素问》《九卷》《八十一难》。',
    source: '《伤寒卒病论·序》',
  },
  {
    quote: '阴平阳秘，精神乃治；阴阳离决，精气乃绝。',
    source: '《黄帝内经·素问·生气通天论》',
  },
];
