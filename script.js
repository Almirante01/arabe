document.body.innerHTML = `
<div style="font-size:60px; direction:rtl;">
${highlight("مُدَرِّسٌ")}
</div>
`;

function highlight(text){
  let result = "";

  for (let char of text) {
    if (char === "\u064E") result += '<span style="color:blue">َ</span>';
    else if (char === "\u0650") result += '<span style="color:green">ِ</span>';
    else if (char === "\u064F") result += '<span style="color:red">ُ</span>';
    else if (char === "\u0652") result += '<span style="color:gray">ْ</span>';
    else if (char === "\u0651") result += '<span style="color:purple">ّ</span>';
    else result += char;
  }

  return result;
}
