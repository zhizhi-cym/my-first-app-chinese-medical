import { HerbItem } from '../types';
import { RAW_HERB_DATA_TEXT } from './rawHerbsData';
import { CATEGORIES_LIST, TCM_CLASSIC_QUOTES } from './modules';
import { getHerbPharmInfo } from './pharmacopoeia';
import { getHerbImageUrl } from './herbImages';

export { CATEGORIES_LIST, TCM_CLASSIC_QUOTES };

// Pinyin lookup mapping for standard TCM herbs
const PINYIN_DICT: Record<string, string> = {
  麻黄: 'má huáng',
  香薷: 'xiāng rú',
  浮萍: 'fú píng',
  紫苏叶: 'zǐ sū yè',
  桂枝: 'guì zhī',
  生姜: 'shēng jiāng',
  葱白: 'cōng bái',
  荆芥: 'jīng jiè',
  防风: 'fáng fēng',
  '羌活、藁本': 'qiāng huó · gǎo běn',
  羌活: 'qiāng huó',
  藁本: 'gǎo běn',
  细辛: 'xì xīn',
  白芷: 'bái zhǐ',
  '辛夷、苍耳子': 'xīn yí · cāng ěr zǐ',
  辛夷: 'xīn yí',
  苍耳子: 'cāng ěr zǐ',
  '蔓荆子、薄荷': 'màn jīng zǐ · bò he',
  蔓荆子: 'màn jīng zǐ',
  薄荷: 'bò he',
  牛蒡子: 'niú bàng zǐ',
  蝉蜕: 'chán tuì',
  桑叶: 'sāng yè',
  菊花: 'jú huā',
  柴胡: 'chái hú',
  升麻: 'shēng má',
  葛根: 'gé gēn',
  淡豆豉: 'dàn dòu chǐ',
  石膏: 'shí gāo',
  知母: 'zhī mǔ',
  '淡竹叶、芦根': 'dàn zhú yè · lú gēn',
  淡竹叶: 'dàn zhú yè',
  芦根: 'lú gēn',
  决明子: 'jué míng zǐ',
  密蒙花: 'mì méng huā',
  栀子: 'zhī zi',
  天花粉: 'tiān huā fěn',
  夏枯草: 'xià kū cǎo',
  '黄连、黄芩、黄柏': 'huáng lián · huáng qín · huáng bǎi',
  黄连: 'huáng lián',
  黄芩: 'huáng qín',
  黄柏: 'huáng bǎi',
  龙胆: 'lóng dǎn',
  苦参: 'kǔ shēn',
  白鲜皮: 'bái xiān pí',
  秦皮: 'qín pí',
  '金银花、连翘': 'jīn yín huā · lián qiáo',
  金银花: 'jīn yín huā',
  连翘: 'lián qiáo',
  '大青叶、青黛': 'dà qīng yè · qīng dài',
  大青叶: 'dà qīng yè',
  青黛: 'qīng dài',
  贯众: 'guàn zhòng',
  鱼腥草: 'yú xīng cǎo',
  败酱草: 'bài jiàng cǎo',
  白花蛇舌草: 'bái huā shé shé cǎo',
  蒲公英: 'pú gōng yīng',
  紫花地丁: 'zǐ huā dì dīng',
  野菊花: 'yě jú huā',
  '穿心莲、板蓝根': 'chuān xīn lián · bǎn lán gēn',
  穿心莲: 'chuān xīn lián',
  板蓝根: 'bǎn lán gēn',
  鸦胆子: 'yā dǎn zǐ',
  重楼: 'zhòng lóu',
  漏芦: 'lòu lú',
  土茯苓: 'tǔ fú líng',
  大血藤: 'dà xuè téng',
  射干: 'shè gān',
  山豆根: 'shān dòu gēn',
  马勃: 'mǎ bó',
  白头翁: 'bái tóu wēng',
  马齿苋: 'mǎ chǐ xiàn',
  山慈姑: 'shān cí gū',
  半边莲: 'bàn biān lián',
  熊胆粉: 'xióng dǎn fěn',
  生地黄: 'shēng dì huáng',
  玄参: 'xuán shēn',
  牡丹皮: 'mǔ dān pí',
  赤芍: 'chì sháo',
  紫草: 'zǐ cǎo',
  水牛角: 'shuǐ niú jiǎo',
  青蒿: 'qīng hāo',
  地骨皮: 'dì gǔ pí',
  银柴胡: 'yín chái hú',
  胡黄连: 'hú huáng lián',
  白薇: 'bái wēi',
  大黄: 'dà huáng',
  芒硝: 'máng xiāo',
  番泻叶: 'fān xiè yè',
  芦荟: 'lú huì',
  火麻仁: 'huǒ má rén',
  郁李仁: 'yù lǐ rén',
  '京大戟，甘遂': 'jīng dà jǐ · gān suí',
  芫花: 'yuán huā',
  商陆: 'shāng lù',
  牵牛子: 'qiān niú zǐ',
  巴豆霜: 'bā dòu shuāng',
  独活: 'dú huó',
  威灵仙: 'wēi líng xiān',
  '川乌/草乌': 'chuān wū · cǎo wū',
  '乌梢蛇/蕲蛇': 'wū shāo shé · qí shé',
  木瓜: 'mù guā',
  海风藤: 'hǎi fēng téng',
  昆明山海棠: 'kūn míng shān hǎi táng',
  防己: 'fáng jǐ',
  秦艽: 'qín jiāo',
  '桑枝，豨莶草': 'sāng zhī · xī xiān cǎo',
  臭梧桐: 'chòu wú tóng',
  海桐皮: 'hǎi tóng pí',
  络石藤: 'luò shí téng',
  雷公藤: 'léi gōng téng',
  五加皮: 'wǔ jiā pí',
  桑寄生: 'sāng jì shēng',
  狗脊: 'gǒu jǐ',
  广藿香: 'guǎng huò xiāng',
  佩兰: 'pèi lán',
  苍术: 'cāng zhú',
  厚朴: 'hòu pò',
  豆蔻: 'dòu kòu',
  砂仁: 'shā rén',
  草豆蔻: 'cǎo dòu kòu',
  草果: 'cǎo guǒ',
  茯苓: 'fú líng',
  薏苡仁: 'yì yǐ rén',
  猪苓: 'zhū líng',
  泽泻: 'zé xiè',
  香加皮: 'xiāng jiā pí',
  车前子: 'chē qián zǐ',
  滑石: 'huá shí',
  木通: 'mù tōng',
  通草: 'tōng cǎo',
  瞿麦: 'qú mài',
  篇蓄: 'biān xù',
  地肤子: 'dì fū zǐ',
  海金沙: 'hǎi jīn shā',
  石韦: 'shí wéi',
  冬葵子: 'dōng kuí zǐ',
  灯心草: 'dēng xīn cǎo',
  萆薢: 'bì xiè',
  茵陈: 'yīn chén',
  金钱草: 'jīn qián cǎo',
  虎杖: 'hǔ zhàng',
  珍珠草: 'zhēn zhū cǎo',
  附子: 'fù zǐ',
  肉桂: 'ròu guì',
  干姜: 'gān jiāng',
  高良姜: 'gāo liáng jiāng',
  吴茱萸: 'wú zhū yú',
  小茴香: 'xiǎo huí xiāng',
  丁香: 'dīng xiāng',
  花椒: 'huā jiāo',
  胡椒二荜: 'hú jiāo · bì bá · bì chéng qié',
  陈皮: 'chén pí',
  青皮: 'qīng pí',
  枳实: 'zhǐ shí',
  枳壳: 'zhǐ ké',
  木香: 'mù xiāng',
  沉香: 'chén xiāng',
  檀香: 'tán xiāng',
  川楝子: 'chuān liàn zǐ',
  乌药: 'wū yào',
  荔枝核: 'lì zhī hé',
  香附: 'xiāng fù',
  香橼: 'xiāng yuán',
  梅花: 'méi huā',
  佛手: 'fó shǒu',
  玫瑰花: 'méi gui huā',
  薤白: 'xiè bái',
  大腹皮: 'dà fù pí',
  甘松: 'gān sōng',
  刀豆: 'dāo dòu',
  柿蒂: 'shì dì',
  山楂: 'shān zhā',
  六神曲: 'liù shén qū',
  麦芽: 'mài yá',
  稻芽: 'dào yá',
  莱菔子: 'lái fú zǐ',
  鸡内金: 'jī nèi jīn',
  '使君子，雷丸': 'shǐ jūn zǐ · léi wán',
  苦楝皮: 'kǔ liàn pí',
  槟郎: 'bīng láng',
  '南瓜子，鹤草芽': 'nán guā zǐ · hè cǎo yá',
  榧子: 'fěi zǐ',
  '大蓟、小蓟': 'dà jì · xiǎo jì',
  地榆: 'dì yú',
  侧柏叶: 'cè bǎi yè',
  槐花: 'huái huā',
  白茅根: 'bái máo gēn',
  苎麻根: 'zhù má gēn',
  三七: 'sān qī',
  茜草: 'qiàn cǎo',
  蒲黄: 'pú huáng',
  白及: 'bái jí',
  仙鹤草: 'xiān hè cǎo',
  紫珠叶: 'zǐ zhū yè',
  血余炭: 'xuè yú tàn',
  棕榈炭: 'zōng lǘ tàn',
  艾叶: 'ài yè',
  炮姜: 'pào jiāng',
  灶心土: 'zào xīn tǔ',
  延胡索: 'yán hú suǒ',
  川芎: 'chuān xiōng',
  姜黄: 'jiāng huáng',
  郁金: 'yù jīn',
  乳香: 'rǔ xiāng',
  没药: 'mò yào',
  五灵脂: 'wǔ líng zhī',
  降香: 'jiàng xiāng',
  银杏叶: 'yín xìng yè',
  牛膝: 'niú xī',
  王不留行: 'wáng bù liú xíng',
  丹参: 'dān shēn',
  桃仁: 'táo rén',
  红花: 'hóng huā',
  益母草: 'yì mǔ cǎo',
  泽兰: 'zé lán',
  鸡血藤: 'jī xuè téng',
  月季花: 'yuè jì huā',
  土鳖虫: 'tǔ biē chóng',
  自然铜: 'zì rán tóng',
  骨碎补: 'gǔ suì bǔ',
  血竭: 'xuè jié',
  儿茶: 'ér chá',
  马钱子: 'mǎ qián zǐ',
  刘寄奴: 'liú jì nú',
  苏木: 'sū mù',
  '三棱、莪术': 'sān léng · é zhù',
  '斑蝥、虻虫': 'bān máo · méng chóng',
  水蛭: 'shuǐ zhì',
  半夏: 'bàn xià',
  旋覆花: 'xuán fù huā',
  天南星: 'tiān nán xīng',
  白附子: 'bái fù zǐ',
  白前: 'bái qián',
  皂荚: 'zào jiá',
  芥子: 'jiè zǐ',
  '川贝母、浙贝母': 'chuān bèi mǔ · zhè bèi mǔ',
  瓜蒌: 'guā lóu',
  前胡: 'qián hú',
  竹茹: 'zhú rú',
  竹沥: 'zhú lì',
  胆南星: 'dǎn nán xīng',
  天竺黄: 'tiān zhú huáng',
  桔梗: 'jié gěng',
  胖大海: 'pàng dà hǎi',
  '昆布、海藻': 'kūn bù · hǎi zǎo',
  黄药子: 'huáng yào zǐ',
  '海蛤壳、海浮石': 'hǎi gé ké · hǎi fú shí',
  礞石: 'méng shí',
  苦杏仁: 'kǔ xìng rén',
  紫苏子: 'zǐ sū zǐ',
  '百部、紫菀、款冬花': 'bǎi bù · zǐ wǎn · kuǎn dōng huā',
  马兜铃: 'mǎ dōu líng',
  枇杷叶: 'pí pá yè',
  '桑白皮、葶苈子': 'sāng bái pí · tíng lì zǐ',
  白果: 'bái guǒ',
  洋金花: 'yáng jīn huā',
  朱砂: 'zhū shā',
  琥珀: 'hǔ pò',
  '龙骨、磁石': 'lóng gǔ · cí shí',
  酸枣仁: 'suān zǎo rén',
  柏子仁: 'bǎi zǐ rén',
  灵芝: 'líng zhī',
  首乌藤: 'shǒu wū téng',
  合欢皮: 'hé huān pí',
  远志: 'yuǎn zhì',
  珍珠母: 'zhēn zhū mǔ',
  牡蛎: 'mǔ lì',
  代赭石: 'dài zhě shí',
  刺蒺藜: 'cì jí lí',
  石决明: 'shí jué míng',
  罗布麻叶: 'luó bù má yè',
  羚羊角: 'líng yáng jiǎo',
  天麻: 'tiān má',
  钩藤: 'gōu téng',
  牛黄: 'niú huáng',
  '全蝎、蜈蚣': 'quán xiē · wú gōng',
  地龙: 'dì lóng',
  僵蚕: 'jiāng cán',
  珍珠: 'zhēn zhū',
  麝香: 'shè xiāng',
  石菖蒲: 'shí chāng pú',
  苏合香: 'sū hé xiāng',
  冰片: 'bīng piàn',
  人参: 'rén shēn',
  西洋参: 'xī yáng shēn',
  党参: 'dǎng shēn',
  太子参: 'tài zǐ shēn',
  黄芪: 'huáng qí',
  白术: 'bái zhú',
  山药: 'shān yào',
  甘草: 'gān cǎo',
  白扁豆: 'bái biǎn dòu',
  大枣: 'dà zǎo',
  刺五加: 'cì wǔ jiā',
  绞股蓝: 'jiǎo gǔ lán',
  红景天: 'hóng jǐng tiān',
  沙棘: 'shā jí',
  鹿茸: 'lù róng',
  '淫羊藿、巴戟天、仙茅': 'yín yáng huò · bā jǐ tiān · xiān máo',
  仙茅: 'xiān máo',
  杜仲: 'dù zhòng',
  续断: 'xù duàn',
  菟丝子: 'tù sī zǐ',
  补骨脂: 'bǔ gǔ zhī',
  紫河车: 'zǐ hé chē',
  '肉苁蓉、锁阳': 'ròu cōng róng · suǒ yáng',
  蛤蚧: 'gé jiè',
  冬虫夏草: 'dōng chóng xià cǎo',
  益智仁: 'yì zhì rén',
  沙苑子: 'shā yuàn zǐ',
  核桃仁: 'hé tao rén',
  当归: 'dāng guī',
  熟地黄: 'shú dì huáng',
  白芍: 'bái sháo',
  何首乌: 'hé shǒu wū',
  阿胶: 'ē jiāo',
  龙眼肉: 'lóng yǎn ròu',
  '南/北沙参': 'nán / běi shā shēn',
  '天冬、玉竹': 'tiān dōng · yù zhú',
  石斛: 'shí hú',
  '百合、麦冬': 'bǎi hé · mài dōng',
  黄精: 'huáng jīng',
  '枸杞子、墨旱莲、女贞子': 'gǒu qǐ zǐ · mò hàn lián · nǚ zhēn zǐ',
  '龟甲、鳖甲': 'guī jiǎ · biē jiǎ',
  桑椹: 'sāng shèn',
  麻黄根: 'má huáng gēn',
  五味子: 'wǔ wèi zǐ',
  乌梅: 'wū méi',
  诃子: 'hē zǐ',
  肉豆蔻: 'ròu dòu kòu',
  赤石脂: 'chì shí zhī',
  五倍子: 'wǔ bèi zǐ',
  罂粟壳: 'yīng sù ké',
  禹余粮: 'yǔ yú liáng',
  石榴皮: 'shí liu pí',
  金樱子: 'jīn yīng zǐ',
  覆盆子: 'fù pén zǐ',
  桑螵蛸: 'sāng piāo shāo',
  海螵蛸: 'hǎi piāo shāo',
  山茱萸: 'shān zhū yú',
  芡实: 'qiàn shí',
  莲子: 'lián zǐ',
  '常山、胆矾': 'cháng shān · dǎn fán',
  瓜蒂: 'guā dì',
  雄黄: 'xióng huáng',
  硫黄: 'liú huáng',
  白矾: 'bái fán',
  蛇床子: 'shé chuáng zǐ',
  土荆皮: 'tǔ jīng pí',
  大蒜: 'dà suàn',
  蟾酥: 'chán sū',
  红粉: 'hóng fěn',
  轻粉: 'qīng fěn',
  砒石: 'pī shí',
  铅丹: 'qiān dān',
  炉甘石: 'lú gān shí',
  硼砂: 'péng shā',
  椿皮: 'chūn pí',
  '木贼、谷精草': 'mù zéi · gǔ jīng cǎo',
  青葙子: 'qīng xiāng zǐ',
  白蔹: 'bái liǎn',
  青风藤: 'qīng fēng téng',
  穿山龙: 'chuān shān lóng',
  枳椇子: 'zhǐ jǔ zǐ',
  川牛膝: 'chuān niú xī',
  蜂蜜: 'fēng mì',
  鸡冠花: 'jī guān huā',
  蜂房: 'fēng fáng',
};

