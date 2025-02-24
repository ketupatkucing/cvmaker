function cetak(){
    const doc = document.getElementById('cv')
    html2pdf()
    .set({
        margin : 1,
        filename :'cv ats',
        html2canvas: {
            scale:3,
            logging:true,
            dpi: 192
        },
        jsPDF: {
            unit:'mm',
            format: 'a4',
            orientation: 'portrait'
        }
    })
    .from(doc)
    .save()
}
let countEdu = 0
function addEdu(){
    countEdu++
   const container = document.querySelector('.container')
   const  edu = document.querySelector('.education')
   const headEdu = document.querySelector('.head-edu')
   const majoring = document.querySelector('.majoring')

   const newEdu = document.createElement('div')
    newEdu.className = 'education ct'+countEdu
    container.appendChild(newEdu)


    const newHeadEdu = document.createElement('div')
    newHeadEdu.className = 'head-edu ct'+countEdu
    newHeadEdu.setAttribute('contenteditable','true')
    newEdu.appendChild(newHeadEdu)

    b = document.createElement('b')
    c = document.createElement('b')
    b.textContent = "Nama sekolah/Universitas"
    c.textContent ="tahun masuk - lulus"
    newHeadEdu.appendChild(b)
    newHeadEdu.appendChild(c)

    const newMajor = document.createElement('div')
    newMajor.className = 'majoring ct'+countEdu
    newMajor.setAttribute('contenteditable','true')
    newEdu.appendChild(newMajor)

    p = document.createElement('p')
    q = document.createElement('b')
    p.textContent = "Jurusan"
    q.textContent ="Nilai/IPK"
    newMajor.appendChild(p)
    newMajor.appendChild(q)

}



let countExp = 0
function addExp(){
    countExp++
   const containerExp = document.querySelector('.container-exp')
   const exp = document.querySelector('.exp')
   const headExp = document.querySelector('.head-exp')
  

   const newExp = document.createElement('div')
    newExp.className = 'exp ct'+countExp
    containerExp.appendChild(newExp)

    const newHeadExp = document.createElement('div')
    newHeadExp.className = 'head-exp ct'+countExp
    newExp.appendChild(newHeadExp)

    b = document.createElement('b')
    c = document.createElement('b')
    b.textContent = "Nama Instansi"
    c.textContent ="Tahun Masuk - Keluar"
    newHeadExp.appendChild(b)
    newHeadExp.appendChild(c)


    p = document.createElement('p')
    q = document.createElement('li')
    p.textContent = "Jabatan/Posisi"
    q.textContent ="Uraian Pekerjaan"
    newExp.appendChild(p)
    newExp.appendChild(q)

}


let countSkill = 0
function addSkill(){
    countSkill++
    const skill = document.querySelector('.skill')
    const newSkill = document.createElement('li')
    newSkill.textContent = 'Uraian Kemampuan'
    skill.appendChild(newSkill)
}

let countCert = 0
function addCert(){
    countCert++
    const containerCert = document.querySelector('.container-cert')
    const cert = document.querySelector('.cert')

    const newCert = document.createElement('div')
    newCert.className = 'cert ct'+countCert
    containerCert.appendChild(newCert)

    const newHeadCert = document.createElement('div')
    newHeadCert.className = 'head-cert ct'+countCert
    newCert.appendChild(newHeadCert)
    
    const x = document.createElement('b')
    const y = document.createElement('b')   
    const t = document.createElement('li')
    x.textContent = 'Nama Pelatihan - Nomor Sertifikat'
    y.textContent = 'Tahun mulai - Selesai'
    t.textContent = 'Uraian Pelatihan'
   
    newHeadCert.appendChild(x)
    newHeadCert.appendChild(y)
    newCert.appendChild(t)


}