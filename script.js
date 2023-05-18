//定義
let gScreen,gScreen2;
let Vscreen_width=10000;
let Vscreen_height=2170;
let Vscreen2_width=350;
let Vscreen2_height=350;

let viewX=4000;                //視点X
let viewY=650;                //視点Y
let view_width,view_height;         //表示 横
let Size=100;   //サイズ

let swipeX=-1,swipeY=-1,SwipeTrriger=false;    //スワイプ

const image = new Image();                //画像
const image2 = new Image();                //画像
const image3 = new Image();                //画像
const image4 = new Image();                //画像
const image5 = new Image();                //画像

let country=[];

const country_2021=[
    [
        "日本国",
        [4045,645], //座標
        "東京",     //首都
        125,       //人口
        "378,000",     //面積
        "日本",      //公用語
        "神道,仏教",          //宗教
        "紀元前660",     //建国年
        [3880,533] //国旗
    ],
    [
        "ロシア連邦",
        [2700,375],
        "モスクワ",
        146,
        "17,130,000",
        "ロシア",
        "ロシア正教",
        1991,
        [2479,80]
    ],
    [
        "ドイツ連邦共和国",
        [2385,445],
        "ベルリン",
        83,
        "357,400",
        "ドイツ",
        "ｶﾄﾘｯｸ,ﾌﾟﾛﾃｽﾀﾝﾄ",
        1949,
        [2305,422]
    ],
    [
        "イタリア共和国",
        [2385,570],
        "ローマ",
        60,
        "301,300",
        "イタリア",
        "カトリック",
        1946,
        [2313,517]
    ],
    [
        "フランス共和国",
        [2250,490],
        "パリ",
        67,
        "543,900",
        "フランス",
        "カトリック",
        1792,
        [2165,470]
    ],
    [
        "ｸﾞﾚｰﾄﾌﾞﾘﾃﾝ及び北ｱｲﾙﾗﾝﾄﾞ連合王国",
        [2214,452],
        "ロンドン",
        67,
        "242,500",
        "英",
        "聖公会",
        1707,
        [2121,352]
    ],
    [
        "アメリカ合衆国",
        [1205,605],
        "ワシントンD.C.",
        330,
        "9,834,000",
        "英",
        "プロテスタント",
        1776,
        [0,222]
    ],
    [
        "カナダ",
        [1225,520],
        "オタワ",
        38,
        "9,985,000",
        "英語,フランス",
        "ｶﾄﾘｯｸ,ﾌﾟﾛﾃｽﾀﾝﾄ",
        1867,
        [375,79]
    ],
    [
        "大韓民国",
        [3885,625],
        "ソウル",
        51,
        "100,200",
        "朝鮮",
        "仏教,プロテスタント",
        1948,
        [3876,620]
    ],
    [
        "中華人民共和国",
        [3745,600],
        "北京",
        1402,
        "9,597,000",
        "中国",
        "仏教,道教",
        1949,
        [3190,418]
    ],
    [
        "オーストラリア連邦",
        [4165,1500],
        "キャンベラ",
        25,
        "7,692,000",
        "英",
        "カトリック,聖公会",
        1901,
        [3708,1211]
    ],
    [
        "インドネシア共和国",
        [3610,1150],
        "ジャカルタ",
        270,
        "1,919,000",
        "インドネシア",
        "イスラム教スンナ派",
        1945,
        [3468,1013]
    ],
    [
        "インド共和国",
        [3235,730],
        "ニューデリー",
        1380,
        "3,287,000",
        "ヒンディー",
        "ヒンドゥー",
        1947,
        [3120,657]
    ],
    [
        "サウジアラビア王国",
        [2840,780],
        "リヤド",
        33,
        "2,150,000",
        "アラビア",
        "イスラム教スンナ派",
        1932,
        [2680,699]
    ],
    [
        "トルコ共和国",
        [2645,595],
        "アンカラ",
        83,
        "783,600",
        "トルコ",
        "イスラム教スンナ派",
        1923,
        [2567,573]
    ],
    [
        "南アフリカ共和国",
        [2590,1390],
        "プレトリア(行政)",
        57,
        "1,220,000",
        "ズールー語,コサ",
        "プロテスタント",
        1961,
        [2431,1343]
    ],
    [
        "ブラジル連邦共和国",
        [1580,1260],
        "ブラジリア",
        209,
        "8,516,000",
        "ポルトガル",
        "カトリック",
        1822,
        [1260,989]
    ],
    [
        "アルゼンチン共和国",
        [1445,1490],
        "ブエノスアイレス",
        45,
        "2,780,000",
        "スペイン",
        "カトリック",
        1816,
        [1264,1346]
    ],
    [
        "メキシコ合衆国",
        [920,840],
        "メキシコシティ",
        126,
        "1,973,000",
        "スペイン",
        "カトリック",
        1821,
        [694,690]
    ],
    [
        "ヨーロッパ連合",
        [2278,465],
        "ブリュッセル",
        447,
        "4,290,000",
        "ヨーロッパ語圏",
        "キリスト教",
        1958,
        [2089,227]
    ],
    [
        "オランダ王国",
        [2290,450],
        "アムステルダム",
        17,
        "41,864",
        "オランダ",
        "ｶﾄﾘｯｸ,ﾌﾟﾛﾃｽﾀﾝﾄ",
        1815,
        [2272,440]
    ],
    [
        "ベルギー王国",
        [2278,465],
        "ブリュッセル",
        11,
        "30,528",
        "ｵﾗﾝﾀﾞ語,ﾌﾗﾝｽ語,ﾄﾞｲﾂ",
        "カトリック",
        1830,
        [2261,465]
    ],
    [
        "朝鮮民主主義人民共和国",
        [3865,605],
        "平壌",
        25,
        "120,500",
        "朝鮮",
        "巫俗,天道教",
        1948,
        [3854,567]
    ],
    [
        "中華民国",
        [3803,778],
        "台北(臨時)",
        23,
        "36,200",
        "中国",
        "仏教,道教",
        1912,
        [3796,780]
    ],
    [
        "エジプト・アラブ共和国",
        [2630,720],
        "カイロ",
        98,
        "1,010,000",
        "アラビア",
        "ｲｽﾗﾑ教ｽﾝﾅ派,ｺﾌﾟﾄ正教会",
        1922,
        [2551,704]
    ],
    [
        "エチオピア連邦民主共和国",
        [2730,965],
        "アディスアベバ",
        120,
        "1,104,000",
        "アムハラ",
        "エチオピア正教会",
        1995,
        [2659,907]
    ],
    [
        "ガーナ共和国",
        [2212,1005],
        "アクラ",
        30,
        "238,537",
        "英",
        "ペンテコステ派",
        1957,
        [2185,951],
    ]
]
const country_1914=[
    [           //1914
        "大日本帝国",
        [4045,645], //座標
        "東京",     //首都
        "協商",     //参加陣営
        "紀元前660",     //建国年
        [3796,471] //国旗
    ],
    [
        "ロシア帝国",
        [2620,350],
        "サンクトペテルブルク",
        "協商",
        "1721",
        [2466,92]
    ],
    [
        "ドイツ帝国",
        [2385,445],
        "ベルリン",
        "中央同盟",
        "1871",
        [2226,416]
    ],
    [
        "オーストリア＝ハンガリー帝国",
        [2440,500],
        "ウィーン",
        "中央同盟",
        "1457",
        [2353,470]
    ],
    [
        "ｸﾞﾚｰﾄﾌﾞﾘﾃﾝ及びｱｲﾙﾗﾝﾄﾞ連合王国",
        [2214,452],
        "ロンドン",
        "協商",
        "1707",
        [0,0]
    ],
    [
        "フランス共和国",
        [2250,490],
        "パリ",
        "協商",
        "1792",
        [1498,464],
    ],
    [
        "イタリア王国",
        [2385,570],
        "ローマ",
        "協商",
        "1861",
        [2314,524]
    ],
    [
        "オスマン帝国",
        [2595,580],
        "イスタンブール",
        "中央同盟",
        "1792",
        [2567,575]
    ],
    [
        "アメリカ合衆国",
        [1205,605],
        "ワシントンD.C.",
        "協商",
        "1776",
        [0,0]
    ]
]

