function cetak() {
  const doc = document.getElementById("cv");
  html2pdf()
    .set({
      margin: 1,
      filename: "cv ats",
      html2canvas: {
        scale: 3,
        logging: true,
        dpi: 192,
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
    })
    .from(doc)
    .save();
}
let countEdu = 0;
function addEdu() {
  countEdu++;
  const container = document.querySelector(".container");

  const newEdu = document.createElement("div");
  newEdu.className = "education ct" + countEdu;
  container.appendChild(newEdu);

  const newHeadEdu = document.createElement("div");
  newHeadEdu.className = "head-edu ct" + countEdu;
  newEdu.appendChild(newHeadEdu);

  b = document.createElement("b");
  c = document.createElement("b");
  b.setAttribute("contenteditable", "true");
  c.setAttribute("contenteditable", "true");
  b.textContent = "Nama sekolah/Universitas";
  c.textContent = "Tahun Masuk - Lulus";
  newHeadEdu.appendChild(b);
  newHeadEdu.appendChild(c);

  const newMajor = document.createElement("div");
  newMajor.className = "majoring ct" + countEdu;
  newEdu.appendChild(newMajor);

  p = document.createElement("p");
  q = document.createElement("b");
  p.setAttribute("contenteditable", "true");
  q.setAttribute("contenteditable", "true");
  p.textContent = "Jurusan";
  q.textContent = "Nilai/IPK";
  newMajor.appendChild(p);
  newMajor.appendChild(q);
}

let countExp = 0;
function addExp() {
  countExp++;
  const containerExp = document.querySelector(".container-exp");
  const exp = document.querySelector(".exp");
  const headExp = document.querySelector(".head-exp");

  const newExp = document.createElement("div");
  newExp.className = "exp ct" + countExp;
  containerExp.appendChild(newExp);

  const newHeadExp = document.createElement("div");
  newHeadExp.className = "head-exp ct" + countExp;
  newExp.appendChild(newHeadExp);

  const b = document.createElement("b");
  const c = document.createElement("b");
  b.setAttribute("contenteditable", "true");
  c.setAttribute("contenteditable", "true");
  b.textContent = "Nama Instansi";
  c.textContent = "Tahun Masuk - Keluar";
  newHeadExp.appendChild(b);
  newHeadExp.appendChild(c);

  const p = document.createElement("p");
  const uraiankerja = document.createElement('div')
  uraiankerja.className = 'uraiankerja'
  uraiankerja.setAttribute("contenteditable", "true");
 
  const q = document.createElement("li");
  p.setAttribute("contenteditable", "true");
  p.textContent = "Jabatan/Posisi";
  q.textContent = "Uraian Pekerjaan";
  newExp.appendChild(p);
  newExp.appendChild(uraiankerja)
  uraiankerja.appendChild(q);
}

let countSkill = 0;
function addSkill() {
  countSkill++;
  const skill = document.querySelector(".skill");
  const newSkill = document.createElement("li");
  newSkill.setAttribute("contenteditable", "true");
  newSkill.className = "skill ct" + countSkill;
  newSkill.textContent = "Uraian Kemampuan";
  skill.appendChild(newSkill);
}

let countCert = 1;
function addCert() {
  if (countCert == 0) {
    const cv = document.getElementById("cv");
    const newSertTitle = document.createElement("h3");
    newSertTitle.className = "certif";
    newSertTitle.textContent = "SERTIFIKASI PELATIHAN";
    const newHr = document.createElement("hr");
    newHr.className = "certline";
    cv.appendChild(newSertTitle);
    cv.appendChild(newHr);
    const newSertContainer = document.createElement("div");
    newSertContainer.className = "container-cert";
    cv.appendChild(newSertContainer);
    const newSert = document.createElement("div");
    newSert.className = "cert";
    newSertContainer.appendChild(newSert);
    const newHeadSert = document.createElement("div");
    newHeadSert.className = "head-cert";
    newSert.appendChild(newHeadSert);
    const a = document.createElement("b");
    const b = document.createElement("b");
    a.textContent = "Nama Pelatihan - Nomor Sertifikat";
    b.textContent = "Tahun mulai - Selesai";
    a.setAttribute("contenteditable", "true");
    b.setAttribute("contenteditable", "true");
    newHeadSert.appendChild(a);
    newHeadSert.appendChild(b);

    const uraiansert = document.createElement('div')
    uraiansert.className = 'uraianpelatihan'
    const newlisert = document.createElement("li");
    newlisert.textContent = "Uraian Pelatihan";
    uraiansert.setAttribute("contenteditable", "true");
    newSert.appendChild(uraiansert)
    uraiansert.appendChild(newlisert);
    countCert++;
  } else {
    countCert++;
    const containerCert = document.querySelector(".container-cert");
    const cert = document.querySelector(".cert");

    const newCert = document.createElement("div");
    newCert.className = "cert ct" + countCert;
    containerCert.appendChild(newCert);

    const newHeadCert = document.createElement("div");
    newHeadCert.className = "head-cert ct" + countCert;
    newCert.appendChild(newHeadCert);

    const x = document.createElement("b");
    const y = document.createElement("b");
    const t = document.createElement("li");
    x.textContent = "Nama Pelatihan - Nomor Sertifikat";
    y.textContent = "Tahun mulai - Selesai";
    t.textContent = "Uraian Pelatihan";
    x.setAttribute("contenteditable", "true");
    y.setAttribute("contenteditable", "true");
    
    newHeadCert.appendChild(x);
    newHeadCert.appendChild(y);

    const uraiansert = document.createElement('div')
    uraiansert.className = 'uraianpelatihan'
    const newlisert = document.createElement("li");
    newlisert.textContent = "Uraian Pelatihan";
    uraiansert.setAttribute("contenteditable", "true");
    newCert.appendChild(uraiansert)
    uraiansert.appendChild(newlisert);
  }
}

function removeEdu() {
  const delEdu = document.querySelector(".education.ct" + countEdu);
  if (countEdu == 0) {
    alert("Tidak bisa dihapus lagi");
  } else {
    delEdu.remove();
    countEdu--;
  }
}

function removeExp() {
  const delExp = document.querySelector(".exp.ct" + countExp);
  if (countExp == 0) {
    alert("Tidak bisa dihapus lagi");
  } else {
    delExp.remove();
    countExp--;
  }
}

function removeSkill() {
  const delSkill = document.querySelector(".skill.ct" + countSkill);
  if (countSkill == 0) {
    alert("Tidak bisa dihapus lagi");
  } else {
    delSkill.remove();
    countSkill--;
  }
}

function removeCert() {
  const delCert = document.querySelector(".cert.ct" + countCert);
  const delCert2 = document.querySelector(".cert");
  const certLine = document.querySelector(".certline");
  const containerCert = document.querySelector(".certif");
  const divcert = document.querySelector(".container-cert");

  if (countCert == 1) {
    delCert2.remove();
    containerCert.remove();
    certLine.remove();
    divcert.remove();
    countCert--;
  } else if (countCert == 0) {
    alert("Tidak bisa dihapus lagi");
  } else {
    delCert.remove();
    countCert--;
  }
}
