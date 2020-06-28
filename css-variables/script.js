const inputs = document.querySelectorAll(".controls input");
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));

function handleUpdate() {
  // spacing和blur有单位px，base没单位
  // this.dataset用来获取data-*属性
  // 每一个input都有name属性，value属性
  const suffix = this.dataset.sizing || "";

  // 将style属性添加到document的根节点
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}
