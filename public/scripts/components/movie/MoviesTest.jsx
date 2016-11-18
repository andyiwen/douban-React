import React from 'react';
import ReactDOM from 'react-dom';
// import ChooseMovieItem from './ChooseMovieItem';
// import ChooseMovieTitle from './ChooseMovieTitle';

var imageDatas = [
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
];

// var imageURL = require('./img/1.jpg');
// var imageURL = require('../img/1.jpg');
// var imageURL = require('../images/footer/1.jpg');
// var imageURL = require('/libs/images/movie/middleImg/1.jpg');

var imageURL = '/libs/images/movie/testImg/1.jpg';


imageDatas = (function getImageURL(imageDatasArr){
	for (var i = 0, j = imageDatasArr.length; i < j; i++) {
		var singleImageData = imageDatasArr[i];

		singleImageData.imageURL = '/libs/images/movie/testImg/' + singleImageData.fileName;

		imageDatasArr[i] = singleImageData;
	}

	return imageDatasArr;
})(imageDatas);

// imageDatas = getImageURL(imageDatas);



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
    // 电影列表
    let filmList = [];

    console.log(11);
    
    // 什么时候为 false
    if(!this.state.loading) {
      // 当前数据   state
      let currentData = this.state.currentData;
      if (currentData && currentData.movies) {
        // currentData  movieItem => movies数组对象，index 下标
        // forEach 循环

        // currentData.movies.forEach((movieItem, index) => {
        //   filmList.push(
        //     <ChooseMovieItem data = {movieItem} key = {index} />
        //   );
        // });
      }
    }
    return (
      <div className = "movies_test">
      	<div className = "aera">
      		<img src={imageURL} />
      	</div>

      	<section className="stage">
      		<section className="img-sec">
      		</section>
      		<nav className="controller-nav">
      		</nav>
      	</section>

        
      </div>
    );
  }
  componentDidMount() {
    let value = this.state.selected;
    this.getData(value);
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
