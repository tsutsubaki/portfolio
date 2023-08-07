$(".openbtn9").click(function () {
    $(this).toggleClass('active');
});

/*
bubbly({
    blur: 5,
    bubbleFunc: () => `hsla(${Math.random() * 50}, 100%, 50%, ${Math.random() * 0.3})`,
    canvas: document.querySelector("#back"),  //  アニメーションする要素を指定
   colorStart: '#C4DFE6',
   colorStop: '#07575B',
    compose: 'source-over',//色ブレンド
   shadowColor: '#fafafa',
      velocityFunc:() => Math.random() * 1.4,//速さ
      radiusFunc:() => 30 + Math.random() * 3,//大きさ
    
    /*
    colorStart: '#a0d8ef',
    colorStop: '#07575B',
    
    blur: 1,//ぼかし
    compose: 'source-over',//色ブレンド
    shadowColor: '#1995AD'
   bubbleFunc:() => `hsla(${Math.random() * 50}, 100%, 50%, .3)`//色彩（hsla)
    
});*/
/*
   白っぽい色
   #fafafa

    水色
    colorStart: '#a0d8ef',
    colorStop: '#006788',

  　深いブルー
   colorStart: '#C4DFE6',
    colorStop: '#07575B',
    
    爽やかブルー
     colorStart: '#F1F1F2',
    colorStop: '#1995AD',
    
    明るいグレー
    colorStart: '#BCBABE',
    */