let Select = -1;        //選択した国
let Year = 2021;    //年
let Year_pos = 8;

window.onload=function(){       //初期設定
    gScreen = document.createElement( "canvas" );   //仮想画面1初期設定
    gScreen.width=Vscreen_width;
    gScreen.height=Vscreen_height;

    gScreen2 = document.createElement( "canvas" );   //仮想画面2初期設定
    gScreen2.width=Vscreen2_width;
    gScreen2.height=Vscreen2_height;

    setTimeout(Resize,100);     //最初の画面サイズ
    setTimeout(Resize,200);     //最初の画面サイズ

    setInterval("Paint()", 100);    //秒間100
    document.getElementById('main').addEventListener('mousedown', mousedown);        //マウス押す
    document.getElementById('main').addEventListener('mousemove', mousemove);        //マウス動かす
    document.getElementById('main').addEventListener('mouseup', mouseup);        //マウス離す
    document.getElementById('main').addEventListener('mouseout', mouseup);        //マウス離す
    window.addEventListener("mousewheel", mousewheel);                             //マウスホイール
    image.src = "images/world2021.png";

    country=country_2021;

}

function Paint(){
    let X=viewX-view_width/2;
    let Y=viewY-view_height/2;

    if(X<0)viewX=4719+view_width/2;
    if(X>4719)viewX=view_width/2;
    if(Y<0)viewY=view_height/2;
    if(Y+view_height>2170)viewY=2170-view_height/2;

    const	ca = document.getElementById( "main" );
    const	canvas = ca.getContext( "2d" );
    canvas.imageSmoothingEnabled=canvas.msimageSmoothingEnabled=0;


    const	g = gScreen.getContext( "2d" );                 //仮想画面1
    g.imageSmoothingEnabled=g.msimageSmoothingEnabled=0; 
    Show(g);
    canvas.drawImage(gScreen, viewX-view_width/2, viewY-view_height/2, view_width, view_height, 0, 0, ca.width, ca.height);

    if(Select!=-1){
    const	g2 = gScreen2.getContext( "2d" );                 //仮想画面1
    g2.clearRect(0, 0, Vscreen2_width, Vscreen2_height)
    g2.imageSmoothingEnabled=g.msimageSmoothingEnabled=0; 
    Show2(g2);
    canvas.drawImage(gScreen2, ca.width-Vscreen2_width, -20, Vscreen2_width, Vscreen2_height);
    }

        image5.src = "images/size.png";
        canvas.drawImage(image5, 5, 5, 105, 105);
        canvas.font = "bold 20px 'ＭＳ ゴシック'";
        canvas.fillStyle = "black";
        if(Size>150){
                Size=150;
            }
        if(Size>=100)canvas.fillText(Size+"%", 10, 65);
        if(Size<100)canvas.fillText(Size+"%", 21, 65);
}