// Automatic category inference for TCM herbs
function inferCategory(name: string, efficacy: string, rawMnemonic: string): { category: string; subCategory: string } {
  const text = name + efficacy + rawMnemonic;
  if (/发汗|解表|散寒|疏散风热|辛温|辛凉|透疹/.test(text) && !/活血|补气|补血|泻火|清热凉血/.test(name)) {
    return { category: '解表药', subCategory: /风热|清利头目/.test(text) ? '辛凉解表药' : '辛温解表药' };
  }
  if (/清热|泻火|燥湿|解毒|凉血|退虚热|清虚热|清肝/.test(text)) {
    if (/虚热|骨蒸|疳热/.test(text)) return { category: '清热药', subCategory: '清虚热药' };
    if (/凉血|生地|玄参|赤芍|紫草|水牛角|丹皮/.test(text)) return { category: '清热药', subCategory: '清热凉血药' };
    if (/解毒|消痈|蛇舌草|蒲公英|鱼腥草|金银花|连翘/.test(text)) return { category: '清热药', subCategory: '清热解毒药' };
    if (/燥湿|黄连|黄芩|黄柏|龙胆|苦参/.test(text)) return { category: '清热药', subCategory: '清热燥湿药' };
    return { category: '清热药', subCategory: '清热泻火药' };
  }
  if (/泻下|攻积|润肠|通便|逐饮|逐水|巴豆|大黄|芒硝|番泻叶|牵牛子/.test(text)) {
    return { category: '泻下药', subCategory: /润肠/.test(text) ? '润下药' : /逐水|逐饮/.test(text) ? '峻下逐水药' : '攻下药' };
  }
  if (/祛风湿|胜湿|舒筋活络|独活|威灵仙|木瓜|防己|秦艽|桑寄生|五加皮|狗脊|雷公藤/.test(text)) {
    return { category: '祛风湿药', subCategory: /强筋|补肝肾/.test(text) ? '祛风湿强筋骨药' : '祛风湿止痛药' };
  }
  if (/芳香化湿|燥湿健脾|化湿开胃|藿香|佩兰|苍术|厚朴|砂仁|豆蔻|草果/.test(text)) {
    return { category: '化湿药', subCategory: '芳香化湿药' };
  }
  if (/利水渗湿|利尿通淋|渗湿|利湿退黄|茯苓|泽泻|车前子|滑石|木通|茵陈|金钱草|海金沙/.test(text)) {
    return { category: '利水渗湿药', subCategory: /退黄|利胆/.test(text) ? '利湿退黄药' : /通淋/.test(text) ? '利尿通淋药' : '利水消肿药' };
  }
  if (/温中|回阳|补火助阳|附子|肉桂|干姜|吴茱萸|丁香|高良姜|小茴香/.test(text)) {
    return { category: '温里药', subCategory: '温里散寒药' };
  }
  if (/理气|行气|疏肝|破气|陈皮|青皮|枳实|木香|沉香|香附|川楝子|薤白/.test(text)) {
    return { category: '理气药', subCategory: '行气调中药' };
  }
  if (/消食|健胃|山楂|神曲|麦芽|莱菔子|鸡内金/.test(text)) {
    return { category: '消食药', subCategory: '消食化积药' };
  }
  if (/杀虫|消积|使君子|苦楝皮|槟榔|南瓜子|雷丸|榧子|鹤草芽/.test(text)) {
    return { category: '驱虫药', subCategory: '驱虫药' };
  }
  if (/止血|凉血止血|化瘀止血|收敛止血|温经止血|三七|白及|地榆|小蓟|大蓟|槐花|艾叶|蒲黄|仙鹤草/.test(text)) {
    return { category: '止血药', subCategory: /凉血/.test(text) ? '凉血止血药' : /化瘀/.test(text) ? '化瘀止血药' : /温经/.test(text) ? '温经止血药' : '收敛止血药' };
  }
  if (/活血|化瘀|散瘀|通经|川芎|丹参|桃仁|红花|牛膝|延胡索|郁金|乳香|没药|益母草|鸡血藤|土鳖虫|血竭|水蛭/.test(text)) {
    return { category: '活血化瘀药', subCategory: /疗伤|接骨/.test(text) ? '活血疗伤药' : /逐瘀|破血/.test(text) ? '破血逐瘀药' : '活血止痛药' };
  }
  if (/化痰|涤痰|止咳|平喘|宣肺|半夏|川贝|浙贝|瓜蒌|桔梗|旋覆花|苦杏仁|百部|紫菀|款冬花|桑白皮|白果/.test(text)) {
    return { category: '化痰止咳平喘药', subCategory: /止咳|平喘/.test(text) ? '止咳平喘药' : /清热|浙贝|川贝|瓜蒌/.test(text) ? '清化热痰药' : '温化寒痰药' };
  }
  if (/安神|镇惊|定惊|养心|朱砂|磁石|龙骨|酸枣仁|柏子仁|首乌藤|合欢皮|远志/.test(text)) {
    return { category: '安神药', subCategory: /养心|滋阴/.test(text) ? '养心安神药' : '重镇安神药' };
  }
  if (/平肝|潜阳|息风|止痉|羚羊角|天麻|钩藤|地龙|全蝎|蜈蚣|僵蚕|石决明|牡蛎|代赭石/.test(text)) {
    return { category: '平肝息风药', subCategory: /息风|止痉/.test(text) ? '息风止痉药' : '平抑肝阳药' };
  }
  if (/开窍|醒神|辟秽|麝香|冰片|石菖蒲|苏合香/.test(text)) {
    return { category: '开窍药', subCategory: '开窍药' };
  }
  if (/补气|补阳|补血|滋阴|补脾|大补元气|人参|党参|黄芪|白术|山药|甘草|鹿茸|淫羊藿|杜仲|当归|熟地|白芍|阿胶|麦冬|石斛|枸杞/.test(text)) {
    if (/阳|鹿茸|仙茅|杜仲|肉苁蓉|菟丝子/.test(text)) return { category: '补虚药', subCategory: '补阳药' };
    if (/血|当归|熟地|白芍|阿胶|何首乌/.test(text)) return { category: '补虚药', subCategory: '补血药' };
    if (/阴|麦冬|天冬|石斛|百合|龟甲|鳖甲|枸杞/.test(text)) return { category: '补虚药', subCategory: '补阴药' };
    return { category: '补虚药', subCategory: '补气药' };
  }
  if (/固涩|收敛|涩肠|固精|敛汗|五味子|乌梅|诃子|肉豆蔻|赤石脂|五倍子|金樱子|覆盆子|山茱萸|莲子|芡实/.test(text)) {
    return { category: '收涩药', subCategory: '固精缩尿止带药' };
  }
  if (/涌吐|常山|胆矾|瓜蒂/.test(text)) {
    return { category: '涌吐药', subCategory: '涌吐药' };
  }
  if (/攻毒|杀虫|拔毒|生肌|雄黄|硫黄|白矾|蛇床子|大蒜|蟾酥|红粉|轻粉|砒石|铅丹|炉甘石|硼砂/.test(text)) {
    return { category: '攻毒杀虫拔毒生肌药', subCategory: '攻毒杀虫止痒药' };
  }
  return { category: '解表药', subCategory: '传统中药' };
}

