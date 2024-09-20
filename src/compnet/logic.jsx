export default function isColliding() {
  const elem1 = document.getElementsByClassName("start")[0];
  const group = document.getElementsByClassName("x");
  const elem3 = document.getElementsByClassName("bac-end")[0];
  const elemJ = document.getElementsByClassName("j")[0];
  const rect1 = elem1.getBoundingClientRect();
  const elemSV = document.getElementsByClassName("sv");

  // check point
  if (elemJ) {
    const rectJ = elemJ.getBoundingClientRect();
    if (
      !(
        rect1.right < rectJ.left ||
        rect1.left > rectJ.right ||
        rect1.bottom < rectJ.top ||
        rect1.top > rectJ.bottom
      )
    ) {
      elemJ.style.display = "none";
      return "j";
    }
  }
  //
  if (elemSV) {
    for (let i = 0; i < elemSV.length; i++) {
      const rectsv = elemSV[i].getBoundingClientRect();
      let isColl = !(
        rect1.right < rectsv.left ||
        rect1.left > rectsv.right ||
        rect1.bottom < rectsv.top ||
        rect1.top > rectsv.bottom
      );
      if (isColl) {
        return "sv";
      }
    }
  }

  // check obstacle
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
  }
  // ckeck end
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
  return;
}

export function is() {
  const group = document.getElementsByClassName("m");
  const elem1 = document.getElementsByClassName("start-spam")[0];
  const container = document.getElementsByClassName("container")[0];
  const r = container.getBoundingClientRect();
  if (elem1) {
    const rect1 = elem1.getBoundingClientRect();
    for (let i = 0; i < group.length; i++) {
      const rect2 = group[i].getBoundingClientRect();
      const a = { t: [0, 0], l: [0, 0] };

      let isColl = !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
      );
      if (isColl) {
        return {
          ...a,
          t: [
            rect2.top - r.top,
            Number(rect2.top - r.top) + Number(rect2.height),
          ],
          l: [
            rect2.left - r.left,
            Number(rect2.left - r.left) + Number(rect2.width),
          ],
        };
      }
    }
  }
}
export function isSV() {
  const group = document.getElementsByClassName("sv");
  const elem1 = document.getElementsByClassName("start-spam")[0];
  const container = document.getElementsByClassName("container")[0];
  const r = container.getBoundingClientRect();
  if (elem1) {
    const rect1 = elem1.getBoundingClientRect();
    for (let i = 0; i < group.length; i++) {
      const rect2 = group[i].getBoundingClientRect();
      const a = { t: [0, 0], l: [0, 0] };

      let isColl = !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
      );
      if (isColl) {
        return {
          ...a,
          t: [
            rect2.top - r.top,
            Number(rect2.top - r.top) + Number(rect2.height),
          ],
          l: [
            rect2.left - r.left,
            Number(rect2.left - r.left) + Number(rect2.width),
          ],
        };
      }
    }
  }
}
