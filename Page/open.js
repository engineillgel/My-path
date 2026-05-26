/**
 * 开屏动画时间线控制
 *
 * 动画阶段（时间从页面 load 事件开始计算）：
 * ─────────────────────────────────────────────────────────
 *  0ms    页面加载完成，两个黑色半屏遮住博客，中间白线可见
 *  500ms  黑色块开始向两侧滑出（CSS transition 3s）
 *  1500ms 中间白线开始从 3px 扩展为全屏白色（CSS transition 3s）
 *  3500ms 黑色块完全滑出视口
 *  4500ms 白线完全展开
 *  5000ms 隐藏遮罩容器和白线，露出下方博客页面
 * ─────────────────────────────────────────────────────────
 *
 * 关键概念：
 * - setTimeout 从 load 事件触发开始独立计时，互不等待
 * - 嵌套 setTimeout 可以实现"前一个动作完成后等待 N 毫秒再执行"
 * - CSS transition 时间必须和 JS setTimeout 时间协调，否则动画不同步
 * - display: none 不可过渡，必须等 CSS 过渡完成后再执行
 */

window.addEventListener('load', () => {
  const container = document.getElementById('splashContainer');
  const centerLine = document.getElementById('splashCenterLine');

  // 阶段1：页面加载 500ms 后触发黑色块移动
  setTimeout(() => {
    container.classList.add('open');

    // 阶段2：同时白线开始扩展
    // 这个 setTimeout 嵌套在阶段1内部，确保相对时序：500ms + 1000ms = 1500ms
    setTimeout(() => {
      // 以下四个属性从初始值过渡到目标值，耗时 3s（由 CSS transition 控制）
      centerLine.style.width = '100vw';            
      centerLine.style.left = '50%';               // 保持左边缘在 50% 位置
      centerLine.style.background = '#fff';         
      centerLine.style.transform = 'translateX(-50%)'; // 向左偏移自身一半，保持居中扩展
    });
  }, 500);

  // 阶段3：5000ms 后（白线展开完毕），移除所有遮罩
  // 5000ms > 1500ms + 3000ms(过渡) = 4500ms，留有 500ms 余量
  setTimeout(() => {
    container.style.display = 'none';
    centerLine.style.display = 'none';
  }, 5000);
});