function Show(g){
    image.src = "images/world"+ Year +".png";
    g.drawImage(image, 0, 0, 4719, 2170);
    g.drawImage(image, 4719, 0, 4719, 2170);

    if(Select!=-1){
        image3.src = "images/country_"+ Year +"/"+ Select +".png";
        g.drawImage(image3, country[Select][Year_pos][0], country[Select][Year_pos][1]);
        if(country[Select][1][0]<4000)g.drawImage(image3, country[Select][Year_pos][0]+4719, country[Select][Year_pos][1]);
    }

    image2.src = "images/capital.png";
    //画面中央
    for(let i=0; i<country.length;i++){
        let capital=20;
        if(Number(country[i][4].replace(/,/, '') )<50000 && Year==2021)capital=12;
        if(i==19 && Select!=i)capital=12;
        g.drawImage(image2, country[i][1][0]-(capital-20)/2, country[i][1][1]-(capital-20)/2, capital, capital);
        if(country[i][1][0]<4000)g.drawImage(image2, country[i][1][0]+4719-(capital-20)/2, country[i][1][1]-(capital-20)/2, capital, capital);
    }
}

function Show2(g){
    image4.src = "images/close.png";
    g.globalAlpha = 0.5;
    g.fillStyle = 'black';
    g.fillRect(0, 0, Vscreen2_width, Vscreen2_height);

    g.globalAlpha = 1;
    g.font = "bold 20px 'ＭＳ ゴシック'";
    g.fillStyle = "white";

    g.fillText(country[Select][0], 10, 60);

    g.font = "bold 18px 'ＭＳ ゴシック'";
    if(Year==2021){
        if(country[Select][0]!="ヨーロッパ連合"){
            g.fillText("首都 :"+  country[Select][2], 30, 100);
            g.fillText("人口 :約"+  country[Select][3] +"M", 30, 130);
                g.fillText("面積 :約"+  country[Select][4] +"km²", 30, 160);
            g.fillText("主な言語 :"+  country[Select][5] +"語", 30, 190);
            g.fillText("主な宗教 :"+  country[Select][6] , 30, 220);
            g.fillText("建国年 :"+  country[Select][7] +"年", 30, 250);
        }else {
            g.fillText("本部 :"+  country[Select][2], 30, 100);
            g.fillText("人口 :約"+  country[Select][3] +"M", 30, 130);
            g.fillText("面積 :約"+  country[Select][4] +"km²", 30, 160);
            g.fillText("言語 :"+  country[Select][5] , 30, 190);
            g.fillText("主な宗教 :"+  country[Select][6] , 30, 220);
            g.fillText("設立年 :"+  country[Select][7] +"年", 30, 250);
        }
    }else {
        g.fillText("首都 :"+  country[Select][2], 30, 100);
        g.fillText("参加陣営 :"+  country[Select][3], 30, 130);
        g.fillText("建国年 :"+  country[Select][4] +"年", 30, 160);
    }
    g.drawImage(image4, 125, 300, 80, 40);
}