// Clean and extract efficacy text
function extractCleanEfficacy(rawHtml: string): { cleanEfficacy: string; rawMnemonic: string } {
  // Replace HTML tags with space or empty
  let text = rawHtml
    .replace(/&nbsp;/g, ' ')
    .replace(/<div>/g, '\n')
    .replace(/<\/div>/g, '')
    .replace(/<br\s*\/?>/g, '\n');

  // Extract text inside parentheses (...) or （...）
  const parenMatches = text.match(/[\(（]([^()（）]+)[\)）]/g);
  let efficacy = '';
  if (parenMatches && parenMatches.length > 0) {
    efficacy = parenMatches
      .map((m) => m.replace(/[\(（\)）]/g, '').trim())
      .filter(Boolean)
      .join('；');
  }

  // Extract mnemonic outside the main parenthesis
  let rawMnemonic = text.replace(/[\(（][^()（）]+[\)）]/g, '').trim();
  rawMnemonic = rawMnemonic.replace(/\n+/g, ' · ').trim();

  if (!efficacy) {
    efficacy = rawMnemonic;
  }

  return {
    cleanEfficacy: efficacy || '详见药性歌诀与主治',
    rawMnemonic: rawMnemonic || efficacy,
  };
}

// Parse all raw herbs text into strongly-typed HerbItem objects
function parseHerbsData(): HerbItem[] {
  const lines = RAW_HERB_DATA_TEXT.split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !l.startsWith('#'));

  const result: HerbItem[] = [];

  lines.forEach((line, index) => {
    const parts = line.split('\t');
    if (parts.length < 2) return;

    const name = parts[0].trim();
    const rawContent = parts.slice(1).join('\t').trim();

    const { cleanEfficacy, rawMnemonic } = extractCleanEfficacy(rawContent);
    const { category, subCategory } = inferCategory(name, cleanEfficacy, rawMnemonic);

    const pinyin = PINYIN_DICT[name] || '';
    const pharm = getHerbPharmInfo(name);

    // Split indications into structured bullet points from efficacy
    const indicationsList = cleanEfficacy
      .split(/[,，;；、]/)
      .map((s) => s.trim())
      .filter((s) => s.length > 1);

    result.push({
      id: `herb-${index + 1}-${name.replace(/[\/、，\s]/g, '-')}`,
      name,
      pinyin,
      category,
      subCategory,
      natureFlavor: pharm.natureFlavor,
      channelTropism: pharm.channelTropism,
      efficacy: cleanEfficacy,
      indications: indicationsList.length > 0 ? indicationsList : [cleanEfficacy],
      mnemonic: rawMnemonic,
      dosageAndUsage: '3～10g，水煎服。',
      contraindications: pharm.toxicity ? `注意：药典标注${pharm.toxicity}` : undefined,
      imageUrl: getHerbImageUrl(name, category),
    });
  });

  return result;
}

export const HERB_DATABASE: HerbItem[] = parseHerbsData();
