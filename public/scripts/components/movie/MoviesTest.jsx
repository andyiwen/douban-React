import React      from 'react';
import ReactDOM   from 'react-dom';

/* 假数据 */
var fromsDatas = {
    "fileName": "1.jpg"
    , "title": "H T T"
    , "desc": "Here he comes Here comes Speed Racer."
    , "imageDatas": [
      {
        "fileName": "1.jpg"
        , "title": "H T T"
        , "desc": "Here he comes Here comes Speed Racer."
      },
      {
        "fileName": "2.jpg"
        , "title": "H T T"
        , "desc": "Here he comes Here comes Speed Racer."
      },
      {
        "fileName": "3.jpg"
        , "title": "H T T"
        , "desc": "Here he comes Here comes Speed Racer."
      },
      {
        "fileName": "4.jpg"
        , "title": "H T T"
        , "desc": "Here he comes Here comes Speed Racer."
      }
    ]
};
/*
console.log(1234);
console.log(fromsDatas);
console.log(fromsDatas.imageDatas);
 */
var imageURL = '/libs/images/movie/testImg/1.jpg';

fromsDatas.imageDatas = (function getImageURL(fromsDatasArr){
  for (var i = 0, j = fromsDatasArr.length; i < j; i++) {
    var singleImageData = fromsDatasArr[i];

    singleImageData.imageURL = '/libs/images/movie/testImg/' + singleImageData.fileName;

    fromsDatasArr[i] = singleImageData;
  }
  // console.log(fromsDatasArr);

  return fromsDatasArr;
})(fromsDatas.imageDatas);


/* 选电影/选电视剧内容组件 */
class ImgFigure extends React.Component {
    
    styles() {
        return({
          abc: {
              width: '40px'
            , height: '40px'
          }
        })
    }
       
  render() {
    // console.log(this);
    return (
      <figure>
       <img className="imgarea" src={this.props.data.imageURL} style={this.styles().abc} />
       <figcaption>
         <h2></h2>
       </figcaption>
     </figure>
    );
  }
}
/* 选电影/选电视剧内容组件--End */

module.exports = ImgFigure;


/* 选电影/选电视剧区域整体组件 */
class MoviesTest extends React.Component {
  constructor() {   // 构造函数
    super();
    this.state = {
      filmTitle: ['热门','最新','经典','豆瓣高分','冷门佳片','华语','欧美','韩国'],
      selected: '热门',
      loading: true,
      data: [],
      currentData: {}
    }
  }

  render() {
    let controllerUnits= [],
      imgFigures = [];

    fromsDatas.imageDatas.forEach(function (value, index) {
      imgFigures.push(<ImgFigure key={index} ref={'imgFigure' + index} data={value} />);
    });

    return (
      <div className = "movies_test">
        <div className = "aera">
          <img src={imageURL} />
        </div>

        <section ref="stage" className="stage">
          <section className="img-sec">
            {imgFigures}
          </section>
          <nav className="controller-nav">
            {controllerUnits}
          </nav>
        </section>
      </div>
    );
  }

  componentDidMount() {
    let value = this.state.selected;
    this.getData(value);
    // console.log(123);
    // console.log(this.refs);

    // 首先拿到舞台的大小
    var stageDOM = ReactDOM.findDOMNode(this.refs.stage),
    // var stageDOM = this.refs.stage.getDOMNode(),
        stageW = stageDOM.scrollWidth,
        stageH = stageDOM.scrollHeight,
        halfStageW = Math.ceil(stageW / 2),
        halfStageH = Math.ceil(stageH / 2);

    // 拿到一个imageFigure的大小
    var imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure0),
    // var imgFigureDOM = this.refs.imgFigure0.getDOMNode(),
        imgW = imgFigureDOM.scrollWidth,
        imgH = imgFigureDOM.scrollHeight,
        halfImgW = Math.ceil(imgW / 2),
        halfImgH = Math.ceil(imgH / 2);

    console.log(halfImgW);
    console.log(halfImgW);

    // 计算中心图片的位置点
    // this.Constant.centerPos = {
    //     left: halfStageW - halfImgW,
    //     top: halfStageH - halfImgH
    // };
  }

  getData(value) {
    // 判断data数组中是否已有该标题对应的数据，如果有则将该值赋给currentData并返回
    for(let item of this.state.data) {
      if (item.name.includes(value)) {
        this.setState({
          loading: false,
          selected: value,
          currentData: item
        });
        return;
      }
    }
    // 如果data中没有该数据则通过Ajax请求并保存
    let url = this.props.source + encodeURIComponent(value + '电影');
    $.get(url, (results) => {
      this.setState({
        loading: false,
        selected: value,
        currentData: results.data
      });
      this.state.data.push(results.data);                // 将新返回的数据添加到数组中
    });
  }
}
/* 选电影/选电视剧区域整体组件--End */

/* 添加选电影/选电视组件到节点中 */
ReactDOM.render(<MoviesTest source = '/?fliterName=' />,
                document.getElementById('moviesTest'));

module.exports = MoviesTest;
