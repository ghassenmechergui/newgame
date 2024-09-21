export default function isColliding() {
  const elem1 = document.getElementsByClassName("start")[0];
  const group = document.getElementsByClassName("x");
  const elem3 = document.getElementsByClassName("bac-end")[0];
  const elemJ = document.getElementsByClassName("j");
  const rect1 = elem1.getBoundingClientRect();
  const elemSV = document.getElementsByClassName("sv");

  // check point
  if (elemJ) {
    for (let i = 0; i < elemJ.length; i++) {
      const rectJ = elemJ[i].getBoundingClientRect();
      let isColl = !(
        rect1.right < rectJ.left ||
        rect1.left > rectJ.right ||
        rect1.bottom < rectJ.top ||
        rect1.top > rectJ.bottom
      );
      if (isColl) {
        elemJ[i].style.display = "none";
        return "j";
      }
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

  return;
}

export function is(key) {
  const group = document.getElementsByClassName("m");
  const elem1 = document.getElementsByClassName("start-spam")[0];
  const container = document.getElementsByClassName("container")[0];
  const r = container.getBoundingClientRect();
  if (elem1) {
    const rect1 = elem1.getBoundingClientRect();
    const i = {
      t: [
        rect1.top - r.top + 5,
        Number(rect1.top - r.top) + Number(rect1.height) - 5,
      ],
      l: [
        rect1.left - r.left + 5,
        Number(rect1.left - r.left) + Number(rect1.width) - 5,
      ],
    };
    const f = [];
    let a = { t: [0, 0], l: [0, 0] };
    for (let i = 0; i < group.length; i++) {
      const rect2 = group[i].getBoundingClientRect();

      let isColl = !(
        rect1.right < rect2.left ||
        rect1.left > rect2.right ||
        rect1.bottom < rect2.top ||
        rect1.top > rect2.bottom
      );
      if (isColl) {
        f.push({
          t: [
            rect2.top - r.top,
            Number(rect2.top - r.top) + Number(rect2.height),
          ],
          l: [
            rect2.left - r.left,
            Number(rect2.left - r.left) + Number(rect2.width),
          ],
        });
        /*
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
        */
      }
    }

    if (key == "ArrowUp") {
      for (let n = 0; n < f.length; n++) {
        if (i.l[1] > f[n].l[0] && i.l[0] < f[n].l[1]) {
          a = f[n];
        }
      }
    } else if (key == "ArrowDown") {
      for (let n = 0; n < f.length; n++) {
        if (i.l[1] > f[n].l[0] && i.l[0] < f[n].l[1]) {
          a = f[n];
        }
      }
    } else if (key == "ArrowLeft") {
      for (let n = 0; n < f.length; n++) {
        if (i.t[1] > f[n].t[0] && i.t[0] < f[n].t[1]) {
          a = f[n];
        }
      }
    } else if (key == "ArrowRight") {
      for (let n = 0; n < f.length; n++) {
        if (i.t[1] > f[n].t[0] && i.t[0] < f[n].t[1]) {
          a = f[n];
        }
      }
    }

    return a || { t: [0, 0], l: [0, 0] };
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
export function reseteJ() {
  const elemJ = document.getElementsByClassName("j");
  for (let i = 0; i < elemJ.length; i++) {
    elemJ[i].style.display = "block";
  }
}