function doubleclick(event){     //ダブルクリック
    event.preventDefault();
}

function mousewheel(event){
    let wheel = parseInt(event.wheelDelta/24);

    Size=Size+wheel;
    Resize();
}

function mousedown(event){     //マウス押す
    if(event.which==1){
    swipeX=event.offsetX;
    swipeY=event.offsetY;
}}

function mouseup(event){     //マウス離す
    let X=event.offsetX,Y=event.offsetY;
    if(SwipeTrriger==false){
        if(X > 8 && X < 50 && Y > 9 && Y < 40 && Size<150){
            Size=Size+5;
            SwipeTrriger=true;
            Resize();
        }else if(X > 8 && X < 50 && Y > 71 && Y < 100 && Size>50){
            Size=Size-5;
            SwipeTrriger=true;
            Resize();
        }else if(X > 58 && X < 110 && Y > 5 && Y < 55){
            if(Year==2021){
                Year_pos=5;
                country=country_1914;
                Year=1914;
                document.getElementById("year").innerText=1914;
            }else if(Year==1914){
                Year_pos=8;
                country=country_2021;
                Year=2021;
                document.getElementById("year").innerText=2021;
            }
            Select=-1;
            SwipeTrriger=true;
        }
    }
    if(document.getElementById( "main" ).width-X < 225 && document.getElementById( "main" ).width-X > 145 && Select!=-1 && Y < 320 && Y > 280 && SwipeTrriger==false){
        Select=-1;
        Paint();
        SwipeTrriger=true;
    }
        if(SwipeTrriger==false){
    X = viewX +event.offsetX*(100/Size) - view_width/2;
    Y = viewY +event.offsetY*(100/Size) - view_height/2;

    let capital=20,t=-1;
    country.forEach(function(value,index){
        if(Number(value[4].replace(/,/, '') )<50000 && Year==2021)capital=12;
        if(Select!=index){
            if(value[1][0] < X && value[1][0] + capital -(capital-20)/2 > X && value[1][1] < Y && value[1][1] + capital -(capital-20)/2 > Y){
                t=index;
                Paint();
            }else if(value[1][0]+4719 < X && value[1][0]+4719 + capital -(capital-20)/2 > X && value[1][1] < Y && value[1][1] + capital -(capital-20)/2 > Y){
                t=index;
                Paint();
            }
        }
    })

    if(t!=-1)Select=t;
    }

    swipeX=-1;
    swipeY=-1;
    SwipeTrriger=false;
}

function mousemove(event){          //マウス移動
    if(swipeX!=-1 && swipeY!=-1){
    let moveX=(swipeX-event.offsetX)*100/Size;
    let moveY=(swipeY-event.offsetY)*100/Size;
    
    viewX=viewX+moveX;
    viewY=viewY+moveY;

    swipeX=event.offsetX;
    swipeY=event.offsetY;
    SwipeTrriger=true;

    Paint();
}}



window.onresize=function(){     //画面のサイズ変更を検知してサイズ更新
    Resize();
}
function Resize(){          //サイズ計算と同期
    const	ca = document.getElementById( "main" );

    const screen_width = document.documentElement.clientWidth;    //画面横サイズ
    const screen_height = document.documentElement.clientHeight;  //画面縦サイズ

    ca.width=screen_width-8;
    ca.height=screen_height-85;

    if(Size<50)Size=50;
    if(Size>150)Size=150;

    view_width=ca.width*(100/Size);
    view_height=ca.height*(100/Size);

    Paint();            //ペイント
}