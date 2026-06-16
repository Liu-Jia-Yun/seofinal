const products = [
  {
    id: 1,
    name: "Solexa AeroSprint 運動跑鞋",
    category: ["men", "sports"],
    price: 3880,
    rating: 4.8,
    image: "assets/images/products/shoe1.png",
    description: "專為中長距離跑步設計的專業跑鞋，採用碳纖維板與高回彈科技中底，為您提供無可比擬的推動力與緩震性能。",
    features: ["碳纖維板推進技術", "雙密度科技避震中底", "超輕量透氣工程網布", "耐磨防滑橡膠大底"],
    sizing: [40, 41, 42, 43, 44]
  },
  {
    id: 2,
    name: "Solexa Oxford 經典皮鞋",
    category: ["men", "casual"],
    price: 4500,
    rating: 4.9,
    image: "assets/images/products/shoe2.png",
    description: "精選頭層牛皮手工打造的經典牛津鞋。優雅的鞋身線條與舒適的真皮內裡，是您商務商洽與日常雅痞風格的完美搭配。",
    features: ["精選頭層優質牛皮", "手工縫線延條工藝", "舒適防汗真皮內裡", "高彈性耐磨橡膠鞋底"],
    sizing: [40, 41, 42, 43, 44]
  },
  {
    id: 3,
    name: "Solexa TerraGuard 戶外登山鞋",
    category: ["men", "sports"],
    price: 4800,
    rating: 4.7,
    image: "assets/images/products/shoe3.png",
    description: "強悍的戶外機能鞋。採用防水透氣科技布料與越野抓地橡膠大底，無論泥濘小徑或崎嶇岩壁，皆能輕鬆應對。",
    features: ["WaterShield 全效防水層", "Vibram 級專業抓地鞋底", "強化橡膠鞋頭防撞保護", "吸濕排汗防震鞋墊"],
    sizing: [40, 41, 42, 43, 44, 45]
  },
  {
    id: 4,
    name: "Solexa Classic Suede 樂福鞋",
    category: ["men", "casual"],
    price: 3980,
    rating: 4.6,
    image: "assets/images/products/shoe4.png",
    description: "極致休閒雅致的麂皮樂福鞋。深藍色麂皮搭配精緻金屬扣飾，展現無拘無束的義式紳士魅力，穿脫極為方便。",
    features: ["優質進口麂皮面料", "精緻雅致金屬馬銜扣", "一腳蹬懶人免綁帶設計", "超軟減壓乳膠鞋墊"],
    sizing: [39, 40, 41, 42, 43, 44]
  },
  {
    id: 5,
    name: "Solexa NovaFit 女士慢跑鞋",
    category: ["women", "sports"],
    price: 3680,
    rating: 4.8,
    image: "assets/images/products/shoe5.png",
    description: "專為女性腳型開發的緩震慢跑鞋。玫瑰金與極光紫交織的漸層編織鞋面，兼具運動時尚與極致的足弓支撐。",
    features: ["3D 針織透氣鞋面", "足弓支撐人體工學設計", "超回彈減震氣墊", "夢幻玫瑰金漸層外觀"],
    sizing: [36, 37, 38, 39, 40]
  },
  {
    id: 6,
    name: "Solexa Scarlet 麂皮休閒鞋",
    category: ["women", "casual"],
    price: 3500,
    rating: 4.7,
    image: "assets/images/products/shoe6.png",
    description: "熱情如火的經典暗紅麂皮休閒鞋，線條流暢優雅，貼合腳型，給您漫步雲端的舒適，適合日常通勤與約會。",
    features: ["亮眼緋紅麂皮材質", "優雅顯瘦尖頭線條", "極佳韌性抗折鞋底", "親膚透氣超細纖維內裡"],
    sizing: [35, 36, 37, 38, 39]
  },
  {
    id: 7,
    name: "Solexa Pastel Mint 輕盈帆布鞋",
    category: ["women", "casual"],
    price: 2980,
    rating: 4.5,
    image: "assets/images/products/shoe7.png",
    description: "粉嫩薄荷綠與純白相間的輕量板鞋。百搭清新風格，極致輕巧，是夏季漫步街頭或出遊拍照的吸睛利器。",
    features: ["清新薄荷綠馬卡龍配色", "輕量化防滑平底設計", "柔軟帆布透氣襯裡", "經典小白鞋百搭版型"],
    sizing: [36, 37, 38, 39]
  },
  {
    id: 8,
    name: "Solexa SoftLeather 女士厚底涼鞋",
    category: ["women", "casual"],
    price: 3280,
    rating: 4.6,
    image: "assets/images/products/shoe8.png",
    description: "溫柔燕麥色厚底涼鞋，採用軟牛皮交叉寬帶與人體工學軟木中底，能有效拉長腿部線條，同時確保全天步行不累腳。",
    features: ["輕質加厚聚氨酯發泡底", "觸感極佳軟牛皮寬帶", "防滑紋理耐磨橡膠底", "視覺增高 4 公分修飾"],
    sizing: [35, 36, 37, 38, 39]
  },
  {
    id: 9,
    name: "Solexa NeonFlash 兒童發光運動鞋",
    category: ["kids", "sports"],
    price: 2280,
    rating: 4.9,
    image: "assets/images/products/shoe9.png",
    description: "酷炫吸睛的發光運動鞋，動態螢光綠配上行走時自動閃爍的LED發光科技中底，給孩子無盡的奔跑樂趣與夜間安全。",
    features: ["動態感應 LED 閃爍中底", "安全環保無味橡膠材料", "超方便魔鬼氈免綁帶", "吸震高回彈環保鞋墊"],
    sizing: [28, 30, 32, 34, 35]
  },
  {
    id: 10,
    name: "Solexa DinoRain 兒童雨鞋",
    category: ["kids", "casual"],
    price: 1880,
    rating: 4.8,
    image: "assets/images/products/shoe10.png",
    description: "亮黃色可愛恐龍圖樣兒童雨鞋，全防水一體成型設計，鞋口加裝抽繩防止雨水滲入，讓孩子在雨天也能自由踩水玩耍。",
    features: ["100% 一體成型防水 PVC", "貼心束口抽繩防潑設計", "防滑鋸齒狀安全大底", "超輕量防滑內襯"],
    sizing: [26, 28, 30, 32]
  },
  {
    id: 11,
    name: "Solexa Starry 兒童休閒運動鞋",
    category: ["kids", "casual"],
    price: 2180,
    rating: 4.7,
    image: "assets/images/products/shoe11.png",
    description: "柔和粉紫色交織的透氣健步鞋，極佳包裹性與防撞鞋頭設計，全方位保護孩子嬌嫩的雙腳，運動或上學都適合。",
    features: ["包覆性防撞防磨鞋頭", "夢幻紫粉撞色設計", "超輕高彈 MD 避震大底", "透氣蜂巢網眼內裡"],
    sizing: [28, 30, 32, 34, 35]
  },
  {
    id: 12,
    name: "Solexa HydroGlide 兒童運動涼鞋",
    category: ["kids", "sports"],
    price: 1980,
    rating: 4.6,
    image: "assets/images/products/shoe12.png",
    description: "越野抓地設計的兒童戶外運動涼鞋。清爽水藍色配色，快乾織帶鞋面，適合野溪露營、海灘遊玩等戶外活動。",
    features: ["快乾機能防潑水織帶", "三點式魔鬼氈微調鬆緊", "防滑耐磨濕地抓地底", "人體工學足弓壓紋"],
    sizing: [28, 30, 32, 34]
  },
  {
    id: 13,
    name: "Solexa PeakChaser 越野跑鞋",
    category: ["sports"],
    price: 4280,
    rating: 4.8,
    image: "assets/images/products/shoe13.png",
    description: "專業戶外越野跑鞋。鮮豔電光藍配色，鋸齒外底提供碎石路面與泥地的無敵抓地力，多層防禦鞋身抵禦野外雜物衝擊。",
    features: ["強效防滑抓地鋸齒耳齒", "防碎石防沙鞋舌設計", "動態防護鞋頭強化片", "輕量高彈性吸震中底"],
    sizing: [40, 41, 42, 43, 44, 45]
  },
  {
    id: 14,
    name: "Solexa DunkMaster 專業籃球鞋",
    category: ["sports"],
    price: 4680,
    rating: 4.9,
    image: "assets/images/products/shoe14.png",
    description: "熱血紅白配色的高筒實戰籃球鞋。強化的腳踝包覆與高密度側向支撐板，提供變向突破時的極佳穩定性與緩震回彈。",
    features: ["高筒腳踝雙重防扭包覆", "前掌氣墊加後掌避震泡棉", "耐磨人字紋抓地外底", "外側防側翻熱塑支撐片"],
    sizing: [41, 42, 43, 44, 45, 46]
  },
  {
    id: 15,
    name: "Solexa Vintage High 復古高筒鞋",
    category: ["casual"],
    price: 2680,
    rating: 4.5,
    image: "assets/images/products/shoe15.png",
    description: "經典復古勃根地紅高筒帆布鞋。復古硫化鞋底，越穿越有味道的帆布面料，是美式街頭休閒風的永恆經典。",
    features: ["優質加厚防撕裂帆布", "經典高回彈硫化橡膠底", "透氣金屬雙孔側排氣", "人氣復古水洗質感"],
    sizing: [37, 38, 39, 40, 41, 42, 43, 44]
  },
  {
    id: 16,
    name: "Solexa StreetSkate 滑板鞋",
    category: ["casual"],
    price: 2980,
    rating: 4.6,
    image: "assets/images/products/shoe16.png",
    description: "街頭滑板風格的一腳蹬帆布鞋。淺灰灰白條紋，強化平底抓板力設計，讓您自由穿梭在城市街角，輕鬆且充滿個性。",
    features: ["防磨牛背皮拼接鞋頭", "強化防滑生橡膠華夫底", "舒適吸震加厚腳踝泡棉", "百搭簡約一腳蹬設計"],
    sizing: [38, 39, 40, 41, 42, 43, 44]
  }
];

// Export to window so it is accessible in front-end pages
window.SolexaProducts = products;
