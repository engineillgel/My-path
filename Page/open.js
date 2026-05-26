window.addEventListener('load', () => {
  const container = document.getElementById('container');
  const centerLine = document.getElementById('centerLine');//元素变量

  // 页面加载后 500ms 启动动画
  setTimeout(() => {
    container.classList.add('open');
    centerLine.style.width = '50vw';
    centerLine.style.left = '50%';
    centerLine.style.background = '#fff';
    centerLine.style.transform = 'translateX(50%)';
    container.open.splash__left.borderRadius = '0 0 300% 0';
    container.open.splash__right.borderRadius = '0 0  0 300% ';
  })
});
//   // 动画结束后移除所有遮罩
// //   setTimeout(() => {
// //     container.style.display = 'none';
// //     centerLine.style.display = 'none';
// //   }, 2500);
// });