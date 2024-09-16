export default function isColliding() {
  const elem1 = document.getElementsByClassName("start")[0];
  const group = document.getElementsByClassName("x");
  const elem3 = document.getElementsByClassName("bac-end")[0];

  const rect1 = elem1.getBoundingClientRect();
  for (let i = 0; i < group.length; i++) {
    const rect2 = group[i].getBoundingClientRect();
    let isColl = !(
      rect1.right < rect2.left ||
      rect1.left > rect2.right ||
      rect1.bottom < rect2.top ||
      rect1.top > rect2.bottom
    );
    if (isColl) {
      return "lose";
    }
    let rect3 = elem3.getBoundingClientRect();
    if (
      !(
        rect1.right < rect3.left ||
        rect1.left > rect3.right ||
        rect1.bottom < rect3.top ||
        rect1.top > rect3.bottom
      )
    ) {
      return "win";
    }
  }

  return;
}
