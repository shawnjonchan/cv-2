// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('skills'));

// 指定图表的配置项和数据
var option = {
  title: {
    text: "个人能力",
  },
 
  grid: {
    left: "2%",
    right: "4%",
    bottom: "6%",
    containLabel: true,
  },
  xAxis: {
    type: "value",
    boundaryGap: [0, 0.01],
  },
  yAxis: {
    type: "category",
    data: [
      "项目开发",
      "沟通能力",
      "编程基础",
      "React 全家桶",
      "Vue 全家桶",
      "静态页面",
    ],
  },
  series: [
    {
      name: "能力表",
      type: "bar",
      data: [80, 70, 85, 80, 90, 95],
    },
  ],
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);