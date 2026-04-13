function renderArabic() {

  let html = `
  <div style="font-size:60px; direction:rtl; display:flex; gap:5px; justify-content:center;">
    
    <div>م<span style="color:red">ُ</span></div>
    <div>د<span style="color:blue">َ</span></div>
    <div>ر<span style="color:green">ِ</span><span style="color:purple">ّ</span></div>
    <div>س<span style="color:gray">ْ</span></div>
  
  </div>
  `;

  document.body.innerHTML = html;
}

renderArabic();
